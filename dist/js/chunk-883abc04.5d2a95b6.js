(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-883abc04"],{"1dde":function(e,a,r){var t=r("d039"),n=r("b622"),o=r("2d00"),s=n("species");e.exports=function(e){return o>=51||!t((function(){var a=[],r=a.constructor={};return r[s]=function(){return{foo:1}},1!==a[e](Boolean).foo}))}},8418:function(e,a,r){"use strict";var t=r("c04e"),n=r("9bf2"),o=r("5c6c");e.exports=function(e,a,r){var s=t(a);s in e?n.f(e,s,o(0,r)):e[s]=r}},"99af":function(e,a,r){"use strict";var t=r("23e7"),n=r("d039"),o=r("e8b5"),s=r("861d"),c=r("7b0b"),i=r("50c4"),l=r("8418"),u=r("65f0"),d=r("1dde"),f=r("b622"),b=r("2d00"),m=f("isConcatSpreadable"),p=9007199254740991,h="Maximum allowed index exceeded",v=b>=51||!n((function(){var e=[];return e[m]=!1,e.concat()[0]!==e})),w=d("concat"),j=function(e){if(!s(e))return!1;var a=e[m];return void 0!==a?!!a:o(e)},O=!v||!w;t({target:"Array",proto:!0,forced:O},{concat:function(e){var a,r,t,n,o,s=c(this),d=u(s,0),f=0;for(a=-1,t=arguments.length;a<t;a++)if(o=-1===a?s:arguments[a],j(o)){if(n=i(o.length),f+n>p)throw TypeError(h);for(r=0;r<n;r++,f++)r in o&&l(d,f,o[r])}else{if(f>=p)throw TypeError(h);l(d,f++,o)}return d.length=f,d}})},a55b:function(e,a,r){"use strict";r.r(a);var t=r("7a23"),n={class:"login"},o=Object(t["h"])("h1",null,"login 頁面",-1),s={class:"mb3"},c=Object(t["h"])("label",{for:"email",class:"form-label"},"Email",-1),i={class:"mb3"},l=Object(t["h"])("label",{for:"password",class:"form-label"},"Password",-1),u=Object(t["h"])("button",{type:"submit",class:"btn btn-primary"},"Submit",-1);function d(e,a,r,d,f,b){var m=Object(t["A"])("Field"),p=Object(t["A"])("ErrorMessage"),h=Object(t["A"])("Form");return Object(t["t"])(),Object(t["d"])("div",n,[o,Object(t["h"])(h,{onSubmit:b.signIn},{default:Object(t["K"])((function(e){var r=e.errors;return[Object(t["h"])("div",s,[c,Object(t["h"])(m,{id:"email",name:"email",type:"email",class:["form-control",{"is-invalid":r["email"]}],placeholder:"請輸入 Email",rules:"email|required",modelValue:f.user.username,"onUpdate:modelValue":a[1]||(a[1]=function(e){return f.user.username=e})},null,8,["class","modelValue"]),Object(t["h"])(p,{name:"email",class:"invalid-feedback"})]),Object(t["h"])("div",i,[l,Object(t["h"])(m,{id:"password",name:"password",type:"password",class:["form-control",{"is-invalid":r["password"]}],placeholder:"請輸入 password",rules:"required",modelValue:f.user.password,"onUpdate:modelValue":a[2]||(a[2]=function(e){return f.user.password=e})},null,8,["class","modelValue"]),Object(t["h"])(p,{name:"password",class:"invalid-feedback"})]),u]})),_:1},8,["onSubmit"])])}r("99af");var f={data:function(){return{user:{username:"",password:""}}},methods:{signIn:function(){var e=this,a="".concat("https://vue3-course-api.hexschool.io/","admin/signin");this.$http.post(a,this.user).then((function(a){if(console.log(a),a.data.success){alert(a.data.message);var r=a.data,t=r.token,n=r.expired;document.cookie="hexToken=".concat(t,"; expires=").concat(new Date(n)),e.$router.push("/admin/products")}else alert(a.data.message)})).catch((function(e){console.log(e)}))}}};f.render=d;a["default"]=f}}]);
//# sourceMappingURL=chunk-883abc04.5d2a95b6.js.map