(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,955,(e,t,r)=>{var n={229:function(e){var t,r,n,o=e.exports={};function a(){throw Error("setTimeout has not been defined")}function i(){throw Error("clearTimeout has not been defined")}try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}var l=[],c=!1,u=-1;function d(){c&&n&&(c=!1,n.length?l=n.concat(l):u=-1,l.length&&f())}function f(){if(!c){var e=s(d);c=!0;for(var t=l.length;t;){for(n=l,l=[];++u<t;)n&&n[u].run();u=-1,t=l.length}n=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function v(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new p(e,t)),1!==l.length||c||s(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={exports:{}},i=!0;try{n[e](r,r.exports,a),i=!1}finally{i&&delete o[e]}return r.exports}a.ab="/ROOT/node_modules/next/dist/compiled/process/",t.exports=a(229)},461,(e,t,r)=>{"use strict";var n,o;t.exports=(null==(n=e.g.process)?void 0:n.env)&&"object"==typeof(null==(o=e.g.process)?void 0:o.env)?e.g.process:e.r(955)},7325,(e,t,r)=>{"use strict";var n=Symbol.for("react.element"),o=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),v=Symbol.iterator,y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,h={};function b(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}function g(){}function _(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=b.prototype;var w=_.prototype=new g;w.constructor=_,m(w,b.prototype),w.isPureReactComponent=!0;var S=Array.isArray,k=Object.prototype.hasOwnProperty,C={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function T(e,t,r){var o,a={},i=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)k.call(t,o)&&!O.hasOwnProperty(o)&&(a[o]=t[o]);var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===a[o]&&(a[o]=l[o]);return{$$typeof:n,type:e,key:i,ref:s,props:a,_owner:C.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var E=/\/+/g;function j(e,t){var r,n;return"object"==typeof e&&null!==e&&null!=e.key?(r=""+e.key,n={"=":"=0",":":"=2"},"$"+r.replace(/[=:]/g,function(e){return n[e]})):t.toString(36)}function P(e,t,r){if(null==e)return e;var a=[],i=0;return!function e(t,r,a,i,s){var l,c,u,d=typeof t;("undefined"===d||"boolean"===d)&&(t=null);var f=!1;if(null===t)f=!0;else switch(d){case"string":case"number":f=!0;break;case"object":switch(t.$$typeof){case n:case o:f=!0}}if(f)return s=s(f=t),t=""===i?"."+j(f,0):i,S(s)?(a="",null!=t&&(a=t.replace(E,"$&/")+"/"),e(s,r,a,"",function(e){return e})):null!=s&&(x(s)&&(l=s,c=a+(!s.key||f&&f.key===s.key?"":(""+s.key).replace(E,"$&/")+"/")+t,s={$$typeof:n,type:l.type,key:c,ref:l.ref,props:l.props,_owner:l._owner}),r.push(s)),1;if(f=0,i=""===i?".":i+":",S(t))for(var p=0;p<t.length;p++){var y=i+j(d=t[p],p);f+=e(d,r,a,y,s)}else if("function"==typeof(y=null===(u=t)||"object"!=typeof u?null:"function"==typeof(u=v&&u[v]||u["@@iterator"])?u:null))for(t=y.call(t),p=0;!(d=t.next()).done;)y=i+j(d=d.value,p++),f+=e(d,r,a,y,s);else if("object"===d)throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(r=String(t))?"object with keys {"+Object.keys(t).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return f}(e,a,"","",function(e){return t.call(r,e,i++)}),a}function R(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){(0===e._status||-1===e._status)&&(e._status=1,e._result=t)},function(t){(0===e._status||-1===e._status)&&(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},N={transition:null};function A(){throw Error("act(...) is not supported in production builds of React.")}r.Children={map:P,forEach:function(e,t,r){P(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return P(e,function(){t++}),t},toArray:function(e){return P(e,function(e){return e})||[]},only:function(e){if(!x(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=b,r.Fragment=a,r.Profiler=s,r.PureComponent=_,r.StrictMode=i,r.Suspense=d,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:N,ReactCurrentOwner:C},r.act=A,r.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),a=e.key,i=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,s=C.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)k.call(t,c)&&!O.hasOwnProperty(c)&&(o[c]=void 0===t[c]&&void 0!==l?l[c]:t[c])}var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];o.children=l}return{$$typeof:n,type:e.type,key:a,ref:i,props:o,_owner:s}},r.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},r.createElement=T,r.createFactory=function(e){var t=T.bind(null,e);return t.type=e,t},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:u,render:e}},r.isValidElement=x,r.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:R}},r.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},r.startTransition=function(e){var t=N.transition;N.transition={};try{e()}finally{N.transition=t}},r.unstable_act=A,r.useCallback=function(e,t){return $.current.useCallback(e,t)},r.useContext=function(e){return $.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return $.current.useDeferredValue(e)},r.useEffect=function(e,t){return $.current.useEffect(e,t)},r.useId=function(){return $.current.useId()},r.useImperativeHandle=function(e,t,r){return $.current.useImperativeHandle(e,t,r)},r.useInsertionEffect=function(e,t){return $.current.useInsertionEffect(e,t)},r.useLayoutEffect=function(e,t){return $.current.useLayoutEffect(e,t)},r.useMemo=function(e,t){return $.current.useMemo(e,t)},r.useReducer=function(e,t,r){return $.current.useReducer(e,t,r)},r.useRef=function(e){return $.current.useRef(e)},r.useState=function(e){return $.current.useState(e)},r.useSyncExternalStore=function(e,t,r){return $.current.useSyncExternalStore(e,t,r)},r.useTransition=function(){return $.current.useTransition()},r.version="18.3.1"},1788,(e,t,r)=>{"use strict";t.exports=e.r(7325)},1884,(e,t,r)=>{"use strict";var n=e.r(1788),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,a={},c=null,u=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,n)&&!l.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:o,type:e,key:c,ref:u,props:a,_owner:s.current}}r.Fragment=a,r.jsx=c,r.jsxs=c},1398,(e,t,r)=>{"use strict";t.exports=e.r(1884)},1705,(e,t,r)=>{"use strict";r._=function(e){return e&&e.__esModule?e:{default:e}}},3584,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"HeadManagerContext",{enumerable:!0,get:function(){return n}});let n=e.r(1705)._(e.r(1788)).default.createContext({})},4470,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},2456,(e,t,r)=>{"use strict";function n(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(n=function(e){return e?r:t})(e)}r._=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=n(t);if(r&&r.has(e))return r.get(e);var o={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=a?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(o,i,s):o[i]=e[i]}return o.default=e,r&&r.set(e,o),o}},4941,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return s}});let n=e.r(1788),o="u"<typeof window,a=o?()=>{}:n.useLayoutEffect,i=o?()=>{}:n.useEffect;function s(e){let{headManager:t,reduceComponentsToState:r}=e;function s(){if(t&&t.mountedInstances){let e=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(e))}}return o&&(t?.mountedInstances?.add(e.children),s()),a(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),a(()=>(t&&(t._pendingUpdate=s),()=>{t&&(t._pendingUpdate=s)})),i(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},963,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return y},defaultHead:function(){return d}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let a=e.r(1705),i=e.r(2456),s=e.r(1398),l=i._(e.r(1788)),c=a._(e.r(4941)),u=e.r(3584);function d(){return[(0,s.jsx)("meta",{charSet:"utf-8"},"charset"),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(4470);let p=["name","httpEquiv","charSet","itemProp"];function v(e){let t,r,n,o;return e.reduce(f,[]).reverse().concat(d().reverse()).filter((t=new Set,r=new Set,n=new Set,o={},e=>{let a=!0,i=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){i=!0;let r=e.key.slice(e.key.indexOf("$")+1);t.has(r)?a=!1:t.add(r)}switch(e.type){case"title":case"base":r.has(e.type)?a=!1:r.add(e.type);break;case"meta":for(let t=0,r=p.length;t<r;t++){let r=p[t];if(e.props.hasOwnProperty(r))if("charSet"===r)n.has(r)?a=!1:n.add(r);else{let t=e.props[r],n=o[r]||new Set;("name"!==r||!i)&&n.has(t)?a=!1:(n.add(t),o[r]=n)}}}return a})).reverse().map((e,t)=>{let r=e.key||t;return l.default.cloneElement(e,{key:r})})}let y=function({children:e}){let t=(0,l.useContext)(u.HeadManagerContext);return(0,s.jsx)(c.default,{reduceComponentsToState:v,headManager:t,children:e})};("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},9129,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={DecodeError:function(){return h},MiddlewareNotFoundError:function(){return w},MissingStaticPage:function(){return _},NormalizeError:function(){return b},PageNotFoundError:function(){return g},SP:function(){return y},ST:function(){return m},WEB_VITALS:function(){return a},execOnce:function(){return i},getDisplayName:function(){return d},getLocationOrigin:function(){return c},getURL:function(){return u},isAbsoluteUrl:function(){return l},isResSent:function(){return f},loadGetInitialProps:function(){return v},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return S}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let a=["CLS","FCP","FID","INP","LCP","TTFB"];function i(e){let t,r=!1;return(...n)=>(r||(r=!0,t=e(...n)),t)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>s.test(e);function c(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function u(){let{href:e}=window.location,t=c();return e.substring(t.length)}function d(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function v(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await v(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&f(r))return n;if(!n)throw Object.defineProperty(Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return n}let y="u">typeof performance,m=y&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class b extends Error{}class g extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class _ extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class w extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function S(e){return JSON.stringify({message:e.message,stack:e.stack})}},8678,(e,t,r)=>{t.exports=e.r(963)},4182,(e,t,r)=>{t.exports=e.r(1457)},477,e=>{"use strict";var t=e.i(1398),r=e.i(8678),n=e.i(4182);let o=`
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
`;e.s(["default",0,function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.default,{children:[(0,t.jsx)("meta",{charSet:"UTF-8"}),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,t.jsx)("title",{children:"Nashville Coverage Tracker"})]}),(0,t.jsx)("div",{dangerouslySetInnerHTML:{__html:o}}),(0,t.jsx)(n.default,{src:"/app.js",strategy:"afterInteractive"})]})}])},1899,(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",()=>e.r(477)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push(["/"])})},8761,e=>{e.v(t=>Promise.all(["static/chunks/0qkyt_e2n18cm.js"].map(t=>e.l(t))).then(()=>t(3594)))},8805,e=>{e.v(t=>Promise.all(["static/chunks/0txjufvf6ju__.js"].map(t=>e.l(t))).then(()=>t(9466)))}]);