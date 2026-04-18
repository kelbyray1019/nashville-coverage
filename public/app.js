// ─── State ───────────────────────────────────────────────────────────────────
let songs = [];
let editingId = null;
let deletingId = null;
let sortField = 'tier';
let sortDir = 1; // 1 = asc, -1 = desc
let activeFilter = 'all';

// ─── Load / Save ─────────────────────────────────────────────────────────────
async function load() {
  try {
    const res = await fetch('/api/songs');
    const data = await res.json();
    songs = Array.isArray(data) ? data : [];
  } catch(e) {
    songs = [];
  }
  refresh();
}

function save() {
  fetch('/api/songs', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(songs)
  });
}

// ─── ID helper ───────────────────────────────────────────────────────────────
function genId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

// ─── Scoring ─────────────────────────────────────────────────────────────────
function pct(num, den) {
  if (den === 0) return null;
  return Math.round((num / den) * 100);
}

function scoreColor(p) {
  if (p === null) return '';
  if (p >= 80) return 'good';
  if (p >= 50) return 'ok';
  return 'bad';
}

function updateScore() {
  const a = songs.filter(s => s.tier === 'A');
  const b = songs.filter(s => s.tier === 'B');
  const c = songs.filter(s => s.tier === 'C');

  const aKC = a.filter(s => s.status === 'Know Cold').length;
  const bOK = b.filter(s => s.status === 'Know Cold' || s.status === 'Can Fake').length;
  const cOK = c.filter(s => s.status === 'Know Cold' || s.status === 'Can Fake').length;

  const pA = pct(aKC, a.length);
  const pB = pct(bOK, b.length);
  const pC = pct(cOK, c.length);

  // weighted overall
  let overall = null;
  const totalWeight = (a.length ? 60 : 0) + (b.length ? 30 : 0) + (c.length ? 10 : 0);
  if (totalWeight > 0) {
    let weighted = 0;
    if (a.length) weighted += (pA ?? 0) * 60;
    if (b.length) weighted += (pB ?? 0) * 30;
    if (c.length) weighted += (pC ?? 0) * 10;
    overall = Math.round(weighted / totalWeight);
  }

  const fmt = p => p === null ? '—' : p + '%';

  setScore('A', fmt(pA), `${aKC} / ${a.length} songs`, pA);
  setScore('B', fmt(pB), `${bOK} / ${b.length} songs`, pB);
  setScore('C', fmt(pC), `${cOK} / ${c.length} songs`, pC);

  const ovEl = document.getElementById('scoreOverall');
  ovEl.textContent = fmt(overall);
  ovEl.className = 'score-value ' + scoreColor(overall);

  // Alert
  const aGaps = a.filter(s => s.status !== 'Know Cold').length;
  const alertBar = document.getElementById('alertBar');
  const alertText = document.getElementById('alertText');
  if (aGaps > 0) {
    alertText.textContent = `${aGaps} A-tier song${aGaps > 1 ? 's' : ''} not yet Know Cold — your highest priority gaps.`;
    alertBar.classList.remove('hidden');
  } else {
    alertBar.classList.add('hidden');
  }

  // Weekly focus
  renderWeekly();
}

function setScore(tier, val, sub, p) {
  document.getElementById('score' + tier).textContent = val;
  document.getElementById('score' + tier).className = 'score-value ' + scoreColor(p);
  document.getElementById('score' + tier + 'Sub').textContent = sub;
}

function snoozeSong(id) {
  const song = songs.find(s => s.id === id);
  if (!song) return;
  const until = new Date();
  until.setDate(until.getDate() + 12);
  song.snoozedUntil = until.toISOString().slice(0, 10);
  song.inFocus = false;
  save();
  refresh();
}

function addToFocus(id) {
  const s = songs.find(x => x.id == id);
  if (!s || s.inFocus) return;
  s.inFocus = true;
  save();
  refresh();
  toast('Added to focus');
}

