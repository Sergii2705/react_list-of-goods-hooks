(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c,r=n(7),i=n.n(r),s=n(3),o=n(8),a=n(1),u=n(17),l=n(5),b=n.n(l),j=(n(13),n(0)),m=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],p=new Array(m.length).fill("").map((function(t){return t+Object(u.a)()})),h=new Array(m.length).fill("").map((function(t,e){return{id:t+Object(u.a)(),option:e+1}}));!function(t){t[t.NONE=0]="NONE",t[t.ALPABET=1]="ALPABET",t[t.LENGTH=2]="LENGTH"}(c||(c={}));var O=function(){var t=Object(a.useState)(!1),e=Object(s.a)(t,2),n=e[0],r=e[1],i=Object(a.useState)(!1),u=Object(s.a)(i,2),l=u[0],O=u[1],d=Object(a.useState)(c.NONE),f=Object(s.a)(d,2),N=f[0],g=f[1],y=Object(a.useState)(1),A=Object(s.a)(y,2),E=A[0],x=A[1],v=function(t){O((function(e){return N===t&&!e})),g(t)},L=function(t,e,n,r){var i=Object(o.a)(t).filter((function(t){return t.length>=e}));return n!==c.NONE&&i.sort((function(t,e){return n===c.ALPABET?t.localeCompare(e):t.length-e.length})),r&&i.reverse(),i}(m,E,N,l);return Object(j.jsx)("div",{className:"App box",children:n?Object(j.jsxs)("div",{className:"App__content",children:[Object(j.jsxs)("div",{className:"App__buttons",children:[Object(j.jsx)("button",{className:b()("button is-primary",{"is-light":N===c.ALPABET}),type:"button",onClick:function(){return v(c.ALPABET)},children:"Sort alphabetically"}),Object(j.jsx)("button",{className:b()("button is-primary",{"is-light":N===c.LENGTH}),type:"button",onClick:function(){return v(c.LENGTH)},children:"Sort by length"}),Object(j.jsx)("button",{className:b()("button is-primary",{"is-light":l}),type:"button",onClick:function(){return O((function(t){return!t}))},children:"Reverse"}),Object(j.jsx)("button",{className:"button is-danger is-large is-reset",type:"button",onClick:function(){g(c.NONE),x(1),O(!1)},children:"Reset"}),Object(j.jsx)("select",{className:"select is-primary is-medium",name:"minLength",value:E,onChange:function(t){return x(+t.target.value)},children:h.map((function(t){var e=t.id,n=t.option;return Object(j.jsx)("option",{value:n,children:n},e)}))})]}),Object(j.jsx)("ul",{className:"Goods content is-medium",children:L.map((function(t,e){return Object(j.jsx)("li",{className:"Goods__item",children:t},p[e])}))})]}):Object(j.jsx)("button",{className:"button is-primary is-large",type:"button",onClick:function(){return r(!0)},children:"Start"})})};i.a.render(Object(j.jsx)(O,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.3da5623c.chunk.js.map