module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=8)}([function(e,t,r){e.exports=r(4)()},function(e,t){e.exports=require("react")},function(e,t,r){(function(t){var r;r="undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},e.exports=r}).call(this,r(3))},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){"use strict";var n=r(5);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,i){if(i!==n){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){(t=r(7)(!1)).push([e.i,"@keyframes pulse {\r\n\t0% {\r\n\t\ttransform: scale(1);\r\n\t}\r\n\t50% {\r\n\t\ttransform: scale(0.8);\r\n\t}\r\n\t100% {\r\n\t\ttransform: scale(1);\r\n\t}\r\n}\r\n",""]),e.exports=t},function(e,t,r){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=function(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var o=(i=n,l=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(c," */")),a=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[r].concat(a).concat([o]).join("\n")}var i,l,c;return[r].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);n&&o[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),t.push(c))}},t}},function(e,t,r){"use strict";r.r(t);var n=r(1),o=r.n(n),a=r(2),i=r.n(a),l=r(0),c=r.n(l);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p=function(e,t){switch(t.type){case"init":case"changeValues":case"setKnobPosition":return s(s({},e),t.payload);case"onMouseDown":case"onMouseUp":case"setInitialKnobPosition":return s(s({},e),t.payload);default:throw new Error}},d=function(e,t){var r=Object(n.useRef)(null);Object(n.useEffect)((function(){r.current=t}),[t]),Object(n.useEffect)((function(){if(void 0!==i.a){var t=function(e){return r.current(e)};return i.a.addEventListener(e,t,{passive:!1}),function(){i.a.removeEventListener(e,t)}}}),[e])};function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var y=function(){var e=b(Object(n.useState)(!0),2),t=e[0],r=e[1];return Object(n.useEffect)((function(){r(!1)}),[]),t};r(6);function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var O=function(e){var t=e.isDragging,r=e.knobPosition,n=e.knobColor,a=e.knobSize,i=e.hideKnob,l=e.onMouseDown,c=e.trackSize,u=e.children,s={knob:{position:"absolute",left:"-".concat(a/2-c/2,"px"),top:"-".concat(a/2-c/2,"px"),cursor:"grab",zIndex:3},dragging:{cursor:"grabbing"},pause:{animationPlayState:"paused"},animation:{transformOrigin:"50% 50%",animationTimingFunction:"ease-out",animationDuration:"1500ms",animationIterationCount:"infinite",animationName:"pulse"},hide:{opacity:0}};return o.a.createElement("div",{style:m(m(m({transform:"translate(".concat(r.x,"px, ").concat(r.y,"px)")},s.knob),t&&s.dragging),i&&s.hide),onMouseDown:l,onTouchStart:l},o.a.createElement("svg",{width:"".concat(a,"px"),height:"".concat(a,"px"),viewBox:"0 0 ".concat(a," ").concat(a)},o.a.createElement("circle",{style:m(m({},s.animation),t&&s.pause),fill:n,fillOpacity:"0.2",stroke:"none",cx:a/2,cy:a/2,r:a/2}),o.a.createElement("circle",{fill:n,stroke:"none",cx:a/2,cy:a/2,r:2*a/3/2}),u||o.a.createElement("svg",{width:"".concat(a,"px"),height:"".concat(a,"px"),viewBox:"0 0 36 36"},o.a.createElement("rect",{fill:"#FFFFFF",x:"14",y:"14",width:"8",height:"1"}),o.a.createElement("rect",{fill:"#FFFFFF",x:"14",y:"17",width:"8",height:"1"}),o.a.createElement("rect",{fill:"#FFFFFF",x:"14",y:"20",width:"8",height:"1"}))))};O.propTypes={isDragging:c.a.bool,knobPosition:c.a.object,knobColor:c.a.string,knobRadius:c.a.number,knobSize:c.a.number,trackSize:c.a.number,children:c.a.element,onMouseDown:c.a.func};var j=O;function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){k(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function k(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var S=function(e){var t=e.labelColor,r=e.labelBottom,n=e.labelFontSize,a=e.valueFontSize,i=e.appendToValue,l=e.prependToValue,c=e.verticalOffset,u=e.hideLabelValue,s=e.label,f=e.value,p={labels:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:"".concat(t),userSelect:"none",zIndex:1},value:{fontSize:"".concat(a),position:"relative"},bottomMargin:{marginBottom:"calc(".concat(c,")")},appended:{position:"absolute",right:"0",top:"0",transform:"translate(100%, 0)"},prepended:{position:"absolute",left:"0",top:"0",transform:"translate(-100%, 0)"},hide:{display:"none"}};return o.a.createElement("div",{style:P(P({},p.labels),u&&p.hide)},r||o.a.createElement("div",{style:{fontSize:n}},s),o.a.createElement("div",{style:P(P({},p.value),!r&&p.bottomMargin)},o.a.createElement("code",null,o.a.createElement("span",{style:p.prepended},l),f,o.a.createElement("span",{style:p.appended},i))),r&&o.a.createElement("div",{style:{fontSize:n}},s))};S.propTypes={label:c.a.string.isRequired,value:c.a.string.isRequired,labelColor:c.a.string,labelBottom:c.a.bool,labelFontSize:c.a.string,valueFontSize:c.a.string,appendToValue:c.a.string,prependToValue:c.a.string,verticalOffset:c.a.string,hideLabelValue:c.a.bool};var E=S,x=function(e){var t=e.width,r=e.label,n=e.direction,a=e.strokeDasharray,i=e.strokeDashoffset,l=e.progressColorFrom,c=e.progressColorTo,u=e.trackColor,s=e.progressSize,f=e.trackSize,p=e.svgFullPath,d=e.radiansOffset,b=e.progressLineCap,g={svg:{position:"relative",zIndex:2},path:{transform:"rotate(".concat(d,"rad) ").concat(-1===n?"scale(-1, 1)":"scale(1, 1)"),transformOrigin:"center center"}},y=f/2,v=t/2-y;return o.a.createElement("svg",{width:"".concat(t,"px"),height:"".concat(t,"px"),viewBox:"0 0 ".concat(t," ").concat(t),overflow:"visible",style:g.svg},o.a.createElement("defs",null,o.a.createElement("linearGradient",{id:r,x1:"100%",x2:"0%"},o.a.createElement("stop",{offset:"0%",stopColor:l}),o.a.createElement("stop",{offset:"100%",stopColor:c}))),o.a.createElement("circle",{strokeWidth:f,fill:"none",stroke:u,cx:t/2,cy:t/2,r:v}),o.a.createElement("path",{style:g.path,ref:p,strokeDasharray:a,strokeDashoffset:i,strokeWidth:s,strokeLinecap:"round"!==b?"butt":"round",fill:"none",stroke:"url(#".concat(r,")"),d:"\n                        M ".concat(t/2,", ").concat(t/2,"\n                        m 0, -").concat(t/2-y,"\n                        a ").concat(t/2-y,",").concat(t/2-y," 0 0,1 0,").concat(t-2*y,"\n                        a -").concat(t/2-y,",-").concat(t/2-y," 0 0,1 0,-").concat(t-2*y,"\n                    ")}))};x.propTypes={width:c.a.number,label:c.a.string,direction:c.a.number,svgFullPath:c.a.object,strokeDasharray:c.a.number,strokeDashoffset:c.a.number,progressColorFrom:c.a.string,progressColorTo:c.a.string,progressLineCap:c.a.string,progressSize:c.a.number,trackColor:c.a.string,trackSize:c.a.number,radiansOffset:c.a.number};var F=x;function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){T(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function T(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function z(e){return function(e){if(Array.isArray(e))return A(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||I(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}(e,t)||I(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){if(e){if("string"==typeof e)return A(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?A(e,t):void 0}}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var L={top:Math.PI/2,right:0,bottom:-Math.PI/2,left:-Math.PI},V=function(e){return e<0?-1:1},R=function(e){return e*Math.PI/180},_=function(e,t){for(var r=[],n=e;n<=t;n++)r.push(n);return r},B={circularSlider:{position:"relative",display:"inline-block",opacity:0,transition:"opacity 1s ease-in"},mounted:{opacity:1}},U=function(e){var t=e.label,r=void 0===t?"ANGLE":t,a=e.width,l=void 0===a?280:a,c=e.direction,u=void 0===c?1:c,s=e.min,f=void 0===s?0:s,b=e.max,g=void 0===b?360:b,v=e.knobColor,m=void 0===v?"#4e63ea":v,h=e.knobSize,O=void 0===h?36:h,w=e.knobPosition,P=void 0===w?"top":w,k=e.labelColor,S=void 0===k?"#272b77":k,x=e.labelBottom,D=void 0!==x&&x,T=e.labelFontSize,I=void 0===T?"1rem":T,A=e.valueFontSize,U=void 0===A?"3rem":A,K=e.appendToValue,W=void 0===K?"":K,N=e.prependToValue,q=void 0===N?"":N,Y=e.verticalOffset,X=void 0===Y?"1.5rem":Y,G=e.hideLabelValue,$=void 0!==G&&G,H=e.hideKnob,J=void 0!==H&&H,Q=e.knobDraggable,Z=void 0===Q||Q,ee=e.progressColorFrom,te=void 0===ee?"#80C3F3":ee,re=e.progressColorTo,ne=void 0===re?"#4990E2":re,oe=e.progressSize,ae=void 0===oe?8:oe,ie=e.trackColor,le=void 0===ie?"#DDDEFB":ie,ce=e.trackSize,ue=void 0===ce?8:ce,se=e.data,fe=void 0===se?[]:se,pe=e.dataIndex,de=void 0===pe?0:pe,be=e.progressLineCap,ge=void 0===be?"round":be,ye=e.renderLabelValue,ve=void 0===ye?null:ye,me=e.children,he=e.onChange,Oe=void 0===he?function(e){}:he,je={mounted:!1,isDragging:!1,width:l,radius:l/2,knobPosition:P,label:0,data:fe,radians:0,offset:0,knob:{x:0,y:0},dashFullArray:0,dashFullOffset:0},we=y(),Pe=M(Object(n.useReducer)(p,je),2),ke=Pe[0],Se=Pe[1],Ee=Object(n.useRef)(null),xe=Object(n.useRef)(null),Fe=!we&&"ontouchstart"in i.a,De={DOWN:Fe?"touchstart":"mousedown",UP:Fe?"touchend":"mouseup",MOVE:Fe?"touchmove":"mousemove"},Ce=Object(n.useCallback)((function(e){var t=ke.radius-ue/2,r=e+L[P],n=(r>0?r:2*Math.PI+r)*(360/(2*Math.PI)),o=n/360*ke.dashFullArray;n=-1===V(u)?360-n:n;var a=(ke.data.length-1)/360,i=Math.round(n*a);ke.data[i]!==ke.label&&Oe(ke.data[i]),Se({type:"setKnobPosition",payload:{dashFullOffset:-1===V(u)?o:ke.dashFullArray-o,label:ke.data[i],knob:{x:t*Math.cos(e)+t,y:t*Math.sin(e)+t}}})}),[ke.dashFullArray,ke.radius,ke.data,ke.label,P,ue,u,Oe]),Te=Object(n.useCallback)((function(e){if(ke.isDragging){var t;e.preventDefault(),"touchmove"===e.type&&(t=e.changedTouches[0]);var r=function(e){var t,r,n,o,a,l,c,u,s=e.current.getBoundingClientRect(),f=!we&&((null!==(t=null===i.a||void 0===i.a?void 0:i.a.pageXOffset)&&void 0!==t?t:0)||(null!==(r=null===(n=document)||void 0===n||null===(o=n.documentElement)||void 0===o?void 0:o.scrollLeft)&&void 0!==r?r:0)),p=!we&&((null!==(a=null===i.a||void 0===i.a?void 0:i.a.pageYOffset)&&void 0!==a?a:0)||(null!==(l=null===(c=document)||void 0===c||null===(u=c.documentElement)||void 0===u?void 0:u.scrollTop)&&void 0!==l?l:0));return{top:s.top+p,left:s.left+f}},n=("touchmove"===e.type?t.pageX:e.pageX)-(r(Ee).left+ke.radius),o=("touchmove"===e.type?t.pageY:e.pageY)-(r(Ee).top+ke.radius),a=Math.atan2(o,n);Ce(a)}}),[ke.isDragging,ke.radius,Ce,we]);Object(n.useEffect)((function(){Se({type:"init",payload:{mounted:!0,data:ke.data.length?z(ke.data):z(_(f,g)),dashFullArray:xe.current.getTotalLength?xe.current.getTotalLength():0}})}),[g,f]),Object(n.useEffect)((function(){console.log(l),Se({type:"changeValues",payload:{width:l,radius:l/2}})}),[l]),Object(n.useEffect)((function(){var e=ke.data.length,t=de>e-1?e-1:de;if(e){var r=360/e,n=R(r)/2;if(Se({type:"setInitialKnobPosition",payload:{radians:Math.PI/2-L[ke.knobPosition],offset:n}}),t){var o=V(u)*t*r,a=R(o)-L[ke.knobPosition];return Ce(a+n*V(u))}Ce(-L[ke.knobPosition]*V(u)+n*V(u))}}),[ke.dashFullArray,ke.knobPosition,ke.data.length,de,u]),d(De.MOVE,Te),d(De.UP,(function(){Se({type:"onMouseUp",payload:{isDragging:!1}})}));var ze=r.replace(/[\W_]/g,"_");return o.a.createElement("div",{style:C(C({},B.circularSlider),ke.mounted&&B.mounted),ref:Ee},o.a.createElement(F,{width:l,label:ze,direction:u,strokeDasharray:ke.dashFullArray,strokeDashoffset:ke.dashFullOffset,svgFullPath:xe,progressSize:ae,progressColorFrom:te,progressColorTo:ne,progressLineCap:ge,trackColor:le,trackSize:ue,radiansOffset:ke.radians}),Z&&o.a.createElement(j,{isDragging:ke.isDragging,knobPosition:{x:ke.knob.x,y:ke.knob.y},knobSize:O,knobColor:m,trackSize:ue,hideKnob:J,onMouseDown:function(){Se({type:"onMouseDown",payload:{isDragging:!0}})}},me),ve||o.a.createElement(E,{label:r,labelColor:S,labelBottom:D,labelFontSize:I,verticalOffset:X,valueFontSize:U,appendToValue:W,prependToValue:q,hideLabelValue:$,value:"".concat(ke.label)}))};U.propTypes={label:c.a.string,width:c.a.number,direction:c.a.number,min:c.a.number,max:c.a.number,knobColor:c.a.string,knobPosition:c.a.string,hideKnob:c.a.bool,knobDraggable:c.a.bool,labelColor:c.a.string,labelBottom:c.a.bool,labelFontSize:c.a.string,valueFontSize:c.a.string,appendToValue:c.a.string,renderLabelValue:c.a.element,prependToValue:c.a.string,verticalOffset:c.a.string,hideLabelValue:c.a.bool,progressLineCap:c.a.string,progressColorFrom:c.a.string,progressColorTo:c.a.string,progressSize:c.a.number,trackColor:c.a.string,trackSize:c.a.number,data:c.a.array,dataIndex:c.a.number,onChange:c.a.func};t.default=U}]);