function renderWeekly() {
  const el = document.getElementById('weeklySongs');
  const todayStr = new Date().toISOString().slice(0, 10);

  // Manual focus songs: explicitly added, not Know Cold, not snoozed
  const manualFocus = songs.filter(s =>
    s.inFocus &&
    s.status !== 'Know Cold' &&
    !(s.snoozedUntil && todayStr < s.snoozedUntil)
  );

  // Auto-fill: A-tier, not Know Cold, not snoozed, not already in manual focus
  const aGaps = songs.filter(s =>
    s.tier === 'A' &&
    s.status !== 'Know Cold' &&
    !s.inFocus &&
    !(s.snoozedUntil && todayStr < s.snoozedUntil)
  );

  // Sort auto-fill: Don't Know first, then by oldest reviewed
  aGaps.sort((a, b) => {
    const statusOrder = {"Don't Know": 0, 'Can Fake': 1, 'Know Cold': 2};
    const sd = statusOrder[a.status] - statusOrder[b.status];
    if (sd !== 0) return sd;
    const ad = a.lastReviewed || '0000-00-00';
    const bd = b.lastReviewed || '0000-00-00';
    return ad < bd ? -1 : 1;
  });

  const needed = Math.max(0, 3 - manualFocus.length);
  const focus = [...manualFocus, ...aGaps.slice(0, needed)];

  if (focus.length === 0) {
    el.innerHTML = '<div class="weekly-empty">All A-tier songs marked Know Cold — great work!</div>';
    return;
  }

  el.innerHTML = focus.map(s => `
    <div class="weekly-song">
      <div class="weekly-song-info">
        <div class="weekly-song-title">${esc(s.title)}</div>
        <div class="weekly-song-artist">${esc(s.artist)}</div>
      </div>
      <span class="status-badge ${statusClass(s.status)}" data-song-id="${s.id}" title="Click to cycle: Don't Know → Can Fake → Know Cold">${esc(s.status)}</span>
      <a class="btn btn-sm" href="https://open.spotify.com/search/${encodeURIComponent(s.title + ' ' + s.artist)}" target="_blank" rel="noopener" title="Search on Spotify">Spotify</a>
      <button class="btn btn-sm btn-snooze" data-snooze-id="${s.id}" title="Snooze for 12 days">Snooze</button>
    </div>
  `).join('');
}

// ─── Filter & Sort ────────────────────────────────────────────────────────────
function getFiltered() {
  const q = document.getElementById('searchInput').value.trim().toLowerCase();
  const today = new Date();

  return songs.filter(s => {
    // search
    if (q && !s.title.toLowerCase().includes(q) && !s.artist.toLowerCase().includes(q)) return false;
    // filter
    if (activeFilter === 'a-gaps') return s.tier === 'A' && s.status !== 'Know Cold';
    if (activeFilter === 'cant-fake') return s.status === "Don't Know";
    if (activeFilter === 'needs-review') {
      if (!s.lastReviewed) return true;
      const diff = (today - new Date(s.lastReviewed)) / (1000 * 60 * 60 * 24);
      return diff >= 30;
    }
    return true;
  });
}

const SORT_ORDER = {
  tier: {A: 0, B: 1, C: 2},
  status: {"Know Cold": 0, 'Can Fake': 1, "Don't Know": 2}
};

function getSorted(list) {
  return [...list].sort((a, b) => {
    let av = a[sortField] ?? '';
    let bv = b[sortField] ?? '';
    if (sortField === 'tier') { av = SORT_ORDER.tier[av] ?? 9; bv = SORT_ORDER.tier[bv] ?? 9; }
    else if (sortField === 'status') { av = SORT_ORDER.status[av] ?? 9; bv = SORT_ORDER.status[bv] ?? 9; }
    else { av = av.toString().toLowerCase(); bv = bv.toString().toLowerCase(); }
    if (av < bv) return -1 * sortDir;
    if (av > bv) return 1 * sortDir;
    return 0;
  });
}

function setSort(field) {
  if (sortField === field) sortDir *= -1;
  else { sortField = field; sortDir = 1; }
  renderTable();
}

function setFilter(el, f) {
  activeFilter = f;
  document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  renderTable();
}

