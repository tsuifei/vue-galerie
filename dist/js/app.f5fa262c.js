(function(e){function n(n){for(var r,c,a=n[0],d=n[1],i=n[2],f=0,h=[];f<a.length;f++)c=a[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&h.push(o[c][0]),o[c]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(e[r]=d[r]);l&&l(n);while(h.length)h.shift()();return u.push.apply(u,i||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,c=1;c<t.length;c++){var a=t[c];0!==o[a]&&(r=!1)}r&&(u.splice(n--,1),e=d(d.s=t[0]))}return e}var r={},c={app:0},o={app:0},u=[];function a(e){return d.p+"js/"+({}[e]||e)+"."+{"chunk-1ca8d124":"4cb2f2dd","chunk-2d0c89f3":"9e235486","chunk-2d21de4f":"8979aebc","chunk-2d22d746":"7329fee0","chunk-3bf97362":"d9d51a09","chunk-4bec8d34":"d268627e","chunk-7e8251c0":"e04fa8b5","chunk-dbbe4a10":"1257dadc","chunk-dd2262c0":"7550807c"}[e]+".js"}function d(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.e=function(e){var n=[],t={"chunk-7e8251c0":1,"chunk-dbbe4a10":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-1ca8d124":"31d6cfe0","chunk-2d0c89f3":"31d6cfe0","chunk-2d21de4f":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-3bf97362":"31d6cfe0","chunk-4bec8d34":"31d6cfe0","chunk-7e8251c0":"e0410fe3","chunk-dbbe4a10":"9a9b624d","chunk-dd2262c0":"31d6cfe0"}[e]+".css",o=d.p+r,u=document.getElementsByTagName("link"),a=0;a<u.length;a++){var i=u[a],f=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(f===r||f===o))return n()}var h=document.getElementsByTagName("style");for(a=0;a<h.length;a++){i=h[a],f=i.getAttribute("data-href");if(f===r||f===o)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var r=n&&n.target&&n.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete c[e],l.parentNode.removeChild(l),t(u)},l.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(l)})).then((function(){c[e]=0})));var r=o[e];if(0!==r)if(r)n.push(r[2]);else{var u=new Promise((function(n,t){r=o[e]=[n,t]}));n.push(r[2]=u);var i,f=document.createElement("script");f.charset="utf-8",f.timeout=120,d.nc&&f.setAttribute("nonce",d.nc),f.src=a(e);var h=new Error;i=function(n){f.onerror=f.onload=null,clearTimeout(l);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;h.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",h.name="ChunkLoadError",h.type=r,h.request=c,t[1](h)}o[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:f})}),12e4);f.onerror=f.onload=i,document.head.appendChild(f)}return Promise.all(n)},d.m=e,d.c=r,d.d=function(e,n,t){d.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,n){if(1&n&&(e=d(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)d.d(t,r,function(n){return e[n]}.bind(null,r));return t},d.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(n,"a",n),n},d.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},d.p="/",d.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],f=i.push.bind(i);i.push=n,i=i.slice();for(var h=0;h<i.length;h++)n(i[h]);var l=f;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"236f":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("159b"),t("b64b");var r=t("7a23"),c=t("bc3a"),o=t.n(c),u=t("2106"),a=t.n(u),d=t("7bb1"),i=t("3aa8"),f=t("cbdf"),h=t("9457");function l(e,n,t,c,o,u){var a=Object(r["A"])("router-view");return Object(r["t"])(),Object(r["d"])("div",null,[Object(r["h"])(a)])}var p={name:"App"};t("f78a");p.render=l;var s=p,b=(t("d3b7"),t("3ca3"),t("ddb0"),t("6c02")),m=[{path:"/",name:"Front",component:function(){return t.e("chunk-7e8251c0").then(t.bind(null,"de8a"))},children:[{path:"about",component:function(){return t.e("chunk-2d22d746").then(t.bind(null,"f820"))}},{path:"products",component:function(){return t.e("chunk-dbbe4a10").then(t.bind(null,"e6dc"))}},{path:"product/:id",component:function(){return t.e("chunk-2d21de4f").then(t.bind(null,"d2f1"))}},{path:"login",component:function(){return t.e("chunk-4bec8d34").then(t.bind(null,"a55b"))}},{path:"carts",component:function(){return t.e("chunk-1ca8d124").then(t.bind(null,"395d"))}}]},{path:"/admin",component:function(){return t.e("chunk-dd2262c0").then(t.bind(null,"7277"))},children:[{path:"products",component:function(){return t.e("chunk-3bf97362").then(t.bind(null,"d416"))}},{path:"orders",component:function(){return t.e("chunk-2d0c89f3").then(t.bind(null,"5651"))}}]}],v=Object(b["a"])({history:Object(b["b"])(),routes:m}),k=v;Object.keys(i["a"]).forEach((function(e){Object(d["e"])(e,i["a"][e])})),Object(d["d"])({generateMessage:Object(f["a"])({zhTW:h}),validateOnInput:!0}),Object(f["b"])("zh_Tw");var g=Object(r["c"])(s);g.use(a.a,o.a),g.use(k),g.component("Form",d["c"]),g.component("Field",d["b"]),g.component("ErrorMessage",d["a"]),g.mount("#app")},f78a:function(e,n,t){"use strict";t("236f")}});
//# sourceMappingURL=app.f5fa262c.js.map