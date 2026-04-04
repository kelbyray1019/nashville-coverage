module.exports=[9059,(a,b,c)=>{b.exports=a.r(1276)},6195,(a,b,c)=>{b.exports=a.x("react-dom",()=>require("react-dom"))},7208,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"setAttributesFromProps",{enumerable:!0,get:function(){return g}});let d={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"},e=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"];function f(a){return["async","defer","noModule"].includes(a)}function g(a,b){for(let[c,g]of Object.entries(b)){if(!b.hasOwnProperty(c)||e.includes(c)||void 0===g)continue;let h=d[c]||c.toLowerCase();"SCRIPT"===a.tagName&&f(h)?a[h]=!!g:a.setAttribute(h,String(g)),(!1===g||"SCRIPT"===a.tagName&&f(h)&&(!g||"false"===g))&&(a.setAttribute(h,""),a.removeAttribute(h))}}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},6373,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={cancelIdleCallback:function(){return g},requestIdleCallback:function(){return f}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f="u">typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(a){let b=Date.now();return self.setTimeout(function(){a({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-b))}})},1)},g="u">typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(a){return clearTimeout(a)};("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},5032,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={default:function(){return t},handleClientScriptLoad:function(){return q},initScriptLoader:function(){return r}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(4550),g=a.r(852),h=a.r(8171),i=f._(a.r(6195)),j=g._(a.r(7669)),k=a.r(175),l=a.r(7208),m=a.r(6373),n=new Map,o=new Set,p=a=>{let{src:b,id:c,onLoad:d=()=>{},onReady:e=null,dangerouslySetInnerHTML:f,children:g="",strategy:h="afterInteractive",onError:j,stylesheets:k}=a,m=c||b;if(m&&o.has(m))return;if(n.has(b)){o.add(m),n.get(b).then(d,j);return}let p=()=>{e&&e(),o.add(m)},q=document.createElement("script"),r=new Promise((a,b)=>{q.addEventListener("load",function(b){a(),d&&d.call(this,b),p()}),q.addEventListener("error",function(a){b(a)})}).catch(function(a){j&&j(a)});f?(q.innerHTML=f.__html||"",p()):g?(q.textContent="string"==typeof g?g:Array.isArray(g)?g.join(""):"",p()):b&&(q.src=b,n.set(b,r)),(0,l.setAttributesFromProps)(q,a),"worker"===h&&q.setAttribute("type","text/partytown"),q.setAttribute("data-nscript",h),k&&(a=>{if(i.default.preinit)return a.forEach(a=>{i.default.preinit(a,{as:"style"})})})(k),document.body.appendChild(q)};function q(a){let{strategy:b="afterInteractive"}=a;"lazyOnload"===b?window.addEventListener("load",()=>{(0,m.requestIdleCallback)(()=>p(a))}):p(a)}function r(a){a.forEach(q),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(a=>{let b=a.id||a.getAttribute("src");o.add(b)})}function s(a){let{id:b,src:c="",onLoad:d=()=>{},onReady:e=null,strategy:f="afterInteractive",onError:g,stylesheets:l,...n}=a,{updateScripts:q,scripts:r,getIsSsr:s,appDir:t,nonce:u}=(0,j.useContext)(k.HeadManagerContext);u=n.nonce||u;let v=(0,j.useRef)(!1);(0,j.useEffect)(()=>{let a=b||c;v.current||(e&&a&&o.has(a)&&e(),v.current=!0)},[e,b,c]);let w=(0,j.useRef)(!1);if((0,j.useEffect)(()=>{if(!w.current){if("afterInteractive"===f)p(a);else"lazyOnload"===f&&("complete"===document.readyState?(0,m.requestIdleCallback)(()=>p(a)):window.addEventListener("load",()=>{(0,m.requestIdleCallback)(()=>p(a))}));w.current=!0}},[a,f]),("beforeInteractive"===f||"worker"===f)&&(q?(r[f]=(r[f]||[]).concat([{id:b,src:c,onLoad:d,onReady:e,onError:g,...n,nonce:u}]),q(r)):s&&s()?o.add(b||c):s&&!s()&&p({...a,nonce:u})),t){if(l&&l.forEach(a=>{i.default.preinit(a,{as:"style"})}),"beforeInteractive"===f)if(!c)return n.dangerouslySetInnerHTML&&(n.children=n.dangerouslySetInnerHTML.__html,delete n.dangerouslySetInnerHTML),(0,h.jsx)("script",{nonce:u,dangerouslySetInnerHTML:{__html:`(self.__next_s=self.__next_s||[]).push(${JSON.stringify([0,{...n,id:b}])})`}});else return i.default.preload(c,n.integrity?{as:"script",integrity:n.integrity,nonce:u,crossOrigin:n.crossOrigin}:{as:"script",nonce:u,crossOrigin:n.crossOrigin}),(0,h.jsx)("script",{nonce:u,dangerouslySetInnerHTML:{__html:`(self.__next_s=self.__next_s||[]).push(${JSON.stringify([c,{...n,id:b}])})`}});"afterInteractive"===f&&c&&i.default.preload(c,n.integrity?{as:"script",integrity:n.integrity,nonce:u,crossOrigin:n.crossOrigin}:{as:"script",nonce:u,crossOrigin:n.crossOrigin})}return null}Object.defineProperty(s,"__nextScript",{value:!0});let t=s;("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},1056,(a,b,c)=>{b.exports=a.r(5032)},647,a=>{"use strict";var b=a.i(9168),c=a.i(7068),d=a.i(2759),e=a.i(3590),f=a.i(7342),g=a.i(8171),h=a.i(9059),i=a.i(1056);let j=`
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
`;a.s(["default",0,function(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(h.default,{children:[(0,g.jsx)("meta",{charSet:"UTF-8"}),(0,g.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,g.jsx)("title",{children:"Nashville Coverage Tracker"})]}),(0,g.jsx)("div",{dangerouslySetInnerHTML:{__html:j}}),(0,g.jsx)(i.default,{src:"/app.js",strategy:"afterInteractive"})]})}],3715);var k=a.i(3715),l=a.i(9193);let m=(0,d.hoist)(k,"default"),n=(0,d.hoist)(k,"getStaticProps"),o=(0,d.hoist)(k,"getStaticPaths"),p=(0,d.hoist)(k,"getServerSideProps"),q=(0,d.hoist)(k,"config"),r=(0,d.hoist)(k,"reportWebVitals"),s=(0,d.hoist)(k,"unstable_getStaticProps"),t=(0,d.hoist)(k,"unstable_getStaticPaths"),u=(0,d.hoist)(k,"unstable_getStaticParams"),v=(0,d.hoist)(k,"unstable_getServerProps"),w=(0,d.hoist)(k,"unstable_getServerSideProps"),x=new b.PagesRouteModule({definition:{kind:c.RouteKind.PAGES,page:"/index",pathname:"/",bundlePath:"",filename:""},distDir:".next",relativeProjectDir:"",components:{App:f.default,Document:e.default},userland:k}),y=(0,l.getHandler)({srcPage:"/index",config:q,userland:k,routeModule:x,getStaticPaths:o,getStaticProps:n,getServerSideProps:p});a.s(["config",0,q,"default",0,m,"getServerSideProps",0,p,"getStaticPaths",0,o,"getStaticProps",0,n,"handler",0,y,"reportWebVitals",0,r,"routeModule",0,x,"unstable_getServerProps",0,v,"unstable_getServerSideProps",0,w,"unstable_getStaticParams",0,u,"unstable_getStaticPaths",0,t,"unstable_getStaticProps",0,s],647)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__0_k93gj._.js.map