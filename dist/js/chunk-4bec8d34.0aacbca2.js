(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4bec8d34"],{"1dde":function(e,o,a){var t=a("d039"),r=a("b622"),n=a("2d00"),s=r("species");e.exports=function(e){return n>=51||!t((function(){var o=[],a=o.constructor={};return a[s]=function(){return{foo:1}},1!==o[e](Boolean).foo}))}},8418:function(e,o,a){"use strict";var t=a("c04e"),r=a("9bf2"),n=a("5c6c");e.exports=function(e,o,a){var s=t(o);s in e?r.f(e,s,n(0,a)):e[s]=a}},"99af":function(e,o,a){"use strict";var t=a("23e7"),r=a("d039"),n=a("e8b5"),s=a("861d"),c=a("7b0b"),i=a("50c4"),l=a("8418"),d=a("65f0"),u=a("1dde"),m=a("b622"),b=a("2d00"),f=m("isConcatSpreadable"),p=9007199254740991,v="Maximum allowed index exceeded",h=b>=51||!r((function(){var e=[];return e[f]=!1,e.concat()[0]!==e})),w=u("concat"),g=function(e){if(!s(e))return!1;var o=e[f];return void 0!==o?!!o:n(e)},j=!h||!w;t({target:"Array",proto:!0,forced:j},{concat:function(e){var o,a,t,r,n,s=c(this),u=d(s,0),m=0;for(o=-1,t=arguments.length;o<t;o++)if(n=-1===o?s:arguments[o],g(n)){if(r=i(n.length),m+r>p)throw TypeError(v);for(a=0;a<r;a++,m++)a in n&&l(u,m,n[a])}else{if(m>=p)throw TypeError(v);l(u,m++,n)}return u.length=m,u}})},a55b:function(e,o,a){"use strict";a.r(o);var t=a("7a23"),r={class:"login"},n=Object(t["createVNode"])("h1",null,"login 頁面",-1),s={class:"mb3"},c=Object(t["createVNode"])("label",{for:"email",class:"form-label"},"Email",-1),i={class:"mb3"},l=Object(t["createVNode"])("label",{for:"password",class:"form-label"},"Password",-1),d=Object(t["createVNode"])("button",{type:"submit",class:"btn btn-primary"},"Submit",-1);function u(e,o,a,u,m,b){var f=Object(t["resolveComponent"])("Field"),p=Object(t["resolveComponent"])("ErrorMessage"),v=Object(t["resolveComponent"])("Form"),h=Object(t["resolveComponent"])("loading");return Object(t["openBlock"])(),Object(t["createBlock"])("div",r,[n,Object(t["createVNode"])(v,{onSubmit:b.signIn},{default:Object(t["withCtx"])((function(e){var a=e.errors;return[Object(t["createVNode"])("div",s,[c,Object(t["createVNode"])(f,{id:"email",name:"email",type:"email",class:["form-control",{"is-invalid":a["email"]}],placeholder:"請輸入 Email",rules:"email|required",modelValue:m.user.username,"onUpdate:modelValue":o[1]||(o[1]=function(e){return m.user.username=e})},null,8,["class","modelValue"]),Object(t["createVNode"])(p,{name:"email",class:"invalid-feedback"})]),Object(t["createVNode"])("div",i,[l,Object(t["createVNode"])(f,{id:"password",name:"password",type:"password",class:["form-control",{"is-invalid":a["password"]}],placeholder:"請輸入 password",rules:"required",modelValue:m.user.password,"onUpdate:modelValue":o[2]||(o[2]=function(e){return m.user.password=e})},null,8,["class","modelValue"]),Object(t["createVNode"])(p,{name:"password",class:"invalid-feedback"})]),d]})),_:1},8,["onSubmit"]),Object(t["createVNode"])(h,{active:m.isLoading},null,8,["active"])])}a("99af");var m={name:"Login",data:function(){return{user:{username:"",password:""},isLoading:!1}},methods:{signIn:function(){var e=this,o="".concat("https://vue3-course-api.hexschool.io/","admin/signin");this.isLoading=!0,this.$http.post(o,this.user).then((function(o){if(e.isLoading=!1,o.data.success){alert(o.data.message);var a=o.data,t=a.token,r=a.expired;document.cookie="hexToken=".concat(t,"; expires=").concat(new Date(r)),e.$router.push("/admin/products")}else alert(o.data.message),e.isLoading=!1})).catch((function(e){console.log(e)}))}}};m.render=u;o["default"]=m}}]);
//# sourceMappingURL=chunk-4bec8d34.0aacbca2.js.map