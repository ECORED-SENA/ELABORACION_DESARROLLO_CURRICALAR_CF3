(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["creditos","chunk-515a8379"],{"0095":function(t,e,n){"use strict";n("95c5")},"13aa":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid banner-interno"},[n("div",{staticClass:"banner-interno__fondo",style:{"background-image":"url("+t.globalData.fondoBannerPrincipal+")"}}),n("div",{staticClass:"container"},[n("div",{staticClass:"banner-interno__titulo py-5"},[t.icono.length?n("div",{staticClass:"banner-interno__titulo__icono me-3"},[n("i",{class:t.icono})]):t._e(),n("h2",{staticClass:"mb-0",domProps:{innerHTML:t._s(t.titulo)}})])])])},r=[],s={name:"BannerInterno",props:{icono:{type:String,default:""},titulo:{type:String,default:""}},data:function(){return{}},computed:{globalData:function(){return this.$config.global}}},o=s,i=(n("0095"),n("2877")),c=Object(i["a"])(o,a,r,!1,null,null,null);e["default"]=c.exports},"159b":function(t,e,n){var a=n("da84"),r=n("fdbc"),s=n("785a"),o=n("17c2"),i=n("9112"),c=function(t){if(t&&t.forEach!==o)try{i(t,"forEach",o)}catch(e){t.forEach=o}};for(var l in r)r[l]&&c(a[l]&&a[l].prototype);c(s)},"17c2":function(t,e,n){"use strict";var a=n("b727").forEach,r=n("a640"),s=r("forEach");t.exports=s?[].forEach:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}},"2e81":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"curso-main-container creditos-vista"},[n("BannerInterno",{attrs:{icono:"far fa-registered",titulo:"Créditos"}}),n("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5"},[n("div",{staticClass:"creditos mb-4 mb-md-5"},t._l(Object.keys(t.creditosData),(function(e,a){return n("div",{staticClass:"creditos__item",class:a!=Object.keys(t.creditosData).length-1?"mb-4":""},[n("div",{staticClass:"creditos__titulo"},[t._v(t._s(t.configTitulos[e]))]),n("table",[n("tbody",t._l(t.creditosData[e],(function(a,r){return n("tr",{key:e+r},[n("td",{staticClass:"text-bold",attrs:{colspan:"2"},domProps:{innerHTML:t._s(t.renderText(a.nombre))}}),n("td",{attrs:{colspan:"2"},domProps:{innerHTML:t._s(t.renderText(a.cargo))}}),n("td",{attrs:{colspan:"3"},domProps:{innerHTML:t._s(t.renderText(a.centro))}})])})),0)])])})),0),t._m(0),n("Footer",{attrs:{"all-round":""}})],1)],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row mb-4 mb-md-5"},[a("div",{staticClass:"col-md-6 mb-4 mb-md-0"},[a("div",{staticClass:"tarjeta credito p-3 text-center h-100"},[a("img",{staticClass:"d-inline-block",staticStyle:{width:"70px"},attrs:{src:n("ef52")}}),a("p",[t._v("Fotografias y vectores tomados de "),a("a",{attrs:{href:"https://www.freepik.es/",target:"_blank"}},[t._v("www.freepik.es")]),t._v(", "),a("a",{attrs:{href:"https://www.shutterstock.com/",target:"_blank"}},[t._v("www.shutterstock.com")]),t._v(", "),a("a",{attrs:{href:"https://unsplash.com/",target:"_blank"}},[t._v("unsplash.com ")]),t._v("y "),a("a",{attrs:{href:"https://www.flaticon.com/",target:"_blank"}},[t._v("www.flaticon.com")])])])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"tarjeta credito p-3 text-center h-100"},[a("img",{staticClass:"d-inline-block",staticStyle:{width:"70px"},attrs:{src:n("e1f5")}}),a("p",{staticClass:"mb-0"},[t._v("Licencia creative commons CC BY-NC-SA"),a("br"),a("a",{attrs:{href:"https://creativecommons.org/licenses/by-nc-sa/2.0/",target:"_blank"}},[t._v("ver licencia")])])])])])}],s=(n("d3b7"),n("159b"),n("13aa")),o=n("e9c6"),i={name:"Creditos",components:{BannerInterno:s["default"],Footer:o["a"]},data:function(){return{configTitulos:{liderEquipo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",contenidoInstruccional:"CONTENIDO INSTRUCCIONAL",desarrolloProducto:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",gestoresRepositorio:"GESTORES DE REPOSITORIO"}}},computed:{creditosData:function(){return this.$config.creditos}},methods:{renderText:function(t){var e="";return Array.isArray(t)?t.forEach((function(t,n){e+=(n?"<br/>":"")+t})):e+=t,e}}},c=i,l=(n("5d8e"),n("2877")),d=Object(l["a"])(c,a,r,!1,null,null,null);e["default"]=d.exports},"5d8e":function(t,e,n){"use strict";n("f728")},"95c5":function(t,e,n){},a640:function(t,e,n){"use strict";var a=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&a((function(){n.call(null,e||function(){throw 1},1)}))}},e1f5:function(t,e,n){t.exports=n.p+"img/creditos-cc.4836eb56.svg"},ef52:function(t,e,n){t.exports=n.p+"img/creditos-img.689712e2.svg"},f728:function(t,e,n){}}]);
//# sourceMappingURL=creditos.e32d0041.js.map