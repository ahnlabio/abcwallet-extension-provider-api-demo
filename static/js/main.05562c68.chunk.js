(this["webpackJsonpabcwallet-extension-provider-api-demo"]=this["webpackJsonpabcwallet-extension-provider-api-demo"]||[]).push([[0],{232:function(e,t){},234:function(e,t){},238:function(e,t){},239:function(e,t){},265:function(e,t){},267:function(e,t){},277:function(e,t){},279:function(e,t){},289:function(e,t){},291:function(e,t){},307:function(e,t){},341:function(e,t){},342:function(e,t){},412:function(e,t){},414:function(e,t){},419:function(e,t){},421:function(e,t){},428:function(e,t){},440:function(e,t){},443:function(e,t){},448:function(e,t){},522:function(e,t,n){},525:function(e,t,n){"use strict";n.r(t);var c=n(31),a=n.n(c),s=n(206),r=n.n(s),i=n(207),o=n(109),l=n(27),u=n.n(l),j=n(208),d=n.n(j),b=n(211),h=n.n(b),p=(n(522),n.p+"static/media/Frame.e1369206.svg"),x=n(8);var f=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)({}),r=Object(o.a)(s,2),l=r[0],j=r[1];Object(c.useEffect)((function(){!function(){var e=JSON.parse(localStorage.getItem("userAccount"));null!=e&&(j(e),a(!0))}()}),[]);var b=function(){var e=Object(i.a)(u.a.mark((function e(){var t,n,c,a,s,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h()();case 3:if(!(t=e.sent)){e.next=21;break}return e.next=7,t.request({method:"eth_requestAccounts"});case 7:return n=new d.a(t),e.next=10,n.eth.getAccounts();case 10:return c=e.sent,e.next=13,n.eth.getChainId();case 13:return a=e.sent,s=c[0],e.next=17,n.eth.getBalance(s);case 17:r=e.sent,r=n.utils.fromWei(r,"ether"),f(r,s,a),0===c.length&&console.log("ABC Wallet \uacfc \uc5f0\ub3d9 \ud558\uc138\uc694");case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(0),console.log("\uacc4\uc815\uc744 \uac00\uc838\uc624\ub294 \ub3d9\uc548 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \uc774\ub354\ub9ac\uc6c0 \ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \uc62c\ubc14\ub974\uac8c \uad6c\uc131\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud558\uc2ed\uc2dc\uc624.");case 26:case"end":return e.stop()}}),e,null,[[0,23]])})));return function(){return e.apply(this,arguments)}}(),f=function(e,t,n){var c={account:t,balance:e,connectionid:n};window.localStorage.setItem("userAccount",JSON.stringify(c));var s=JSON.parse(localStorage.getItem("userAccount"));j(s),a(!0)};return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"app",children:[Object(x.jsx)("img",{src:p,alt:"imgfile"}),Object(x.jsxs)("div",{className:"app-wrapper",children:[Object(x.jsx)("div",{className:"app-header",children:Object(x.jsxs)("h1",{style:{fontWeight:"normal"},children:[" ",Object(x.jsx)("b",{children:"ABC Wallet"})," Provider API Demo"]})}),!n&&Object(x.jsx)("div",{children:Object(x.jsx)("button",{className:"connect-button",onClick:b,children:"Connect to ABC Wallet"})})]}),n&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"data-wrapper",children:[Object(x.jsx)("h2",{className:"completed",children:Object(x.jsx)("b",{children:"Completed !"})}),Object(x.jsxs)("div",{className:"app-details",children:[Object(x.jsx)("span",{children:Object(x.jsx)("b",{children:"Account number : "})}),l.account]}),Object(x.jsxs)("div",{className:"app-details",children:[Object(x.jsx)("span",{children:Object(x.jsx)("b",{children:"Balance : "})}),l.balance]}),Object(x.jsxs)("div",{className:"app-details",children:[Object(x.jsx)("span",{children:Object(x.jsx)("b",{children:"Connection ID : "})}),l.connectionid]})]}),Object(x.jsx)("div",{children:Object(x.jsx)("button",{className:"disconnect-button",onClick:function(){window.localStorage.removeItem("userAccount"),j({}),a(!1)},children:"Disconnect"})})]}),!window.abc&&Object(x.jsxs)("div",{className:"button-wrapper",children:[Object(x.jsxs)("p",{className:"button-text",children:["\uc544\uc9c1 ",Object(x.jsx)("b",{children:"ABC Wellet"}),"\uc744 \uc124\uce58\ud558\uc9c0 \uc54a\uc73c\uc168\ub124\uc694."]}),Object(x.jsxs)("p",{className:"button-text",children:["\uc9c0\uae08  ",Object(x.jsx)("b",{children:"ABC Wellet"}),"\uc744 ",Object(x.jsx)("a",{href:"https://chrome.google.com/webstore/detail/abc-wallet/mlhakagmgkmonhdonhkpjeebfphligng?hl=ko&",className:"underline",target:"_blank",rel:"noopener noreferrer",children:"Download"})," \ubc1b\uc73c\uc138\uc694!"]})]})]})})};r.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(f,{})}),document.getElementById("root"))}},[[525,1,2]]]);
//# sourceMappingURL=main.05562c68.chunk.js.map