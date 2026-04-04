module.exports = [
"[externals]/react-dom [external] (react-dom, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}),
"[project]/pages/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/script.js [ssr] (ecmascript)");
;
;
;
const bodyHTML = `
<header>
  <h1>Nashville Coverage Tracker</h1>
  <div class="header-actions">
    <button class="btn" onclick="exportJSON()">Export JSON</button>
    <label class="btn" style="cursor:pointer">
      Import JSON
      <input type="file" accept=".json" style="display:none" onchange="importJSON(event)">
    </label>
    <button class="btn btn-primary" onclick="openModal()">+ Add Song</button>
  </div>
</header>

<div class="main">

  <!-- Coverage Score Panel -->
  <div class="panel" id="scorePanel">
    <div class="panel-title">Coverage Score</div>
    <div class="score-grid" id="scoreGrid">
      <div class="score-card">
        <div class="score-label">A-Tier (Know Cold)</div>
        <div class="score-value" id="scoreA">&mdash;</div>
        <div class="score-sub" id="scoreASub"></div>
      </div>
      <div class="score-card">
        <div class="score-label">B-Tier (Know Cold or Can Fake)</div>
        <div class="score-value" id="scoreB">&mdash;</div>
        <div class="score-sub" id="scoreBSub"></div>
      </div>
      <div class="score-card">
        <div class="score-label">C-Tier (Know Cold or Can Fake)</div>
        <div class="score-value" id="scoreC">&mdash;</div>
        <div class="score-sub" id="scoreCSub"></div>
      </div>
      <div class="score-card">
        <div class="score-label">Overall Weighted Score</div>
        <div class="score-value" id="scoreOverall">&mdash;</div>
        <div class="score-sub">A&times;60% + B&times;30% + C&times;10%</div>
      </div>
    </div>
    <div class="alert-bar hidden" id="alertBar">
      <span>&#9888;</span> <span id="alertText"></span>
    </div>
  </div>

  <!-- Weekly Workflow Panel -->
  <div class="panel">
    <div class="panel-title">This Week&#39;s Focus &mdash; A-Tier Gaps</div>
    <div class="weekly-songs" id="weeklySongs"></div>
  </div>

  <!-- Controls -->
  <div class="controls">
    <div class="search-wrap">
      <input type="text" id="searchInput" placeholder="Search title or artist&hellip;" oninput="renderTable()">
    </div>
    <div class="filter-pills">
      <div class="pill active" data-filter="all" onclick="setFilter(this, 'all')">All</div>
      <div class="pill" data-filter="a-gaps" onclick="setFilter(this, 'a-gaps')">A-Tier Gaps</div>
      <div class="pill" data-filter="cant-fake" onclick="setFilter(this, 'cant-fake')">Can&#39;t Fake</div>
      <div class="pill" data-filter="needs-review" onclick="setFilter(this, 'needs-review')">Needs Review</div>
    </div>
  </div>

  <!-- Table meta -->
  <div class="table-meta" id="tableMeta"></div>

  <!-- Main Table -->
  <div class="table-wrap">
    <table id="songTable">
      <thead>
        <tr>
          <th class="sortable" onclick="setSort('title')">Title <span class="sort-arrow" id="sort-title"></span></th>
          <th class="sortable" onclick="setSort('artist')">Artist <span class="sort-arrow" id="sort-artist"></span></th>
          <th class="sortable" onclick="setSort('tier')">Tier <span class="sort-arrow" id="sort-tier"></span></th>
          <th class="sortable" onclick="setSort('status')">Status <span class="sort-arrow" id="sort-status"></span></th>
          <th class="sortable" onclick="setSort('lastReviewed')">Reviewed <span class="sort-arrow" id="sort-lastReviewed"></span></th>
          <th>Notes</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody id="songBody"></tbody>
    </table>
  </div>

</div>

<!-- Add/Edit Modal -->
<div class="modal-overlay hidden" id="modalOverlay" onclick="closeModal(event)">
  <div class="modal" role="dialog" aria-modal="true">
    <div class="modal-header">
      <div class="modal-title" id="modalTitle">Add Song</div>
      <button class="modal-close" onclick="closeModal()">&times;</button>
    </div>
    <div class="form-group">
      <label class="form-label">Title *</label>
      <input type="text" id="fTitle" placeholder="e.g. Jolene">
    </div>
    <div class="form-group">
      <label class="form-label">Artist *</label>
      <input type="text" id="fArtist" placeholder="e.g. Dolly Parton">
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Tier</label>
        <select id="fTier">
          <option value="A">A &mdash; Must Know</option>
          <option value="B" selected>B &mdash; Should Know</option>
          <option value="C">C &mdash; Nice to Have</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Status</label>
        <select id="fStatus">
          <option value="Don't Know" selected>Don&#39;t Know</option>
          <option value="Can Fake">Can Fake</option>
          <option value="Know Cold">Know Cold</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Last Reviewed</label>
      <input type="date" id="fLastReviewed">
    </div>
    <div class="form-group">
      <label class="form-label">Notes</label>
      <textarea id="fNotes" placeholder="Key, common requests, capo position, etc."></textarea>
    </div>
    <div class="form-group">
      <label class="form-label">Chart Path</label>
      <input type="text" id="fChart" placeholder="/path/to/chart.pdf">
    </div>
    <div class="modal-footer">
      <button class="btn" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="saveSong()">Save</button>
    </div>
  </div>
</div>

<!-- Confirm Delete Modal -->
<div class="modal-overlay hidden" id="confirmOverlay" onclick="closeConfirm(event)">
  <div class="modal" style="max-width:360px" role="dialog" aria-modal="true">
    <div class="modal-header">
      <div class="modal-title">Delete Song</div>
      <button class="modal-close" onclick="closeConfirm()">&times;</button>
    </div>
    <p class="confirm-msg" id="confirmMsg"></p>
    <div class="modal-footer">
      <button class="btn" onclick="closeConfirm()">Cancel</button>
      <button class="btn btn-primary btn-danger" onclick="confirmDelete()">Delete</button>
    </div>
  </div>
</div>

<!-- Toast -->
<div class="toast" id="toast"></div>
`;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        charSet: "UTF-8"
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0"
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                        children: "Nashville Coverage Tracker"
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/index.js",
                lineNumber: 165,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                dangerouslySetInnerHTML: {
                    __html: bodyHTML
                }
            }, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 170,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: "/app.js",
                strategy: "afterInteractive"
            }, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 171,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__050a49a._.js.map