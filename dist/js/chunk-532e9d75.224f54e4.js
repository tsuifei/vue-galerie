(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-532e9d75"],{"1dde":function(e,t,a){var o=a("d039"),c=a("b622"),r=a("2d00"),n=c("species");e.exports=function(e){return r>=51||!o((function(){var t=[],a=t.constructor={};return a[n]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"395d":function(e,t,a){"use strict";a.r(t);a("b0c0");var o=a("7a23"),c=Object(o["withScopeId"])("data-v-21aef7a2");Object(o["pushScopeId"])("data-v-21aef7a2");var r={key:0,class:"carts"},n={class:"text-end"},l={class:"table align-middle"},s=Object(o["createVNode"])("thead",null,[Object(o["createVNode"])("tr",null,[Object(o["createVNode"])("th"),Object(o["createVNode"])("th",null,"品名"),Object(o["createVNode"])("th",null,"數量"),Object(o["createVNode"])("th",null,"單價"),Object(o["createVNode"])("th",null,"金額")])],-1),i={width:"100"},d={class:"input-group"},u={class:"text-end"},f=Object(o["createVNode"])("td",{colspan:"4",class:"text-end"},"總計 :",-1),m={class:"text-end"},b=Object(o["createVNode"])("h2",null,"客戶資料表單",-1),p={class:"my-5 row justify-content-center"},h={class:"mb-3"},O=Object(o["createVNode"])("label",{for:"email",class:"form-label"},"Email",-1),g={class:"mb-3"},v=Object(o["createVNode"])("label",{for:"name",class:"form-label"},"收件人姓名",-1),j={class:"mb-3"},V=Object(o["createVNode"])("label",{for:"tel",class:"form-label"},"收件人電話",-1),N={class:"mb-3"},y=Object(o["createVNode"])("label",{for:"address",class:"form-label"},"收件人地址",-1),x={class:"mb-3"},C=Object(o["createVNode"])("label",{for:"message",class:"form-label"},"留言",-1),w=Object(o["createVNode"])("div",{class:"text-end"},[Object(o["createVNode"])("button",{type:"submit",class:"btn btn-danger"},"送出訂單")],-1);Object(o["popScopeId"])();var k=c((function(e,t,a,k,L,A){var S=Object(o["resolveComponent"])("Field"),_=Object(o["resolveComponent"])("ErrorMessage"),D=Object(o["resolveComponent"])("Form"),q=Object(o["resolveComponent"])("loading");return function(e){return 1}?(Object(o["openBlock"])(),Object(o["createBlock"])("div",r,[Object(o["createVNode"])("div",n,[Object(o["createVNode"])("button",{onClick:t[1]||(t[1]=function(){return A.deleteAllCarts&&A.deleteAllCarts.apply(A,arguments)}),type:"button",class:"btn btn-outline-danger"}," 清空購物車 ")]),Object(o["createVNode"])("div",null,[Object(o["createVNode"])("table",l,[s,Object(o["createVNode"])("tbody",null,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(L.cartsData.carts,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])("tr",{key:e.id},[Object(o["createVNode"])("td",null,[Object(o["createVNode"])("button",{onClick:function(t){return A.deleteCart(e.id)},type:"button",class:"btn btn-outline-danger btn-sm"}," X ",8,["onClick"])]),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(e.product.title),1),Object(o["createVNode"])("td",i,[Object(o["createVNode"])("div",d,[Object(o["withDirectives"])(Object(o["createVNode"])("input",{onBlur:function(t){return A.updateCart(e)},type:"number",class:"form-control m-0 p-1 text-center fw-bold border","onUpdate:modelValue":function(t){return e.qty=t},min:"1"},null,40,["onBlur","onUpdate:modelValue"]),[[o["vModelText"],e.qty,void 0,{number:!0}]])])]),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(e.product.price),1),Object(o["createVNode"])("td",u,Object(o["toDisplayString"])(e.total),1)])})),128))]),Object(o["createVNode"])("tfoot",null,[f,Object(o["createVNode"])("td",m,Object(o["toDisplayString"])(L.cartsData.final_total),1)])])]),b,Object(o["createVNode"])("div",p,[Object(o["createVNode"])(D,{onSubmit:A.addOrder,ref:"form",class:"col-md-6"},{default:c((function(e){var a=e.errors;return[Object(o["createVNode"])("div",h,[O,Object(o["createVNode"])(S,{id:"email",name:"email",type:"email",class:["form-control",{"is-invalid":a["email"]}],rules:"email|required",placeholder:"請輸入 Email",modelValue:L.form.user.email,"onUpdate:modelValue":t[2]||(t[2]=function(e){return L.form.user.email=e})},null,8,["class","modelValue"]),Object(o["createVNode"])(_,{name:"email",class:"invalid-feedback"})]),Object(o["createVNode"])("div",g,[v,Object(o["createVNode"])(S,{id:"name",name:"姓名",type:"text",class:["form-control",{"is-invalid":a["姓名"]}],placeholder:"請輸入姓名",rules:"required",modelValue:L.form.user.name,"onUpdate:modelValue":t[3]||(t[3]=function(e){return L.form.user.name=e})},null,8,["class","modelValue"]),Object(o["createVNode"])(_,{name:"姓名",class:"invalid-feedback"})]),Object(o["createVNode"])("div",j,[V,Object(o["createVNode"])(S,{modelValue:L.form.user.tel,"onUpdate:modelValue":t[4]||(t[4]=function(e){return L.form.user.tel=e}),id:"tel",name:"電話",rules:"required|min:8|max:10",type:"text",class:[{"is-invalid":a["電話"]},"form-control"],placeholder:"請輸入電話"},null,8,["modelValue","class"]),Object(o["createVNode"])(_,{name:"電話",class:"invalid-feedback"})]),Object(o["createVNode"])("div",N,[y,Object(o["createVNode"])(S,{modelValue:L.form.user.address,"onUpdate:modelValue":t[5]||(t[5]=function(e){return L.form.user.address=e}),id:"address",name:"地址",rules:"required",type:"text",class:[{"is-invalid":a["地址"]},"form-control"],placeholder:"請輸入地址"},null,8,["modelValue","class"]),Object(o["createVNode"])(_,{name:"地址",class:"invalid-feedback"})]),Object(o["createVNode"])("div",x,[C,Object(o["withDirectives"])(Object(o["createVNode"])("textarea",{id:"message",name:"留言","onUpdate:modelValue":t[6]||(t[6]=function(e){return L.form.message=e}),class:[{"is-invalid":a["留言"]},"form-control"],cols:"30",rows:"10",placeholder:"請輸入留言",rules:""},null,2),[[o["vModelText"],L.form.message]])]),w]})),_:1},8,["onSubmit"])]),Object(o["createVNode"])(q,{active:L.isLoading},null,8,["active"])])):Object(o["createCommentVNode"])("",!0)})),L=(a("99af"),a("e4f3")),A={data:function(){return{cartsData:{},final_total:0,isLoading:!1,form:{user:{email:"",name:"",tel:"",address:""},message:""}}},methods:{addToCart:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.isLoading=!0;var o="".concat("https://vue3-course-api.hexschool.io/","api/").concat("moitw","/cart"),c={product_id:e,qty:a};this.$http.post(o,{data:c}).then((function(e){e.data.success?(alert(e.data.message),t.isLoading=!1,t.$refs.productModal.hideModal(),t.getAllCart()):alert(e.data.message)})).catch((function(e){console.log(e)}))},updateCart:function(e){var t=this;this.isLoading=!0,console.log("updateCart_OK");var a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("moitw","/cart/").concat(e.id),o={product_id:e.id,qty:e.qty};this.$http.put(a,{data:o}).then((function(e){e.data.success?(L["a"].emit("updata-cart"),alert(e.data.message),t.isLoading=!1,t.getAllCart()):alert(e.data.message)})).catch((function(e){console.log(e)}))},deleteAllCarts:function(){var e=this;this.isLoading=!0;var t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("moitw","/carts");this.$http.delete(t).then((function(t){t.data.success?(e.isLoading=!1,L["a"].emit("updata-cart"),e.getAllCart()):alert(t.data.message)})).catch((function(e){console.log(e)}))},getAllCart:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("moitw","/cart");this.isLoading=!0,this.$http.get(t).then((function(t){t.data.success?(e.isLoading=!1,e.cartsData=t.data.data,e.final_total=t.data.data.final_total,0===e.final_total&&e.$router.push("/products")):alert(t.data.message)})).catch((function(e){console.log(e)}))},deleteCart:function(e){var t=this;this.isLoading=!0;var a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("moitw","/cart/").concat(e);this.$http.delete(a).then((function(e){e.data.success?(t.isLoading=!1,alert(e.data.message),t.getAllCart()):alert(e.data.message)})).catch((function(e){console.log(e)}))},addOrder:function(){var e=this;this.isLoading=!0;var t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("moitw","/order"),a=this.form;console.log(a),this.$http.post(t,{data:a}).then((function(t){t.data.success?(e.isLoading=!1,alert(t.data.message),console.log(e.form),e.$refs.form.resetForm(),e.form.message="",e.getAllCart()):alert(t.data.message)})).catch((function(e){console.log(e)}))}},mounted:function(){},created:function(){this.getAllCart()}};A.render=k,A.__scopeId="data-v-21aef7a2";t["default"]=A},8418:function(e,t,a){"use strict";var o=a("c04e"),c=a("9bf2"),r=a("5c6c");e.exports=function(e,t,a){var n=o(t);n in e?c.f(e,n,r(0,a)):e[n]=a}},"99af":function(e,t,a){"use strict";var o=a("23e7"),c=a("d039"),r=a("e8b5"),n=a("861d"),l=a("7b0b"),s=a("50c4"),i=a("8418"),d=a("65f0"),u=a("1dde"),f=a("b622"),m=a("2d00"),b=f("isConcatSpreadable"),p=9007199254740991,h="Maximum allowed index exceeded",O=m>=51||!c((function(){var e=[];return e[b]=!1,e.concat()[0]!==e})),g=u("concat"),v=function(e){if(!n(e))return!1;var t=e[b];return void 0!==t?!!t:r(e)},j=!O||!g;o({target:"Array",proto:!0,forced:j},{concat:function(e){var t,a,o,c,r,n=l(this),u=d(n,0),f=0;for(t=-1,o=arguments.length;t<o;t++)if(r=-1===t?n:arguments[t],v(r)){if(c=s(r.length),f+c>p)throw TypeError(h);for(a=0;a<c;a++,f++)a in r&&i(u,f,r[a])}else{if(f>=p)throw TypeError(h);i(u,f++,r)}return u.length=f,u}})},b0c0:function(e,t,a){var o=a("83ab"),c=a("9bf2").f,r=Function.prototype,n=r.toString,l=/^\s*function ([^ (]*)/,s="name";o&&!(s in r)&&c(r,s,{configurable:!0,get:function(){try{return n.call(this).match(l)[1]}catch(e){return""}}})},e4f3:function(e,t,a){"use strict";var o=function(e){return{all:e=e||new Map,on:function(t,a){var o=e.get(t);o?o.push(a):e.set(t,[a])},off:function(t,a){var o=e.get(t);o&&(a?o.splice(o.indexOf(a)>>>0,1):e.set(t,[]))},emit:function(t,a){var o=e.get(t);o&&o.slice().map((function(e){e(a)})),(o=e.get("*"))&&o.slice().map((function(e){e(t,a)}))}}},c=o();t["a"]=c}}]);
//# sourceMappingURL=chunk-532e9d75.224f54e4.js.map