(window["webpackJsonpreact-circular-slider"]=window["webpackJsonpreact-circular-slider"]||[]).push([[0],{13:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(5),i=n.n(o),c=(n(13),n(1)),s=n(6),l=n(7);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(n,!0).forEach(function(t){Object(s.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var f="ontouchstart"in window,m={DOWN:f?"touchstart":"mousedown",UP:f?"touchend":"mouseup",MOVE:f?"touchmove":"mousemove"},g=function(e){var t=e.width,n=void 0===t?280:t,o=e.labelColor,i=void 0===o?"#322777":o,s=e.progressColors,u=void 0===s?{from:"#80C3F3",to:"#4990E2"}:s,f=e.progressSize,g=void 0===f?4:f,p=e.trackColor,h=void 0===p?"#DDDEFB":p,v=e.trackSize,b=void 0===v?4:v,w=Object(a.useState)({mounted:!1,isDragging:!1,width:0,radius:0,degrees:0,indicator:{radians:-1,x:0,y:0},dashFullArray:0,dashFullOffset:0}),O=Object(l.a)(w,2),y=O[0],E=O[1],F=Object(a.useRef)(null),j=Object(a.useRef)(null),x=Object(a.useCallback)(function(){var e=F.current.getBoundingClientRect(),t=window.pageXOffset||document.documentElement.scrollLeft,n=window.pageYOffset||document.documentElement.scrollTop;return{top:e.top+n,left:e.left+t,radius:e.width/2}},[]),D=Object(a.useCallback)(function(e){var t=y.radius,n=e+1.5708,a=(n>0?n:2*Math.PI+n)*(360/(2*Math.PI)),r=y.dashFullArray-a/360*y.dashFullArray;E(function(n){return d({},n,{dashFullOffset:r,degrees:Math.round(a),indicator:{radians:e,x:t*Math.cos(e)+t,y:t*Math.sin(e)+t}})})},[y.dashFullArray,y.radius]),k=Object(a.useCallback)(function(e){e.preventDefault(),E(function(e){return d({},e,{isDragging:!0})})},[]),C=Object(a.useCallback)(function(e){if(e.preventDefault(),y.isDragging){var t;"touchmove"===e.type&&(t=e.changedTouches[0]);var n=("touchmove"===e.type?t.pageX:e.pageX)-(x().left+y.radius),a=("touchmove"===e.type?t.pageY:e.pageY)-(x().top+y.radius),r=Math.atan2(a,n);D(r)}},[y.isDragging,y.radius,D,x]),P=function(e){e.preventDefault(),E(function(e){return d({},e,{isDragging:!1})})},M=function(e){E(function(t){return d({},t,{width:e.currentTarget.innerWidth})})};Object(a.useEffect)(function(){var e=x(),t=j.current.getTotalLength();E(function(n){return d({},n,{mounted:!0,dashFullArray:t,dashFullOffset:t,radius:e.radius,indicator:{radians:0,x:e.radius,y:0}})})},[x,y.width]),Object(a.useEffect)(function(){return window.addEventListener("resize",M),y.isDragging?(window.addEventListener(m.MOVE,C,{passive:!1}),window.addEventListener(m.UP,P,{passive:!1}),function(){window.removeEventListener(m.MOVE,C),window.removeEventListener(m.UP,P)}):function(){window.removeEventListener("resize",M)}},[y.isDragging,C]);var S=c.a.create({circularSlider:{position:"relative",display:"inline-block",opacity:0,transition:"opacity 1s ease-in"},mounted:{opacity:1},indicator:{position:"absolute",left:"-18px",top:"-18px",cursor:"grab",zIndex:3},svg:{position:"relative",zIndex:2},drag:{cursor:"grabbing"},pause:{animationPlayState:"paused"},animation:{animationDuration:"1500ms",transformOrigin:"50% 50%",animationIterationCount:"infinite",animationTimingFunction:"ease-out",animationName:[{"0%":{transform:"scale(1)"},"50%":{transform:"scale(0.8)"},"100%":{transform:"scale(1)"}}]},labels:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:"".concat(i),zIndex:1},value:{fontSize:"4rem",marginBottom:"2rem"},description:{fontSize:"1rem",textTransform:"uppercase"}});return r.a.createElement("div",{className:Object(c.b)(S.circularSlider,y.mounted&&S.mounted),ref:F},r.a.createElement("svg",{width:"".concat(n,"px"),height:"".concat(n,"px"),viewBox:"0 0 ".concat(n," ").concat(n),overflow:"visible",className:Object(c.b)(S.svg)},r.a.createElement("defs",null,r.a.createElement("linearGradient",{id:"gradient",x2:"0%",y2:"100%"},r.a.createElement("stop",{offset:"0%",stopColor:u.from}),r.a.createElement("stop",{offset:"100%",stopColor:u.to}))),r.a.createElement("circle",{strokeWidth:b,fill:"none",stroke:h,cx:n/2,cy:n/2,r:n/2}),r.a.createElement("path",{ref:j,strokeDasharray:y.dashFullArray,strokeDashoffset:y.dashFullOffset,strokeWidth:g,strokeLinecap:"round",fill:"none",stroke:"url(#gradient)",d:"\n                        M ".concat(n/2,", ").concat(n/2,"\n                        m 0, -").concat(n/2,"\n                        a ").concat(n/2,",").concat(n/2," 0 0,1 0,").concat(n,"\n                        a -").concat(n/2,",-").concat(n/2," 0 0,1 0,-").concat(n,"\n                    ")})),r.a.createElement("div",{style:{transform:"translate(".concat(y.indicator.x,"px, ").concat(y.indicator.y,"px)")},className:Object(c.b)(S.indicator,y.isDragging&&S.drag,y.isDragging&&S.pause),onMouseDown:k,onTouchStart:k},r.a.createElement("svg",{width:"36px",height:"36px",viewBox:"0 0 36 36"},r.a.createElement("circle",{fill:"#5C4BEA",fillOpacity:"0.2",stroke:"none",cx:"18",cy:"18",r:"18",className:Object(c.b)(!y.isDragging&&S.animation)}),r.a.createElement("circle",{fill:"#5C4BEA",stroke:"none",cx:"18",cy:"18",r:"12"}),r.a.createElement("rect",{fill:"#FFFFFF",x:"13",y:"14",width:"9",height:"1"}),r.a.createElement("rect",{fill:"#FFFFFF",x:"13",y:"17",width:"9",height:"1"}),r.a.createElement("rect",{fill:"#FFFFFF",x:"13",y:"20",width:"9",height:"1"}))),r.a.createElement("div",{className:Object(c.b)(S.labels)},r.a.createElement("div",{className:Object(c.b)(S.description)},"Degrees"),r.a.createElement("div",{className:Object(c.b)(S.value)},r.a.createElement("code",null,y.degrees,"\xb0"))))},p=function(){var e=c.a.create({wrapper:{marginTop:"4rem",textAlign:"center"}});return r.a.createElement("div",{className:Object(c.b)(e.wrapper)},r.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.752605a2.chunk.js.map