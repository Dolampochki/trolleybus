(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,t,a){e.exports=a(12)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),s=a.n(r),o=(a(10),a(1));a(11);function c(e){var t=Object(n.useState)(window.innerWidth),a=Object(o.a)(t,2),r=a[0],s=a[1],c=16;c=b(r);var i=Object(n.useState)(c),u=Object(o.a)(i,2),d=u[0],E=u[1];function b(e){for(var t=2;t<17;t++)e/t>=100&&(c=t);return c}Object(n.useEffect)(function(){var e=function(){return s(window.innerWidth)};window.addEventListener("resize",e),c=b(r);var t=function(){return E(c)};return window.addEventListener("resize",t),function(){window.removeEventListener("resize",e),window.removeEventListener("resize",t)}});var N=Object(n.useState)(4),f=Object(o.a)(N,2),v=f[0],p=f[1],w=Object(n.useState)("blue"),y=Object(o.a)(w,2),h=y[0],k=y[1],g=Object(n.useState)(!0),S=Object(o.a)(g,2),B=S[0],j=S[1],O=Object(n.useState)(d<=4&&!0),I=Object(o.a)(O,2),z=I[0],L=I[1];return l.a.createElement("div",null,l.a.createElement("div",{className:"btns"},l.a.createElement("div",{className:"btn-group btn-group-size"},l.a.createElement("button",{id:"btnPlusMainSize",className:"btn btn-plus",onClick:function(){E(d+2),L(!1)}},"+"),l.a.createElement("button",{id:"btnMinusMainSize",className:"btn btn-minus",onClick:function(e){d>2&&E(d-2),d<=4&&L(!0)},disabled:z},"-")),l.a.createElement("div",{className:"btn-group btn-group-items"},l.a.createElement("button",{className:"btn btn-plus",onClick:function(){p(v+1),j(!1)}},v),l.a.createElement("button",{className:"btn btn-minus",onClick:function(){v>4&&p(v-1),v<=5&&j(!0)},disabled:B},v-2)),l.a.createElement("div",{className:"btn-group btn-group-color"},l.a.createElement("button",{className:"btn btn-blue",onClick:function(){return k("blue")}}),l.a.createElement("button",{className:"btn btn-red",onClick:function(){return k("red")}}))),l.a.createElement("div",{className:"trolleybuscontainer"},l.a.createElement(m,{trolleybusBlocksItemsNum:v,mainSize:d,trolleybusColor:h})))}function m(e){return l.a.createElement("div",{className:"trolleybus ".concat(e.trolleybusColor),style:{fontSize:e.mainSize+"px"}},l.a.createElement(d,null),l.a.createElement(i,{trolleybusBlocksItemsNum:e.trolleybusBlocksItemsNum}))}function i(e){for(var t=e.trolleybusBlocksItemsNum,a=[],n=0;n<t;n++)a.push(l.a.createElement(u,{key:n.toString(),itemNum:n,last:n===t-1&&!0}));return l.a.createElement("div",{className:"trolleybus-blocks"},a)}function u(e){var t=4;return t=0===e.itemNum||e.last?1:4,l.a.createElement("div",{className:"trolleybus-blocks-item trolleybus-blocks-item-".concat(e.itemNum).concat(e.last?" last":"")},0===e.itemNum&&l.a.createElement(b,null),e.itemNum>2&&!e.last&&l.a.createElement(f,null),e.itemNum>2&&!e.last&&l.a.createElement(p,{sideSimple:!0,sideBottomItemsNum:0}),e.itemNum>0&&l.a.createElement(j,{frontDoor:1===e.itemNum&&!0}),l.a.createElement(p,{sideBottomItemsNum:t,trolleybusBlocksLast:e.last,trolleybusBlocksFront:0===e.itemNum}),e.last&&l.a.createElement(N,null))}function d(e){return l.a.createElement("div",{className:"trolleybus-top"},l.a.createElement("ul",{className:"trolleybus-top-rectangles"},l.a.createElement("li",{className:"trolleybus-top-rectangles-item"}),l.a.createElement("li",{className:"trolleybus-top-rectangles-item"})),l.a.createElement("ul",{className:"trolleybus-top-horns"},l.a.createElement(E,null),l.a.createElement(E,null)))}function E(e){for(var t=[],a=0;a<10;a++)t.push(l.a.createElement("li",{key:a.toString(),className:"trolleybus-top-horns-item-part"}));return l.a.createElement("ul",{className:"trolleybus-top-horns-item"},t)}function b(e){return l.a.createElement("div",{className:"front"},l.a.createElement("div",{className:"mirrow"}),l.a.createElement("div",{className:"wiper"}),l.a.createElement("div",{className:"light"}),l.a.createElement("div",{className:"bumper"}))}function N(e){return l.a.createElement("div",{className:"back"},l.a.createElement("div",{className:"handle"}),l.a.createElement("div",{className:"light"}),l.a.createElement("div",{className:"bumper"}))}function f(){return l.a.createElement("div",{className:"separator"},l.a.createElement(v,null),l.a.createElement(v,null))}function v(){for(var e=[],t=0;t<8;t++)e.push(l.a.createElement("li",{key:t.toString(),className:"separator-block-item"},l.a.createElement("div",{className:"separator-block-item-right"}),l.a.createElement("div",{className:"separator-block-item-left"})));return l.a.createElement("ul",{className:"separator-block"},e)}function p(e){return l.a.createElement("div",{className:"side".concat(e.sideSimple?" side-simple":"")},!e.sideSimple&&l.a.createElement(w,{trolleybusBlocksLast:e.trolleybusBlocksLast,trolleybusBlocksFront:e.trolleybusBlocksFront}),l.a.createElement(S,null),l.a.createElement(k,{sideBottomItemsNum:e.sideBottomItemsNum}))}function w(e){for(var t=e.trolleybusBlocksLast?1:2,a=[],n=0;n<t;n++)a.push(l.a.createElement(y,{key:n.toString(),sideWindowsItemTop:!e.trolleybusBlocksFront&&!e.trolleybusBlocksLast}));return l.a.createElement("div",{className:"side-windows"},a)}function y(e){return l.a.createElement("div",{className:"side-windows-item"},e.sideWindowsItemTop&&l.a.createElement(h,null))}function h(e){return l.a.createElement("ul",{className:"side-windows-item-top"},l.a.createElement("li",{className:"side-windows-item-top-right"}),l.a.createElement("li",{className:"side-windows-item-top-left"}))}function k(e){for(var t=[],a=!1,n=e.sideBottomItemsNum,r=0;r<n;r++)a=2===r,t.push(l.a.createElement(g,{key:r.toString(),wheelExist:a,keyNum:r}));return l.a.createElement("ul",{className:"side-bottom"},t)}function g(e){return l.a.createElement("li",{key:e.keyNum.toString(),className:"side-bottom-item".concat(e.wheelExist?" wheel-exist":"")},e.wheelExist&&l.a.createElement(B,null))}function S(e){return l.a.createElement("div",{className:"side-middle"})}function B(e){for(var t=[],a=[],n=[],r=0;r<24;r++)t.push(l.a.createElement("li",{key:r.toString(),className:"wheel-body-external-item"}));for(var s=0;s<5;s++)a.push(l.a.createElement("li",{key:s.toString(),className:"wheel-body-internal1-item"})),n.push(l.a.createElement("li",{key:s.toString(),className:"wheel-body-internal2-item"}));return l.a.createElement("div",{className:"wheel"},l.a.createElement("div",{className:"wheel-frame"}),l.a.createElement("div",{className:"wheel-body"},l.a.createElement("ul",{className:"wheel-body-external"},t),l.a.createElement("ul",{className:"wheel-body-internal1"},a),l.a.createElement("ul",{className:"wheel-body-internal2"},n),l.a.createElement("div",{className:"wheel-body-circle1"}),l.a.createElement("div",{className:"wheel-body-circle2"})))}function j(e){return l.a.createElement("div",{className:"door"},l.a.createElement(O,{frontDoor:e.frontDoor}),l.a.createElement(O,{frontDoor:e.frontDoor}))}function O(e){return l.a.createElement("div",{className:"door-half"},l.a.createElement(I,null),!e.frontDoor&&l.a.createElement(I,null))}function I(e){return l.a.createElement("div",{className:"door-half-item"},l.a.createElement(z,{position:"top"}),l.a.createElement(z,{position:"bottom"}))}function z(e){return l.a.createElement("div",{className:"door-half-item-window position-".concat(e.position)})}document.title="Trolleybus";var L=function(){return l.a.createElement("div",{className:"app"},l.a.createElement(c,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[4,1,2]]]);
//# sourceMappingURL=main.d71feb77.chunk.js.map