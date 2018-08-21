!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("ProgressBarReact",[],t):"object"==typeof exports?exports.ProgressBarReact=t():e.ProgressBarReact=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=o.default},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(2),s=function(e){return e&&e.__esModule?e:{default:e}}(a);n(8);var c=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={L:0},n}return i(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this,t=this.refs.progressBtn,n=this.refs.progressBar,r=n.offsetWidth,o=this.refs.progressInner;t.onmousedown=function(i){var i=i||window.event,u=i.clientX-t.offsetLeft;return document.onmousemove=function(i){var i=i||window.event,a=i.clientX-u;a<=0?a=0:a>=n.offsetWidth-t.offsetWidth&&(a=n.offsetWidth-t.offsetWidth),e.setState({L:Math.ceil(100*a/r)},function(){t.style.left=e.state.L+"%",o.style.width=e.state.L+"%"})},document.onmouseup=function(){document.onmousemove=null},!1}}},{key:"render",value:function(){return s.default.createElement("div",{className:"react-progress"},s.default.createElement("div",{ref:"progressBar",className:"react-outer-progress"},s.default.createElement("div",{ref:"progressInner",style:{width:this.state.L+"%"},className:"react-inner-progress"}),s.default.createElement("div",{ref:"progressBtn",style:{left:this.state.L+"%"},className:"react-inner-progress-btn"})))}}]),t}(a.Component);t.default=c},function(e,t,n){"use strict";e.exports=n(3)},function(e,t,n){"use strict";function r(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);m(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}function o(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||L}function i(){}function u(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||L}function a(e,t,n){var r=void 0,o={},i=null,u=null;if(null!=t)for(r in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(i=""+t.key),t)M.call(t,r)&&!B.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(1===a)o.children=n;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===o[r]&&(o[r]=a[r]);return{$$typeof:j,type:e,key:i,ref:u,props:o,_owner:$.current}}function s(e){return"object"==typeof e&&null!==e&&e.$$typeof===j}function c(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}function f(e,t,n,r){if(T.length){var o=T.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function l(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>T.length&&T.push(e)}function p(e,t,n,o){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var u=!1;if(null===e)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case j:case O:u=!0}}if(u)return n(o,e,""===t?"."+d(e,0):t),1;if(u=0,t=""===t?".":t+":",Array.isArray(e))for(var a=0;a<e.length;a++){i=e[a];var s=t+d(i,a);u+=p(i,s,n,o)}else if(null===e||void 0===e?s=null:(s=U&&e[U]||e["@@iterator"],s="function"==typeof s?s:null),"function"==typeof s)for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=t+d(i,a++),u+=p(i,s,n,o);else"object"===i&&(n=""+e,r("31","[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return u}function d(e,t){return"object"==typeof e&&null!==e&&null!=e.key?c(e.key):t.toString(36)}function h(e,t){e.func.call(e.context,t,e.count++)}function y(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?v(e,r,n,w.thatReturnsArgument):null!=e&&(s(e)&&(t=o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(N,"$&/")+"/")+n,e={$$typeof:j,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}),r.push(e))}function v(e,t,n,r,o){var i="";null!=n&&(i=(""+n).replace(N,"$&/")+"/"),t=f(t,i,r,o),null==e||p(e,"",y,t),l(t)}/** @license React v16.4.2
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b=n(4),m=n(5),g=n(6),w=n(7),x="function"==typeof Symbol&&Symbol.for,j=x?Symbol.for("react.element"):60103,O=x?Symbol.for("react.portal"):60106,_=x?Symbol.for("react.fragment"):60107,S=x?Symbol.for("react.strict_mode"):60108,R=x?Symbol.for("react.profiler"):60114,k=x?Symbol.for("react.provider"):60109,E=x?Symbol.for("react.context"):60110,P=x?Symbol.for("react.async_mode"):60111,C=x?Symbol.for("react.forward_ref"):60112;x&&Symbol.for("react.timeout");var U="function"==typeof Symbol&&Symbol.iterator,L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};o.prototype.isReactComponent={},o.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&r("85"),this.updater.enqueueSetState(this,e,t,"setState")},o.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},i.prototype=o.prototype;var A=u.prototype=new i;A.constructor=u,b(A,o.prototype),A.isPureReactComponent=!0;var $={current:null},M=Object.prototype.hasOwnProperty,B={key:!0,ref:!0,__self:!0,__source:!0},N=/\/+/g,T=[],I={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return v(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;t=f(null,null,t,n),null==e||p(e,"",h,t),l(t)},count:function(e){return null==e?0:p(e,"",w.thatReturnsNull,null)},toArray:function(e){var t=[];return v(e,t,null,w.thatReturnsArgument),t},only:function(e){return s(e)||r("143"),e}},createRef:function(){return{current:null}},Component:o,PureComponent:u,createContext:function(e,t){return void 0===t&&(t=null),e={$$typeof:E,_calculateChangedBits:t,_defaultValue:e,_currentValue:e,_currentValue2:e,_changedBits:0,_changedBits2:0,Provider:null,Consumer:null},e.Provider={$$typeof:k,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:C,render:e}},Fragment:_,StrictMode:S,unstable_AsyncMode:P,unstable_Profiler:R,createElement:a,cloneElement:function(e,t,n){(null===e||void 0===e)&&r("267",e);var o=void 0,i=b({},e.props),u=e.key,a=e.ref,s=e._owner;if(null!=t){void 0!==t.ref&&(a=t.ref,s=$.current),void 0!==t.key&&(u=""+t.key);var c=void 0;e.type&&e.type.defaultProps&&(c=e.type.defaultProps);for(o in t)M.call(t,o)&&!B.hasOwnProperty(o)&&(i[o]=void 0===t[o]&&void 0!==c?c[o]:t[o])}if(1===(o=arguments.length-2))i.children=n;else if(1<o){c=Array(o);for(var f=0;f<o;f++)c[f]=arguments[f+2];i.children=c}return{$$typeof:j,type:e.type,key:u,ref:a,props:i,_owner:s}},createFactory:function(e){var t=a.bind(null,e);return t.type=e,t},isValidElement:s,version:"16.4.2",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:$,assign:b}},q={default:I},F=q&&I||q;e.exports=F.default?F.default:F},function(e,t,n){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,a,s=r(e),c=1;c<arguments.length;c++){n=Object(arguments[c]);for(var f in n)i.call(n,f)&&(s[f]=n[f]);if(o){a=o(n);for(var l=0;l<a.length;l++)u.call(n,a[l])&&(s[a[l]]=n[a[l]])}}return s}},function(e,t,n){"use strict";function r(e,t,n,r,i,u,a,s){if(o(t),!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=[n,r,i,u,a,s],l=0;c=new Error(t.replace(/%s/g,function(){return f[l++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}}var o=function(e){};e.exports=r},function(e,t,n){"use strict";var r={};e.exports=r},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){var r=n(9);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0};o.transform=void 0,o.insertInto=void 0;n(11)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){t=e.exports=n(10)(!1),t.push([e.i,".react-progress {\n  width: 100%;\n  height: 6px;\n}\n.react-outer-progress {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: #ccc;\n  border-radius: 3px;\n}\n.react-inner-progress {\n  height: 100%;\n  position: absolute;\n  left: 0;\n  background: #3d83fe;\n  z-index: 8;\n  border-radius: 3px;\n}\n.react-inner-progress-btn {\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: #fff;\n  z-index: 9;\n  top: 50%;\n  margin-top: -4px;\n}\n.react-inner-progress-btn::after{\n  content: '';\n  position: absolute;\n  width: 4px;\n  height: 4px;\n  border-radius: 50%;\n  left: 50%;\n  top: 50%;\n  margin-top: -2px;\n  margin-left: -2px;\n  background-color: blue;\n}",""])},function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var u=e[o];"number"==typeof u[0]&&r[u[0]]||(n&&!u[2]?u[2]=n:n&&(u[2]="("+u[2]+") and ("+n+")"),t.push(u))}},t}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=y[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(l(r.parts[i],t))}else{for(var u=[],i=0;i<r.parts.length;i++)u.push(l(r.parts[i],t));y[r.id]={id:r.id,refs:1,parts:u}}}}function o(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],u=t.base?i[0]+t.base:i[0],a=i[1],s=i[2],c=i[3],f={css:a,media:s,sourceMap:c};r[u]?r[u].parts.push(f):n.push(r[u]={id:u,parts:[f]})}return n}function i(e,t){var n=m(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=x[x.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),x.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=m(e.insertAt.before,n);n.insertBefore(t,o)}}function u(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=x.indexOf(e);t>=0&&x.splice(t,1)}function a(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var n=f();n&&(e.attrs.nonce=n)}return c(t,e.attrs),i(e,t),t}function s(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",c(t,e.attrs),i(e,t),t}function c(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function f(){return n.nc}function l(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var c=w++;n=g||(g=a(t)),r=p.bind(null,n,c,!1),o=p.bind(null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=s(t),r=h.bind(null,n,t),o=function(){u(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(t),r=d.bind(null,n),o=function(){u(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function p(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=O(t,o);else{var i=document.createTextNode(o),u=e.childNodes;u[t]&&e.removeChild(u[t]),u.length?e.insertBefore(i,u[t]):e.appendChild(i)}}function d(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function h(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=j(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var u=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(u),a&&URL.revokeObjectURL(a)}var y={},v=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),b=function(e,t){return t?t.querySelector(e):document.querySelector(e)},m=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=b.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),g=null,w=0,x=[],j=n(12);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=v()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=o(e,t);return r(n,t),function(e){for(var i=[],u=0;u<n.length;u++){var a=n[u],s=y[a.id];s.refs--,i.push(s)}if(e){r(o(e,t),t)}for(var u=0;u<i.length;u++){var s=i[u];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete y[s.id]}}}};var O=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o))return e;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}}])});
//# sourceMappingURL=index.js.map