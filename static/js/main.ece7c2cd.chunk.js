(this.webpackJsonptask3=this.webpackJsonptask3||[]).push([[0],{21:function(t,e,n){t.exports={root:"Container_root__3ya_r"}},3:function(t,e,n){t.exports={root:"QuoteGenerator_root__rrK0t",topButtonsContainer:"QuoteGenerator_topButtonsContainer__2xlg7",btn_nav:"QuoteGenerator_btn_nav__2jC1S",quoteContainer:"QuoteGenerator_quoteContainer__22GAh",quote:"QuoteGenerator_quote__2eoiZ",author:"QuoteGenerator_author__3GH20",btn_draw:"QuoteGenerator_btn_draw__1s75D"}},46:function(t,e,n){},47:function(t,e,n){"use strict";n.r(e);var o=n(2),a=n.n(o),r=n(20),c=n.n(r),s=n(21),u=n.n(s),i=n(0),b=function(t){var e=t.children;return Object(i.jsx)("div",{className:u.a.root,children:e})},l=n(10),h=n(11),j=n(3),d=n.n(j),f=n(9),_=n.n(f),O=n(22),v=function(t){var e=t.className,n="https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json ",a=Object(o.useState)({}),r=Object(h.a)(a,2),c=r[0],s=r[1],u=Object(o.useState)([]),b=Object(h.a)(u,2),j=b[0],f=b[1];Object(o.useEffect)((function(){_.a.get(n).then((function(t){var e=t.data,n=e[Math.floor(Math.random()*e.length)];s(n),f([].concat(Object(l.a)(j),[n]))})).catch((function(t){return console.log("error to:",t.message)}))}),[]);var v=j.indexOf(c),x=c&&c.quote,g=c&&c.author;return Object(i.jsxs)("div",{className:Object(O.a)(e,d.a.root),children:[Object(i.jsxs)("div",{className:d.a.topButtonsContainer,children:[Object(i.jsx)("button",{className:d.a.btn_nav,onClick:function(){return function(){if(v<1)alert("There is no previous quote..");else{var t=j[v-1];s(t)}}()},children:"prev quote"}),Object(i.jsx)("button",{className:d.a.btn_nav,onClick:function(){return function(){if(v>=j.length-1)alert("There is no next quote..");else{var t=j[v+1];s(t)}}()},children:"next quote"})]}),Object(i.jsxs)("div",{className:d.a.quoteContainer,children:[Object(i.jsxs)("p",{className:d.a.quote,children:['"',x,'"']}),Object(i.jsxs)("p",{className:d.a.author,children:["\u2013 ",g]})]}),Object(i.jsx)("button",{className:d.a.btn_draw,onClick:function(){_.a.get(n).then((function(t){var e=t.data,n=e[Math.floor(Math.random()*e.length)];s(n),f([].concat(Object(l.a)(j),[n]))})).catch((function(t){return console.log("error to:",t.message)}))},children:"draw quote"})]})};n(46);var x=function(){return Object(i.jsx)("div",{children:Object(i.jsx)(b,{children:Object(i.jsx)(v,{})})})},g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(e){var n=e.getCLS,o=e.getFID,a=e.getFCP,r=e.getLCP,c=e.getTTFB;n(t),o(t),a(t),r(t),c(t)}))};c.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(x,{})}),document.getElementById("root")),g()}},[[47,1,2]]]);
//# sourceMappingURL=main.ece7c2cd.chunk.js.map