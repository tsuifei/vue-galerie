(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6124d5fc"],{"0cb2":function(e,t,n){var a=n("7b0b"),r=Math.floor,c="".replace,o=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,i=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,l,s,u){var d=n+e.length,v=l.length,f=i;return void 0!==s&&(s=a(s),f=o),c.call(u,f,(function(a,c){var o;switch(c.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(d);case"<":o=s[c.slice(1,-1)];break;default:var i=+c;if(0===i)return a;if(i>v){var u=r(i/10);return 0===u?a:u<=v?void 0===l[u-1]?c.charAt(1):l[u-1]+c.charAt(1):a}o=l[i-1]}return void 0===o?"":o}))}},"14c3":function(e,t,n){var a=n("c6b6"),r=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var c=n.call(e,t);if("object"!==typeof c)throw TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==a(e))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(e,t)}},5319:function(e,t,n){"use strict";var a=n("d784"),r=n("825a"),c=n("50c4"),o=n("a691"),i=n("1d80"),l=n("8aa5"),s=n("0cb2"),u=n("14c3"),d=Math.max,v=Math.min,f=function(e){return void 0===e?e:String(e)};a("replace",2,(function(e,t,n,a){var p=a.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=a.REPLACE_KEEPS_$0,h=p?"$":"$0";return[function(n,a){var r=i(this),c=void 0==n?void 0:n[e];return void 0!==c?c.call(n,r,a):t.call(String(r),n,a)},function(e,a){if(!p&&b||"string"===typeof a&&-1===a.indexOf(h)){var i=n(t,e,this,a);if(i.done)return i.value}var g=r(e),x=String(this),O="function"===typeof a;O||(a=String(a));var E=g.global;if(E){var j=g.unicode;g.lastIndex=0}var m=[];while(1){var N=u(g,x);if(null===N)break;if(m.push(N),!E)break;var k=String(N[0]);""===k&&(g.lastIndex=l(x,c(g.lastIndex),j))}for(var V="",_=0,S=0;S<m.length;S++){N=m[S];for(var $=String(N[0]),I=d(v(o(N.index),x.length),0),R=[],T=1;T<N.length;T++)R.push(f(N[T]));var y=N.groups;if(O){var A=[$].concat(R,I,x);void 0!==y&&A.push(y);var w=String(a.apply(void 0,A))}else w=s($,x,I,R,y,a);I>=_&&(V+=x.slice(_,I)+w,_=I+$.length)}return V+x.slice(_)}]}))},7277:function(e,t,n){"use strict";n.r(t);var a=n("7a23");function r(e,t,n,r,c,o){var i=Object(a["resolveComponent"])("admin-nav-bar"),l=Object(a["resolveComponent"])("router-view");return Object(a["openBlock"])(),Object(a["createBlock"])("div",null,[Object(a["createVNode"])(i),Object(a["createVNode"])(l,{class:"container"})])}n("ac1f"),n("5319");var c=Object(a["withScopeId"])("data-v-2fc7feaa");Object(a["pushScopeId"])("data-v-2fc7feaa");var o={class:"navbar navbar-expand-md navbar-dark bg-dark border-bottom"},i={class:"container"},l=Object(a["createVNode"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(a["createVNode"])("span",{class:"navbar-toggler-icon"})],-1),s=Object(a["createVNode"])("h1",null,"Dashboard",-1),u={class:"collapse navbar-collapse",id:"navbarSupportedContent"},d={class:"navbar-nav ml-auto"},v={class:"nav-item"},f=Object(a["createTextVNode"])(" Front | "),p={class:"nav-item"},b=Object(a["createTextVNode"])(" Products "),h={class:"nav-item"},g=Object(a["createTextVNode"])(" Orders "),x={class:"nav-item"},O=Object(a["createTextVNode"])(" Coupons "),E={class:"nav-item"},j=Object(a["createTextVNode"])(" Articles "),m={class:"nav-item"};Object(a["popScopeId"])();var N=c((function(e,t,n,r,N,k){var V=Object(a["resolveComponent"])("router-link");return Object(a["openBlock"])(),Object(a["createBlock"])("nav",o,[Object(a["createVNode"])("div",i,[l,Object(a["createVNode"])(V,{to:"/admin",class:"navbar-brand nav-link"},{default:c((function(){return[s]})),_:1}),Object(a["createVNode"])("div",u,[Object(a["createVNode"])("ul",d,[Object(a["createVNode"])("li",v,[Object(a["createVNode"])(V,{to:"/",class:"nav-link"},{default:c((function(){return[f]})),_:1})]),Object(a["createVNode"])("li",p,[Object(a["createVNode"])(V,{to:"/admin/products",class:"nav-link"},{default:c((function(){return[b]})),_:1})]),Object(a["createVNode"])("li",h,[Object(a["createVNode"])(V,{to:"/admin/orders",class:"nav-link"},{default:c((function(){return[g]})),_:1})]),Object(a["createVNode"])("li",x,[Object(a["createVNode"])(V,{to:"/admin/coupons",class:"nav-link"},{default:c((function(){return[O]})),_:1})]),Object(a["createVNode"])("li",E,[Object(a["createVNode"])(V,{to:"/admin/articles",class:"nav-link"},{default:c((function(){return[j]})),_:1})]),Object(a["createVNode"])("li",m,[Object(a["createVNode"])("a",{href:"#",onClick:t[1]||(t[1]=Object(a["withModifiers"])((function(){return k.signOut&&k.signOut.apply(k,arguments)}),["prevent"])),class:"nav-link"}," Sign Out ")])])])])])})),k={data:function(){return{}},methods:{signOut:function(){document.cookie="hexToken=;expires=;",alert("Token 已清除，你已登出"),this.$router.push("/login")}}};k.render=N,k.__scopeId="data-v-2fc7feaa";var V=k,_={name:"Dashboard",data:function(){return{api_token:""}},components:{AdminNavBar:V},methods:{checkLogin:function(){var e=this,t=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");if(this.$http.defaults.headers.common.Authorization="".concat(t),t){var n="".concat("https://vue3-course-api.hexschool.io/","api/user/check");this.$http.post(n,{api_token:this.token}).then((function(t){t.data.success?(console.log("成功登入"),e.$router.push("/admin/products")):(alert(t.data.message),console.log("登入失敗"),e.$router.push("/login"))})).catch((function(t){console.dir("尚未登入喔",t),e.$router.push("/login")}))}else alert("尚未登入喔"),this.$router.push("/login")}},created:function(){this.checkLogin()}};_.render=r;t["default"]=_},"8aa5":function(e,t,n){"use strict";var a=n("6547").charAt;e.exports=function(e,t,n){return t+(n?a(e,t).length:1)}},9263:function(e,t,n){"use strict";var a=n("ad6d"),r=n("9f7f"),c=n("5692"),o=RegExp.prototype.exec,i=c("native-string-replace",String.prototype.replace),l=o,s=function(){var e=/a/,t=/b*/g;return o.call(e,"a"),o.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),u=r.UNSUPPORTED_Y||r.BROKEN_CARET,d=void 0!==/()??/.exec("")[1],v=s||d||u;v&&(l=function(e){var t,n,r,c,l=this,v=u&&l.sticky,f=a.call(l),p=l.source,b=0,h=e;return v&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),h=String(e).slice(l.lastIndex),l.lastIndex>0&&(!l.multiline||l.multiline&&"\n"!==e[l.lastIndex-1])&&(p="(?: "+p+")",h=" "+h,b++),n=new RegExp("^(?:"+p+")",f)),d&&(n=new RegExp("^"+p+"$(?!\\s)",f)),s&&(t=l.lastIndex),r=o.call(v?n:l,h),v?r?(r.input=r.input.slice(b),r[0]=r[0].slice(b),r.index=l.lastIndex,l.lastIndex+=r[0].length):l.lastIndex=0:s&&r&&(l.lastIndex=l.global?r.index+r[0].length:t),d&&r&&r.length>1&&i.call(r[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(r[c]=void 0)})),r}),e.exports=l},"9f7f":function(e,t,n){"use strict";var a=n("d039");function r(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=a((function(){var e=r("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=a((function(){var e=r("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,n){"use strict";var a=n("23e7"),r=n("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(e,t,n){"use strict";var a=n("825a");e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d784:function(e,t,n){"use strict";n("ac1f");var a=n("6eeb"),r=n("9263"),c=n("d039"),o=n("b622"),i=n("9112"),l=o("species"),s=RegExp.prototype,u=!c((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),d=function(){return"$0"==="a".replace(/./,"$0")}(),v=o("replace"),f=function(){return!!/./[v]&&""===/./[v]("a","$0")}(),p=!c((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,v){var b=o(e),h=!c((function(){var t={};return t[b]=function(){return 7},7!=""[e](t)})),g=h&&!c((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[b]=/./[b]),n.exec=function(){return t=!0,null},n[b](""),!t}));if(!h||!g||"replace"===e&&(!u||!d||f)||"split"===e&&!p){var x=/./[b],O=n(b,""[e],(function(e,t,n,a,c){var o=t.exec;return o===r||o===s.exec?h&&!c?{done:!0,value:x.call(t,n,a)}:{done:!0,value:e.call(n,t,a)}:{done:!1}}),{REPLACE_KEEPS_$0:d,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),E=O[0],j=O[1];a(String.prototype,e,E),a(s,b,2==t?function(e,t){return j.call(e,this,t)}:function(e){return j.call(e,this)})}v&&i(s[b],"sham",!0)}}}]);
//# sourceMappingURL=chunk-6124d5fc.d05e2708.js.map