(this.webpackJsonpbitcoin=this.webpackJsonpbitcoin||[]).push([[0],{14:function(e,a,t){e.exports={content:"RatePage_content__yytUS",table:"RatePage_table__2JzMk",cell:"RatePage_cell__3QRxP",leftCell:"RatePage_leftCell__2C4W2",rightCell:"RatePage_rightCell__M59RY",title:"RatePage_title__2KQGg",value:"RatePage_value__2qUj-",increment:"RatePage_increment__2gBmN",decrement:"RatePage_decrement__1GpRZ"}},198:function(e,a,t){e.exports=t(400)},203:function(e,a,t){},204:function(e,a,t){},26:function(e,a,t){e.exports={header:"Header_header__2L7GB",menu:"Header_menu__3mquK",nav:"Header_nav__1qDJJ",navItem:"Header_navItem__1sOzd",logo:"Header_logo__2gTyR"}},400:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(33),c=t.n(l),o=(t(203),t(204),t(22)),i=t(26),s=t.n(i),m=t(34),u=function(){return r.a.createElement("div",{className:s.a.header},r.a.createElement("div",{className:s.a.menu},r.a.createElement("div",{className:s.a.logo}),r.a.createElement("ul",{className:s.a.nav},r.a.createElement("li",null,r.a.createElement(m.b,{className:s.a.navItem,to:"/rate"},"\u041a\u0443\u0440\u0441")),r.a.createElement("li",null,r.a.createElement(m.b,{className:s.a.navItem,to:"/graph"},"\u0413\u0440\u0430\u0444\u0438\u043a")))))},p=t(8),d=t(14),_=t.n(d),E=function(){var e=Object(o.c)((function(e){return e.quotations}));return r.a.createElement("div",{className:"".concat(_.a.content," container")},r.a.createElement("div",{className:_.a.table},r.a.createElement("div",{className:"".concat(_.a.cell," ").concat(_.a.leftCell," ").concat(e.increment?_.a.increment:_.a.decrement)},r.a.createElement("p",{className:_.a.title},"current"),r.a.createElement("p",{className:_.a.value},r.a.createElement("span",null,"1 \u20bf")," ",r.a.createElement("br",null),r.a.createElement("span",null,e.newVal," $"))),r.a.createElement("div",{className:"".concat(_.a.cell," ").concat(_.a.rightCell)},r.a.createElement("p",{className:_.a.title},"past"),r.a.createElement("p",{className:_.a.value},r.a.createElement("span",null,"1 \u20bf")," ",r.a.createElement("br",null),r.a.createElement("span",null,e.postVal," $")))),console.log(e.valuesArr))},v=t(155),h=t(156),f=t(169),g=t(168),b=t(27),w=function(e){Object(f.a)(t,e);var a=Object(g.a)(t);function t(){return Object(v.a)(this,t),a.apply(this,arguments)}return Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement(b.b,{width:this.props.width+100,height:450,data:this.props.data,margin:{top:5,right:30,left:20,bottom:5}},r.a.createElement(b.c,{strokeDasharray:"3 3"}),r.a.createElement(b.e,{dataKey:"name"}),r.a.createElement(b.f,null),r.a.createElement(b.d,null),r.a.createElement(b.a,{dataKey:"pv",fill:"#8884d8"}))}}]),t}(n.PureComponent);w.jsfiddleUrl="https://jsfiddle.net/alidingling/30763kr7/";var j=t(94),N=t.n(j),O=function(){var e=Object(o.c)((function(e){return e.quotations.valuesArr})),a=0,t=e.map((function(e){return a+=15,{name:Math.floor(a/60)+":"+a%60,pv:e}})),n=t.length>4?30*t.length:150;return r.a.createElement("div",{className:"".concat(N.a.content," container")},r.a.createElement("div",{className:N.a.wrapper},r.a.createElement(w,{data:t,width:n})))},V=t(167),P=t(49),y=t(165).create({baseURL:"https://api.cryptonator.com/api/ticker/btc-usd"}),R=function(){return y.get().then((function(e){return e.data}))},k={newVal:0,postVal:0,valuesArr:[],increment:!0},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_NEW_VAL":return Object(P.a)(Object(P.a)({},e),{},{valuesArr:[].concat(Object(V.a)(e.valuesArr.slice(-39)),[a.newVal]),newVal:a.newVal,increment:a.newVal>=e.postVal});case"SET_POST_VAL":return Object(P.a)(Object(P.a)({},e),{},{postVal:e.newVal});default:return e}},C=function(){var e=Object(o.b)();return Object(n.useEffect)((function(){e((function(e){setInterval((function(){e({type:"SET_POST_VAL"}),R().then((function(a){e({type:"SET_NEW_VAL",newVal:Math.round(100*a.ticker.price)/100})}))}),15e3)}))}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(u,null),r.a.createElement(p.a,{path:"/rate",render:function(){return r.a.createElement(E,null)}}),r.a.createElement(p.a,{path:"/graph",render:function(){return r.a.createElement(O,null)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=t(39),T=t(166),q=Object(S.c)({quotations:A}),G=Object(S.d)(q,Object(S.a)(T.a));window.store=G;var I=G;c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m.a,null,r.a.createElement(o.a,{store:I},r.a.createElement(C,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},94:function(e,a,t){e.exports={content:"GraphPage_content__2maCj",wrapper:"GraphPage_wrapper__jGNFw"}}},[[198,1,2]]]);
//# sourceMappingURL=main.ffcbbf94.chunk.js.map