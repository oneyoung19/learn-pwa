(function(e){function t(t){for(var n,s,i=t[0],l=t[1],u=t[2],c=0,h=[];c<i.length;c++)s=i[c],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&h.push(o[s][0]),o[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);p&&p(t);while(h.length)h.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,s=1;s<r.length;s++){var l=r[s];0!==o[l]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},a=[];function s(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"a6d79ebf","chunk-2d0a4f8b":"ad6808d1"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var u=new Error;a=function(t){l.onerror=l.onload=null,clearTimeout(c);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",u.name="ChunkLoadError",u.type=n,u.request=a,r[1](u)}o[e]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:l})}),12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/learn-pwa/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var p=u;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"4c7f":function(e,t,r){"use strict";r("5945")},"56d7":function(e,t,r){"use strict";r.r(t);var n=r("2b0e"),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("p",[e._v(e._s("VUE_APP_TARGET = "+e.target))]),t("p",[e._v("最终版自主控制更新策略——Not reload in Default")]),t("div",{attrs:{id:"nav"}},[t("span",{on:{click:e.handleClickHome}},[e._v("Home")]),e._v(" | "),t("span",{on:{click:e.handleClickAbout}},[e._v("About")]),e._v(" | "),t("span",{on:{click:e.handleClickStory}},[e._v("Story")])]),t("router-view"),t("SwNotifyButton")],1)},a=[],s=(r("14d9"),function(){var e=this,t=e._self._c;return e.updateExists?t("button",{staticClass:"btn",on:{click:e.refreshApp}},[e._v(" New version available! Click to update ")]):e._e()}),i=[],l={data(){return{refreshing:!1,registration:null,updateExists:!1}},created(){document.addEventListener("swUpdated",this.showRefreshUI,{once:!0}),navigator.serviceWorker&&navigator.serviceWorker.addEventListener("controllerchange",()=>{console.log("---controllerchange---",this.refreshing),this.refreshing||(this.refreshing=!0)})},methods:{showRefreshUI(e){this.registration=e.detail,this.updateExists=!0},refreshApp(){this.updateExists=!1,console.log("---refreshApp---",this.registration),this.registration&&this.registration.waiting&&this.registration.waiting.postMessage({type:"SKIP_WAITING"})}}},u=l,c=(r("4c7f"),r("2877")),p=Object(c["a"])(u,s,i,!1,null,"4036c150",null),h=p.exports,v={components:{SwNotifyButton:h},data(){return{target:""}},created(){const{VUE_APP_TARGET:e}=Object({NODE_ENV:"production",VUE_APP_TARGET:"SIT",BASE_URL:"/learn-pwa/"});this.target=e},methods:{handleClickHome(){this.$router.push({name:"Home"})},handleClickAbout(){this.$router.push({name:"About"})},handleClickStory(){this.$router.push({name:"Story"})}}},d=v,f=(r("d594"),Object(c["a"])(d,o,a,!1,null,null,null)),g=f.exports,_=r("8c4f"),b=function(){var e=this,t=e._self._c;return t("div",{staticClass:"home"},[t("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},m=[],k=function(){var e=this,t=e._self._c;return t("div",{staticClass:"hello"},[t("h1",[e._v(e._s(e.msg))]),e._m(0),t("h3",[e._v("Installed CLI Plugins")]),e._m(1),t("h3",[e._v("Essential Links")]),e._m(2),t("h3",[e._v("Ecosystem")]),e._m(3)])},w=[function(){var e=this,t=e._self._c;return t("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),t("br"),e._v(" check out the "),t("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e._self._c;return t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])]),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e._self._c;return t("ul",[t("li",[t("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),t("li",[t("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),t("li",[t("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),t("li",[t("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),t("li",[t("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e._self._c;return t("ul",[t("li",[t("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),t("li",[t("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),t("li",[t("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],j={name:"HelloWorld",props:{msg:String}},y=j,E=(r("65a2"),Object(c["a"])(y,k,w,!1,null,"e8d04502",null)),A=E.exports,x={name:"Home",components:{HelloWorld:A}},C=x,O=Object(c["a"])(C,b,m,!1,null,null,null),S=O.exports;n["a"].use(_["a"]);const P=[{path:"/",name:"Home",component:S},{path:"/about",name:"About",component:()=>r.e("about").then(r.bind(null,"f820"))},{path:"/story",name:"Story",component:()=>r.e("chunk-2d0a4f8b").then(r.bind(null,"095a"))}],T=new _["a"]({mode:"history",base:"/learn-pwa/",routes:P});var N=T,H=r("2f62");n["a"].use(H["a"]);var I=new H["a"].Store({state:{},mutations:{},actions:{},modules:{}}),U=r("9483");Object(U["a"])("/learn-pwa/service-worker.js",{ready(e){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB"),console.log(navigator.serviceWorker.controller)},registered(e){console.log("Service worker has been registered.")},cached(e){console.log("Content has been cached for offline use.")},updatefound(e){console.log("New content is downloading.")},updated(e){console.log("New content is available; please refresh."),console.log(e),document.dispatchEvent(new CustomEvent("swUpdated",{detail:e}))},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}}),n["a"].config.productionTip=!1,new n["a"]({router:N,store:I,render:e=>e(g)}).$mount("#app")},5945:function(e,t,r){},"65a2":function(e,t,r){"use strict";r("7bc2")},"72db":function(e,t,r){},"7bc2":function(e,t,r){},d594:function(e,t,r){"use strict";r("72db")}});
//# sourceMappingURL=app.356b5c8f.js.map