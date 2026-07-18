var qS=Object.defineProperty;var KS=(t,e,n)=>e in t?qS(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Xg=(t,e,n)=>KS(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function ZS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Zv={exports:{}},vh={},Jv={exports:{}},$e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yl=Symbol.for("react.element"),JS=Symbol.for("react.portal"),QS=Symbol.for("react.fragment"),eM=Symbol.for("react.strict_mode"),tM=Symbol.for("react.profiler"),nM=Symbol.for("react.provider"),iM=Symbol.for("react.context"),rM=Symbol.for("react.forward_ref"),sM=Symbol.for("react.suspense"),oM=Symbol.for("react.memo"),aM=Symbol.for("react.lazy"),$g=Symbol.iterator;function lM(t){return t===null||typeof t!="object"?null:(t=$g&&t[$g]||t["@@iterator"],typeof t=="function"?t:null)}var Qv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},e2=Object.assign,t2={};function Ia(t,e,n){this.props=t,this.context=e,this.refs=t2,this.updater=n||Qv}Ia.prototype.isReactComponent={};Ia.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ia.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function n2(){}n2.prototype=Ia.prototype;function Rm(t,e,n){this.props=t,this.context=e,this.refs=t2,this.updater=n||Qv}var bm=Rm.prototype=new n2;bm.constructor=Rm;e2(bm,Ia.prototype);bm.isPureReactComponent=!0;var jg=Array.isArray,i2=Object.prototype.hasOwnProperty,Pm={current:null},r2={key:!0,ref:!0,__self:!0,__source:!0};function s2(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)i2.call(e,i)&&!r2.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Yl,type:t,key:s,ref:o,props:r,_owner:Pm.current}}function cM(t,e){return{$$typeof:Yl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Lm(t){return typeof t=="object"&&t!==null&&t.$$typeof===Yl}function uM(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Yg=/\/+/g;function hf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?uM(""+t.key):e.toString(36)}function ru(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Yl:case JS:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+hf(o,0):i,jg(r)?(n="",t!=null&&(n=t.replace(Yg,"$&/")+"/"),ru(r,e,n,"",function(c){return c})):r!=null&&(Lm(r)&&(r=cM(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Yg,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",jg(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+hf(s,a);o+=ru(s,e,n,l,r)}else if(l=lM(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+hf(s,a++),o+=ru(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function mc(t,e,n){if(t==null)return t;var i=[],r=0;return ru(t,i,"","",function(s){return e.call(n,s,r++)}),i}function hM(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var In={current:null},su={transition:null},fM={ReactCurrentDispatcher:In,ReactCurrentBatchConfig:su,ReactCurrentOwner:Pm};function o2(){throw Error("act(...) is not supported in production builds of React.")}$e.Children={map:mc,forEach:function(t,e,n){mc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return mc(t,function(){e++}),e},toArray:function(t){return mc(t,function(e){return e})||[]},only:function(t){if(!Lm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};$e.Component=Ia;$e.Fragment=QS;$e.Profiler=tM;$e.PureComponent=Rm;$e.StrictMode=eM;$e.Suspense=sM;$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fM;$e.act=o2;$e.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=e2({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Pm.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)i2.call(e,l)&&!r2.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Yl,type:t.type,key:r,ref:s,props:i,_owner:o}};$e.createContext=function(t){return t={$$typeof:iM,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:nM,_context:t},t.Consumer=t};$e.createElement=s2;$e.createFactory=function(t){var e=s2.bind(null,t);return e.type=t,e};$e.createRef=function(){return{current:null}};$e.forwardRef=function(t){return{$$typeof:rM,render:t}};$e.isValidElement=Lm;$e.lazy=function(t){return{$$typeof:aM,_payload:{_status:-1,_result:t},_init:hM}};$e.memo=function(t,e){return{$$typeof:oM,type:t,compare:e===void 0?null:e}};$e.startTransition=function(t){var e=su.transition;su.transition={};try{t()}finally{su.transition=e}};$e.unstable_act=o2;$e.useCallback=function(t,e){return In.current.useCallback(t,e)};$e.useContext=function(t){return In.current.useContext(t)};$e.useDebugValue=function(){};$e.useDeferredValue=function(t){return In.current.useDeferredValue(t)};$e.useEffect=function(t,e){return In.current.useEffect(t,e)};$e.useId=function(){return In.current.useId()};$e.useImperativeHandle=function(t,e,n){return In.current.useImperativeHandle(t,e,n)};$e.useInsertionEffect=function(t,e){return In.current.useInsertionEffect(t,e)};$e.useLayoutEffect=function(t,e){return In.current.useLayoutEffect(t,e)};$e.useMemo=function(t,e){return In.current.useMemo(t,e)};$e.useReducer=function(t,e,n){return In.current.useReducer(t,e,n)};$e.useRef=function(t){return In.current.useRef(t)};$e.useState=function(t){return In.current.useState(t)};$e.useSyncExternalStore=function(t,e,n){return In.current.useSyncExternalStore(t,e,n)};$e.useTransition=function(){return In.current.useTransition()};$e.version="18.3.1";Jv.exports=$e;var bt=Jv.exports;const dM=ZS(bt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pM=bt,mM=Symbol.for("react.element"),gM=Symbol.for("react.fragment"),_M=Object.prototype.hasOwnProperty,vM=pM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yM={key:!0,ref:!0,__self:!0,__source:!0};function a2(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)_M.call(e,i)&&!yM.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:mM,type:t,key:s,ref:o,props:r,_owner:vM.current}}vh.Fragment=gM;vh.jsx=a2;vh.jsxs=a2;Zv.exports=vh;var ae=Zv.exports,Cd={},l2={exports:{}},ci={},c2={exports:{}},u2={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,K){var J=L.length;L.push(K);e:for(;0<J;){var re=J-1>>>1,Ie=L[re];if(0<r(Ie,K))L[re]=K,L[J]=Ie,J=re;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var K=L[0],J=L.pop();if(J!==K){L[0]=J;e:for(var re=0,Ie=L.length,je=Ie>>>1;re<je;){var X=2*(re+1)-1,te=L[X],ue=X+1,Z=L[ue];if(0>r(te,J))ue<Ie&&0>r(Z,te)?(L[re]=Z,L[ue]=J,re=ue):(L[re]=te,L[X]=J,re=X);else if(ue<Ie&&0>r(Z,J))L[re]=Z,L[ue]=J,re=ue;else break e}}return K}function r(L,K){var J=L.sortIndex-K.sortIndex;return J!==0?J:L.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,d=null,f=3,g=!1,p=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var K=n(c);K!==null;){if(K.callback===null)i(c);else if(K.startTime<=L)i(c),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(c)}}function M(L){if(y=!1,v(L),!p)if(n(l)!==null)p=!0,V(R);else{var K=n(c);K!==null&&q(M,K.startTime-L)}}function R(L,K){p=!1,y&&(y=!1,u(b),b=-1),g=!0;var J=f;try{for(v(K),d=n(l);d!==null&&(!(d.expirationTime>K)||L&&!E());){var re=d.callback;if(typeof re=="function"){d.callback=null,f=d.priorityLevel;var Ie=re(d.expirationTime<=K);K=t.unstable_now(),typeof Ie=="function"?d.callback=Ie:d===n(l)&&i(l),v(K)}else i(l);d=n(l)}if(d!==null)var je=!0;else{var X=n(c);X!==null&&q(M,X.startTime-K),je=!1}return je}finally{d=null,f=J,g=!1}}var A=!1,T=null,b=-1,H=5,x=-1;function E(){return!(t.unstable_now()-x<H)}function F(){if(T!==null){var L=t.unstable_now();x=L;var K=!0;try{K=T(!0,L)}finally{K?U():(A=!1,T=null)}}else A=!1}var U;if(typeof _=="function")U=function(){_(F)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,$=W.port2;W.port1.onmessage=F,U=function(){$.postMessage(null)}}else U=function(){m(F,0)};function V(L){T=L,A||(A=!0,U())}function q(L,K){b=m(function(){L(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){p||g||(p=!0,V(R))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(f){case 1:case 2:case 3:var K=3;break;default:K=f}var J=f;f=K;try{return L()}finally{f=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,K){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var J=f;f=L;try{return K()}finally{f=J}},t.unstable_scheduleCallback=function(L,K,J){var re=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?re+J:re):J=re,L){case 1:var Ie=-1;break;case 2:Ie=250;break;case 5:Ie=1073741823;break;case 4:Ie=1e4;break;default:Ie=5e3}return Ie=J+Ie,L={id:h++,callback:K,priorityLevel:L,startTime:J,expirationTime:Ie,sortIndex:-1},J>re?(L.sortIndex=J,e(c,L),n(l)===null&&L===n(c)&&(y?(u(b),b=-1):y=!0,q(M,J-re))):(L.sortIndex=Ie,e(l,L),p||g||(p=!0,V(R))),L},t.unstable_shouldYield=E,t.unstable_wrapCallback=function(L){var K=f;return function(){var J=f;f=K;try{return L.apply(this,arguments)}finally{f=J}}}})(u2);c2.exports=u2;var xM=c2.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var SM=bt,oi=xM;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h2=new Set,Cl={};function xo(t,e){ca(t,e),ca(t+"Capture",e)}function ca(t,e){for(Cl[t]=e,t=0;t<e.length;t++)h2.add(e[t])}var kr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rd=Object.prototype.hasOwnProperty,MM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qg={},Kg={};function EM(t){return Rd.call(Kg,t)?!0:Rd.call(qg,t)?!1:MM.test(t)?Kg[t]=!0:(qg[t]=!0,!1)}function wM(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function TM(t,e,n,i){if(e===null||typeof e>"u"||wM(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Dn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var _n={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_n[t]=new Dn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];_n[e]=new Dn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){_n[t]=new Dn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_n[t]=new Dn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_n[t]=new Dn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){_n[t]=new Dn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){_n[t]=new Dn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){_n[t]=new Dn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){_n[t]=new Dn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Im=/[\-:]([a-z])/g;function Dm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Im,Dm);_n[e]=new Dn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Im,Dm);_n[e]=new Dn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Im,Dm);_n[e]=new Dn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){_n[t]=new Dn(t,1,!1,t.toLowerCase(),null,!1,!1)});_n.xlinkHref=new Dn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){_n[t]=new Dn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Nm(t,e,n,i){var r=_n.hasOwnProperty(e)?_n[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(TM(e,n,r,i)&&(n=null),i||r===null?EM(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Xr=SM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gc=Symbol.for("react.element"),Bo=Symbol.for("react.portal"),zo=Symbol.for("react.fragment"),Um=Symbol.for("react.strict_mode"),bd=Symbol.for("react.profiler"),f2=Symbol.for("react.provider"),d2=Symbol.for("react.context"),Fm=Symbol.for("react.forward_ref"),Pd=Symbol.for("react.suspense"),Ld=Symbol.for("react.suspense_list"),Om=Symbol.for("react.memo"),rs=Symbol.for("react.lazy"),p2=Symbol.for("react.offscreen"),Zg=Symbol.iterator;function Wa(t){return t===null||typeof t!="object"?null:(t=Zg&&t[Zg]||t["@@iterator"],typeof t=="function"?t:null)}var Ft=Object.assign,ff;function ol(t){if(ff===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ff=e&&e[1]||""}return`
`+ff+t}var df=!1;function pf(t,e){if(!t||df)return"";df=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{df=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ol(t):""}function AM(t){switch(t.tag){case 5:return ol(t.type);case 16:return ol("Lazy");case 13:return ol("Suspense");case 19:return ol("SuspenseList");case 0:case 2:case 15:return t=pf(t.type,!1),t;case 11:return t=pf(t.type.render,!1),t;case 1:return t=pf(t.type,!0),t;default:return""}}function Id(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case zo:return"Fragment";case Bo:return"Portal";case bd:return"Profiler";case Um:return"StrictMode";case Pd:return"Suspense";case Ld:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case d2:return(t.displayName||"Context")+".Consumer";case f2:return(t._context.displayName||"Context")+".Provider";case Fm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Om:return e=t.displayName||null,e!==null?e:Id(t.type)||"Memo";case rs:e=t._payload,t=t._init;try{return Id(t(e))}catch{}}return null}function CM(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Id(e);case 8:return e===Um?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Es(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function m2(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function RM(t){var e=m2(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function _c(t){t._valueTracker||(t._valueTracker=RM(t))}function g2(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=m2(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Lu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Dd(t,e){var n=e.checked;return Ft({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Jg(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Es(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function _2(t,e){e=e.checked,e!=null&&Nm(t,"checked",e,!1)}function Nd(t,e){_2(t,e);var n=Es(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ud(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ud(t,e.type,Es(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Qg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ud(t,e,n){(e!=="number"||Lu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var al=Array.isArray;function Qo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Es(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Fd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return Ft({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function e1(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(al(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Es(n)}}function v2(t,e){var n=Es(e.value),i=Es(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function t1(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function y2(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Od(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?y2(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var vc,x2=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(vc=vc||document.createElement("div"),vc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=vc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Rl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var dl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bM=["Webkit","ms","Moz","O"];Object.keys(dl).forEach(function(t){bM.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),dl[e]=dl[t]})});function S2(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||dl.hasOwnProperty(t)&&dl[t]?(""+e).trim():e+"px"}function M2(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=S2(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var PM=Ft({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kd(t,e){if(e){if(PM[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Bd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zd=null;function km(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Vd=null,ea=null,ta=null;function n1(t){if(t=Zl(t)){if(typeof Vd!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=Eh(e),Vd(t.stateNode,t.type,e))}}function E2(t){ea?ta?ta.push(t):ta=[t]:ea=t}function w2(){if(ea){var t=ea,e=ta;if(ta=ea=null,n1(t),e)for(t=0;t<e.length;t++)n1(e[t])}}function T2(t,e){return t(e)}function A2(){}var mf=!1;function C2(t,e,n){if(mf)return t(e,n);mf=!0;try{return T2(t,e,n)}finally{mf=!1,(ea!==null||ta!==null)&&(A2(),w2())}}function bl(t,e){var n=t.stateNode;if(n===null)return null;var i=Eh(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var Hd=!1;if(kr)try{var Xa={};Object.defineProperty(Xa,"passive",{get:function(){Hd=!0}}),window.addEventListener("test",Xa,Xa),window.removeEventListener("test",Xa,Xa)}catch{Hd=!1}function LM(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var pl=!1,Iu=null,Du=!1,Gd=null,IM={onError:function(t){pl=!0,Iu=t}};function DM(t,e,n,i,r,s,o,a,l){pl=!1,Iu=null,LM.apply(IM,arguments)}function NM(t,e,n,i,r,s,o,a,l){if(DM.apply(this,arguments),pl){if(pl){var c=Iu;pl=!1,Iu=null}else throw Error(ne(198));Du||(Du=!0,Gd=c)}}function So(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function R2(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function i1(t){if(So(t)!==t)throw Error(ne(188))}function UM(t){var e=t.alternate;if(!e){if(e=So(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return i1(r),t;if(s===i)return i1(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function b2(t){return t=UM(t),t!==null?P2(t):null}function P2(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=P2(t);if(e!==null)return e;t=t.sibling}return null}var L2=oi.unstable_scheduleCallback,r1=oi.unstable_cancelCallback,FM=oi.unstable_shouldYield,OM=oi.unstable_requestPaint,jt=oi.unstable_now,kM=oi.unstable_getCurrentPriorityLevel,Bm=oi.unstable_ImmediatePriority,I2=oi.unstable_UserBlockingPriority,Nu=oi.unstable_NormalPriority,BM=oi.unstable_LowPriority,D2=oi.unstable_IdlePriority,yh=null,lr=null;function zM(t){if(lr&&typeof lr.onCommitFiberRoot=="function")try{lr.onCommitFiberRoot(yh,t,void 0,(t.current.flags&128)===128)}catch{}}var Wi=Math.clz32?Math.clz32:GM,VM=Math.log,HM=Math.LN2;function GM(t){return t>>>=0,t===0?32:31-(VM(t)/HM|0)|0}var yc=64,xc=4194304;function ll(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Uu(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=ll(a):(s&=o,s!==0&&(i=ll(s)))}else o=n&~r,o!==0?i=ll(o):s!==0&&(i=ll(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Wi(e),r=1<<n,i|=t[n],e&=~r;return i}function WM(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function XM(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Wi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=WM(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Wd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function N2(){var t=yc;return yc<<=1,!(yc&4194240)&&(yc=64),t}function gf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ql(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Wi(e),t[e]=n}function $M(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Wi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function zm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Wi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var dt=0;function U2(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var F2,Vm,O2,k2,B2,Xd=!1,Sc=[],fs=null,ds=null,ps=null,Pl=new Map,Ll=new Map,os=[],jM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function s1(t,e){switch(t){case"focusin":case"focusout":fs=null;break;case"dragenter":case"dragleave":ds=null;break;case"mouseover":case"mouseout":ps=null;break;case"pointerover":case"pointerout":Pl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ll.delete(e.pointerId)}}function $a(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Zl(e),e!==null&&Vm(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function YM(t,e,n,i,r){switch(e){case"focusin":return fs=$a(fs,t,e,n,i,r),!0;case"dragenter":return ds=$a(ds,t,e,n,i,r),!0;case"mouseover":return ps=$a(ps,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Pl.set(s,$a(Pl.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ll.set(s,$a(Ll.get(s)||null,t,e,n,i,r)),!0}return!1}function z2(t){var e=Qs(t.target);if(e!==null){var n=So(e);if(n!==null){if(e=n.tag,e===13){if(e=R2(n),e!==null){t.blockedOn=e,B2(t.priority,function(){O2(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ou(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=$d(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);zd=i,n.target.dispatchEvent(i),zd=null}else return e=Zl(n),e!==null&&Vm(e),t.blockedOn=n,!1;e.shift()}return!0}function o1(t,e,n){ou(t)&&n.delete(e)}function qM(){Xd=!1,fs!==null&&ou(fs)&&(fs=null),ds!==null&&ou(ds)&&(ds=null),ps!==null&&ou(ps)&&(ps=null),Pl.forEach(o1),Ll.forEach(o1)}function ja(t,e){t.blockedOn===e&&(t.blockedOn=null,Xd||(Xd=!0,oi.unstable_scheduleCallback(oi.unstable_NormalPriority,qM)))}function Il(t){function e(r){return ja(r,t)}if(0<Sc.length){ja(Sc[0],t);for(var n=1;n<Sc.length;n++){var i=Sc[n];i.blockedOn===t&&(i.blockedOn=null)}}for(fs!==null&&ja(fs,t),ds!==null&&ja(ds,t),ps!==null&&ja(ps,t),Pl.forEach(e),Ll.forEach(e),n=0;n<os.length;n++)i=os[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<os.length&&(n=os[0],n.blockedOn===null);)z2(n),n.blockedOn===null&&os.shift()}var na=Xr.ReactCurrentBatchConfig,Fu=!0;function KM(t,e,n,i){var r=dt,s=na.transition;na.transition=null;try{dt=1,Hm(t,e,n,i)}finally{dt=r,na.transition=s}}function ZM(t,e,n,i){var r=dt,s=na.transition;na.transition=null;try{dt=4,Hm(t,e,n,i)}finally{dt=r,na.transition=s}}function Hm(t,e,n,i){if(Fu){var r=$d(t,e,n,i);if(r===null)Af(t,e,i,Ou,n),s1(t,i);else if(YM(r,t,e,n,i))i.stopPropagation();else if(s1(t,i),e&4&&-1<jM.indexOf(t)){for(;r!==null;){var s=Zl(r);if(s!==null&&F2(s),s=$d(t,e,n,i),s===null&&Af(t,e,i,Ou,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Af(t,e,i,null,n)}}var Ou=null;function $d(t,e,n,i){if(Ou=null,t=km(i),t=Qs(t),t!==null)if(e=So(t),e===null)t=null;else if(n=e.tag,n===13){if(t=R2(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ou=t,null}function V2(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kM()){case Bm:return 1;case I2:return 4;case Nu:case BM:return 16;case D2:return 536870912;default:return 16}default:return 16}}var us=null,Gm=null,au=null;function H2(){if(au)return au;var t,e=Gm,n=e.length,i,r="value"in us?us.value:us.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return au=r.slice(t,1<i?1-i:void 0)}function lu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Mc(){return!0}function a1(){return!1}function ui(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Mc:a1,this.isPropagationStopped=a1,this}return Ft(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Mc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Mc)},persist:function(){},isPersistent:Mc}),e}var Da={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wm=ui(Da),Kl=Ft({},Da,{view:0,detail:0}),JM=ui(Kl),_f,vf,Ya,xh=Ft({},Kl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ya&&(Ya&&t.type==="mousemove"?(_f=t.screenX-Ya.screenX,vf=t.screenY-Ya.screenY):vf=_f=0,Ya=t),_f)},movementY:function(t){return"movementY"in t?t.movementY:vf}}),l1=ui(xh),QM=Ft({},xh,{dataTransfer:0}),eE=ui(QM),tE=Ft({},Kl,{relatedTarget:0}),yf=ui(tE),nE=Ft({},Da,{animationName:0,elapsedTime:0,pseudoElement:0}),iE=ui(nE),rE=Ft({},Da,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),sE=ui(rE),oE=Ft({},Da,{data:0}),c1=ui(oE),aE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=cE[t])?!!e[t]:!1}function Xm(){return uE}var hE=Ft({},Kl,{key:function(t){if(t.key){var e=aE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=lu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?lE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xm,charCode:function(t){return t.type==="keypress"?lu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?lu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),fE=ui(hE),dE=Ft({},xh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),u1=ui(dE),pE=Ft({},Kl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xm}),mE=ui(pE),gE=Ft({},Da,{propertyName:0,elapsedTime:0,pseudoElement:0}),_E=ui(gE),vE=Ft({},xh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),yE=ui(vE),xE=[9,13,27,32],$m=kr&&"CompositionEvent"in window,ml=null;kr&&"documentMode"in document&&(ml=document.documentMode);var SE=kr&&"TextEvent"in window&&!ml,G2=kr&&(!$m||ml&&8<ml&&11>=ml),h1=" ",f1=!1;function W2(t,e){switch(t){case"keyup":return xE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function X2(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Vo=!1;function ME(t,e){switch(t){case"compositionend":return X2(e);case"keypress":return e.which!==32?null:(f1=!0,h1);case"textInput":return t=e.data,t===h1&&f1?null:t;default:return null}}function EE(t,e){if(Vo)return t==="compositionend"||!$m&&W2(t,e)?(t=H2(),au=Gm=us=null,Vo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return G2&&e.locale!=="ko"?null:e.data;default:return null}}var wE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function d1(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!wE[t.type]:e==="textarea"}function $2(t,e,n,i){E2(i),e=ku(e,"onChange"),0<e.length&&(n=new Wm("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var gl=null,Dl=null;function TE(t){iy(t,0)}function Sh(t){var e=Wo(t);if(g2(e))return t}function AE(t,e){if(t==="change")return e}var j2=!1;if(kr){var xf;if(kr){var Sf="oninput"in document;if(!Sf){var p1=document.createElement("div");p1.setAttribute("oninput","return;"),Sf=typeof p1.oninput=="function"}xf=Sf}else xf=!1;j2=xf&&(!document.documentMode||9<document.documentMode)}function m1(){gl&&(gl.detachEvent("onpropertychange",Y2),Dl=gl=null)}function Y2(t){if(t.propertyName==="value"&&Sh(Dl)){var e=[];$2(e,Dl,t,km(t)),C2(TE,e)}}function CE(t,e,n){t==="focusin"?(m1(),gl=e,Dl=n,gl.attachEvent("onpropertychange",Y2)):t==="focusout"&&m1()}function RE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Sh(Dl)}function bE(t,e){if(t==="click")return Sh(e)}function PE(t,e){if(t==="input"||t==="change")return Sh(e)}function LE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $i=typeof Object.is=="function"?Object.is:LE;function Nl(t,e){if($i(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Rd.call(e,r)||!$i(t[r],e[r]))return!1}return!0}function g1(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function _1(t,e){var n=g1(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=g1(n)}}function q2(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?q2(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function K2(){for(var t=window,e=Lu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Lu(t.document)}return e}function jm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function IE(t){var e=K2(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&q2(n.ownerDocument.documentElement,n)){if(i!==null&&jm(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=_1(n,s);var o=_1(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var DE=kr&&"documentMode"in document&&11>=document.documentMode,Ho=null,jd=null,_l=null,Yd=!1;function v1(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yd||Ho==null||Ho!==Lu(i)||(i=Ho,"selectionStart"in i&&jm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),_l&&Nl(_l,i)||(_l=i,i=ku(jd,"onSelect"),0<i.length&&(e=new Wm("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ho)))}function Ec(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Go={animationend:Ec("Animation","AnimationEnd"),animationiteration:Ec("Animation","AnimationIteration"),animationstart:Ec("Animation","AnimationStart"),transitionend:Ec("Transition","TransitionEnd")},Mf={},Z2={};kr&&(Z2=document.createElement("div").style,"AnimationEvent"in window||(delete Go.animationend.animation,delete Go.animationiteration.animation,delete Go.animationstart.animation),"TransitionEvent"in window||delete Go.transitionend.transition);function Mh(t){if(Mf[t])return Mf[t];if(!Go[t])return t;var e=Go[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Z2)return Mf[t]=e[n];return t}var J2=Mh("animationend"),Q2=Mh("animationiteration"),ey=Mh("animationstart"),ty=Mh("transitionend"),ny=new Map,y1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ls(t,e){ny.set(t,e),xo(e,[t])}for(var Ef=0;Ef<y1.length;Ef++){var wf=y1[Ef],NE=wf.toLowerCase(),UE=wf[0].toUpperCase()+wf.slice(1);Ls(NE,"on"+UE)}Ls(J2,"onAnimationEnd");Ls(Q2,"onAnimationIteration");Ls(ey,"onAnimationStart");Ls("dblclick","onDoubleClick");Ls("focusin","onFocus");Ls("focusout","onBlur");Ls(ty,"onTransitionEnd");ca("onMouseEnter",["mouseout","mouseover"]);ca("onMouseLeave",["mouseout","mouseover"]);ca("onPointerEnter",["pointerout","pointerover"]);ca("onPointerLeave",["pointerout","pointerover"]);xo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xo("onBeforeInput",["compositionend","keypress","textInput","paste"]);xo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),FE=new Set("cancel close invalid load scroll toggle".split(" ").concat(cl));function x1(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,NM(i,e,void 0,t),t.currentTarget=null}function iy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;x1(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;x1(r,a,c),s=l}}}if(Du)throw t=Gd,Du=!1,Gd=null,t}function Mt(t,e){var n=e[Qd];n===void 0&&(n=e[Qd]=new Set);var i=t+"__bubble";n.has(i)||(ry(e,t,2,!1),n.add(i))}function Tf(t,e,n){var i=0;e&&(i|=4),ry(n,t,i,e)}var wc="_reactListening"+Math.random().toString(36).slice(2);function Ul(t){if(!t[wc]){t[wc]=!0,h2.forEach(function(n){n!=="selectionchange"&&(FE.has(n)||Tf(n,!1,t),Tf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[wc]||(e[wc]=!0,Tf("selectionchange",!1,e))}}function ry(t,e,n,i){switch(V2(e)){case 1:var r=KM;break;case 4:r=ZM;break;default:r=Hm}n=r.bind(null,e,n,t),r=void 0,!Hd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Af(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Qs(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}C2(function(){var c=s,h=km(n),d=[];e:{var f=ny.get(t);if(f!==void 0){var g=Wm,p=t;switch(t){case"keypress":if(lu(n)===0)break e;case"keydown":case"keyup":g=fE;break;case"focusin":p="focus",g=yf;break;case"focusout":p="blur",g=yf;break;case"beforeblur":case"afterblur":g=yf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=l1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=eE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=mE;break;case J2:case Q2:case ey:g=iE;break;case ty:g=_E;break;case"scroll":g=JM;break;case"wheel":g=yE;break;case"copy":case"cut":case"paste":g=sE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=u1}var y=(e&4)!==0,m=!y&&t==="scroll",u=y?f!==null?f+"Capture":null:f;y=[];for(var _=c,v;_!==null;){v=_;var M=v.stateNode;if(v.tag===5&&M!==null&&(v=M,u!==null&&(M=bl(_,u),M!=null&&y.push(Fl(_,M,v)))),m)break;_=_.return}0<y.length&&(f=new g(f,p,null,n,h),d.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==zd&&(p=n.relatedTarget||n.fromElement)&&(Qs(p)||p[Br]))break e;if((g||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,g?(p=n.relatedTarget||n.toElement,g=c,p=p?Qs(p):null,p!==null&&(m=So(p),p!==m||p.tag!==5&&p.tag!==6)&&(p=null)):(g=null,p=c),g!==p)){if(y=l1,M="onMouseLeave",u="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(y=u1,M="onPointerLeave",u="onPointerEnter",_="pointer"),m=g==null?f:Wo(g),v=p==null?f:Wo(p),f=new y(M,_+"leave",g,n,h),f.target=m,f.relatedTarget=v,M=null,Qs(h)===c&&(y=new y(u,_+"enter",p,n,h),y.target=v,y.relatedTarget=m,M=y),m=M,g&&p)t:{for(y=g,u=p,_=0,v=y;v;v=Eo(v))_++;for(v=0,M=u;M;M=Eo(M))v++;for(;0<_-v;)y=Eo(y),_--;for(;0<v-_;)u=Eo(u),v--;for(;_--;){if(y===u||u!==null&&y===u.alternate)break t;y=Eo(y),u=Eo(u)}y=null}else y=null;g!==null&&S1(d,f,g,y,!1),p!==null&&m!==null&&S1(d,m,p,y,!0)}}e:{if(f=c?Wo(c):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var R=AE;else if(d1(f))if(j2)R=PE;else{R=RE;var A=CE}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(R=bE);if(R&&(R=R(t,c))){$2(d,R,n,h);break e}A&&A(t,f,c),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&Ud(f,"number",f.value)}switch(A=c?Wo(c):window,t){case"focusin":(d1(A)||A.contentEditable==="true")&&(Ho=A,jd=c,_l=null);break;case"focusout":_l=jd=Ho=null;break;case"mousedown":Yd=!0;break;case"contextmenu":case"mouseup":case"dragend":Yd=!1,v1(d,n,h);break;case"selectionchange":if(DE)break;case"keydown":case"keyup":v1(d,n,h)}var T;if($m)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Vo?W2(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(G2&&n.locale!=="ko"&&(Vo||b!=="onCompositionStart"?b==="onCompositionEnd"&&Vo&&(T=H2()):(us=h,Gm="value"in us?us.value:us.textContent,Vo=!0)),A=ku(c,b),0<A.length&&(b=new c1(b,t,null,n,h),d.push({event:b,listeners:A}),T?b.data=T:(T=X2(n),T!==null&&(b.data=T)))),(T=SE?ME(t,n):EE(t,n))&&(c=ku(c,"onBeforeInput"),0<c.length&&(h=new c1("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:c}),h.data=T))}iy(d,e)})}function Fl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ku(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=bl(t,n),s!=null&&i.unshift(Fl(t,s,r)),s=bl(t,e),s!=null&&i.push(Fl(t,s,r))),t=t.return}return i}function Eo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function S1(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=bl(n,s),l!=null&&o.unshift(Fl(n,l,a))):r||(l=bl(n,s),l!=null&&o.push(Fl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var OE=/\r\n?/g,kE=/\u0000|\uFFFD/g;function M1(t){return(typeof t=="string"?t:""+t).replace(OE,`
`).replace(kE,"")}function Tc(t,e,n){if(e=M1(e),M1(t)!==e&&n)throw Error(ne(425))}function Bu(){}var qd=null,Kd=null;function Zd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Jd=typeof setTimeout=="function"?setTimeout:void 0,BE=typeof clearTimeout=="function"?clearTimeout:void 0,E1=typeof Promise=="function"?Promise:void 0,zE=typeof queueMicrotask=="function"?queueMicrotask:typeof E1<"u"?function(t){return E1.resolve(null).then(t).catch(VE)}:Jd;function VE(t){setTimeout(function(){throw t})}function Cf(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Il(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Il(e)}function ms(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function w1(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Na=Math.random().toString(36).slice(2),or="__reactFiber$"+Na,Ol="__reactProps$"+Na,Br="__reactContainer$"+Na,Qd="__reactEvents$"+Na,HE="__reactListeners$"+Na,GE="__reactHandles$"+Na;function Qs(t){var e=t[or];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Br]||n[or]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=w1(t);t!==null;){if(n=t[or])return n;t=w1(t)}return e}t=n,n=t.parentNode}return null}function Zl(t){return t=t[or]||t[Br],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Wo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function Eh(t){return t[Ol]||null}var ep=[],Xo=-1;function Is(t){return{current:t}}function Tt(t){0>Xo||(t.current=ep[Xo],ep[Xo]=null,Xo--)}function yt(t,e){Xo++,ep[Xo]=t.current,t.current=e}var ws={},An=Is(ws),Gn=Is(!1),uo=ws;function ua(t,e){var n=t.type.contextTypes;if(!n)return ws;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Wn(t){return t=t.childContextTypes,t!=null}function zu(){Tt(Gn),Tt(An)}function T1(t,e,n){if(An.current!==ws)throw Error(ne(168));yt(An,e),yt(Gn,n)}function sy(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,CM(t)||"Unknown",r));return Ft({},n,i)}function Vu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ws,uo=An.current,yt(An,t),yt(Gn,Gn.current),!0}function A1(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=sy(t,e,uo),i.__reactInternalMemoizedMergedChildContext=t,Tt(Gn),Tt(An),yt(An,t)):Tt(Gn),yt(Gn,n)}var Cr=null,wh=!1,Rf=!1;function oy(t){Cr===null?Cr=[t]:Cr.push(t)}function WE(t){wh=!0,oy(t)}function Ds(){if(!Rf&&Cr!==null){Rf=!0;var t=0,e=dt;try{var n=Cr;for(dt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Cr=null,wh=!1}catch(r){throw Cr!==null&&(Cr=Cr.slice(t+1)),L2(Bm,Ds),r}finally{dt=e,Rf=!1}}return null}var $o=[],jo=0,Hu=null,Gu=0,vi=[],yi=0,ho=null,Pr=1,Lr="";function $s(t,e){$o[jo++]=Gu,$o[jo++]=Hu,Hu=t,Gu=e}function ay(t,e,n){vi[yi++]=Pr,vi[yi++]=Lr,vi[yi++]=ho,ho=t;var i=Pr;t=Lr;var r=32-Wi(i)-1;i&=~(1<<r),n+=1;var s=32-Wi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Pr=1<<32-Wi(e)+r|n<<r|i,Lr=s+t}else Pr=1<<s|n<<r|i,Lr=t}function Ym(t){t.return!==null&&($s(t,1),ay(t,1,0))}function qm(t){for(;t===Hu;)Hu=$o[--jo],$o[jo]=null,Gu=$o[--jo],$o[jo]=null;for(;t===ho;)ho=vi[--yi],vi[yi]=null,Lr=vi[--yi],vi[yi]=null,Pr=vi[--yi],vi[yi]=null}var si=null,ri=null,Pt=!1,zi=null;function ly(t,e){var n=Mi(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function C1(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,si=t,ri=ms(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,si=t,ri=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ho!==null?{id:Pr,overflow:Lr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Mi(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,si=t,ri=null,!0):!1;default:return!1}}function tp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function np(t){if(Pt){var e=ri;if(e){var n=e;if(!C1(t,e)){if(tp(t))throw Error(ne(418));e=ms(n.nextSibling);var i=si;e&&C1(t,e)?ly(i,n):(t.flags=t.flags&-4097|2,Pt=!1,si=t)}}else{if(tp(t))throw Error(ne(418));t.flags=t.flags&-4097|2,Pt=!1,si=t}}}function R1(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;si=t}function Ac(t){if(t!==si)return!1;if(!Pt)return R1(t),Pt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Zd(t.type,t.memoizedProps)),e&&(e=ri)){if(tp(t))throw cy(),Error(ne(418));for(;e;)ly(t,e),e=ms(e.nextSibling)}if(R1(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ri=ms(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ri=null}}else ri=si?ms(t.stateNode.nextSibling):null;return!0}function cy(){for(var t=ri;t;)t=ms(t.nextSibling)}function ha(){ri=si=null,Pt=!1}function Km(t){zi===null?zi=[t]:zi.push(t)}var XE=Xr.ReactCurrentBatchConfig;function qa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function Cc(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function b1(t){var e=t._init;return e(t._payload)}function uy(t){function e(u,_){if(t){var v=u.deletions;v===null?(u.deletions=[_],u.flags|=16):v.push(_)}}function n(u,_){if(!t)return null;for(;_!==null;)e(u,_),_=_.sibling;return null}function i(u,_){for(u=new Map;_!==null;)_.key!==null?u.set(_.key,_):u.set(_.index,_),_=_.sibling;return u}function r(u,_){return u=ys(u,_),u.index=0,u.sibling=null,u}function s(u,_,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<_?(u.flags|=2,_):v):(u.flags|=2,_)):(u.flags|=1048576,_)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,_,v,M){return _===null||_.tag!==6?(_=Uf(v,u.mode,M),_.return=u,_):(_=r(_,v),_.return=u,_)}function l(u,_,v,M){var R=v.type;return R===zo?h(u,_,v.props.children,M,v.key):_!==null&&(_.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===rs&&b1(R)===_.type)?(M=r(_,v.props),M.ref=qa(u,_,v),M.return=u,M):(M=mu(v.type,v.key,v.props,null,u.mode,M),M.ref=qa(u,_,v),M.return=u,M)}function c(u,_,v,M){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=Ff(v,u.mode,M),_.return=u,_):(_=r(_,v.children||[]),_.return=u,_)}function h(u,_,v,M,R){return _===null||_.tag!==7?(_=so(v,u.mode,M,R),_.return=u,_):(_=r(_,v),_.return=u,_)}function d(u,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Uf(""+_,u.mode,v),_.return=u,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case gc:return v=mu(_.type,_.key,_.props,null,u.mode,v),v.ref=qa(u,null,_),v.return=u,v;case Bo:return _=Ff(_,u.mode,v),_.return=u,_;case rs:var M=_._init;return d(u,M(_._payload),v)}if(al(_)||Wa(_))return _=so(_,u.mode,v,null),_.return=u,_;Cc(u,_)}return null}function f(u,_,v,M){var R=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return R!==null?null:a(u,_,""+v,M);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case gc:return v.key===R?l(u,_,v,M):null;case Bo:return v.key===R?c(u,_,v,M):null;case rs:return R=v._init,f(u,_,R(v._payload),M)}if(al(v)||Wa(v))return R!==null?null:h(u,_,v,M,null);Cc(u,v)}return null}function g(u,_,v,M,R){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(v)||null,a(_,u,""+M,R);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case gc:return u=u.get(M.key===null?v:M.key)||null,l(_,u,M,R);case Bo:return u=u.get(M.key===null?v:M.key)||null,c(_,u,M,R);case rs:var A=M._init;return g(u,_,v,A(M._payload),R)}if(al(M)||Wa(M))return u=u.get(v)||null,h(_,u,M,R,null);Cc(_,M)}return null}function p(u,_,v,M){for(var R=null,A=null,T=_,b=_=0,H=null;T!==null&&b<v.length;b++){T.index>b?(H=T,T=null):H=T.sibling;var x=f(u,T,v[b],M);if(x===null){T===null&&(T=H);break}t&&T&&x.alternate===null&&e(u,T),_=s(x,_,b),A===null?R=x:A.sibling=x,A=x,T=H}if(b===v.length)return n(u,T),Pt&&$s(u,b),R;if(T===null){for(;b<v.length;b++)T=d(u,v[b],M),T!==null&&(_=s(T,_,b),A===null?R=T:A.sibling=T,A=T);return Pt&&$s(u,b),R}for(T=i(u,T);b<v.length;b++)H=g(T,u,b,v[b],M),H!==null&&(t&&H.alternate!==null&&T.delete(H.key===null?b:H.key),_=s(H,_,b),A===null?R=H:A.sibling=H,A=H);return t&&T.forEach(function(E){return e(u,E)}),Pt&&$s(u,b),R}function y(u,_,v,M){var R=Wa(v);if(typeof R!="function")throw Error(ne(150));if(v=R.call(v),v==null)throw Error(ne(151));for(var A=R=null,T=_,b=_=0,H=null,x=v.next();T!==null&&!x.done;b++,x=v.next()){T.index>b?(H=T,T=null):H=T.sibling;var E=f(u,T,x.value,M);if(E===null){T===null&&(T=H);break}t&&T&&E.alternate===null&&e(u,T),_=s(E,_,b),A===null?R=E:A.sibling=E,A=E,T=H}if(x.done)return n(u,T),Pt&&$s(u,b),R;if(T===null){for(;!x.done;b++,x=v.next())x=d(u,x.value,M),x!==null&&(_=s(x,_,b),A===null?R=x:A.sibling=x,A=x);return Pt&&$s(u,b),R}for(T=i(u,T);!x.done;b++,x=v.next())x=g(T,u,b,x.value,M),x!==null&&(t&&x.alternate!==null&&T.delete(x.key===null?b:x.key),_=s(x,_,b),A===null?R=x:A.sibling=x,A=x);return t&&T.forEach(function(F){return e(u,F)}),Pt&&$s(u,b),R}function m(u,_,v,M){if(typeof v=="object"&&v!==null&&v.type===zo&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case gc:e:{for(var R=v.key,A=_;A!==null;){if(A.key===R){if(R=v.type,R===zo){if(A.tag===7){n(u,A.sibling),_=r(A,v.props.children),_.return=u,u=_;break e}}else if(A.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===rs&&b1(R)===A.type){n(u,A.sibling),_=r(A,v.props),_.ref=qa(u,A,v),_.return=u,u=_;break e}n(u,A);break}else e(u,A);A=A.sibling}v.type===zo?(_=so(v.props.children,u.mode,M,v.key),_.return=u,u=_):(M=mu(v.type,v.key,v.props,null,u.mode,M),M.ref=qa(u,_,v),M.return=u,u=M)}return o(u);case Bo:e:{for(A=v.key;_!==null;){if(_.key===A)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){n(u,_.sibling),_=r(_,v.children||[]),_.return=u,u=_;break e}else{n(u,_);break}else e(u,_);_=_.sibling}_=Ff(v,u.mode,M),_.return=u,u=_}return o(u);case rs:return A=v._init,m(u,_,A(v._payload),M)}if(al(v))return p(u,_,v,M);if(Wa(v))return y(u,_,v,M);Cc(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(n(u,_.sibling),_=r(_,v),_.return=u,u=_):(n(u,_),_=Uf(v,u.mode,M),_.return=u,u=_),o(u)):n(u,_)}return m}var fa=uy(!0),hy=uy(!1),Wu=Is(null),Xu=null,Yo=null,Zm=null;function Jm(){Zm=Yo=Xu=null}function Qm(t){var e=Wu.current;Tt(Wu),t._currentValue=e}function ip(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ia(t,e){Xu=t,Zm=Yo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Hn=!0),t.firstContext=null)}function Ai(t){var e=t._currentValue;if(Zm!==t)if(t={context:t,memoizedValue:e,next:null},Yo===null){if(Xu===null)throw Error(ne(308));Yo=t,Xu.dependencies={lanes:0,firstContext:t}}else Yo=Yo.next=t;return e}var eo=null;function e0(t){eo===null?eo=[t]:eo.push(t)}function fy(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,e0(e)):(n.next=r.next,r.next=n),e.interleaved=n,zr(t,i)}function zr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ss=!1;function t0(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Nr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function gs(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,tt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,zr(t,n)}return r=i.interleaved,r===null?(e.next=e,e0(i)):(e.next=r.next,r.next=e),i.interleaved=e,zr(t,n)}function cu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,zm(t,n)}}function P1(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function $u(t,e,n,i){var r=t.updateQueue;ss=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,h=c=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((i&f)===f){h!==null&&(h=h.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var p=t,y=a;switch(f=e,g=n,y.tag){case 1:if(p=y.payload,typeof p=="function"){d=p.call(g,d,f);break e}d=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=y.payload,f=typeof p=="function"?p.call(g,d,f):p,f==null)break e;d=Ft({},d,f);break e;case 2:ss=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=g,l=d):h=h.next=g,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(h===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);po|=o,t.lanes=o,t.memoizedState=d}}function L1(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var Jl={},cr=Is(Jl),kl=Is(Jl),Bl=Is(Jl);function to(t){if(t===Jl)throw Error(ne(174));return t}function n0(t,e){switch(yt(Bl,e),yt(kl,t),yt(cr,Jl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Od(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Od(e,t)}Tt(cr),yt(cr,e)}function da(){Tt(cr),Tt(kl),Tt(Bl)}function py(t){to(Bl.current);var e=to(cr.current),n=Od(e,t.type);e!==n&&(yt(kl,t),yt(cr,n))}function i0(t){kl.current===t&&(Tt(cr),Tt(kl))}var Nt=Is(0);function ju(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var bf=[];function r0(){for(var t=0;t<bf.length;t++)bf[t]._workInProgressVersionPrimary=null;bf.length=0}var uu=Xr.ReactCurrentDispatcher,Pf=Xr.ReactCurrentBatchConfig,fo=0,Ut=null,tn=null,un=null,Yu=!1,vl=!1,zl=0,$E=0;function yn(){throw Error(ne(321))}function s0(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$i(t[n],e[n]))return!1;return!0}function o0(t,e,n,i,r,s){if(fo=s,Ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,uu.current=t===null||t.memoizedState===null?KE:ZE,t=n(i,r),vl){s=0;do{if(vl=!1,zl=0,25<=s)throw Error(ne(301));s+=1,un=tn=null,e.updateQueue=null,uu.current=JE,t=n(i,r)}while(vl)}if(uu.current=qu,e=tn!==null&&tn.next!==null,fo=0,un=tn=Ut=null,Yu=!1,e)throw Error(ne(300));return t}function a0(){var t=zl!==0;return zl=0,t}function nr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?Ut.memoizedState=un=t:un=un.next=t,un}function Ci(){if(tn===null){var t=Ut.alternate;t=t!==null?t.memoizedState:null}else t=tn.next;var e=un===null?Ut.memoizedState:un.next;if(e!==null)un=e,tn=t;else{if(t===null)throw Error(ne(310));tn=t,t={memoizedState:tn.memoizedState,baseState:tn.baseState,baseQueue:tn.baseQueue,queue:tn.queue,next:null},un===null?Ut.memoizedState=un=t:un=un.next=t}return un}function Vl(t,e){return typeof e=="function"?e(t):e}function Lf(t){var e=Ci(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=tn,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((fo&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Ut.lanes|=h,po|=h}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,$i(i,e.memoizedState)||(Hn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Ut.lanes|=s,po|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function If(t){var e=Ci(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);$i(s,e.memoizedState)||(Hn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function my(){}function gy(t,e){var n=Ut,i=Ci(),r=e(),s=!$i(i.memoizedState,r);if(s&&(i.memoizedState=r,Hn=!0),i=i.queue,l0(yy.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||un!==null&&un.memoizedState.tag&1){if(n.flags|=2048,Hl(9,vy.bind(null,n,i,r,e),void 0,null),hn===null)throw Error(ne(349));fo&30||_y(n,e,r)}return r}function _y(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ut.updateQueue,e===null?(e={lastEffect:null,stores:null},Ut.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function vy(t,e,n,i){e.value=n,e.getSnapshot=i,xy(e)&&Sy(t)}function yy(t,e,n){return n(function(){xy(e)&&Sy(t)})}function xy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$i(t,n)}catch{return!0}}function Sy(t){var e=zr(t,1);e!==null&&Xi(e,t,1,-1)}function I1(t){var e=nr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vl,lastRenderedState:t},e.queue=t,t=t.dispatch=qE.bind(null,Ut,t),[e.memoizedState,t]}function Hl(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Ut.updateQueue,e===null?(e={lastEffect:null,stores:null},Ut.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function My(){return Ci().memoizedState}function hu(t,e,n,i){var r=nr();Ut.flags|=t,r.memoizedState=Hl(1|e,n,void 0,i===void 0?null:i)}function Th(t,e,n,i){var r=Ci();i=i===void 0?null:i;var s=void 0;if(tn!==null){var o=tn.memoizedState;if(s=o.destroy,i!==null&&s0(i,o.deps)){r.memoizedState=Hl(e,n,s,i);return}}Ut.flags|=t,r.memoizedState=Hl(1|e,n,s,i)}function D1(t,e){return hu(8390656,8,t,e)}function l0(t,e){return Th(2048,8,t,e)}function Ey(t,e){return Th(4,2,t,e)}function wy(t,e){return Th(4,4,t,e)}function Ty(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ay(t,e,n){return n=n!=null?n.concat([t]):null,Th(4,4,Ty.bind(null,e,t),n)}function c0(){}function Cy(t,e){var n=Ci();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&s0(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Ry(t,e){var n=Ci();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&s0(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function by(t,e,n){return fo&21?($i(n,e)||(n=N2(),Ut.lanes|=n,po|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Hn=!0),t.memoizedState=n)}function jE(t,e){var n=dt;dt=n!==0&&4>n?n:4,t(!0);var i=Pf.transition;Pf.transition={};try{t(!1),e()}finally{dt=n,Pf.transition=i}}function Py(){return Ci().memoizedState}function YE(t,e,n){var i=vs(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Ly(t))Iy(e,n);else if(n=fy(t,e,n,i),n!==null){var r=Pn();Xi(n,t,i,r),Dy(n,e,i)}}function qE(t,e,n){var i=vs(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ly(t))Iy(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,$i(a,o)){var l=e.interleaved;l===null?(r.next=r,e0(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=fy(t,e,r,i),n!==null&&(r=Pn(),Xi(n,t,i,r),Dy(n,e,i))}}function Ly(t){var e=t.alternate;return t===Ut||e!==null&&e===Ut}function Iy(t,e){vl=Yu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Dy(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,zm(t,n)}}var qu={readContext:Ai,useCallback:yn,useContext:yn,useEffect:yn,useImperativeHandle:yn,useInsertionEffect:yn,useLayoutEffect:yn,useMemo:yn,useReducer:yn,useRef:yn,useState:yn,useDebugValue:yn,useDeferredValue:yn,useTransition:yn,useMutableSource:yn,useSyncExternalStore:yn,useId:yn,unstable_isNewReconciler:!1},KE={readContext:Ai,useCallback:function(t,e){return nr().memoizedState=[t,e===void 0?null:e],t},useContext:Ai,useEffect:D1,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,hu(4194308,4,Ty.bind(null,e,t),n)},useLayoutEffect:function(t,e){return hu(4194308,4,t,e)},useInsertionEffect:function(t,e){return hu(4,2,t,e)},useMemo:function(t,e){var n=nr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=nr();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=YE.bind(null,Ut,t),[i.memoizedState,t]},useRef:function(t){var e=nr();return t={current:t},e.memoizedState=t},useState:I1,useDebugValue:c0,useDeferredValue:function(t){return nr().memoizedState=t},useTransition:function(){var t=I1(!1),e=t[0];return t=jE.bind(null,t[1]),nr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Ut,r=nr();if(Pt){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),hn===null)throw Error(ne(349));fo&30||_y(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,D1(yy.bind(null,i,s,t),[t]),i.flags|=2048,Hl(9,vy.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=nr(),e=hn.identifierPrefix;if(Pt){var n=Lr,i=Pr;n=(i&~(1<<32-Wi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=zl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=$E++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ZE={readContext:Ai,useCallback:Cy,useContext:Ai,useEffect:l0,useImperativeHandle:Ay,useInsertionEffect:Ey,useLayoutEffect:wy,useMemo:Ry,useReducer:Lf,useRef:My,useState:function(){return Lf(Vl)},useDebugValue:c0,useDeferredValue:function(t){var e=Ci();return by(e,tn.memoizedState,t)},useTransition:function(){var t=Lf(Vl)[0],e=Ci().memoizedState;return[t,e]},useMutableSource:my,useSyncExternalStore:gy,useId:Py,unstable_isNewReconciler:!1},JE={readContext:Ai,useCallback:Cy,useContext:Ai,useEffect:l0,useImperativeHandle:Ay,useInsertionEffect:Ey,useLayoutEffect:wy,useMemo:Ry,useReducer:If,useRef:My,useState:function(){return If(Vl)},useDebugValue:c0,useDeferredValue:function(t){var e=Ci();return tn===null?e.memoizedState=t:by(e,tn.memoizedState,t)},useTransition:function(){var t=If(Vl)[0],e=Ci().memoizedState;return[t,e]},useMutableSource:my,useSyncExternalStore:gy,useId:Py,unstable_isNewReconciler:!1};function ki(t,e){if(t&&t.defaultProps){e=Ft({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function rp(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Ft({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ah={isMounted:function(t){return(t=t._reactInternals)?So(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Pn(),r=vs(t),s=Nr(i,r);s.payload=e,n!=null&&(s.callback=n),e=gs(t,s,r),e!==null&&(Xi(e,t,r,i),cu(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Pn(),r=vs(t),s=Nr(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=gs(t,s,r),e!==null&&(Xi(e,t,r,i),cu(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Pn(),i=vs(t),r=Nr(n,i);r.tag=2,e!=null&&(r.callback=e),e=gs(t,r,i),e!==null&&(Xi(e,t,i,n),cu(e,t,i))}};function N1(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Nl(n,i)||!Nl(r,s):!0}function Ny(t,e,n){var i=!1,r=ws,s=e.contextType;return typeof s=="object"&&s!==null?s=Ai(s):(r=Wn(e)?uo:An.current,i=e.contextTypes,s=(i=i!=null)?ua(t,r):ws),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ah,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function U1(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ah.enqueueReplaceState(e,e.state,null)}function sp(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},t0(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Ai(s):(s=Wn(e)?uo:An.current,r.context=ua(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(rp(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ah.enqueueReplaceState(r,r.state,null),$u(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function pa(t,e){try{var n="",i=e;do n+=AM(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Df(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function op(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var QE=typeof WeakMap=="function"?WeakMap:Map;function Uy(t,e,n){n=Nr(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Zu||(Zu=!0,gp=i),op(t,e)},n}function Fy(t,e,n){n=Nr(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){op(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){op(t,e),typeof i!="function"&&(_s===null?_s=new Set([this]):_s.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function F1(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new QE;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=dw.bind(null,t,e,n),e.then(t,t))}function O1(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function k1(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Nr(-1,1),e.tag=2,gs(n,e,1))),n.lanes|=1),t)}var ew=Xr.ReactCurrentOwner,Hn=!1;function bn(t,e,n,i){e.child=t===null?hy(e,null,n,i):fa(e,t.child,n,i)}function B1(t,e,n,i,r){n=n.render;var s=e.ref;return ia(e,r),i=o0(t,e,n,i,s,r),n=a0(),t!==null&&!Hn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Vr(t,e,r)):(Pt&&n&&Ym(e),e.flags|=1,bn(t,e,i,r),e.child)}function z1(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!_0(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Oy(t,e,s,i,r)):(t=mu(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Nl,n(o,i)&&t.ref===e.ref)return Vr(t,e,r)}return e.flags|=1,t=ys(s,i),t.ref=e.ref,t.return=e,e.child=t}function Oy(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Nl(s,i)&&t.ref===e.ref)if(Hn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Hn=!0);else return e.lanes=t.lanes,Vr(t,e,r)}return ap(t,e,n,i,r)}function ky(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},yt(Ko,ii),ii|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,yt(Ko,ii),ii|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,yt(Ko,ii),ii|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,yt(Ko,ii),ii|=i;return bn(t,e,r,n),e.child}function By(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ap(t,e,n,i,r){var s=Wn(n)?uo:An.current;return s=ua(e,s),ia(e,r),n=o0(t,e,n,i,s,r),i=a0(),t!==null&&!Hn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Vr(t,e,r)):(Pt&&i&&Ym(e),e.flags|=1,bn(t,e,n,r),e.child)}function V1(t,e,n,i,r){if(Wn(n)){var s=!0;Vu(e)}else s=!1;if(ia(e,r),e.stateNode===null)fu(t,e),Ny(e,n,i),sp(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ai(c):(c=Wn(n)?uo:An.current,c=ua(e,c));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&U1(e,o,i,c),ss=!1;var f=e.memoizedState;o.state=f,$u(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Gn.current||ss?(typeof h=="function"&&(rp(e,n,h,i),l=e.memoizedState),(a=ss||N1(e,n,a,i,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,dy(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ki(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ai(l):(l=Wn(n)?uo:An.current,l=ua(e,l));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&U1(e,o,i,l),ss=!1,f=e.memoizedState,o.state=f,$u(e,i,o,r);var p=e.memoizedState;a!==d||f!==p||Gn.current||ss?(typeof g=="function"&&(rp(e,n,g,i),p=e.memoizedState),(c=ss||N1(e,n,c,i,f,p,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,p,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,p,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=p),o.props=i,o.state=p,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return lp(t,e,n,i,s,r)}function lp(t,e,n,i,r,s){By(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&A1(e,n,!1),Vr(t,e,s);i=e.stateNode,ew.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=fa(e,t.child,null,s),e.child=fa(e,null,a,s)):bn(t,e,a,s),e.memoizedState=i.state,r&&A1(e,n,!0),e.child}function zy(t){var e=t.stateNode;e.pendingContext?T1(t,e.pendingContext,e.pendingContext!==e.context):e.context&&T1(t,e.context,!1),n0(t,e.containerInfo)}function H1(t,e,n,i,r){return ha(),Km(r),e.flags|=256,bn(t,e,n,i),e.child}var cp={dehydrated:null,treeContext:null,retryLane:0};function up(t){return{baseLanes:t,cachePool:null,transitions:null}}function Vy(t,e,n){var i=e.pendingProps,r=Nt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),yt(Nt,r&1),t===null)return np(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=bh(o,i,0,null),t=so(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=up(n),e.memoizedState=cp,t):u0(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return tw(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ys(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ys(a,s):(s=so(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?up(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=cp,i}return s=t.child,t=s.sibling,i=ys(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function u0(t,e){return e=bh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Rc(t,e,n,i){return i!==null&&Km(i),fa(e,t.child,null,n),t=u0(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function tw(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Df(Error(ne(422))),Rc(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=bh({mode:"visible",children:i.children},r,0,null),s=so(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&fa(e,t.child,null,o),e.child.memoizedState=up(o),e.memoizedState=cp,s);if(!(e.mode&1))return Rc(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ne(419)),i=Df(s,i,void 0),Rc(t,e,o,i)}if(a=(o&t.childLanes)!==0,Hn||a){if(i=hn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,zr(t,r),Xi(i,t,r,-1))}return g0(),i=Df(Error(ne(421))),Rc(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=pw.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,ri=ms(r.nextSibling),si=e,Pt=!0,zi=null,t!==null&&(vi[yi++]=Pr,vi[yi++]=Lr,vi[yi++]=ho,Pr=t.id,Lr=t.overflow,ho=e),e=u0(e,i.children),e.flags|=4096,e)}function G1(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),ip(t.return,e,n)}function Nf(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Hy(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(bn(t,e,i.children,n),i=Nt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&G1(t,n,e);else if(t.tag===19)G1(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(yt(Nt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&ju(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Nf(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&ju(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Nf(e,!0,n,null,s);break;case"together":Nf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function fu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Vr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),po|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=ys(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ys(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function nw(t,e,n){switch(e.tag){case 3:zy(e),ha();break;case 5:py(e);break;case 1:Wn(e.type)&&Vu(e);break;case 4:n0(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;yt(Wu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(yt(Nt,Nt.current&1),e.flags|=128,null):n&e.child.childLanes?Vy(t,e,n):(yt(Nt,Nt.current&1),t=Vr(t,e,n),t!==null?t.sibling:null);yt(Nt,Nt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Hy(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),yt(Nt,Nt.current),i)break;return null;case 22:case 23:return e.lanes=0,ky(t,e,n)}return Vr(t,e,n)}var Gy,hp,Wy,Xy;Gy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hp=function(){};Wy=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,to(cr.current);var s=null;switch(n){case"input":r=Dd(t,r),i=Dd(t,i),s=[];break;case"select":r=Ft({},r,{value:void 0}),i=Ft({},i,{value:void 0}),s=[];break;case"textarea":r=Fd(t,r),i=Fd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Bu)}kd(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Cl.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Cl.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Mt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Xy=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ka(t,e){if(!Pt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function xn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function iw(t,e,n){var i=e.pendingProps;switch(qm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xn(e),null;case 1:return Wn(e.type)&&zu(),xn(e),null;case 3:return i=e.stateNode,da(),Tt(Gn),Tt(An),r0(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ac(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,zi!==null&&(yp(zi),zi=null))),hp(t,e),xn(e),null;case 5:i0(e);var r=to(Bl.current);if(n=e.type,t!==null&&e.stateNode!=null)Wy(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return xn(e),null}if(t=to(cr.current),Ac(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[or]=e,i[Ol]=s,t=(e.mode&1)!==0,n){case"dialog":Mt("cancel",i),Mt("close",i);break;case"iframe":case"object":case"embed":Mt("load",i);break;case"video":case"audio":for(r=0;r<cl.length;r++)Mt(cl[r],i);break;case"source":Mt("error",i);break;case"img":case"image":case"link":Mt("error",i),Mt("load",i);break;case"details":Mt("toggle",i);break;case"input":Jg(i,s),Mt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Mt("invalid",i);break;case"textarea":e1(i,s),Mt("invalid",i)}kd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Tc(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Tc(i.textContent,a,t),r=["children",""+a]):Cl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Mt("scroll",i)}switch(n){case"input":_c(i),Qg(i,s,!0);break;case"textarea":_c(i),t1(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Bu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=y2(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[or]=e,t[Ol]=i,Gy(t,e,!1,!1),e.stateNode=t;e:{switch(o=Bd(n,i),n){case"dialog":Mt("cancel",t),Mt("close",t),r=i;break;case"iframe":case"object":case"embed":Mt("load",t),r=i;break;case"video":case"audio":for(r=0;r<cl.length;r++)Mt(cl[r],t);r=i;break;case"source":Mt("error",t),r=i;break;case"img":case"image":case"link":Mt("error",t),Mt("load",t),r=i;break;case"details":Mt("toggle",t),r=i;break;case"input":Jg(t,i),r=Dd(t,i),Mt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Ft({},i,{value:void 0}),Mt("invalid",t);break;case"textarea":e1(t,i),r=Fd(t,i),Mt("invalid",t);break;default:r=i}kd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?M2(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&x2(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Rl(t,l):typeof l=="number"&&Rl(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Cl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Mt("scroll",t):l!=null&&Nm(t,s,l,o))}switch(n){case"input":_c(t),Qg(t,i,!1);break;case"textarea":_c(t),t1(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Es(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Qo(t,!!i.multiple,s,!1):i.defaultValue!=null&&Qo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Bu)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return xn(e),null;case 6:if(t&&e.stateNode!=null)Xy(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=to(Bl.current),to(cr.current),Ac(e)){if(i=e.stateNode,n=e.memoizedProps,i[or]=e,(s=i.nodeValue!==n)&&(t=si,t!==null))switch(t.tag){case 3:Tc(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Tc(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[or]=e,e.stateNode=i}return xn(e),null;case 13:if(Tt(Nt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Pt&&ri!==null&&e.mode&1&&!(e.flags&128))cy(),ha(),e.flags|=98560,s=!1;else if(s=Ac(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[or]=e}else ha(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;xn(e),s=!1}else zi!==null&&(yp(zi),zi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Nt.current&1?nn===0&&(nn=3):g0())),e.updateQueue!==null&&(e.flags|=4),xn(e),null);case 4:return da(),hp(t,e),t===null&&Ul(e.stateNode.containerInfo),xn(e),null;case 10:return Qm(e.type._context),xn(e),null;case 17:return Wn(e.type)&&zu(),xn(e),null;case 19:if(Tt(Nt),s=e.memoizedState,s===null)return xn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ka(s,!1);else{if(nn!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ju(t),o!==null){for(e.flags|=128,Ka(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return yt(Nt,Nt.current&1|2),e.child}t=t.sibling}s.tail!==null&&jt()>ma&&(e.flags|=128,i=!0,Ka(s,!1),e.lanes=4194304)}else{if(!i)if(t=ju(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ka(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Pt)return xn(e),null}else 2*jt()-s.renderingStartTime>ma&&n!==1073741824&&(e.flags|=128,i=!0,Ka(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=jt(),e.sibling=null,n=Nt.current,yt(Nt,i?n&1|2:n&1),e):(xn(e),null);case 22:case 23:return m0(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?ii&1073741824&&(xn(e),e.subtreeFlags&6&&(e.flags|=8192)):xn(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function rw(t,e){switch(qm(e),e.tag){case 1:return Wn(e.type)&&zu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return da(),Tt(Gn),Tt(An),r0(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return i0(e),null;case 13:if(Tt(Nt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));ha()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Tt(Nt),null;case 4:return da(),null;case 10:return Qm(e.type._context),null;case 22:case 23:return m0(),null;case 24:return null;default:return null}}var bc=!1,wn=!1,sw=typeof WeakSet=="function"?WeakSet:Set,me=null;function qo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Bt(t,e,i)}else n.current=null}function fp(t,e,n){try{n()}catch(i){Bt(t,e,i)}}var W1=!1;function ow(t,e){if(qd=Fu,t=K2(),jm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,d=t,f=null;t:for(;;){for(var g;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)f=d,d=g;for(;;){if(d===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++h===i&&(l=o),(g=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Kd={focusedElem:t,selectionRange:n},Fu=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){e=me;try{var p=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var y=p.memoizedProps,m=p.memoizedState,u=e.stateNode,_=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:ki(e.type,y),m);u.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(M){Bt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return p=W1,W1=!1,p}function yl(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&fp(e,n,s)}r=r.next}while(r!==i)}}function Ch(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function dp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function $y(t){var e=t.alternate;e!==null&&(t.alternate=null,$y(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[or],delete e[Ol],delete e[Qd],delete e[HE],delete e[GE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function jy(t){return t.tag===5||t.tag===3||t.tag===4}function X1(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||jy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function pp(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Bu));else if(i!==4&&(t=t.child,t!==null))for(pp(t,e,n),t=t.sibling;t!==null;)pp(t,e,n),t=t.sibling}function mp(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(mp(t,e,n),t=t.sibling;t!==null;)mp(t,e,n),t=t.sibling}var dn=null,Bi=!1;function jr(t,e,n){for(n=n.child;n!==null;)Yy(t,e,n),n=n.sibling}function Yy(t,e,n){if(lr&&typeof lr.onCommitFiberUnmount=="function")try{lr.onCommitFiberUnmount(yh,n)}catch{}switch(n.tag){case 5:wn||qo(n,e);case 6:var i=dn,r=Bi;dn=null,jr(t,e,n),dn=i,Bi=r,dn!==null&&(Bi?(t=dn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):dn.removeChild(n.stateNode));break;case 18:dn!==null&&(Bi?(t=dn,n=n.stateNode,t.nodeType===8?Cf(t.parentNode,n):t.nodeType===1&&Cf(t,n),Il(t)):Cf(dn,n.stateNode));break;case 4:i=dn,r=Bi,dn=n.stateNode.containerInfo,Bi=!0,jr(t,e,n),dn=i,Bi=r;break;case 0:case 11:case 14:case 15:if(!wn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&fp(n,e,o),r=r.next}while(r!==i)}jr(t,e,n);break;case 1:if(!wn&&(qo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Bt(n,e,a)}jr(t,e,n);break;case 21:jr(t,e,n);break;case 22:n.mode&1?(wn=(i=wn)||n.memoizedState!==null,jr(t,e,n),wn=i):jr(t,e,n);break;default:jr(t,e,n)}}function $1(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new sw),e.forEach(function(i){var r=mw.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Di(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:dn=a.stateNode,Bi=!1;break e;case 3:dn=a.stateNode.containerInfo,Bi=!0;break e;case 4:dn=a.stateNode.containerInfo,Bi=!0;break e}a=a.return}if(dn===null)throw Error(ne(160));Yy(s,o,r),dn=null,Bi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Bt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)qy(e,t),e=e.sibling}function qy(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Di(e,t),Ji(t),i&4){try{yl(3,t,t.return),Ch(3,t)}catch(y){Bt(t,t.return,y)}try{yl(5,t,t.return)}catch(y){Bt(t,t.return,y)}}break;case 1:Di(e,t),Ji(t),i&512&&n!==null&&qo(n,n.return);break;case 5:if(Di(e,t),Ji(t),i&512&&n!==null&&qo(n,n.return),t.flags&32){var r=t.stateNode;try{Rl(r,"")}catch(y){Bt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&_2(r,s),Bd(a,o);var c=Bd(a,s);for(o=0;o<l.length;o+=2){var h=l[o],d=l[o+1];h==="style"?M2(r,d):h==="dangerouslySetInnerHTML"?x2(r,d):h==="children"?Rl(r,d):Nm(r,h,d,c)}switch(a){case"input":Nd(r,s);break;case"textarea":v2(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Qo(r,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?Qo(r,!!s.multiple,s.defaultValue,!0):Qo(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ol]=s}catch(y){Bt(t,t.return,y)}}break;case 6:if(Di(e,t),Ji(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){Bt(t,t.return,y)}}break;case 3:if(Di(e,t),Ji(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Il(e.containerInfo)}catch(y){Bt(t,t.return,y)}break;case 4:Di(e,t),Ji(t);break;case 13:Di(e,t),Ji(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(d0=jt())),i&4&&$1(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(wn=(c=wn)||h,Di(e,t),wn=c):Di(e,t),Ji(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(me=t,h=t.child;h!==null;){for(d=me=h;me!==null;){switch(f=me,g=f.child,f.tag){case 0:case 11:case 14:case 15:yl(4,f,f.return);break;case 1:qo(f,f.return);var p=f.stateNode;if(typeof p.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,p.props=e.memoizedProps,p.state=e.memoizedState,p.componentWillUnmount()}catch(y){Bt(i,n,y)}}break;case 5:qo(f,f.return);break;case 22:if(f.memoizedState!==null){Y1(d);continue}}g!==null?(g.return=f,me=g):Y1(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=S2("display",o))}catch(y){Bt(t,t.return,y)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){Bt(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Di(e,t),Ji(t),i&4&&$1(t);break;case 21:break;default:Di(e,t),Ji(t)}}function Ji(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(jy(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Rl(r,""),i.flags&=-33);var s=X1(t);mp(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=X1(t);pp(t,a,o);break;default:throw Error(ne(161))}}catch(l){Bt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function aw(t,e,n){me=t,Ky(t)}function Ky(t,e,n){for(var i=(t.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||bc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||wn;a=bc;var c=wn;if(bc=o,(wn=l)&&!c)for(me=r;me!==null;)o=me,l=o.child,o.tag===22&&o.memoizedState!==null?q1(r):l!==null?(l.return=o,me=l):q1(r);for(;s!==null;)me=s,Ky(s),s=s.sibling;me=r,bc=a,wn=c}j1(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,me=s):j1(t)}}function j1(t){for(;me!==null;){var e=me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:wn||Ch(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!wn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ki(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&L1(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}L1(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&Il(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}wn||e.flags&512&&dp(e)}catch(f){Bt(e,e.return,f)}}if(e===t){me=null;break}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}}function Y1(t){for(;me!==null;){var e=me;if(e===t){me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,me=n;break}me=e.return}}function q1(t){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ch(4,e)}catch(l){Bt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Bt(e,r,l)}}var s=e.return;try{dp(e)}catch(l){Bt(e,s,l)}break;case 5:var o=e.return;try{dp(e)}catch(l){Bt(e,o,l)}}}catch(l){Bt(e,e.return,l)}if(e===t){me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,me=a;break}me=e.return}}var lw=Math.ceil,Ku=Xr.ReactCurrentDispatcher,h0=Xr.ReactCurrentOwner,Ti=Xr.ReactCurrentBatchConfig,tt=0,hn=null,en=null,pn=0,ii=0,Ko=Is(0),nn=0,Gl=null,po=0,Rh=0,f0=0,xl=null,zn=null,d0=0,ma=1/0,Ar=null,Zu=!1,gp=null,_s=null,Pc=!1,hs=null,Ju=0,Sl=0,_p=null,du=-1,pu=0;function Pn(){return tt&6?jt():du!==-1?du:du=jt()}function vs(t){return t.mode&1?tt&2&&pn!==0?pn&-pn:XE.transition!==null?(pu===0&&(pu=N2()),pu):(t=dt,t!==0||(t=window.event,t=t===void 0?16:V2(t.type)),t):1}function Xi(t,e,n,i){if(50<Sl)throw Sl=0,_p=null,Error(ne(185));ql(t,n,i),(!(tt&2)||t!==hn)&&(t===hn&&(!(tt&2)&&(Rh|=n),nn===4&&as(t,pn)),Xn(t,i),n===1&&tt===0&&!(e.mode&1)&&(ma=jt()+500,wh&&Ds()))}function Xn(t,e){var n=t.callbackNode;XM(t,e);var i=Uu(t,t===hn?pn:0);if(i===0)n!==null&&r1(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&r1(n),e===1)t.tag===0?WE(K1.bind(null,t)):oy(K1.bind(null,t)),zE(function(){!(tt&6)&&Ds()}),n=null;else{switch(U2(i)){case 1:n=Bm;break;case 4:n=I2;break;case 16:n=Nu;break;case 536870912:n=D2;break;default:n=Nu}n=rx(n,Zy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Zy(t,e){if(du=-1,pu=0,tt&6)throw Error(ne(327));var n=t.callbackNode;if(ra()&&t.callbackNode!==n)return null;var i=Uu(t,t===hn?pn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Qu(t,i);else{e=i;var r=tt;tt|=2;var s=Qy();(hn!==t||pn!==e)&&(Ar=null,ma=jt()+500,ro(t,e));do try{hw();break}catch(a){Jy(t,a)}while(!0);Jm(),Ku.current=s,tt=r,en!==null?e=0:(hn=null,pn=0,e=nn)}if(e!==0){if(e===2&&(r=Wd(t),r!==0&&(i=r,e=vp(t,r))),e===1)throw n=Gl,ro(t,0),as(t,i),Xn(t,jt()),n;if(e===6)as(t,i);else{if(r=t.current.alternate,!(i&30)&&!cw(r)&&(e=Qu(t,i),e===2&&(s=Wd(t),s!==0&&(i=s,e=vp(t,s))),e===1))throw n=Gl,ro(t,0),as(t,i),Xn(t,jt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:js(t,zn,Ar);break;case 3:if(as(t,i),(i&130023424)===i&&(e=d0+500-jt(),10<e)){if(Uu(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Pn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Jd(js.bind(null,t,zn,Ar),e);break}js(t,zn,Ar);break;case 4:if(as(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Wi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=jt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*lw(i/1960))-i,10<i){t.timeoutHandle=Jd(js.bind(null,t,zn,Ar),i);break}js(t,zn,Ar);break;case 5:js(t,zn,Ar);break;default:throw Error(ne(329))}}}return Xn(t,jt()),t.callbackNode===n?Zy.bind(null,t):null}function vp(t,e){var n=xl;return t.current.memoizedState.isDehydrated&&(ro(t,e).flags|=256),t=Qu(t,e),t!==2&&(e=zn,zn=n,e!==null&&yp(e)),t}function yp(t){zn===null?zn=t:zn.push.apply(zn,t)}function cw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!$i(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function as(t,e){for(e&=~f0,e&=~Rh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Wi(e),i=1<<n;t[n]=-1,e&=~i}}function K1(t){if(tt&6)throw Error(ne(327));ra();var e=Uu(t,0);if(!(e&1))return Xn(t,jt()),null;var n=Qu(t,e);if(t.tag!==0&&n===2){var i=Wd(t);i!==0&&(e=i,n=vp(t,i))}if(n===1)throw n=Gl,ro(t,0),as(t,e),Xn(t,jt()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,js(t,zn,Ar),Xn(t,jt()),null}function p0(t,e){var n=tt;tt|=1;try{return t(e)}finally{tt=n,tt===0&&(ma=jt()+500,wh&&Ds())}}function mo(t){hs!==null&&hs.tag===0&&!(tt&6)&&ra();var e=tt;tt|=1;var n=Ti.transition,i=dt;try{if(Ti.transition=null,dt=1,t)return t()}finally{dt=i,Ti.transition=n,tt=e,!(tt&6)&&Ds()}}function m0(){ii=Ko.current,Tt(Ko)}function ro(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,BE(n)),en!==null)for(n=en.return;n!==null;){var i=n;switch(qm(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&zu();break;case 3:da(),Tt(Gn),Tt(An),r0();break;case 5:i0(i);break;case 4:da();break;case 13:Tt(Nt);break;case 19:Tt(Nt);break;case 10:Qm(i.type._context);break;case 22:case 23:m0()}n=n.return}if(hn=t,en=t=ys(t.current,null),pn=ii=e,nn=0,Gl=null,f0=Rh=po=0,zn=xl=null,eo!==null){for(e=0;e<eo.length;e++)if(n=eo[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}eo=null}return t}function Jy(t,e){do{var n=en;try{if(Jm(),uu.current=qu,Yu){for(var i=Ut.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Yu=!1}if(fo=0,un=tn=Ut=null,vl=!1,zl=0,h0.current=null,n===null||n.return===null){nn=1,Gl=e,en=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=pn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=O1(o);if(g!==null){g.flags&=-257,k1(g,o,a,s,e),g.mode&1&&F1(s,c,e),e=g,l=c;var p=e.updateQueue;if(p===null){var y=new Set;y.add(l),e.updateQueue=y}else p.add(l);break e}else{if(!(e&1)){F1(s,c,e),g0();break e}l=Error(ne(426))}}else if(Pt&&a.mode&1){var m=O1(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),k1(m,o,a,s,e),Km(pa(l,a));break e}}s=l=pa(l,a),nn!==4&&(nn=2),xl===null?xl=[s]:xl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Uy(s,l,e);P1(s,u);break e;case 1:a=l;var _=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(_s===null||!_s.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=Fy(s,a,e);P1(s,M);break e}}s=s.return}while(s!==null)}tx(n)}catch(R){e=R,en===n&&n!==null&&(en=n=n.return);continue}break}while(!0)}function Qy(){var t=Ku.current;return Ku.current=qu,t===null?qu:t}function g0(){(nn===0||nn===3||nn===2)&&(nn=4),hn===null||!(po&268435455)&&!(Rh&268435455)||as(hn,pn)}function Qu(t,e){var n=tt;tt|=2;var i=Qy();(hn!==t||pn!==e)&&(Ar=null,ro(t,e));do try{uw();break}catch(r){Jy(t,r)}while(!0);if(Jm(),tt=n,Ku.current=i,en!==null)throw Error(ne(261));return hn=null,pn=0,nn}function uw(){for(;en!==null;)ex(en)}function hw(){for(;en!==null&&!FM();)ex(en)}function ex(t){var e=ix(t.alternate,t,ii);t.memoizedProps=t.pendingProps,e===null?tx(t):en=e,h0.current=null}function tx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=rw(n,e),n!==null){n.flags&=32767,en=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{nn=6,en=null;return}}else if(n=iw(n,e,ii),n!==null){en=n;return}if(e=e.sibling,e!==null){en=e;return}en=e=t}while(e!==null);nn===0&&(nn=5)}function js(t,e,n){var i=dt,r=Ti.transition;try{Ti.transition=null,dt=1,fw(t,e,n,i)}finally{Ti.transition=r,dt=i}return null}function fw(t,e,n,i){do ra();while(hs!==null);if(tt&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if($M(t,s),t===hn&&(en=hn=null,pn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pc||(Pc=!0,rx(Nu,function(){return ra(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ti.transition,Ti.transition=null;var o=dt;dt=1;var a=tt;tt|=4,h0.current=null,ow(t,n),qy(n,t),IE(Kd),Fu=!!qd,Kd=qd=null,t.current=n,aw(n),OM(),tt=a,dt=o,Ti.transition=s}else t.current=n;if(Pc&&(Pc=!1,hs=t,Ju=r),s=t.pendingLanes,s===0&&(_s=null),zM(n.stateNode),Xn(t,jt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Zu)throw Zu=!1,t=gp,gp=null,t;return Ju&1&&t.tag!==0&&ra(),s=t.pendingLanes,s&1?t===_p?Sl++:(Sl=0,_p=t):Sl=0,Ds(),null}function ra(){if(hs!==null){var t=U2(Ju),e=Ti.transition,n=dt;try{if(Ti.transition=null,dt=16>t?16:t,hs===null)var i=!1;else{if(t=hs,hs=null,Ju=0,tt&6)throw Error(ne(331));var r=tt;for(tt|=4,me=t.current;me!==null;){var s=me,o=s.child;if(me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(me=c;me!==null;){var h=me;switch(h.tag){case 0:case 11:case 15:yl(8,h,s)}var d=h.child;if(d!==null)d.return=h,me=d;else for(;me!==null;){h=me;var f=h.sibling,g=h.return;if($y(h),h===c){me=null;break}if(f!==null){f.return=g,me=f;break}me=g}}}var p=s.alternate;if(p!==null){var y=p.child;if(y!==null){p.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,me=o;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:yl(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,me=u;break e}me=s.return}}var _=t.current;for(me=_;me!==null;){o=me;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,me=v;else e:for(o=_;me!==null;){if(a=me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ch(9,a)}}catch(R){Bt(a,a.return,R)}if(a===o){me=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,me=M;break e}me=a.return}}if(tt=r,Ds(),lr&&typeof lr.onPostCommitFiberRoot=="function")try{lr.onPostCommitFiberRoot(yh,t)}catch{}i=!0}return i}finally{dt=n,Ti.transition=e}}return!1}function Z1(t,e,n){e=pa(n,e),e=Uy(t,e,1),t=gs(t,e,1),e=Pn(),t!==null&&(ql(t,1,e),Xn(t,e))}function Bt(t,e,n){if(t.tag===3)Z1(t,t,n);else for(;e!==null;){if(e.tag===3){Z1(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(_s===null||!_s.has(i))){t=pa(n,t),t=Fy(e,t,1),e=gs(e,t,1),t=Pn(),e!==null&&(ql(e,1,t),Xn(e,t));break}}e=e.return}}function dw(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Pn(),t.pingedLanes|=t.suspendedLanes&n,hn===t&&(pn&n)===n&&(nn===4||nn===3&&(pn&130023424)===pn&&500>jt()-d0?ro(t,0):f0|=n),Xn(t,e)}function nx(t,e){e===0&&(t.mode&1?(e=xc,xc<<=1,!(xc&130023424)&&(xc=4194304)):e=1);var n=Pn();t=zr(t,e),t!==null&&(ql(t,e,n),Xn(t,n))}function pw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),nx(t,n)}function mw(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),nx(t,n)}var ix;ix=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Gn.current)Hn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Hn=!1,nw(t,e,n);Hn=!!(t.flags&131072)}else Hn=!1,Pt&&e.flags&1048576&&ay(e,Gu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;fu(t,e),t=e.pendingProps;var r=ua(e,An.current);ia(e,n),r=o0(null,e,i,t,r,n);var s=a0();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Wn(i)?(s=!0,Vu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,t0(e),r.updater=Ah,e.stateNode=r,r._reactInternals=e,sp(e,i,t,n),e=lp(null,e,i,!0,s,n)):(e.tag=0,Pt&&s&&Ym(e),bn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(fu(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=_w(i),t=ki(i,t),r){case 0:e=ap(null,e,i,t,n);break e;case 1:e=V1(null,e,i,t,n);break e;case 11:e=B1(null,e,i,t,n);break e;case 14:e=z1(null,e,i,ki(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ki(i,r),ap(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ki(i,r),V1(t,e,i,r,n);case 3:e:{if(zy(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,dy(t,e),$u(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=pa(Error(ne(423)),e),e=H1(t,e,i,n,r);break e}else if(i!==r){r=pa(Error(ne(424)),e),e=H1(t,e,i,n,r);break e}else for(ri=ms(e.stateNode.containerInfo.firstChild),si=e,Pt=!0,zi=null,n=hy(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ha(),i===r){e=Vr(t,e,n);break e}bn(t,e,i,n)}e=e.child}return e;case 5:return py(e),t===null&&np(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Zd(i,r)?o=null:s!==null&&Zd(i,s)&&(e.flags|=32),By(t,e),bn(t,e,o,n),e.child;case 6:return t===null&&np(e),null;case 13:return Vy(t,e,n);case 4:return n0(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=fa(e,null,i,n):bn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ki(i,r),B1(t,e,i,r,n);case 7:return bn(t,e,e.pendingProps,n),e.child;case 8:return bn(t,e,e.pendingProps.children,n),e.child;case 12:return bn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,yt(Wu,i._currentValue),i._currentValue=o,s!==null)if($i(s.value,o)){if(s.children===r.children&&!Gn.current){e=Vr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Nr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ip(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ip(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}bn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ia(e,n),r=Ai(r),i=i(r),e.flags|=1,bn(t,e,i,n),e.child;case 14:return i=e.type,r=ki(i,e.pendingProps),r=ki(i.type,r),z1(t,e,i,r,n);case 15:return Oy(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ki(i,r),fu(t,e),e.tag=1,Wn(i)?(t=!0,Vu(e)):t=!1,ia(e,n),Ny(e,i,r),sp(e,i,r,n),lp(null,e,i,!0,t,n);case 19:return Hy(t,e,n);case 22:return ky(t,e,n)}throw Error(ne(156,e.tag))};function rx(t,e){return L2(t,e)}function gw(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mi(t,e,n,i){return new gw(t,e,n,i)}function _0(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _w(t){if(typeof t=="function")return _0(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Fm)return 11;if(t===Om)return 14}return 2}function ys(t,e){var n=t.alternate;return n===null?(n=Mi(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function mu(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")_0(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case zo:return so(n.children,r,s,e);case Um:o=8,r|=8;break;case bd:return t=Mi(12,n,e,r|2),t.elementType=bd,t.lanes=s,t;case Pd:return t=Mi(13,n,e,r),t.elementType=Pd,t.lanes=s,t;case Ld:return t=Mi(19,n,e,r),t.elementType=Ld,t.lanes=s,t;case p2:return bh(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case f2:o=10;break e;case d2:o=9;break e;case Fm:o=11;break e;case Om:o=14;break e;case rs:o=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=Mi(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function so(t,e,n,i){return t=Mi(7,t,i,e),t.lanes=n,t}function bh(t,e,n,i){return t=Mi(22,t,i,e),t.elementType=p2,t.lanes=n,t.stateNode={isHidden:!1},t}function Uf(t,e,n){return t=Mi(6,t,null,e),t.lanes=n,t}function Ff(t,e,n){return e=Mi(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function vw(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gf(0),this.expirationTimes=gf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gf(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function v0(t,e,n,i,r,s,o,a,l){return t=new vw(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Mi(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},t0(s),t}function yw(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bo,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function sx(t){if(!t)return ws;t=t._reactInternals;e:{if(So(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Wn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(Wn(n))return sy(t,n,e)}return e}function ox(t,e,n,i,r,s,o,a,l){return t=v0(n,i,!0,t,r,s,o,a,l),t.context=sx(null),n=t.current,i=Pn(),r=vs(n),s=Nr(i,r),s.callback=e??null,gs(n,s,r),t.current.lanes=r,ql(t,r,i),Xn(t,i),t}function Ph(t,e,n,i){var r=e.current,s=Pn(),o=vs(r);return n=sx(n),e.context===null?e.context=n:e.pendingContext=n,e=Nr(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=gs(r,e,o),t!==null&&(Xi(t,r,o,s),cu(t,r,o)),o}function eh(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function J1(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function y0(t,e){J1(t,e),(t=t.alternate)&&J1(t,e)}function xw(){return null}var ax=typeof reportError=="function"?reportError:function(t){console.error(t)};function x0(t){this._internalRoot=t}Lh.prototype.render=x0.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));Ph(t,e,null,null)};Lh.prototype.unmount=x0.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;mo(function(){Ph(null,t,null,null)}),e[Br]=null}};function Lh(t){this._internalRoot=t}Lh.prototype.unstable_scheduleHydration=function(t){if(t){var e=k2();t={blockedOn:null,target:t,priority:e};for(var n=0;n<os.length&&e!==0&&e<os[n].priority;n++);os.splice(n,0,t),n===0&&z2(t)}};function S0(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ih(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Q1(){}function Sw(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=eh(o);s.call(c)}}var o=ox(e,i,t,0,null,!1,!1,"",Q1);return t._reactRootContainer=o,t[Br]=o.current,Ul(t.nodeType===8?t.parentNode:t),mo(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=eh(l);a.call(c)}}var l=v0(t,0,!1,null,null,!1,!1,"",Q1);return t._reactRootContainer=l,t[Br]=l.current,Ul(t.nodeType===8?t.parentNode:t),mo(function(){Ph(e,l,n,i)}),l}function Dh(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=eh(o);a.call(l)}}Ph(e,o,t,r)}else o=Sw(n,e,t,r,i);return eh(o)}F2=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ll(e.pendingLanes);n!==0&&(zm(e,n|1),Xn(e,jt()),!(tt&6)&&(ma=jt()+500,Ds()))}break;case 13:mo(function(){var i=zr(t,1);if(i!==null){var r=Pn();Xi(i,t,1,r)}}),y0(t,1)}};Vm=function(t){if(t.tag===13){var e=zr(t,134217728);if(e!==null){var n=Pn();Xi(e,t,134217728,n)}y0(t,134217728)}};O2=function(t){if(t.tag===13){var e=vs(t),n=zr(t,e);if(n!==null){var i=Pn();Xi(n,t,e,i)}y0(t,e)}};k2=function(){return dt};B2=function(t,e){var n=dt;try{return dt=t,e()}finally{dt=n}};Vd=function(t,e,n){switch(e){case"input":if(Nd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Eh(i);if(!r)throw Error(ne(90));g2(i),Nd(i,r)}}}break;case"textarea":v2(t,n);break;case"select":e=n.value,e!=null&&Qo(t,!!n.multiple,e,!1)}};T2=p0;A2=mo;var Mw={usingClientEntryPoint:!1,Events:[Zl,Wo,Eh,E2,w2,p0]},Za={findFiberByHostInstance:Qs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ew={bundleType:Za.bundleType,version:Za.version,rendererPackageName:Za.rendererPackageName,rendererConfig:Za.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=b2(t),t===null?null:t.stateNode},findFiberByHostInstance:Za.findFiberByHostInstance||xw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lc.isDisabled&&Lc.supportsFiber)try{yh=Lc.inject(Ew),lr=Lc}catch{}}ci.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mw;ci.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!S0(e))throw Error(ne(200));return yw(t,e,null,n)};ci.createRoot=function(t,e){if(!S0(t))throw Error(ne(299));var n=!1,i="",r=ax;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=v0(t,1,!1,null,null,n,!1,i,r),t[Br]=e.current,Ul(t.nodeType===8?t.parentNode:t),new x0(e)};ci.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=b2(e),t=t===null?null:t.stateNode,t};ci.flushSync=function(t){return mo(t)};ci.hydrate=function(t,e,n){if(!Ih(e))throw Error(ne(200));return Dh(null,t,e,!0,n)};ci.hydrateRoot=function(t,e,n){if(!S0(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=ax;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ox(e,null,t,1,n??null,r,!1,s,o),t[Br]=e.current,Ul(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Lh(e)};ci.render=function(t,e,n){if(!Ih(e))throw Error(ne(200));return Dh(null,t,e,!1,n)};ci.unmountComponentAtNode=function(t){if(!Ih(t))throw Error(ne(40));return t._reactRootContainer?(mo(function(){Dh(null,null,t,!1,function(){t._reactRootContainer=null,t[Br]=null})}),!0):!1};ci.unstable_batchedUpdates=p0;ci.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ih(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return Dh(t,e,n,!1,i)};ci.version="18.3.1-next-f1338f8080-20240426";function lx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lx)}catch(t){console.error(t)}}lx(),l2.exports=ci;var ww=l2.exports,e_=ww;Cd.createRoot=e_.createRoot,Cd.hydrateRoot=e_.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const M0="169",Tw=0,t_=1,Aw=2,cx=1,ux=2,Tr=3,Ts=0,Ln=1,ar=2,xs=0,sa=1,n_=2,i_=3,r_=4,Cw=5,Zs=100,Rw=101,bw=102,Pw=103,Lw=104,Iw=200,Dw=201,Nw=202,Uw=203,xp=204,Sp=205,Fw=206,Ow=207,kw=208,Bw=209,zw=210,Vw=211,Hw=212,Gw=213,Ww=214,Mp=0,Ep=1,wp=2,ga=3,Tp=4,Ap=5,Cp=6,Rp=7,hx=0,Xw=1,$w=2,Ss=0,jw=1,Yw=2,qw=3,Kw=4,Zw=5,Jw=6,Qw=7,fx=300,_a=301,va=302,bp=303,Pp=304,Nh=306,Lp=1e3,no=1001,Ip=1002,Ei=1003,e4=1004,Ic=1005,Vi=1006,Of=1007,io=1008,Hr=1009,dx=1010,px=1011,Wl=1012,E0=1013,go=1014,Ir=1015,Ql=1016,w0=1017,T0=1018,ya=1020,mx=35902,gx=1021,_x=1022,Gi=1023,vx=1024,yx=1025,oa=1026,xa=1027,xx=1028,A0=1029,Sx=1030,C0=1031,R0=1033,gu=33776,_u=33777,vu=33778,yu=33779,Dp=35840,Np=35841,Up=35842,Fp=35843,Op=36196,kp=37492,Bp=37496,zp=37808,Vp=37809,Hp=37810,Gp=37811,Wp=37812,Xp=37813,$p=37814,jp=37815,Yp=37816,qp=37817,Kp=37818,Zp=37819,Jp=37820,Qp=37821,xu=36492,em=36494,tm=36495,Mx=36283,nm=36284,im=36285,rm=36286,t4=3200,n4=3201,Ex=0,i4=1,ls="",ir="srgb",Ns="srgb-linear",b0="display-p3",Uh="display-p3-linear",th="linear",Et="srgb",nh="rec709",ih="p3",wo=7680,s_=519,r4=512,s4=513,o4=514,wx=515,a4=516,l4=517,c4=518,u4=519,o_=35044,a_="300 es",Dr=2e3,rh=2001;class Ua{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kf=Math.PI/180,sm=180/Math.PI;function ec(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Sn[t&255]+Sn[t>>8&255]+Sn[t>>16&255]+Sn[t>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[n&63|128]+Sn[n>>8&255]+"-"+Sn[n>>16&255]+Sn[n>>24&255]+Sn[i&255]+Sn[i>>8&255]+Sn[i>>16&255]+Sn[i>>24&255]).toLowerCase()}function Vn(t,e,n){return Math.max(e,Math.min(n,t))}function h4(t,e){return(t%e+e)%e}function Bf(t,e,n){return(1-n)*t+n*e}function Ja(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function On(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class ot{constructor(e=0,n=0){ot.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Vn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,n,i,r,s,o,a,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],g=i[5],p=i[8],y=r[0],m=r[3],u=r[6],_=r[1],v=r[4],M=r[7],R=r[2],A=r[5],T=r[8];return s[0]=o*y+a*_+l*R,s[3]=o*m+a*v+l*A,s[6]=o*u+a*M+l*T,s[1]=c*y+h*_+d*R,s[4]=c*m+h*v+d*A,s[7]=c*u+h*M+d*T,s[2]=f*y+g*_+p*R,s[5]=f*m+g*v+p*A,s[8]=f*u+g*M+p*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return n*o*h-n*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,f=a*l-h*s,g=c*s-o*l,p=n*d+i*f+r*g;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/p;return e[0]=d*y,e[1]=(r*c-h*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(h*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=g*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(zf.makeScale(e,n)),this}rotate(e){return this.premultiply(zf.makeRotation(-e)),this}translate(e,n){return this.premultiply(zf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zf=new We;function Tx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function sh(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function f4(){const t=sh("canvas");return t.style.display="block",t}const l_={};function Su(t){t in l_||(l_[t]=!0,console.warn(t))}function d4(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function p4(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function m4(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const c_=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),u_=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Qa={[Ns]:{transfer:th,primaries:nh,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[ir]:{transfer:Et,primaries:nh,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Uh]:{transfer:th,primaries:ih,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(u_),fromReference:t=>t.applyMatrix3(c_)},[b0]:{transfer:Et,primaries:ih,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(u_),fromReference:t=>t.applyMatrix3(c_).convertLinearToSRGB()}},g4=new Set([Ns,Uh]),ct={enabled:!0,_workingColorSpace:Ns,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!g4.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Qa[e].toReference,r=Qa[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Qa[t].primaries},getTransfer:function(t){return t===ls?th:Qa[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Qa[e].luminanceCoefficients)}};function aa(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Vf(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let To;class _4{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{To===void 0&&(To=sh("canvas")),To.width=e.width,To.height=e.height;const i=To.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=To}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=sh("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=aa(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(aa(n[i]/255)*255):n[i]=aa(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let v4=0;class Ax{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:v4++}),this.uuid=ec(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Hf(r[o].image)):s.push(Hf(r[o]))}else s=Hf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Hf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?_4.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let y4=0;class $n extends Ua{constructor(e=$n.DEFAULT_IMAGE,n=$n.DEFAULT_MAPPING,i=no,r=no,s=Vi,o=io,a=Gi,l=Hr,c=$n.DEFAULT_ANISOTROPY,h=ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:y4++}),this.uuid=ec(),this.name="",this.source=new Ax(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Lp:e.x=e.x-Math.floor(e.x);break;case no:e.x=e.x<0?0:1;break;case Ip:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Lp:e.y=e.y-Math.floor(e.y);break;case no:e.y=e.y<0?0:1;break;case Ip:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$n.DEFAULT_IMAGE=null;$n.DEFAULT_MAPPING=fx;$n.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,n=0,i=0,r=1){zt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],g=l[5],p=l[9],y=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-y)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+y)<.1&&Math.abs(p+m)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,M=(g+1)/2,R=(u+1)/2,A=(h+f)/4,T=(d+y)/4,b=(p+m)/4;return v>M&&v>R?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=A/i,s=T/i):M>R?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=A/r,s=b/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=T/s,r=b/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-p)*(m-p)+(d-y)*(d-y)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(m-p)/_,this.y=(d-y)/_,this.z=(f-h)/_,this.w=Math.acos((c+g+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class x4 extends Ua{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new zt(0,0,e,n),this.scissorTest=!1,this.viewport=new zt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new $n(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Ax(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _o extends x4{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Cx extends $n{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ei,this.minFilter=Ei,this.wrapR=no,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class S4 extends $n{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ei,this.minFilter=Ei,this.wrapR=no,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tc{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],d=i[r+3];const f=s[o+0],g=s[o+1],p=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=g,e[n+2]=p,e[n+3]=y;return}if(d!==y||l!==f||c!==g||h!==p){let m=1-a;const u=l*f+c*g+h*p+d*y,_=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const R=Math.sqrt(v),A=Math.atan2(R,u*_);m=Math.sin(m*A)/R,a=Math.sin(a*A)/R}const M=a*_;if(l=l*m+f*M,c=c*m+g*M,h=h*m+p*M,d=d*m+y*M,m===1-a){const R=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=R,c*=R,h*=R,d*=R}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],d=s[o],f=s[o+1],g=s[o+2],p=s[o+3];return e[n]=a*p+h*d+l*g-c*f,e[n+1]=l*p+h*f+c*d-a*g,e[n+2]=c*p+h*g+a*f-l*d,e[n+3]=h*p-a*d-l*f-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),d=a(s/2),f=l(i/2),g=l(r/2),p=l(s/2);switch(o){case"XYZ":this._x=f*h*d+c*g*p,this._y=c*g*d-f*h*p,this._z=c*h*p+f*g*d,this._w=c*h*d-f*g*p;break;case"YXZ":this._x=f*h*d+c*g*p,this._y=c*g*d-f*h*p,this._z=c*h*p-f*g*d,this._w=c*h*d+f*g*p;break;case"ZXY":this._x=f*h*d-c*g*p,this._y=c*g*d+f*h*p,this._z=c*h*p+f*g*d,this._w=c*h*d-f*g*p;break;case"ZYX":this._x=f*h*d-c*g*p,this._y=c*g*d+f*h*p,this._z=c*h*p-f*g*d,this._w=c*h*d+f*g*p;break;case"YZX":this._x=f*h*d+c*g*p,this._y=c*g*d+f*h*p,this._z=c*h*p-f*g*d,this._w=c*h*d-f*g*p;break;case"XZY":this._x=f*h*d-c*g*p,this._y=c*g*d-f*h*p,this._z=c*h*p+f*g*d,this._w=c*h*d+f*g*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],h=n[6],d=n[10],f=i+a+d;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(h-l)*g,this._y=(s-c)*g,this._z=(o-r)*g}else if(i>a&&i>d){const g=2*Math.sqrt(1+i-a-d);this._w=(h-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+c)/g}else if(a>d){const g=2*Math.sqrt(1+a-i-d);this._w=(s-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+h)/g}else{const g=2*Math.sqrt(1+d-i-a);this._w=(o-r)/g,this._x=(s+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-n)*h)/c,f=Math.sin(n*h)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(h_.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(h_.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),h=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*h,this.y=i+l*h+a*c-s*d,this.z=r+l*d+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Gf.copy(this).projectOnVector(e),this.sub(Gf)}reflect(e){return this.sub(Gf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Vn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gf=new k,h_=new tc;class nc{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Ni.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Ni.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Ni.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ni):Ni.fromBufferAttribute(s,o),Ni.applyMatrix4(e.matrixWorld),this.expandByPoint(Ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Dc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Dc.copy(i.boundingBox)),Dc.applyMatrix4(e.matrixWorld),this.union(Dc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ni),Ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(el),Nc.subVectors(this.max,el),Ao.subVectors(e.a,el),Co.subVectors(e.b,el),Ro.subVectors(e.c,el),Yr.subVectors(Co,Ao),qr.subVectors(Ro,Co),ks.subVectors(Ao,Ro);let n=[0,-Yr.z,Yr.y,0,-qr.z,qr.y,0,-ks.z,ks.y,Yr.z,0,-Yr.x,qr.z,0,-qr.x,ks.z,0,-ks.x,-Yr.y,Yr.x,0,-qr.y,qr.x,0,-ks.y,ks.x,0];return!Wf(n,Ao,Co,Ro,Nc)||(n=[1,0,0,0,1,0,0,0,1],!Wf(n,Ao,Co,Ro,Nc))?!1:(Uc.crossVectors(Yr,qr),n=[Uc.x,Uc.y,Uc.z],Wf(n,Ao,Co,Ro,Nc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xr=[new k,new k,new k,new k,new k,new k,new k,new k],Ni=new k,Dc=new nc,Ao=new k,Co=new k,Ro=new k,Yr=new k,qr=new k,ks=new k,el=new k,Nc=new k,Uc=new k,Bs=new k;function Wf(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Bs.fromArray(t,s);const a=r.x*Math.abs(Bs.x)+r.y*Math.abs(Bs.y)+r.z*Math.abs(Bs.z),l=e.dot(Bs),c=n.dot(Bs),h=i.dot(Bs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const M4=new nc,tl=new k,Xf=new k;class P0{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):M4.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;tl.subVectors(e,this.center);const n=tl.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(tl,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(tl.copy(e.center).add(Xf)),this.expandByPoint(tl.copy(e.center).sub(Xf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Sr=new k,$f=new k,Fc=new k,Kr=new k,jf=new k,Oc=new k,Yf=new k;class E4{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Sr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Sr.copy(this.origin).addScaledVector(this.direction,n),Sr.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){$f.copy(e).add(n).multiplyScalar(.5),Fc.copy(n).sub(e).normalize(),Kr.copy(this.origin).sub($f);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Fc),a=Kr.dot(this.direction),l=-Kr.dot(Fc),c=Kr.lengthSq(),h=Math.abs(1-o*o);let d,f,g,p;if(h>0)if(d=o*l-a,f=o*a-l,p=s*h,d>=0)if(f>=-p)if(f<=p){const y=1/h;d*=y,f*=y,g=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+c;else f<=-p?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),g=-d*d+f*(f+2*l)+c):f<=p?(d=0,f=Math.min(Math.max(-s,-l),s),g=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),g=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy($f).addScaledVector(Fc,f),g}intersectSphere(e,n){Sr.subVectors(e.center,this.origin);const i=Sr.dot(this.direction),r=Sr.dot(Sr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Sr)!==null}intersectTriangle(e,n,i,r,s){jf.subVectors(n,e),Oc.subVectors(i,e),Yf.crossVectors(jf,Oc);let o=this.direction.dot(Yf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Kr.subVectors(this.origin,e);const l=a*this.direction.dot(Oc.crossVectors(Kr,Oc));if(l<0)return null;const c=a*this.direction.dot(jf.cross(Kr));if(c<0||l+c>o)return null;const h=-a*Kr.dot(Yf);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(e,n,i,r,s,o,a,l,c,h,d,f,g,p,y,m){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,h,d,f,g,p,y,m)}set(e,n,i,r,s,o,a,l,c,h,d,f,g,p,y,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=g,u[7]=p,u[11]=y,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/bo.setFromMatrixColumn(e,0).length(),s=1/bo.setFromMatrixColumn(e,1).length(),o=1/bo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*h,g=o*d,p=a*h,y=a*d;n[0]=l*h,n[4]=-l*d,n[8]=c,n[1]=g+p*c,n[5]=f-y*c,n[9]=-a*l,n[2]=y-f*c,n[6]=p+g*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*h,g=l*d,p=c*h,y=c*d;n[0]=f+y*a,n[4]=p*a-g,n[8]=o*c,n[1]=o*d,n[5]=o*h,n[9]=-a,n[2]=g*a-p,n[6]=y+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*h,g=l*d,p=c*h,y=c*d;n[0]=f-y*a,n[4]=-o*d,n[8]=p+g*a,n[1]=g+p*a,n[5]=o*h,n[9]=y-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*h,g=o*d,p=a*h,y=a*d;n[0]=l*h,n[4]=p*c-g,n[8]=f*c+y,n[1]=l*d,n[5]=y*c+f,n[9]=g*c-p,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,g=o*c,p=a*l,y=a*c;n[0]=l*h,n[4]=y-f*d,n[8]=p*d+g,n[1]=d,n[5]=o*h,n[9]=-a*h,n[2]=-c*h,n[6]=g*d+p,n[10]=f-y*d}else if(e.order==="XZY"){const f=o*l,g=o*c,p=a*l,y=a*c;n[0]=l*h,n[4]=-d,n[8]=c*h,n[1]=f*d+y,n[5]=o*h,n[9]=g*d-p,n[2]=p*d-g,n[6]=a*h,n[10]=y*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(w4,e,T4)}lookAt(e,n,i){const r=this.elements;return Jn.subVectors(e,n),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Zr.crossVectors(i,Jn),Zr.lengthSq()===0&&(Math.abs(i.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Zr.crossVectors(i,Jn)),Zr.normalize(),kc.crossVectors(Jn,Zr),r[0]=Zr.x,r[4]=kc.x,r[8]=Jn.x,r[1]=Zr.y,r[5]=kc.y,r[9]=Jn.y,r[2]=Zr.z,r[6]=kc.z,r[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],g=i[13],p=i[2],y=i[6],m=i[10],u=i[14],_=i[3],v=i[7],M=i[11],R=i[15],A=r[0],T=r[4],b=r[8],H=r[12],x=r[1],E=r[5],F=r[9],U=r[13],W=r[2],$=r[6],V=r[10],q=r[14],L=r[3],K=r[7],J=r[11],re=r[15];return s[0]=o*A+a*x+l*W+c*L,s[4]=o*T+a*E+l*$+c*K,s[8]=o*b+a*F+l*V+c*J,s[12]=o*H+a*U+l*q+c*re,s[1]=h*A+d*x+f*W+g*L,s[5]=h*T+d*E+f*$+g*K,s[9]=h*b+d*F+f*V+g*J,s[13]=h*H+d*U+f*q+g*re,s[2]=p*A+y*x+m*W+u*L,s[6]=p*T+y*E+m*$+u*K,s[10]=p*b+y*F+m*V+u*J,s[14]=p*H+y*U+m*q+u*re,s[3]=_*A+v*x+M*W+R*L,s[7]=_*T+v*E+M*$+R*K,s[11]=_*b+v*F+M*V+R*J,s[15]=_*H+v*U+M*q+R*re,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],g=e[14],p=e[3],y=e[7],m=e[11],u=e[15];return p*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*g-i*l*g)+y*(+n*l*g-n*c*f+s*o*f-r*o*g+r*c*h-s*l*h)+m*(+n*c*d-n*a*g-s*o*d+i*o*g+s*a*h-i*c*h)+u*(-r*a*h-n*l*d+n*a*f+r*o*d-i*o*f+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],g=e[11],p=e[12],y=e[13],m=e[14],u=e[15],_=d*m*c-y*f*c+y*l*g-a*m*g-d*l*u+a*f*u,v=p*f*c-h*m*c-p*l*g+o*m*g+h*l*u-o*f*u,M=h*y*c-p*d*c+p*a*g-o*y*g-h*a*u+o*d*u,R=p*d*l-h*y*l-p*a*f+o*y*f+h*a*m-o*d*m,A=n*_+i*v+r*M+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=_*T,e[1]=(y*f*s-d*m*s-y*r*g+i*m*g+d*r*u-i*f*u)*T,e[2]=(a*m*s-y*l*s+y*r*c-i*m*c-a*r*u+i*l*u)*T,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*g-i*l*g)*T,e[4]=v*T,e[5]=(h*m*s-p*f*s+p*r*g-n*m*g-h*r*u+n*f*u)*T,e[6]=(p*l*s-o*m*s-p*r*c+n*m*c+o*r*u-n*l*u)*T,e[7]=(o*f*s-h*l*s+h*r*c-n*f*c-o*r*g+n*l*g)*T,e[8]=M*T,e[9]=(p*d*s-h*y*s-p*i*g+n*y*g+h*i*u-n*d*u)*T,e[10]=(o*y*s-p*a*s+p*i*c-n*y*c-o*i*u+n*a*u)*T,e[11]=(h*a*s-o*d*s-h*i*c+n*d*c+o*i*g-n*a*g)*T,e[12]=R*T,e[13]=(h*y*r-p*d*r+p*i*f-n*y*f-h*i*m+n*d*m)*T,e[14]=(p*a*r-o*y*r-p*i*l+n*y*l+o*i*m-n*a*m)*T,e[15]=(o*d*r-h*a*r+h*i*l-n*d*l-o*i*f+n*a*f)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,h=o+o,d=a+a,f=s*c,g=s*h,p=s*d,y=o*h,m=o*d,u=a*d,_=l*c,v=l*h,M=l*d,R=i.x,A=i.y,T=i.z;return r[0]=(1-(y+u))*R,r[1]=(g+M)*R,r[2]=(p-v)*R,r[3]=0,r[4]=(g-M)*A,r[5]=(1-(f+u))*A,r[6]=(m+_)*A,r[7]=0,r[8]=(p+v)*T,r[9]=(m-_)*T,r[10]=(1-(f+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=bo.set(r[0],r[1],r[2]).length();const o=bo.set(r[4],r[5],r[6]).length(),a=bo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ui.copy(this);const c=1/s,h=1/o,d=1/a;return Ui.elements[0]*=c,Ui.elements[1]*=c,Ui.elements[2]*=c,Ui.elements[4]*=h,Ui.elements[5]*=h,Ui.elements[6]*=h,Ui.elements[8]*=d,Ui.elements[9]*=d,Ui.elements[10]*=d,n.setFromRotationMatrix(Ui),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Dr){const l=this.elements,c=2*s/(n-e),h=2*s/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r);let g,p;if(a===Dr)g=-(o+s)/(o-s),p=-2*o*s/(o-s);else if(a===rh)g=-o/(o-s),p=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Dr){const l=this.elements,c=1/(n-e),h=1/(i-r),d=1/(o-s),f=(n+e)*c,g=(i+r)*h;let p,y;if(a===Dr)p=(o+s)*d,y=-2*d;else if(a===rh)p=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=y,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const bo=new k,Ui=new Ht,w4=new k(0,0,0),T4=new k(1,1,1),Zr=new k,kc=new k,Jn=new k,f_=new Ht,d_=new tc;class hr{constructor(e=0,n=0,i=0,r=hr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],d=r[2],f=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(Vn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Vn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Vn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Vn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Vn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Vn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return f_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(f_,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return d_.setFromEuler(this),this.setFromQuaternion(d_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hr.DEFAULT_ORDER="XYZ";class Rx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let A4=0;const p_=new k,Po=new tc,Mr=new Ht,Bc=new k,nl=new k,C4=new k,R4=new tc,m_=new k(1,0,0),g_=new k(0,1,0),__=new k(0,0,1),v_={type:"added"},b4={type:"removed"},Lo={type:"childadded",child:null},qf={type:"childremoved",child:null};class mn extends Ua{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:A4++}),this.uuid=ec(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const e=new k,n=new hr,i=new tc,r=new k(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ht},normalMatrix:{value:new We}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Po.setFromAxisAngle(e,n),this.quaternion.multiply(Po),this}rotateOnWorldAxis(e,n){return Po.setFromAxisAngle(e,n),this.quaternion.premultiply(Po),this}rotateX(e){return this.rotateOnAxis(m_,e)}rotateY(e){return this.rotateOnAxis(g_,e)}rotateZ(e){return this.rotateOnAxis(__,e)}translateOnAxis(e,n){return p_.copy(e).applyQuaternion(this.quaternion),this.position.add(p_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(m_,e)}translateY(e){return this.translateOnAxis(g_,e)}translateZ(e){return this.translateOnAxis(__,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mr.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Bc.copy(e):Bc.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),nl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mr.lookAt(nl,Bc,this.up):Mr.lookAt(Bc,nl,this.up),this.quaternion.setFromRotationMatrix(Mr),r&&(Mr.extractRotation(r.matrixWorld),Po.setFromRotationMatrix(Mr),this.quaternion.premultiply(Po.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(v_),Lo.child=e,this.dispatchEvent(Lo),Lo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(b4),qf.child=e,this.dispatchEvent(qf),qf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(v_),Lo.child=e,this.dispatchEvent(Lo),Lo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nl,e,C4),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nl,R4,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),g=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),p.length>0&&(i.nodes=p)}return i.object=r,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}mn.DEFAULT_UP=new k(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fi=new k,Er=new k,Kf=new k,wr=new k,Io=new k,Do=new k,y_=new k,Zf=new k,Jf=new k,Qf=new k,ed=new zt,td=new zt,nd=new zt;class Hi{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Fi.subVectors(e,n),r.cross(Fi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Fi.subVectors(r,n),Er.subVectors(i,n),Kf.subVectors(e,n);const o=Fi.dot(Fi),a=Fi.dot(Er),l=Fi.dot(Kf),c=Er.dot(Er),h=Er.dot(Kf),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,g=(c*l-a*h)*f,p=(o*h-a*l)*f;return s.set(1-g-p,p,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,wr)===null?!1:wr.x>=0&&wr.y>=0&&wr.x+wr.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,wr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,wr.x),l.addScaledVector(o,wr.y),l.addScaledVector(a,wr.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return ed.setScalar(0),td.setScalar(0),nd.setScalar(0),ed.fromBufferAttribute(e,n),td.fromBufferAttribute(e,i),nd.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ed,s.x),o.addScaledVector(td,s.y),o.addScaledVector(nd,s.z),o}static isFrontFacing(e,n,i,r){return Fi.subVectors(i,n),Er.subVectors(e,n),Fi.cross(Er).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fi.subVectors(this.c,this.b),Er.subVectors(this.a,this.b),Fi.cross(Er).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Hi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Hi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Io.subVectors(r,i),Do.subVectors(s,i),Zf.subVectors(e,i);const l=Io.dot(Zf),c=Do.dot(Zf);if(l<=0&&c<=0)return n.copy(i);Jf.subVectors(e,r);const h=Io.dot(Jf),d=Do.dot(Jf);if(h>=0&&d<=h)return n.copy(r);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),n.copy(i).addScaledVector(Io,o);Qf.subVectors(e,s);const g=Io.dot(Qf),p=Do.dot(Qf);if(p>=0&&g<=p)return n.copy(s);const y=g*c-l*p;if(y<=0&&c>=0&&p<=0)return a=c/(c-p),n.copy(i).addScaledVector(Do,a);const m=h*p-g*d;if(m<=0&&d-h>=0&&g-p>=0)return y_.subVectors(s,r),a=(d-h)/(d-h+(g-p)),n.copy(r).addScaledVector(y_,a);const u=1/(m+y+f);return o=y*u,a=f*u,n.copy(i).addScaledVector(Io,o).addScaledVector(Do,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const bx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jr={h:0,s:0,l:0},zc={h:0,s:0,l:0};function id(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ir){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ct.workingColorSpace){return this.r=e,this.g=n,this.b=i,ct.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ct.workingColorSpace){if(e=h4(e,1),n=Vn(n,0,1),i=Vn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=id(o,s,e+1/3),this.g=id(o,s,e),this.b=id(o,s,e-1/3)}return ct.toWorkingColorSpace(this,r),this}setStyle(e,n=ir){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ir){const i=bx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=aa(e.r),this.g=aa(e.g),this.b=aa(e.b),this}copyLinearToSRGB(e){return this.r=Vf(e.r),this.g=Vf(e.g),this.b=Vf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ir){return ct.fromWorkingColorSpace(Mn.copy(this),e),Math.round(Vn(Mn.r*255,0,255))*65536+Math.round(Vn(Mn.g*255,0,255))*256+Math.round(Vn(Mn.b*255,0,255))}getHexString(e=ir){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ct.workingColorSpace){ct.fromWorkingColorSpace(Mn.copy(this),n);const i=Mn.r,r=Mn.g,s=Mn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=ct.workingColorSpace){return ct.fromWorkingColorSpace(Mn.copy(this),n),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=ir){ct.fromWorkingColorSpace(Mn.copy(this),e);const n=Mn.r,i=Mn.g,r=Mn.b;return e!==ir?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Jr),this.setHSL(Jr.h+e,Jr.s+n,Jr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Jr),e.getHSL(zc);const i=Bf(Jr.h,zc.h,n),r=Bf(Jr.s,zc.s,n),s=Bf(Jr.l,zc.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new qe;qe.NAMES=bx;let P4=0;class ic extends Ua{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:P4++}),this.uuid=ec(),this.name="",this.type="Material",this.blending=sa,this.side=Ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xp,this.blendDst=Sp,this.blendEquation=Zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=ga,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=s_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wo,this.stencilZFail=wo,this.stencilZPass=wo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==sa&&(i.blending=this.blending),this.side!==Ts&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==xp&&(i.blendSrc=this.blendSrc),this.blendDst!==Sp&&(i.blendDst=this.blendDst),this.blendEquation!==Zs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ga&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==s_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==wo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==wo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class L0 extends ic{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hr,this.combine=hx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new k,Vc=new ot;class ur{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=o_,this.updateRanges=[],this.gpuType=Ir,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Vc.fromBufferAttribute(this,n),Vc.applyMatrix3(e),this.setXY(n,Vc.x,Vc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Zt.fromBufferAttribute(this,n),Zt.applyMatrix3(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Zt.fromBufferAttribute(this,n),Zt.applyMatrix4(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Zt.fromBufferAttribute(this,n),Zt.applyNormalMatrix(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Zt.fromBufferAttribute(this,n),Zt.transformDirection(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ja(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=On(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ja(n,this.array)),n}setX(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ja(n,this.array)),n}setY(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ja(n,this.array)),n}setZ(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ja(n,this.array)),n}setW(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=On(n,this.array),i=On(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=On(n,this.array),i=On(i,this.array),r=On(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=On(n,this.array),i=On(i,this.array),r=On(r,this.array),s=On(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==o_&&(e.usage=this.usage),e}}class Px extends ur{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Lx extends ur{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class gn extends ur{constructor(e,n,i){super(new Float32Array(e),n,i)}}let L4=0;const pi=new Ht,rd=new mn,No=new k,Qn=new nc,il=new nc,an=new k;class Yi extends Ua{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:L4++}),this.uuid=ec(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tx(e)?Lx:Px)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,n,i){return pi.makeTranslation(e,n,i),this.applyMatrix4(pi),this}scale(e,n,i){return pi.makeScale(e,n,i),this.applyMatrix4(pi),this}lookAt(e){return rd.lookAt(e),rd.updateMatrix(),this.applyMatrix4(rd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(No).negate(),this.translate(No.x,No.y,No.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new gn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Qn.setFromBufferAttribute(s),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new P0);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];il.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(Qn.min,il.min),Qn.expandByPoint(an),an.addVectors(Qn.max,il.max),Qn.expandByPoint(an)):(Qn.expandByPoint(il.min),Qn.expandByPoint(il.max))}Qn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)an.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(an));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)an.fromBufferAttribute(a,c),l&&(No.fromBufferAttribute(e,c),an.add(No)),r=Math.max(r,i.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ur(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new k,l[b]=new k;const c=new k,h=new k,d=new k,f=new ot,g=new ot,p=new ot,y=new k,m=new k;function u(b,H,x){c.fromBufferAttribute(i,b),h.fromBufferAttribute(i,H),d.fromBufferAttribute(i,x),f.fromBufferAttribute(s,b),g.fromBufferAttribute(s,H),p.fromBufferAttribute(s,x),h.sub(c),d.sub(c),g.sub(f),p.sub(f);const E=1/(g.x*p.y-p.x*g.y);isFinite(E)&&(y.copy(h).multiplyScalar(p.y).addScaledVector(d,-g.y).multiplyScalar(E),m.copy(d).multiplyScalar(g.x).addScaledVector(h,-p.x).multiplyScalar(E),a[b].add(y),a[H].add(y),a[x].add(y),l[b].add(m),l[H].add(m),l[x].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let b=0,H=_.length;b<H;++b){const x=_[b],E=x.start,F=x.count;for(let U=E,W=E+F;U<W;U+=3)u(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const v=new k,M=new k,R=new k,A=new k;function T(b){R.fromBufferAttribute(r,b),A.copy(R);const H=a[b];v.copy(H),v.sub(R.multiplyScalar(R.dot(H))).normalize(),M.crossVectors(A,H);const E=M.dot(l[b])<0?-1:1;o.setXYZW(b,v.x,v.y,v.z,E)}for(let b=0,H=_.length;b<H;++b){const x=_[b],E=x.start,F=x.count;for(let U=E,W=E+F;U<W;U+=3)T(e.getX(U+0)),T(e.getX(U+1)),T(e.getX(U+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ur(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);const r=new k,s=new k,o=new k,a=new k,l=new k,c=new k,h=new k,d=new k;if(e)for(let f=0,g=e.count;f<g;f+=3){const p=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,p),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,g=n.count;f<g;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)an.fromBufferAttribute(e,n),an.normalize(),e.setXYZ(n,an.x,an.y,an.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h);let g=0,p=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?g=l[y]*a.data.stride+a.offset:g=l[y]*h;for(let u=0;u<h;u++)f[p++]=c[g++]}return new ur(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Yi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){const f=c[h],g=e(f,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const g=c[d];h.push(g.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let f=0,g=d.length;f<g;f++)h.push(d[f].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const x_=new Ht,zs=new E4,Hc=new P0,S_=new k,Gc=new k,Wc=new k,Xc=new k,sd=new k,$c=new k,M_=new k,jc=new k;class xe extends mn{constructor(e=new Yi,n=new L0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){$c.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],d=s[l];h!==0&&(sd.fromBufferAttribute(d,e),o?$c.addScaledVector(sd,h):$c.addScaledVector(sd.sub(n),h))}n.add($c)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Hc.copy(i.boundingSphere),Hc.applyMatrix4(s),zs.copy(e.ray).recast(e.near),!(Hc.containsPoint(zs.origin)===!1&&(zs.intersectSphere(Hc,S_)===null||zs.origin.distanceToSquared(S_)>(e.far-e.near)**2))&&(x_.copy(s).invert(),zs.copy(e.ray).applyMatrix4(x_),!(i.boundingBox!==null&&zs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,zs)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,y=f.length;p<y;p++){const m=f[p],u=o[m.materialIndex],_=Math.max(m.start,g.start),v=Math.min(a.count,Math.min(m.start+m.count,g.start+g.count));for(let M=_,R=v;M<R;M+=3){const A=a.getX(M),T=a.getX(M+1),b=a.getX(M+2);r=Yc(this,u,e,i,c,h,d,A,T,b),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const p=Math.max(0,g.start),y=Math.min(a.count,g.start+g.count);for(let m=p,u=y;m<u;m+=3){const _=a.getX(m),v=a.getX(m+1),M=a.getX(m+2);r=Yc(this,o,e,i,c,h,d,_,v,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,y=f.length;p<y;p++){const m=f[p],u=o[m.materialIndex],_=Math.max(m.start,g.start),v=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let M=_,R=v;M<R;M+=3){const A=M,T=M+1,b=M+2;r=Yc(this,u,e,i,c,h,d,A,T,b),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const p=Math.max(0,g.start),y=Math.min(l.count,g.start+g.count);for(let m=p,u=y;m<u;m+=3){const _=m,v=m+1,M=m+2;r=Yc(this,o,e,i,c,h,d,_,v,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function I4(t,e,n,i,r,s,o,a){let l;if(e.side===Ln?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ts,a),l===null)return null;jc.copy(a),jc.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(jc);return c<n.near||c>n.far?null:{distance:c,point:jc.clone(),object:t}}function Yc(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Gc),t.getVertexPosition(l,Wc),t.getVertexPosition(c,Xc);const h=I4(t,e,n,i,Gc,Wc,Xc,M_);if(h){const d=new k;Hi.getBarycoord(M_,Gc,Wc,Xc,d),r&&(h.uv=Hi.getInterpolatedAttribute(r,a,l,c,d,new ot)),s&&(h.uv1=Hi.getInterpolatedAttribute(s,a,l,c,d,new ot)),o&&(h.normal=Hi.getInterpolatedAttribute(o,a,l,c,d,new k),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new k,materialIndex:0};Hi.getNormal(Gc,Wc,Xc,f.normal),h.face=f,h.barycoord=d}return h}class Ze extends Yi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,g=0;p("z","y","x",-1,-1,i,n,e,o,s,0),p("z","y","x",1,-1,i,n,-e,o,s,1),p("x","z","y",1,1,e,i,n,r,o,2),p("x","z","y",1,-1,e,i,-n,r,o,3),p("x","y","z",1,-1,e,n,i,r,s,4),p("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new gn(c,3)),this.setAttribute("normal",new gn(h,3)),this.setAttribute("uv",new gn(d,2));function p(y,m,u,_,v,M,R,A,T,b,H){const x=M/T,E=R/b,F=M/2,U=R/2,W=A/2,$=T+1,V=b+1;let q=0,L=0;const K=new k;for(let J=0;J<V;J++){const re=J*E-U;for(let Ie=0;Ie<$;Ie++){const je=Ie*x-F;K[y]=je*_,K[m]=re*v,K[u]=W,c.push(K.x,K.y,K.z),K[y]=0,K[m]=0,K[u]=A>0?1:-1,h.push(K.x,K.y,K.z),d.push(Ie/T),d.push(1-J/b),q+=1}}for(let J=0;J<b;J++)for(let re=0;re<T;re++){const Ie=f+re+$*J,je=f+re+$*(J+1),X=f+(re+1)+$*(J+1),te=f+(re+1)+$*J;l.push(Ie,je,te),l.push(je,X,te),L+=6}a.addGroup(g,L,H),g+=L,f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ze(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Sa(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Rn(t){const e={};for(let n=0;n<t.length;n++){const i=Sa(t[n]);for(const r in i)e[r]=i[r]}return e}function D4(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Ix(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const N4={clone:Sa,merge:Rn};var U4=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,F4=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gr extends ic{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=U4,this.fragmentShader=F4,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Sa(e.uniforms),this.uniformsGroups=D4(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Dx extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=Dr}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qr=new k,E_=new ot,w_=new ot;class xi extends Dx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=sm*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(kf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sm*2*Math.atan(Math.tan(kf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Qr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qr.x,Qr.y).multiplyScalar(-e/Qr.z),Qr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qr.x,Qr.y).multiplyScalar(-e/Qr.z)}getViewSize(e,n){return this.getViewBounds(e,E_,w_),n.subVectors(w_,E_)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(kf*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Uo=-90,Fo=1;class O4 extends mn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new xi(Uo,Fo,e,n);r.layers=this.layers,this.add(r);const s=new xi(Uo,Fo,e,n);s.layers=this.layers,this.add(s);const o=new xi(Uo,Fo,e,n);o.layers=this.layers,this.add(o);const a=new xi(Uo,Fo,e,n);a.layers=this.layers,this.add(a);const l=new xi(Uo,Fo,e,n);l.layers=this.layers,this.add(l);const c=new xi(Uo,Fo,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Dr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===rh)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(d,f,g),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class Nx extends $n{constructor(e,n,i,r,s,o,a,l,c,h){e=e!==void 0?e:[],n=n!==void 0?n:_a,super(e,n,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class k4 extends _o{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Nx(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Vi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ze(5,5,5),s=new Gr({name:"CubemapFromEquirect",uniforms:Sa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ln,blending:xs});s.uniforms.tEquirect.value=n;const o=new xe(r,s),a=n.minFilter;return n.minFilter===io&&(n.minFilter=Vi),new O4(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const od=new k,B4=new k,z4=new We;class Ys{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=od.subVectors(i,n).cross(B4.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(od),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||z4.getNormalMatrix(e),r=this.coplanarPoint(od).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vs=new P0,qc=new k;class I0{constructor(e=new Ys,n=new Ys,i=new Ys,r=new Ys,s=new Ys,o=new Ys){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Dr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],d=r[6],f=r[7],g=r[8],p=r[9],y=r[10],m=r[11],u=r[12],_=r[13],v=r[14],M=r[15];if(i[0].setComponents(l-s,f-c,m-g,M-u).normalize(),i[1].setComponents(l+s,f+c,m+g,M+u).normalize(),i[2].setComponents(l+o,f+h,m+p,M+_).normalize(),i[3].setComponents(l-o,f-h,m-p,M-_).normalize(),i[4].setComponents(l-a,f-d,m-y,M-v).normalize(),n===Dr)i[5].setComponents(l+a,f+d,m+y,M+v).normalize();else if(n===rh)i[5].setComponents(a,d,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Vs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vs)}intersectsSprite(e){return Vs.center.set(0,0,0),Vs.radius=.7071067811865476,Vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vs)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(qc.x=r.normal.x>0?e.max.x:e.min.x,qc.y=r.normal.y>0?e.max.y:e.min.y,qc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(qc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ux(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function V4(t){const e=new WeakMap;function n(a,l){const c=a.array,h=a.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,h),a.onUploadCallback();let g;if(c instanceof Float32Array)g=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=t.SHORT;else if(c instanceof Uint32Array)g=t.UNSIGNED_INT;else if(c instanceof Int32Array)g=t.INT;else if(c instanceof Int8Array)g=t.BYTE;else if(c instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const h=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,h);else{d.sort((g,p)=>g.start-p.start);let f=0;for(let g=1;g<d.length;g++){const p=d[f],y=d[g];y.start<=p.start+p.count+1?p.count=Math.max(p.count,y.start+y.count-p.start):(++f,d[f]=y)}d.length=f+1;for(let g=0,p=d.length;g<p;g++){const y=d[g];t.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Ma extends Yi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,d=e/a,f=n/l,g=[],p=[],y=[],m=[];for(let u=0;u<h;u++){const _=u*f-o;for(let v=0;v<c;v++){const M=v*d-s;p.push(M,-_,0),y.push(0,0,1),m.push(v/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let _=0;_<a;_++){const v=_+c*u,M=_+c*(u+1),R=_+1+c*(u+1),A=_+1+c*u;g.push(v,M,A),g.push(M,R,A)}this.setIndex(g),this.setAttribute("position",new gn(p,3)),this.setAttribute("normal",new gn(y,3)),this.setAttribute("uv",new gn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ma(e.width,e.height,e.widthSegments,e.heightSegments)}}var H4=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,G4=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,W4=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,X4=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$4=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,j4=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Y4=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,q4=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,K4=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Z4=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,J4=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Q4=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,iT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,aT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,uT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,hT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,pT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_T=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vT="gl_FragColor = linearToOutputTexel( gl_FragColor );",yT=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ST=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,MT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ET=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,TT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,RT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,PT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,IT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,DT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,NT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,UT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,FT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,BT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,VT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,HT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,GT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,WT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,XT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$T=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,YT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ZT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,QT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,oA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,aA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_A=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,SA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,MA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,EA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,wA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,TA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,AA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,CA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,RA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,LA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,IA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,DA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,UA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,FA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,OA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,BA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const VA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,HA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$A=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,YA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,KA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ZA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,JA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,oC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_C=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:H4,alphahash_pars_fragment:G4,alphamap_fragment:W4,alphamap_pars_fragment:X4,alphatest_fragment:$4,alphatest_pars_fragment:j4,aomap_fragment:Y4,aomap_pars_fragment:q4,batching_pars_vertex:K4,batching_vertex:Z4,begin_vertex:J4,beginnormal_vertex:Q4,bsdfs:eT,iridescence_fragment:tT,bumpmap_pars_fragment:nT,clipping_planes_fragment:iT,clipping_planes_pars_fragment:rT,clipping_planes_pars_vertex:sT,clipping_planes_vertex:oT,color_fragment:aT,color_pars_fragment:lT,color_pars_vertex:cT,color_vertex:uT,common:hT,cube_uv_reflection_fragment:fT,defaultnormal_vertex:dT,displacementmap_pars_vertex:pT,displacementmap_vertex:mT,emissivemap_fragment:gT,emissivemap_pars_fragment:_T,colorspace_fragment:vT,colorspace_pars_fragment:yT,envmap_fragment:xT,envmap_common_pars_fragment:ST,envmap_pars_fragment:MT,envmap_pars_vertex:ET,envmap_physical_pars_fragment:NT,envmap_vertex:wT,fog_vertex:TT,fog_pars_vertex:AT,fog_fragment:CT,fog_pars_fragment:RT,gradientmap_pars_fragment:bT,lightmap_pars_fragment:PT,lights_lambert_fragment:LT,lights_lambert_pars_fragment:IT,lights_pars_begin:DT,lights_toon_fragment:UT,lights_toon_pars_fragment:FT,lights_phong_fragment:OT,lights_phong_pars_fragment:kT,lights_physical_fragment:BT,lights_physical_pars_fragment:zT,lights_fragment_begin:VT,lights_fragment_maps:HT,lights_fragment_end:GT,logdepthbuf_fragment:WT,logdepthbuf_pars_fragment:XT,logdepthbuf_pars_vertex:$T,logdepthbuf_vertex:jT,map_fragment:YT,map_pars_fragment:qT,map_particle_fragment:KT,map_particle_pars_fragment:ZT,metalnessmap_fragment:JT,metalnessmap_pars_fragment:QT,morphinstance_vertex:eA,morphcolor_vertex:tA,morphnormal_vertex:nA,morphtarget_pars_vertex:iA,morphtarget_vertex:rA,normal_fragment_begin:sA,normal_fragment_maps:oA,normal_pars_fragment:aA,normal_pars_vertex:lA,normal_vertex:cA,normalmap_pars_fragment:uA,clearcoat_normal_fragment_begin:hA,clearcoat_normal_fragment_maps:fA,clearcoat_pars_fragment:dA,iridescence_pars_fragment:pA,opaque_fragment:mA,packing:gA,premultiplied_alpha_fragment:_A,project_vertex:vA,dithering_fragment:yA,dithering_pars_fragment:xA,roughnessmap_fragment:SA,roughnessmap_pars_fragment:MA,shadowmap_pars_fragment:EA,shadowmap_pars_vertex:wA,shadowmap_vertex:TA,shadowmask_pars_fragment:AA,skinbase_vertex:CA,skinning_pars_vertex:RA,skinning_vertex:bA,skinnormal_vertex:PA,specularmap_fragment:LA,specularmap_pars_fragment:IA,tonemapping_fragment:DA,tonemapping_pars_fragment:NA,transmission_fragment:UA,transmission_pars_fragment:FA,uv_pars_fragment:OA,uv_pars_vertex:kA,uv_vertex:BA,worldpos_vertex:zA,background_vert:VA,background_frag:HA,backgroundCube_vert:GA,backgroundCube_frag:WA,cube_vert:XA,cube_frag:$A,depth_vert:jA,depth_frag:YA,distanceRGBA_vert:qA,distanceRGBA_frag:KA,equirect_vert:ZA,equirect_frag:JA,linedashed_vert:QA,linedashed_frag:eC,meshbasic_vert:tC,meshbasic_frag:nC,meshlambert_vert:iC,meshlambert_frag:rC,meshmatcap_vert:sC,meshmatcap_frag:oC,meshnormal_vert:aC,meshnormal_frag:lC,meshphong_vert:cC,meshphong_frag:uC,meshphysical_vert:hC,meshphysical_frag:fC,meshtoon_vert:dC,meshtoon_frag:pC,points_vert:mC,points_frag:gC,shadow_vert:_C,shadow_frag:vC,sprite_vert:yC,sprite_frag:xC},le={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},rr={basic:{uniforms:Rn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Rn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Rn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Rn([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Rn([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Rn([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Rn([le.points,le.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Rn([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Rn([le.common,le.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Rn([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Rn([le.sprite,le.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Rn([le.common,le.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Rn([le.lights,le.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};rr.physical={uniforms:Rn([rr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Kc={r:0,b:0,g:0},Hs=new hr,SC=new Ht;function MC(t,e,n,i,r,s,o){const a=new qe(0);let l=s===!0?0:1,c,h,d=null,f=0,g=null;function p(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?n:e).get(v)),v}function y(_){let v=!1;const M=p(_);M===null?u(a,l):M&&M.isColor&&(u(M,1),v=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(_,v){const M=p(v);M&&(M.isCubeTexture||M.mapping===Nh)?(h===void 0&&(h=new xe(new Ze(1,1,1),new Gr({name:"BackgroundCubeMaterial",uniforms:Sa(rr.backgroundCube.uniforms),vertexShader:rr.backgroundCube.vertexShader,fragmentShader:rr.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Hs.copy(v.backgroundRotation),Hs.x*=-1,Hs.y*=-1,Hs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Hs.y*=-1,Hs.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(SC.makeRotationFromEuler(Hs)),h.material.toneMapped=ct.getTransfer(M.colorSpace)!==Et,(d!==M||f!==M.version||g!==t.toneMapping)&&(h.material.needsUpdate=!0,d=M,f=M.version,g=t.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new xe(new Ma(2,2),new Gr({name:"BackgroundMaterial",uniforms:Sa(rr.background.uniforms),vertexShader:rr.background.vertexShader,fragmentShader:rr.background.fragmentShader,side:Ts,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ct.getTransfer(M.colorSpace)!==Et,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||f!==M.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,d=M,f=M.version,g=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function u(_,v){_.getRGB(Kc,Ix(t)),i.buffers.color.setClear(Kc.r,Kc.g,Kc.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),l=v,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,u(a,l)},render:y,addToRenderList:m}}function EC(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(x,E,F,U,W){let $=!1;const V=d(U,F,E);s!==V&&(s=V,c(s.object)),$=g(x,U,F,W),$&&p(x,U,F,W),W!==null&&e.update(W,t.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,M(x,E,F,U),W!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return t.createVertexArray()}function c(x){return t.bindVertexArray(x)}function h(x){return t.deleteVertexArray(x)}function d(x,E,F){const U=F.wireframe===!0;let W=i[x.id];W===void 0&&(W={},i[x.id]=W);let $=W[E.id];$===void 0&&($={},W[E.id]=$);let V=$[U];return V===void 0&&(V=f(l()),$[U]=V),V}function f(x){const E=[],F=[],U=[];for(let W=0;W<n;W++)E[W]=0,F[W]=0,U[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:F,attributeDivisors:U,object:x,attributes:{},index:null}}function g(x,E,F,U){const W=s.attributes,$=E.attributes;let V=0;const q=F.getAttributes();for(const L in q)if(q[L].location>=0){const J=W[L];let re=$[L];if(re===void 0&&(L==="instanceMatrix"&&x.instanceMatrix&&(re=x.instanceMatrix),L==="instanceColor"&&x.instanceColor&&(re=x.instanceColor)),J===void 0||J.attribute!==re||re&&J.data!==re.data)return!0;V++}return s.attributesNum!==V||s.index!==U}function p(x,E,F,U){const W={},$=E.attributes;let V=0;const q=F.getAttributes();for(const L in q)if(q[L].location>=0){let J=$[L];J===void 0&&(L==="instanceMatrix"&&x.instanceMatrix&&(J=x.instanceMatrix),L==="instanceColor"&&x.instanceColor&&(J=x.instanceColor));const re={};re.attribute=J,J&&J.data&&(re.data=J.data),W[L]=re,V++}s.attributes=W,s.attributesNum=V,s.index=U}function y(){const x=s.newAttributes;for(let E=0,F=x.length;E<F;E++)x[E]=0}function m(x){u(x,0)}function u(x,E){const F=s.newAttributes,U=s.enabledAttributes,W=s.attributeDivisors;F[x]=1,U[x]===0&&(t.enableVertexAttribArray(x),U[x]=1),W[x]!==E&&(t.vertexAttribDivisor(x,E),W[x]=E)}function _(){const x=s.newAttributes,E=s.enabledAttributes;for(let F=0,U=E.length;F<U;F++)E[F]!==x[F]&&(t.disableVertexAttribArray(F),E[F]=0)}function v(x,E,F,U,W,$,V){V===!0?t.vertexAttribIPointer(x,E,F,W,$):t.vertexAttribPointer(x,E,F,U,W,$)}function M(x,E,F,U){y();const W=U.attributes,$=F.getAttributes(),V=E.defaultAttributeValues;for(const q in $){const L=$[q];if(L.location>=0){let K=W[q];if(K===void 0&&(q==="instanceMatrix"&&x.instanceMatrix&&(K=x.instanceMatrix),q==="instanceColor"&&x.instanceColor&&(K=x.instanceColor)),K!==void 0){const J=K.normalized,re=K.itemSize,Ie=e.get(K);if(Ie===void 0)continue;const je=Ie.buffer,X=Ie.type,te=Ie.bytesPerElement,ue=X===t.INT||X===t.UNSIGNED_INT||K.gpuType===E0;if(K.isInterleavedBufferAttribute){const Z=K.data,se=Z.stride,Se=K.offset;if(Z.isInstancedInterleavedBuffer){for(let Oe=0;Oe<L.locationSize;Oe++)u(L.location+Oe,Z.meshPerAttribute);x.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Oe=0;Oe<L.locationSize;Oe++)m(L.location+Oe);t.bindBuffer(t.ARRAY_BUFFER,je);for(let Oe=0;Oe<L.locationSize;Oe++)v(L.location+Oe,re/L.locationSize,X,J,se*te,(Se+re/L.locationSize*Oe)*te,ue)}else{if(K.isInstancedBufferAttribute){for(let Z=0;Z<L.locationSize;Z++)u(L.location+Z,K.meshPerAttribute);x.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Z=0;Z<L.locationSize;Z++)m(L.location+Z);t.bindBuffer(t.ARRAY_BUFFER,je);for(let Z=0;Z<L.locationSize;Z++)v(L.location+Z,re/L.locationSize,X,J,re*te,re/L.locationSize*Z*te,ue)}}else if(V!==void 0){const J=V[q];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(L.location,J);break;case 3:t.vertexAttrib3fv(L.location,J);break;case 4:t.vertexAttrib4fv(L.location,J);break;default:t.vertexAttrib1fv(L.location,J)}}}}_()}function R(){b();for(const x in i){const E=i[x];for(const F in E){const U=E[F];for(const W in U)h(U[W].object),delete U[W];delete E[F]}delete i[x]}}function A(x){if(i[x.id]===void 0)return;const E=i[x.id];for(const F in E){const U=E[F];for(const W in U)h(U[W].object),delete U[W];delete E[F]}delete i[x.id]}function T(x){for(const E in i){const F=i[E];if(F[x.id]===void 0)continue;const U=F[x.id];for(const W in U)h(U[W].object),delete U[W];delete F[x.id]}}function b(){H(),o=!0,s!==r&&(s=r,c(s.object))}function H(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:H,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:m,disableUnusedAttributes:_}}function wC(t,e,n){let i;function r(c){i=c}function s(c,h){t.drawArrays(i,c,h),n.update(h,i,1)}function o(c,h,d){d!==0&&(t.drawArraysInstanced(i,c,h,d),n.update(h,i,d))}function a(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let g=0;for(let p=0;p<d;p++)g+=h[p];n.update(g,i,1)}function l(c,h,d,f){if(d===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<c.length;p++)o(c[p],h[p],f[p]);else{g.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,d);let p=0;for(let y=0;y<d;y++)p+=h[y];for(let y=0;y<f.length;y++)n.update(p,i,f[y])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function TC(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Gi&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const b=T===Ql&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Hr&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Ir&&!b)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const g=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=p>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:g,maxVertexTextures:p,maxTextureSize:y,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:M,vertexTextures:R,maxSamples:A}}function AC(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ys,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const g=d.length!==0||f||i!==0||r;return r=f,i=d.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=h(d,f,0)},this.setState=function(d,f,g){const p=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,u=t.get(d);if(!r||p===null||p.length===0||s&&!m)s?h(null):c();else{const _=s?0:i,v=_*4;let M=u.clippingState||null;l.value=M,M=h(p,f,v,g);for(let R=0;R!==v;++R)M[R]=n[R];u.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,f,g,p){const y=d!==null?d.length:0;let m=null;if(y!==0){if(m=l.value,p!==!0||m===null){const u=g+y*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<u)&&(m=new Float32Array(u));for(let v=0,M=g;v!==y;++v,M+=4)o.copy(d[v]).applyMatrix4(_,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function CC(t){let e=new WeakMap;function n(o,a){return a===bp?o.mapping=_a:a===Pp&&(o.mapping=va),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===bp||a===Pp)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new k4(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Fx extends Dx{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Zo=4,T_=[.125,.215,.35,.446,.526,.582],Js=20,ad=new Fx,A_=new qe;let ld=null,cd=0,ud=0,hd=!1;const qs=(1+Math.sqrt(5))/2,Oo=1/qs,C_=[new k(-qs,Oo,0),new k(qs,Oo,0),new k(-Oo,0,qs),new k(Oo,0,qs),new k(0,qs,-Oo),new k(0,qs,Oo),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class R_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){ld=this._renderer.getRenderTarget(),cd=this._renderer.getActiveCubeFace(),ud=this._renderer.getActiveMipmapLevel(),hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=L_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=P_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ld,cd,ud),this._renderer.xr.enabled=hd,e.scissorTest=!1,Zc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===_a||e.mapping===va?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ld=this._renderer.getRenderTarget(),cd=this._renderer.getActiveCubeFace(),ud=this._renderer.getActiveMipmapLevel(),hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Vi,minFilter:Vi,generateMipmaps:!1,type:Ql,format:Gi,colorSpace:Ns,depthBuffer:!1},r=b_(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=b_(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=RC(s)),this._blurMaterial=bC(s,e,n)}return r}_compileMaterial(e){const n=new xe(this._lodPlanes[0],e);this._renderer.compile(n,ad)}_sceneToCubeUV(e,n,i,r){const a=new xi(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(A_),h.toneMapping=Ss,h.autoClear=!1;const g=new L0({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1}),p=new xe(new Ze,g);let y=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,y=!0):(g.color.copy(A_),y=!0);for(let u=0;u<6;u++){const _=u%3;_===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):_===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const v=this._cubeSize;Zc(r,_*v,u>2?v:0,v,v),h.setRenderTarget(r),y&&h.render(p,a),h.render(e,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===_a||e.mapping===va;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=L_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=P_());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new xe(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Zc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,ad)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=C_[(r-s-1)%C_.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new xe(this._lodPlanes[r],c),f=c.uniforms,g=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Js-1),y=s/p,m=isFinite(s)?1+Math.floor(h*y):Js;m>Js&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Js}`);const u=[];let _=0;for(let T=0;T<Js;++T){const b=T/y,H=Math.exp(-b*b/2);u.push(H),T===0?_+=H:T<m&&(_+=2*H)}for(let T=0;T<u.length;T++)u[T]=u[T]/_;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=p,f.mipInt.value=v-i;const M=this._sizeLods[r],R=3*M*(r>v-Zo?r-v+Zo:0),A=4*(this._cubeSize-M);Zc(n,R,A,3*M,2*M),l.setRenderTarget(n),l.render(d,ad)}}function RC(t){const e=[],n=[],i=[];let r=t;const s=t-Zo+1+T_.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Zo?l=T_[o-t+Zo-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],g=6,p=6,y=3,m=2,u=1,_=new Float32Array(y*p*g),v=new Float32Array(m*p*g),M=new Float32Array(u*p*g);for(let A=0;A<g;A++){const T=A%3*2/3-1,b=A>2?0:-1,H=[T,b,0,T+2/3,b,0,T+2/3,b+1,0,T,b,0,T+2/3,b+1,0,T,b+1,0];_.set(H,y*p*A),v.set(f,m*p*A);const x=[A,A,A,A,A,A];M.set(x,u*p*A)}const R=new Yi;R.setAttribute("position",new ur(_,y)),R.setAttribute("uv",new ur(v,m)),R.setAttribute("faceIndex",new ur(M,u)),e.push(R),r>Zo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function b_(t,e,n){const i=new _o(t,e,n);return i.texture.mapping=Nh,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Zc(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function bC(t,e,n){const i=new Float32Array(Js),r=new k(0,1,0);return new Gr({name:"SphericalGaussianBlur",defines:{n:Js,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:D0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xs,depthTest:!1,depthWrite:!1})}function P_(){return new Gr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:D0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xs,depthTest:!1,depthWrite:!1})}function L_(){return new Gr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:D0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xs,depthTest:!1,depthWrite:!1})}function D0(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function PC(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===bp||l===Pp,h=l===_a||l===va;if(c||h){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new R_(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const g=a.image;return c&&g&&g.height>0||h&&g&&r(g)?(n===null&&(n=new R_(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function LC(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Su("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function IC(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const p in f.attributes)e.remove(f.attributes[p]);for(const p in f.morphAttributes){const y=f.morphAttributes[p];for(let m=0,u=y.length;m<u;m++)e.remove(y[m])}f.removeEventListener("dispose",o),delete r[f.id];const g=s.get(f);g&&(e.remove(g),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)e.update(f[p],t.ARRAY_BUFFER);const g=d.morphAttributes;for(const p in g){const y=g[p];for(let m=0,u=y.length;m<u;m++)e.update(y[m],t.ARRAY_BUFFER)}}function c(d){const f=[],g=d.index,p=d.attributes.position;let y=0;if(g!==null){const _=g.array;y=g.version;for(let v=0,M=_.length;v<M;v+=3){const R=_[v+0],A=_[v+1],T=_[v+2];f.push(R,A,A,T,T,R)}}else if(p!==void 0){const _=p.array;y=p.version;for(let v=0,M=_.length/3-1;v<M;v+=3){const R=v+0,A=v+1,T=v+2;f.push(R,A,A,T,T,R)}}else return;const m=new(Tx(f)?Lx:Px)(f,1);m.version=y;const u=s.get(d);u&&e.remove(u),s.set(d,m)}function h(d){const f=s.get(d);if(f){const g=d.index;g!==null&&f.version<g.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function DC(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,g){t.drawElements(i,g,s,f*o),n.update(g,i,1)}function c(f,g,p){p!==0&&(t.drawElementsInstanced(i,g,s,f*o,p),n.update(g,i,p))}function h(f,g,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,f,0,p);let m=0;for(let u=0;u<p;u++)m+=g[u];n.update(m,i,1)}function d(f,g,p,y){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/o,g[u],y[u]);else{m.multiDrawElementsInstancedWEBGL(i,g,0,s,f,0,y,0,p);let u=0;for(let _=0;_<p;_++)u+=g[_];for(let _=0;_<y.length;_++)n.update(u,i,y[_])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function NC(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function UC(t,e,n){const i=new WeakMap,r=new zt;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let x=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var g=x;f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let M=0;p===!0&&(M=1),y===!0&&(M=2),m===!0&&(M=3);let R=a.attributes.position.count*M,A=1;R>e.maxTextureSize&&(A=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const T=new Float32Array(R*A*4*d),b=new Cx(T,R,A,d);b.type=Ir,b.needsUpdate=!0;const H=M*4;for(let E=0;E<d;E++){const F=u[E],U=_[E],W=v[E],$=R*A*4*E;for(let V=0;V<F.count;V++){const q=V*H;p===!0&&(r.fromBufferAttribute(F,V),T[$+q+0]=r.x,T[$+q+1]=r.y,T[$+q+2]=r.z,T[$+q+3]=0),y===!0&&(r.fromBufferAttribute(U,V),T[$+q+4]=r.x,T[$+q+5]=r.y,T[$+q+6]=r.z,T[$+q+7]=0),m===!0&&(r.fromBufferAttribute(W,V),T[$+q+8]=r.x,T[$+q+9]=r.y,T[$+q+10]=r.z,T[$+q+11]=W.itemSize===4?r.w:1)}}f={count:d,texture:b,size:new ot(R,A)},i.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let p=0;for(let m=0;m<c.length;m++)p+=c[m];const y=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function FC(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class Ox extends $n{constructor(e,n,i,r,s,o,a,l,c,h=oa){if(h!==oa&&h!==xa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===oa&&(i=go),i===void 0&&h===xa&&(i=ya),super(null,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Ei,this.minFilter=l!==void 0?l:Ei,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const kx=new $n,I_=new Ox(1,1),Bx=new Cx,zx=new S4,Vx=new Nx,D_=[],N_=[],U_=new Float32Array(16),F_=new Float32Array(9),O_=new Float32Array(4);function Fa(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=D_[r];if(s===void 0&&(s=new Float32Array(r),D_[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function rn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function sn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Fh(t,e){let n=N_[e];n===void 0&&(n=new Int32Array(e),N_[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function OC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function kC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(rn(n,e))return;t.uniform2fv(this.addr,e),sn(n,e)}}function BC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(rn(n,e))return;t.uniform3fv(this.addr,e),sn(n,e)}}function zC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(rn(n,e))return;t.uniform4fv(this.addr,e),sn(n,e)}}function VC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(rn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),sn(n,e)}else{if(rn(n,i))return;O_.set(i),t.uniformMatrix2fv(this.addr,!1,O_),sn(n,i)}}function HC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(rn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),sn(n,e)}else{if(rn(n,i))return;F_.set(i),t.uniformMatrix3fv(this.addr,!1,F_),sn(n,i)}}function GC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(rn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),sn(n,e)}else{if(rn(n,i))return;U_.set(i),t.uniformMatrix4fv(this.addr,!1,U_),sn(n,i)}}function WC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function XC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(rn(n,e))return;t.uniform2iv(this.addr,e),sn(n,e)}}function $C(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(rn(n,e))return;t.uniform3iv(this.addr,e),sn(n,e)}}function jC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(rn(n,e))return;t.uniform4iv(this.addr,e),sn(n,e)}}function YC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function qC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(rn(n,e))return;t.uniform2uiv(this.addr,e),sn(n,e)}}function KC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(rn(n,e))return;t.uniform3uiv(this.addr,e),sn(n,e)}}function ZC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(rn(n,e))return;t.uniform4uiv(this.addr,e),sn(n,e)}}function JC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(I_.compareFunction=wx,s=I_):s=kx,n.setTexture2D(e||s,r)}function QC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||zx,r)}function eR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Vx,r)}function tR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Bx,r)}function nR(t){switch(t){case 5126:return OC;case 35664:return kC;case 35665:return BC;case 35666:return zC;case 35674:return VC;case 35675:return HC;case 35676:return GC;case 5124:case 35670:return WC;case 35667:case 35671:return XC;case 35668:case 35672:return $C;case 35669:case 35673:return jC;case 5125:return YC;case 36294:return qC;case 36295:return KC;case 36296:return ZC;case 35678:case 36198:case 36298:case 36306:case 35682:return JC;case 35679:case 36299:case 36307:return QC;case 35680:case 36300:case 36308:case 36293:return eR;case 36289:case 36303:case 36311:case 36292:return tR}}function iR(t,e){t.uniform1fv(this.addr,e)}function rR(t,e){const n=Fa(e,this.size,2);t.uniform2fv(this.addr,n)}function sR(t,e){const n=Fa(e,this.size,3);t.uniform3fv(this.addr,n)}function oR(t,e){const n=Fa(e,this.size,4);t.uniform4fv(this.addr,n)}function aR(t,e){const n=Fa(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function lR(t,e){const n=Fa(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function cR(t,e){const n=Fa(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function uR(t,e){t.uniform1iv(this.addr,e)}function hR(t,e){t.uniform2iv(this.addr,e)}function fR(t,e){t.uniform3iv(this.addr,e)}function dR(t,e){t.uniform4iv(this.addr,e)}function pR(t,e){t.uniform1uiv(this.addr,e)}function mR(t,e){t.uniform2uiv(this.addr,e)}function gR(t,e){t.uniform3uiv(this.addr,e)}function _R(t,e){t.uniform4uiv(this.addr,e)}function vR(t,e,n){const i=this.cache,r=e.length,s=Fh(n,r);rn(i,s)||(t.uniform1iv(this.addr,s),sn(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||kx,s[o])}function yR(t,e,n){const i=this.cache,r=e.length,s=Fh(n,r);rn(i,s)||(t.uniform1iv(this.addr,s),sn(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||zx,s[o])}function xR(t,e,n){const i=this.cache,r=e.length,s=Fh(n,r);rn(i,s)||(t.uniform1iv(this.addr,s),sn(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Vx,s[o])}function SR(t,e,n){const i=this.cache,r=e.length,s=Fh(n,r);rn(i,s)||(t.uniform1iv(this.addr,s),sn(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Bx,s[o])}function MR(t){switch(t){case 5126:return iR;case 35664:return rR;case 35665:return sR;case 35666:return oR;case 35674:return aR;case 35675:return lR;case 35676:return cR;case 5124:case 35670:return uR;case 35667:case 35671:return hR;case 35668:case 35672:return fR;case 35669:case 35673:return dR;case 5125:return pR;case 36294:return mR;case 36295:return gR;case 36296:return _R;case 35678:case 36198:case 36298:case 36306:case 35682:return vR;case 35679:case 36299:case 36307:return yR;case 35680:case 36300:case 36308:case 36293:return xR;case 36289:case 36303:case 36311:case 36292:return SR}}class ER{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=nR(n.type)}}class wR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=MR(n.type)}}class TR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const fd=/(\w+)(\])?(\[|\.)?/g;function k_(t,e){t.seq.push(e),t.map[e.id]=e}function AR(t,e,n){const i=t.name,r=i.length;for(fd.lastIndex=0;;){const s=fd.exec(i),o=fd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){k_(n,c===void 0?new ER(a,t,e):new wR(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new TR(a),k_(n,d)),n=d}}}class Mu{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);AR(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function B_(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const CR=37297;let RR=0;function bR(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function PR(t){const e=ct.getPrimaries(ct.workingColorSpace),n=ct.getPrimaries(t);let i;switch(e===n?i="":e===ih&&n===nh?i="LinearDisplayP3ToLinearSRGB":e===nh&&n===ih&&(i="LinearSRGBToLinearDisplayP3"),t){case Ns:case Uh:return[i,"LinearTransferOETF"];case ir:case b0:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function z_(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+bR(t.getShaderSource(e),o)}else return r}function LR(t,e){const n=PR(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function IR(t,e){let n;switch(e){case jw:n="Linear";break;case Yw:n="Reinhard";break;case qw:n="Cineon";break;case Kw:n="ACESFilmic";break;case Jw:n="AgX";break;case Qw:n="Neutral";break;case Zw:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Jc=new k;function DR(){ct.getLuminanceCoefficients(Jc);const t=Jc.x.toFixed(4),e=Jc.y.toFixed(4),n=Jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function NR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ul).join(`
`)}function UR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function FR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ul(t){return t!==""}function V_(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function H_(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const OR=/^[ \t]*#include +<([\w\d./]+)>/gm;function om(t){return t.replace(OR,BR)}const kR=new Map;function BR(t,e){let n=Ge[e];if(n===void 0){const i=kR.get(e);if(i!==void 0)n=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return om(n)}const zR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function G_(t){return t.replace(zR,VR)}function VR(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function W_(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function HR(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===cx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===ux?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Tr&&(e="SHADOWMAP_TYPE_VSM"),e}function GR(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case _a:case va:e="ENVMAP_TYPE_CUBE";break;case Nh:e="ENVMAP_TYPE_CUBE_UV";break}return e}function WR(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case va:e="ENVMAP_MODE_REFRACTION";break}return e}function XR(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case hx:e="ENVMAP_BLENDING_MULTIPLY";break;case Xw:e="ENVMAP_BLENDING_MIX";break;case $w:e="ENVMAP_BLENDING_ADD";break}return e}function $R(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function jR(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=HR(n),c=GR(n),h=WR(n),d=XR(n),f=$R(n),g=NR(n),p=UR(s),y=r.createProgram();let m,u,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter(ul).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter(ul).join(`
`),u.length>0&&(u+=`
`)):(m=[W_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ul).join(`
`),u=[W_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ss?"#define TONE_MAPPING":"",n.toneMapping!==Ss?Ge.tonemapping_pars_fragment:"",n.toneMapping!==Ss?IR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,LR("linearToOutputTexel",n.outputColorSpace),DR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ul).join(`
`)),o=om(o),o=V_(o,n),o=H_(o,n),a=om(a),a=V_(a,n),a=H_(a,n),o=G_(o),a=G_(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===a_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===a_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const v=_+m+o,M=_+u+a,R=B_(r,r.VERTEX_SHADER,v),A=B_(r,r.FRAGMENT_SHADER,M);r.attachShader(y,R),r.attachShader(y,A),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function T(E){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(y).trim(),U=r.getShaderInfoLog(R).trim(),W=r.getShaderInfoLog(A).trim();let $=!0,V=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,R,A);else{const q=z_(r,R,"vertex"),L=z_(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+F+`
`+q+`
`+L)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(U===""||W==="")&&(V=!1);V&&(E.diagnostics={runnable:$,programLog:F,vertexShader:{log:U,prefix:m},fragmentShader:{log:W,prefix:u}})}r.deleteShader(R),r.deleteShader(A),b=new Mu(r,y),H=FR(r,y)}let b;this.getUniforms=function(){return b===void 0&&T(this),b};let H;this.getAttributes=function(){return H===void 0&&T(this),H};let x=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(y,CR)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=RR++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=R,this.fragmentShader=A,this}let YR=0;class qR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new KR(e),n.set(e,i)),i}}class KR{constructor(e){this.id=YR++,this.code=e,this.usedTimes=0}}function ZR(t,e,n,i,r,s,o){const a=new Rx,l=new qR,c=new Set,h=[],d=r.logarithmicDepthBuffer,f=r.reverseDepthBuffer,g=r.vertexTextures;let p=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return c.add(x),x===0?"uv":`uv${x}`}function u(x,E,F,U,W){const $=U.fog,V=W.geometry,q=x.isMeshStandardMaterial?U.environment:null,L=(x.isMeshStandardMaterial?n:e).get(x.envMap||q),K=L&&L.mapping===Nh?L.image.height:null,J=y[x.type];x.precision!==null&&(p=r.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const re=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ie=re!==void 0?re.length:0;let je=0;V.morphAttributes.position!==void 0&&(je=1),V.morphAttributes.normal!==void 0&&(je=2),V.morphAttributes.color!==void 0&&(je=3);let X,te,ue,Z;if(J){const Fn=rr[J];X=Fn.vertexShader,te=Fn.fragmentShader}else X=x.vertexShader,te=x.fragmentShader,l.update(x),ue=l.getVertexShaderID(x),Z=l.getFragmentShaderID(x);const se=t.getRenderTarget(),Se=W.isInstancedMesh===!0,Oe=W.isBatchedMesh===!0,Ye=!!x.map,He=!!x.matcap,P=!!L,vn=!!x.aoMap,Ne=!!x.lightMap,Pe=!!x.bumpMap,De=!!x.normalMap,ht=!!x.displacementMap,Ue=!!x.emissiveMap,C=!!x.metalnessMap,S=!!x.roughnessMap,O=x.anisotropy>0,Y=x.clearcoat>0,ee=x.dispersion>0,j=x.iridescence>0,Ce=x.sheen>0,ce=x.transmission>0,_e=O&&!!x.anisotropyMap,it=Y&&!!x.clearcoatMap,ie=Y&&!!x.clearcoatNormalMap,ve=Y&&!!x.clearcoatRoughnessMap,Be=j&&!!x.iridescenceMap,ze=j&&!!x.iridescenceThicknessMap,ye=Ce&&!!x.sheenColorMap,Qe=Ce&&!!x.sheenRoughnessMap,Ve=!!x.specularMap,gt=!!x.specularColorMap,I=!!x.specularIntensityMap,de=ce&&!!x.transmissionMap,G=ce&&!!x.thicknessMap,Q=!!x.gradientMap,he=!!x.alphaMap,pe=x.alphaTest>0,et=!!x.alphaHash,Kt=!!x.extensions;let Un=Ss;x.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Un=t.toneMapping);const st={shaderID:J,shaderType:x.type,shaderName:x.name,vertexShader:X,fragmentShader:te,defines:x.defines,customVertexShaderID:ue,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:Oe,batchingColor:Oe&&W._colorsTexture!==null,instancing:Se,instancingColor:Se&&W.instanceColor!==null,instancingMorph:Se&&W.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:se===null?t.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Ns,alphaToCoverage:!!x.alphaToCoverage,map:Ye,matcap:He,envMap:P,envMapMode:P&&L.mapping,envMapCubeUVHeight:K,aoMap:vn,lightMap:Ne,bumpMap:Pe,normalMap:De,displacementMap:g&&ht,emissiveMap:Ue,normalMapObjectSpace:De&&x.normalMapType===i4,normalMapTangentSpace:De&&x.normalMapType===Ex,metalnessMap:C,roughnessMap:S,anisotropy:O,anisotropyMap:_e,clearcoat:Y,clearcoatMap:it,clearcoatNormalMap:ie,clearcoatRoughnessMap:ve,dispersion:ee,iridescence:j,iridescenceMap:Be,iridescenceThicknessMap:ze,sheen:Ce,sheenColorMap:ye,sheenRoughnessMap:Qe,specularMap:Ve,specularColorMap:gt,specularIntensityMap:I,transmission:ce,transmissionMap:de,thicknessMap:G,gradientMap:Q,opaque:x.transparent===!1&&x.blending===sa&&x.alphaToCoverage===!1,alphaMap:he,alphaTest:pe,alphaHash:et,combine:x.combine,mapUv:Ye&&m(x.map.channel),aoMapUv:vn&&m(x.aoMap.channel),lightMapUv:Ne&&m(x.lightMap.channel),bumpMapUv:Pe&&m(x.bumpMap.channel),normalMapUv:De&&m(x.normalMap.channel),displacementMapUv:ht&&m(x.displacementMap.channel),emissiveMapUv:Ue&&m(x.emissiveMap.channel),metalnessMapUv:C&&m(x.metalnessMap.channel),roughnessMapUv:S&&m(x.roughnessMap.channel),anisotropyMapUv:_e&&m(x.anisotropyMap.channel),clearcoatMapUv:it&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:ie&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:Qe&&m(x.sheenRoughnessMap.channel),specularMapUv:Ve&&m(x.specularMap.channel),specularColorMapUv:gt&&m(x.specularColorMap.channel),specularIntensityMapUv:I&&m(x.specularIntensityMap.channel),transmissionMapUv:de&&m(x.transmissionMap.channel),thicknessMapUv:G&&m(x.thicknessMap.channel),alphaMapUv:he&&m(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(De||O),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!V.attributes.uv&&(Ye||he),fog:!!$,useFog:x.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:f,skinning:W.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:je,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&F.length>0,shadowMapType:t.shadowMap.type,toneMapping:Un,decodeVideoTexture:Ye&&x.map.isVideoTexture===!0&&ct.getTransfer(x.map.colorSpace)===Et,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ar,flipSided:x.side===Ln,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Kt&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Kt&&x.extensions.multiDraw===!0||Oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return st.vertexUv1s=c.has(1),st.vertexUv2s=c.has(2),st.vertexUv3s=c.has(3),c.clear(),st}function _(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const F in x.defines)E.push(F),E.push(x.defines[F]);return x.isRawShaderMaterial===!1&&(v(E,x),M(E,x),E.push(t.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function v(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function M(x,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),x.push(a.mask)}function R(x){const E=y[x.type];let F;if(E){const U=rr[E];F=N4.clone(U.uniforms)}else F=x.uniforms;return F}function A(x,E){let F;for(let U=0,W=h.length;U<W;U++){const $=h[U];if($.cacheKey===E){F=$,++F.usedTimes;break}}return F===void 0&&(F=new jR(t,E,x,s),h.push(F)),F}function T(x){if(--x.usedTimes===0){const E=h.indexOf(x);h[E]=h[h.length-1],h.pop(),x.destroy()}}function b(x){l.remove(x)}function H(){l.dispose()}return{getParameters:u,getProgramCacheKey:_,getUniforms:R,acquireProgram:A,releaseProgram:T,releaseShaderCache:b,programs:h,dispose:H}}function JR(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function QR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function X_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function $_(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,f,g,p,y,m){let u=t[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:g,groupOrder:p,renderOrder:d.renderOrder,z:y,group:m},t[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=g,u.groupOrder=p,u.renderOrder=d.renderOrder,u.z=y,u.group=m),e++,u}function a(d,f,g,p,y,m){const u=o(d,f,g,p,y,m);g.transmission>0?i.push(u):g.transparent===!0?r.push(u):n.push(u)}function l(d,f,g,p,y,m){const u=o(d,f,g,p,y,m);g.transmission>0?i.unshift(u):g.transparent===!0?r.unshift(u):n.unshift(u)}function c(d,f){n.length>1&&n.sort(d||QR),i.length>1&&i.sort(f||X_),r.length>1&&r.sort(f||X_)}function h(){for(let d=e,f=t.length;d<f;d++){const g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function eb(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new $_,t.set(i,[o])):r>=s.length?(o=new $_,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function tb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new qe};break;case"SpotLight":n={position:new k,direction:new k,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function nb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let ib=0;function rb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function sb(t){const e=new tb,n=nb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const r=new k,s=new Ht,o=new Ht;function a(c){let h=0,d=0,f=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let g=0,p=0,y=0,m=0,u=0,_=0,v=0,M=0,R=0,A=0,T=0;c.sort(rb);for(let H=0,x=c.length;H<x;H++){const E=c[H],F=E.color,U=E.intensity,W=E.distance,$=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=F.r*U,d+=F.g*U,f+=F.b*U;else if(E.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(E.sh.coefficients[V],U);T++}else if(E.isDirectionalLight){const V=e.get(E);if(V.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const q=E.shadow,L=n.get(E);L.shadowIntensity=q.intensity,L.shadowBias=q.bias,L.shadowNormalBias=q.normalBias,L.shadowRadius=q.radius,L.shadowMapSize=q.mapSize,i.directionalShadow[g]=L,i.directionalShadowMap[g]=$,i.directionalShadowMatrix[g]=E.shadow.matrix,_++}i.directional[g]=V,g++}else if(E.isSpotLight){const V=e.get(E);V.position.setFromMatrixPosition(E.matrixWorld),V.color.copy(F).multiplyScalar(U),V.distance=W,V.coneCos=Math.cos(E.angle),V.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),V.decay=E.decay,i.spot[y]=V;const q=E.shadow;if(E.map&&(i.spotLightMap[R]=E.map,R++,q.updateMatrices(E),E.castShadow&&A++),i.spotLightMatrix[y]=q.matrix,E.castShadow){const L=n.get(E);L.shadowIntensity=q.intensity,L.shadowBias=q.bias,L.shadowNormalBias=q.normalBias,L.shadowRadius=q.radius,L.shadowMapSize=q.mapSize,i.spotShadow[y]=L,i.spotShadowMap[y]=$,M++}y++}else if(E.isRectAreaLight){const V=e.get(E);V.color.copy(F).multiplyScalar(U),V.halfWidth.set(E.width*.5,0,0),V.halfHeight.set(0,E.height*.5,0),i.rectArea[m]=V,m++}else if(E.isPointLight){const V=e.get(E);if(V.color.copy(E.color).multiplyScalar(E.intensity),V.distance=E.distance,V.decay=E.decay,E.castShadow){const q=E.shadow,L=n.get(E);L.shadowIntensity=q.intensity,L.shadowBias=q.bias,L.shadowNormalBias=q.normalBias,L.shadowRadius=q.radius,L.shadowMapSize=q.mapSize,L.shadowCameraNear=q.camera.near,L.shadowCameraFar=q.camera.far,i.pointShadow[p]=L,i.pointShadowMap[p]=$,i.pointShadowMatrix[p]=E.shadow.matrix,v++}i.point[p]=V,p++}else if(E.isHemisphereLight){const V=e.get(E);V.skyColor.copy(E.color).multiplyScalar(U),V.groundColor.copy(E.groundColor).multiplyScalar(U),i.hemi[u]=V,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;const b=i.hash;(b.directionalLength!==g||b.pointLength!==p||b.spotLength!==y||b.rectAreaLength!==m||b.hemiLength!==u||b.numDirectionalShadows!==_||b.numPointShadows!==v||b.numSpotShadows!==M||b.numSpotMaps!==R||b.numLightProbes!==T)&&(i.directional.length=g,i.spot.length=y,i.rectArea.length=m,i.point.length=p,i.hemi.length=u,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=M+R-A,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,b.directionalLength=g,b.pointLength=p,b.spotLength=y,b.rectAreaLength=m,b.hemiLength=u,b.numDirectionalShadows=_,b.numPointShadows=v,b.numSpotShadows=M,b.numSpotMaps=R,b.numLightProbes=T,i.version=ib++)}function l(c,h){let d=0,f=0,g=0,p=0,y=0;const m=h.matrixWorldInverse;for(let u=0,_=c.length;u<_;u++){const v=c[u];if(v.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),d++}else if(v.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),g++}else if(v.isRectAreaLight){const M=i.rectArea[p];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),p++}else if(v.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){const M=i.hemi[y];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function j_(t){const e=new sb(t),n=[],i=[];function r(h){c.camera=h,n.length=0,i.length=0}function s(h){n.push(h)}function o(h){i.push(h)}function a(){e.setup(n)}function l(h){e.setupView(n,h)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function ob(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new j_(t),e.set(r,[a])):s>=o.length?(a=new j_(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class ab extends ic{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=t4,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lb extends ic{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ub=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function hb(t,e,n){let i=new I0;const r=new ot,s=new ot,o=new zt,a=new ab({depthPacking:n4}),l=new lb,c={},h=n.maxTextureSize,d={[Ts]:Ln,[Ln]:Ts,[ar]:ar},f=new Gr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:cb,fragmentShader:ub}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const p=new Yi;p.setAttribute("position",new ur(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new xe(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cx;let u=this.type;this.render=function(A,T,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const H=t.getRenderTarget(),x=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),F=t.state;F.setBlending(xs),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const U=u!==Tr&&this.type===Tr,W=u===Tr&&this.type!==Tr;for(let $=0,V=A.length;$<V;$++){const q=A[$],L=q.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const K=L.getFrameExtents();if(r.multiply(K),s.copy(L.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/K.x),r.x=s.x*K.x,L.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/K.y),r.y=s.y*K.y,L.mapSize.y=s.y)),L.map===null||U===!0||W===!0){const re=this.type!==Tr?{minFilter:Ei,magFilter:Ei}:{};L.map!==null&&L.map.dispose(),L.map=new _o(r.x,r.y,re),L.map.texture.name=q.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const J=L.getViewportCount();for(let re=0;re<J;re++){const Ie=L.getViewport(re);o.set(s.x*Ie.x,s.y*Ie.y,s.x*Ie.z,s.y*Ie.w),F.viewport(o),L.updateMatrices(q,re),i=L.getFrustum(),M(T,b,L.camera,q,this.type)}L.isPointLightShadow!==!0&&this.type===Tr&&_(L,b),L.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(H,x,E)};function _(A,T){const b=e.update(y);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,g.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new _o(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(T,null,b,f,y,null),g.uniforms.shadow_pass.value=A.mapPass.texture,g.uniforms.resolution.value=A.mapSize,g.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(T,null,b,g,y,null)}function v(A,T,b,H){let x=null;const E=b.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(E!==void 0)x=E;else if(x=b.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const F=x.uuid,U=T.uuid;let W=c[F];W===void 0&&(W={},c[F]=W);let $=W[U];$===void 0&&($=x.clone(),W[U]=$,T.addEventListener("dispose",R)),x=$}if(x.visible=T.visible,x.wireframe=T.wireframe,H===Tr?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:d[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,b.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const F=t.properties.get(x);F.light=b}return x}function M(A,T,b,H,x){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===Tr)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,A.matrixWorld);const U=e.update(A),W=A.material;if(Array.isArray(W)){const $=U.groups;for(let V=0,q=$.length;V<q;V++){const L=$[V],K=W[L.materialIndex];if(K&&K.visible){const J=v(A,K,H,x);A.onBeforeShadow(t,A,T,b,U,J,L),t.renderBufferDirect(b,null,U,J,A,L),A.onAfterShadow(t,A,T,b,U,J,L)}}}else if(W.visible){const $=v(A,W,H,x);A.onBeforeShadow(t,A,T,b,U,$,null),t.renderBufferDirect(b,null,U,$,A,null),A.onAfterShadow(t,A,T,b,U,$,null)}}const F=A.children;for(let U=0,W=F.length;U<W;U++)M(F[U],T,b,H,x)}function R(A){A.target.removeEventListener("dispose",R);for(const b in c){const H=c[b],x=A.target.uuid;x in H&&(H[x].dispose(),delete H[x])}}}const fb={[Mp]:Ep,[wp]:Cp,[Tp]:Rp,[ga]:Ap,[Ep]:Mp,[Cp]:wp,[Rp]:Tp,[Ap]:ga};function db(t){function e(){let I=!1;const de=new zt;let G=null;const Q=new zt(0,0,0,0);return{setMask:function(he){G!==he&&!I&&(t.colorMask(he,he,he,he),G=he)},setLocked:function(he){I=he},setClear:function(he,pe,et,Kt,Un){Un===!0&&(he*=Kt,pe*=Kt,et*=Kt),de.set(he,pe,et,Kt),Q.equals(de)===!1&&(t.clearColor(he,pe,et,Kt),Q.copy(de))},reset:function(){I=!1,G=null,Q.set(-1,0,0,0)}}}function n(){let I=!1,de=!1,G=null,Q=null,he=null;return{setReversed:function(pe){de=pe},setTest:function(pe){pe?ue(t.DEPTH_TEST):Z(t.DEPTH_TEST)},setMask:function(pe){G!==pe&&!I&&(t.depthMask(pe),G=pe)},setFunc:function(pe){if(de&&(pe=fb[pe]),Q!==pe){switch(pe){case Mp:t.depthFunc(t.NEVER);break;case Ep:t.depthFunc(t.ALWAYS);break;case wp:t.depthFunc(t.LESS);break;case ga:t.depthFunc(t.LEQUAL);break;case Tp:t.depthFunc(t.EQUAL);break;case Ap:t.depthFunc(t.GEQUAL);break;case Cp:t.depthFunc(t.GREATER);break;case Rp:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Q=pe}},setLocked:function(pe){I=pe},setClear:function(pe){he!==pe&&(t.clearDepth(pe),he=pe)},reset:function(){I=!1,G=null,Q=null,he=null}}}function i(){let I=!1,de=null,G=null,Q=null,he=null,pe=null,et=null,Kt=null,Un=null;return{setTest:function(st){I||(st?ue(t.STENCIL_TEST):Z(t.STENCIL_TEST))},setMask:function(st){de!==st&&!I&&(t.stencilMask(st),de=st)},setFunc:function(st,Fn,yr){(G!==st||Q!==Fn||he!==yr)&&(t.stencilFunc(st,Fn,yr),G=st,Q=Fn,he=yr)},setOp:function(st,Fn,yr){(pe!==st||et!==Fn||Kt!==yr)&&(t.stencilOp(st,Fn,yr),pe=st,et=Fn,Kt=yr)},setLocked:function(st){I=st},setClear:function(st){Un!==st&&(t.clearStencil(st),Un=st)},reset:function(){I=!1,de=null,G=null,Q=null,he=null,pe=null,et=null,Kt=null,Un=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},h={},d=new WeakMap,f=[],g=null,p=!1,y=null,m=null,u=null,_=null,v=null,M=null,R=null,A=new qe(0,0,0),T=0,b=!1,H=null,x=null,E=null,F=null,U=null;const W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,V=0;const q=t.getParameter(t.VERSION);q.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(q)[1]),$=V>=1):q.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),$=V>=2);let L=null,K={};const J=t.getParameter(t.SCISSOR_BOX),re=t.getParameter(t.VIEWPORT),Ie=new zt().fromArray(J),je=new zt().fromArray(re);function X(I,de,G,Q){const he=new Uint8Array(4),pe=t.createTexture();t.bindTexture(I,pe),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let et=0;et<G;et++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(de,0,t.RGBA,1,1,Q,0,t.RGBA,t.UNSIGNED_BYTE,he):t.texImage2D(de+et,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,he);return pe}const te={};te[t.TEXTURE_2D]=X(t.TEXTURE_2D,t.TEXTURE_2D,1),te[t.TEXTURE_CUBE_MAP]=X(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[t.TEXTURE_2D_ARRAY]=X(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),te[t.TEXTURE_3D]=X(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ue(t.DEPTH_TEST),s.setFunc(ga),Ne(!1),Pe(t_),ue(t.CULL_FACE),P(xs);function ue(I){c[I]!==!0&&(t.enable(I),c[I]=!0)}function Z(I){c[I]!==!1&&(t.disable(I),c[I]=!1)}function se(I,de){return h[I]!==de?(t.bindFramebuffer(I,de),h[I]=de,I===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=de),I===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=de),!0):!1}function Se(I,de){let G=f,Q=!1;if(I){G=d.get(de),G===void 0&&(G=[],d.set(de,G));const he=I.textures;if(G.length!==he.length||G[0]!==t.COLOR_ATTACHMENT0){for(let pe=0,et=he.length;pe<et;pe++)G[pe]=t.COLOR_ATTACHMENT0+pe;G.length=he.length,Q=!0}}else G[0]!==t.BACK&&(G[0]=t.BACK,Q=!0);Q&&t.drawBuffers(G)}function Oe(I){return g!==I?(t.useProgram(I),g=I,!0):!1}const Ye={[Zs]:t.FUNC_ADD,[Rw]:t.FUNC_SUBTRACT,[bw]:t.FUNC_REVERSE_SUBTRACT};Ye[Pw]=t.MIN,Ye[Lw]=t.MAX;const He={[Iw]:t.ZERO,[Dw]:t.ONE,[Nw]:t.SRC_COLOR,[xp]:t.SRC_ALPHA,[zw]:t.SRC_ALPHA_SATURATE,[kw]:t.DST_COLOR,[Fw]:t.DST_ALPHA,[Uw]:t.ONE_MINUS_SRC_COLOR,[Sp]:t.ONE_MINUS_SRC_ALPHA,[Bw]:t.ONE_MINUS_DST_COLOR,[Ow]:t.ONE_MINUS_DST_ALPHA,[Vw]:t.CONSTANT_COLOR,[Hw]:t.ONE_MINUS_CONSTANT_COLOR,[Gw]:t.CONSTANT_ALPHA,[Ww]:t.ONE_MINUS_CONSTANT_ALPHA};function P(I,de,G,Q,he,pe,et,Kt,Un,st){if(I===xs){p===!0&&(Z(t.BLEND),p=!1);return}if(p===!1&&(ue(t.BLEND),p=!0),I!==Cw){if(I!==y||st!==b){if((m!==Zs||v!==Zs)&&(t.blendEquation(t.FUNC_ADD),m=Zs,v=Zs),st)switch(I){case sa:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case n_:t.blendFunc(t.ONE,t.ONE);break;case i_:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case r_:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case sa:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case n_:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case i_:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case r_:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}u=null,_=null,M=null,R=null,A.set(0,0,0),T=0,y=I,b=st}return}he=he||de,pe=pe||G,et=et||Q,(de!==m||he!==v)&&(t.blendEquationSeparate(Ye[de],Ye[he]),m=de,v=he),(G!==u||Q!==_||pe!==M||et!==R)&&(t.blendFuncSeparate(He[G],He[Q],He[pe],He[et]),u=G,_=Q,M=pe,R=et),(Kt.equals(A)===!1||Un!==T)&&(t.blendColor(Kt.r,Kt.g,Kt.b,Un),A.copy(Kt),T=Un),y=I,b=!1}function vn(I,de){I.side===ar?Z(t.CULL_FACE):ue(t.CULL_FACE);let G=I.side===Ln;de&&(G=!G),Ne(G),I.blending===sa&&I.transparent===!1?P(xs):P(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);const Q=I.stencilWrite;o.setTest(Q),Q&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ht(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ue(t.SAMPLE_ALPHA_TO_COVERAGE):Z(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(I){H!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),H=I)}function Pe(I){I!==Tw?(ue(t.CULL_FACE),I!==x&&(I===t_?t.cullFace(t.BACK):I===Aw?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Z(t.CULL_FACE),x=I}function De(I){I!==E&&($&&t.lineWidth(I),E=I)}function ht(I,de,G){I?(ue(t.POLYGON_OFFSET_FILL),(F!==de||U!==G)&&(t.polygonOffset(de,G),F=de,U=G)):Z(t.POLYGON_OFFSET_FILL)}function Ue(I){I?ue(t.SCISSOR_TEST):Z(t.SCISSOR_TEST)}function C(I){I===void 0&&(I=t.TEXTURE0+W-1),L!==I&&(t.activeTexture(I),L=I)}function S(I,de,G){G===void 0&&(L===null?G=t.TEXTURE0+W-1:G=L);let Q=K[G];Q===void 0&&(Q={type:void 0,texture:void 0},K[G]=Q),(Q.type!==I||Q.texture!==de)&&(L!==G&&(t.activeTexture(G),L=G),t.bindTexture(I,de||te[I]),Q.type=I,Q.texture=de)}function O(){const I=K[L];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Y(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ce(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Be(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ze(I){Ie.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),Ie.copy(I))}function ye(I){je.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),je.copy(I))}function Qe(I,de){let G=l.get(de);G===void 0&&(G=new WeakMap,l.set(de,G));let Q=G.get(I);Q===void 0&&(Q=t.getUniformBlockIndex(de,I.name),G.set(I,Q))}function Ve(I,de){const Q=l.get(de).get(I);a.get(de)!==Q&&(t.uniformBlockBinding(de,Q,I.__bindingPointIndex),a.set(de,Q))}function gt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},L=null,K={},h={},d=new WeakMap,f=[],g=null,p=!1,y=null,m=null,u=null,_=null,v=null,M=null,R=null,A=new qe(0,0,0),T=0,b=!1,H=null,x=null,E=null,F=null,U=null,Ie.set(0,0,t.canvas.width,t.canvas.height),je.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ue,disable:Z,bindFramebuffer:se,drawBuffers:Se,useProgram:Oe,setBlending:P,setMaterial:vn,setFlipSided:Ne,setCullFace:Pe,setLineWidth:De,setPolygonOffset:ht,setScissorTest:Ue,activeTexture:C,bindTexture:S,unbindTexture:O,compressedTexImage2D:Y,compressedTexImage3D:ee,texImage2D:ve,texImage3D:Be,updateUBOMapping:Qe,uniformBlockBinding:Ve,texStorage2D:it,texStorage3D:ie,texSubImage2D:j,texSubImage3D:Ce,compressedTexSubImage2D:ce,compressedTexSubImage3D:_e,scissor:ze,viewport:ye,reset:gt}}function Y_(t,e,n,i){const r=pb(i);switch(n){case gx:return t*e;case vx:return t*e;case yx:return t*e*2;case xx:return t*e/r.components*r.byteLength;case A0:return t*e/r.components*r.byteLength;case Sx:return t*e*2/r.components*r.byteLength;case C0:return t*e*2/r.components*r.byteLength;case _x:return t*e*3/r.components*r.byteLength;case Gi:return t*e*4/r.components*r.byteLength;case R0:return t*e*4/r.components*r.byteLength;case gu:case _u:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case vu:case yu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Np:case Fp:return Math.max(t,16)*Math.max(e,8)/4;case Dp:case Up:return Math.max(t,8)*Math.max(e,8)/2;case Op:case kp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Bp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case zp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Vp:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Hp:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Gp:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Wp:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Xp:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case $p:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case jp:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Yp:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case qp:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Kp:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Zp:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Jp:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Qp:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case xu:case em:case tm:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Mx:case nm:return Math.ceil(t/4)*Math.ceil(e/4)*8;case im:case rm:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function pb(t){switch(t){case Hr:case dx:return{byteLength:1,components:1};case Wl:case px:case Ql:return{byteLength:2,components:1};case w0:case T0:return{byteLength:2,components:4};case go:case E0:case Ir:return{byteLength:4,components:1};case mx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function mb(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,h=new WeakMap;let d;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,S){return g?new OffscreenCanvas(C,S):sh("canvas")}function y(C,S,O){let Y=1;const ee=Ue(C);if((ee.width>O||ee.height>O)&&(Y=O/Math.max(ee.width,ee.height)),Y<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const j=Math.floor(Y*ee.width),Ce=Math.floor(Y*ee.height);d===void 0&&(d=p(j,Ce));const ce=S?p(j,Ce):d;return ce.width=j,ce.height=Ce,ce.getContext("2d").drawImage(C,0,0,j,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+j+"x"+Ce+")."),ce}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),C;return C}function m(C){return C.generateMipmaps&&C.minFilter!==Ei&&C.minFilter!==Vi}function u(C){t.generateMipmap(C)}function _(C,S,O,Y,ee=!1){if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let j=S;if(S===t.RED&&(O===t.FLOAT&&(j=t.R32F),O===t.HALF_FLOAT&&(j=t.R16F),O===t.UNSIGNED_BYTE&&(j=t.R8)),S===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(j=t.R8UI),O===t.UNSIGNED_SHORT&&(j=t.R16UI),O===t.UNSIGNED_INT&&(j=t.R32UI),O===t.BYTE&&(j=t.R8I),O===t.SHORT&&(j=t.R16I),O===t.INT&&(j=t.R32I)),S===t.RG&&(O===t.FLOAT&&(j=t.RG32F),O===t.HALF_FLOAT&&(j=t.RG16F),O===t.UNSIGNED_BYTE&&(j=t.RG8)),S===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&(j=t.RG8UI),O===t.UNSIGNED_SHORT&&(j=t.RG16UI),O===t.UNSIGNED_INT&&(j=t.RG32UI),O===t.BYTE&&(j=t.RG8I),O===t.SHORT&&(j=t.RG16I),O===t.INT&&(j=t.RG32I)),S===t.RGB_INTEGER&&(O===t.UNSIGNED_BYTE&&(j=t.RGB8UI),O===t.UNSIGNED_SHORT&&(j=t.RGB16UI),O===t.UNSIGNED_INT&&(j=t.RGB32UI),O===t.BYTE&&(j=t.RGB8I),O===t.SHORT&&(j=t.RGB16I),O===t.INT&&(j=t.RGB32I)),S===t.RGBA_INTEGER&&(O===t.UNSIGNED_BYTE&&(j=t.RGBA8UI),O===t.UNSIGNED_SHORT&&(j=t.RGBA16UI),O===t.UNSIGNED_INT&&(j=t.RGBA32UI),O===t.BYTE&&(j=t.RGBA8I),O===t.SHORT&&(j=t.RGBA16I),O===t.INT&&(j=t.RGBA32I)),S===t.RGB&&O===t.UNSIGNED_INT_5_9_9_9_REV&&(j=t.RGB9_E5),S===t.RGBA){const Ce=ee?th:ct.getTransfer(Y);O===t.FLOAT&&(j=t.RGBA32F),O===t.HALF_FLOAT&&(j=t.RGBA16F),O===t.UNSIGNED_BYTE&&(j=Ce===Et?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT_4_4_4_4&&(j=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(j=t.RGB5_A1)}return(j===t.R16F||j===t.R32F||j===t.RG16F||j===t.RG32F||j===t.RGBA16F||j===t.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function v(C,S){let O;return C?S===null||S===go||S===ya?O=t.DEPTH24_STENCIL8:S===Ir?O=t.DEPTH32F_STENCIL8:S===Wl&&(O=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===go||S===ya?O=t.DEPTH_COMPONENT24:S===Ir?O=t.DEPTH_COMPONENT32F:S===Wl&&(O=t.DEPTH_COMPONENT16),O}function M(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ei&&C.minFilter!==Vi?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function R(C){const S=C.target;S.removeEventListener("dispose",R),T(S),S.isVideoTexture&&h.delete(S)}function A(C){const S=C.target;S.removeEventListener("dispose",A),H(S)}function T(C){const S=i.get(C);if(S.__webglInit===void 0)return;const O=C.source,Y=f.get(O);if(Y){const ee=Y[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&b(C),Object.keys(Y).length===0&&f.delete(O)}i.remove(C)}function b(C){const S=i.get(C);t.deleteTexture(S.__webglTexture);const O=C.source,Y=f.get(O);delete Y[S.__cacheKey],o.memory.textures--}function H(C){const S=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(S.__webglFramebuffer[Y]))for(let ee=0;ee<S.__webglFramebuffer[Y].length;ee++)t.deleteFramebuffer(S.__webglFramebuffer[Y][ee]);else t.deleteFramebuffer(S.__webglFramebuffer[Y]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[Y])}else{if(Array.isArray(S.__webglFramebuffer))for(let Y=0;Y<S.__webglFramebuffer.length;Y++)t.deleteFramebuffer(S.__webglFramebuffer[Y]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Y=0;Y<S.__webglColorRenderbuffer.length;Y++)S.__webglColorRenderbuffer[Y]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[Y]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const O=C.textures;for(let Y=0,ee=O.length;Y<ee;Y++){const j=i.get(O[Y]);j.__webglTexture&&(t.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(O[Y])}i.remove(C)}let x=0;function E(){x=0}function F(){const C=x;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),x+=1,C}function U(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function W(C,S){const O=i.get(C);if(C.isVideoTexture&&De(C),C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){const Y=C.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{je(O,C,S);return}}n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+S)}function $(C,S){const O=i.get(C);if(C.version>0&&O.__version!==C.version){je(O,C,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+S)}function V(C,S){const O=i.get(C);if(C.version>0&&O.__version!==C.version){je(O,C,S);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+S)}function q(C,S){const O=i.get(C);if(C.version>0&&O.__version!==C.version){X(O,C,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+S)}const L={[Lp]:t.REPEAT,[no]:t.CLAMP_TO_EDGE,[Ip]:t.MIRRORED_REPEAT},K={[Ei]:t.NEAREST,[e4]:t.NEAREST_MIPMAP_NEAREST,[Ic]:t.NEAREST_MIPMAP_LINEAR,[Vi]:t.LINEAR,[Of]:t.LINEAR_MIPMAP_NEAREST,[io]:t.LINEAR_MIPMAP_LINEAR},J={[r4]:t.NEVER,[u4]:t.ALWAYS,[s4]:t.LESS,[wx]:t.LEQUAL,[o4]:t.EQUAL,[c4]:t.GEQUAL,[a4]:t.GREATER,[l4]:t.NOTEQUAL};function re(C,S){if(S.type===Ir&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Vi||S.magFilter===Of||S.magFilter===Ic||S.magFilter===io||S.minFilter===Vi||S.minFilter===Of||S.minFilter===Ic||S.minFilter===io)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,L[S.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,L[S.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,L[S.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,K[S.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,K[S.minFilter]),S.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,J[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ei||S.minFilter!==Ic&&S.minFilter!==io||S.type===Ir&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Ie(C,S){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",R));const Y=S.source;let ee=f.get(Y);ee===void 0&&(ee={},f.set(Y,ee));const j=U(S);if(j!==C.__cacheKey){ee[j]===void 0&&(ee[j]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,O=!0),ee[j].usedTimes++;const Ce=ee[C.__cacheKey];Ce!==void 0&&(ee[C.__cacheKey].usedTimes--,Ce.usedTimes===0&&b(S)),C.__cacheKey=j,C.__webglTexture=ee[j].texture}return O}function je(C,S,O){let Y=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Y=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Y=t.TEXTURE_3D);const ee=Ie(C,S),j=S.source;n.bindTexture(Y,C.__webglTexture,t.TEXTURE0+O);const Ce=i.get(j);if(j.version!==Ce.__version||ee===!0){n.activeTexture(t.TEXTURE0+O);const ce=ct.getPrimaries(ct.workingColorSpace),_e=S.colorSpace===ls?null:ct.getPrimaries(S.colorSpace),it=S.colorSpace===ls||ce===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let ie=y(S.image,!1,r.maxTextureSize);ie=ht(S,ie);const ve=s.convert(S.format,S.colorSpace),Be=s.convert(S.type);let ze=_(S.internalFormat,ve,Be,S.colorSpace,S.isVideoTexture);re(Y,S);let ye;const Qe=S.mipmaps,Ve=S.isVideoTexture!==!0,gt=Ce.__version===void 0||ee===!0,I=j.dataReady,de=M(S,ie);if(S.isDepthTexture)ze=v(S.format===xa,S.type),gt&&(Ve?n.texStorage2D(t.TEXTURE_2D,1,ze,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,ze,ie.width,ie.height,0,ve,Be,null));else if(S.isDataTexture)if(Qe.length>0){Ve&&gt&&n.texStorage2D(t.TEXTURE_2D,de,ze,Qe[0].width,Qe[0].height);for(let G=0,Q=Qe.length;G<Q;G++)ye=Qe[G],Ve?I&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,ye.width,ye.height,ve,Be,ye.data):n.texImage2D(t.TEXTURE_2D,G,ze,ye.width,ye.height,0,ve,Be,ye.data);S.generateMipmaps=!1}else Ve?(gt&&n.texStorage2D(t.TEXTURE_2D,de,ze,ie.width,ie.height),I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie.width,ie.height,ve,Be,ie.data)):n.texImage2D(t.TEXTURE_2D,0,ze,ie.width,ie.height,0,ve,Be,ie.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ve&&gt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,ze,Qe[0].width,Qe[0].height,ie.depth);for(let G=0,Q=Qe.length;G<Q;G++)if(ye=Qe[G],S.format!==Gi)if(ve!==null)if(Ve){if(I)if(S.layerUpdates.size>0){const he=Y_(ye.width,ye.height,S.format,S.type);for(const pe of S.layerUpdates){const et=ye.data.subarray(pe*he/ye.data.BYTES_PER_ELEMENT,(pe+1)*he/ye.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,pe,ye.width,ye.height,1,ve,et,0,0)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,0,ye.width,ye.height,ie.depth,ve,ye.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,G,ze,ye.width,ye.height,ie.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,0,ye.width,ye.height,ie.depth,ve,Be,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,G,ze,ye.width,ye.height,ie.depth,0,ve,Be,ye.data)}else{Ve&&gt&&n.texStorage2D(t.TEXTURE_2D,de,ze,Qe[0].width,Qe[0].height);for(let G=0,Q=Qe.length;G<Q;G++)ye=Qe[G],S.format!==Gi?ve!==null?Ve?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,G,0,0,ye.width,ye.height,ve,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,G,ze,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?I&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,ye.width,ye.height,ve,Be,ye.data):n.texImage2D(t.TEXTURE_2D,G,ze,ye.width,ye.height,0,ve,Be,ye.data)}else if(S.isDataArrayTexture)if(Ve){if(gt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,ze,ie.width,ie.height,ie.depth),I)if(S.layerUpdates.size>0){const G=Y_(ie.width,ie.height,S.format,S.type);for(const Q of S.layerUpdates){const he=ie.data.subarray(Q*G/ie.data.BYTES_PER_ELEMENT,(Q+1)*G/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Q,ie.width,ie.height,1,ve,Be,he)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ve,Be,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ze,ie.width,ie.height,ie.depth,0,ve,Be,ie.data);else if(S.isData3DTexture)Ve?(gt&&n.texStorage3D(t.TEXTURE_3D,de,ze,ie.width,ie.height,ie.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ve,Be,ie.data)):n.texImage3D(t.TEXTURE_3D,0,ze,ie.width,ie.height,ie.depth,0,ve,Be,ie.data);else if(S.isFramebufferTexture){if(gt)if(Ve)n.texStorage2D(t.TEXTURE_2D,de,ze,ie.width,ie.height);else{let G=ie.width,Q=ie.height;for(let he=0;he<de;he++)n.texImage2D(t.TEXTURE_2D,he,ze,G,Q,0,ve,Be,null),G>>=1,Q>>=1}}else if(Qe.length>0){if(Ve&&gt){const G=Ue(Qe[0]);n.texStorage2D(t.TEXTURE_2D,de,ze,G.width,G.height)}for(let G=0,Q=Qe.length;G<Q;G++)ye=Qe[G],Ve?I&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,ve,Be,ye):n.texImage2D(t.TEXTURE_2D,G,ze,ve,Be,ye);S.generateMipmaps=!1}else if(Ve){if(gt){const G=Ue(ie);n.texStorage2D(t.TEXTURE_2D,de,ze,G.width,G.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ve,Be,ie)}else n.texImage2D(t.TEXTURE_2D,0,ze,ve,Be,ie);m(S)&&u(Y),Ce.__version=j.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function X(C,S,O){if(S.image.length!==6)return;const Y=Ie(C,S),ee=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+O);const j=i.get(ee);if(ee.version!==j.__version||Y===!0){n.activeTexture(t.TEXTURE0+O);const Ce=ct.getPrimaries(ct.workingColorSpace),ce=S.colorSpace===ls?null:ct.getPrimaries(S.colorSpace),_e=S.colorSpace===ls||Ce===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const it=S.isCompressedTexture||S.image[0].isCompressedTexture,ie=S.image[0]&&S.image[0].isDataTexture,ve=[];for(let Q=0;Q<6;Q++)!it&&!ie?ve[Q]=y(S.image[Q],!0,r.maxCubemapSize):ve[Q]=ie?S.image[Q].image:S.image[Q],ve[Q]=ht(S,ve[Q]);const Be=ve[0],ze=s.convert(S.format,S.colorSpace),ye=s.convert(S.type),Qe=_(S.internalFormat,ze,ye,S.colorSpace),Ve=S.isVideoTexture!==!0,gt=j.__version===void 0||Y===!0,I=ee.dataReady;let de=M(S,Be);re(t.TEXTURE_CUBE_MAP,S);let G;if(it){Ve&&gt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,de,Qe,Be.width,Be.height);for(let Q=0;Q<6;Q++){G=ve[Q].mipmaps;for(let he=0;he<G.length;he++){const pe=G[he];S.format!==Gi?ze!==null?Ve?I&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he,0,0,pe.width,pe.height,ze,pe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he,Qe,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he,0,0,pe.width,pe.height,ze,ye,pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he,Qe,pe.width,pe.height,0,ze,ye,pe.data)}}}else{if(G=S.mipmaps,Ve&&gt){G.length>0&&de++;const Q=Ue(ve[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,de,Qe,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ie){Ve?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ve[Q].width,ve[Q].height,ze,ye,ve[Q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Qe,ve[Q].width,ve[Q].height,0,ze,ye,ve[Q].data);for(let he=0;he<G.length;he++){const et=G[he].image[Q].image;Ve?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he+1,0,0,et.width,et.height,ze,ye,et.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he+1,Qe,et.width,et.height,0,ze,ye,et.data)}}else{Ve?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ze,ye,ve[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Qe,ze,ye,ve[Q]);for(let he=0;he<G.length;he++){const pe=G[he];Ve?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he+1,0,0,ze,ye,pe.image[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he+1,Qe,ze,ye,pe.image[Q])}}}m(S)&&u(t.TEXTURE_CUBE_MAP),j.__version=ee.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function te(C,S,O,Y,ee,j){const Ce=s.convert(O.format,O.colorSpace),ce=s.convert(O.type),_e=_(O.internalFormat,Ce,ce,O.colorSpace);if(!i.get(S).__hasExternalTextures){const ie=Math.max(1,S.width>>j),ve=Math.max(1,S.height>>j);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,j,_e,ie,ve,S.depth,0,Ce,ce,null):n.texImage2D(ee,j,_e,ie,ve,0,Ce,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),Pe(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,ee,i.get(O).__webglTexture,0,Ne(S)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Y,ee,i.get(O).__webglTexture,j),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ue(C,S,O){if(t.bindRenderbuffer(t.RENDERBUFFER,C),S.depthBuffer){const Y=S.depthTexture,ee=Y&&Y.isDepthTexture?Y.type:null,j=v(S.stencilBuffer,ee),Ce=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=Ne(S);Pe(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce,j,S.width,S.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,j,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,j,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ce,t.RENDERBUFFER,C)}else{const Y=S.textures;for(let ee=0;ee<Y.length;ee++){const j=Y[ee],Ce=s.convert(j.format,j.colorSpace),ce=s.convert(j.type),_e=_(j.internalFormat,Ce,ce,j.colorSpace),it=Ne(S);O&&Pe(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,it,_e,S.width,S.height):Pe(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,it,_e,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,_e,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Z(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W(S.depthTexture,0);const Y=i.get(S.depthTexture).__webglTexture,ee=Ne(S);if(S.depthTexture.format===oa)Pe(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Y,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Y,0);else if(S.depthTexture.format===xa)Pe(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Y,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function se(C){const S=i.get(C),O=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const Y=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Y){const ee=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Y.removeEventListener("dispose",ee)};Y.addEventListener("dispose",ee),S.__depthDisposeCallback=ee}S.__boundDepthTexture=Y}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Z(S.__webglFramebuffer,C)}else if(O){S.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[Y]),S.__webglDepthbuffer[Y]===void 0)S.__webglDepthbuffer[Y]=t.createRenderbuffer(),ue(S.__webglDepthbuffer[Y],C,!1);else{const ee=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer[Y];t.bindRenderbuffer(t.RENDERBUFFER,j),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,j)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),ue(S.__webglDepthbuffer,C,!1);else{const Y=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ee=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ee),t.framebufferRenderbuffer(t.FRAMEBUFFER,Y,t.RENDERBUFFER,ee)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Se(C,S,O){const Y=i.get(C);S!==void 0&&te(Y.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&se(C)}function Oe(C){const S=C.texture,O=i.get(C),Y=i.get(S);C.addEventListener("dispose",A);const ee=C.textures,j=C.isWebGLCubeRenderTarget===!0,Ce=ee.length>1;if(Ce||(Y.__webglTexture===void 0&&(Y.__webglTexture=t.createTexture()),Y.__version=S.version,o.memory.textures++),j){O.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[ce]=[];for(let _e=0;_e<S.mipmaps.length;_e++)O.__webglFramebuffer[ce][_e]=t.createFramebuffer()}else O.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let ce=0;ce<S.mipmaps.length;ce++)O.__webglFramebuffer[ce]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(Ce)for(let ce=0,_e=ee.length;ce<_e;ce++){const it=i.get(ee[ce]);it.__webglTexture===void 0&&(it.__webglTexture=t.createTexture(),o.memory.textures++)}if(C.samples>0&&Pe(C)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ce=0;ce<ee.length;ce++){const _e=ee[ce];O.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[ce]);const it=s.convert(_e.format,_e.colorSpace),ie=s.convert(_e.type),ve=_(_e.internalFormat,it,ie,_e.colorSpace,C.isXRRenderTarget===!0),Be=Ne(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,Be,ve,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,O.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),ue(O.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(j){n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),re(t.TEXTURE_CUBE_MAP,S);for(let ce=0;ce<6;ce++)if(S.mipmaps&&S.mipmaps.length>0)for(let _e=0;_e<S.mipmaps.length;_e++)te(O.__webglFramebuffer[ce][_e],C,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,_e);else te(O.__webglFramebuffer[ce],C,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(S)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ce){for(let ce=0,_e=ee.length;ce<_e;ce++){const it=ee[ce],ie=i.get(it);n.bindTexture(t.TEXTURE_2D,ie.__webglTexture),re(t.TEXTURE_2D,it),te(O.__webglFramebuffer,C,it,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,0),m(it)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ce=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,Y.__webglTexture),re(ce,S),S.mipmaps&&S.mipmaps.length>0)for(let _e=0;_e<S.mipmaps.length;_e++)te(O.__webglFramebuffer[_e],C,S,t.COLOR_ATTACHMENT0,ce,_e);else te(O.__webglFramebuffer,C,S,t.COLOR_ATTACHMENT0,ce,0);m(S)&&u(ce),n.unbindTexture()}C.depthBuffer&&se(C)}function Ye(C){const S=C.textures;for(let O=0,Y=S.length;O<Y;O++){const ee=S[O];if(m(ee)){const j=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ce=i.get(ee).__webglTexture;n.bindTexture(j,Ce),u(j),n.unbindTexture()}}}const He=[],P=[];function vn(C){if(C.samples>0){if(Pe(C)===!1){const S=C.textures,O=C.width,Y=C.height;let ee=t.COLOR_BUFFER_BIT;const j=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ce=i.get(C),ce=S.length>1;if(ce)for(let _e=0;_e<S.length;_e++)n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let _e=0;_e<S.length;_e++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),ce){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[_e]);const it=i.get(S[_e]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,it,0)}t.blitFramebuffer(0,0,O,Y,0,0,O,Y,ee,t.NEAREST),l===!0&&(He.length=0,P.length=0,He.push(t.COLOR_ATTACHMENT0+_e),C.depthBuffer&&C.resolveDepthBuffer===!1&&(He.push(j),P.push(j),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,P)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,He))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let _e=0;_e<S.length;_e++){n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[_e]);const it=i.get(S[_e]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,it,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function Ne(C){return Math.min(r.maxSamples,C.samples)}function Pe(C){const S=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function De(C){const S=o.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function ht(C,S){const O=C.colorSpace,Y=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==Ns&&O!==ls&&(ct.getTransfer(O)===Et?(Y!==Gi||ee!==Hr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}function Ue(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=E,this.setTexture2D=W,this.setTexture2DArray=$,this.setTexture3D=V,this.setTextureCube=q,this.rebindTextures=Se,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=vn,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=te,this.useMultisampledRTT=Pe}function gb(t,e){function n(i,r=ls){let s;const o=ct.getTransfer(r);if(i===Hr)return t.UNSIGNED_BYTE;if(i===w0)return t.UNSIGNED_SHORT_4_4_4_4;if(i===T0)return t.UNSIGNED_SHORT_5_5_5_1;if(i===mx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===dx)return t.BYTE;if(i===px)return t.SHORT;if(i===Wl)return t.UNSIGNED_SHORT;if(i===E0)return t.INT;if(i===go)return t.UNSIGNED_INT;if(i===Ir)return t.FLOAT;if(i===Ql)return t.HALF_FLOAT;if(i===gx)return t.ALPHA;if(i===_x)return t.RGB;if(i===Gi)return t.RGBA;if(i===vx)return t.LUMINANCE;if(i===yx)return t.LUMINANCE_ALPHA;if(i===oa)return t.DEPTH_COMPONENT;if(i===xa)return t.DEPTH_STENCIL;if(i===xx)return t.RED;if(i===A0)return t.RED_INTEGER;if(i===Sx)return t.RG;if(i===C0)return t.RG_INTEGER;if(i===R0)return t.RGBA_INTEGER;if(i===gu||i===_u||i===vu||i===yu)if(o===Et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===gu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_u)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===vu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===yu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===gu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_u)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===vu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===yu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Dp||i===Np||i===Up||i===Fp)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Dp)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Np)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Up)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fp)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Op||i===kp||i===Bp)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Op||i===kp)return o===Et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Bp)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===zp||i===Vp||i===Hp||i===Gp||i===Wp||i===Xp||i===$p||i===jp||i===Yp||i===qp||i===Kp||i===Zp||i===Jp||i===Qp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===zp)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Vp)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Hp)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Gp)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Wp)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xp)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===$p)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===jp)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yp)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===qp)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Kp)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Zp)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Jp)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Qp)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===xu||i===em||i===tm)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===xu)return o===Et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===em)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===tm)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Mx||i===nm||i===im||i===rm)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===xu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===nm)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===im)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rm)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ya?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class _b extends xi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Dt extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vb={type:"move"};class dd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),u=this._getHandJoint(c,y);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),g=.02,p=.005;c.inputState.pinching&&f>g+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=g-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Dt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const yb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Sb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new $n,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Gr({vertexShader:yb,fragmentShader:xb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new xe(new Ma(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Mb extends Ua{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,g=null,p=null;const y=new Sb,m=n.getContextAttributes();let u=null,_=null;const v=[],M=[],R=new ot;let A=null;const T=new xi;T.layers.enable(1),T.viewport=new zt;const b=new xi;b.layers.enable(2),b.viewport=new zt;const H=[T,b],x=new _b;x.layers.enable(1),x.layers.enable(2);let E=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let te=v[X];return te===void 0&&(te=new dd,v[X]=te),te.getTargetRaySpace()},this.getControllerGrip=function(X){let te=v[X];return te===void 0&&(te=new dd,v[X]=te),te.getGripSpace()},this.getHand=function(X){let te=v[X];return te===void 0&&(te=new dd,v[X]=te),te.getHandSpace()};function U(X){const te=M.indexOf(X.inputSource);if(te===-1)return;const ue=v[te];ue!==void 0&&(ue.update(X.inputSource,X.frame,c||o),ue.dispatchEvent({type:X.type,data:X.inputSource}))}function W(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",$);for(let X=0;X<v.length;X++){const te=M[X];te!==null&&(M[X]=null,v[X].disconnect(te))}E=null,F=null,y.reset(),e.setRenderTarget(u),g=null,f=null,d=null,r=null,_=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return d},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",W),r.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,te),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),_=new _o(g.framebufferWidth,g.framebufferHeight,{format:Gi,type:Hr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,ue=null,Z=null;m.depth&&(Z=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,te=m.stencil?xa:oa,ue=m.stencil?ya:go);const se={colorFormat:n.RGBA8,depthFormat:Z,scaleFactor:s};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(se),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new _o(f.textureWidth,f.textureHeight,{format:Gi,type:Hr,depthTexture:new Ox(f.textureWidth,f.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),je.setContext(r),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function $(X){for(let te=0;te<X.removed.length;te++){const ue=X.removed[te],Z=M.indexOf(ue);Z>=0&&(M[Z]=null,v[Z].disconnect(ue))}for(let te=0;te<X.added.length;te++){const ue=X.added[te];let Z=M.indexOf(ue);if(Z===-1){for(let Se=0;Se<v.length;Se++)if(Se>=M.length){M.push(ue),Z=Se;break}else if(M[Se]===null){M[Se]=ue,Z=Se;break}if(Z===-1)break}const se=v[Z];se&&se.connect(ue)}}const V=new k,q=new k;function L(X,te,ue){V.setFromMatrixPosition(te.matrixWorld),q.setFromMatrixPosition(ue.matrixWorld);const Z=V.distanceTo(q),se=te.projectionMatrix.elements,Se=ue.projectionMatrix.elements,Oe=se[14]/(se[10]-1),Ye=se[14]/(se[10]+1),He=(se[9]+1)/se[5],P=(se[9]-1)/se[5],vn=(se[8]-1)/se[0],Ne=(Se[8]+1)/Se[0],Pe=Oe*vn,De=Oe*Ne,ht=Z/(-vn+Ne),Ue=ht*-vn;if(te.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ue),X.translateZ(ht),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),se[10]===-1)X.projectionMatrix.copy(te.projectionMatrix),X.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const C=Oe+ht,S=Ye+ht,O=Pe-Ue,Y=De+(Z-Ue),ee=He*Ye/S*C,j=P*Ye/S*C;X.projectionMatrix.makePerspective(O,Y,ee,j,C,S),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function K(X,te){te===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(te.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let te=X.near,ue=X.far;y.texture!==null&&(y.depthNear>0&&(te=y.depthNear),y.depthFar>0&&(ue=y.depthFar)),x.near=b.near=T.near=te,x.far=b.far=T.far=ue,(E!==x.near||F!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,F=x.far);const Z=X.parent,se=x.cameras;K(x,Z);for(let Se=0;Se<se.length;Se++)K(se[Se],Z);se.length===2?L(x,T,b):x.projectionMatrix.copy(T.projectionMatrix),J(X,x,Z)};function J(X,te,ue){ue===null?X.matrix.copy(te.matrixWorld):(X.matrix.copy(ue.matrixWorld),X.matrix.invert(),X.matrix.multiply(te.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(te.projectionMatrix),X.projectionMatrixInverse.copy(te.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=sm*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&g===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=X)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let re=null;function Ie(X,te){if(h=te.getViewerPose(c||o),p=te,h!==null){const ue=h.views;g!==null&&(e.setRenderTargetFramebuffer(_,g.framebuffer),e.setRenderTarget(_));let Z=!1;ue.length!==x.cameras.length&&(x.cameras.length=0,Z=!0);for(let Se=0;Se<ue.length;Se++){const Oe=ue[Se];let Ye=null;if(g!==null)Ye=g.getViewport(Oe);else{const P=d.getViewSubImage(f,Oe);Ye=P.viewport,Se===0&&(e.setRenderTargetTextures(_,P.colorTexture,f.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(_))}let He=H[Se];He===void 0&&(He=new xi,He.layers.enable(Se),He.viewport=new zt,H[Se]=He),He.matrix.fromArray(Oe.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(Oe.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),Se===0&&(x.matrix.copy(He.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),Z===!0&&x.cameras.push(He)}const se=r.enabledFeatures;if(se&&se.includes("depth-sensing")){const Se=d.getDepthInformation(ue[0]);Se&&Se.isValid&&Se.texture&&y.init(e,Se,r.renderState)}}for(let ue=0;ue<v.length;ue++){const Z=M[ue],se=v[ue];Z!==null&&se!==void 0&&se.update(Z,te,c||o)}re&&re(X,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),p=null}const je=new Ux;je.setAnimationLoop(Ie),this.setAnimationLoop=function(X){re=X},this.dispose=function(){}}}const Gs=new hr,Eb=new Ht;function wb(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,Ix(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,_,v,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),d(m,u)):u.isMeshPhongMaterial?(s(m,u),h(m,u)):u.isMeshStandardMaterial?(s(m,u),f(m,u),u.isMeshPhysicalMaterial&&g(m,u,M)):u.isMeshMatcapMaterial?(s(m,u),p(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),y(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,_,v):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Ln&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Ln&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const _=e.get(u),v=_.envMap,M=_.envMapRotation;v&&(m.envMap.value=v,Gs.copy(M),Gs.x*=-1,Gs.y*=-1,Gs.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Gs.y*=-1,Gs.z*=-1),m.envMapRotation.value.setFromMatrix4(Eb.makeRotationFromEuler(Gs)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,_,v){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*_,m.scale.value=v*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function g(m,u,_){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ln&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,u){u.matcap&&(m.matcap.value=u.matcap)}function y(m,u){const _=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Tb(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){const M=v.program;i.uniformBlockBinding(_,M)}function c(_,v){let M=r[_.id];M===void 0&&(p(_),M=h(_),r[_.id]=M,_.addEventListener("dispose",m));const R=v.program;i.updateUBOMapping(_,R);const A=e.render.frame;s[_.id]!==A&&(f(_),s[_.id]=A)}function h(_){const v=d();_.__bindingPointIndex=v;const M=t.createBuffer(),R=_.__size,A=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,R,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,M),M}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const v=r[_.id],M=_.uniforms,R=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let A=0,T=M.length;A<T;A++){const b=Array.isArray(M[A])?M[A]:[M[A]];for(let H=0,x=b.length;H<x;H++){const E=b[H];if(g(E,A,H,R)===!0){const F=E.__offset,U=Array.isArray(E.value)?E.value:[E.value];let W=0;for(let $=0;$<U.length;$++){const V=U[$],q=y(V);typeof V=="number"||typeof V=="boolean"?(E.__data[0]=V,t.bufferSubData(t.UNIFORM_BUFFER,F+W,E.__data)):V.isMatrix3?(E.__data[0]=V.elements[0],E.__data[1]=V.elements[1],E.__data[2]=V.elements[2],E.__data[3]=0,E.__data[4]=V.elements[3],E.__data[5]=V.elements[4],E.__data[6]=V.elements[5],E.__data[7]=0,E.__data[8]=V.elements[6],E.__data[9]=V.elements[7],E.__data[10]=V.elements[8],E.__data[11]=0):(V.toArray(E.__data,W),W+=q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,F,E.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(_,v,M,R){const A=_.value,T=v+"_"+M;if(R[T]===void 0)return typeof A=="number"||typeof A=="boolean"?R[T]=A:R[T]=A.clone(),!0;{const b=R[T];if(typeof A=="number"||typeof A=="boolean"){if(b!==A)return R[T]=A,!0}else if(b.equals(A)===!1)return b.copy(A),!0}return!1}function p(_){const v=_.uniforms;let M=0;const R=16;for(let T=0,b=v.length;T<b;T++){const H=Array.isArray(v[T])?v[T]:[v[T]];for(let x=0,E=H.length;x<E;x++){const F=H[x],U=Array.isArray(F.value)?F.value:[F.value];for(let W=0,$=U.length;W<$;W++){const V=U[W],q=y(V),L=M%R,K=L%q.boundary,J=L+K;M+=K,J!==0&&R-J<q.storage&&(M+=R-J),F.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=q.storage}}}const A=M%R;return A>0&&(M+=R-A),_.__size=M,_.__cache={},this}function y(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){const v=_.target;v.removeEventListener("dispose",m);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class Ab{constructor(e={}){const{canvas:n=f4(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),p=new Int32Array(4);let y=null,m=null;const u=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ir,this.toneMapping=Ss,this.toneMappingExposure=1;const v=this;let M=!1,R=0,A=0,T=null,b=-1,H=null;const x=new zt,E=new zt;let F=null;const U=new qe(0);let W=0,$=n.width,V=n.height,q=1,L=null,K=null;const J=new zt(0,0,$,V),re=new zt(0,0,$,V);let Ie=!1;const je=new I0;let X=!1,te=!1;const ue=new Ht,Z=new Ht,se=new k,Se=new zt,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function He(){return T===null?q:1}let P=i;function vn(w,D){return n.getContext(w,D)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${M0}`),n.addEventListener("webglcontextlost",Q,!1),n.addEventListener("webglcontextrestored",he,!1),n.addEventListener("webglcontextcreationerror",pe,!1),P===null){const D="webgl2";if(P=vn(D,w),P===null)throw vn(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ne,Pe,De,ht,Ue,C,S,O,Y,ee,j,Ce,ce,_e,it,ie,ve,Be,ze,ye,Qe,Ve,gt,I;function de(){Ne=new LC(P),Ne.init(),Ve=new gb(P,Ne),Pe=new TC(P,Ne,e,Ve),De=new db(P),Pe.reverseDepthBuffer&&De.buffers.depth.setReversed(!0),ht=new NC(P),Ue=new JR,C=new mb(P,Ne,De,Ue,Pe,Ve,ht),S=new CC(v),O=new PC(v),Y=new V4(P),gt=new EC(P,Y),ee=new IC(P,Y,ht,gt),j=new FC(P,ee,Y,ht),ze=new UC(P,Pe,C),ie=new AC(Ue),Ce=new ZR(v,S,O,Ne,Pe,gt,ie),ce=new wb(v,Ue),_e=new eb,it=new ob(Ne),Be=new MC(v,S,O,De,j,f,l),ve=new hb(v,j,Pe),I=new Tb(P,ht,Pe,De),ye=new wC(P,Ne,ht),Qe=new DC(P,Ne,ht),ht.programs=Ce.programs,v.capabilities=Pe,v.extensions=Ne,v.properties=Ue,v.renderLists=_e,v.shadowMap=ve,v.state=De,v.info=ht}de();const G=new Mb(v,P);this.xr=G,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const w=Ne.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ne.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize($,V,!1))},this.getSize=function(w){return w.set($,V)},this.setSize=function(w,D,B=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=w,V=D,n.width=Math.floor(w*q),n.height=Math.floor(D*q),B===!0&&(n.style.width=w+"px",n.style.height=D+"px"),this.setViewport(0,0,w,D)},this.getDrawingBufferSize=function(w){return w.set($*q,V*q).floor()},this.setDrawingBufferSize=function(w,D,B){$=w,V=D,q=B,n.width=Math.floor(w*B),n.height=Math.floor(D*B),this.setViewport(0,0,w,D)},this.getCurrentViewport=function(w){return w.copy(x)},this.getViewport=function(w){return w.copy(J)},this.setViewport=function(w,D,B,z){w.isVector4?J.set(w.x,w.y,w.z,w.w):J.set(w,D,B,z),De.viewport(x.copy(J).multiplyScalar(q).round())},this.getScissor=function(w){return w.copy(re)},this.setScissor=function(w,D,B,z){w.isVector4?re.set(w.x,w.y,w.z,w.w):re.set(w,D,B,z),De.scissor(E.copy(re).multiplyScalar(q).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(w){De.setScissorTest(Ie=w)},this.setOpaqueSort=function(w){L=w},this.setTransparentSort=function(w){K=w},this.getClearColor=function(w){return w.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(w=!0,D=!0,B=!0){let z=0;if(w){let N=!1;if(T!==null){const oe=T.texture.format;N=oe===R0||oe===C0||oe===A0}if(N){const oe=T.texture.type,fe=oe===Hr||oe===go||oe===Wl||oe===ya||oe===w0||oe===T0,Me=Be.getClearColor(),we=Be.getClearAlpha(),Fe=Me.r,ke=Me.g,Re=Me.b;fe?(g[0]=Fe,g[1]=ke,g[2]=Re,g[3]=we,P.clearBufferuiv(P.COLOR,0,g)):(p[0]=Fe,p[1]=ke,p[2]=Re,p[3]=we,P.clearBufferiv(P.COLOR,0,p))}else z|=P.COLOR_BUFFER_BIT}D&&(z|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),B&&(z|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Q,!1),n.removeEventListener("webglcontextrestored",he,!1),n.removeEventListener("webglcontextcreationerror",pe,!1),_e.dispose(),it.dispose(),Ue.dispose(),S.dispose(),O.dispose(),j.dispose(),gt.dispose(),I.dispose(),Ce.dispose(),G.dispose(),G.removeEventListener("sessionstart",Og),G.removeEventListener("sessionend",kg),Os.stop()};function Q(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const w=ht.autoReset,D=ve.enabled,B=ve.autoUpdate,z=ve.needsUpdate,N=ve.type;de(),ht.autoReset=w,ve.enabled=D,ve.autoUpdate=B,ve.needsUpdate=z,ve.type=N}function pe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function et(w){const D=w.target;D.removeEventListener("dispose",et),Kt(D)}function Kt(w){Un(w),Ue.remove(w)}function Un(w){const D=Ue.get(w).programs;D!==void 0&&(D.forEach(function(B){Ce.releaseProgram(B)}),w.isShaderMaterial&&Ce.releaseShaderCache(w))}this.renderBufferDirect=function(w,D,B,z,N,oe){D===null&&(D=Oe);const fe=N.isMesh&&N.matrixWorld.determinant()<0,Me=XS(w,D,B,z,N);De.setMaterial(z,fe);let we=B.index,Fe=1;if(z.wireframe===!0){if(we=ee.getWireframeAttribute(B),we===void 0)return;Fe=2}const ke=B.drawRange,Re=B.attributes.position;let ft=ke.start*Fe,St=(ke.start+ke.count)*Fe;oe!==null&&(ft=Math.max(ft,oe.start*Fe),St=Math.min(St,(oe.start+oe.count)*Fe)),we!==null?(ft=Math.max(ft,0),St=Math.min(St,we.count)):Re!=null&&(ft=Math.max(ft,0),St=Math.min(St,Re.count));const Ot=St-ft;if(Ot<0||Ot===1/0)return;gt.setup(N,z,Me,B,we);let Kn,at=ye;if(we!==null&&(Kn=Y.get(we),at=Qe,at.setIndex(Kn)),N.isMesh)z.wireframe===!0?(De.setLineWidth(z.wireframeLinewidth*He()),at.setMode(P.LINES)):at.setMode(P.TRIANGLES);else if(N.isLine){let be=z.linewidth;be===void 0&&(be=1),De.setLineWidth(be*He()),N.isLineSegments?at.setMode(P.LINES):N.isLineLoop?at.setMode(P.LINE_LOOP):at.setMode(P.LINE_STRIP)}else N.isPoints?at.setMode(P.POINTS):N.isSprite&&at.setMode(P.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)at.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ne.get("WEBGL_multi_draw"))at.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const be=N._multiDrawStarts,fn=N._multiDrawCounts,lt=N._multiDrawCount,Ii=we?Y.get(we).bytesPerElement:1,Mo=Ue.get(z).currentProgram.getUniforms();for(let Zn=0;Zn<lt;Zn++)Mo.setValue(P,"_gl_DrawID",Zn),at.render(be[Zn]/Ii,fn[Zn])}else if(N.isInstancedMesh)at.renderInstances(ft,Ot,N.count);else if(B.isInstancedBufferGeometry){const be=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,fn=Math.min(B.instanceCount,be);at.renderInstances(ft,Ot,fn)}else at.render(ft,Ot)};function st(w,D,B){w.transparent===!0&&w.side===ar&&w.forceSinglePass===!1?(w.side=Ln,w.needsUpdate=!0,pc(w,D,B),w.side=Ts,w.needsUpdate=!0,pc(w,D,B),w.side=ar):pc(w,D,B)}this.compile=function(w,D,B=null){B===null&&(B=w),m=it.get(B),m.init(D),_.push(m),B.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),w!==B&&w.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();const z=new Set;return w.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const oe=N.material;if(oe)if(Array.isArray(oe))for(let fe=0;fe<oe.length;fe++){const Me=oe[fe];st(Me,B,N),z.add(Me)}else st(oe,B,N),z.add(oe)}),_.pop(),m=null,z},this.compileAsync=function(w,D,B=null){const z=this.compile(w,D,B);return new Promise(N=>{function oe(){if(z.forEach(function(fe){Ue.get(fe).currentProgram.isReady()&&z.delete(fe)}),z.size===0){N(w);return}setTimeout(oe,10)}Ne.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Fn=null;function yr(w){Fn&&Fn(w)}function Og(){Os.stop()}function kg(){Os.start()}const Os=new Ux;Os.setAnimationLoop(yr),typeof self<"u"&&Os.setContext(self),this.setAnimationLoop=function(w){Fn=w,G.setAnimationLoop(w),w===null?Os.stop():Os.start()},G.addEventListener("sessionstart",Og),G.addEventListener("sessionend",kg),this.render=function(w,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(D),D=G.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,D,T),m=it.get(w,_.length),m.init(D),_.push(m),Z.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),je.setFromProjectionMatrix(Z),te=this.localClippingEnabled,X=ie.init(this.clippingPlanes,te),y=_e.get(w,u.length),y.init(),u.push(y),G.enabled===!0&&G.isPresenting===!0){const oe=v.xr.getDepthSensingMesh();oe!==null&&af(oe,D,-1/0,v.sortObjects)}af(w,D,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(L,K),Ye=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,Ye&&Be.addToRenderList(y,w),this.info.render.frame++,X===!0&&ie.beginShadows();const B=m.state.shadowsArray;ve.render(B,w,D),X===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=y.opaque,N=y.transmissive;if(m.setupLights(),D.isArrayCamera){const oe=D.cameras;if(N.length>0)for(let fe=0,Me=oe.length;fe<Me;fe++){const we=oe[fe];zg(z,N,w,we)}Ye&&Be.render(w);for(let fe=0,Me=oe.length;fe<Me;fe++){const we=oe[fe];Bg(y,w,we,we.viewport)}}else N.length>0&&zg(z,N,w,D),Ye&&Be.render(w),Bg(y,w,D);T!==null&&(C.updateMultisampleRenderTarget(T),C.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(v,w,D),gt.resetDefaultState(),b=-1,H=null,_.pop(),_.length>0?(m=_[_.length-1],X===!0&&ie.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function af(w,D,B,z){if(w.visible===!1)return;if(w.layers.test(D.layers)){if(w.isGroup)B=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(D);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||je.intersectsSprite(w)){z&&Se.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Z);const fe=j.update(w),Me=w.material;Me.visible&&y.push(w,fe,Me,B,Se.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||je.intersectsObject(w))){const fe=j.update(w),Me=w.material;if(z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Se.copy(w.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Se.copy(fe.boundingSphere.center)),Se.applyMatrix4(w.matrixWorld).applyMatrix4(Z)),Array.isArray(Me)){const we=fe.groups;for(let Fe=0,ke=we.length;Fe<ke;Fe++){const Re=we[Fe],ft=Me[Re.materialIndex];ft&&ft.visible&&y.push(w,fe,ft,B,Se.z,Re)}}else Me.visible&&y.push(w,fe,Me,B,Se.z,null)}}const oe=w.children;for(let fe=0,Me=oe.length;fe<Me;fe++)af(oe[fe],D,B,z)}function Bg(w,D,B,z){const N=w.opaque,oe=w.transmissive,fe=w.transparent;m.setupLightsView(B),X===!0&&ie.setGlobalState(v.clippingPlanes,B),z&&De.viewport(x.copy(z)),N.length>0&&dc(N,D,B),oe.length>0&&dc(oe,D,B),fe.length>0&&dc(fe,D,B),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function zg(w,D,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[z.id]===void 0&&(m.state.transmissionRenderTarget[z.id]=new _o(1,1,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float")?Ql:Hr,minFilter:io,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace}));const oe=m.state.transmissionRenderTarget[z.id],fe=z.viewport||x;oe.setSize(fe.z,fe.w);const Me=v.getRenderTarget();v.setRenderTarget(oe),v.getClearColor(U),W=v.getClearAlpha(),W<1&&v.setClearColor(16777215,.5),v.clear(),Ye&&Be.render(B);const we=v.toneMapping;v.toneMapping=Ss;const Fe=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),m.setupLightsView(z),X===!0&&ie.setGlobalState(v.clippingPlanes,z),dc(w,B,z),C.updateMultisampleRenderTarget(oe),C.updateRenderTargetMipmap(oe),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Re=0,ft=D.length;Re<ft;Re++){const St=D[Re],Ot=St.object,Kn=St.geometry,at=St.material,be=St.group;if(at.side===ar&&Ot.layers.test(z.layers)){const fn=at.side;at.side=Ln,at.needsUpdate=!0,Vg(Ot,B,z,Kn,at,be),at.side=fn,at.needsUpdate=!0,ke=!0}}ke===!0&&(C.updateMultisampleRenderTarget(oe),C.updateRenderTargetMipmap(oe))}v.setRenderTarget(Me),v.setClearColor(U,W),Fe!==void 0&&(z.viewport=Fe),v.toneMapping=we}function dc(w,D,B){const z=D.isScene===!0?D.overrideMaterial:null;for(let N=0,oe=w.length;N<oe;N++){const fe=w[N],Me=fe.object,we=fe.geometry,Fe=z===null?fe.material:z,ke=fe.group;Me.layers.test(B.layers)&&Vg(Me,D,B,we,Fe,ke)}}function Vg(w,D,B,z,N,oe){w.onBeforeRender(v,D,B,z,N,oe),w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),N.onBeforeRender(v,D,B,z,w,oe),N.transparent===!0&&N.side===ar&&N.forceSinglePass===!1?(N.side=Ln,N.needsUpdate=!0,v.renderBufferDirect(B,D,z,N,w,oe),N.side=Ts,N.needsUpdate=!0,v.renderBufferDirect(B,D,z,N,w,oe),N.side=ar):v.renderBufferDirect(B,D,z,N,w,oe),w.onAfterRender(v,D,B,z,N,oe)}function pc(w,D,B){D.isScene!==!0&&(D=Oe);const z=Ue.get(w),N=m.state.lights,oe=m.state.shadowsArray,fe=N.state.version,Me=Ce.getParameters(w,N.state,oe,D,B),we=Ce.getProgramCacheKey(Me);let Fe=z.programs;z.environment=w.isMeshStandardMaterial?D.environment:null,z.fog=D.fog,z.envMap=(w.isMeshStandardMaterial?O:S).get(w.envMap||z.environment),z.envMapRotation=z.environment!==null&&w.envMap===null?D.environmentRotation:w.envMapRotation,Fe===void 0&&(w.addEventListener("dispose",et),Fe=new Map,z.programs=Fe);let ke=Fe.get(we);if(ke!==void 0){if(z.currentProgram===ke&&z.lightsStateVersion===fe)return Gg(w,Me),ke}else Me.uniforms=Ce.getUniforms(w),w.onBeforeCompile(Me,v),ke=Ce.acquireProgram(Me,we),Fe.set(we,ke),z.uniforms=Me.uniforms;const Re=z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Re.clippingPlanes=ie.uniform),Gg(w,Me),z.needsLights=jS(w),z.lightsStateVersion=fe,z.needsLights&&(Re.ambientLightColor.value=N.state.ambient,Re.lightProbe.value=N.state.probe,Re.directionalLights.value=N.state.directional,Re.directionalLightShadows.value=N.state.directionalShadow,Re.spotLights.value=N.state.spot,Re.spotLightShadows.value=N.state.spotShadow,Re.rectAreaLights.value=N.state.rectArea,Re.ltc_1.value=N.state.rectAreaLTC1,Re.ltc_2.value=N.state.rectAreaLTC2,Re.pointLights.value=N.state.point,Re.pointLightShadows.value=N.state.pointShadow,Re.hemisphereLights.value=N.state.hemi,Re.directionalShadowMap.value=N.state.directionalShadowMap,Re.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Re.spotShadowMap.value=N.state.spotShadowMap,Re.spotLightMatrix.value=N.state.spotLightMatrix,Re.spotLightMap.value=N.state.spotLightMap,Re.pointShadowMap.value=N.state.pointShadowMap,Re.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=ke,z.uniformsList=null,ke}function Hg(w){if(w.uniformsList===null){const D=w.currentProgram.getUniforms();w.uniformsList=Mu.seqWithValue(D.seq,w.uniforms)}return w.uniformsList}function Gg(w,D){const B=Ue.get(w);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.batchingColor=D.batchingColor,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.instancingMorph=D.instancingMorph,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function XS(w,D,B,z,N){D.isScene!==!0&&(D=Oe),C.resetTextureUnits();const oe=D.fog,fe=z.isMeshStandardMaterial?D.environment:null,Me=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ns,we=(z.isMeshStandardMaterial?O:S).get(z.envMap||fe),Fe=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,ke=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Re=!!B.morphAttributes.position,ft=!!B.morphAttributes.normal,St=!!B.morphAttributes.color;let Ot=Ss;z.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Ot=v.toneMapping);const Kn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,at=Kn!==void 0?Kn.length:0,be=Ue.get(z),fn=m.state.lights;if(X===!0&&(te===!0||w!==H)){const di=w===H&&z.id===b;ie.setState(z,w,di)}let lt=!1;z.version===be.__version?(be.needsLights&&be.lightsStateVersion!==fn.state.version||be.outputColorSpace!==Me||N.isBatchedMesh&&be.batching===!1||!N.isBatchedMesh&&be.batching===!0||N.isBatchedMesh&&be.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&be.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&be.instancing===!1||!N.isInstancedMesh&&be.instancing===!0||N.isSkinnedMesh&&be.skinning===!1||!N.isSkinnedMesh&&be.skinning===!0||N.isInstancedMesh&&be.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&be.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&be.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&be.instancingMorph===!1&&N.morphTexture!==null||be.envMap!==we||z.fog===!0&&be.fog!==oe||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==ie.numPlanes||be.numIntersection!==ie.numIntersection)||be.vertexAlphas!==Fe||be.vertexTangents!==ke||be.morphTargets!==Re||be.morphNormals!==ft||be.morphColors!==St||be.toneMapping!==Ot||be.morphTargetsCount!==at)&&(lt=!0):(lt=!0,be.__version=z.version);let Ii=be.currentProgram;lt===!0&&(Ii=pc(z,D,N));let Mo=!1,Zn=!1,lf=!1;const Xt=Ii.getUniforms(),$r=be.uniforms;if(De.useProgram(Ii.program)&&(Mo=!0,Zn=!0,lf=!0),z.id!==b&&(b=z.id,Zn=!0),Mo||H!==w){Pe.reverseDepthBuffer?(ue.copy(w.projectionMatrix),p4(ue),m4(ue),Xt.setValue(P,"projectionMatrix",ue)):Xt.setValue(P,"projectionMatrix",w.projectionMatrix),Xt.setValue(P,"viewMatrix",w.matrixWorldInverse);const di=Xt.map.cameraPosition;di!==void 0&&di.setValue(P,se.setFromMatrixPosition(w.matrixWorld)),Pe.logarithmicDepthBuffer&&Xt.setValue(P,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Xt.setValue(P,"isOrthographic",w.isOrthographicCamera===!0),H!==w&&(H=w,Zn=!0,lf=!0)}if(N.isSkinnedMesh){Xt.setOptional(P,N,"bindMatrix"),Xt.setOptional(P,N,"bindMatrixInverse");const di=N.skeleton;di&&(di.boneTexture===null&&di.computeBoneTexture(),Xt.setValue(P,"boneTexture",di.boneTexture,C))}N.isBatchedMesh&&(Xt.setOptional(P,N,"batchingTexture"),Xt.setValue(P,"batchingTexture",N._matricesTexture,C),Xt.setOptional(P,N,"batchingIdTexture"),Xt.setValue(P,"batchingIdTexture",N._indirectTexture,C),Xt.setOptional(P,N,"batchingColorTexture"),N._colorsTexture!==null&&Xt.setValue(P,"batchingColorTexture",N._colorsTexture,C));const cf=B.morphAttributes;if((cf.position!==void 0||cf.normal!==void 0||cf.color!==void 0)&&ze.update(N,B,Ii),(Zn||be.receiveShadow!==N.receiveShadow)&&(be.receiveShadow=N.receiveShadow,Xt.setValue(P,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&($r.envMap.value=we,$r.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&D.environment!==null&&($r.envMapIntensity.value=D.environmentIntensity),Zn&&(Xt.setValue(P,"toneMappingExposure",v.toneMappingExposure),be.needsLights&&$S($r,lf),oe&&z.fog===!0&&ce.refreshFogUniforms($r,oe),ce.refreshMaterialUniforms($r,z,q,V,m.state.transmissionRenderTarget[w.id]),Mu.upload(P,Hg(be),$r,C)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Mu.upload(P,Hg(be),$r,C),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Xt.setValue(P,"center",N.center),Xt.setValue(P,"modelViewMatrix",N.modelViewMatrix),Xt.setValue(P,"normalMatrix",N.normalMatrix),Xt.setValue(P,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const di=z.uniformsGroups;for(let uf=0,YS=di.length;uf<YS;uf++){const Wg=di[uf];I.update(Wg,Ii),I.bind(Wg,Ii)}}return Ii}function $S(w,D){w.ambientLightColor.needsUpdate=D,w.lightProbe.needsUpdate=D,w.directionalLights.needsUpdate=D,w.directionalLightShadows.needsUpdate=D,w.pointLights.needsUpdate=D,w.pointLightShadows.needsUpdate=D,w.spotLights.needsUpdate=D,w.spotLightShadows.needsUpdate=D,w.rectAreaLights.needsUpdate=D,w.hemisphereLights.needsUpdate=D}function jS(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,D,B){Ue.get(w.texture).__webglTexture=D,Ue.get(w.depthTexture).__webglTexture=B;const z=Ue.get(w);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||Ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,D){const B=Ue.get(w);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(w,D=0,B=0){T=w,R=D,A=B;let z=!0,N=null,oe=!1,fe=!1;if(w){const we=Ue.get(w);if(we.__useDefaultFramebuffer!==void 0)De.bindFramebuffer(P.FRAMEBUFFER,null),z=!1;else if(we.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(we.__hasExternalTextures)C.rebindTextures(w,Ue.get(w.texture).__webglTexture,Ue.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Re=w.depthTexture;if(we.__boundDepthTexture!==Re){if(Re!==null&&Ue.has(Re)&&(w.width!==Re.image.width||w.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}const Fe=w.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(fe=!0);const ke=Ue.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ke[D])?N=ke[D][B]:N=ke[D],oe=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?N=Ue.get(w).__webglMultisampledFramebuffer:Array.isArray(ke)?N=ke[B]:N=ke,x.copy(w.viewport),E.copy(w.scissor),F=w.scissorTest}else x.copy(J).multiplyScalar(q).floor(),E.copy(re).multiplyScalar(q).floor(),F=Ie;if(De.bindFramebuffer(P.FRAMEBUFFER,N)&&z&&De.drawBuffers(w,N),De.viewport(x),De.scissor(E),De.setScissorTest(F),oe){const we=Ue.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+D,we.__webglTexture,B)}else if(fe){const we=Ue.get(w.texture),Fe=D||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,we.__webglTexture,B||0,Fe)}b=-1},this.readRenderTargetPixels=function(w,D,B,z,N,oe,fe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ue.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&fe!==void 0&&(Me=Me[fe]),Me){De.bindFramebuffer(P.FRAMEBUFFER,Me);try{const we=w.texture,Fe=we.format,ke=we.type;if(!Pe.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pe.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=w.width-z&&B>=0&&B<=w.height-N&&P.readPixels(D,B,z,N,Ve.convert(Fe),Ve.convert(ke),oe)}finally{const we=T!==null?Ue.get(T).__webglFramebuffer:null;De.bindFramebuffer(P.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(w,D,B,z,N,oe,fe){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Ue.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&fe!==void 0&&(Me=Me[fe]),Me){const we=w.texture,Fe=we.format,ke=we.type;if(!Pe.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pe.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=w.width-z&&B>=0&&B<=w.height-N){De.bindFramebuffer(P.FRAMEBUFFER,Me);const Re=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Re),P.bufferData(P.PIXEL_PACK_BUFFER,oe.byteLength,P.STREAM_READ),P.readPixels(D,B,z,N,Ve.convert(Fe),Ve.convert(ke),0);const ft=T!==null?Ue.get(T).__webglFramebuffer:null;De.bindFramebuffer(P.FRAMEBUFFER,ft);const St=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await d4(P,St,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Re),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,oe),P.deleteBuffer(Re),P.deleteSync(St),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,D=null,B=0){w.isTexture!==!0&&(Su("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,w=arguments[1]);const z=Math.pow(2,-B),N=Math.floor(w.image.width*z),oe=Math.floor(w.image.height*z),fe=D!==null?D.x:0,Me=D!==null?D.y:0;C.setTexture2D(w,0),P.copyTexSubImage2D(P.TEXTURE_2D,B,0,0,fe,Me,N,oe),De.unbindTexture()},this.copyTextureToTexture=function(w,D,B=null,z=null,N=0){w.isTexture!==!0&&(Su("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,w=arguments[1],D=arguments[2],N=arguments[3]||0,B=null);let oe,fe,Me,we,Fe,ke;B!==null?(oe=B.max.x-B.min.x,fe=B.max.y-B.min.y,Me=B.min.x,we=B.min.y):(oe=w.image.width,fe=w.image.height,Me=0,we=0),z!==null?(Fe=z.x,ke=z.y):(Fe=0,ke=0);const Re=Ve.convert(D.format),ft=Ve.convert(D.type);C.setTexture2D(D,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,D.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,D.unpackAlignment);const St=P.getParameter(P.UNPACK_ROW_LENGTH),Ot=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Kn=P.getParameter(P.UNPACK_SKIP_PIXELS),at=P.getParameter(P.UNPACK_SKIP_ROWS),be=P.getParameter(P.UNPACK_SKIP_IMAGES),fn=w.isCompressedTexture?w.mipmaps[N]:w.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,fn.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,fn.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Me),P.pixelStorei(P.UNPACK_SKIP_ROWS,we),w.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,N,Fe,ke,oe,fe,Re,ft,fn.data):w.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,N,Fe,ke,fn.width,fn.height,Re,fn.data):P.texSubImage2D(P.TEXTURE_2D,N,Fe,ke,oe,fe,Re,ft,fn),P.pixelStorei(P.UNPACK_ROW_LENGTH,St),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ot),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Kn),P.pixelStorei(P.UNPACK_SKIP_ROWS,at),P.pixelStorei(P.UNPACK_SKIP_IMAGES,be),N===0&&D.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),De.unbindTexture()},this.copyTextureToTexture3D=function(w,D,B=null,z=null,N=0){w.isTexture!==!0&&(Su("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,w=arguments[2],D=arguments[3],N=arguments[4]||0);let oe,fe,Me,we,Fe,ke,Re,ft,St;const Ot=w.isCompressedTexture?w.mipmaps[N]:w.image;B!==null?(oe=B.max.x-B.min.x,fe=B.max.y-B.min.y,Me=B.max.z-B.min.z,we=B.min.x,Fe=B.min.y,ke=B.min.z):(oe=Ot.width,fe=Ot.height,Me=Ot.depth,we=0,Fe=0,ke=0),z!==null?(Re=z.x,ft=z.y,St=z.z):(Re=0,ft=0,St=0);const Kn=Ve.convert(D.format),at=Ve.convert(D.type);let be;if(D.isData3DTexture)C.setTexture3D(D,0),be=P.TEXTURE_3D;else if(D.isDataArrayTexture||D.isCompressedArrayTexture)C.setTexture2DArray(D,0),be=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,D.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,D.unpackAlignment);const fn=P.getParameter(P.UNPACK_ROW_LENGTH),lt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Ii=P.getParameter(P.UNPACK_SKIP_PIXELS),Mo=P.getParameter(P.UNPACK_SKIP_ROWS),Zn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ot.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ot.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,we),P.pixelStorei(P.UNPACK_SKIP_ROWS,Fe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ke),w.isDataTexture||w.isData3DTexture?P.texSubImage3D(be,N,Re,ft,St,oe,fe,Me,Kn,at,Ot.data):D.isCompressedArrayTexture?P.compressedTexSubImage3D(be,N,Re,ft,St,oe,fe,Me,Kn,Ot.data):P.texSubImage3D(be,N,Re,ft,St,oe,fe,Me,Kn,at,Ot),P.pixelStorei(P.UNPACK_ROW_LENGTH,fn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,lt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ii),P.pixelStorei(P.UNPACK_SKIP_ROWS,Mo),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Zn),N===0&&D.generateMipmaps&&P.generateMipmap(be),De.unbindTexture()},this.initRenderTarget=function(w){Ue.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),De.unbindTexture()},this.resetState=function(){R=0,A=0,T=null,De.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===b0?"display-p3":"srgb",n.unpackColorSpace=ct.workingColorSpace===Uh?"display-p3":"srgb"}}class N0{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new qe(e),this.near=n,this.far=i}clone(){return new N0(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Cb extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hr,this.environmentIntensity=1,this.environmentRotation=new hr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Rr extends Yi{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],d=[],f=[],g=[];let p=0;const y=[],m=i/2;let u=0;_(),o===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new gn(d,3)),this.setAttribute("normal",new gn(f,3)),this.setAttribute("uv",new gn(g,2));function _(){const M=new k,R=new k;let A=0;const T=(n-e)/i;for(let b=0;b<=s;b++){const H=[],x=b/s,E=x*(n-e)+e;for(let F=0;F<=r;F++){const U=F/r,W=U*l+a,$=Math.sin(W),V=Math.cos(W);R.x=E*$,R.y=-x*i+m,R.z=E*V,d.push(R.x,R.y,R.z),M.set($,T,V).normalize(),f.push(M.x,M.y,M.z),g.push(U,1-x),H.push(p++)}y.push(H)}for(let b=0;b<r;b++)for(let H=0;H<s;H++){const x=y[H][b],E=y[H+1][b],F=y[H+1][b+1],U=y[H][b+1];e>0&&(h.push(x,E,U),A+=3),n>0&&(h.push(E,F,U),A+=3)}c.addGroup(u,A,0),u+=A}function v(M){const R=p,A=new ot,T=new k;let b=0;const H=M===!0?e:n,x=M===!0?1:-1;for(let F=1;F<=r;F++)d.push(0,m*x,0),f.push(0,x,0),g.push(.5,.5),p++;const E=p;for(let F=0;F<=r;F++){const W=F/r*l+a,$=Math.cos(W),V=Math.sin(W);T.x=H*V,T.y=m*x,T.z=H*$,d.push(T.x,T.y,T.z),f.push(0,x,0),A.x=$*.5+.5,A.y=V*.5*x+.5,g.push(A.x,A.y),p++}for(let F=0;F<r;F++){const U=R+F,W=E+F;M===!0?h.push(W,W+1,U):h.push(W+1,W,U),b+=3}c.addGroup(u,b,M===!0?1:2),u+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class U0 extends Rr{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new U0(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Oi extends Yi{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new k,f=new k,g=[],p=[],y=[],m=[];for(let u=0;u<=i;u++){const _=[],v=u/i;let M=0;u===0&&o===0?M=.5/n:u===i&&l===Math.PI&&(M=-.5/n);for(let R=0;R<=n;R++){const A=R/n;d.x=-e*Math.cos(r+A*s)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(r+A*s)*Math.sin(o+v*a),p.push(d.x,d.y,d.z),f.copy(d).normalize(),y.push(f.x,f.y,f.z),m.push(A+M,1-v),_.push(c++)}h.push(_)}for(let u=0;u<i;u++)for(let _=0;_<n;_++){const v=h[u][_+1],M=h[u][_],R=h[u+1][_],A=h[u+1][_+1];(u!==0||o>0)&&g.push(v,M,A),(u!==i-1||l<Math.PI)&&g.push(M,R,A)}this.setIndex(g),this.setAttribute("position",new gn(p,3)),this.setAttribute("normal",new gn(y,3)),this.setAttribute("uv",new gn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class oh extends Yi{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],h=new k,d=new k,f=new k;for(let g=0;g<=i;g++)for(let p=0;p<=r;p++){const y=p/r*s,m=g/i*Math.PI*2;d.x=(e+n*Math.cos(m))*Math.cos(y),d.y=(e+n*Math.cos(m))*Math.sin(y),d.z=n*Math.sin(m),a.push(d.x,d.y,d.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),c.push(p/r),c.push(g/i)}for(let g=1;g<=i;g++)for(let p=1;p<=r;p++){const y=(r+1)*g+p-1,m=(r+1)*(g-1)+p-1,u=(r+1)*(g-1)+p,_=(r+1)*g+p;o.push(y,m,_),o.push(m,u,_)}this.setIndex(o),this.setAttribute("position",new gn(a,3)),this.setAttribute("normal",new gn(l,3)),this.setAttribute("uv",new gn(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Xe extends ic{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ex,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class F0 extends mn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class Rb extends F0{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const pd=new Ht,q_=new k,K_=new k;class bb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new I0,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;q_.setFromMatrixPosition(e.matrixWorld),n.position.copy(q_),K_.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(K_),n.updateMatrixWorld(),pd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(pd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Pb extends bb{constructor(){super(new Fx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Lb extends F0{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.target=new mn,this.shadow=new Pb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ib extends F0{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:M0}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=M0);const _t=2.2,es=[-_t,0,_t],ts=-140,Ws=14,Db=34,Nb=12.5,Ub=.75,Z_=_t*1.8,rl=5,md=7.5,J_=1.7,Q_=2.6,Fb=.8,Ob=8,kb=8,Bb=20.5,zb=4.3;function Vb(t,e,n,i){const r=n-i,s=new Yi,o=[-t,0,n,-t,e,r,-t,0,r,t,0,n,t,e,r,t,0,r],a=[0,1,2,3,5,4,0,3,4,0,4,1,0,2,5,0,5,3,2,1,4,2,4,5];return s.setAttribute("position",new gn(o,3)),s.setIndex(a),s.computeVertexNormals(),s}class Hb{constructor(e,n={}){this.canvas=e,this.cb=n,this.raf=null,this._initThree(),this._buildWorld(),this.reset(),this._bindResize(),this.last=performance.now(),this._loop(this.last)}_initThree(){this.renderer=new Ab({canvas:this.canvas,antialias:!0}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ux,this.scene=new Cb,this.scene.background=new qe("#8fd0ff"),this.scene.fog=new N0("#bfe6ff",55,150),this.camera=new xi(62,1,.1,400),this.camera.position.set(0,8.8,13),this.camera.lookAt(0,.6,-20);const e=new Rb("#cfe9ff","#6b7a5a",1);this.scene.add(e);const n=new Lb("#fff6e0",1.7);n.position.set(-14,30,8),n.castShadow=!0,n.shadow.mapSize.set(1024,1024),n.shadow.camera.left=-30,n.shadow.camera.right=30,n.shadow.camera.top=30,n.shadow.camera.bottom=-30,n.shadow.camera.far=90,this.scene.add(n),this.scene.add(new Ib("#bcd4ff",.55))}_buildWorld(){const e=this.scene,n=new Oi(300,32,16),i=new Gr({side:Ln,uniforms:{top:{value:new qe("#1e78d8")},bot:{value:new qe("#bfe9ff")}},vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`varying vec3 vP; uniform vec3 top; uniform vec3 bot;
        void main(){ float h = clamp((vP.y/300.0)*0.5+0.5,0.0,1.0); gl_FragColor = vec4(mix(bot,top,h),1.0);} `});e.add(new xe(n,i));const r=new xe(new Oi(14,24,24),new L0({color:"#ffe6ad"}));r.position.set(-30,24,-180),e.add(r);const s=new Xe({color:"#232a3a",roughness:1}),o=new xe(new Ma(400,400),s);o.rotation.x=-Math.PI/2,o.position.set(0,-.02,-100),o.receiveShadow=!0,e.add(o);const a=new Xe({color:"#3a3d47",roughness:1}),l=new xe(new Ma(Z_*2,400),a);l.rotation.x=-Math.PI/2,l.position.set(0,0,-100),l.receiveShadow=!0,e.add(l);const c=new Xe({color:"#c7cfdd",metalness:.8,roughness:.35});for(const A of[-_t*1.5,-_t*.5,_t*.5,_t*1.5]){const T=new xe(new Ze(.18,.16,400),c);T.position.set(A,.08,-100),e.add(T)}this.sleepers=[];const h=new Xe({color:"#5b4632",roughness:1}),d=new Ze(Z_*2,.16,.6);this._sleeperSpacing=2.4,this._sleeperCount=70;for(let A=0;A<this._sleeperCount;A++){const T=new xe(d,h);T.position.set(0,.02,-A*this._sleeperSpacing+Ws),T.receiveShadow=!0,e.add(T),this.sleepers.push(T)}this.decor=[],this._decorSpan=260;const f=["#3b4a6b","#4a3b5f","#2f5a52","#5f4a3b","#404a5c"].map(A=>new Xe({color:A,roughness:.85})),g=new Xe({color:"#ffd98a",emissive:"#ffcf6e",emissiveIntensity:.8,roughness:.5}),p=new Xe({color:"#6b4a2f",roughness:1}),y=new Xe({color:"#2f7d4f",roughness:1}),m=new Xe({color:"#7a8290",metalness:.6,roughness:.5}),u=new Xe({color:"#fff2c0",emissive:"#ffe08a",emissiveIntensity:1}),_=(A,T)=>{const b=new Dt,H=8+T%5*4,x=4+T%3*1.5,E=4+(T>>1)%3*1.5,F=new xe(new Ze(x,H,E),f[T%f.length]);F.position.y=H/2,F.castShadow=!0,b.add(F);const U=3,W=Math.max(3,Math.floor(H/2.5));for(let $=0;$<W;$++)for(let V=0;V<U;V++){if(($+V+T)%4===0)continue;const q=new xe(new Ze(.7,1,.1),g);q.position.set((V-(U-1)/2)*(x/U)*.8,1.6+$*(H/W)*.9,(A<0?E/2:-E/2)+(A<0?.05:-.05)),b.add(q)}return b},v=()=>{const A=new Dt,T=new xe(new Rr(.25,.35,2.2,6),p);T.position.y=1.1,T.castShadow=!0,A.add(T);const b=new xe(new U0(1.6,3.4,8),y);return b.position.y=3.4,b.castShadow=!0,A.add(b),A},M=()=>{const A=new Dt,T=new xe(new Rr(.1,.12,5,6),m);T.position.y=2.5,A.add(T);const b=new xe(new Oi(.28,10,10),u);return b.position.y=5,A.add(b),A};let R=1;for(let A of[-1,1])for(let T=0;T<26;T++){R=R*1103515245+12345&2147483647;const b=R%5;let H,x;b<3?(H=_(A,R),x=A*(9+R%4)):b===3?(H=v(),x=A*(6.5+R%3)):(H=M(),x=A*5.2),H.position.set(x,0,-(T/26)*this._decorSpan+Ws-Math.random()*4),e.add(H),this.decor.push({obj:H,side:A,baseX:x})}this._geo={coin:new Rr(.55,.55,.16,20),train:new Ze(_t*.92,3.4,22),barrier:new Ze(_t*.92,1.1,.7),lowbar:new Ze(_t*.92,.5,.7),wheel:new Rr(.45,.45,.35,16),spoke:new Ze(.12,.82,.12)},this._mat={coin:new Xe({color:"#ffcf33",metalness:.7,roughness:.3,emissive:"#7a5a00",emissiveIntensity:.3}),train:new Xe({color:"#f4c518",metalness:.3,roughness:.45}),trainRoof:new Xe({color:"#fbe9a0",roughness:.6}),trainWin:new Xe({color:"#123",emissive:"#2a6a99",emissiveIntensity:.4}),barrier:new Xe({color:"#f5a623",roughness:.6}),lowbar:new Xe({color:"#9aa4b2",metalness:.6,roughness:.4}),wheel:new Xe({color:"#2b2f36",metalness:.6,roughness:.5}),wheelSpoke:new Xe({color:"#8b939d",metalness:.7,roughness:.4}),sideTrain:new Xe({color:"#d94f4f",metalness:.3,roughness:.5}),loco:new Xe({color:"#3a86ff",metalness:.3,roughness:.45}),trainBlock:new Xe({color:"#5b626e",metalness:.4,roughness:.6}),rampPlank:new Xe({color:"#ff9f1c",metalness:.4,roughness:.5,side:ar}),driverSkin:new Xe({color:"#e8b98f",roughness:.8}),driverShirt:new Xe({color:"#22406a",roughness:.7}),driverCap:new Xe({color:"#1e2b45",roughness:.7}),magnet:new Xe({color:"#e23b3b",metalness:.5,roughness:.4,emissive:"#5a0000",emissiveIntensity:.4}),magnetTip:new Xe({color:"#d0d6de",metalness:.85,roughness:.3}),boots:new Xe({color:"#7a4a26",roughness:.7}),bootsWing:new Xe({color:"#eaf2ff",emissive:"#bcd4ff",emissiveIntensity:.5,roughness:.4})},this._buildSideTrains(),this._buildPlayer()}_makeTrainMesh(e=this._mat.train,n=22,{loco:i=!1,ramp:r=!1}={}){const s=new Dt,o=3.5,a=n/2,l=r?n-rl:n,c=r?-rl/2:0,h=c+l/2,d=new xe(new Ze(_t*.92,3.4,l),e);d.position.set(0,1.7,c),d.castShadow=!0,s.add(d);const f=new xe(new Ze(_t*.94,.4,l),this._mat.trainRoof);f.position.set(0,3.45,c),s.add(f);const g=Math.floor(l/2.4);for(let y=-g;y<=g;y++){const m=new xe(new Ze(_t*.94+.02,.9,1.6),this._mat.trainWin);m.position.set(0,2.1,c+y*2.2),Math.abs(m.position.z-c)<l/2-1&&s.add(m)}if(r){const y=new xe(Vb(_t*.46,o,a,rl),this._mat.rampPlank);y.castShadow=!0,y.receiveShadow=!0,s.add(y)}if(i){const y=new xe(new Ze(_t*.82,1.1,.4),e);y.position.set(0,4.1,a-.35),s.add(y);for(const v of[-_t*.39,_t*.39]){const M=new xe(new Ze(.12,1.1,1.9),e);M.position.set(v,4.1,a-1.15),s.add(M)}const m=new xe(new Ze(.64,.8,.46),this._mat.driverShirt);m.position.set(0,4.4,a-1.05),s.add(m);const u=new xe(new Oi(.29,14,14),this._mat.driverSkin);u.position.set(0,5.05,a-1),u.castShadow=!0,s.add(u);const _=new xe(new Oi(.31,14,8,0,Math.PI*2,0,Math.PI/2),this._mat.driverCap);_.position.set(0,5.12,a-1),s.add(_)}const p=[];for(const y of[-_t*.42,_t*.42])for(let m=c-l/2+3;m<=h-2;m+=4){const u=new Dt,_=new xe(this._geo.wheel,this._mat.wheel);_.rotation.z=Math.PI/2;const v=new xe(this._geo.spoke,this._mat.wheelSpoke);u.add(_,v),u.position.set(y,.5,m),s.add(u),p.push(u)}return{grp:s,wheels:p}}_buildSideTrains(){this.sideTrains=[],this._sideSpan=220;const e=new Xe({color:"#c7cfdd",metalness:.8,roughness:.35});for(const n of[-1,1]){const i=n*13;for(const r of[-.7,.7]){const s=new xe(new Ze(.16,.14,400),e);s.position.set(i+r,.07,-100),this.scene.add(s)}for(let r=0;r<2;r++){const{grp:s,wheels:o}=this._makeTrainMesh(this._mat.sideTrain,34),a=Ws-r*(this._sideSpan/2)-n*30;s.position.set(i,0,a),this.scene.add(s),this.sideTrains.push({mesh:s,wheels:o,baseX:i,z:a,speed:1.7})}}}_buildPlayer(){const e=new Dt,n=new Xe({color:"#f6cfa8",roughness:.8}),i=new Xe({color:"#22d3ee",roughness:.6}),r=new Xe({color:"#22406a",roughness:.8}),s=new Xe({color:"#ef4444",roughness:.7});this._pMat={skin:n,shirt:i,pants:r,cap:s};const o=new xe(new Ze(.9,1.1,.55),i);o.position.y=1.55,o.castShadow=!0,e.add(o);const a=new xe(new Oi(.42,16,16),n);a.position.y=2.45,a.castShadow=!0,e.add(a);const l=new xe(new Oi(.44,16,12,0,Math.PI*2,0,Math.PI/2),s);l.position.y=2.5,e.add(l);const c=new xe(new Ze(.5,.08,.4),s);c.position.set(0,2.5,.42),e.add(c);const h=new Ze(.24,.9,.24);this.armL=new Dt,this.armR=new Dt;const d=new xe(h,i);d.position.y=-.45,d.castShadow=!0;const f=new xe(h,i);f.position.y=-.45,f.castShadow=!0,this.armL.add(d),this.armR.add(f),this.armL.position.set(-.58,2,0),this.armR.position.set(.58,2,0),e.add(this.armL,this.armR);const g=new Ze(.3,1,.3);this.legL=new Dt,this.legR=new Dt;const p=new xe(g,r);p.position.y=-.5,p.castShadow=!0;const y=new xe(g,r);y.position.y=-.5,y.castShadow=!0,this.legL.add(p),this.legR.add(y),this.legL.position.set(-.22,1,0),this.legR.position.set(.22,1,0),e.add(this.legL,this.legR),this.heldMagnet=new Dt;const m=new xe(new oh(.2,.08,10,16,Math.PI),this._mat.magnet);m.rotation.z=Math.PI,this.heldMagnet.add(m);for(const u of[-.2,.2]){const _=new xe(new Rr(.08,.08,.14,10),this._mat.magnetTip);_.position.set(u,-.07,0),this.heldMagnet.add(_)}this.heldMagnet.position.set(0,-.95,0),this.heldMagnet.visible=!1,this.armR.add(this.heldMagnet),this.boots=[];for(const u of[this.legL,this.legR]){const _=new Dt,v=new xe(new Ze(.38,.32,.6),this._mat.boots);v.position.set(0,-.15,.12),_.add(v);const M=new xe(new Ze(.4,.4,.4),this._mat.boots);M.position.set(0,.12,-.02),_.add(M);for(const R of[-.24,.24]){const A=new xe(new Ze(.06,.3,.36),this._mat.bootsWing);A.position.set(R,.12,-.05),A.rotation.z=R>0?-.5:.5,_.add(A)}_.position.set(0,-1,0),_.visible=!1,u.add(_),this.boots.push(_)}this.player=e,this.playerTorso=o,this.scene.add(e),this._buildPolice()}_buildPolice(){const e=new Dt,n=new Xe({color:"#e8b98f",roughness:.8}),i=new Xe({color:"#4a7d4f",roughness:.7}),r=new Xe({color:"#3a5c3f",roughness:.8}),s=new Xe({color:"#2f5233",roughness:.7}),o=new xe(new Ze(1.05,1.2,.62),i);o.position.y=1.6,o.castShadow=!0,e.add(o);const a=new xe(new Oi(.46,16,16),n);a.position.y=2.55,a.castShadow=!0,e.add(a);const l=new xe(new Oi(.48,16,12,0,Math.PI*2,0,Math.PI/2),s);l.position.y=2.6,e.add(l);const c=new xe(new Ze(.55,.08,.42),s);c.position.set(0,2.6,.46),e.add(c);const h=new Ze(.28,.95,.28);this.pArmL=new Dt,this.pArmR=new Dt;const d=new xe(h,i);d.position.y=-.47,d.castShadow=!0;const f=new xe(h,i);f.position.y=-.47,f.castShadow=!0,this.pArmL.add(d),this.pArmR.add(f),this.pArmL.position.set(-.68,2.05,0),this.pArmR.position.set(.68,2.05,0),e.add(this.pArmL,this.pArmR);const g=new Ze(.34,1.05,.34);this.pLegL=new Dt,this.pLegR=new Dt;const p=new xe(g,r);p.position.y=-.52,p.castShadow=!0;const y=new xe(g,r);y.position.y=-.52,y.castShadow=!0,this.pLegL.add(p),this.pLegR.add(y),this.pLegL.position.set(-.26,1.05,0),this.pLegR.position.set(.26,1.05,0),e.add(this.pLegL,this.pLegR),this.police=e,this.scene.add(e)}reset(){var e,n;if(this.targetLane=1,this.laneX=0,this.y=0,this.vy=0,this.groundY=0,this.grounded=!0,this.rolling=0,this.speed=20,this.dist=0,this.score=0,this.coins=0,this.spawnTimer=0,this.running=!1,this.gameOver=!1,this.time=0,this.shake=0,this.policeX=0,this.policeZ=md,this.stumbleT=0,this.caught=!1,this.caughtT=0,this._over=!1,this.crashType=null,this.magnetT=0,this.bootsT=0,(n=(e=this.cb).onPower)==null||n.call(e,0,0),this.items)for(const i of this.items)this.scene.remove(i.mesh);this.items=[],this.player&&(this.player.position.set(0,0,0),this.player.rotation.set(0,0,0),this.player.scale.y=1),this.police&&(this.police.position.set(0,0,md),this.police.rotation.set(0,0,0))}_bindResize(){this.resize=()=>{const e=window.innerWidth,n=window.innerHeight;this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.setSize(e,n),this.camera.aspect=e/n,this.camera.updateProjectionMatrix()},this.resize(),window.addEventListener("resize",this.resize)}destroy(){this.raf&&cancelAnimationFrame(this.raf),window.removeEventListener("resize",this.resize),this.renderer.dispose()}start(){this.reset(),this.running=!0,this.last=performance.now(),this.raf||this._loop(this.last)}setCharacter(e){!this._pMat||!e||(e.skin&&this._pMat.skin.color.set(e.skin),e.shirt&&this._pMat.shirt.color.set(e.shirt),e.pants&&this._pMat.pants.color.set(e.pants),e.cap&&this._pMat.cap.color.set(e.cap))}moveLeft(){this.running&&this.stumbleT<=0&&(this.targetLane=Math.max(0,this.targetLane-1))}moveRight(){this.running&&this.stumbleT<=0&&(this.targetLane=Math.min(2,this.targetLane+1))}setLane(e){this.running&&this.stumbleT<=0&&(this.targetLane=Math.max(0,Math.min(2,e)))}jump(){this.running&&this.stumbleT<=0&&this.grounded&&this.rolling<=0&&(this.vy=this.bootsT>0?Bb:Nb)}roll(){this.running&&this.stumbleT<=0&&this.grounded&&(this.rolling=Ub,this.vy=0)}_spawn(){const e=Math.random(),n=Math.floor(Math.random()*3),i=this.time>25?Math.min(.05,.012+(this.time-25)*8e-4):0;if(Math.random()<i){this._addPower(n,Math.random()<.5?"magnet":"boots");return}if(e<.06)this._addObstacle(n,"train",ts,{climb:!0,ramp:!0}),this._addObstacle(n,"train",ts-22,{climb:!0,ramp:!1}),this._addRoofCoins(n,ts);else if(e<.55){const r=["barrier","train","lowbar"],s=r[Math.floor(Math.random()*r.length)];let o={};if(s==="train"){const a=Math.random();a<.18?o={moving:!0}:a<.3&&(o={climb:!0})}this._addObstacle(n,s,ts,o),s==="train"&&Math.random()<.5&&this._addRoofCoins(n,ts)}else{const r=4+Math.floor(Math.random()*4);for(let s=0;s<r;s++)this._addCoin(n,ts-s*2.6)}}_addRoofCoins(e,n){for(let i=-2;i<=2;i++)this._addCoin(e,n+i*3,zb)}_addCoin(e,n,i=1.1){const r=new xe(this._geo.coin,this._mat.coin);r.rotation.x=Math.PI/2,r.position.set(es[e],i,n),r.castShadow=!0,this.scene.add(r),this.items.push({mesh:r,type:"coin",lane:e,z:n,zHalf:.4,baseY:i})}_addPower(e,n,i=ts){const r=new Dt;if(n==="magnet"){const s=new xe(new oh(.55,.2,12,20,Math.PI),this._mat.magnet);s.rotation.z=Math.PI,s.position.y=.1,r.add(s);for(const o of[-.55,.55]){const a=new xe(new Rr(.2,.2,.35,12),this._mat.magnetTip);a.position.set(o,-.17,0),r.add(a)}}else{const s=new xe(new Ze(.5,.3,1),this._mat.boots);s.position.set(0,-.25,.15),r.add(s);const o=new xe(new Ze(.5,.8,.5),this._mat.boots);o.position.set(0,.25,-.15),r.add(o);for(const a of[-.32,.32]){const l=new xe(new Ze(.08,.4,.5),this._mat.bootsWing);l.position.set(a,.1,-.1),l.rotation.z=a>0?-.5:.5,r.add(l)}}r.position.set(es[e],1.5,i),r.traverse(s=>{s.isMesh&&(s.castShadow=!0)}),this.scene.add(r),this.items.push({mesh:r,type:"power",kind:n,lane:e,z:i,zHalf:.7})}_addObstacle(e,n,i=ts,r={}){const{moving:s=!1,climb:o=!1,ramp:a=o}=r;let l,c,h,d;if(n==="train"){const g=s?this._mat.loco:o?this._mat.train:this._mat.trainBlock,p=this._makeTrainMesh(g,22,{loco:s,ramp:o&&a});l=p.grp,d=p.wheels,c=11,h="top"}else if(n==="barrier")l=new xe(this._geo.barrier,this._mat.barrier),l.position.y=.55,l.castShadow=!0,c=.5,h="jump";else{const g=new Dt,p=new xe(this._geo.lowbar,this._mat.lowbar);p.position.y=2.1,p.castShadow=!0,g.add(p);for(const y of[-_t*.42,_t*.42]){const m=new xe(new Ze(.18,2.3,.18),this._mat.lowbar);m.position.set(y,1.15,0),g.add(m)}l=g,c=.4,h="roll"}l.position.x=es[e],l.position.z=i,this.scene.add(l);const f=n==="train"&&s?1.35:1;this.items.push({mesh:l,type:"obs",kind:n,lane:e,z:i,zHalf:c,clear:h,wheels:d,roll:f,climb:n==="train"&&o,topY:n==="train"?3.5:0})}_update(e){var l,c,h,d,f,g;this.time+=e,this.speed+=e*.32;const n=this.speed*e;if(this.dist+=n,this.score+=n*1.2,(c=(l=this.cb).onScore)==null||c.call(l,Math.floor(this.score),this.coins),this.laneX+=(this.targetLane-1-this.laneX)*Math.min(1,e*13),this.rolling>0&&(this.rolling-=e),this.stumbleT>0&&(this.stumbleT-=e),this.shake>0&&(this.shake-=e),this.magnetT>0||this.bootsT>0){const p=this.magnetT,y=this.bootsT;this.magnetT>0&&(this.magnetT=Math.max(0,this.magnetT-e)),this.bootsT>0&&(this.bootsT=Math.max(0,this.bootsT-e)),(p>0!=this.magnetT>0||y>0!=this.bootsT>0)&&((d=(h=this.cb).onPower)==null||d.call(h,this.magnetT,this.bootsT))}this.stumbleT<=0&&(this.policeZ+=(md-this.policeZ)*e*.12),this.spawnTimer-=e;const i=Math.max(.5,1.2-this.time*.006);this.spawnTimer<=0&&(this._spawn(),this.spawnTimer=i);for(const p of this.sleepers)p.position.z+=n,p.position.z>Ws&&(p.position.z-=this._sleeperCount*this._sleeperSpacing);for(const p of this.decor)p.obj.position.z+=n,p.obj.position.z>Ws+6&&(p.obj.position.z-=this._decorSpan);for(const p of this.sideTrains){const y=n*p.speed;p.z+=y,p.mesh.position.z=p.z;for(const m of p.wheels)m.rotation.x+=y/.45;p.z>Ws+20&&(p.z-=this._sideSpan)}const r=this.laneX*_t,s=this.magnetT>0;for(const p of this.items){const y=p.type==="obs"&&p.kind==="train"?n*p.roll:n;if(p.z+=y,p.mesh.position.z=p.z,p.wheels)for(const m of p.wheels)m.rotation.x+=y/.45;p.type==="coin"?(p.mesh.rotation.z+=e*6,s&&!p.taken&&p.z>-20&&p.z<8?(p.mesh.position.x+=(r-p.mesh.position.x)*Math.min(1,e*9),p.mesh.position.y+=(this.y+.6-p.mesh.position.y)*Math.min(1,e*9)):(p.mesh.position.x+=(es[p.lane]-p.mesh.position.x)*Math.min(1,e*6),p.mesh.position.y=p.baseY+Math.sin(this.time*4+p.z)*.12)):p.type==="power"&&(p.mesh.rotation.y+=e*2.2,p.mesh.position.y=1.5+Math.sin(this.time*3+p.z)*.18)}let o=0;for(const p of this.items)if(!(p.type!=="obs"||!(Math.abs(es[p.lane]-r)<_t*.55))&&p.kind==="train"&&Math.abs(p.z)<p.zHalf){const m=p.z+p.zHalf;if(this.y>=p.topY-.5)o=Math.max(o,p.topY);else if(p.climb&&m<=rl)o=Math.max(o,p.topY*Math.max(0,m/rl));else if(!p.climb&&m<3){this._crash("front");return}else if(!p.hit){if(p.hit=!0,this.policeZ-Q_<=J_){this._crash("side");return}this._stumble(p.lane,r)}}this.groundY=o,this.vy===0&&o>this.y?this.y=o:(this.vy-=Db*e,this.y+=this.vy*e,this.y<=o&&(this.y=o,this.vy=0)),this.grounded=this.y<=o+.05;const a=p=>{var y,m;p.taken=!0,this.coins+=1,this.score+=15,(m=(y=this.cb).onScore)==null||m.call(y,Math.floor(this.score),this.coins)};for(const p of this.items){if(p.type==="coin"){if(p.taken)continue;if(s&&p.z>-20&&p.z<8){const u=p.mesh.position.x-r,_=p.mesh.position.y-(this.y+.6);u*u+_*_+p.z*p.z<4&&a(p)}else{const u=Math.abs(p.z)<p.zHalf+.6,_=Math.abs(es[p.lane]-r)<_t*.55;u&&_&&Math.abs(this.y-p.mesh.position.y)<1.4&&a(p)}continue}const y=Math.abs(p.z)<p.zHalf+.6,m=Math.abs(es[p.lane]-r)<_t*.55;if(!(!y||!m)){if(p.type==="power")!p.taken&&Math.abs(this.y-p.mesh.position.y)<1.8&&(p.taken=!0,p.kind==="magnet"?this.magnetT=Ob:this.bootsT=kb,(g=(f=this.cb).onPower)==null||g.call(f,this.magnetT,this.bootsT));else if(p.kind==="barrier"){if(!p.hit&&!(this.y>1.3)){this._crash("front");return}p.hit=!0}else if(p.kind==="lowbar"){if(!p.hit&&!(this.rolling>0)&&this.y<2.6){this._crash("front");return}p.hit=!0}}}this.items=this.items.filter(p=>{const y=p.z<Ws&&!p.taken;return y||this.scene.remove(p.mesh),y}),this._animatePlayer(e)}_animatePlayer(e){const n=this.player;if(n.position.x+=(this.laneX*_t-n.position.x)*Math.min(1,e*13),n.position.y=this.y,this.stumbleT>0){n.rotation.x+=(1.45-n.rotation.x)*Math.min(1,e*14),n.rotation.z+=(0-n.rotation.z)*Math.min(1,e*14),n.scale.y+=(.7-n.scale.y)*Math.min(1,e*14),this.legL.rotation.x=.5,this.legR.rotation.x=.3,this.armL.rotation.x=.4,this.armR.rotation.x=.6;return}const i=this.rolling>0,r=i?.42:1;n.scale.y+=(r-n.scale.y)*Math.min(1,e*16),n.rotation.x+=((i?.95:0)-n.rotation.x)*Math.min(1,e*16),n.rotation.z+=((this.targetLane-1-this.laneX)*-.4-n.rotation.z)*Math.min(1,e*10);const s=!this.grounded;if(i)this.legL.rotation.x=.15,this.legR.rotation.x=.15,this.armL.rotation.x=.1,this.armR.rotation.x=.1;else{const o=s?.5:Math.sin(this.time*15)*.9;this.legL.rotation.x=o,this.legR.rotation.x=-o,this.armL.rotation.x=-o,this.armR.rotation.x=o}this.heldMagnet.visible=this.magnetT>0,this.magnetT>0&&(this.armR.rotation.x+=(-2.7-this.armR.rotation.x)*Math.min(1,e*12));for(const o of this.boots)o.visible=this.bootsT>0;this._animatePolice(e)}_animatePolice(e){if(!this.police)return;this.policeX+=(this.player.position.x-this.policeX)*Math.min(1,e*4),this.police.position.set(this.policeX,0,this.policeZ);const n=Math.sin(this.time*15+.6);this.pLegL.rotation.x=n,this.pLegR.rotation.x=-n,this.pArmL.rotation.x=-n*.8,this.pArmR.rotation.x=n*.8}_stumble(e,n){this.stumbleT=Fb,this.policeZ=Math.max(J_,this.policeZ-Q_);const i=n<=es[e]?-1:1;this.targetLane=Math.max(0,Math.min(2,e+i)),this.vy=0,this.y=0,this.shake=.35}_crash(e){this.caught||(this.running=!1,this.gameOver=!0,this.caught=!0,this.caughtT=0,this.crashType=e,this.shake=.5,e==="side"&&(this.policeZ=Math.min(this.policeZ,3)))}_updateCaught(e){var i,r;this.caughtT+=e,this.policeX+=(this.player.position.x-this.policeX)*Math.min(1,e*9),this.policeZ+=(this.player.position.z+1.3-this.policeZ)*Math.min(1,e*5),this.police.position.set(this.policeX,this.player.position.y,this.policeZ),this.pArmL.rotation.x=-1.5,this.pArmR.rotation.x=-1.5;const n=Math.sin(this.caughtT*24)*.7;this.pLegL.rotation.x=n,this.pLegR.rotation.x=-n,this.player.rotation.x+=((this.crashType==="front"?.5:.2)-this.player.rotation.x)*Math.min(1,e*8),!this._over&&this.caughtT>.7&&(this._over=!0,(r=(i=this.cb).onGameOver)==null||r.call(i,Math.floor(this.score),this.coins))}_render(){this.shake>0?(this.camera.position.x=0+(Math.random()-.5)*this.shake*2,this.camera.position.y=8.8+(Math.random()-.5)*this.shake*2):(this.camera.position.x+=(0-this.camera.position.x)*.2,this.camera.position.y+=(8.8-this.camera.position.y)*.2),this.renderer.render(this.scene,this.camera)}_loop(e){let n=(e-this.last)/1e3;this.last=e,n>.05&&(n=.05),this.running?this._update(n):(this.shake>0&&(this.shake-=n),this.caught&&this._updateCaught(n)),this._render(),this.raf=requestAnimationFrame(i=>this._loop(i))}}var rc=typeof self<"u"?self:{};function Hx(t){e:{for(var e=["CLOSURE_FLAGS"],n=rc,i=0;i<e.length;i++)if((n=n[e[i]])==null){e=null;break e}e=n}return(t=e&&e[t])!=null&&t}function Xs(){throw Error("Invalid UTF8")}function ev(t,e){return e=String.fromCharCode.apply(null,e),t==null?e:t+e}let Qc,gd;const Gb=typeof TextDecoder<"u";let Wb;const Xb=typeof TextEncoder<"u";function Gx(t){if(Xb)t=(Wb||(Wb=new TextEncoder)).encode(t);else{let n=0;const i=new Uint8Array(3*t.length);for(let r=0;r<t.length;r++){var e=t.charCodeAt(r);if(128>e)i[n++]=e;else{if(2048>e)i[n++]=e>>6|192;else{if(55296<=e&&57343>=e){if(56319>=e&&r<t.length){const s=t.charCodeAt(++r);if(56320<=s&&57343>=s){e=1024*(e-55296)+s-56320+65536,i[n++]=e>>18|240,i[n++]=e>>12&63|128,i[n++]=e>>6&63|128,i[n++]=63&e|128;continue}r--}e=65533}i[n++]=e>>12|224,i[n++]=e>>6&63|128}i[n++]=63&e|128}}t=n===i.length?i:i.subarray(0,n)}return t}var Xl,Wx=Hx(610401301),$b=Hx(188588736);const tv=rc.navigator;function am(t){return!!Wx&&!!Xl&&Xl.brands.some(({brand:e})=>e&&e.indexOf(t)!=-1)}function Si(t){var e;return(e=rc.navigator)&&(e=e.userAgent)||(e=""),e.indexOf(t)!=-1}function cs(){return!!Wx&&!!Xl&&0<Xl.brands.length}function _d(){return cs()?am("Chromium"):(Si("Chrome")||Si("CriOS"))&&!(!cs()&&Si("Edge"))||Si("Silk")}function O0(t){return O0[" "](t),t}Xl=tv&&tv.userAgentData||null,O0[" "]=function(){};var jb=!cs()&&(Si("Trident")||Si("MSIE"));!Si("Android")||_d(),_d(),Si("Safari")&&(_d()||!cs()&&Si("Coast")||!cs()&&Si("Opera")||!cs()&&Si("Edge")||(cs()?am("Microsoft Edge"):Si("Edg/"))||cs()&&am("Opera"));var Xx={},hl=null;function Yb(t){var e=t.length,n=3*e/4;n%3?n=Math.floor(n):"=.".indexOf(t[e-1])!=-1&&(n="=.".indexOf(t[e-2])!=-1?n-2:n-1);var i=new Uint8Array(n),r=0;return function(s,o){function a(g){for(;l<s.length;){var p=s.charAt(l++),y=hl[p];if(y!=null)return y;if(!/^[\s\xa0]*$/.test(p))throw Error("Unknown base64 encoding at char: "+p)}return g}$x();for(var l=0;;){var c=a(-1),h=a(0),d=a(64),f=a(64);if(f===64&&c===-1)break;o(c<<2|h>>4),d!=64&&(o(h<<4&240|d>>2),f!=64&&o(d<<6&192|f))}}(t,function(s){i[r++]=s}),r!==n?i.subarray(0,r):i}function $x(){if(!hl){hl={};for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],n=0;5>n;n++){var i=t.concat(e[n].split(""));Xx[n]=i;for(var r=0;r<i.length;r++){var s=i[r];hl[s]===void 0&&(hl[s]=r)}}}}var jx=typeof Uint8Array<"u",Yx=!jb&&typeof btoa=="function";function nv(t){if(!Yx){var e;e===void 0&&(e=0),$x(),e=Xx[e];var n=Array(Math.floor(t.length/3)),i=e[64]||"";let l=0,c=0;for(;l<t.length-2;l+=3){var r=t[l],s=t[l+1],o=t[l+2],a=e[r>>2];r=e[(3&r)<<4|s>>4],s=e[(15&s)<<2|o>>6],o=e[63&o],n[c++]=a+r+s+o}switch(a=0,o=i,t.length-l){case 2:o=e[(15&(a=t[l+1]))<<2]||i;case 1:t=t[l],n[c]=e[t>>2]+e[(3&t)<<4|a>>4]+o+i}return n.join("")}for(e="",n=0,i=t.length-10240;n<i;)e+=String.fromCharCode.apply(null,t.subarray(n,n+=10240));return e+=String.fromCharCode.apply(null,n?t.subarray(n):t),btoa(e)}const iv=/[-_.]/g,qb={"-":"+",_:"/",".":"="};function Kb(t){return qb[t]||""}function qx(t){if(!Yx)return Yb(t);iv.test(t)&&(t=t.replace(iv,Kb)),t=atob(t);const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}function sc(t){return jx&&t!=null&&t instanceof Uint8Array}let Zb;function Oh(){return Zb||(Zb=new Uint8Array(0))}var Ea={};let Jb;function Kx(t){if(t!==Ea)throw Error("illegal external caller")}function vo(){return Jb||(Jb=new Ur(null,Ea))}function k0(t){Kx(Ea);var e=t.g;return(e=e==null||sc(e)?e:typeof e=="string"?qx(e):null)==null?e:t.g=e}var Ur=class{constructor(t,e){if(Kx(e),this.g=t,t!=null&&t.length===0)throw Error("ByteString should be constructed with non-empty values")}h(){const t=k0(this);return t?new Uint8Array(t):Oh()}};function Zx(t,e){return Error(`Invalid wire type: ${t} (at position ${e})`)}function B0(){return Error("Failed to read varint, encoding is invalid.")}function Jx(t,e){return Error(`Tried to read past the end of the data ${e} > ${t}`)}function z0(t){if(typeof t=="string")return{buffer:qx(t),P:!1};if(Array.isArray(t))return{buffer:new Uint8Array(t),P:!1};if(t.constructor===Uint8Array)return{buffer:t,P:!1};if(t.constructor===ArrayBuffer)return{buffer:new Uint8Array(t),P:!1};if(t.constructor===Ur)return{buffer:k0(t)||Oh(),P:!0};if(t instanceof Uint8Array)return{buffer:new Uint8Array(t.buffer,t.byteOffset,t.byteLength),P:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function V0(){return typeof BigInt=="function"}const Qb=typeof Uint8Array.prototype.slice=="function";let Qx,wt=0,Jt=0;function oo(t){const e=0>t;let n=(t=Math.abs(t))>>>0;if(t=Math.floor((t-n)/4294967296),e){const[i,r]=W0(n,t);t=r,n=i}wt=n>>>0,Jt=t>>>0}function H0(t){const e=Qx||(Qx=new DataView(new ArrayBuffer(8)));e.setFloat32(0,+t,!0),Jt=0,wt=e.getUint32(0,!0)}function lm(t,e){return 4294967296*e+(t>>>0)}function G0(t,e){const n=2147483648&e;return n&&(e=~e>>>0,(t=1+~t>>>0)==0&&(e=e+1>>>0)),t=lm(t,e),n?-t:t}function ah(t,e){if(t>>>=0,2097151>=(e>>>=0))var n=""+(4294967296*e+t);else V0()?n=""+(BigInt(e)<<BigInt(32)|BigInt(t)):(t=(16777215&t)+6777216*(n=16777215&(t>>>24|e<<8))+6710656*(e=e>>16&65535),n+=8147497*e,e*=2,1e7<=t&&(n+=Math.floor(t/1e7),t%=1e7),1e7<=n&&(e+=Math.floor(n/1e7),n%=1e7),n=e+rv(n)+rv(t));return n}function rv(t){return t=String(t),"0000000".slice(t.length)+t}function e3(){var t=wt,e=Jt;if(2147483648&e)if(V0())t=""+(BigInt(0|e)<<BigInt(32)|BigInt(t>>>0));else{const[n,i]=W0(t,e);t="-"+ah(n,i)}else t=ah(t,e);return t}function kh(t){if(16>t.length)oo(Number(t));else if(V0())t=BigInt(t),wt=Number(t&BigInt(4294967295))>>>0,Jt=Number(t>>BigInt(32)&BigInt(4294967295));else{const e=+(t[0]==="-");Jt=wt=0;const n=t.length;for(let i=e,r=(n-e)%6+e;r<=n;i=r,r+=6){const s=Number(t.slice(i,r));Jt*=1e6,wt=1e6*wt+s,4294967296<=wt&&(Jt+=Math.trunc(wt/4294967296),Jt>>>=0,wt>>>=0)}if(e){const[i,r]=W0(wt,Jt);wt=i,Jt=r}}}function W0(t,e){return e=~e,t?t=1+~t:e+=1,[t,e]}function X0(t,e){let n,i=0,r=0,s=0;const o=t.h;let a=t.g;do n=o[a++],i|=(127&n)<<s,s+=7;while(32>s&&128&n);for(32<s&&(r|=(127&n)>>4),s=3;32>s&&128&n;s+=7)n=o[a++],r|=(127&n)<<s;if(ao(t,a),128>n)return e(i>>>0,r>>>0);throw B0()}function $0(t){let e=0,n=t.g;const i=n+10,r=t.h;for(;n<i;){const s=r[n++];if(e|=s,(128&s)==0)return ao(t,n),!!(127&e)}throw B0()}function As(t){const e=t.h;let n=t.g,i=e[n++],r=127&i;if(128&i&&(i=e[n++],r|=(127&i)<<7,128&i&&(i=e[n++],r|=(127&i)<<14,128&i&&(i=e[n++],r|=(127&i)<<21,128&i&&(i=e[n++],r|=i<<28,128&i&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++])))))throw B0();return ao(t,n),r}function Cs(t){return As(t)>>>0}function cm(t){var e=t.h;const n=t.g,i=e[n],r=e[n+1],s=e[n+2];return e=e[n+3],ao(t,t.g+4),(i<<0|r<<8|s<<16|e<<24)>>>0}function um(t){var e=cm(t);t=2*(e>>31)+1;const n=e>>>23&255;return e&=8388607,n==255?e?NaN:1/0*t:n==0?t*Math.pow(2,-149)*e:t*Math.pow(2,n-150)*(e+Math.pow(2,23))}function eP(t){return As(t)}function vd(t,e,{ca:n=!1}={}){t.ca=n,e&&(e=z0(e),t.h=e.buffer,t.m=e.P,t.j=0,t.l=t.h.length,t.g=t.j)}function ao(t,e){if(t.g=e,e>t.l)throw Jx(t.l,e)}function t3(t,e){if(0>e)throw Error(`Tried to read a negative byte length: ${e}`);const n=t.g,i=n+e;if(i>t.l)throw Jx(e,t.l-n);return t.g=i,n}function n3(t,e){if(e==0)return vo();var n=t3(t,e);return t.ca&&t.m?n=t.h.subarray(n,n+e):(t=t.h,n=n===(e=n+e)?Oh():Qb?t.slice(n,e):new Uint8Array(t.subarray(n,e))),n.length==0?vo():new Ur(n,Ea)}var sv=[];function i3(t){var e=t.g;if(e.g==e.l)return!1;t.l=t.g.g;var n=Cs(t.g);if(e=n>>>3,!(0<=(n&=7)&&5>=n))throw Zx(n,t.l);if(1>e)throw Error(`Invalid field number: ${e} (at position ${t.l})`);return t.m=e,t.h=n,!0}function Eu(t){switch(t.h){case 0:t.h!=0?Eu(t):$0(t.g);break;case 1:ao(t=t.g,t.g+8);break;case 2:if(t.h!=2)Eu(t);else{var e=Cs(t.g);ao(t=t.g,t.g+e)}break;case 5:ao(t=t.g,t.g+4);break;case 3:for(e=t.m;;){if(!i3(t))throw Error("Unmatched start-group tag: stream EOF");if(t.h==4){if(t.m!=e)throw Error("Unmatched end-group tag");break}Eu(t)}break;default:throw Zx(t.h,t.l)}}function oc(t,e,n){const i=t.g.l,r=Cs(t.g),s=t.g.g+r;let o=s-i;if(0>=o&&(t.g.l=s,n(e,t,void 0,void 0,void 0),o=s-t.g.g),o)throw Error(`Message parsing ended unexpectedly. Expected to read ${r} bytes, instead read ${r-o} bytes, either the data ended unexpectedly or the message misreported its own length`);return t.g.g=s,t.g.l=i,e}function j0(t){var e=Cs(t.g),n=t3(t=t.g,e);if(t=t.h,Gb){var i,r=t;(i=gd)||(i=gd=new TextDecoder("utf-8",{fatal:!0})),e=n+e,r=n===0&&e===r.length?r:r.subarray(n,e);try{var s=i.decode(r)}catch(a){if(Qc===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),Qc=!0}catch{Qc=!1}}throw!Qc&&(gd=void 0),a}}else{e=(s=n)+e,n=[];let a,l=null;for(;s<e;){var o=t[s++];128>o?n.push(o):224>o?s>=e?Xs():(a=t[s++],194>o||(192&a)!=128?(s--,Xs()):n.push((31&o)<<6|63&a)):240>o?s>=e-1?Xs():(a=t[s++],(192&a)!=128||o===224&&160>a||o===237&&160<=a||(192&(i=t[s++]))!=128?(s--,Xs()):n.push((15&o)<<12|(63&a)<<6|63&i)):244>=o?s>=e-2?Xs():(a=t[s++],(192&a)!=128||a-144+(o<<28)>>30||(192&(i=t[s++]))!=128||(192&(r=t[s++]))!=128?(s--,Xs()):(o=(7&o)<<18|(63&a)<<12|(63&i)<<6|63&r,o-=65536,n.push(55296+(o>>10&1023),56320+(1023&o)))):Xs(),8192<=n.length&&(l=ev(l,n),n.length=0)}s=ev(l,n)}return s}function r3(t){const e=Cs(t.g);return n3(t.g,e)}function Bh(t,e,n){var i=Cs(t.g);for(i=t.g.g+i;t.g.g<i;)n.push(e(t.g))}var eu=[];function ov(t){return t?/^\d+$/.test(t)?(kh(t),new av(wt,Jt)):null:tP||(tP=new av(0,0))}var av=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let tP;function lv(t){return t?/^-?\d+$/.test(t)?(kh(t),new cv(wt,Jt)):null:nP||(nP=new cv(0,0))}var cv=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let nP;function lh(t,e,n){for(;0<n||127<e;)t.g.push(127&e|128),e=(e>>>7|n<<25)>>>0,n>>>=7;t.g.push(e)}function ac(t,e){for(;127<e;)t.g.push(127&e|128),e>>>=7;t.g.push(e)}function zh(t,e){if(0<=e)ac(t,e);else{for(let n=0;9>n;n++)t.g.push(127&e|128),e>>=7;t.g.push(1)}}function $l(t,e){t.g.push(e>>>0&255),t.g.push(e>>>8&255),t.g.push(e>>>16&255),t.g.push(e>>>24&255)}function wa(t,e){e.length!==0&&(t.l.push(e),t.h+=e.length)}function bi(t,e,n){ac(t.g,8*e+n)}function Y0(t,e){return bi(t,e,2),e=t.g.end(),wa(t,e),e.push(t.h),e}function q0(t,e){var n=e.pop();for(n=t.h+t.g.length()-n;127<n;)e.push(127&n|128),n>>>=7,t.h++;e.push(n),t.h++}function Vh(t,e,n){bi(t,e,2),ac(t.g,n.length),wa(t,t.g.end()),wa(t,n)}function hm(t,e,n,i){n!=null&&(e=Y0(t,e),i(n,t),q0(t,e))}class Oa{constructor(e,n,i,r){this.g=e,this.h=n,this.l=i,this.pa=r}}function ai(t){return Array.prototype.slice.call(t)}function K0(t){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():t}var fr=K0(),uv=K0("0di"),yd=K0("2ex"),Z0=fr?(t,e)=>{t[fr]|=e}:(t,e)=>{t.g!==void 0?t.g|=e:Object.defineProperties(t,{g:{value:e,configurable:!0,writable:!0,enumerable:!1}})},ch=fr?(t,e)=>{t[fr]&=~e}:(t,e)=>{t.g!==void 0&&(t.g&=~e)};function En(t,e,n){return n?t|e:t&~e}var Gt=fr?t=>0|t[fr]:t=>0|t.g,ut=fr?t=>t[fr]:t=>t.g,Vt=fr?(t,e)=>(t[fr]=e,t):(t,e)=>(t.g!==void 0?t.g=e:Object.defineProperties(t,{g:{value:e,configurable:!0,writable:!0,enumerable:!1}}),t);function ka(t){return Z0(t,34),t}function iP(t,e){Vt(e,-14591&(0|t))}function fm(t,e){Vt(e,-14557&(34|t))}function s3(t){return(t=t>>14&1023)===0?536870912:t}var J0,lc={},o3={};function hv(t){return!(!t||typeof t!="object"||t.Ja!==o3)}function Q0(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)&&t.constructor===Object}function eg(t,e,n){if(t!=null){if(typeof t=="string")t=t?new Ur(t,Ea):vo();else if(t.constructor!==Ur)if(sc(t))t=t.length?new Ur(n?t:new Uint8Array(t),Ea):vo();else{if(!e)throw Error();t=void 0}}return t}function uh(t,e,n){if(!Array.isArray(t)||t.length)return!1;const i=Gt(t);return!!(1&i)||!(!e||!(Array.isArray(e)?e.includes(n):e.has(n)))&&(Vt(t,1|i),!0)}const fv=[];function gr(t){if(2&t)throw Error()}Vt(fv,55),J0=Object.freeze(fv);class hh{constructor(e,n,i){this.l=0,this.g=e,this.h=n,this.m=i}next(){if(this.l<this.g.length){const e=this.g[this.l++];return{done:!1,value:this.h?this.h.call(this.m,e):e}}return{done:!0,value:void 0}}[Symbol.iterator](){return new hh(this.g,this.h,this.m)}}let Ms,rP,sP;function a3(t,e){(e=Ms?e[Ms]:void 0)&&(t[Ms]=ai(e))}function l3(t,e){t.__closure__error__context__984382||(t.__closure__error__context__984382={}),t.__closure__error__context__984382.severity=e}function oP(){const t=Error();l3(t,"incident"),function(e){rc.setTimeout(()=>{throw e},0)}(t)}function dm(t){return l3(t=Error(t),"warning"),t}function Us(t){return t==null||typeof t=="number"?t:t==="NaN"||t==="Infinity"||t==="-Infinity"?Number(t):void 0}function c3(t){return t==null||typeof t=="boolean"?t:typeof t=="number"?!!t:void 0}Object.freeze(new class{}),Object.freeze(new class{});const aP=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Hh(t){const e=typeof t;return e==="number"?Number.isFinite(t):e==="string"&&aP.test(t)}function Ba(t){if(t==null)return t;if(typeof t=="string"){if(!t)return;t=+t}return typeof t=="number"&&Number.isFinite(t)?0|t:void 0}function lP(t){if(t==null)return t;if(typeof t=="string"){if(!t)return;t=+t}return typeof t=="number"&&Number.isFinite(t)?t>>>0:void 0}function dv(t){return t[0]!=="-"&&(20>t.length||t.length===20&&184467>Number(t.substring(0,6)))}function u3(t){return t[0]==="-"?20>t.length||t.length===20&&-922337<Number(t.substring(0,7)):19>t.length||t.length===19&&922337>Number(t.substring(0,6))}function tg(t){return t=Math.trunc(t),Number.isSafeInteger(t)||(oo(t),t=G0(wt,Jt)),t}function ng(t){var e=Math.trunc(Number(t));return Number.isSafeInteger(e)?String(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),u3(t)||(kh(t),t=e3()),t)}function fh(t){return t==null?t:Hh(t)?typeof t=="number"?tg(t):ng(t):void 0}function cc(t){if(typeof t!="string")throw Error();return t}function za(t){if(t!=null&&typeof t!="string")throw Error();return t}function lo(t){return t==null||typeof t=="string"?t:void 0}function ig(t,e,n,i){if(t!=null&&typeof t=="object"&&t.X===lc)return t;if(!Array.isArray(t))return n?2&i?(t=e[uv])?e=t:(ka((t=new e).s),e=e[uv]=t):e=new e:e=void 0,e;let r=n=Gt(t);return r===0&&(r|=32&i),r|=2&i,r!==n&&Vt(t,r),new e(t)}function cP(t,e,n){if(e){var i=!!i;if(!Hh(e=t))throw dm("int64");typeof e=="string"?i=ng(e):i?(i=Math.trunc(e),Number.isSafeInteger(i)?i=String(i):u3(e=String(i))?i=e:(oo(i),i=e3())):i=tg(e)}else i=fh(t);return typeof(n=(t=i)==null?n?0:void 0:t)=="string"&&(i=+n,Number.isSafeInteger(i))?i:n}let dh,rg,uP;function ph(t){switch(typeof t){case"boolean":return rg||(rg=[0,void 0,!0]);case"number":return 0<t?void 0:t===0?uP||(uP=[0,void 0]):[-t,void 0];case"string":return[0,t];case"object":return t}}function co(t,e){return h3(t,e[0],e[1])}function h3(t,e,n){if(t==null&&(t=dh),dh=void 0,t==null){var i=96;n?(t=[n],i|=512):t=[],e&&(i=-16760833&i|(1023&e)<<14)}else{if(!Array.isArray(t))throw Error("narr");if(2048&(i=Gt(t)))throw Error("farr");if(64&i)return t;if(i|=64,n&&(i|=512,n!==t[0]))throw Error("mid");e:{const r=(n=t).length;if(r){const s=r-1;if(Q0(n[s])){if(1024<=(e=s-(+!!(512&(i|=256))-1)))throw Error("pvtlmt");i=-16760833&i|(1023&e)<<14;break e}}if(e){if(1024<(e=Math.max(e,r-(+!!(512&i)-1))))throw Error("spvt");i=-16760833&i|(1023&e)<<14}}}return Vt(t,i),t}const hP={};let fP=function(){try{return O0(new class extends Map{constructor(){super()}}),!1}catch{return!0}}();class xd{constructor(){this.g=new Map}get(e){return this.g.get(e)}set(e,n){return this.g.set(e,n),this.size=this.g.size,this}delete(e){return e=this.g.delete(e),this.size=this.g.size,e}clear(){this.g.clear(),this.size=this.g.size}has(e){return this.g.has(e)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(e,n){return this.g.forEach(e,n)}[Symbol.iterator](){return this.entries()}}const dP=fP?(Object.setPrototypeOf(xd.prototype,Map.prototype),Object.defineProperties(xd.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),xd):class extends Map{constructor(){super()}};function pv(t){return t}function Sd(t){if(2&t.N)throw Error("Cannot mutate an immutable Map")}var Ri=class extends dP{constructor(t,e,n=pv,i=pv){super();let r=Gt(t);r|=64,Vt(t,r),this.N=r,this.U=e,this.S=n,this.Z=this.U?pP:i;for(let s=0;s<t.length;s++){const o=t[s],a=n(o[0],!1,!0);let l=o[1];e?l===void 0&&(l=null):l=i(o[1],!1,!0,void 0,void 0,r),super.set(a,l)}}oa(t=mv){if(this.size!==0)return this.Y(t)}Y(t=mv){const e=[],n=super.entries();for(var i;!(i=n.next()).done;)(i=i.value)[0]=t(i[0]),i[1]=t(i[1]),e.push(i);return e}clear(){Sd(this),super.clear()}delete(t){return Sd(this),super.delete(this.S(t,!0,!1))}entries(){var t=this.na();return new hh(t,mP,this)}keys(){return this.Ia()}values(){var t=this.na();return new hh(t,Ri.prototype.get,this)}forEach(t,e){super.forEach((n,i)=>{t.call(e,this.get(i),i,this)})}set(t,e){return Sd(this),(t=this.S(t,!0,!1))==null?this:e==null?(super.delete(t),this):super.set(t,this.Z(e,!0,!0,this.U,!1,this.N))}Oa(t){const e=this.S(t[0],!1,!0);t=t[1],t=this.U?t===void 0?null:t:this.Z(t,!1,!0,void 0,!1,this.N),super.set(e,t)}has(t){return super.has(this.S(t,!1,!1))}get(t){t=this.S(t,!1,!1);const e=super.get(t);if(e!==void 0){var n=this.U;return n?((n=this.Z(e,!1,!0,n,this.ta,this.N))!==e&&super.set(t,n),n):e}}na(){return Array.from(super.keys())}Ia(){return super.keys()}[Symbol.iterator](){return this.entries()}};function pP(t,e,n,i,r,s){return t=ig(t,i,n,s),r&&(t=Wh(t)),t}function mv(t){return t}function mP(t){return[t,this.get(t)]}let gP;function gv(){return gP||(gP=new Ri(ka([]),void 0,void 0,void 0,hP))}function sg(t,e,n,i,r){if(t!=null){if(Array.isArray(t))t=uh(t,void 0,0)?void 0:r&&2&Gt(t)?t:Gh(t,e,n,i!==void 0,r);else if(Q0(t)){const s={};for(let o in t)s[o]=sg(t[o],e,n,i,r);t=s}else t=e(t,i);return t}}function Gh(t,e,n,i,r){const s=i||n?Gt(t):0;i=i?!!(32&s):void 0;const o=ai(t);for(let a=0;a<o.length;a++)o[a]=sg(o[a],e,n,i,r);return n&&(a3(o,t),n(s,o)),o}function _P(t){return sg(t,og,void 0,void 0,!1)}function og(t){return t.X===lc?t.toJSON():t instanceof Ri?t.oa(_P):function(e){switch(typeof e){case"number":return isFinite(e)?e:String(e);case"boolean":return e?1:0;case"object":if(e)if(Array.isArray(e)){if(uh(e,void 0,0))return}else{if(sc(e))return nv(e);if(e instanceof Ur){const n=e.g;return n==null?"":typeof n=="string"?n:e.g=nv(n)}if(e instanceof Ri)return e.oa()}}return e}(t)}function pm(t,e,n=fm){if(t!=null){if(jx&&t instanceof Uint8Array)return e?t:new Uint8Array(t);if(Array.isArray(t)){var i=Gt(t);return 2&i||(e&&(e=i===0||!!(32&i)&&!(64&i||!(16&i))),t=e?Vt(t,-12293&(34|i)):Gh(t,pm,4&i?fm:n,!0,!0)),t}return t.X===lc?(n=t.s,t=2&(i=ut(n))?t:ag(t,n,i,!0)):t instanceof Ri&&!(2&t.N)&&(n=ka(t.Y(pm)),t=new Ri(n,t.U,t.S,t.Z)),t}}function ag(t,e,n,i){return t=t.constructor,dh=e=f3(e,n,i),e=new t(e),dh=void 0,e}function f3(t,e,n){const i=n||2&e?fm:iP,r=!!(32&e);return t=function(s,o,a){const l=ai(s);var c=l.length;const h=256&o?l[c-1]:void 0;for(c+=h?-1:0,o=512&o?1:0;o<c;o++)l[o]=a(l[o]);if(h){o=l[o]={};for(const d in h)o[d]=a(h[d])}return a3(l,s),l}(t,e,s=>pm(s,r,i)),Z0(t,32|(n?2:0)),t}function Wh(t){const e=t.s,n=ut(e);return 2&n?ag(t,e,n,!1):t}function d3(t,e,n,i){return!(4&e)||n!=null}function Rs(t,e){return _r(t=t.s,ut(t),e)}function _v(t,e,n,i){if(!(0>(e=i+(+!!(512&e)-1))||e>=t.length||e>=n))return t[e]}function _r(t,e,n,i){if(n===-1)return null;const r=s3(e);if(!(n>=r)){var s=t.length;return i&&256&e&&(i=t[s-1][n])!=null?(_v(t,e,r,n)&&yd!=null&&(4<=(e=(t=sP??(sP={}))[yd]||0)||(t[yd]=e+1,oP())),i):_v(t,e,r,n)}return 256&e?t[t.length-1][n]:void 0}function vt(t,e,n,i){const r=t.s;let s=ut(r);return gr(s),At(r,s,e,n,i),t}function At(t,e,n,i,r){const s=s3(e);if(n>=s||r){let o=e;if(256&e)r=t[t.length-1];else{if(i==null)return o;r=t[s+(+!!(512&e)-1)]={},o|=256}return r[n]=i,n<s&&(t[n+(+!!(512&e)-1)]=void 0),o!==e&&Vt(t,o),o}return t[n+(+!!(512&e)-1)]=i,256&e&&n in(t=t[t.length-1])&&delete t[n],e}function Va(t,e,n,i,r){var s=2&e;let o=_r(t,e,n,r);Array.isArray(o)||(o=J0);const a=!(2&i);i=!(1&i);const l=!!(32&e);let c=Gt(o);return c!==0||!l||s||a?1&c||(c|=1,Vt(o,c)):(c|=33,Vt(o,c)),s?(t=!1,2&c||(ka(o),t=!!(4&c)),(i||t)&&Object.freeze(o)):(s=!!(2&c)||!!(2048&c),i&&s?(o=ai(o),i=1,l&&!a&&(i|=32),Vt(o,i),At(t,e,n,o,r)):a&&32&c&&!s&&ch(o,32)),o}function wu(t,e){t=t.s;let n=ut(t);const i=_r(t,n,e),r=Us(i);return r!=null&&r!==i&&At(t,n,e,r),r}function p3(t){t=t.s;let e=ut(t);const n=_r(t,e,1),i=eg(n,!0,!!(34&e));return i!=null&&i!==n&&At(t,e,1,i),i}function Jo(t,e,n){const i=t.s;let r=ut(i);const s=2&r?1:2;let o=m3(i,r,e);var a=Gt(o);if(d3(t,a,void 0)){(4&a||Object.isFrozen(o))&&(o=ai(o),a=yo(a,r),r=At(i,r,e,o));let l=t=0;for(;t<o.length;t++){const c=n(o[t]);c!=null&&(o[l++]=c)}l<t&&(o.length=l),a=En(a=g3(a,r),20,!0),a=En(a,4096,!1),a=En(a,8192,!1),Vt(o,a),2&a&&Object.freeze(o)}return Ml(a)||(n=a,(a=(t=s===1||s===4&&!!(32&a))?En(a,2,!0):Ta(a,r,!1))!==n&&Vt(o,a),t&&Object.freeze(o)),s===2&&Ml(a)&&(o=ai(o),a=Ta(a=yo(a,r),r,!1),Vt(o,a),At(i,r,e,o)),o}function m3(t,e,n){return t=_r(t,e,n),Array.isArray(t)?t:J0}function g3(t,e){return t===0&&(t=yo(t,e)),En(t,1,!0)}function Ml(t){return!!(2&t)&&!!(4&t)||!!(2048&t)}function _3(t){t=ai(t);for(let e=0;e<t.length;e++){const n=t[e]=ai(t[e]);Array.isArray(n[1])&&(n[1]=ka(n[1]))}return t}function mh(t,e,n){{const a=t.s;let l=ut(a);if(gr(l),n==null)At(a,l,e);else{var i,r=Gt(n),s=r,o=!!(2&r)||Object.isFrozen(n);if((i=!o)&&(i=!1),d3(t,r))for(r=21,o&&(n=ai(n),s=0,r=Ta(r=yo(r,l),l,!0)),t=0;t<n.length;t++)n[t]=cc(n[t]);i&&(n=ai(n),s=0,r=Ta(r=yo(r,l),l,!0)),r!==s&&Vt(n,r),At(a,l,e,n)}}}function mm(t,e,n,i){t=t.s;let r=ut(t);gr(r),At(t,r,e,(i==="0"?Number(n)===0:n===i)?void 0:n)}function uc(t,e,n,i){const r=ut(t);gr(r),t=Va(t,r,e,2),i=n(i,!!(4&(e=Gt(t)))&&!!(4096&e)),t.push(i)}function vP(t){return t}function Md(t,e){return lg(t=t.s,ut(t),tS)===e?e:-1}function lg(t,e,n){let i=0;for(let r=0;r<n.length;r++){const s=n[r];_r(t,e,s)!=null&&(i!==0&&(e=At(t,e,i)),i=s)}return i}function cg(t,e,n,i){let r=ut(t);gr(r);const s=_r(t,r,n,i);let o;if(s!=null&&s.X===lc)return(e=Wh(s))!==s&&At(t,r,n,e,i),e.s;if(Array.isArray(s)){const a=Gt(s);o=2&a?f3(s,a,!1):s,o=co(o,e)}else o=co(void 0,e);return o!==s&&At(t,r,n,o,i),o}function v3(t,e,n,i){t=t.s;let r=ut(t);const s=_r(t,r,n,i);return(e=ig(s,e,!1,r))!==s&&e!=null&&At(t,r,n,e,i),e}function nt(t,e,n,i=!1){if((e=v3(t,e,n,i))==null)return e;t=t.s;let r=ut(t);if(!(2&r)){const s=Wh(e);s!==e&&At(t,r,n,e=s,i)}return e}function y3(t,e,n,i,r,s){var o=2,a=!!(2&e);o=a?1:o,r=!!r,s&&(s=!a),a=m3(t,e,i);var l=Gt(a);const c=!!(4&l);if(!c){var h=a,d=e;const f=!!(2&(l=g3(l,e)));f&&(d=En(d,2,!0));let g=!f,p=!0,y=0,m=0;for(;y<h.length;y++){const u=ig(h[y],n,!1,d);if(u instanceof n){if(!f){const _=!!(2&Gt(u.s));g&&(g=!_),p&&(p=_)}h[m++]=u}}m<y&&(h.length=m),l=En(l,4,!0),l=En(l,16,p),l=En(l,8,g),Vt(h,l),f&&Object.freeze(h)}if(s&&!(8&l||!a.length&&(o===1||o===4&&32&l))){for(Ml(l)&&(a=ai(a),l=yo(l,e),e=At(t,e,i,a)),n=a,s=l,h=0;h<n.length;h++)(l=n[h])!==(d=Wh(l))&&(n[h]=d);s=En(s,8,!0),s=En(s,16,!n.length),Vt(n,s),l=s}return Ml(l)||(n=l,(l=(s=o===1||o===4&&!!(32&l))?En(l,!a.length||16&l&&(!c||32&l)?2:2048,!0):Ta(l,e,r))!==n&&Vt(a,l),s&&Object.freeze(a)),o===2&&Ml(l)&&(a=ai(a),l=Ta(l=yo(l,e),e,r),Vt(a,l),At(t,e,i,a)),a}function Wr(t,e,n){t=t.s;const i=ut(t);return y3(t,i,e,n,!1,!(2&i))}function Le(t,e,n,i,r){return i==null&&(i=void 0),vt(t,n,i,r)}function El(t,e,n,i){i==null&&(i=void 0),t=t.s;let r=ut(t);gr(r),(n=lg(t,r,n))&&n!==e&&i!=null&&(r=At(t,r,n)),At(t,r,e,i)}function yo(t,e){return t=En(t,2,!!(2&e)),t=En(t,32,!0),En(t,2048,!1)}function Ta(t,e,n){return 32&e&&n||(t=En(t,32,!1)),t}function gh(t,e,n,i){t=t.s;const r=ut(t);gr(r),e=y3(t,r,n,e,!0),n=i??new n,e.push(n),2&Gt(n.s)?ch(e,8):ch(e,16)}function wi(t,e){return Ba(Rs(t,e))}function ji(t,e){return t??e}function $t(t,e){return ji(wu(t,e),0)}function dr(t,e){return ji(lo(Rs(t,e)),"")}function jl(t,e,n){if(n!=null&&typeof n!="boolean")throw t=typeof n,Error(`Expected boolean but got ${t!="object"?t:n?Array.isArray(n)?"array":t:"null"}: ${n}`);vt(t,e,n)}function pr(t,e,n){if(n!=null){if(typeof n!="number"||!Number.isFinite(n))throw dm("int32");n|=0}vt(t,e,n)}function Te(t,e,n){if(n!=null&&typeof n!="number")throw Error(`Value of float/double field must be a number, found ${typeof n}: ${n}`);vt(t,e,n)}function qi(t,e,n){e.g?e.m(t,e.g,e.h,n,!0):e.m(t,e.h,n,!0)}Ri.prototype.toJSON=void 0,Ri.prototype.Ja=o3;var Ee=class{constructor(t,e){this.s=h3(t,e)}toJSON(){return x3(this,Gh(this.s,og,void 0,void 0,!1),!0)}l(){var t=wL;return t.g?t.l(this,t.g,t.h,!0):t.l(this,t.h,t.defaultValue,!0)}clone(){const t=this.s;return ag(this,t,ut(t),!1)}P(){return!!(2&Gt(this.s))}};function x3(t,e,n){var i=$b?void 0:t.constructor.B;const r=ut(n?t.s:e);if(!(t=e.length))return e;let s,o;if(Q0(n=e[t-1])){e:{var a=n;let h={},d=!1;for(var l in a){let f=a[l];if(Array.isArray(f)){let g=f;(uh(f,i,+l)||hv(f)&&f.size===0)&&(f=null),f!=g&&(d=!0)}f!=null?h[l]=f:d=!0}if(d){for(var c in h){a=h;break e}a=null}}a!=n&&(s=!0),t--}for(l=+!!(512&r)-1;0<t&&(n=e[c=t-1],c-=l,n==null||uh(n,i,c)||hv(n)&&n.size===0);t--)o=!0;return(s||o)&&(e=Array.prototype.slice.call(e,0,t),a&&e.push(a)),e}function S3(t){return Array.isArray(t)?t[0]instanceof Oa?t:[bP,t]:[t,void 0]}function Ha(t,e){if(Array.isArray(e)){var n=Gt(e);if(4&n)return e;for(var i=0,r=0;i<e.length;i++){const s=t(e[i]);s!=null&&(e[r++]=s)}return r<i&&(e.length=r),Vt(e,-12289&(5|n)),2&n&&Object.freeze(e),e}}Ee.prototype.X=lc,Ee.prototype.toString=function(){return x3(this,this.s,!1).toString()};const vv=Symbol();function ug(t){let e=t[vv];if(!e){const n=E3(t),i=fg(t),r=i.l;e=r?(s,o)=>r(s,o,i):(s,o)=>{for(;i3(o)&&o.h!=4;){var a=o.m,l=i[a];if(!l){var c=i.ea;c&&(c=c[a])&&(l=i[a]=yP(c))}l&&l(o,s,a)||(a=(l=o).l,Eu(l),l.ia?l=void 0:(c=l.g.g-a,l.g.g=a,l=n3(l.g,c)),a=s,l&&(Ms||(Ms=Symbol()),(c=a[Ms])?c.push(l):a[Ms]=[l]))}n===M3||n===Tu||n.j||(s[rP||(rP=Symbol())]=n)},t[vv]=e}return e}function yP(t){const e=(t=S3(t))[0].g;if(t=t[1]){const n=ug(t),i=fg(t).T;return(r,s,o)=>e(r,s,o,i,n)}return e}class Ed{}let M3,Tu;const wl=Symbol();function xP(t,e,n){const i=n[1];let r;if(i){const s=i[wl];r=s?s.T:ph(i[0]),t[e]=s??i}r&&r===rg?(t.g||(t.g=new Set)).add(e):n[0]&&(t.h||(t.h=new Set)).add(e)}function yv(t,e){return[t.l,!e||0<e[0]?void 0:e]}function E3(t){var e=t[wl];if(e)return e;if(!(e=hg(t,t[wl]=new Ed,yv,yv,xP)).ea&&!e.h&&!e.g){let n=!0;for(let i in e)isNaN(i)||(n=!1);n?(ph(t[0])===rg?Tu?e=Tu:((e=new Ed).T=ph(!0),e=Tu=e):e=M3||(M3=new Ed),e=t[wl]=e):e.j=!0}return e}function SP(t,e,n){t[e]=n}function hg(t,e,n,i,r=SP){e.T=ph(t[0]);let s=0;var o=t[++s];o&&o.constructor===Object&&(e.ea=o,typeof(o=t[++s])=="function"&&(e.l=o,e.m=t[++s],o=t[++s]));const a={};for(;Array.isArray(o)&&typeof o[0]=="number"&&0<o[0];){for(var l=0;l<o.length;l++)a[o[l]]=o;o=t[++s]}for(l=1;o!==void 0;){let d;typeof o=="number"&&(l+=o,o=t[++s]);var c=void 0;if(o instanceof Oa?d=o:(d=PP,s--),d.pa){o=t[++s],c=t;var h=s;typeof o=="function"&&(o=o(),c[h]=o),c=o}for(h=l+1,typeof(o=t[++s])=="number"&&0>o&&(h-=o,o=t[++s]);l<h;l++){const f=a[l];r(e,l,c?i(d,c,f):n(d,f))}}return e}const xv=Symbol();function w3(t){let e=t[xv];if(!e){const n=Xh(t);e=(i,r)=>A3(i,r,n),t[xv]=e}return e}const gm=Symbol();function MP(t){return t.h}function EP(t,e){let n,i;const r=t.h;return(s,o,a)=>r(s,o,a,i||(i=Xh(e).T),n||(n=w3(e)))}function Xh(t){let e=t[gm];return e||(e=hg(t,t[gm]={},MP,EP),T3(t),e)}const _m=Symbol();function wP(t,e){const n=t.g;return e?(i,r,s)=>n(i,r,s,e):n}function TP(t,e,n){const i=t.g;let r,s;return(o,a,l)=>i(o,a,l,s||(s=fg(e).T),r||(r=ug(e)),n)}function fg(t){let e=t[_m];return e||(E3(t),e=hg(t,t[_m]={},wP,TP),T3(t),e)}function T3(t){_m in t&&wl in t&&gm in t&&(t.length=0)}function Sv(t,e){var n=t[e];if(n)return n;if((n=t.ea)&&(n=n[e])){var i=(n=S3(n))[0].h;if(n=n[1]){const r=w3(n),s=Xh(n).T;n=(n=t.m)?n(s,r):(o,a,l)=>i(o,a,l,s,r)}else n=i;return t[e]=n}}function A3(t,e,n){for(var i=ut(t),r=+!!(512&i)-1,s=t.length,o=512&i?1:0,a=s+(256&i?-1:0);o<a;o++){const l=t[o];if(l==null)continue;const c=o-r,h=Sv(n,c);h&&h(e,l,c)}if(256&i){i=t[s-1];for(let l in i)r=+l,Number.isNaN(r)||(s=i[l])!=null&&(a=Sv(n,r))&&a(e,s,r)}if(t=Ms?t[Ms]:void 0)for(wa(e,e.g.end()),n=0;n<t.length;n++)wa(e,k0(t[n])||Oh())}function Yn(t,e){return new Oa(t,e,!1,!1)}function Ga(t,e){return new Oa(t,e,!0,!1)}function $h(t,e){return new Oa(t,e,!1,!0)}function qn(t,e,n){At(t,ut(t),e,n)}var AP=$h(function(t,e,n,i,r){return t.h===2&&(t=oc(t,co([void 0,void 0],i),r),gr(i=ut(e)),(r=_r(e,i,n))instanceof Ri?2&r.N?((r=r.Y()).push(t),At(e,i,n,r)):r.Oa(t):Array.isArray(r)?(2&Gt(r)&&At(e,i,n,r=_3(r)),r.push(t)):At(e,i,n,[t]),!0)},function(t,e,n,i,r){if(e instanceof Ri)e.forEach((s,o)=>{hm(t,n,co([o,s],i),r)});else if(Array.isArray(e))for(let s=0;s<e.length;s++){const o=e[s];Array.isArray(o)&&hm(t,n,co(o,i),r)}});function C3(t,e,n){e:if(e!=null){if(Hh(e)){if(typeof e=="string"){e=ng(e);break e}if(typeof e=="number"){e=tg(e);break e}}e=void 0}e!=null&&(typeof e=="string"&&lv(e),e!=null&&(bi(t,n,0),typeof e=="number"?(t=t.g,oo(e),lh(t,wt,Jt)):(n=lv(e),lh(t.g,n.h,n.g))))}function R3(t,e,n){(e=Ba(e))!=null&&e!=null&&(bi(t,n,0),zh(t.g,e))}function b3(t,e,n){(e=c3(e))!=null&&(bi(t,n,0),t.g.g.push(e?1:0))}function P3(t,e,n){(e=lo(e))!=null&&Vh(t,n,Gx(e))}function jh(t,e,n,i,r){hm(t,n,e instanceof Ee?e.s:Array.isArray(e)?co(e,i):void 0,r)}function L3(t,e,n){(e=e==null||typeof e=="string"||sc(e)||e instanceof Ur?e:void 0)!=null&&Vh(t,n,z0(e).buffer)}function I3(t,e,n){return(t.h===5||t.h===2)&&(e=Va(e,ut(e),n,2,!1),t.h==2?Bh(t,um,e):e.push(um(t.g)),!0)}var Qt,Fr=Yn(function(t,e,n){if(t.h!==1)return!1;var i=t.g;t=cm(i);const r=cm(i);i=2*(r>>31)+1;const s=r>>>20&2047;return t=4294967296*(1048575&r)+t,qn(e,n,s==2047?t?NaN:1/0*i:s==0?i*Math.pow(2,-1074)*t:i*Math.pow(2,s-1075)*(t+4503599627370496)),!0},function(t,e,n){(e=Us(e))!=null&&(bi(t,n,1),t=t.g,(n=Qx||(Qx=new DataView(new ArrayBuffer(8)))).setFloat64(0,+e,!0),wt=n.getUint32(0,!0),Jt=n.getUint32(4,!0),$l(t,wt),$l(t,Jt))}),on=Yn(function(t,e,n){return t.h===5&&(qn(e,n,um(t.g)),!0)},function(t,e,n){(e=Us(e))!=null&&(bi(t,n,5),t=t.g,H0(e),$l(t,wt))}),CP=Ga(I3,function(t,e,n){if((e=Ha(Us,e))!=null)for(let o=0;o<e.length;o++){var i=t,r=n,s=e[o];s!=null&&(bi(i,r,5),i=i.g,H0(s),$l(i,wt))}}),dg=Ga(I3,function(t,e,n){if((e=Ha(Us,e))!=null&&e.length){bi(t,n,2),ac(t.g,4*e.length);for(let i=0;i<e.length;i++)n=t.g,H0(e[i]),$l(n,wt)}}),bs=Yn(function(t,e,n){return t.h===0&&(qn(e,n,X0(t.g,G0)),!0)},C3),wd=Yn(function(t,e,n){return t.h===0&&(qn(e,n,(t=X0(t.g,G0))===0?void 0:t),!0)},C3),RP=Yn(function(t,e,n){return t.h===0&&(qn(e,n,X0(t.g,lm)),!0)},function(t,e,n){e:if(e!=null){if(Hh(e)){if(typeof e=="string"){var i=Math.trunc(Number(e));Number.isSafeInteger(i)&&0<=i?e=String(i):((i=e.indexOf("."))!==-1&&(e=e.substring(0,i)),dv(e)||(kh(e),e=ah(wt,Jt)));break e}if(typeof e=="number"){e=0<=(e=Math.trunc(e))&&Number.isSafeInteger(e)?e:function(r){if(0>r){oo(r);const s=ah(wt,Jt);return r=Number(s),Number.isSafeInteger(r)?r:s}return dv(String(r))?r:(oo(r),lm(wt,Jt))}(e);break e}}e=void 0}e!=null&&(typeof e=="string"&&ov(e),e!=null&&(bi(t,n,0),typeof e=="number"?(t=t.g,oo(e),lh(t,wt,Jt)):(n=ov(e),lh(t.g,n.h,n.g))))}),Wt=Yn(function(t,e,n){return t.h===0&&(qn(e,n,As(t.g)),!0)},R3),Yh=Ga(function(t,e,n){return(t.h===0||t.h===2)&&(e=Va(e,ut(e),n,2,!1),t.h==2?Bh(t,As,e):e.push(As(t.g)),!0)},function(t,e,n){if((e=Ha(Ba,e))!=null&&e.length){n=Y0(t,n);for(let i=0;i<e.length;i++)zh(t.g,e[i]);q0(t,n)}}),Aa=Yn(function(t,e,n){return t.h===0&&(qn(e,n,(t=As(t.g))===0?void 0:t),!0)},R3),Yt=Yn(function(t,e,n){return t.h===0&&(qn(e,n,$0(t.g)),!0)},b3),Tl=Yn(function(t,e,n){return t.h===0&&(qn(e,n,(t=$0(t.g))===!1?void 0:t),!0)},b3),Tn=Ga(function(t,e,n){return t.h===2&&(uc(e,n,vP,t=j0(t)),!0)},function(t,e,n){if((e=Ha(lo,e))!=null)for(let o=0;o<e.length;o++){var i=t,r=n,s=e[o];s!=null&&Vh(i,r,Gx(s))}}),Ps=Yn(function(t,e,n){return t.h===2&&(qn(e,n,(t=j0(t))===""?void 0:t),!0)},P3),pt=Yn(function(t,e,n){return t.h===2&&(qn(e,n,j0(t)),!0)},P3),bP=$h(function(t,e,n,i,r){return t.h===2&&(oc(t,cg(e,i,n,!0),r),!0)},jh),PP=$h(function(t,e,n,i,r){return t.h===2&&(oc(t,cg(e,i,n),r),!0)},jh);Qt=new Oa(function(t,e,n,i,r){if(t.h!==2)return!1;i=co(void 0,i);let s=ut(e);gr(s);let o=Va(e,s,n,3);return s=ut(e),4&Gt(o)&&(o=ai(o),Vt(o,-2079&(1|Gt(o))),At(e,s,n,o)),o.push(i),oc(t,i,r),!0},function(t,e,n,i,r){if(Array.isArray(e))for(let s=0;s<e.length;s++)jh(t,e[s],n,i,r)},!0,!0);var mt=$h(function(t,e,n,i,r,s){if(t.h!==2)return!1;let o=ut(e);return gr(o),(s=lg(e,o,s))&&n!==s&&At(e,o,s),oc(t,e=cg(e,i,n),r),!0},jh),D3=Yn(function(t,e,n){return t.h===2&&(qn(e,n,r3(t)),!0)},L3),LP=Ga(function(t,e,n){return(t.h===0||t.h===2)&&(e=Va(e,ut(e),n,2,!1),t.h==2?Bh(t,Cs,e):e.push(Cs(t.g)),!0)},function(t,e,n){if((e=Ha(lP,e))!=null)for(let o=0;o<e.length;o++){var i=t,r=n,s=e[o];s!=null&&(bi(i,r,0),ac(i.g,s))}}),mr=Yn(function(t,e,n){return t.h===0&&(qn(e,n,As(t.g)),!0)},function(t,e,n){(e=Ba(e))!=null&&(e=parseInt(e,10),bi(t,n,0),zh(t.g,e))}),IP=Ga(function(t,e,n){return(t.h===0||t.h===2)&&(e=Va(e,ut(e),n,2,!1),t.h==2?Bh(t,eP,e):e.push(As(t.g)),!0)},function(t,e,n){if((e=Ha(Ba,e))!=null&&e.length){n=Y0(t,n);for(let i=0;i<e.length;i++)zh(t.g,e[i]);q0(t,n)}});class DP{constructor(e,n){this.h=e,this.g=n,this.l=nt,this.m=Le,this.defaultValue=void 0}}function Ki(t,e){return new DP(t,e)}function Fs(t,e){return(n,i)=>{if(eu.length){const s=eu.pop();s.o(i),vd(s.g,n,i),n=s}else n=new class{constructor(s,o){if(sv.length){const a=sv.pop();vd(a,s,o),s=a}else s=new class{constructor(a,l){this.h=null,this.m=!1,this.g=this.l=this.j=0,vd(this,a,l)}clear(){this.h=null,this.m=!1,this.g=this.l=this.j=0,this.ca=!1}}(s,o);this.g=s,this.l=this.g.g,this.h=this.m=-1,this.o(o)}o({ia:s=!1}={}){this.ia=s}}(n,i);try{const s=new t,o=s.s;ug(e)(o,n);var r=s}finally{n.g.clear(),n.m=-1,n.h=-1,100>eu.length&&eu.push(n)}return r}}function qh(t){return function(){const e=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const o=this.g;return this.g=[],o}}}};A3(this.s,e,Xh(t)),wa(e,e.g.end());const n=new Uint8Array(e.h),i=e.l,r=i.length;let s=0;for(let o=0;o<r;o++){const a=i[o];n.set(a,s),s+=a.length}return e.l=[n],n}}var Mv=class extends Ee{constructor(t){super(t)}},N3=[0,Ps,Yn(function(t,e,n){return t.h===2&&(qn(e,n,(t=r3(t))===vo()?void 0:t),!0)},function(t,e,n){if(e!=null){if(e instanceof Ee){const i=e.Qa;return void(i&&(e=i(e),e!=null&&Vh(t,n,z0(e).buffer)))}if(Array.isArray(e))return}L3(t,e,n)})],NP=[0,pt],U3=[0,Wt,mr,Yt,-1,Yh,mr,-1],UP=[0,Yt,-1],F3=class extends Ee{constructor(){super()}};F3.B=[6];var O3=[0,Yt,pt,Yt,mr,-1,IP,pt,-1,UP,mr],k3=[0,pt,-2],Ev=class extends Ee{constructor(){super()}},B3=[0],z3=[0,Wt,Yt,-4],li=class extends Ee{constructor(t){super(t,2)}},Lt={},FP=[-2,Lt,Yt];Lt[336783863]=[0,pt,Yt,-1,Wt,[0,[1,2,3,4,5,6],mt,B3,mt,O3,mt,k3,mt,z3,mt,U3,mt,[0,pt]],NP,Yt,[0,[1,3],[2,4],mt,[0,Yh],-1,mt,[0,Tn],-1,Qt,[0,pt,-1]],pt];var OP=[0,Ps,Tl],V3=[0,wd,-1,Tl,-3,wd,Yh,Ps,Aa,wd,-1,Tl,Aa,Tl,-2,Ps],hc=[-1,{}],H3=[0,pt,1,hc],G3=[0,pt,Tn,hc];function hi(t,e){mm(t,2,za(e),"")}function xt(t,e){uc(t.s,3,cc,e)}function Je(t,e){uc(t.s,4,cc,e)}var Cn=class extends Ee{constructor(t){super(t,500)}o(t){return Le(this,0,7,t)}};Cn.B=[3,4,5,6,8,13,17,1005];var kP=[-500,Ps,-1,Tn,-3,FP,Qt,N3,Aa,-1,H3,G3,Qt,OP,Ps,V3,Aa,Tn,987,Tn],BP=[0,Ps,-1,hc],zP=[-500,pt,-1,[-1,{}],998,pt],VP=[-500,pt,Tn,-1,[-2,{},Yt],997,Tn,-1],HP=[-500,pt,Tn,hc,998,Tn];function fi(t,e){gh(t,1,Cn,e)}function Ct(t,e){uc(t.s,10,cc,e)}function rt(t,e){uc(t.s,15,cc,e)}var Nn=class extends Ee{constructor(t){super(t,500)}o(t){return Le(this,0,1001,t)}};Nn.B=[1,6,7,9,10,15,16,17,14,1002];var W3=[-500,Qt,kP,4,Qt,zP,Qt,VP,Aa,Qt,HP,Tn,Aa,H3,G3,Qt,BP,Tn,-2,V3,Ps,-1,Tl,979,hc,Qt,N3],GP=Fs(Nn,W3);Nn.prototype.g=qh(W3);var WP=[0,Qt,[0,Wt,-2]],XP=class extends Ee{constructor(t){super(t)}},$P=[0,Wt,on,pt,-1],pg=class extends Ee{constructor(t){super(t)}g(){return Wr(this,XP,1)}};pg.B=[1];var X3=[0,Qt,$P],Kh=Fs(pg,X3),jP=[0,Wt,on],YP=[0,Wt,-1,WP],qP=class extends Ee{constructor(t){super(t)}},KP=[0,Wt,-3],ZP=[0,on,-3],JP=class extends Ee{constructor(t){super(t)}},QP=[0,on,-1,pt,on],Au=class extends Ee{constructor(t){super(t)}h(){return nt(this,qP,2)}g(){return Wr(this,JP,5)}};Au.B=[5];var eL=[0,mr,KP,ZP,YP,Qt,QP],$3=class extends Ee{constructor(t){super(t)}};$3.B=[1,2,3,8,9];var j3=Fs($3,[0,Tn,Yh,dg,eL,pt,-1,bs,Qt,jP,Tn,bs]),Y3=class extends Ee{constructor(t){super(t)}},tL=[0,on,-4],q3=class extends Ee{constructor(t){super(t)}};q3.B=[1];var la=Fs(q3,[0,Qt,tL]),K3=class extends Ee{constructor(t){super(t)}},nL=[0,on,-4],Z3=class extends Ee{constructor(t){super(t)}};Z3.B=[1];var fc=Fs(Z3,[0,Qt,nL]),J3=class extends Ee{constructor(t){super(t)}};J3.B=[3];var iL=[0,Wt,-1,dg,mr],Q3=class extends Ee{constructor(){super()}};Q3.prototype.g=qh([0,on,-4,bs]);var rL=class extends Ee{constructor(t){super(t)}},sL=[0,1,Wt,pt,X3],eS=class extends Ee{constructor(t){super(t)}};eS.B=[1];var oL=Fs(eS,[0,Qt,sL,bs]),vm=class extends Ee{constructor(t){super(t)}};vm.B=[1];var aL=class extends Ee{constructor(t){super(t)}qa(){const t=p3(this);return t??vo()}},lL=class extends Ee{constructor(t){super(t)}},tS=[1,2],cL=[0,tS,mt,[0,dg],mt,[0,D3],Wt,pt],nS=class extends Ee{constructor(t){super(t)}};nS.B=[1];var uL=Fs(nS,[0,Qt,cL,bs]),Zh=class extends Ee{constructor(t){super(t)}};Zh.B=[4,5];var iS=[0,pt,Wt,on,Tn,-1],wv=class extends Ee{constructor(t){super(t)}},hL=[0,Yt,-1],Tv=class extends Ee{constructor(t){super(t)}},Cu=[1,2,3,4,5],_h=class extends Ee{constructor(t){super(t)}g(){return p3(this)!=null}h(){return lo(Rs(this,2))!=null}},rS=[0,D3,pt,[0,Wt,bs,-1],[0,RP,bs]],It=class extends Ee{constructor(t){super(t)}g(){return c3(Rs(this,2))??!1}},qt=[0,rS,Yt,[0,Cu,mt,z3,mt,O3,mt,U3,mt,B3,mt,k3],mr],Jh=class extends Ee{constructor(t){super(t)}},mg=[0,qt,on,-1,Wt],fL=Ki(502141897,Jh);Lt[502141897]=mg;var sS=[0,rS];Lt[512499200]=sS;var oS=[0,sS];Lt[515723506]=oS;var dL=Fs(class extends Ee{constructor(t){super(t)}},[0,[0,mr,-1,CP,LP],iL]),aS=[0,qt];Lt[508981768]=aS;var lS=class extends Ee{constructor(t){super(t)}},gg=[0,qt,on,aS,Yt],cS=class extends Ee{constructor(t){super(t)}},uS=[0,qt,mg,gg,on,oS];Lt[508968149]=gg;var pL=Ki(508968150,cS);Lt[508968150]=uS;var hS=class extends Ee{constructor(t){super(t)}},mL=Ki(513916220,hS);Lt[513916220]=[0,qt,uS,Wt];var ko=class extends Ee{constructor(t){super(t)}h(){return nt(this,Zh,2)}g(){vt(this,2)}},fS=[0,qt,iS];Lt[478825465]=fS;var dS=[0,qt];Lt[478825422]=dS;var gL=class extends Ee{constructor(t){super(t)}},pS=[0,qt,dS,fS,-1],mS=class extends Ee{constructor(t){super(t)}},gS=[0,qt,on,Wt],_g=class extends Ee{constructor(t){super(t)}},vg=[0,qt,on],yg=class extends Ee{constructor(t){super(t)}},_S=[0,qt,gS,vg,on],vS=class extends Ee{constructor(t){super(t)}},_L=[0,qt,_S,pS];Lt[463370452]=pS,Lt[464864288]=gS,Lt[474472470]=vg;var vL=Ki(462713202,yg);Lt[462713202]=_S;var yL=Ki(479097054,vS);Lt[479097054]=_L;var xL=class extends Ee{constructor(t){super(t)}},SL=[0,qt],yS=class extends Ee{constructor(t){super(t)}},xg=[0,qt,on,-1,Wt];Lt[514774813]=xg;var xS=class extends Ee{constructor(t){super(t)}},Sg=[0,qt,on,Yt];Lt[518928384]=Sg;var SS=class extends Ee{constructor(){super()}};SS.prototype.g=qh([0,qt,vg,SL,mg,gg,xg,Sg]);var MS=class extends Ee{constructor(t){super(t)}},ML=Ki(456383383,MS);Lt[456383383]=[0,qt,iS];var ES=class extends Ee{constructor(t){super(t)}},EL=Ki(476348187,ES);Lt[476348187]=[0,qt,hL];var wS=class extends Ee{constructor(t){super(t)}},TS=[0,mr,-1],ym=class extends Ee{constructor(t){super(t)}};ym.B=[3];var wL=Ki(458105876,class extends Ee{constructor(t){super(t)}g(){var t=this.s;const e=ut(t);var n=2&e;return t=function(i,r,s){var o=ym;const a=2&r;let l=!1;if(s==null){if(a)return gv();s=[]}else if(s.constructor===Ri){if(!(2&s.N)||a)return s;s=s.Y()}else Array.isArray(s)?l=!!(2&Gt(s)):s=[];if(a){if(!s.length)return gv();l||(l=!0,ka(s))}else l&&(l=!1,s=_3(s));return l||(64&Gt(s)?ch(s,32):32&r&&Z0(s,32)),At(i,r,2,o=new Ri(s,o,cP,void 0),!1),o}(t,e,_r(t,e,2)),t==null||!n&&ym&&(t.ta=!0),n=t}});Lt[458105876]=[0,TS,AP,[!0,bs,[0,pt,-1,Tn]]];var Mg=class extends Ee{constructor(t){super(t)}},AS=Ki(458105758,Mg);Lt[458105758]=[0,qt,pt,TS];var Eg=class extends Ee{constructor(t){super(t)}};Eg.B=[5,6];var TL=Ki(443442058,Eg);Lt[443442058]=[0,qt,pt,Wt,on,Tn,-1];var CS=class extends Ee{constructor(t){super(t)}},AL=Ki(516587230,CS);function xm(t,e){return e=e?e.clone():new Zh,t.displayNamesLocale!==void 0?vt(e,1,za(t.displayNamesLocale)):t.displayNamesLocale===void 0&&vt(e,1),t.maxResults!==void 0?pr(e,2,t.maxResults):"maxResults"in t&&vt(e,2),t.scoreThreshold!==void 0?Te(e,3,t.scoreThreshold):"scoreThreshold"in t&&vt(e,3),t.categoryAllowlist!==void 0?mh(e,4,t.categoryAllowlist):"categoryAllowlist"in t&&vt(e,4),t.categoryDenylist!==void 0?mh(e,5,t.categoryDenylist):"categoryDenylist"in t&&vt(e,5),e}function wg(t,e=-1,n=""){return{categories:t.map(i=>({index:ji(wi(i,1),0)??-1,score:$t(i,2)??0,categoryName:dr(i,3)??"",displayName:dr(i,4)??""})),headIndex:e,headName:n}}function RS(t){var o,a;var e=Jo(t,3,Us),n=Jo(t,2,Ba),i=Jo(t,1,lo),r=Jo(t,9,lo);const s={categories:[],keypoints:[]};for(let l=0;l<e.length;l++)s.categories.push({score:e[l],index:n[l]??-1,categoryName:i[l]??"",displayName:r[l]??""});if((e=(o=nt(t,Au,4))==null?void 0:o.h())&&(s.boundingBox={originX:wi(e,1)??0,originY:wi(e,2)??0,width:wi(e,3)??0,height:wi(e,4)??0,angle:0}),(a=nt(t,Au,4))==null?void 0:a.g().length)for(const l of nt(t,Au,4).g())s.keypoints.push({x:wu(l,1)??0,y:wu(l,2)??0,score:wu(l,4)??0,label:lo(Rs(l,3))??""});return s}function Qh(t){const e=[];for(const n of Wr(t,K3,1))e.push({x:$t(n,1)??0,y:$t(n,2)??0,z:$t(n,3)??0,visibility:$t(n,4)??0});return e}function Al(t){const e=[];for(const n of Wr(t,Y3,1))e.push({x:$t(n,1)??0,y:$t(n,2)??0,z:$t(n,3)??0,visibility:$t(n,4)??0});return e}function Av(t){return Array.from(t,e=>127<e?e-256:e)}function Cv(t,e){if(t.length!==e.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${t.length} vs. ${e.length}).`);let n=0,i=0,r=0;for(let s=0;s<t.length;s++)n+=t[s]*e[s],i+=t[s]*t[s],r+=e[s]*e[s];if(0>=i||0>=r)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*r)}let tu;Lt[516587230]=[0,qt,xg,Sg,on];const CL=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function bS(){if(tu===void 0)try{await WebAssembly.instantiate(CL),tu=!0}catch{tu=!1}return tu}async function sl(t,e=""){const n=await bS()?"wasm_internal":"wasm_nosimd_internal";return{wasmLoaderPath:`${e}/${t}_${n}.js`,wasmBinaryPath:`${e}/${t}_${n}.wasm`}}var Ks=class{};function PS(){var t=navigator;return typeof OffscreenCanvas<"u"&&(!function(e=navigator){return(e=e.userAgent).includes("Safari")&&!e.includes("Chrome")}(t)||!!((t=t.userAgent.match(/Version\/([\d]+).*Safari/))&&1<=t.length&&17<=Number(t[1])))}async function Rv(t){if(typeof importScripts!="function"){const e=document.createElement("script");return e.src=t.toString(),e.crossOrigin="anonymous",new Promise((n,i)=>{e.addEventListener("load",()=>{n()},!1),e.addEventListener("error",r=>{i(r)},!1),document.body.appendChild(e)})}importScripts(t.toString())}function LS(t){return t.videoWidth!==void 0?[t.videoWidth,t.videoHeight]:t.naturalWidth!==void 0?[t.naturalWidth,t.naturalHeight]:t.displayWidth!==void 0?[t.displayWidth,t.displayHeight]:[t.width,t.height]}function Ae(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(e=t.i.stringToNewUTF8(e)),t.i._free(e)}function bv(t,e,n){if(!t.i.canvas)throw Error("No OpenGL canvas configured.");if(n?t.i._bindTextureToStream(n):t.i._bindTextureToCanvas(),!(n=t.i.canvas.getContext("webgl2")||t.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e),t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);const[i,r]=LS(e);return!t.l||i===t.i.canvas.width&&r===t.i.canvas.height||(t.i.canvas.width=i,t.i.canvas.height=r),[i,r]}function Pv(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const i=new Uint32Array(e.length);for(let r=0;r<e.length;r++)i[r]=t.i.stringToNewUTF8(e[r]);e=t.i._malloc(4*i.length),t.i.HEAPU32.set(i,e>>2),n(e);for(const r of i)t.i._free(r);t.i._free(e)}function Qi(t,e,n){t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=n}function ns(t,e,n){let i=[];t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=(r,s,o)=>{s?(n(i,o),i=[]):i.push(r)}}Ks.forVisionTasks=function(t){return sl("vision",t)},Ks.forTextTasks=function(t){return sl("text",t)},Ks.forGenAiExperimentalTasks=function(t){return sl("genai_experimental",t)},Ks.forGenAiTasks=function(t){return sl("genai",t)},Ks.forAudioTasks=function(t){return sl("audio",t)},Ks.isSimdSupported=function(){return bS()};async function RL(t,e,n,i){return t=await(async(r,s,o,a,l)=>{if(s&&await Rv(s),!self.ModuleFactory||o&&(await Rv(o),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&l&&((s=self.Module).locateFile=l.locateFile,l.mainScriptUrlOrBlob&&(s.mainScriptUrlOrBlob=l.mainScriptUrlOrBlob)),l=await self.ModuleFactory(self.Module||l),self.ModuleFactory=self.Module=void 0,new r(l,a)})(t,n.wasmLoaderPath,n.assetLoaderPath,e,{locateFile:r=>r.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&r.endsWith(".data")?n.assetBinaryPath.toString():r}),await t.o(i),t}function Td(t,e){const n=nt(t.baseOptions,_h,1)||new _h;typeof e=="string"?(vt(n,2,za(e)),vt(n,1)):e instanceof Uint8Array&&(vt(n,1,eg(e,!1,!1)),vt(n,2)),Le(t.baseOptions,0,1,n)}function Lv(t){try{const e=t.K.length;if(e===1)throw Error(t.K[0].message);if(1<e)throw Error("Encountered multiple errors: "+t.K.map(n=>n.message).join(", "))}finally{t.K=[]}}function ge(t,e){t.J=Math.max(t.J,e)}function ef(t,e){t.C=new Cn,hi(t.C,"PassThroughCalculator"),xt(t.C,"free_memory"),Je(t.C,"free_memory_unused_out"),Ct(e,"free_memory"),fi(e,t.C)}function Ca(t,e){xt(t.C,e),Je(t.C,e+"_unused_out")}function tf(t){t.g.addBoolToStream(!0,"free_memory",t.J)}var Ru=class{constructor(t){this.g=t,this.K=[],this.J=0,this.g.setAutoRenderToScreen(!1)}l(t,e=!0){var n,i,r,s,o,a;if(e){const l=t.baseOptions||{};if((n=t.baseOptions)!=null&&n.modelAssetBuffer&&((i=t.baseOptions)!=null&&i.modelAssetPath))throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!((r=nt(this.baseOptions,_h,1))!=null&&r.g()||(s=nt(this.baseOptions,_h,1))!=null&&s.h()||(o=t.baseOptions)!=null&&o.modelAssetBuffer||(a=t.baseOptions)!=null&&a.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if(function(c,h){let d=nt(c.baseOptions,Tv,3);if(!d){var f=d=new Tv,g=new Ev;El(f,4,Cu,g)}"delegate"in h&&(h.delegate==="GPU"?(h=d,f=new F3,El(h,2,Cu,f)):(h=d,f=new Ev,El(h,4,Cu,f))),Le(c.baseOptions,0,3,d)}(this,l),l.modelAssetPath)return fetch(l.modelAssetPath.toString()).then(c=>{if(c.ok)return c.arrayBuffer();throw Error(`Failed to fetch model: ${l.modelAssetPath} (${c.status})`)}).then(c=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(c),!0,!1,!1),Td(this,"/model.dat"),this.m(),this.L()});if(l.modelAssetBuffer instanceof Uint8Array)Td(this,l.modelAssetBuffer);else if(l.modelAssetBuffer)return async function(c){const h=[];for(var d=0;;){const{done:f,value:g}=await c.read();if(f)break;h.push(g),d+=g.length}if(h.length===0)return new Uint8Array(0);if(h.length===1)return h[0];c=new Uint8Array(d),d=0;for(const f of h)c.set(f,d),d+=f.length;return c}(l.modelAssetBuffer).then(c=>{Td(this,c),this.m(),this.L()})}return this.m(),this.L(),Promise.resolve()}L(){}fa(){let t;if(this.g.fa(e=>{t=GP(e)}),!t)throw Error("Failed to retrieve CalculatorGraphConfig");return t}setGraph(t,e){this.g.attachErrorListener((n,i)=>{this.K.push(Error(i))}),this.g.Ma(),this.g.setGraph(t,e),this.C=void 0,Lv(this)}finishProcessing(){this.g.finishProcessing(),Lv(this)}close(){this.C=void 0,this.g.closeGraph()}};function Or(t,e){if(!t)throw Error(`Unable to obtain required WebGL resource: ${e}`);return t}Ru.prototype.close=Ru.prototype.close,function(t,e){t=t.split(".");var n,i=rc;for((t[0]in i)||i.execScript===void 0||i.execScript("var "+t[0]);t.length&&(n=t.shift());)t.length||e===void 0?i=i[n]&&i[n]!==Object.prototype[n]?i[n]:i[n]={}:i[n]=e}("TaskRunner",Ru);class bL{constructor(e,n,i,r){this.g=e,this.h=n,this.m=i,this.l=r}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function Iv(t,e,n){const i=t.g;if(n=Or(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,e),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(t.h,n),n}function Dv(t,e){const n=t.g,i=Or(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);const r=Or(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(t.K),n.vertexAttribPointer(t.K,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);const s=Or(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(t.J),n.vertexAttribPointer(t.J,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new bL(n,i,r,s)}function Tg(t,e){if(t.g){if(e!==t.g)throw Error("Cannot change GL context once initialized")}else t.g=e}function Ag(t,e,n,i){return Tg(t,e),t.h||(t.m(),t.D()),n?(t.v||(t.v=Dv(t,!0)),n=t.v):(t.A||(t.A=Dv(t,!1)),n=t.A),e.useProgram(t.h),n.bind(),t.l(),t=i(),n.g.bindVertexArray(null),t}function nf(t,e,n){return Tg(t,e),t=Or(e.createTexture(),"Failed to create texture"),e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,n??e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,n??e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),t}function rf(t,e,n){Tg(t,e),t.u||(t.u=Or(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,t.u),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0)}function Cg(t){var e;(e=t.g)==null||e.bindFramebuffer(t.g.FRAMEBUFFER,null)}var Rg=class{H(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const t=this.g;if(this.h=Or(t.createProgram(),"Failed to create WebGL program"),this.ba=Iv(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,t.VERTEX_SHADER),this.aa=Iv(this,this.H(),t.FRAGMENT_SHADER),t.linkProgram(this.h),!t.getProgramParameter(this.h,t.LINK_STATUS))throw Error(`Error during program linking: ${t.getProgramInfoLog(this.h)}`);this.K=t.getAttribLocation(this.h,"aVertex"),this.J=t.getAttribLocation(this.h,"aTex")}D(){}l(){}close(){if(this.h){const t=this.g;t.deleteProgram(this.h),t.deleteShader(this.ba),t.deleteShader(this.aa)}this.u&&this.g.deleteFramebuffer(this.u),this.A&&this.A.close(),this.v&&this.v.close()}};function br(t,e){switch(e){case 0:return t.g.find(n=>n instanceof Uint8Array);case 1:return t.g.find(n=>n instanceof Float32Array);case 2:return t.g.find(n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture);default:throw Error(`Type is not supported: ${e}`)}}function Sm(t){var e=br(t,1);if(!e){if(e=br(t,0))e=new Float32Array(e).map(i=>i/255);else{e=new Float32Array(t.width*t.height);const i=Ra(t);var n=bg(t);if(rf(n,i,IS(t)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in self.document){n=new Float32Array(t.width*t.height*4),i.readPixels(0,0,t.width,t.height,i.RGBA,i.FLOAT,n);for(let r=0,s=0;r<e.length;++r,s+=4)e[r]=n[s]}else i.readPixels(0,0,t.width,t.height,i.RED,i.FLOAT,e)}t.g.push(e)}return e}function IS(t){let e=br(t,2);if(!e){const n=Ra(t);e=NS(t);const i=Sm(t),r=DS(t);n.texImage2D(n.TEXTURE_2D,0,r,t.width,t.height,0,n.RED,n.FLOAT,i),Mm(t)}return e}function Ra(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.h||(t.h=Or(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function DS(t){if(t=Ra(t),!nu)if(t.getExtension("EXT_color_buffer_float")&&t.getExtension("OES_texture_float_linear")&&t.getExtension("EXT_float_blend"))nu=t.R32F;else{if(!t.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");nu=t.R16F}return nu}function bg(t){return t.l||(t.l=new Rg),t.l}function NS(t){const e=Ra(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);let n=br(t,2);return n||(n=nf(bg(t),e,t.m?e.LINEAR:e.NEAREST),t.g.push(n),t.j=!0),e.bindTexture(e.TEXTURE_2D,n),n}function Mm(t){t.h.bindTexture(t.h.TEXTURE_2D,null)}var nu,ln=class{constructor(t,e,n,i,r,s,o){this.g=t,this.m=e,this.j=n,this.canvas=i,this.l=r,this.width=s,this.height=o,this.j&&--Nv===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Ha(){return!!br(this,0)}la(){return!!br(this,1)}R(){return!!br(this,2)}ka(){return(e=br(t=this,0))||(e=Sm(t),e=new Uint8Array(e.map(n=>255*n)),t.g.push(e)),e;var t,e}ja(){return Sm(this)}O(){return IS(this)}clone(){const t=[];for(const e of this.g){let n;if(e instanceof Uint8Array)n=new Uint8Array(e);else if(e instanceof Float32Array)n=new Float32Array(e);else{if(!(e instanceof WebGLTexture))throw Error(`Type is not supported: ${e}`);{const i=Ra(this),r=bg(this);i.activeTexture(i.TEXTURE1),n=nf(r,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);const s=DS(this);i.texImage2D(i.TEXTURE_2D,0,s,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),rf(r,i,n),Ag(r,i,!1,()=>{NS(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Mm(this)}),Cg(r),Mm(this)}}t.push(n)}return new ln(t,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&Ra(this).deleteTexture(br(this,2)),Nv=-1}};ln.prototype.close=ln.prototype.close,ln.prototype.clone=ln.prototype.clone,ln.prototype.getAsWebGLTexture=ln.prototype.O,ln.prototype.getAsFloat32Array=ln.prototype.ja,ln.prototype.getAsUint8Array=ln.prototype.ka,ln.prototype.hasWebGLTexture=ln.prototype.R,ln.prototype.hasFloat32Array=ln.prototype.la,ln.prototype.hasUint8Array=ln.prototype.Ha;var Nv=250;function sr(t,e){switch(e){case 0:return t.g.find(n=>n instanceof ImageData);case 1:return t.g.find(n=>typeof ImageBitmap<"u"&&n instanceof ImageBitmap);case 2:return t.g.find(n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture);default:throw Error(`Type is not supported: ${e}`)}}function US(t){var e=sr(t,0);if(!e){e=ba(t);const n=sf(t),i=new Uint8Array(t.width*t.height*4);rf(n,e,bu(t)),e.readPixels(0,0,t.width,t.height,e.RGBA,e.UNSIGNED_BYTE,i),Cg(n),e=new ImageData(new Uint8ClampedArray(i.buffer),t.width,t.height),t.g.push(e)}return e}function bu(t){let e=sr(t,2);if(!e){const n=ba(t);e=Pu(t);const i=sr(t,1)||US(t);n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,i),fl(t)}return e}function ba(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when iniitializing the image.");return t.h||(t.h=Or(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function sf(t){return t.l||(t.l=new Rg),t.l}function Pu(t){const e=ba(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);let n=sr(t,2);return n||(n=nf(sf(t),e),t.g.push(n),t.m=!0),e.bindTexture(e.TEXTURE_2D,n),n}function fl(t){t.h.bindTexture(t.h.TEXTURE_2D,null)}function Uv(t){const e=ba(t);return Ag(sf(t),e,!0,()=>function(n,i){const r=n.canvas;if(r.width===n.width&&r.height===n.height)return i();const s=r.width,o=r.height;return r.width=n.width,r.height=n.height,n=i(),r.width=s,r.height=o,n}(t,()=>{if(e.bindFramebuffer(e.FRAMEBUFFER,null),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.TRIANGLE_FAN,0,4),!(t.canvas instanceof OffscreenCanvas))throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");return t.canvas.transferToImageBitmap()}))}var cn=class{constructor(t,e,n,i,r,s,o){this.g=t,this.j=e,this.m=n,this.canvas=i,this.l=r,this.width=s,this.height=o,(this.j||this.m)&&--Fv===0&&console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.")}Ga(){return!!sr(this,0)}ma(){return!!sr(this,1)}R(){return!!sr(this,2)}Ea(){return US(this)}Da(){var t=sr(this,1);return t||(bu(this),Pu(this),t=Uv(this),fl(this),this.g.push(t),this.j=!0),t}O(){return bu(this)}clone(){const t=[];for(const e of this.g){let n;if(e instanceof ImageData)n=new ImageData(e.data,this.width,this.height);else if(e instanceof WebGLTexture){const i=ba(this),r=sf(this);i.activeTexture(i.TEXTURE1),n=nf(r,i),i.bindTexture(i.TEXTURE_2D,n),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,this.width,this.height,0,i.RGBA,i.UNSIGNED_BYTE,null),i.bindTexture(i.TEXTURE_2D,null),rf(r,i,n),Ag(r,i,!1,()=>{Pu(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),fl(this)}),Cg(r),fl(this)}else{if(!(e instanceof ImageBitmap))throw Error(`Type is not supported: ${e}`);bu(this),Pu(this),n=Uv(this),fl(this)}t.push(n)}return new cn(t,this.ma(),this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&sr(this,1).close(),this.m&&ba(this).deleteTexture(sr(this,2)),Fv=-1}};cn.prototype.close=cn.prototype.close,cn.prototype.clone=cn.prototype.clone,cn.prototype.getAsWebGLTexture=cn.prototype.O,cn.prototype.getAsImageBitmap=cn.prototype.Da,cn.prototype.getAsImageData=cn.prototype.Ea,cn.prototype.hasWebGLTexture=cn.prototype.R,cn.prototype.hasImageBitmap=cn.prototype.ma,cn.prototype.hasImageData=cn.prototype.Ga;var Fv=250;function Zi(...t){return t.map(([e,n])=>({start:e,end:n}))}const PL=function(t){return class extends t{Ma(){this.i._registerModelResourcesGraphService()}}}((Ov=class{constructor(t,e){this.l=!0,this.i=t,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",e!==void 0?this.i.canvas=e:PS()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(t){const e=await(await fetch(t)).arrayBuffer();t=!(t.endsWith(".pbtxt")||t.endsWith(".textproto")),this.setGraph(new Uint8Array(e),t)}setGraphFromString(t){this.setGraph(new TextEncoder().encode(t),!1)}setGraph(t,e){const n=t.length,i=this.i._malloc(n);this.i.HEAPU8.set(t,i),e?this.i._changeBinaryGraph(n,i):this.i._changeTextGraph(n,i),this.i._free(i)}configureAudio(t,e,n,i,r){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),Ae(this,i||"input_audio",s=>{Ae(this,r=r||"audio_header",o=>{this.i._configureAudio(s,o,t,e,n)})})}setAutoResizeCanvas(t){this.l=t}setAutoRenderToScreen(t){this.i._setAutoRenderToScreen(t)}setGpuBufferVerticalFlip(t){this.i.gpuOriginForWebTexturesIsBottomLeft=t}fa(t){Qi(this,"__graph_config__",e=>{t(e)}),Ae(this,"__graph_config__",e=>{this.i._getGraphConfig(e,void 0)}),delete this.i.simpleListeners.__graph_config__}attachErrorListener(t){this.i.errorListener=t}attachEmptyPacketListener(t,e){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[t]=e}addAudioToStream(t,e,n){this.addAudioToStreamWithShape(t,0,0,e,n)}addAudioToStreamWithShape(t,e,n,i,r){const s=4*t.length;this.h!==s&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(s),this.h=s),this.i.HEAPF32.set(t,this.g/4),Ae(this,i,o=>{this.i._addAudioToInputStream(this.g,e,n,o,r)})}addGpuBufferToStream(t,e,n){Ae(this,e,i=>{const[r,s]=bv(this,t,i);this.i._addBoundTextureToStream(i,r,s,n)})}addBoolToStream(t,e,n){Ae(this,e,i=>{this.i._addBoolToInputStream(t,i,n)})}addDoubleToStream(t,e,n){Ae(this,e,i=>{this.i._addDoubleToInputStream(t,i,n)})}addFloatToStream(t,e,n){Ae(this,e,i=>{this.i._addFloatToInputStream(t,i,n)})}addIntToStream(t,e,n){Ae(this,e,i=>{this.i._addIntToInputStream(t,i,n)})}addUintToStream(t,e,n){Ae(this,e,i=>{this.i._addUintToInputStream(t,i,n)})}addStringToStream(t,e,n){Ae(this,e,i=>{Ae(this,t,r=>{this.i._addStringToInputStream(r,i,n)})})}addStringRecordToStream(t,e,n){Ae(this,e,i=>{Pv(this,Object.keys(t),r=>{Pv(this,Object.values(t),s=>{this.i._addFlatHashMapToInputStream(r,s,Object.keys(t).length,i,n)})})})}addProtoToStream(t,e,n,i){Ae(this,n,r=>{Ae(this,e,s=>{const o=this.i._malloc(t.length);this.i.HEAPU8.set(t,o),this.i._addProtoToInputStream(o,t.length,s,r,i),this.i._free(o)})})}addEmptyPacketToStream(t,e){Ae(this,t,n=>{this.i._addEmptyPacketToInputStream(n,e)})}addBoolVectorToStream(t,e,n){Ae(this,e,i=>{const r=this.i._allocateBoolVector(t.length);if(!r)throw Error("Unable to allocate new bool vector on heap.");for(const s of t)this.i._addBoolVectorEntry(r,s);this.i._addBoolVectorToInputStream(r,i,n)})}addDoubleVectorToStream(t,e,n){Ae(this,e,i=>{const r=this.i._allocateDoubleVector(t.length);if(!r)throw Error("Unable to allocate new double vector on heap.");for(const s of t)this.i._addDoubleVectorEntry(r,s);this.i._addDoubleVectorToInputStream(r,i,n)})}addFloatVectorToStream(t,e,n){Ae(this,e,i=>{const r=this.i._allocateFloatVector(t.length);if(!r)throw Error("Unable to allocate new float vector on heap.");for(const s of t)this.i._addFloatVectorEntry(r,s);this.i._addFloatVectorToInputStream(r,i,n)})}addIntVectorToStream(t,e,n){Ae(this,e,i=>{const r=this.i._allocateIntVector(t.length);if(!r)throw Error("Unable to allocate new int vector on heap.");for(const s of t)this.i._addIntVectorEntry(r,s);this.i._addIntVectorToInputStream(r,i,n)})}addUintVectorToStream(t,e,n){Ae(this,e,i=>{const r=this.i._allocateUintVector(t.length);if(!r)throw Error("Unable to allocate new unsigned int vector on heap.");for(const s of t)this.i._addUintVectorEntry(r,s);this.i._addUintVectorToInputStream(r,i,n)})}addStringVectorToStream(t,e,n){Ae(this,e,i=>{const r=this.i._allocateStringVector(t.length);if(!r)throw Error("Unable to allocate new string vector on heap.");for(const s of t)Ae(this,s,o=>{this.i._addStringVectorEntry(r,o)});this.i._addStringVectorToInputStream(r,i,n)})}addBoolToInputSidePacket(t,e){Ae(this,e,n=>{this.i._addBoolToInputSidePacket(t,n)})}addDoubleToInputSidePacket(t,e){Ae(this,e,n=>{this.i._addDoubleToInputSidePacket(t,n)})}addFloatToInputSidePacket(t,e){Ae(this,e,n=>{this.i._addFloatToInputSidePacket(t,n)})}addIntToInputSidePacket(t,e){Ae(this,e,n=>{this.i._addIntToInputSidePacket(t,n)})}addUintToInputSidePacket(t,e){Ae(this,e,n=>{this.i._addUintToInputSidePacket(t,n)})}addStringToInputSidePacket(t,e){Ae(this,e,n=>{Ae(this,t,i=>{this.i._addStringToInputSidePacket(i,n)})})}addProtoToInputSidePacket(t,e,n){Ae(this,n,i=>{Ae(this,e,r=>{const s=this.i._malloc(t.length);this.i.HEAPU8.set(t,s),this.i._addProtoToInputSidePacket(s,t.length,r,i),this.i._free(s)})})}addBoolVectorToInputSidePacket(t,e){Ae(this,e,n=>{const i=this.i._allocateBoolVector(t.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(const r of t)this.i._addBoolVectorEntry(i,r);this.i._addBoolVectorToInputSidePacket(i,n)})}addDoubleVectorToInputSidePacket(t,e){Ae(this,e,n=>{const i=this.i._allocateDoubleVector(t.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(const r of t)this.i._addDoubleVectorEntry(i,r);this.i._addDoubleVectorToInputSidePacket(i,n)})}addFloatVectorToInputSidePacket(t,e){Ae(this,e,n=>{const i=this.i._allocateFloatVector(t.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(const r of t)this.i._addFloatVectorEntry(i,r);this.i._addFloatVectorToInputSidePacket(i,n)})}addIntVectorToInputSidePacket(t,e){Ae(this,e,n=>{const i=this.i._allocateIntVector(t.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(const r of t)this.i._addIntVectorEntry(i,r);this.i._addIntVectorToInputSidePacket(i,n)})}addUintVectorToInputSidePacket(t,e){Ae(this,e,n=>{const i=this.i._allocateUintVector(t.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(const r of t)this.i._addUintVectorEntry(i,r);this.i._addUintVectorToInputSidePacket(i,n)})}addStringVectorToInputSidePacket(t,e){Ae(this,e,n=>{const i=this.i._allocateStringVector(t.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(const r of t)Ae(this,r,s=>{this.i._addStringVectorEntry(i,s)});this.i._addStringVectorToInputSidePacket(i,n)})}attachBoolListener(t,e){Qi(this,t,e),Ae(this,t,n=>{this.i._attachBoolListener(n)})}attachBoolVectorListener(t,e){ns(this,t,e),Ae(this,t,n=>{this.i._attachBoolVectorListener(n)})}attachIntListener(t,e){Qi(this,t,e),Ae(this,t,n=>{this.i._attachIntListener(n)})}attachIntVectorListener(t,e){ns(this,t,e),Ae(this,t,n=>{this.i._attachIntVectorListener(n)})}attachUintListener(t,e){Qi(this,t,e),Ae(this,t,n=>{this.i._attachUintListener(n)})}attachUintVectorListener(t,e){ns(this,t,e),Ae(this,t,n=>{this.i._attachUintVectorListener(n)})}attachDoubleListener(t,e){Qi(this,t,e),Ae(this,t,n=>{this.i._attachDoubleListener(n)})}attachDoubleVectorListener(t,e){ns(this,t,e),Ae(this,t,n=>{this.i._attachDoubleVectorListener(n)})}attachFloatListener(t,e){Qi(this,t,e),Ae(this,t,n=>{this.i._attachFloatListener(n)})}attachFloatVectorListener(t,e){ns(this,t,e),Ae(this,t,n=>{this.i._attachFloatVectorListener(n)})}attachStringListener(t,e){Qi(this,t,e),Ae(this,t,n=>{this.i._attachStringListener(n)})}attachStringVectorListener(t,e){ns(this,t,e),Ae(this,t,n=>{this.i._attachStringVectorListener(n)})}attachProtoListener(t,e,n){Qi(this,t,e),Ae(this,t,i=>{this.i._attachProtoListener(i,n||!1)})}attachProtoVectorListener(t,e,n){ns(this,t,e),Ae(this,t,i=>{this.i._attachProtoVectorListener(i,n||!1)})}attachAudioListener(t,e,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),Qi(this,t,(i,r)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),e(i,r)}),Ae(this,t,i=>{this.i._attachAudioListener(i,n||!1)})}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends Ov{get ha(){return this.i}sa(t,e,n){Ae(this,e,i=>{const[r,s]=bv(this,t,i);this.ha._addBoundTextureAsImageToStream(i,r,s,n)})}W(t,e){Qi(this,t,e),Ae(this,t,n=>{this.ha._attachImageListener(n)})}da(t,e){ns(this,t,e),Ae(this,t,n=>{this.ha._attachImageVectorListener(n)})}}));var Ov,Pi=class extends PL{};async function Ke(t,e,n){return async function(i,r,s,o){return RL(i,r,s,o)}(t,n.canvas??(PS()?void 0:document.createElement("canvas")),e,n)}function FS(t,e,n,i){if(t.V){const s=new Q3;if(n!=null&&n.regionOfInterest){if(!t.ra)throw Error("This task doesn't support region-of-interest.");var r=n.regionOfInterest;if(r.left>=r.right||r.top>=r.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(0>r.left||0>r.top||1<r.right||1<r.bottom)throw Error("Expected RectF values to be in [0,1].");Te(s,1,(r.left+r.right)/2),Te(s,2,(r.top+r.bottom)/2),Te(s,4,r.right-r.left),Te(s,3,r.bottom-r.top)}else Te(s,1,.5),Te(s,2,.5),Te(s,4,1),Te(s,3,1);if(n!=null&&n.rotationDegrees){if((n==null?void 0:n.rotationDegrees)%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(Te(s,5,-Math.PI*n.rotationDegrees/180),(n==null?void 0:n.rotationDegrees)%180!=0){const[o,a]=LS(e);n=$t(s,3)*a/o,r=$t(s,4)*o/a,Te(s,4,n),Te(s,3,r)}}t.g.addProtoToStream(s.g(),"mediapipe.NormalizedRect",t.V,i)}t.g.sa(e,t.ba,i??performance.now()),t.finishProcessing()}function Li(t,e,n){var i;if((i=t.baseOptions)!=null&&i.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");FS(t,e,n,t.J+1)}function vr(t,e,n,i){var r;if(!((r=t.baseOptions)!=null&&r.g()))throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");FS(t,e,n,i)}function Pa(t,e,n,i){var r=e.data;const s=e.width,o=s*(e=e.height);if((r instanceof Uint8Array||r instanceof Float32Array)&&r.length!==o)throw Error("Unsupported channel count: "+r.length/o);return t=new ln([r],n,!1,t.g.i.canvas,t.M,s,e),i?t.clone():t}var jn=class extends Ru{constructor(t,e,n,i){super(t),this.g=t,this.ba=e,this.V=n,this.ra=i,this.M=new Rg}l(t,e=!0){if("runningMode"in t&&jl(this.baseOptions,2,!!t.runningMode&&t.runningMode!=="IMAGE"),t.canvas!==void 0&&this.g.i.canvas!==t.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(t,e)}close(){this.M.close(),super.close()}};jn.prototype.close=jn.prototype.close;var mi=class extends jn{constructor(t,e){super(new Pi(t,e),"image_in","norm_rect_in",!1),this.j={detections:[]},Le(t=this.h=new Jh,0,1,e=new It),Te(this.h,2,.5),Te(this.h,3,.3)}get baseOptions(){return nt(this.h,It,1)}set baseOptions(t){Le(this.h,0,1,t)}o(t){return"minDetectionConfidence"in t&&Te(this.h,2,t.minDetectionConfidence??.5),"minSuppressionThreshold"in t&&Te(this.h,3,t.minSuppressionThreshold??.3),this.l(t)}F(t,e){return this.j={detections:[]},Li(this,t,e),this.j}G(t,e,n){return this.j={detections:[]},vr(this,t,n,e),this.j}m(){var t=new Nn;Ct(t,"image_in"),Ct(t,"norm_rect_in"),rt(t,"detections");const e=new li;qi(e,fL,this.h);const n=new Cn;hi(n,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),xt(n,"IMAGE:image_in"),xt(n,"NORM_RECT:norm_rect_in"),Je(n,"DETECTIONS:detections"),n.o(e),fi(t,n),this.g.attachProtoVectorListener("detections",(i,r)=>{for(const s of i)i=j3(s),this.j.detections.push(RS(i));ge(this,r)}),this.g.attachEmptyPacketListener("detections",i=>{ge(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};mi.prototype.detectForVideo=mi.prototype.G,mi.prototype.detect=mi.prototype.F,mi.prototype.setOptions=mi.prototype.o,mi.createFromModelPath=async function(t,e){return Ke(mi,t,{baseOptions:{modelAssetPath:e}})},mi.createFromModelBuffer=function(t,e){return Ke(mi,t,{baseOptions:{modelAssetBuffer:e}})},mi.createFromOptions=function(t,e){return Ke(mi,t,e)};var Pg=Zi([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),Lg=Zi([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),Ig=Zi([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),OS=Zi([474,475],[475,476],[476,477],[477,474]),Dg=Zi([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),Ng=Zi([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),kS=Zi([469,470],[470,471],[471,472],[472,469]),Ug=Zi([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),BS=[...Pg,...Lg,...Ig,...Dg,...Ng,...Ug],zS=Zi([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function kv(t){t.u={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var kt=class extends jn{constructor(t,e){super(new Pi(t,e),"image_in","norm_rect",!1),this.u={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Le(t=this.h=new cS,0,1,e=new It),this.H=new lS,Le(this.h,0,3,this.H),this.j=new Jh,Le(this.h,0,2,this.j),pr(this.j,4,1),Te(this.j,2,.5),Te(this.H,2,.5),Te(this.h,4,.5)}get baseOptions(){return nt(this.h,It,1)}set baseOptions(t){Le(this.h,0,1,t)}o(t){return"numFaces"in t&&pr(this.j,4,t.numFaces??1),"minFaceDetectionConfidence"in t&&Te(this.j,2,t.minFaceDetectionConfidence??.5),"minTrackingConfidence"in t&&Te(this.h,4,t.minTrackingConfidence??.5),"minFacePresenceConfidence"in t&&Te(this.H,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in t&&(this.outputFacialTransformationMatrixes=!!t.outputFacialTransformationMatrixes),this.l(t)}F(t,e){return kv(this),Li(this,t,e),this.u}G(t,e,n){return kv(this),vr(this,t,n,e),this.u}m(){var t=new Nn;Ct(t,"image_in"),Ct(t,"norm_rect"),rt(t,"face_landmarks");const e=new li;qi(e,pL,this.h);const n=new Cn;hi(n,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),xt(n,"IMAGE:image_in"),xt(n,"NORM_RECT:norm_rect"),Je(n,"NORM_LANDMARKS:face_landmarks"),n.o(e),fi(t,n),this.g.attachProtoVectorListener("face_landmarks",(i,r)=>{for(const s of i)i=fc(s),this.u.faceLandmarks.push(Qh(i));ge(this,r)}),this.g.attachEmptyPacketListener("face_landmarks",i=>{ge(this,i)}),this.outputFaceBlendshapes&&(rt(t,"blendshapes"),Je(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",(i,r)=>{if(this.outputFaceBlendshapes)for(const s of i)i=Kh(s),this.u.faceBlendshapes.push(wg(i.g()??[]));ge(this,r)}),this.g.attachEmptyPacketListener("blendshapes",i=>{ge(this,i)})),this.outputFacialTransformationMatrixes&&(rt(t,"face_geometry"),Je(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",(i,r)=>{if(this.outputFacialTransformationMatrixes)for(const s of i)(i=nt(dL(s),J3,2))&&this.u.facialTransformationMatrixes.push({rows:ji(wi(i,1),0)??0,columns:ji(wi(i,2),0)??0,data:Jo(i,3,Us).slice()??[]});ge(this,r)}),this.g.attachEmptyPacketListener("face_geometry",i=>{ge(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};kt.prototype.detectForVideo=kt.prototype.G,kt.prototype.detect=kt.prototype.F,kt.prototype.setOptions=kt.prototype.o,kt.createFromModelPath=function(t,e){return Ke(kt,t,{baseOptions:{modelAssetPath:e}})},kt.createFromModelBuffer=function(t,e){return Ke(kt,t,{baseOptions:{modelAssetBuffer:e}})},kt.createFromOptions=function(t,e){return Ke(kt,t,e)},kt.FACE_LANDMARKS_LIPS=Pg,kt.FACE_LANDMARKS_LEFT_EYE=Lg,kt.FACE_LANDMARKS_LEFT_EYEBROW=Ig,kt.FACE_LANDMARKS_LEFT_IRIS=OS,kt.FACE_LANDMARKS_RIGHT_EYE=Dg,kt.FACE_LANDMARKS_RIGHT_EYEBROW=Ng,kt.FACE_LANDMARKS_RIGHT_IRIS=kS,kt.FACE_LANDMARKS_FACE_OVAL=Ug,kt.FACE_LANDMARKS_CONTOURS=BS,kt.FACE_LANDMARKS_TESSELATION=zS;var er=class extends jn{constructor(t,e){super(new Pi(t,e),"image_in","norm_rect",!0),Le(t=this.j=new hS,0,1,e=new It)}get baseOptions(){return nt(this.j,It,1)}set baseOptions(t){Le(this.j,0,1,t)}o(t){return super.l(t)}Pa(t,e,n){const i=typeof e!="function"?e:{};if(this.h=typeof e=="function"?e:n,Li(this,t,i??{}),!this.h)return this.u}m(){var t=new Nn;Ct(t,"image_in"),Ct(t,"norm_rect"),rt(t,"stylized_image");const e=new li;qi(e,mL,this.j);const n=new Cn;hi(n,"mediapipe.tasks.vision.face_stylizer.FaceStylizerGraph"),xt(n,"IMAGE:image_in"),xt(n,"NORM_RECT:norm_rect"),Je(n,"STYLIZED_IMAGE:stylized_image"),n.o(e),fi(t,n),this.g.W("stylized_image",(i,r)=>{var s=!this.h,o=i.data,a=i.width;const l=a*(i=i.height);if(o instanceof Uint8Array)if(o.length===3*l){const c=new Uint8ClampedArray(4*l);for(let h=0;h<l;++h)c[4*h]=o[3*h],c[4*h+1]=o[3*h+1],c[4*h+2]=o[3*h+2],c[4*h+3]=255;o=new ImageData(c,a,i)}else{if(o.length!==4*l)throw Error("Unsupported channel count: "+o.length/l);o=new ImageData(new Uint8ClampedArray(o.buffer,o.byteOffset,o.length),a,i)}else if(!(o instanceof WebGLTexture))throw Error(`Unsupported format: ${o.constructor.name}`);a=new cn([o],!1,!1,this.g.i.canvas,this.M,a,i),this.u=s=s?a.clone():a,this.h&&this.h(s),ge(this,r)}),this.g.attachEmptyPacketListener("stylized_image",i=>{this.u=null,this.h&&this.h(null),ge(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};er.prototype.stylize=er.prototype.Pa,er.prototype.setOptions=er.prototype.o,er.createFromModelPath=function(t,e){return Ke(er,t,{baseOptions:{modelAssetPath:e}})},er.createFromModelBuffer=function(t,e){return Ke(er,t,{baseOptions:{modelAssetBuffer:e}})},er.createFromOptions=function(t,e){return Ke(er,t,e)};var Fg=Zi([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function Bv(t){t.gestures=[],t.landmarks=[],t.worldLandmarks=[],t.handedness=[]}function zv(t){return t.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:t.gestures,landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handedness:t.handedness,handednesses:t.handedness}}function Vv(t,e=!0){const n=[];for(const r of t){var i=Kh(r);t=[];for(const s of i.g())i=e&&wi(s,1)!=null?ji(wi(s,1),0):-1,t.push({score:$t(s,2)??0,index:i,categoryName:dr(s,3)??"",displayName:dr(s,4)??""});n.push(t)}return n}var ei=class extends jn{constructor(t,e){super(new Pi(t,e),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Le(t=this.v=new vS,0,1,e=new It),this.A=new yg,Le(this.v,0,2,this.A),this.u=new _g,Le(this.A,0,3,this.u),this.h=new mS,Le(this.A,0,2,this.h),this.j=new gL,Le(this.v,0,3,this.j),Te(this.h,2,.5),Te(this.A,4,.5),Te(this.u,2,.5)}get baseOptions(){return nt(this.v,It,1)}set baseOptions(t){Le(this.v,0,1,t)}o(t){var r,s,o,a;if(pr(this.h,3,t.numHands??1),"minHandDetectionConfidence"in t&&Te(this.h,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Te(this.A,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Te(this.u,2,t.minHandPresenceConfidence??.5),t.cannedGesturesClassifierOptions){var e=new ko,n=e,i=xm(t.cannedGesturesClassifierOptions,(r=nt(this.j,ko,3))==null?void 0:r.h());Le(n,0,2,i),Le(this.j,0,3,e)}else t.cannedGesturesClassifierOptions===void 0&&((s=nt(this.j,ko,3))==null||s.g());return t.customGesturesClassifierOptions?(Le(n=e=new ko,0,2,i=xm(t.customGesturesClassifierOptions,(o=nt(this.j,ko,4))==null?void 0:o.h())),Le(this.j,0,4,e)):t.customGesturesClassifierOptions===void 0&&((a=nt(this.j,ko,4))==null||a.g()),this.l(t)}Ka(t,e){return Bv(this),Li(this,t,e),zv(this)}La(t,e,n){return Bv(this),vr(this,t,n,e),zv(this)}m(){var t=new Nn;Ct(t,"image_in"),Ct(t,"norm_rect"),rt(t,"hand_gestures"),rt(t,"hand_landmarks"),rt(t,"world_hand_landmarks"),rt(t,"handedness");const e=new li;qi(e,yL,this.v);const n=new Cn;hi(n,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),xt(n,"IMAGE:image_in"),xt(n,"NORM_RECT:norm_rect"),Je(n,"HAND_GESTURES:hand_gestures"),Je(n,"LANDMARKS:hand_landmarks"),Je(n,"WORLD_LANDMARKS:world_hand_landmarks"),Je(n,"HANDEDNESS:handedness"),n.o(e),fi(t,n),this.g.attachProtoVectorListener("hand_landmarks",(i,r)=>{for(const s of i){i=fc(s);const o=[];for(const a of Wr(i,K3,1))o.push({x:$t(a,1)??0,y:$t(a,2)??0,z:$t(a,3)??0,visibility:$t(a,4)??0});this.landmarks.push(o)}ge(this,r)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{ge(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,r)=>{for(const s of i){i=la(s);const o=[];for(const a of Wr(i,Y3,1))o.push({x:$t(a,1)??0,y:$t(a,2)??0,z:$t(a,3)??0,visibility:$t(a,4)??0});this.worldLandmarks.push(o)}ge(this,r)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{ge(this,i)}),this.g.attachProtoVectorListener("hand_gestures",(i,r)=>{this.gestures.push(...Vv(i,!1)),ge(this,r)}),this.g.attachEmptyPacketListener("hand_gestures",i=>{ge(this,i)}),this.g.attachProtoVectorListener("handedness",(i,r)=>{this.handedness.push(...Vv(i)),ge(this,r)}),this.g.attachEmptyPacketListener("handedness",i=>{ge(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};function Hv(t){return{landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handednesses:t.handedness,handedness:t.handedness}}ei.prototype.recognizeForVideo=ei.prototype.La,ei.prototype.recognize=ei.prototype.Ka,ei.prototype.setOptions=ei.prototype.o,ei.createFromModelPath=function(t,e){return Ke(ei,t,{baseOptions:{modelAssetPath:e}})},ei.createFromModelBuffer=function(t,e){return Ke(ei,t,{baseOptions:{modelAssetBuffer:e}})},ei.createFromOptions=function(t,e){return Ke(ei,t,e)},ei.HAND_CONNECTIONS=Fg;var ti=class extends jn{constructor(t,e){super(new Pi(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Le(t=this.j=new yg,0,1,e=new It),this.u=new _g,Le(this.j,0,3,this.u),this.h=new mS,Le(this.j,0,2,this.h),pr(this.h,3,1),Te(this.h,2,.5),Te(this.u,2,.5),Te(this.j,4,.5)}get baseOptions(){return nt(this.j,It,1)}set baseOptions(t){Le(this.j,0,1,t)}o(t){return"numHands"in t&&pr(this.h,3,t.numHands??1),"minHandDetectionConfidence"in t&&Te(this.h,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Te(this.j,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Te(this.u,2,t.minHandPresenceConfidence??.5),this.l(t)}F(t,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Li(this,t,e),Hv(this)}G(t,e,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],vr(this,t,n,e),Hv(this)}m(){var t=new Nn;Ct(t,"image_in"),Ct(t,"norm_rect"),rt(t,"hand_landmarks"),rt(t,"world_hand_landmarks"),rt(t,"handedness");const e=new li;qi(e,vL,this.j);const n=new Cn;hi(n,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),xt(n,"IMAGE:image_in"),xt(n,"NORM_RECT:norm_rect"),Je(n,"LANDMARKS:hand_landmarks"),Je(n,"WORLD_LANDMARKS:world_hand_landmarks"),Je(n,"HANDEDNESS:handedness"),n.o(e),fi(t,n),this.g.attachProtoVectorListener("hand_landmarks",(i,r)=>{for(const s of i)i=fc(s),this.landmarks.push(Qh(i));ge(this,r)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{ge(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,r)=>{for(const s of i)i=la(s),this.worldLandmarks.push(Al(i));ge(this,r)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{ge(this,i)}),this.g.attachProtoVectorListener("handedness",(i,r)=>{var s=this.handedness,o=s.push;const a=[];for(const l of i){i=Kh(l);const c=[];for(const h of i.g())c.push({score:$t(h,2)??0,index:ji(wi(h,1),0)??-1,categoryName:dr(h,3)??"",displayName:dr(h,4)??""});a.push(c)}o.call(s,...a),ge(this,r)}),this.g.attachEmptyPacketListener("handedness",i=>{ge(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};ti.prototype.detectForVideo=ti.prototype.G,ti.prototype.detect=ti.prototype.F,ti.prototype.setOptions=ti.prototype.o,ti.createFromModelPath=function(t,e){return Ke(ti,t,{baseOptions:{modelAssetPath:e}})},ti.createFromModelBuffer=function(t,e){return Ke(ti,t,{baseOptions:{modelAssetBuffer:e}})},ti.createFromOptions=function(t,e){return Ke(ti,t,e)},ti.HAND_CONNECTIONS=Fg;var VS=Zi([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function Gv(t){t.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function Wv(t){try{if(!t.I)return t.h;t.I(t.h)}finally{tf(t)}}function iu(t,e){t=fc(t),e.push(Qh(t))}var Rt=class extends jn{constructor(t,e){super(new Pi(t,e),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Le(t=this.A=new SS,0,1,e=new It),this.u=new _g,Le(this.A,0,2,this.u),this.aa=new xL,Le(this.A,0,3,this.aa),this.j=new Jh,Le(this.A,0,4,this.j),this.H=new lS,Le(this.A,0,5,this.H),this.v=new yS,Le(this.A,0,6,this.v),this.D=new xS,Le(this.A,0,7,this.D),Te(this.j,2,.5),Te(this.j,3,.3),Te(this.H,2,.5),Te(this.v,2,.5),Te(this.v,3,.3),Te(this.D,2,.5),Te(this.u,2,.5)}get baseOptions(){return nt(this.A,It,1)}set baseOptions(t){Le(this.A,0,1,t)}o(t){return"minFaceDetectionConfidence"in t&&Te(this.j,2,t.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in t&&Te(this.j,3,t.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in t&&Te(this.H,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"minPoseDetectionConfidence"in t&&Te(this.v,2,t.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in t&&Te(this.v,3,t.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in t&&Te(this.D,2,t.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in t&&(this.outputPoseSegmentationMasks=!!t.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in t&&Te(this.u,2,t.minHandLandmarksConfidence??.5),this.l(t)}F(t,e,n){const i=typeof e!="function"?e:{};return this.I=typeof e=="function"?e:n,Gv(this),Li(this,t,i),Wv(this)}G(t,e,n,i){const r=typeof n!="function"?n:{};return this.I=typeof n=="function"?n:i,Gv(this),vr(this,t,r,e),Wv(this)}m(){var t=new Nn;Ct(t,"input_frames_image"),rt(t,"pose_landmarks"),rt(t,"pose_world_landmarks"),rt(t,"face_landmarks"),rt(t,"left_hand_landmarks"),rt(t,"left_hand_world_landmarks"),rt(t,"right_hand_landmarks"),rt(t,"right_hand_world_landmarks");const e=new li,n=new Mv;mm(n,1,za("type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),""),function(r,s){if(s!=null)if(Array.isArray(s))vt(r,2,Gh(s,og,void 0,void 0,!1));else{if(!(typeof s=="string"||s instanceof Ur||sc(s)))throw Error("invalid value in Any.value field: "+s+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");mm(r,2,eg(s,!1,!1),vo())}}(n,this.A.g());const i=new Cn;hi(i,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),gh(i,8,Mv,n),xt(i,"IMAGE:input_frames_image"),Je(i,"POSE_LANDMARKS:pose_landmarks"),Je(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),Je(i,"FACE_LANDMARKS:face_landmarks"),Je(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),Je(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),Je(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),Je(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(e),fi(t,i),ef(this,t),this.g.attachProtoListener("pose_landmarks",(r,s)=>{iu(r,this.h.poseLandmarks),ge(this,s)}),this.g.attachEmptyPacketListener("pose_landmarks",r=>{ge(this,r)}),this.g.attachProtoListener("pose_world_landmarks",(r,s)=>{var o=this.h.poseWorldLandmarks;r=la(r),o.push(Al(r)),ge(this,s)}),this.g.attachEmptyPacketListener("pose_world_landmarks",r=>{ge(this,r)}),this.outputPoseSegmentationMasks&&(Je(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),Ca(this,"pose_segmentation_mask"),this.g.W("pose_segmentation_mask",(r,s)=>{this.h.poseSegmentationMasks=[Pa(this,r,!0,!this.I)],ge(this,s)}),this.g.attachEmptyPacketListener("pose_segmentation_mask",r=>{this.h.poseSegmentationMasks=[],ge(this,r)})),this.g.attachProtoListener("face_landmarks",(r,s)=>{iu(r,this.h.faceLandmarks),ge(this,s)}),this.g.attachEmptyPacketListener("face_landmarks",r=>{ge(this,r)}),this.outputFaceBlendshapes&&(rt(t,"extra_blendshapes"),Je(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",(r,s)=>{var o=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(r=Kh(r),o.push(wg(r.g()??[]))),ge(this,s)}),this.g.attachEmptyPacketListener("extra_blendshapes",r=>{ge(this,r)})),this.g.attachProtoListener("left_hand_landmarks",(r,s)=>{iu(r,this.h.leftHandLandmarks),ge(this,s)}),this.g.attachEmptyPacketListener("left_hand_landmarks",r=>{ge(this,r)}),this.g.attachProtoListener("left_hand_world_landmarks",(r,s)=>{var o=this.h.leftHandWorldLandmarks;r=la(r),o.push(Al(r)),ge(this,s)}),this.g.attachEmptyPacketListener("left_hand_world_landmarks",r=>{ge(this,r)}),this.g.attachProtoListener("right_hand_landmarks",(r,s)=>{iu(r,this.h.rightHandLandmarks),ge(this,s)}),this.g.attachEmptyPacketListener("right_hand_landmarks",r=>{ge(this,r)}),this.g.attachProtoListener("right_hand_world_landmarks",(r,s)=>{var o=this.h.rightHandWorldLandmarks;r=la(r),o.push(Al(r)),ge(this,s)}),this.g.attachEmptyPacketListener("right_hand_world_landmarks",r=>{ge(this,r)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Rt.prototype.detectForVideo=Rt.prototype.G,Rt.prototype.detect=Rt.prototype.F,Rt.prototype.setOptions=Rt.prototype.o,Rt.createFromModelPath=function(t,e){return Ke(Rt,t,{baseOptions:{modelAssetPath:e}})},Rt.createFromModelBuffer=function(t,e){return Ke(Rt,t,{baseOptions:{modelAssetBuffer:e}})},Rt.createFromOptions=function(t,e){return Ke(Rt,t,e)},Rt.HAND_CONNECTIONS=Fg,Rt.POSE_CONNECTIONS=VS,Rt.FACE_LANDMARKS_LIPS=Pg,Rt.FACE_LANDMARKS_LEFT_EYE=Lg,Rt.FACE_LANDMARKS_LEFT_EYEBROW=Ig,Rt.FACE_LANDMARKS_LEFT_IRIS=OS,Rt.FACE_LANDMARKS_RIGHT_EYE=Dg,Rt.FACE_LANDMARKS_RIGHT_EYEBROW=Ng,Rt.FACE_LANDMARKS_RIGHT_IRIS=kS,Rt.FACE_LANDMARKS_FACE_OVAL=Ug,Rt.FACE_LANDMARKS_CONTOURS=BS,Rt.FACE_LANDMARKS_TESSELATION=zS;var gi=class extends jn{constructor(t,e){super(new Pi(t,e),"input_image","norm_rect",!0),this.j={classifications:[]},Le(t=this.h=new MS,0,1,e=new It)}get baseOptions(){return nt(this.h,It,1)}set baseOptions(t){Le(this.h,0,1,t)}o(t){return Le(this.h,0,2,xm(t,nt(this.h,Zh,2))),this.l(t)}ua(t,e){return this.j={classifications:[]},Li(this,t,e),this.j}va(t,e,n){return this.j={classifications:[]},vr(this,t,n,e),this.j}m(){var t=new Nn;Ct(t,"input_image"),Ct(t,"norm_rect"),rt(t,"classifications");const e=new li;qi(e,ML,this.h);const n=new Cn;hi(n,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),xt(n,"IMAGE:input_image"),xt(n,"NORM_RECT:norm_rect"),Je(n,"CLASSIFICATIONS:classifications"),n.o(e),fi(t,n),this.g.attachProtoListener("classifications",(i,r)=>{this.j=function(s){const o={classifications:Wr(s,rL,1).map(a=>{var l;return wg(((l=nt(a,pg,4))==null?void 0:l.g())??[],ji(wi(a,2),0),dr(a,3))})};return fh(Rs(s,2))!=null&&(o.timestampMs=ji(fh(Rs(s,2)),0)),o}(oL(i)),ge(this,r)}),this.g.attachEmptyPacketListener("classifications",i=>{ge(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};gi.prototype.classifyForVideo=gi.prototype.va,gi.prototype.classify=gi.prototype.ua,gi.prototype.setOptions=gi.prototype.o,gi.createFromModelPath=function(t,e){return Ke(gi,t,{baseOptions:{modelAssetPath:e}})},gi.createFromModelBuffer=function(t,e){return Ke(gi,t,{baseOptions:{modelAssetBuffer:e}})},gi.createFromOptions=function(t,e){return Ke(gi,t,e)};var ni=class extends jn{constructor(t,e){super(new Pi(t,e),"image_in","norm_rect",!0),this.h=new ES,this.embeddings={embeddings:[]},Le(t=this.h,0,1,e=new It)}get baseOptions(){return nt(this.h,It,1)}set baseOptions(t){Le(this.h,0,1,t)}o(t){var e=this.h,n=nt(this.h,wv,2);return n=n?n.clone():new wv,t.l2Normalize!==void 0?jl(n,1,t.l2Normalize):"l2Normalize"in t&&vt(n,1),t.quantize!==void 0?jl(n,2,t.quantize):"quantize"in t&&vt(n,2),Le(e,0,2,n),this.l(t)}Ba(t,e){return Li(this,t,e),this.embeddings}Ca(t,e,n){return vr(this,t,n,e),this.embeddings}m(){var t=new Nn;Ct(t,"image_in"),Ct(t,"norm_rect"),rt(t,"embeddings_out");const e=new li;qi(e,EL,this.h);const n=new Cn;hi(n,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),xt(n,"IMAGE:image_in"),xt(n,"NORM_RECT:norm_rect"),Je(n,"EMBEDDINGS:embeddings_out"),n.o(e),fi(t,n),this.g.attachProtoListener("embeddings_out",(i,r)=>{i=uL(i),this.embeddings=function(s){return{embeddings:Wr(s,lL,1).map(o=>{var l,c;const a={headIndex:ji(wi(o,3),0)??-1,headName:dr(o,4)??""};if(v3(o,vm,Md(o,1))!==void 0)o=Jo(o=nt(o,vm,Md(o,1)),1,Us),a.floatEmbedding=o.slice();else{const h=new Uint8Array(0);a.quantizedEmbedding=((c=(l=nt(o,aL,Md(o,2)))==null?void 0:l.qa())==null?void 0:c.h())??h}return a}),timestampMs:ji(fh(Rs(s,2)),0)}}(i),ge(this,r)}),this.g.attachEmptyPacketListener("embeddings_out",i=>{ge(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};ni.cosineSimilarity=function(t,e){if(t.floatEmbedding&&e.floatEmbedding)t=Cv(t.floatEmbedding,e.floatEmbedding);else{if(!t.quantizedEmbedding||!e.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");t=Cv(Av(t.quantizedEmbedding),Av(e.quantizedEmbedding))}return t},ni.prototype.embedForVideo=ni.prototype.Ca,ni.prototype.embed=ni.prototype.Ba,ni.prototype.setOptions=ni.prototype.o,ni.createFromModelPath=function(t,e){return Ke(ni,t,{baseOptions:{modelAssetPath:e}})},ni.createFromModelBuffer=function(t,e){return Ke(ni,t,{baseOptions:{modelAssetBuffer:e}})},ni.createFromOptions=function(t,e){return Ke(ni,t,e)};var Em=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){var t,e;(t=this.confidenceMasks)==null||t.forEach(n=>{n.close()}),(e=this.categoryMask)==null||e.close()}};function Xv(t){t.categoryMask=void 0,t.confidenceMasks=void 0,t.qualityScores=void 0}function $v(t){try{const e=new Em(t.confidenceMasks,t.categoryMask,t.qualityScores);if(!t.j)return e;t.j(e)}finally{tf(t)}}Em.prototype.close=Em.prototype.close;var kn=class extends jn{constructor(t,e){super(new Pi(t,e),"image_in","norm_rect",!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Mg,this.v=new wS,Le(this.h,0,3,this.v),Le(t=this.h,0,1,e=new It)}get baseOptions(){return nt(this.h,It,1)}set baseOptions(t){Le(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?vt(this.h,2,za(t.displayNamesLocale)):"displayNamesLocale"in t&&vt(this.h,2),"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}L(){(function(t){var n,i;const e=Wr(t.fa(),Cn,1).filter(r=>dr(r,1).includes("mediapipe.tasks.TensorsToSegmentationCalculator"));if(t.u=[],1<e.length)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");e.length===1&&(((i=(n=nt(e[0],li,7))==null?void 0:n.l())==null?void 0:i.g())??new Map).forEach((r,s)=>{t.u[Number(s)]=dr(r,1)})})(this)}ga(t,e,n){const i=typeof e!="function"?e:{};return this.j=typeof e=="function"?e:n,Xv(this),Li(this,t,i),$v(this)}Na(t,e,n,i){const r=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:i,Xv(this),vr(this,t,r,e),$v(this)}Fa(){return this.u}m(){var t=new Nn;Ct(t,"image_in"),Ct(t,"norm_rect");const e=new li;qi(e,AS,this.h);const n=new Cn;hi(n,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),xt(n,"IMAGE:image_in"),xt(n,"NORM_RECT:norm_rect"),n.o(e),fi(t,n),ef(this,t),this.outputConfidenceMasks&&(rt(t,"confidence_masks"),Je(n,"CONFIDENCE_MASKS:confidence_masks"),Ca(this,"confidence_masks"),this.g.da("confidence_masks",(i,r)=>{this.confidenceMasks=i.map(s=>Pa(this,s,!0,!this.j)),ge(this,r)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],ge(this,i)})),this.outputCategoryMask&&(rt(t,"category_mask"),Je(n,"CATEGORY_MASK:category_mask"),Ca(this,"category_mask"),this.g.W("category_mask",(i,r)=>{this.categoryMask=Pa(this,i,!1,!this.j),ge(this,r)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,ge(this,i)})),rt(t,"quality_scores"),Je(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,r)=>{this.qualityScores=i,ge(this,r)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,ge(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};kn.prototype.getLabels=kn.prototype.Fa,kn.prototype.segmentForVideo=kn.prototype.Na,kn.prototype.segment=kn.prototype.ga,kn.prototype.setOptions=kn.prototype.o,kn.createFromModelPath=function(t,e){return Ke(kn,t,{baseOptions:{modelAssetPath:e}})},kn.createFromModelBuffer=function(t,e){return Ke(kn,t,{baseOptions:{modelAssetBuffer:e}})},kn.createFromOptions=function(t,e){return Ke(kn,t,e)};var wm=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){var t,e;(t=this.confidenceMasks)==null||t.forEach(n=>{n.close()}),(e=this.categoryMask)==null||e.close()}};wm.prototype.close=wm.prototype.close;var LL=class extends Ee{constructor(t){super(t)}},La=[0,Wt,-2],IL=[0,Fr,-3,Yt],of=[0,Fr,-3,Yt,Fr,-1],HS=[0,of],DL=[0,HS,La],NL=[0,of,La],GS=[0,of,Wt,-1],UL=[0,GS,La],FL=[0,Fr,-3,Yt,La,-1],OL=[0,Fr,-3,Yt,mr],Ad=class extends Ee{constructor(t){super(t)}},jv=[0,Fr,-1,Yt],WS=class extends Ee{constructor(){super()}};WS.B=[1];var Yv=class extends Ee{constructor(t){super(t)}},Tm=[1,2,3,4,5,6,7,8,9,10,14,15],kL=[0,Tm,mt,of,mt,NL,mt,HS,mt,DL,mt,jv,mt,OL,mt,IL,mt,[0,pt,Fr,-2,Yt,Wt,Yt,-1,2,Fr,La],mt,GS,mt,UL,Fr,La,pt,mt,FL,mt,[0,Qt,jv]],BL=[0,pt,Wt,-1,Yt],Am=class extends Ee{constructor(){super()}};Am.B=[1],Am.prototype.g=qh([0,Qt,kL,pt,BL]);var tr=class extends jn{constructor(t,e){super(new Pi(t,e),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Mg,this.v=new wS,Le(this.h,0,3,this.v),Le(t=this.h,0,1,e=new It)}get baseOptions(){return nt(this.h,It,1)}set baseOptions(t){Le(this.h,0,1,t)}o(t){return"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}ga(t,e,n,i){const r=typeof n!="function"?n:{};this.j=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.J+1,i=new Am;const s=new Yv;var o=new LL;if(pr(o,1,255),Le(s,0,12,o),e.keypoint&&e.scribble)throw Error("Cannot provide both keypoint and scribble.");if(e.keypoint){var a=new Ad;jl(a,3,!0),Te(a,1,e.keypoint.x),Te(a,2,e.keypoint.y),El(s,5,Tm,a)}else{if(!e.scribble)throw Error("Must provide either a keypoint or a scribble.");for(a of(o=new WS,e.scribble))jl(e=new Ad,3,!0),Te(e,1,a.x),Te(e,2,a.y),gh(o,1,Ad,e);El(s,15,Tm,o)}gh(i,1,Yv,s),this.g.addProtoToStream(i.g(),"drishti.RenderData","roi_in",n),Li(this,t,r);e:{try{const c=new wm(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var l=c;break e}this.j(c)}finally{tf(this)}l=void 0}return l}m(){var t=new Nn;Ct(t,"image_in"),Ct(t,"roi_in"),Ct(t,"norm_rect_in");const e=new li;qi(e,AS,this.h);const n=new Cn;hi(n,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraph"),xt(n,"IMAGE:image_in"),xt(n,"ROI:roi_in"),xt(n,"NORM_RECT:norm_rect_in"),n.o(e),fi(t,n),ef(this,t),this.outputConfidenceMasks&&(rt(t,"confidence_masks"),Je(n,"CONFIDENCE_MASKS:confidence_masks"),Ca(this,"confidence_masks"),this.g.da("confidence_masks",(i,r)=>{this.confidenceMasks=i.map(s=>Pa(this,s,!0,!this.j)),ge(this,r)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],ge(this,i)})),this.outputCategoryMask&&(rt(t,"category_mask"),Je(n,"CATEGORY_MASK:category_mask"),Ca(this,"category_mask"),this.g.W("category_mask",(i,r)=>{this.categoryMask=Pa(this,i,!1,!this.j),ge(this,r)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,ge(this,i)})),rt(t,"quality_scores"),Je(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,r)=>{this.qualityScores=i,ge(this,r)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,ge(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};tr.prototype.segment=tr.prototype.ga,tr.prototype.setOptions=tr.prototype.o,tr.createFromModelPath=function(t,e){return Ke(tr,t,{baseOptions:{modelAssetPath:e}})},tr.createFromModelBuffer=function(t,e){return Ke(tr,t,{baseOptions:{modelAssetBuffer:e}})},tr.createFromOptions=function(t,e){return Ke(tr,t,e)};var _i=class extends jn{constructor(t,e){super(new Pi(t,e),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},Le(t=this.h=new Eg,0,1,e=new It)}get baseOptions(){return nt(this.h,It,1)}set baseOptions(t){Le(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?vt(this.h,2,za(t.displayNamesLocale)):"displayNamesLocale"in t&&vt(this.h,2),t.maxResults!==void 0?pr(this.h,3,t.maxResults):"maxResults"in t&&vt(this.h,3),t.scoreThreshold!==void 0?Te(this.h,4,t.scoreThreshold):"scoreThreshold"in t&&vt(this.h,4),t.categoryAllowlist!==void 0?mh(this.h,5,t.categoryAllowlist):"categoryAllowlist"in t&&vt(this.h,5),t.categoryDenylist!==void 0?mh(this.h,6,t.categoryDenylist):"categoryDenylist"in t&&vt(this.h,6),this.l(t)}F(t,e){return this.j={detections:[]},Li(this,t,e),this.j}G(t,e,n){return this.j={detections:[]},vr(this,t,n,e),this.j}m(){var t=new Nn;Ct(t,"input_frame_gpu"),Ct(t,"norm_rect"),rt(t,"detections");const e=new li;qi(e,TL,this.h);const n=new Cn;hi(n,"mediapipe.tasks.vision.ObjectDetectorGraph"),xt(n,"IMAGE:input_frame_gpu"),xt(n,"NORM_RECT:norm_rect"),Je(n,"DETECTIONS:detections"),n.o(e),fi(t,n),this.g.attachProtoVectorListener("detections",(i,r)=>{for(const s of i)i=j3(s),this.j.detections.push(RS(i));ge(this,r)}),this.g.attachEmptyPacketListener("detections",i=>{ge(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};_i.prototype.detectForVideo=_i.prototype.G,_i.prototype.detect=_i.prototype.F,_i.prototype.setOptions=_i.prototype.o,_i.createFromModelPath=async function(t,e){return Ke(_i,t,{baseOptions:{modelAssetPath:e}})},_i.createFromModelBuffer=function(t,e){return Ke(_i,t,{baseOptions:{modelAssetBuffer:e}})},_i.createFromOptions=function(t,e){return Ke(_i,t,e)};var Cm=class{constructor(t,e,n){this.landmarks=t,this.worldLandmarks=e,this.segmentationMasks=n}close(){var t;(t=this.segmentationMasks)==null||t.forEach(e=>{e.close()})}};function qv(t){t.landmarks=[],t.worldLandmarks=[],t.segmentationMasks=void 0}function Kv(t){try{const e=new Cm(t.landmarks,t.worldLandmarks,t.segmentationMasks);if(!t.j)return e;t.j(e)}finally{tf(t)}}Cm.prototype.close=Cm.prototype.close;var Bn=class extends jn{constructor(t,e){super(new Pi(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Le(t=this.h=new CS,0,1,e=new It),this.D=new xS,Le(this.h,0,3,this.D),this.v=new yS,Le(this.h,0,2,this.v),pr(this.v,4,1),Te(this.v,2,.5),Te(this.D,2,.5),Te(this.h,4,.5)}get baseOptions(){return nt(this.h,It,1)}set baseOptions(t){Le(this.h,0,1,t)}o(t){return"numPoses"in t&&pr(this.v,4,t.numPoses??1),"minPoseDetectionConfidence"in t&&Te(this.v,2,t.minPoseDetectionConfidence??.5),"minTrackingConfidence"in t&&Te(this.h,4,t.minTrackingConfidence??.5),"minPosePresenceConfidence"in t&&Te(this.D,2,t.minPosePresenceConfidence??.5),"outputSegmentationMasks"in t&&(this.outputSegmentationMasks=t.outputSegmentationMasks??!1),this.l(t)}F(t,e,n){const i=typeof e!="function"?e:{};return this.j=typeof e=="function"?e:n,qv(this),Li(this,t,i),Kv(this)}G(t,e,n,i){const r=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:i,qv(this),vr(this,t,r,e),Kv(this)}m(){var t=new Nn;Ct(t,"image_in"),Ct(t,"norm_rect"),rt(t,"normalized_landmarks"),rt(t,"world_landmarks"),rt(t,"segmentation_masks");const e=new li;qi(e,AL,this.h);const n=new Cn;hi(n,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),xt(n,"IMAGE:image_in"),xt(n,"NORM_RECT:norm_rect"),Je(n,"NORM_LANDMARKS:normalized_landmarks"),Je(n,"WORLD_LANDMARKS:world_landmarks"),n.o(e),fi(t,n),ef(this,t),this.g.attachProtoVectorListener("normalized_landmarks",(i,r)=>{this.landmarks=[];for(const s of i)i=fc(s),this.landmarks.push(Qh(i));ge(this,r)}),this.g.attachEmptyPacketListener("normalized_landmarks",i=>{this.landmarks=[],ge(this,i)}),this.g.attachProtoVectorListener("world_landmarks",(i,r)=>{this.worldLandmarks=[];for(const s of i)i=la(s),this.worldLandmarks.push(Al(i));ge(this,r)}),this.g.attachEmptyPacketListener("world_landmarks",i=>{this.worldLandmarks=[],ge(this,i)}),this.outputSegmentationMasks&&(Je(n,"SEGMENTATION_MASK:segmentation_masks"),Ca(this,"segmentation_masks"),this.g.da("segmentation_masks",(i,r)=>{this.segmentationMasks=i.map(s=>Pa(this,s,!0,!this.j)),ge(this,r)}),this.g.attachEmptyPacketListener("segmentation_masks",i=>{this.segmentationMasks=[],ge(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Bn.prototype.detectForVideo=Bn.prototype.G,Bn.prototype.detect=Bn.prototype.F,Bn.prototype.setOptions=Bn.prototype.o,Bn.createFromModelPath=function(t,e){return Ke(Bn,t,{baseOptions:{modelAssetPath:e}})},Bn.createFromModelBuffer=function(t,e){return Ke(Bn,t,{baseOptions:{modelAssetBuffer:e}})},Bn.createFromOptions=function(t,e){return Ke(Bn,t,e)},Bn.POSE_CONNECTIONS=VS;const zL="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm",VL="https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task";class HL{constructor(e,n={}){Xg(this,"_loop",()=>{if(!this.running)return;const e=performance.now();if(this.video.readyState>=2){const n=this.landmarker.detectForVideo(this.video,e);n.landmarks&&n.landmarks[0]&&this._process(n.landmarks[0],e)}requestAnimationFrame(this._loop)});this.video=e,this.cb=n,this.running=!1,this.landmarker=null,this.baselineY=null,this.prevY=null,this.lastJump=0,this.lastCrouch=0,this.lane=1,this.t=0}async start(){var i,r,s,o,a,l;(r=(i=this.cb).onStatus)==null||r.call(i,"Chargement du modèle…");const e=await Ks.forVisionTasks(zL);this.landmarker=await Bn.createFromOptions(e,{baseOptions:{modelAssetPath:VL,delegate:"GPU"},runningMode:"VIDEO",numPoses:1}),(o=(s=this.cb).onStatus)==null||o.call(s,"Accès à la caméra…");const n=await navigator.mediaDevices.getUserMedia({video:{width:640,height:480,facingMode:"user"},audio:!1});this.video.srcObject=n,await this.video.play(),this.running=!0,this.baselineY=null,(l=(a=this.cb).onStatus)==null||l.call(a,"Caméra active — bouge !"),this._loop()}stop(){this.running=!1;const e=this.video.srcObject;e&&e.getTracks().forEach(n=>n.stop()),this.video.srcObject=null}_process(e,n){var g,p,y,m,u,_,v,M;const i=e[11],r=e[12],s=e[23],o=e[24];if(!i||!r||!s||!o)return;const a=(i.y+r.y+s.y+o.y)/4,c=1-(i.x+r.x+s.x+o.x)/4;this.baselineY==null&&(this.baselineY=a);const h=a<this.baselineY-.08?.002:.03;this.baselineY+=(a-this.baselineY)*h;const d=this.prevY==null?0:a-this.prevY;this.prevY=a,a<this.baselineY-.06&&d<-.008&&n-this.lastJump>600&&(this.lastJump=n,(p=(g=this.cb).onJump)==null||p.call(g)),a>this.baselineY+.07&&n-this.lastCrouch>700&&(this.lastCrouch=n,(m=(y=this.cb).onCrouch)==null||m.call(y));let f=1;c<.4?f=0:c>.6&&(f=2),f!==this.lane&&(this.lane=f,(_=(u=this.cb).onLane)==null||_.call(u,f)),(M=(v=this.cb).onPose)==null||M.call(v,{cy:a,mx:c,baseline:this.baselineY})}}const is=[{id:"lila",name:"Lila",colors:{skin:"#d9a06b",shirt:"#a855f7",pants:"#4c1d95",cap:"#fde047"}},{id:"sam",name:"Sam",colors:{skin:"#c68642",shirt:"#22c55e",pants:"#14532d",cap:"#ffffff"}}];function GL(){const t=bt.useRef(null),e=bt.useRef(null),n=bt.useRef(null),i=bt.useRef(null),r=bt.useRef(null),[s,o]=bt.useState("menu"),[a,l]=bt.useState(0),[c,h]=bt.useState(0),[d,f]=bt.useState(()=>Number(localStorage.getItem("sublive_best")||0)),[g,p]=bt.useState({magnet:!1,boots:!1}),[y,m]=bt.useState("off"),[u,_]=bt.useState(""),[v,M]=bt.useState(!1),[R,A]=bt.useState(1),[T,b]=bt.useState([0,1,0,1]),[H,x]=bt.useState(["Joueur 1","Joueur 2","Joueur 3","Joueur 4"]),[E,F]=bt.useState(0),[U,W]=bt.useState(1),[$,V]=bt.useState([0]),[q,L]=bt.useState([null]);bt.useEffect(()=>{const Z=new Hb(t.current,{onScore:(Ne,Pe)=>{l(Ne),h(Pe)},onPower:(Ne,Pe)=>p({magnet:Ne>0,boots:Pe>0}),onGameOver:(Ne,Pe)=>{var De;return(De=r.current)==null?void 0:De.call(r,Ne,Pe)}});e.current=Z;const se=Ne=>{const Pe=e.current;if(Pe)switch(Ne.key){case"ArrowLeft":case"a":case"q":Pe.moveLeft();break;case"ArrowRight":case"d":Pe.moveRight();break;case"ArrowUp":case"w":case"z":case" ":Ne.preventDefault(),Pe.jump();break;case"ArrowDown":case"s":Pe.roll();break;default:return}};window.addEventListener("keydown",se);let Se=0,Oe=0,Ye=0;const He=t.current,P=Ne=>{const Pe=Ne.changedTouches[0];Se=Pe.clientX,Oe=Pe.clientY,Ye=Date.now()},vn=Ne=>{const Pe=e.current;if(!Pe)return;const De=Ne.changedTouches[0],ht=De.clientX-Se,Ue=De.clientY-Oe;if(Math.abs(ht)<25&&Math.abs(Ue)<25&&Date.now()-Ye<250){Pe.jump();return}Math.abs(ht)>Math.abs(Ue)?ht>0?Pe.moveRight():Pe.moveLeft():Ue>0?Pe.roll():Pe.jump()};return He.addEventListener("touchstart",P,{passive:!0}),He.addEventListener("touchend",vn,{passive:!0}),()=>{var Ne;window.removeEventListener("keydown",se),He.removeEventListener("touchstart",P),He.removeEventListener("touchend",vn),(Ne=i.current)==null||Ne.stop(),Z.destroy()}},[]),r.current=(Z,se)=>{if(!v){Z>d&&(f(Z),localStorage.setItem("sublive_best",String(Z))),o("over");return}const Se=$.slice();Se[E]=(Se[E]||0)+se;const Oe=q.slice();Oe[E]=se,V(Se),L(Oe),E+1<R?(F(E+1),o("ready")):o("ranking")};const K=async()=>{if(y==="on"||y==="loading")return;m("loading");const Z=new HL(n.current,{onStatus:se=>_(se),onJump:()=>{var se;return(se=e.current)==null?void 0:se.jump()},onCrouch:()=>{var se;return(se=e.current)==null?void 0:se.roll()},onLane:se=>{var Se;return(Se=e.current)==null?void 0:Se.setLane(se)}});i.current=Z;try{await Z.start(),m("on")}catch(se){console.error(se),m("error"),_((se==null?void 0:se.message)||"Caméra indisponible")}},J=Z=>{M(Z),A(Z?3:1),o("setup")},re=Z=>{const se=is[T[Z]]||is[0];e.current.setCharacter(se.colors),l(0),h(0),p({magnet:!1,boots:!1}),o("playing"),e.current.start()},Ie=()=>{V(Array(R).fill(0)),L(Array(R).fill(null)),F(0),W(1),v?o("ready"):re(0)},je=()=>{L(Array(R).fill(null)),F(0),W(U+1),o("ready")},X=Z=>H[Z]||`Joueur ${Z+1}`,te=$.map((Z,se)=>({i:se,t:Z})).sort((Z,se)=>se.t-Z.t),ue=({ci:Z,selected:se,onClick:Se})=>ae.jsx("button",{onClick:Se,title:is[Z].name,style:{width:46,height:46,borderRadius:12,cursor:"pointer",background:is[Z].colors.shirt,border:se?"3px solid #fff":"3px solid transparent",boxShadow:se?"0 0 0 2px #22d3ee":"none",display:"grid",placeItems:"center",padding:0},children:ae.jsx("span",{style:{width:16,height:16,borderRadius:"50%",background:is[Z].colors.cap,border:"2px solid rgba(0,0,0,.25)"}})});return ae.jsxs("div",{className:"app",children:[ae.jsx("canvas",{ref:t}),ae.jsxs("div",{className:`cam ${y==="on"?"live":""}`,children:[ae.jsx("video",{ref:n,playsInline:!0,muted:!0}),y==="on"&&ae.jsx("span",{className:"cam-badge",children:"● LIVE"})]}),s==="playing"&&ae.jsxs("div",{className:"hud",children:[ae.jsx("div",{className:"pill score",children:a.toLocaleString("fr-FR")}),ae.jsxs("div",{className:"pill coins",children:["🪙 ",c]}),g.magnet&&ae.jsx("div",{className:"pill power",children:"🧲"}),g.boots&&ae.jsx("div",{className:"pill power",children:"👢"}),v&&ae.jsxs("div",{className:"pill power",children:["👤 ",X(E)," · M",U]})]}),s==="menu"&&ae.jsxs("div",{className:"overlay",children:[ae.jsx("h1",{children:"subLive"}),ae.jsx("p",{children:"Cours le plus loin possible, esquive les obstacles et ramasse les pièces. La vitesse augmente sans cesse !"}),ae.jsxs("div",{className:"cam-ctrl",children:[ae.jsx("button",{className:"btn ghost",onClick:K,disabled:y==="on"||y==="loading",children:y==="on"?"📷 Caméra active":y==="loading"?"⏳ …":"📷 Activer la webcam"}),u&&ae.jsx("span",{className:"cam-msg",children:u})]}),ae.jsx("div",{className:"keys",children:y==="on"?ae.jsxs("span",{children:["🕺 ",ae.jsx("b",{children:"Saute"})," pour sauter · ",ae.jsx("b",{children:"baisse-toi"})," pour glisser · ",ae.jsx("b",{children:"déplace-toi"})," à gauche/droite"]}):ae.jsxs("span",{children:[ae.jsx("kbd",{children:"←"}),ae.jsx("kbd",{children:"→"})," voie · ",ae.jsx("kbd",{children:"↑"}),"/",ae.jsx("kbd",{children:"Espace"})," sauter · ",ae.jsx("kbd",{children:"↓"})," glisser"]})}),ae.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",justifyContent:"center"},children:[ae.jsx("button",{className:"btn",onClick:()=>J(!1),children:"Solo ▶"}),ae.jsx("button",{className:"btn ghost",onClick:()=>J(!0),children:"Match 👥"})]}),d>0&&ae.jsxs("p",{className:"final",children:["Meilleur score : ",d.toLocaleString("fr-FR")]})]}),s==="setup"&&ae.jsxs("div",{className:"overlay",children:[ae.jsx("h2",{children:v?"Match — joueurs & personnages":"Choisis ton personnage"}),v&&ae.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",justifyContent:"center"},children:[ae.jsx("span",{children:"Joueurs :"}),[2,3,4].map(Z=>ae.jsx("button",{className:`btn ${R===Z?"":"ghost"}`,style:{padding:"6px 14px"},onClick:()=>A(Z),children:Z},Z))]}),ae.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10,margin:"14px 0"},children:Array.from({length:R}).map((Z,se)=>ae.jsxs("div",{style:{display:"flex",gap:10,alignItems:"center",justifyContent:"center"},children:[ae.jsx("input",{value:H[se]||"",maxLength:14,placeholder:`Joueur ${se+1}`,onChange:Se=>x(Oe=>{const Ye=Oe.slice();return Ye[se]=Se.target.value,Ye}),style:{width:120,padding:"6px 10px",borderRadius:8,textAlign:"right",border:"1px solid rgba(255,255,255,.25)",background:"rgba(255,255,255,.08)",color:"#fff",font:"inherit"}}),is.map((Se,Oe)=>ae.jsx(ue,{ci:Oe,selected:T[se]===Oe,onClick:()=>b(Ye=>{const He=Ye.slice();return He[se]=Oe,He})},Oe))]},se))}),ae.jsxs("div",{style:{display:"flex",gap:12,justifyContent:"center"},children:[ae.jsx("button",{className:"btn",onClick:Ie,children:v?"Commencer le match ▶":"Jouer ▶"}),ae.jsx("button",{className:"btn ghost",onClick:()=>o("menu"),children:"← Menu"})]})]}),s==="ready"&&ae.jsxs("div",{className:"overlay",children:[ae.jsxs("h2",{children:["Manche ",U]}),ae.jsxs("p",{className:"final",children:["Au tour de ",ae.jsx("b",{children:X(E)})]}),ae.jsx("div",{style:{display:"grid",placeItems:"center",margin:"6px 0 14px"},children:ae.jsx("span",{style:{width:60,height:60,borderRadius:16,background:is[T[E]].colors.shirt,display:"grid",placeItems:"center"},children:ae.jsx("span",{style:{width:22,height:22,borderRadius:"50%",background:is[T[E]].colors.cap,border:"2px solid rgba(0,0,0,.25)"}})})}),ae.jsx("button",{className:"btn",onClick:()=>re(E),children:"Jouer ▶"})]}),s==="ranking"&&ae.jsxs("div",{className:"overlay",children:[ae.jsxs("h2",{children:["Classement — fin de la manche ",U]}),ae.jsxs("table",{style:{borderCollapse:"collapse",margin:"14px auto 22px",minWidth:440,fontSize:"1.5rem"},children:[ae.jsx("thead",{children:ae.jsxs("tr",{style:{opacity:.7},children:[ae.jsx("th",{style:{padding:"8px 18px",textAlign:"left"},children:"#"}),ae.jsx("th",{style:{padding:"8px 18px",textAlign:"left"},children:"Joueur"}),ae.jsx("th",{style:{padding:"8px 18px",textAlign:"right"},children:"Manche 🪙"}),ae.jsx("th",{style:{padding:"8px 18px",textAlign:"right"},children:"Total 🪙"})]})}),ae.jsx("tbody",{children:te.map((Z,se)=>ae.jsxs("tr",{style:{borderTop:"1px solid rgba(255,255,255,.12)"},children:[ae.jsx("td",{style:{padding:"12px 18px",fontSize:"1.7rem"},children:se===0?"🥇":se===1?"🥈":se===2?"🥉":se+1}),ae.jsx("td",{style:{padding:"12px 18px"},children:X(Z.i)}),ae.jsx("td",{style:{padding:"12px 18px",textAlign:"right",opacity:.8},children:q[Z.i]!=null?q[Z.i].toLocaleString("fr-FR"):"—"}),ae.jsx("td",{style:{padding:"12px 18px",textAlign:"right",fontWeight:700},children:Z.t.toLocaleString("fr-FR")})]},Z.i))})]}),ae.jsxs("div",{style:{display:"flex",gap:12,justifyContent:"center"},children:[ae.jsxs("button",{className:"btn",onClick:je,children:["Manche ",U+1," ▶"]}),ae.jsx("button",{className:"btn ghost",onClick:()=>o("menu"),children:"Terminer"})]})]}),s==="over"&&ae.jsxs("div",{className:"overlay",children:[ae.jsx("h2",{children:"Perdu !"}),ae.jsxs("p",{className:"final",children:["Score : ",a.toLocaleString("fr-FR")," · 🪙 ",c]}),ae.jsxs("p",{className:"final",children:["Meilleur : ",d.toLocaleString("fr-FR")]}),ae.jsxs("div",{style:{display:"flex",gap:12,justifyContent:"center"},children:[ae.jsx("button",{className:"btn",onClick:()=>re(0),children:"Rejouer ↻"}),ae.jsx("button",{className:"btn ghost",onClick:()=>o("menu"),children:"Menu"})]})]})]})}Cd.createRoot(document.getElementById("root")).render(ae.jsx(dM.StrictMode,{children:ae.jsx(GL,{})}));