// ─── Render Table ─────────────────────────────────────────────────────────────
function esc(str) {
  return String(str ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function statusClass(s) {
  if (s === 'Know Cold') return 'status-kc';
  if (s === 'Can Fake') return 'status-cf';
  return 'status-dk';
}

function fmtDate(d) {
  if (!d) return '—';
  const parts = d.split('-');
  return `${parts[1]}/${parts[2]}/${parts[0].slice(2)}`;
}

function isOld(d) {
  if (!d) return true;
  const diff = (new Date() - new Date(d)) / (1000 * 60 * 60 * 24);
  return diff >= 30;
}

function renderTable() {
  const filtered = getFiltered();
  const sorted = getSorted(filtered);
  const tbody = document.getElementById('songBody');

  // Update sort arrows
  ['title','artist','tier','status','lastReviewed'].forEach(f => {
    const el = document.getElementById('sort-' + f);
    if (!el) return;
    const th = el.parentElement;
    if (f === sortField) {
      el.textContent = sortDir === 1 ? '↑' : '↓';
      th.classList.add('sort-active');
    } else {
      el.textContent = '';
      th.classList.remove('sort-active');
    }
  });

  document.getElementById('tableMeta').textContent =
    `${sorted.length} of ${songs.length} song${songs.length !== 1 ? 's' : ''}`;

  if (sorted.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7"><div class="empty-state">
      <strong>${songs.length === 0 ? 'No songs yet' : 'No matches'}</strong>
      <p>${songs.length === 0 ? 'Click &quot;+ Add Song&quot; to get started.' : 'Try a different search or filter.'}</p>
    </div></td></tr>`;
    return;
  }

  tbody.innerHTML = sorted.map(s => {
    const old = isOld(s.lastReviewed);
    return `<tr>
      <td class="td-title" title="${esc(s.title)}">${esc(s.title)}</td>
      <td class="td-artist" title="${esc(s.artist)}">${esc(s.artist)}</td>
      <td><span class="tier-badge tier-${esc(s.tier)}">${esc(s.tier)}</span></td>
      <td><span class="status-badge ${statusClass(s.status)}" data-song-id="${s.id}" title="Click to cycle: Don't Know → Can Fake → Know Cold">${esc(s.status)}</span></td>
      <td><span class="reviewed-date ${old ? 'reviewed-old' : ''}">${fmtDate(s.lastReviewed)}</span></td>
      <td class="td-notes" title="${esc(s.notes)}">${esc(s.notes) || '—'}</td>
      <td>
        <div class="td-actions">
          <button class="btn btn-sm${s.inFocus ? ' btn-focus-added' : ''}" onclick="addToFocus('${s.id}')" title="Add to weekly focus" ${s.inFocus ? 'disabled' : ''}>Add+</button>
          <button class="btn btn-sm" onclick="openModal('${s.id}')" title="Edit">Edit</button>
          <button class="btn btn-sm btn-danger" onclick="openConfirm('${s.id}')" title="Delete">Del</button>
          <a class="btn btn-sm" href="https://open.spotify.com/search/${encodeURIComponent(s.title + ' ' + s.artist)}" target="_blank" rel="noopener" title="Search on Spotify">Spotify</a>
        </div>
      </td>
    </tr>`;
  }).join('');
}

// ─── Actions ──────────────────────────────────────────────────────────────────
const STATUS_CYCLE = ["Don't Know", 'Can Fake', 'Know Cold'];

function cycleStatus(id) {
  const s = songs.find(x => x.id == id);
  if (!s) return;
  const idx = STATUS_CYCLE.indexOf(s.status);
  s.status = STATUS_CYCLE[(idx + 1) % STATUS_CYCLE.length];
  s.lastReviewed = today();
  if (s.status === 'Know Cold') s.inFocus = false;
  save();
  refresh();
  toast(`Status → ${s.status}`);
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

// ─── Modal ────────────────────────────────────────────────────────────────────
function openModal(id) {
  editingId = id || null;
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.remove('hidden');

  if (id) {
    const s = songs.find(x => x.id === id);
    document.getElementById('modalTitle').textContent = 'Edit Song';
    document.getElementById('fTitle').value = s.title;
    document.getElementById('fArtist').value = s.artist;
    document.getElementById('fTier').value = s.tier;
    document.getElementById('fStatus').value = s.status;
    document.getElementById('fLastReviewed').value = s.lastReviewed || '';
    document.getElementById('fNotes').value = s.notes || '';
  } else {
    document.getElementById('modalTitle').textContent = 'Add Song';
    document.getElementById('fTitle').value = '';
    document.getElementById('fArtist').value = '';
    document.getElementById('fTier').value = 'B';
    document.getElementById('fStatus').value = "Don't Know";
    document.getElementById('fLastReviewed').value = '';
    document.getElementById('fNotes').value = '';
  }

  setTimeout(() => document.getElementById('fTitle').focus(), 50);
}

function closeModal(e) {
  if (e && e.target !== document.getElementById('modalOverlay')) return;
  document.getElementById('modalOverlay').classList.add('hidden');
  editingId = null;
}

function saveSong() {
  const title = document.getElementById('fTitle').value.trim();
  const artist = document.getElementById('fArtist').value.trim();
  if (!title || !artist) { toast('Title and artist are required'); return; }

  if (editingId) {
    const s = songs.find(x => x.id === editingId);
    s.title = title;
    s.artist = artist;
    s.tier = document.getElementById('fTier').value;
    s.status = document.getElementById('fStatus').value;
    s.lastReviewed = document.getElementById('fLastReviewed').value || null;
    s.notes = document.getElementById('fNotes').value.trim();
  } else {
    songs.push({
      id: genId(),
      title,
      artist,
      tier: document.getElementById('fTier').value,
      status: document.getElementById('fStatus').value,
      lastReviewed: document.getElementById('fLastReviewed').value || null,
      notes: document.getElementById('fNotes').value.trim()
    });
  }

  const wasEditing = !!editingId;
  save();
  closeModal();
  refresh();
  toast(wasEditing ? 'Song updated' : 'Song added');
}

// ─── Confirm Delete ───────────────────────────────────────────────────────────
function openConfirm(id) {
  deletingId = id;
  const s = songs.find(x => x.id === id);
  document.getElementById('confirmMsg').textContent =
    `Delete "${s.title}" by ${s.artist}? This cannot be undone.`;
  document.getElementById('confirmOverlay').classList.remove('hidden');
}

function closeConfirm(e) {
  if (e && e.target !== document.getElementById('confirmOverlay')) return;
  document.getElementById('confirmOverlay').classList.add('hidden');
  deletingId = null;
}

function confirmDelete() {
  songs = songs.filter(x => x.id !== deletingId);
  save();
  closeConfirm();
  refresh();
  toast('Song deleted');
}

// ─── Export / Import ──────────────────────────────────────────────────────────
function exportJSON() {
  const data = JSON.stringify({ version: 1, exported: new Date().toISOString(), songs }, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `nashville-coverage-${today()}.json`;
  a.click();
  toast('Exported');
}

function importJSON(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result);
      const imported = Array.isArray(data) ? data : (data.songs || []);
      if (!Array.isArray(imported)) throw new Error('Invalid format');
      let added = 0, updated = 0;
      imported.forEach(s => {
        const existing = songs.find(x =>
          x.title.trim().toLowerCase() === (s.title || '').trim().toLowerCase() &&
          x.artist.trim().toLowerCase() === (s.artist || '').trim().toLowerCase()
        );
        if (existing) {
          if (s.chart != null) { existing.chart = s.chart; updated++; }
        } else {
          songs.push({ ...s, id: genId() });
          added++;
        }
      });
      save();
      refresh();
      toast(`Imported ${added} new, ${updated} updated (${imported.length - added - updated} skipped)`);
    } catch(err) {
      toast('Import failed — invalid JSON');
    }
  };
  reader.readAsText(file);
  event.target.value = '';
}

// ─── Toast ────────────────────────────────────────────────────────────────────
let toastTimer;
function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2000);
}

// ─── Keyboard ─────────────────────────────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
    closeConfirm();
  }
  if (e.key === 'Enter' && !document.getElementById('modalOverlay').classList.contains('hidden')) {
    if (document.activeElement.tagName !== 'TEXTAREA') saveSong();
  }
});

// ─── Refresh ──────────────────────────────────────────────────────────────────
function refresh() {
  updateScore();
  renderTable();
}

// ─── Init ─────────────────────────────────────────────────────────────────────
load(); // async — calls refresh() internally after data loads

// Delegated click handler for status badges — more reliable than inline onclick
// in dynamically-set innerHTML across all browsers.
document.getElementById('songBody').addEventListener('click', function(e) {
  const badge = e.target.closest('[data-song-id]');
  if (badge) cycleStatus(badge.dataset.songId);
});

document.getElementById('weeklySongs').addEventListener('click', function(e) {
  const badge = e.target.closest('[data-song-id]');
  if (badge) cycleStatus(badge.dataset.songId);
  const snoozeBtn = e.target.closest('[data-snooze-id]');
  if (snoozeBtn) snoozeSong(snoozeBtn.dataset.snoozeId);
});
