(this["webpackJsonplets-shop"]=this["webpackJsonplets-shop"]||[]).push([[0],{78:function(e,n,t){"use strict";t.r(n);var i,r,c,a,o,s=t(0),d=t(10),j=t.n(d),l=t(16),u=t(29),b=t(28),x=t(45),h=t.n(x),p=t(50),m=t(114),O=t(105),f=t(20),v=t(21),g=v.a.div(i||(i=Object(f.a)(["\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;\n    width: 100%;\n    border: 1px solid lightblue;\n    border-radius: 20px;\n    height: 100%;\n    button {\n        border-radius: 0 0 20px 20px;\n    }\n    img {\n        max-height: 250px;\n        object-fit: cover;\n        border-radius: 20px 20px 0 0;\n    }\n    div {\n        font-family: Arial, Helvetica, sans-serif;\n        padding: 1rem;\n        heigth: 100%;\n    }\n    \n"]))),C=t(4),w=function(e){var n=e.item,t=e.handleAddToCart;return Object(C.jsxs)(g,{children:[Object(C.jsx)("img",{src:n.image,alt:n.title}),Object(C.jsxs)("div",{children:[Object(C.jsx)("h3",{children:n.title}),Object(C.jsx)("p",{children:n.description}),Object(C.jsxs)("h3",{children:["$",n.price]})]}),Object(C.jsx)(O.a,{onClick:function(){return t(n)},children:"Add to cart"})]})},y=v.a.div(r||(r=Object(f.a)(["\n    display: flex;\n    justify-content: space-between;\n    font-family: Arial, Helvetica, sans-serif;\n    border-bottom: 1px solid lightblue;\n    padding-bottom: 20px;\n    div {\n        flex: 1;\n    }\n    .information, \n    .buttons {\n        display: flex;\n        justify-content: space-between;\n    }\n    img {\n        max-width: 80px;\n        object-fit: cover;\n        margin-left: 40px;\n    }\n"]))),k=function(e){var n=e.item,t=e.addToCart,i=e.removeFromCart;return Object(C.jsxs)(y,{children:[Object(C.jsxs)("div",{children:[Object(C.jsx)("h3",{children:n.title}),Object(C.jsxs)("div",{className:"information",children:[Object(C.jsxs)("p",{children:["Price: $",n.price," "]}),Object(C.jsxs)("p",{children:["Total: $",(n.amount*n.price).toFixed(2)]})]}),Object(C.jsxs)("div",{className:"buttons",children:[Object(C.jsx)(O.a,{size:"small",disableElevation:!0,variant:"contained",onClick:function(){return i(n.id)},children:"-"}),Object(C.jsx)("p",{children:n.amount}),Object(C.jsx)(O.a,{size:"small",disableElevation:!0,variant:"contained",onClick:function(){return t(n)},children:"+"})]})]}),Object(C.jsx)("img",{src:n.image,alt:n.title})]})},T=v.a.aside(c||(c=Object(f.a)(["\n    font-family: Arial, Helvetica, sans-serif;\n    width: 500px;\n    padding: 20px;\n"]))),A=function(e){var n,t=e.cartItems,i=e.addToCart,r=e.removeFromCart;return Object(C.jsxs)(T,{children:[Object(C.jsx)("h2",{children:"Your Shopping Cart"}),0===t.length?Object(C.jsx)("p",{children:"No items in cart."}):null,t.map((function(e){return Object(C.jsx)(k,{item:e,addToCart:i,removeFromCart:r},e.id)})),Object(C.jsxs)("h2",{children:["Total: $",(n=t,n.reduce((function(e,n){return e+n.amount*n.price}),0)).toFixed(2)]})]})},F=t(112),S=t(109),$=t(111),z=t(55),E=t.n(z),H=t(110),I=t(108),N=v.a.div(a||(a=Object(f.a)(["\n    margin: 40px;\n"]))),J=Object(v.a)(I.a)(o||(o=Object(f.a)(["\n    position: fixed;\n    z-index: 100;\n    right: 20px;\n    top: 20px;\n"]))),B=function(){var e=Object(p.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fakestoreapi.com/products");case 2:return e.next=4,e.sent.json();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(s.useState)(!1),n=Object(b.a)(e,2),t=n[0],i=n[1],r=Object(s.useState)([]),c=Object(b.a)(r,2),a=c[0],o=c[1],d=Object(m.a)("products",B),j=d.data,x=d.isLoading,h=d.error;console.log(j);var p,O=function(e){o((function(n){return n.find((function(n){return n.id===e.id}))?n.map((function(n){return n.id===e.id?Object(u.a)(Object(u.a)({},n),{},{amount:n.amount+1}):n})):[].concat(Object(l.a)(n),[Object(u.a)(Object(u.a)({},e),{},{amount:1})])}))};return x?Object(C.jsx)(S.a,{}):h?Object(C.jsx)("div",{children:"Something went wrong :("}):Object(C.jsxs)(N,{children:[Object(C.jsx)(F.a,{anchor:"right",open:t,onClose:function(){return i(!1)},children:Object(C.jsx)(A,{cartItems:a,addToCart:O,removeFromCart:function(e){o((function(n){return n.reduce((function(n,t){return t.id===e?1===t.amount?n:[].concat(Object(l.a)(n),[Object(u.a)(Object(u.a)({},t),{},{amount:t.amount-1})]):[].concat(Object(l.a)(n),[t])}),[])}))}})}),Object(C.jsx)(J,{onClick:function(){return i(!0)},children:Object(C.jsx)(H.a,{badgeContent:(p=a,p.reduce((function(e,n){return e+n.amount}),0)),color:"error",children:Object(C.jsx)(E.a,{})})}),Object(C.jsx)($.a,{container:!0,spacing:3,children:null===j||void 0===j?void 0:j.map((function(e){return Object(C.jsx)($.a,{item:!0,xs:12,sm:4,children:Object(C.jsx)(w,{item:e,handleAddToCart:O})},e.id)}))})]})},P=t(113),Y=t(54),q=new P.a;j.a.render(Object(C.jsx)(Y.a,{client:q,children:Object(C.jsx)(L,{})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.8c3eb2bc.chunk.js.map