(this["webpackJsonpgif-search"]=this["webpackJsonpgif-search"]||[]).push([[0],{18:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(7),r=n.n(c),i=n(2),s=n(10),o=n(0),u=function(t){var e=t.setCategories,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],u=c[1];return Object(o.jsx)("form",{onSubmit:function(t){t.preventDefault(),r.trim().length>2&&(e((function(t){return[r].concat(Object(s.a)(t))})),u(""))},children:Object(o.jsx)("input",{type:"text",value:r,onChange:function(t){u(t.target.value)}})})},j=n(11),d=function(t){var e=t.title,n=t.url;return Object(o.jsx)("div",{className:"card animate__animated animate__fadeIn",children:Object(o.jsx)("img",{src:n,alt:e,onClick:function(){navigator.clipboard.writeText(n)}})})},l=n(6),b=n.n(l),f=n(8),h=function(){var t=Object(f.a)(b.a.mark((function t(e,n,a){var c,r,i,s,o;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=").concat(n,"&api_key=").concat(a),console.log(c),t.next=4,fetch(c);case 4:return r=t.sent,t.next=7,r.json();case 7:return i=t.sent,s=i.data,o=s.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",o);case 11:case"end":return t.stop()}}),t)})));return function(e,n,a){return t.apply(this,arguments)}}(),m=function(t){var e=t.category,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){h(t,10,"e4Rbc8Hq9DMMjYD6rbhsFUnRdqoxGorD").then((function(t){r({data:t,loading:!1})}))}),[t]),c}(e),c=n.data,r=n.loading;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("h3",{children:[" ",e," "]}),r&&Object(o.jsx)("p",{className:"animate__animated animate__flash",children:"Loading"}),Object(o.jsx)("div",{className:"card-grid",children:c.map((function(t){return Object(o.jsx)(d,Object(j.a)({},t),t.id)}))})]})},O=n(9),p=function(){var t=Object(a.useState)(["Attack on Titan"]),e=Object(i.a)(t,2),n=e[0],c=e[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"header-block",children:[Object(o.jsxs)("div",{className:"title-block",children:[Object(o.jsx)("h2",{children:"GifSearchApp"}),Object(o.jsx)(O.a,{className:"reactIcon"})]}),Object(o.jsx)(u,{setCategories:c})]}),Object(o.jsx)("ol",{children:n.map((function(t){return Object(o.jsx)(m,{category:t},t)}))})]})};n(18);r.a.render(Object(o.jsx)(p,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.df1df7d9.chunk.js.map