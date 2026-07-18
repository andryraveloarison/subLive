var YS=Object.defineProperty;var qS=(t,e,n)=>e in t?YS(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Wg=(t,e,n)=>qS(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function KS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Kv={exports:{}},_h={},Zv={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jl=Symbol.for("react.element"),ZS=Symbol.for("react.portal"),QS=Symbol.for("react.fragment"),JS=Symbol.for("react.strict_mode"),eM=Symbol.for("react.profiler"),tM=Symbol.for("react.provider"),nM=Symbol.for("react.context"),iM=Symbol.for("react.forward_ref"),rM=Symbol.for("react.suspense"),sM=Symbol.for("react.memo"),oM=Symbol.for("react.lazy"),Xg=Symbol.iterator;function aM(t){return t===null||typeof t!="object"?null:(t=Xg&&t[Xg]||t["@@iterator"],typeof t=="function"?t:null)}var Qv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Jv=Object.assign,e2={};function La(t,e,n){this.props=t,this.context=e,this.refs=e2,this.updater=n||Qv}La.prototype.isReactComponent={};La.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};La.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function t2(){}t2.prototype=La.prototype;function Rm(t,e,n){this.props=t,this.context=e,this.refs=e2,this.updater=n||Qv}var Cm=Rm.prototype=new t2;Cm.constructor=Rm;Jv(Cm,La.prototype);Cm.isPureReactComponent=!0;var $g=Array.isArray,n2=Object.prototype.hasOwnProperty,bm={current:null},i2={key:!0,ref:!0,__self:!0,__source:!0};function r2(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)n2.call(e,i)&&!i2.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:jl,type:t,key:s,ref:o,props:r,_owner:bm.current}}function lM(t,e){return{$$typeof:jl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Pm(t){return typeof t=="object"&&t!==null&&t.$$typeof===jl}function cM(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var jg=/\/+/g;function uf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?cM(""+t.key):e.toString(36)}function iu(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case jl:case ZS:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+uf(o,0):i,$g(r)?(n="",t!=null&&(n=t.replace(jg,"$&/")+"/"),iu(r,e,n,"",function(c){return c})):r!=null&&(Pm(r)&&(r=lM(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(jg,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",$g(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+uf(s,a);o+=iu(s,e,n,l,r)}else if(l=aM(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+uf(s,a++),o+=iu(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function pc(t,e,n){if(t==null)return t;var i=[],r=0;return iu(t,i,"","",function(s){return e.call(n,s,r++)}),i}function uM(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ln={current:null},ru={transition:null},hM={ReactCurrentDispatcher:Ln,ReactCurrentBatchConfig:ru,ReactCurrentOwner:bm};function s2(){throw Error("act(...) is not supported in production builds of React.")}Ve.Children={map:pc,forEach:function(t,e,n){pc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return pc(t,function(){e++}),e},toArray:function(t){return pc(t,function(e){return e})||[]},only:function(t){if(!Pm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ve.Component=La;Ve.Fragment=QS;Ve.Profiler=eM;Ve.PureComponent=Rm;Ve.StrictMode=JS;Ve.Suspense=rM;Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hM;Ve.act=s2;Ve.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Jv({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=bm.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)n2.call(e,l)&&!i2.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:jl,type:t.type,key:r,ref:s,props:i,_owner:o}};Ve.createContext=function(t){return t={$$typeof:nM,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:tM,_context:t},t.Consumer=t};Ve.createElement=r2;Ve.createFactory=function(t){var e=r2.bind(null,t);return e.type=t,e};Ve.createRef=function(){return{current:null}};Ve.forwardRef=function(t){return{$$typeof:iM,render:t}};Ve.isValidElement=Pm;Ve.lazy=function(t){return{$$typeof:oM,_payload:{_status:-1,_result:t},_init:uM}};Ve.memo=function(t,e){return{$$typeof:sM,type:t,compare:e===void 0?null:e}};Ve.startTransition=function(t){var e=ru.transition;ru.transition={};try{t()}finally{ru.transition=e}};Ve.unstable_act=s2;Ve.useCallback=function(t,e){return Ln.current.useCallback(t,e)};Ve.useContext=function(t){return Ln.current.useContext(t)};Ve.useDebugValue=function(){};Ve.useDeferredValue=function(t){return Ln.current.useDeferredValue(t)};Ve.useEffect=function(t,e){return Ln.current.useEffect(t,e)};Ve.useId=function(){return Ln.current.useId()};Ve.useImperativeHandle=function(t,e,n){return Ln.current.useImperativeHandle(t,e,n)};Ve.useInsertionEffect=function(t,e){return Ln.current.useInsertionEffect(t,e)};Ve.useLayoutEffect=function(t,e){return Ln.current.useLayoutEffect(t,e)};Ve.useMemo=function(t,e){return Ln.current.useMemo(t,e)};Ve.useReducer=function(t,e,n){return Ln.current.useReducer(t,e,n)};Ve.useRef=function(t){return Ln.current.useRef(t)};Ve.useState=function(t){return Ln.current.useState(t)};Ve.useSyncExternalStore=function(t,e,n){return Ln.current.useSyncExternalStore(t,e,n)};Ve.useTransition=function(){return Ln.current.useTransition()};Ve.version="18.3.1";Zv.exports=Ve;var Rn=Zv.exports;const fM=KS(Rn);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dM=Rn,pM=Symbol.for("react.element"),mM=Symbol.for("react.fragment"),gM=Object.prototype.hasOwnProperty,_M=dM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vM={key:!0,ref:!0,__self:!0,__source:!0};function o2(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)gM.call(e,i)&&!vM.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:pM,type:t,key:s,ref:o,props:r,_owner:_M.current}}_h.Fragment=mM;_h.jsx=o2;_h.jsxs=o2;Kv.exports=_h;var He=Kv.exports,Ad={},a2={exports:{}},ci={},l2={exports:{}},c2={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,q){var Q=L.length;L.push(q);e:for(;0<Q;){var re=Q-1>>>1,Ce=L[re];if(0<r(Ce,q))L[re]=q,L[Q]=Ce,Q=re;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var q=L[0],Q=L.pop();if(Q!==q){L[0]=Q;e:for(var re=0,Ce=L.length,je=Ce>>>1;re<je;){var X=2*(re+1)-1,te=L[X],ue=X+1,ae=L[ue];if(0>r(te,Q))ue<Ce&&0>r(ae,te)?(L[re]=ae,L[ue]=Q,re=ue):(L[re]=te,L[X]=Q,re=X);else if(ue<Ce&&0>r(ae,Q))L[re]=ae,L[ue]=Q,re=ue;else break e}}return q}function r(L,q){var Q=L.sortIndex-q.sortIndex;return Q!==0?Q:L.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,d=null,f=3,g=!1,p=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var q=n(c);q!==null;){if(q.callback===null)i(c);else if(q.startTime<=L)i(c),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(c)}}function S(L){if(x=!1,v(L),!p)if(n(l)!==null)p=!0,V(C);else{var q=n(c);q!==null&&K(S,q.startTime-L)}}function C(L,q){p=!1,x&&(x=!1,u(b),b=-1),g=!0;var Q=f;try{for(v(q),d=n(l);d!==null&&(!(d.expirationTime>q)||L&&!E());){var re=d.callback;if(typeof re=="function"){d.callback=null,f=d.priorityLevel;var Ce=re(d.expirationTime<=q);q=t.unstable_now(),typeof Ce=="function"?d.callback=Ce:d===n(l)&&i(l),v(q)}else i(l);d=n(l)}if(d!==null)var je=!0;else{var X=n(c);X!==null&&K(S,X.startTime-q),je=!1}return je}finally{d=null,f=Q,g=!1}}var A=!1,T=null,b=-1,H=5,y=-1;function E(){return!(t.unstable_now()-y<H)}function F(){if(T!==null){var L=t.unstable_now();y=L;var q=!0;try{q=T(!0,L)}finally{q?N():(A=!1,T=null)}}else A=!1}var N;if(typeof _=="function")N=function(){_(F)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,$=W.port2;W.port1.onmessage=F,N=function(){$.postMessage(null)}}else N=function(){m(F,0)};function V(L){T=L,A||(A=!0,N())}function K(L,q){b=m(function(){L(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){p||g||(p=!0,V(C))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(f){case 1:case 2:case 3:var q=3;break;default:q=f}var Q=f;f=q;try{return L()}finally{f=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,q){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var Q=f;f=L;try{return q()}finally{f=Q}},t.unstable_scheduleCallback=function(L,q,Q){var re=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?re+Q:re):Q=re,L){case 1:var Ce=-1;break;case 2:Ce=250;break;case 5:Ce=1073741823;break;case 4:Ce=1e4;break;default:Ce=5e3}return Ce=Q+Ce,L={id:h++,callback:q,priorityLevel:L,startTime:Q,expirationTime:Ce,sortIndex:-1},Q>re?(L.sortIndex=Q,e(c,L),n(l)===null&&L===n(c)&&(x?(u(b),b=-1):x=!0,K(S,Q-re))):(L.sortIndex=Ce,e(l,L),p||g||(p=!0,V(C))),L},t.unstable_shouldYield=E,t.unstable_wrapCallback=function(L){var q=f;return function(){var Q=f;f=q;try{return L.apply(this,arguments)}finally{f=Q}}}})(c2);l2.exports=c2;var yM=l2.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xM=Rn,oi=yM;function ee(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u2=new Set,Al={};function yo(t,e){la(t,e),la(t+"Capture",e)}function la(t,e){for(Al[t]=e,t=0;t<e.length;t++)u2.add(e[t])}var kr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rd=Object.prototype.hasOwnProperty,SM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Yg={},qg={};function MM(t){return Rd.call(qg,t)?!0:Rd.call(Yg,t)?!1:SM.test(t)?qg[t]=!0:(Yg[t]=!0,!1)}function EM(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function wM(t,e,n,i){if(e===null||typeof e>"u"||EM(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Dn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var gn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){gn[t]=new Dn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];gn[e]=new Dn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){gn[t]=new Dn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){gn[t]=new Dn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){gn[t]=new Dn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){gn[t]=new Dn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){gn[t]=new Dn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){gn[t]=new Dn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){gn[t]=new Dn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Lm=/[\-:]([a-z])/g;function Dm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Lm,Dm);gn[e]=new Dn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Lm,Dm);gn[e]=new Dn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Lm,Dm);gn[e]=new Dn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){gn[t]=new Dn(t,1,!1,t.toLowerCase(),null,!1,!1)});gn.xlinkHref=new Dn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){gn[t]=new Dn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Im(t,e,n,i){var r=gn.hasOwnProperty(e)?gn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(wM(e,n,r,i)&&(n=null),i||r===null?MM(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Xr=xM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,mc=Symbol.for("react.element"),ko=Symbol.for("react.portal"),Bo=Symbol.for("react.fragment"),Um=Symbol.for("react.strict_mode"),Cd=Symbol.for("react.profiler"),h2=Symbol.for("react.provider"),f2=Symbol.for("react.context"),Nm=Symbol.for("react.forward_ref"),bd=Symbol.for("react.suspense"),Pd=Symbol.for("react.suspense_list"),Fm=Symbol.for("react.memo"),is=Symbol.for("react.lazy"),d2=Symbol.for("react.offscreen"),Kg=Symbol.iterator;function Ga(t){return t===null||typeof t!="object"?null:(t=Kg&&t[Kg]||t["@@iterator"],typeof t=="function"?t:null)}var Nt=Object.assign,hf;function sl(t){if(hf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);hf=e&&e[1]||""}return`
`+hf+t}var ff=!1;function df(t,e){if(!t||ff)return"";ff=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ff=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?sl(t):""}function TM(t){switch(t.tag){case 5:return sl(t.type);case 16:return sl("Lazy");case 13:return sl("Suspense");case 19:return sl("SuspenseList");case 0:case 2:case 15:return t=df(t.type,!1),t;case 11:return t=df(t.type.render,!1),t;case 1:return t=df(t.type,!0),t;default:return""}}function Ld(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Bo:return"Fragment";case ko:return"Portal";case Cd:return"Profiler";case Um:return"StrictMode";case bd:return"Suspense";case Pd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case f2:return(t.displayName||"Context")+".Consumer";case h2:return(t._context.displayName||"Context")+".Provider";case Nm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Fm:return e=t.displayName||null,e!==null?e:Ld(t.type)||"Memo";case is:e=t._payload,t=t._init;try{return Ld(t(e))}catch{}}return null}function AM(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ld(e);case 8:return e===Um?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ms(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function p2(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function RM(t){var e=p2(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function gc(t){t._valueTracker||(t._valueTracker=RM(t))}function m2(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=p2(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Pu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Dd(t,e){var n=e.checked;return Nt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Zg(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ms(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function g2(t,e){e=e.checked,e!=null&&Im(t,"checked",e,!1)}function Id(t,e){g2(t,e);var n=Ms(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ud(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ud(t,e.type,Ms(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Qg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ud(t,e,n){(e!=="number"||Pu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ol=Array.isArray;function Qo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ms(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Nd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return Nt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Jg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ee(92));if(ol(n)){if(1<n.length)throw Error(ee(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ms(n)}}function _2(t,e){var n=Ms(e.value),i=Ms(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function e1(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function v2(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?v2(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var _c,y2=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(_c=_c||document.createElement("div"),_c.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=_c.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Rl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var fl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},CM=["Webkit","ms","Moz","O"];Object.keys(fl).forEach(function(t){CM.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),fl[e]=fl[t]})});function x2(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||fl.hasOwnProperty(t)&&fl[t]?(""+e).trim():e+"px"}function S2(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=x2(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var bM=Nt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Od(t,e){if(e){if(bM[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function kd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bd=null;function Om(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zd=null,Jo=null,ea=null;function t1(t){if(t=Kl(t)){if(typeof zd!="function")throw Error(ee(280));var e=t.stateNode;e&&(e=Mh(e),zd(t.stateNode,t.type,e))}}function M2(t){Jo?ea?ea.push(t):ea=[t]:Jo=t}function E2(){if(Jo){var t=Jo,e=ea;if(ea=Jo=null,t1(t),e)for(t=0;t<e.length;t++)t1(e[t])}}function w2(t,e){return t(e)}function T2(){}var pf=!1;function A2(t,e,n){if(pf)return t(e,n);pf=!0;try{return w2(t,e,n)}finally{pf=!1,(Jo!==null||ea!==null)&&(T2(),E2())}}function Cl(t,e){var n=t.stateNode;if(n===null)return null;var i=Mh(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ee(231,e,typeof n));return n}var Vd=!1;if(kr)try{var Wa={};Object.defineProperty(Wa,"passive",{get:function(){Vd=!0}}),window.addEventListener("test",Wa,Wa),window.removeEventListener("test",Wa,Wa)}catch{Vd=!1}function PM(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var dl=!1,Lu=null,Du=!1,Hd=null,LM={onError:function(t){dl=!0,Lu=t}};function DM(t,e,n,i,r,s,o,a,l){dl=!1,Lu=null,PM.apply(LM,arguments)}function IM(t,e,n,i,r,s,o,a,l){if(DM.apply(this,arguments),dl){if(dl){var c=Lu;dl=!1,Lu=null}else throw Error(ee(198));Du||(Du=!0,Hd=c)}}function xo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function R2(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function n1(t){if(xo(t)!==t)throw Error(ee(188))}function UM(t){var e=t.alternate;if(!e){if(e=xo(t),e===null)throw Error(ee(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return n1(r),t;if(s===i)return n1(r),e;s=s.sibling}throw Error(ee(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ee(189))}}if(n.alternate!==i)throw Error(ee(190))}if(n.tag!==3)throw Error(ee(188));return n.stateNode.current===n?t:e}function C2(t){return t=UM(t),t!==null?b2(t):null}function b2(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=b2(t);if(e!==null)return e;t=t.sibling}return null}var P2=oi.unstable_scheduleCallback,i1=oi.unstable_cancelCallback,NM=oi.unstable_shouldYield,FM=oi.unstable_requestPaint,$t=oi.unstable_now,OM=oi.unstable_getCurrentPriorityLevel,km=oi.unstable_ImmediatePriority,L2=oi.unstable_UserBlockingPriority,Iu=oi.unstable_NormalPriority,kM=oi.unstable_LowPriority,D2=oi.unstable_IdlePriority,vh=null,lr=null;function BM(t){if(lr&&typeof lr.onCommitFiberRoot=="function")try{lr.onCommitFiberRoot(vh,t,void 0,(t.current.flags&128)===128)}catch{}}var Wi=Math.clz32?Math.clz32:HM,zM=Math.log,VM=Math.LN2;function HM(t){return t>>>=0,t===0?32:31-(zM(t)/VM|0)|0}var vc=64,yc=4194304;function al(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Uu(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=al(a):(s&=o,s!==0&&(i=al(s)))}else o=n&~r,o!==0?i=al(o):s!==0&&(i=al(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Wi(e),r=1<<n,i|=t[n],e&=~r;return i}function GM(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function WM(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Wi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=GM(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Gd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function I2(){var t=vc;return vc<<=1,!(vc&4194240)&&(vc=64),t}function mf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Yl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Wi(e),t[e]=n}function XM(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Wi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Bm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Wi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ht=0;function U2(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var N2,zm,F2,O2,k2,Wd=!1,xc=[],hs=null,fs=null,ds=null,bl=new Map,Pl=new Map,ss=[],$M="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function r1(t,e){switch(t){case"focusin":case"focusout":hs=null;break;case"dragenter":case"dragleave":fs=null;break;case"mouseover":case"mouseout":ds=null;break;case"pointerover":case"pointerout":bl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pl.delete(e.pointerId)}}function Xa(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Kl(e),e!==null&&zm(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function jM(t,e,n,i,r){switch(e){case"focusin":return hs=Xa(hs,t,e,n,i,r),!0;case"dragenter":return fs=Xa(fs,t,e,n,i,r),!0;case"mouseover":return ds=Xa(ds,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return bl.set(s,Xa(bl.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Pl.set(s,Xa(Pl.get(s)||null,t,e,n,i,r)),!0}return!1}function B2(t){var e=Qs(t.target);if(e!==null){var n=xo(e);if(n!==null){if(e=n.tag,e===13){if(e=R2(n),e!==null){t.blockedOn=e,k2(t.priority,function(){F2(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function su(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Xd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Bd=i,n.target.dispatchEvent(i),Bd=null}else return e=Kl(n),e!==null&&zm(e),t.blockedOn=n,!1;e.shift()}return!0}function s1(t,e,n){su(t)&&n.delete(e)}function YM(){Wd=!1,hs!==null&&su(hs)&&(hs=null),fs!==null&&su(fs)&&(fs=null),ds!==null&&su(ds)&&(ds=null),bl.forEach(s1),Pl.forEach(s1)}function $a(t,e){t.blockedOn===e&&(t.blockedOn=null,Wd||(Wd=!0,oi.unstable_scheduleCallback(oi.unstable_NormalPriority,YM)))}function Ll(t){function e(r){return $a(r,t)}if(0<xc.length){$a(xc[0],t);for(var n=1;n<xc.length;n++){var i=xc[n];i.blockedOn===t&&(i.blockedOn=null)}}for(hs!==null&&$a(hs,t),fs!==null&&$a(fs,t),ds!==null&&$a(ds,t),bl.forEach(e),Pl.forEach(e),n=0;n<ss.length;n++)i=ss[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ss.length&&(n=ss[0],n.blockedOn===null);)B2(n),n.blockedOn===null&&ss.shift()}var ta=Xr.ReactCurrentBatchConfig,Nu=!0;function qM(t,e,n,i){var r=ht,s=ta.transition;ta.transition=null;try{ht=1,Vm(t,e,n,i)}finally{ht=r,ta.transition=s}}function KM(t,e,n,i){var r=ht,s=ta.transition;ta.transition=null;try{ht=4,Vm(t,e,n,i)}finally{ht=r,ta.transition=s}}function Vm(t,e,n,i){if(Nu){var r=Xd(t,e,n,i);if(r===null)Tf(t,e,i,Fu,n),r1(t,i);else if(jM(r,t,e,n,i))i.stopPropagation();else if(r1(t,i),e&4&&-1<$M.indexOf(t)){for(;r!==null;){var s=Kl(r);if(s!==null&&N2(s),s=Xd(t,e,n,i),s===null&&Tf(t,e,i,Fu,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Tf(t,e,i,null,n)}}var Fu=null;function Xd(t,e,n,i){if(Fu=null,t=Om(i),t=Qs(t),t!==null)if(e=xo(t),e===null)t=null;else if(n=e.tag,n===13){if(t=R2(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Fu=t,null}function z2(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(OM()){case km:return 1;case L2:return 4;case Iu:case kM:return 16;case D2:return 536870912;default:return 16}default:return 16}}var cs=null,Hm=null,ou=null;function V2(){if(ou)return ou;var t,e=Hm,n=e.length,i,r="value"in cs?cs.value:cs.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return ou=r.slice(t,1<i?1-i:void 0)}function au(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Sc(){return!0}function o1(){return!1}function ui(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Sc:o1,this.isPropagationStopped=o1,this}return Nt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Sc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Sc)},persist:function(){},isPersistent:Sc}),e}var Da={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gm=ui(Da),ql=Nt({},Da,{view:0,detail:0}),ZM=ui(ql),gf,_f,ja,yh=Nt({},ql,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ja&&(ja&&t.type==="mousemove"?(gf=t.screenX-ja.screenX,_f=t.screenY-ja.screenY):_f=gf=0,ja=t),gf)},movementY:function(t){return"movementY"in t?t.movementY:_f}}),a1=ui(yh),QM=Nt({},yh,{dataTransfer:0}),JM=ui(QM),eE=Nt({},ql,{relatedTarget:0}),vf=ui(eE),tE=Nt({},Da,{animationName:0,elapsedTime:0,pseudoElement:0}),nE=ui(tE),iE=Nt({},Da,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),rE=ui(iE),sE=Nt({},Da,{data:0}),l1=ui(sE),oE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},aE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=lE[t])?!!e[t]:!1}function Wm(){return cE}var uE=Nt({},ql,{key:function(t){if(t.key){var e=oE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=au(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?aE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wm,charCode:function(t){return t.type==="keypress"?au(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?au(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hE=ui(uE),fE=Nt({},yh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),c1=ui(fE),dE=Nt({},ql,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wm}),pE=ui(dE),mE=Nt({},Da,{propertyName:0,elapsedTime:0,pseudoElement:0}),gE=ui(mE),_E=Nt({},yh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),vE=ui(_E),yE=[9,13,27,32],Xm=kr&&"CompositionEvent"in window,pl=null;kr&&"documentMode"in document&&(pl=document.documentMode);var xE=kr&&"TextEvent"in window&&!pl,H2=kr&&(!Xm||pl&&8<pl&&11>=pl),u1=" ",h1=!1;function G2(t,e){switch(t){case"keyup":return yE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function W2(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var zo=!1;function SE(t,e){switch(t){case"compositionend":return W2(e);case"keypress":return e.which!==32?null:(h1=!0,u1);case"textInput":return t=e.data,t===u1&&h1?null:t;default:return null}}function ME(t,e){if(zo)return t==="compositionend"||!Xm&&G2(t,e)?(t=V2(),ou=Hm=cs=null,zo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return H2&&e.locale!=="ko"?null:e.data;default:return null}}var EE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function f1(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!EE[t.type]:e==="textarea"}function X2(t,e,n,i){M2(i),e=Ou(e,"onChange"),0<e.length&&(n=new Gm("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ml=null,Dl=null;function wE(t){ny(t,0)}function xh(t){var e=Go(t);if(m2(e))return t}function TE(t,e){if(t==="change")return e}var $2=!1;if(kr){var yf;if(kr){var xf="oninput"in document;if(!xf){var d1=document.createElement("div");d1.setAttribute("oninput","return;"),xf=typeof d1.oninput=="function"}yf=xf}else yf=!1;$2=yf&&(!document.documentMode||9<document.documentMode)}function p1(){ml&&(ml.detachEvent("onpropertychange",j2),Dl=ml=null)}function j2(t){if(t.propertyName==="value"&&xh(Dl)){var e=[];X2(e,Dl,t,Om(t)),A2(wE,e)}}function AE(t,e,n){t==="focusin"?(p1(),ml=e,Dl=n,ml.attachEvent("onpropertychange",j2)):t==="focusout"&&p1()}function RE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xh(Dl)}function CE(t,e){if(t==="click")return xh(e)}function bE(t,e){if(t==="input"||t==="change")return xh(e)}function PE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $i=typeof Object.is=="function"?Object.is:PE;function Il(t,e){if($i(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Rd.call(e,r)||!$i(t[r],e[r]))return!1}return!0}function m1(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function g1(t,e){var n=m1(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=m1(n)}}function Y2(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Y2(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function q2(){for(var t=window,e=Pu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Pu(t.document)}return e}function $m(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function LE(t){var e=q2(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Y2(n.ownerDocument.documentElement,n)){if(i!==null&&$m(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=g1(n,s);var o=g1(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var DE=kr&&"documentMode"in document&&11>=document.documentMode,Vo=null,$d=null,gl=null,jd=!1;function _1(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;jd||Vo==null||Vo!==Pu(i)||(i=Vo,"selectionStart"in i&&$m(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),gl&&Il(gl,i)||(gl=i,i=Ou($d,"onSelect"),0<i.length&&(e=new Gm("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Vo)))}function Mc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ho={animationend:Mc("Animation","AnimationEnd"),animationiteration:Mc("Animation","AnimationIteration"),animationstart:Mc("Animation","AnimationStart"),transitionend:Mc("Transition","TransitionEnd")},Sf={},K2={};kr&&(K2=document.createElement("div").style,"AnimationEvent"in window||(delete Ho.animationend.animation,delete Ho.animationiteration.animation,delete Ho.animationstart.animation),"TransitionEvent"in window||delete Ho.transitionend.transition);function Sh(t){if(Sf[t])return Sf[t];if(!Ho[t])return t;var e=Ho[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in K2)return Sf[t]=e[n];return t}var Z2=Sh("animationend"),Q2=Sh("animationiteration"),J2=Sh("animationstart"),ey=Sh("transitionend"),ty=new Map,v1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ps(t,e){ty.set(t,e),yo(e,[t])}for(var Mf=0;Mf<v1.length;Mf++){var Ef=v1[Mf],IE=Ef.toLowerCase(),UE=Ef[0].toUpperCase()+Ef.slice(1);Ps(IE,"on"+UE)}Ps(Z2,"onAnimationEnd");Ps(Q2,"onAnimationIteration");Ps(J2,"onAnimationStart");Ps("dblclick","onDoubleClick");Ps("focusin","onFocus");Ps("focusout","onBlur");Ps(ey,"onTransitionEnd");la("onMouseEnter",["mouseout","mouseover"]);la("onMouseLeave",["mouseout","mouseover"]);la("onPointerEnter",["pointerout","pointerover"]);la("onPointerLeave",["pointerout","pointerover"]);yo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));yo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));yo("onBeforeInput",["compositionend","keypress","textInput","paste"]);yo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));yo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));yo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ll="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),NE=new Set("cancel close invalid load scroll toggle".split(" ").concat(ll));function y1(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,IM(i,e,void 0,t),t.currentTarget=null}function ny(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;y1(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;y1(r,a,c),s=l}}}if(Du)throw t=Hd,Du=!1,Hd=null,t}function Mt(t,e){var n=e[Qd];n===void 0&&(n=e[Qd]=new Set);var i=t+"__bubble";n.has(i)||(iy(e,t,2,!1),n.add(i))}function wf(t,e,n){var i=0;e&&(i|=4),iy(n,t,i,e)}var Ec="_reactListening"+Math.random().toString(36).slice(2);function Ul(t){if(!t[Ec]){t[Ec]=!0,u2.forEach(function(n){n!=="selectionchange"&&(NE.has(n)||wf(n,!1,t),wf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ec]||(e[Ec]=!0,wf("selectionchange",!1,e))}}function iy(t,e,n,i){switch(z2(e)){case 1:var r=qM;break;case 4:r=KM;break;default:r=Vm}n=r.bind(null,e,n,t),r=void 0,!Vd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Tf(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Qs(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}A2(function(){var c=s,h=Om(n),d=[];e:{var f=ty.get(t);if(f!==void 0){var g=Gm,p=t;switch(t){case"keypress":if(au(n)===0)break e;case"keydown":case"keyup":g=hE;break;case"focusin":p="focus",g=vf;break;case"focusout":p="blur",g=vf;break;case"beforeblur":case"afterblur":g=vf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=a1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=JM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=pE;break;case Z2:case Q2:case J2:g=nE;break;case ey:g=gE;break;case"scroll":g=ZM;break;case"wheel":g=vE;break;case"copy":case"cut":case"paste":g=rE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=c1}var x=(e&4)!==0,m=!x&&t==="scroll",u=x?f!==null?f+"Capture":null:f;x=[];for(var _=c,v;_!==null;){v=_;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,u!==null&&(S=Cl(_,u),S!=null&&x.push(Nl(_,S,v)))),m)break;_=_.return}0<x.length&&(f=new g(f,p,null,n,h),d.push({event:f,listeners:x}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==Bd&&(p=n.relatedTarget||n.fromElement)&&(Qs(p)||p[Br]))break e;if((g||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,g?(p=n.relatedTarget||n.toElement,g=c,p=p?Qs(p):null,p!==null&&(m=xo(p),p!==m||p.tag!==5&&p.tag!==6)&&(p=null)):(g=null,p=c),g!==p)){if(x=a1,S="onMouseLeave",u="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=c1,S="onPointerLeave",u="onPointerEnter",_="pointer"),m=g==null?f:Go(g),v=p==null?f:Go(p),f=new x(S,_+"leave",g,n,h),f.target=m,f.relatedTarget=v,S=null,Qs(h)===c&&(x=new x(u,_+"enter",p,n,h),x.target=v,x.relatedTarget=m,S=x),m=S,g&&p)t:{for(x=g,u=p,_=0,v=x;v;v=Mo(v))_++;for(v=0,S=u;S;S=Mo(S))v++;for(;0<_-v;)x=Mo(x),_--;for(;0<v-_;)u=Mo(u),v--;for(;_--;){if(x===u||u!==null&&x===u.alternate)break t;x=Mo(x),u=Mo(u)}x=null}else x=null;g!==null&&x1(d,f,g,x,!1),p!==null&&m!==null&&x1(d,m,p,x,!0)}}e:{if(f=c?Go(c):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var C=TE;else if(f1(f))if($2)C=bE;else{C=RE;var A=AE}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=CE);if(C&&(C=C(t,c))){X2(d,C,n,h);break e}A&&A(t,f,c),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&Ud(f,"number",f.value)}switch(A=c?Go(c):window,t){case"focusin":(f1(A)||A.contentEditable==="true")&&(Vo=A,$d=c,gl=null);break;case"focusout":gl=$d=Vo=null;break;case"mousedown":jd=!0;break;case"contextmenu":case"mouseup":case"dragend":jd=!1,_1(d,n,h);break;case"selectionchange":if(DE)break;case"keydown":case"keyup":_1(d,n,h)}var T;if(Xm)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else zo?G2(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(H2&&n.locale!=="ko"&&(zo||b!=="onCompositionStart"?b==="onCompositionEnd"&&zo&&(T=V2()):(cs=h,Hm="value"in cs?cs.value:cs.textContent,zo=!0)),A=Ou(c,b),0<A.length&&(b=new l1(b,t,null,n,h),d.push({event:b,listeners:A}),T?b.data=T:(T=W2(n),T!==null&&(b.data=T)))),(T=xE?SE(t,n):ME(t,n))&&(c=Ou(c,"onBeforeInput"),0<c.length&&(h=new l1("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:c}),h.data=T))}ny(d,e)})}function Nl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ou(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Cl(t,n),s!=null&&i.unshift(Nl(t,s,r)),s=Cl(t,e),s!=null&&i.push(Nl(t,s,r))),t=t.return}return i}function Mo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function x1(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Cl(n,s),l!=null&&o.unshift(Nl(n,l,a))):r||(l=Cl(n,s),l!=null&&o.push(Nl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var FE=/\r\n?/g,OE=/\u0000|\uFFFD/g;function S1(t){return(typeof t=="string"?t:""+t).replace(FE,`
`).replace(OE,"")}function wc(t,e,n){if(e=S1(e),S1(t)!==e&&n)throw Error(ee(425))}function ku(){}var Yd=null,qd=null;function Kd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Zd=typeof setTimeout=="function"?setTimeout:void 0,kE=typeof clearTimeout=="function"?clearTimeout:void 0,M1=typeof Promise=="function"?Promise:void 0,BE=typeof queueMicrotask=="function"?queueMicrotask:typeof M1<"u"?function(t){return M1.resolve(null).then(t).catch(zE)}:Zd;function zE(t){setTimeout(function(){throw t})}function Af(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ll(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ll(e)}function ps(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function E1(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ia=Math.random().toString(36).slice(2),or="__reactFiber$"+Ia,Fl="__reactProps$"+Ia,Br="__reactContainer$"+Ia,Qd="__reactEvents$"+Ia,VE="__reactListeners$"+Ia,HE="__reactHandles$"+Ia;function Qs(t){var e=t[or];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Br]||n[or]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=E1(t);t!==null;){if(n=t[or])return n;t=E1(t)}return e}t=n,n=t.parentNode}return null}function Kl(t){return t=t[or]||t[Br],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Go(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ee(33))}function Mh(t){return t[Fl]||null}var Jd=[],Wo=-1;function Ls(t){return{current:t}}function Tt(t){0>Wo||(t.current=Jd[Wo],Jd[Wo]=null,Wo--)}function vt(t,e){Wo++,Jd[Wo]=t.current,t.current=e}var Es={},wn=Ls(Es),Hn=Ls(!1),co=Es;function ca(t,e){var n=t.type.contextTypes;if(!n)return Es;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Gn(t){return t=t.childContextTypes,t!=null}function Bu(){Tt(Hn),Tt(wn)}function w1(t,e,n){if(wn.current!==Es)throw Error(ee(168));vt(wn,e),vt(Hn,n)}function ry(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ee(108,AM(t)||"Unknown",r));return Nt({},n,i)}function zu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Es,co=wn.current,vt(wn,t),vt(Hn,Hn.current),!0}function T1(t,e,n){var i=t.stateNode;if(!i)throw Error(ee(169));n?(t=ry(t,e,co),i.__reactInternalMemoizedMergedChildContext=t,Tt(Hn),Tt(wn),vt(wn,t)):Tt(Hn),vt(Hn,n)}var Rr=null,Eh=!1,Rf=!1;function sy(t){Rr===null?Rr=[t]:Rr.push(t)}function GE(t){Eh=!0,sy(t)}function Ds(){if(!Rf&&Rr!==null){Rf=!0;var t=0,e=ht;try{var n=Rr;for(ht=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Rr=null,Eh=!1}catch(r){throw Rr!==null&&(Rr=Rr.slice(t+1)),P2(km,Ds),r}finally{ht=e,Rf=!1}}return null}var Xo=[],$o=0,Vu=null,Hu=0,vi=[],yi=0,uo=null,Pr=1,Lr="";function Xs(t,e){Xo[$o++]=Hu,Xo[$o++]=Vu,Vu=t,Hu=e}function oy(t,e,n){vi[yi++]=Pr,vi[yi++]=Lr,vi[yi++]=uo,uo=t;var i=Pr;t=Lr;var r=32-Wi(i)-1;i&=~(1<<r),n+=1;var s=32-Wi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Pr=1<<32-Wi(e)+r|n<<r|i,Lr=s+t}else Pr=1<<s|n<<r|i,Lr=t}function jm(t){t.return!==null&&(Xs(t,1),oy(t,1,0))}function Ym(t){for(;t===Vu;)Vu=Xo[--$o],Xo[$o]=null,Hu=Xo[--$o],Xo[$o]=null;for(;t===uo;)uo=vi[--yi],vi[yi]=null,Lr=vi[--yi],vi[yi]=null,Pr=vi[--yi],vi[yi]=null}var si=null,ri=null,bt=!1,zi=null;function ay(t,e){var n=Mi(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function A1(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,si=t,ri=ps(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,si=t,ri=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=uo!==null?{id:Pr,overflow:Lr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Mi(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,si=t,ri=null,!0):!1;default:return!1}}function ep(t){return(t.mode&1)!==0&&(t.flags&128)===0}function tp(t){if(bt){var e=ri;if(e){var n=e;if(!A1(t,e)){if(ep(t))throw Error(ee(418));e=ps(n.nextSibling);var i=si;e&&A1(t,e)?ay(i,n):(t.flags=t.flags&-4097|2,bt=!1,si=t)}}else{if(ep(t))throw Error(ee(418));t.flags=t.flags&-4097|2,bt=!1,si=t}}}function R1(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;si=t}function Tc(t){if(t!==si)return!1;if(!bt)return R1(t),bt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Kd(t.type,t.memoizedProps)),e&&(e=ri)){if(ep(t))throw ly(),Error(ee(418));for(;e;)ay(t,e),e=ps(e.nextSibling)}if(R1(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ri=ps(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ri=null}}else ri=si?ps(t.stateNode.nextSibling):null;return!0}function ly(){for(var t=ri;t;)t=ps(t.nextSibling)}function ua(){ri=si=null,bt=!1}function qm(t){zi===null?zi=[t]:zi.push(t)}var WE=Xr.ReactCurrentBatchConfig;function Ya(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ee(309));var i=n.stateNode}if(!i)throw Error(ee(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ee(284));if(!n._owner)throw Error(ee(290,t))}return t}function Ac(t,e){throw t=Object.prototype.toString.call(e),Error(ee(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function C1(t){var e=t._init;return e(t._payload)}function cy(t){function e(u,_){if(t){var v=u.deletions;v===null?(u.deletions=[_],u.flags|=16):v.push(_)}}function n(u,_){if(!t)return null;for(;_!==null;)e(u,_),_=_.sibling;return null}function i(u,_){for(u=new Map;_!==null;)_.key!==null?u.set(_.key,_):u.set(_.index,_),_=_.sibling;return u}function r(u,_){return u=vs(u,_),u.index=0,u.sibling=null,u}function s(u,_,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<_?(u.flags|=2,_):v):(u.flags|=2,_)):(u.flags|=1048576,_)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,_,v,S){return _===null||_.tag!==6?(_=Uf(v,u.mode,S),_.return=u,_):(_=r(_,v),_.return=u,_)}function l(u,_,v,S){var C=v.type;return C===Bo?h(u,_,v.props.children,S,v.key):_!==null&&(_.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===is&&C1(C)===_.type)?(S=r(_,v.props),S.ref=Ya(u,_,v),S.return=u,S):(S=pu(v.type,v.key,v.props,null,u.mode,S),S.ref=Ya(u,_,v),S.return=u,S)}function c(u,_,v,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=Nf(v,u.mode,S),_.return=u,_):(_=r(_,v.children||[]),_.return=u,_)}function h(u,_,v,S,C){return _===null||_.tag!==7?(_=ro(v,u.mode,S,C),_.return=u,_):(_=r(_,v),_.return=u,_)}function d(u,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Uf(""+_,u.mode,v),_.return=u,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case mc:return v=pu(_.type,_.key,_.props,null,u.mode,v),v.ref=Ya(u,null,_),v.return=u,v;case ko:return _=Nf(_,u.mode,v),_.return=u,_;case is:var S=_._init;return d(u,S(_._payload),v)}if(ol(_)||Ga(_))return _=ro(_,u.mode,v,null),_.return=u,_;Ac(u,_)}return null}function f(u,_,v,S){var C=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:a(u,_,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case mc:return v.key===C?l(u,_,v,S):null;case ko:return v.key===C?c(u,_,v,S):null;case is:return C=v._init,f(u,_,C(v._payload),S)}if(ol(v)||Ga(v))return C!==null?null:h(u,_,v,S,null);Ac(u,v)}return null}function g(u,_,v,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(v)||null,a(_,u,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case mc:return u=u.get(S.key===null?v:S.key)||null,l(_,u,S,C);case ko:return u=u.get(S.key===null?v:S.key)||null,c(_,u,S,C);case is:var A=S._init;return g(u,_,v,A(S._payload),C)}if(ol(S)||Ga(S))return u=u.get(v)||null,h(_,u,S,C,null);Ac(_,S)}return null}function p(u,_,v,S){for(var C=null,A=null,T=_,b=_=0,H=null;T!==null&&b<v.length;b++){T.index>b?(H=T,T=null):H=T.sibling;var y=f(u,T,v[b],S);if(y===null){T===null&&(T=H);break}t&&T&&y.alternate===null&&e(u,T),_=s(y,_,b),A===null?C=y:A.sibling=y,A=y,T=H}if(b===v.length)return n(u,T),bt&&Xs(u,b),C;if(T===null){for(;b<v.length;b++)T=d(u,v[b],S),T!==null&&(_=s(T,_,b),A===null?C=T:A.sibling=T,A=T);return bt&&Xs(u,b),C}for(T=i(u,T);b<v.length;b++)H=g(T,u,b,v[b],S),H!==null&&(t&&H.alternate!==null&&T.delete(H.key===null?b:H.key),_=s(H,_,b),A===null?C=H:A.sibling=H,A=H);return t&&T.forEach(function(E){return e(u,E)}),bt&&Xs(u,b),C}function x(u,_,v,S){var C=Ga(v);if(typeof C!="function")throw Error(ee(150));if(v=C.call(v),v==null)throw Error(ee(151));for(var A=C=null,T=_,b=_=0,H=null,y=v.next();T!==null&&!y.done;b++,y=v.next()){T.index>b?(H=T,T=null):H=T.sibling;var E=f(u,T,y.value,S);if(E===null){T===null&&(T=H);break}t&&T&&E.alternate===null&&e(u,T),_=s(E,_,b),A===null?C=E:A.sibling=E,A=E,T=H}if(y.done)return n(u,T),bt&&Xs(u,b),C;if(T===null){for(;!y.done;b++,y=v.next())y=d(u,y.value,S),y!==null&&(_=s(y,_,b),A===null?C=y:A.sibling=y,A=y);return bt&&Xs(u,b),C}for(T=i(u,T);!y.done;b++,y=v.next())y=g(T,u,b,y.value,S),y!==null&&(t&&y.alternate!==null&&T.delete(y.key===null?b:y.key),_=s(y,_,b),A===null?C=y:A.sibling=y,A=y);return t&&T.forEach(function(F){return e(u,F)}),bt&&Xs(u,b),C}function m(u,_,v,S){if(typeof v=="object"&&v!==null&&v.type===Bo&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case mc:e:{for(var C=v.key,A=_;A!==null;){if(A.key===C){if(C=v.type,C===Bo){if(A.tag===7){n(u,A.sibling),_=r(A,v.props.children),_.return=u,u=_;break e}}else if(A.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===is&&C1(C)===A.type){n(u,A.sibling),_=r(A,v.props),_.ref=Ya(u,A,v),_.return=u,u=_;break e}n(u,A);break}else e(u,A);A=A.sibling}v.type===Bo?(_=ro(v.props.children,u.mode,S,v.key),_.return=u,u=_):(S=pu(v.type,v.key,v.props,null,u.mode,S),S.ref=Ya(u,_,v),S.return=u,u=S)}return o(u);case ko:e:{for(A=v.key;_!==null;){if(_.key===A)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){n(u,_.sibling),_=r(_,v.children||[]),_.return=u,u=_;break e}else{n(u,_);break}else e(u,_);_=_.sibling}_=Nf(v,u.mode,S),_.return=u,u=_}return o(u);case is:return A=v._init,m(u,_,A(v._payload),S)}if(ol(v))return p(u,_,v,S);if(Ga(v))return x(u,_,v,S);Ac(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(n(u,_.sibling),_=r(_,v),_.return=u,u=_):(n(u,_),_=Uf(v,u.mode,S),_.return=u,u=_),o(u)):n(u,_)}return m}var ha=cy(!0),uy=cy(!1),Gu=Ls(null),Wu=null,jo=null,Km=null;function Zm(){Km=jo=Wu=null}function Qm(t){var e=Gu.current;Tt(Gu),t._currentValue=e}function np(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function na(t,e){Wu=t,Km=jo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Vn=!0),t.firstContext=null)}function Ai(t){var e=t._currentValue;if(Km!==t)if(t={context:t,memoizedValue:e,next:null},jo===null){if(Wu===null)throw Error(ee(308));jo=t,Wu.dependencies={lanes:0,firstContext:t}}else jo=jo.next=t;return e}var Js=null;function Jm(t){Js===null?Js=[t]:Js.push(t)}function hy(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Jm(e)):(n.next=r.next,r.next=n),e.interleaved=n,zr(t,i)}function zr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var rs=!1;function e0(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ur(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ms(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,zr(t,n)}return r=i.interleaved,r===null?(e.next=e,Jm(i)):(e.next=r.next,r.next=e),i.interleaved=e,zr(t,n)}function lu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Bm(t,n)}}function b1(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Xu(t,e,n,i){var r=t.updateQueue;rs=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,h=c=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((i&f)===f){h!==null&&(h=h.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var p=t,x=a;switch(f=e,g=n,x.tag){case 1:if(p=x.payload,typeof p=="function"){d=p.call(g,d,f);break e}d=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=x.payload,f=typeof p=="function"?p.call(g,d,f):p,f==null)break e;d=Nt({},d,f);break e;case 2:rs=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=g,l=d):h=h.next=g,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(h===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);fo|=o,t.lanes=o,t.memoizedState=d}}function P1(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ee(191,r));r.call(i)}}}var Zl={},cr=Ls(Zl),Ol=Ls(Zl),kl=Ls(Zl);function eo(t){if(t===Zl)throw Error(ee(174));return t}function t0(t,e){switch(vt(kl,e),vt(Ol,t),vt(cr,Zl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Fd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Fd(e,t)}Tt(cr),vt(cr,e)}function fa(){Tt(cr),Tt(Ol),Tt(kl)}function dy(t){eo(kl.current);var e=eo(cr.current),n=Fd(e,t.type);e!==n&&(vt(Ol,t),vt(cr,n))}function n0(t){Ol.current===t&&(Tt(cr),Tt(Ol))}var It=Ls(0);function $u(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Cf=[];function i0(){for(var t=0;t<Cf.length;t++)Cf[t]._workInProgressVersionPrimary=null;Cf.length=0}var cu=Xr.ReactCurrentDispatcher,bf=Xr.ReactCurrentBatchConfig,ho=0,Ut=null,en=null,cn=null,ju=!1,_l=!1,Bl=0,XE=0;function _n(){throw Error(ee(321))}function r0(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$i(t[n],e[n]))return!1;return!0}function s0(t,e,n,i,r,s){if(ho=s,Ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,cu.current=t===null||t.memoizedState===null?qE:KE,t=n(i,r),_l){s=0;do{if(_l=!1,Bl=0,25<=s)throw Error(ee(301));s+=1,cn=en=null,e.updateQueue=null,cu.current=ZE,t=n(i,r)}while(_l)}if(cu.current=Yu,e=en!==null&&en.next!==null,ho=0,cn=en=Ut=null,ju=!1,e)throw Error(ee(300));return t}function o0(){var t=Bl!==0;return Bl=0,t}function nr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?Ut.memoizedState=cn=t:cn=cn.next=t,cn}function Ri(){if(en===null){var t=Ut.alternate;t=t!==null?t.memoizedState:null}else t=en.next;var e=cn===null?Ut.memoizedState:cn.next;if(e!==null)cn=e,en=t;else{if(t===null)throw Error(ee(310));en=t,t={memoizedState:en.memoizedState,baseState:en.baseState,baseQueue:en.baseQueue,queue:en.queue,next:null},cn===null?Ut.memoizedState=cn=t:cn=cn.next=t}return cn}function zl(t,e){return typeof e=="function"?e(t):e}function Pf(t){var e=Ri(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=en,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((ho&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Ut.lanes|=h,fo|=h}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,$i(i,e.memoizedState)||(Vn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Ut.lanes|=s,fo|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Lf(t){var e=Ri(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);$i(s,e.memoizedState)||(Vn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function py(){}function my(t,e){var n=Ut,i=Ri(),r=e(),s=!$i(i.memoizedState,r);if(s&&(i.memoizedState=r,Vn=!0),i=i.queue,a0(vy.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||cn!==null&&cn.memoizedState.tag&1){if(n.flags|=2048,Vl(9,_y.bind(null,n,i,r,e),void 0,null),un===null)throw Error(ee(349));ho&30||gy(n,e,r)}return r}function gy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ut.updateQueue,e===null?(e={lastEffect:null,stores:null},Ut.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function _y(t,e,n,i){e.value=n,e.getSnapshot=i,yy(e)&&xy(t)}function vy(t,e,n){return n(function(){yy(e)&&xy(t)})}function yy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$i(t,n)}catch{return!0}}function xy(t){var e=zr(t,1);e!==null&&Xi(e,t,1,-1)}function L1(t){var e=nr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zl,lastRenderedState:t},e.queue=t,t=t.dispatch=YE.bind(null,Ut,t),[e.memoizedState,t]}function Vl(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Ut.updateQueue,e===null?(e={lastEffect:null,stores:null},Ut.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Sy(){return Ri().memoizedState}function uu(t,e,n,i){var r=nr();Ut.flags|=t,r.memoizedState=Vl(1|e,n,void 0,i===void 0?null:i)}function wh(t,e,n,i){var r=Ri();i=i===void 0?null:i;var s=void 0;if(en!==null){var o=en.memoizedState;if(s=o.destroy,i!==null&&r0(i,o.deps)){r.memoizedState=Vl(e,n,s,i);return}}Ut.flags|=t,r.memoizedState=Vl(1|e,n,s,i)}function D1(t,e){return uu(8390656,8,t,e)}function a0(t,e){return wh(2048,8,t,e)}function My(t,e){return wh(4,2,t,e)}function Ey(t,e){return wh(4,4,t,e)}function wy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ty(t,e,n){return n=n!=null?n.concat([t]):null,wh(4,4,wy.bind(null,e,t),n)}function l0(){}function Ay(t,e){var n=Ri();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&r0(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Ry(t,e){var n=Ri();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&r0(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Cy(t,e,n){return ho&21?($i(n,e)||(n=I2(),Ut.lanes|=n,fo|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Vn=!0),t.memoizedState=n)}function $E(t,e){var n=ht;ht=n!==0&&4>n?n:4,t(!0);var i=bf.transition;bf.transition={};try{t(!1),e()}finally{ht=n,bf.transition=i}}function by(){return Ri().memoizedState}function jE(t,e,n){var i=_s(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Py(t))Ly(e,n);else if(n=hy(t,e,n,i),n!==null){var r=bn();Xi(n,t,i,r),Dy(n,e,i)}}function YE(t,e,n){var i=_s(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Py(t))Ly(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,$i(a,o)){var l=e.interleaved;l===null?(r.next=r,Jm(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=hy(t,e,r,i),n!==null&&(r=bn(),Xi(n,t,i,r),Dy(n,e,i))}}function Py(t){var e=t.alternate;return t===Ut||e!==null&&e===Ut}function Ly(t,e){_l=ju=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Dy(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Bm(t,n)}}var Yu={readContext:Ai,useCallback:_n,useContext:_n,useEffect:_n,useImperativeHandle:_n,useInsertionEffect:_n,useLayoutEffect:_n,useMemo:_n,useReducer:_n,useRef:_n,useState:_n,useDebugValue:_n,useDeferredValue:_n,useTransition:_n,useMutableSource:_n,useSyncExternalStore:_n,useId:_n,unstable_isNewReconciler:!1},qE={readContext:Ai,useCallback:function(t,e){return nr().memoizedState=[t,e===void 0?null:e],t},useContext:Ai,useEffect:D1,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,uu(4194308,4,wy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return uu(4194308,4,t,e)},useInsertionEffect:function(t,e){return uu(4,2,t,e)},useMemo:function(t,e){var n=nr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=nr();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=jE.bind(null,Ut,t),[i.memoizedState,t]},useRef:function(t){var e=nr();return t={current:t},e.memoizedState=t},useState:L1,useDebugValue:l0,useDeferredValue:function(t){return nr().memoizedState=t},useTransition:function(){var t=L1(!1),e=t[0];return t=$E.bind(null,t[1]),nr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Ut,r=nr();if(bt){if(n===void 0)throw Error(ee(407));n=n()}else{if(n=e(),un===null)throw Error(ee(349));ho&30||gy(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,D1(vy.bind(null,i,s,t),[t]),i.flags|=2048,Vl(9,_y.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=nr(),e=un.identifierPrefix;if(bt){var n=Lr,i=Pr;n=(i&~(1<<32-Wi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Bl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=XE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},KE={readContext:Ai,useCallback:Ay,useContext:Ai,useEffect:a0,useImperativeHandle:Ty,useInsertionEffect:My,useLayoutEffect:Ey,useMemo:Ry,useReducer:Pf,useRef:Sy,useState:function(){return Pf(zl)},useDebugValue:l0,useDeferredValue:function(t){var e=Ri();return Cy(e,en.memoizedState,t)},useTransition:function(){var t=Pf(zl)[0],e=Ri().memoizedState;return[t,e]},useMutableSource:py,useSyncExternalStore:my,useId:by,unstable_isNewReconciler:!1},ZE={readContext:Ai,useCallback:Ay,useContext:Ai,useEffect:a0,useImperativeHandle:Ty,useInsertionEffect:My,useLayoutEffect:Ey,useMemo:Ry,useReducer:Lf,useRef:Sy,useState:function(){return Lf(zl)},useDebugValue:l0,useDeferredValue:function(t){var e=Ri();return en===null?e.memoizedState=t:Cy(e,en.memoizedState,t)},useTransition:function(){var t=Lf(zl)[0],e=Ri().memoizedState;return[t,e]},useMutableSource:py,useSyncExternalStore:my,useId:by,unstable_isNewReconciler:!1};function ki(t,e){if(t&&t.defaultProps){e=Nt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ip(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Nt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Th={isMounted:function(t){return(t=t._reactInternals)?xo(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=bn(),r=_s(t),s=Ur(i,r);s.payload=e,n!=null&&(s.callback=n),e=ms(t,s,r),e!==null&&(Xi(e,t,r,i),lu(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=bn(),r=_s(t),s=Ur(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ms(t,s,r),e!==null&&(Xi(e,t,r,i),lu(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=bn(),i=_s(t),r=Ur(n,i);r.tag=2,e!=null&&(r.callback=e),e=ms(t,r,i),e!==null&&(Xi(e,t,i,n),lu(e,t,i))}};function I1(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Il(n,i)||!Il(r,s):!0}function Iy(t,e,n){var i=!1,r=Es,s=e.contextType;return typeof s=="object"&&s!==null?s=Ai(s):(r=Gn(e)?co:wn.current,i=e.contextTypes,s=(i=i!=null)?ca(t,r):Es),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Th,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function U1(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Th.enqueueReplaceState(e,e.state,null)}function rp(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},e0(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Ai(s):(s=Gn(e)?co:wn.current,r.context=ca(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ip(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Th.enqueueReplaceState(r,r.state,null),Xu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function da(t,e){try{var n="",i=e;do n+=TM(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Df(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function sp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var QE=typeof WeakMap=="function"?WeakMap:Map;function Uy(t,e,n){n=Ur(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ku||(Ku=!0,mp=i),sp(t,e)},n}function Ny(t,e,n){n=Ur(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){sp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){sp(t,e),typeof i!="function"&&(gs===null?gs=new Set([this]):gs.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function N1(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new QE;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=fw.bind(null,t,e,n),e.then(t,t))}function F1(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function O1(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ur(-1,1),e.tag=2,ms(n,e,1))),n.lanes|=1),t)}var JE=Xr.ReactCurrentOwner,Vn=!1;function Cn(t,e,n,i){e.child=t===null?uy(e,null,n,i):ha(e,t.child,n,i)}function k1(t,e,n,i,r){n=n.render;var s=e.ref;return na(e,r),i=s0(t,e,n,i,s,r),n=o0(),t!==null&&!Vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Vr(t,e,r)):(bt&&n&&jm(e),e.flags|=1,Cn(t,e,i,r),e.child)}function B1(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!g0(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Fy(t,e,s,i,r)):(t=pu(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Il,n(o,i)&&t.ref===e.ref)return Vr(t,e,r)}return e.flags|=1,t=vs(s,i),t.ref=e.ref,t.return=e,e.child=t}function Fy(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Il(s,i)&&t.ref===e.ref)if(Vn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Vn=!0);else return e.lanes=t.lanes,Vr(t,e,r)}return op(t,e,n,i,r)}function Oy(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},vt(qo,ii),ii|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,vt(qo,ii),ii|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,vt(qo,ii),ii|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,vt(qo,ii),ii|=i;return Cn(t,e,r,n),e.child}function ky(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function op(t,e,n,i,r){var s=Gn(n)?co:wn.current;return s=ca(e,s),na(e,r),n=s0(t,e,n,i,s,r),i=o0(),t!==null&&!Vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Vr(t,e,r)):(bt&&i&&jm(e),e.flags|=1,Cn(t,e,n,r),e.child)}function z1(t,e,n,i,r){if(Gn(n)){var s=!0;zu(e)}else s=!1;if(na(e,r),e.stateNode===null)hu(t,e),Iy(e,n,i),rp(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ai(c):(c=Gn(n)?co:wn.current,c=ca(e,c));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&U1(e,o,i,c),rs=!1;var f=e.memoizedState;o.state=f,Xu(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Hn.current||rs?(typeof h=="function"&&(ip(e,n,h,i),l=e.memoizedState),(a=rs||I1(e,n,a,i,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,fy(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ki(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ai(l):(l=Gn(n)?co:wn.current,l=ca(e,l));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&U1(e,o,i,l),rs=!1,f=e.memoizedState,o.state=f,Xu(e,i,o,r);var p=e.memoizedState;a!==d||f!==p||Hn.current||rs?(typeof g=="function"&&(ip(e,n,g,i),p=e.memoizedState),(c=rs||I1(e,n,c,i,f,p,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,p,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,p,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=p),o.props=i,o.state=p,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return ap(t,e,n,i,s,r)}function ap(t,e,n,i,r,s){ky(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&T1(e,n,!1),Vr(t,e,s);i=e.stateNode,JE.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=ha(e,t.child,null,s),e.child=ha(e,null,a,s)):Cn(t,e,a,s),e.memoizedState=i.state,r&&T1(e,n,!0),e.child}function By(t){var e=t.stateNode;e.pendingContext?w1(t,e.pendingContext,e.pendingContext!==e.context):e.context&&w1(t,e.context,!1),t0(t,e.containerInfo)}function V1(t,e,n,i,r){return ua(),qm(r),e.flags|=256,Cn(t,e,n,i),e.child}var lp={dehydrated:null,treeContext:null,retryLane:0};function cp(t){return{baseLanes:t,cachePool:null,transitions:null}}function zy(t,e,n){var i=e.pendingProps,r=It.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),vt(It,r&1),t===null)return tp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ch(o,i,0,null),t=ro(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=cp(n),e.memoizedState=lp,t):c0(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return ew(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=vs(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=vs(a,s):(s=ro(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?cp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=lp,i}return s=t.child,t=s.sibling,i=vs(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function c0(t,e){return e=Ch({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Rc(t,e,n,i){return i!==null&&qm(i),ha(e,t.child,null,n),t=c0(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ew(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Df(Error(ee(422))),Rc(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ch({mode:"visible",children:i.children},r,0,null),s=ro(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ha(e,t.child,null,o),e.child.memoizedState=cp(o),e.memoizedState=lp,s);if(!(e.mode&1))return Rc(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ee(419)),i=Df(s,i,void 0),Rc(t,e,o,i)}if(a=(o&t.childLanes)!==0,Vn||a){if(i=un,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,zr(t,r),Xi(i,t,r,-1))}return m0(),i=Df(Error(ee(421))),Rc(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=dw.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,ri=ps(r.nextSibling),si=e,bt=!0,zi=null,t!==null&&(vi[yi++]=Pr,vi[yi++]=Lr,vi[yi++]=uo,Pr=t.id,Lr=t.overflow,uo=e),e=c0(e,i.children),e.flags|=4096,e)}function H1(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),np(t.return,e,n)}function If(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Vy(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Cn(t,e,i.children,n),i=It.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&H1(t,n,e);else if(t.tag===19)H1(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(vt(It,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&$u(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),If(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&$u(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}If(e,!0,n,null,s);break;case"together":If(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function hu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Vr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),fo|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ee(153));if(e.child!==null){for(t=e.child,n=vs(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=vs(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function tw(t,e,n){switch(e.tag){case 3:By(e),ua();break;case 5:dy(e);break;case 1:Gn(e.type)&&zu(e);break;case 4:t0(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;vt(Gu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(vt(It,It.current&1),e.flags|=128,null):n&e.child.childLanes?zy(t,e,n):(vt(It,It.current&1),t=Vr(t,e,n),t!==null?t.sibling:null);vt(It,It.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Vy(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),vt(It,It.current),i)break;return null;case 22:case 23:return e.lanes=0,Oy(t,e,n)}return Vr(t,e,n)}var Hy,up,Gy,Wy;Hy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};up=function(){};Gy=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,eo(cr.current);var s=null;switch(n){case"input":r=Dd(t,r),i=Dd(t,i),s=[];break;case"select":r=Nt({},r,{value:void 0}),i=Nt({},i,{value:void 0}),s=[];break;case"textarea":r=Nd(t,r),i=Nd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ku)}Od(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Al.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Al.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Mt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Wy=function(t,e,n,i){n!==i&&(e.flags|=4)};function qa(t,e){if(!bt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function vn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function nw(t,e,n){var i=e.pendingProps;switch(Ym(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vn(e),null;case 1:return Gn(e.type)&&Bu(),vn(e),null;case 3:return i=e.stateNode,fa(),Tt(Hn),Tt(wn),i0(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Tc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,zi!==null&&(vp(zi),zi=null))),up(t,e),vn(e),null;case 5:n0(e);var r=eo(kl.current);if(n=e.type,t!==null&&e.stateNode!=null)Gy(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return vn(e),null}if(t=eo(cr.current),Tc(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[or]=e,i[Fl]=s,t=(e.mode&1)!==0,n){case"dialog":Mt("cancel",i),Mt("close",i);break;case"iframe":case"object":case"embed":Mt("load",i);break;case"video":case"audio":for(r=0;r<ll.length;r++)Mt(ll[r],i);break;case"source":Mt("error",i);break;case"img":case"image":case"link":Mt("error",i),Mt("load",i);break;case"details":Mt("toggle",i);break;case"input":Zg(i,s),Mt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Mt("invalid",i);break;case"textarea":Jg(i,s),Mt("invalid",i)}Od(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&wc(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&wc(i.textContent,a,t),r=["children",""+a]):Al.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Mt("scroll",i)}switch(n){case"input":gc(i),Qg(i,s,!0);break;case"textarea":gc(i),e1(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ku)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=v2(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[or]=e,t[Fl]=i,Hy(t,e,!1,!1),e.stateNode=t;e:{switch(o=kd(n,i),n){case"dialog":Mt("cancel",t),Mt("close",t),r=i;break;case"iframe":case"object":case"embed":Mt("load",t),r=i;break;case"video":case"audio":for(r=0;r<ll.length;r++)Mt(ll[r],t);r=i;break;case"source":Mt("error",t),r=i;break;case"img":case"image":case"link":Mt("error",t),Mt("load",t),r=i;break;case"details":Mt("toggle",t),r=i;break;case"input":Zg(t,i),r=Dd(t,i),Mt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Nt({},i,{value:void 0}),Mt("invalid",t);break;case"textarea":Jg(t,i),r=Nd(t,i),Mt("invalid",t);break;default:r=i}Od(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?S2(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&y2(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Rl(t,l):typeof l=="number"&&Rl(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Al.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Mt("scroll",t):l!=null&&Im(t,s,l,o))}switch(n){case"input":gc(t),Qg(t,i,!1);break;case"textarea":gc(t),e1(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ms(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Qo(t,!!i.multiple,s,!1):i.defaultValue!=null&&Qo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ku)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return vn(e),null;case 6:if(t&&e.stateNode!=null)Wy(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(n=eo(kl.current),eo(cr.current),Tc(e)){if(i=e.stateNode,n=e.memoizedProps,i[or]=e,(s=i.nodeValue!==n)&&(t=si,t!==null))switch(t.tag){case 3:wc(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&wc(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[or]=e,e.stateNode=i}return vn(e),null;case 13:if(Tt(It),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(bt&&ri!==null&&e.mode&1&&!(e.flags&128))ly(),ua(),e.flags|=98560,s=!1;else if(s=Tc(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ee(317));s[or]=e}else ua(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;vn(e),s=!1}else zi!==null&&(vp(zi),zi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||It.current&1?tn===0&&(tn=3):m0())),e.updateQueue!==null&&(e.flags|=4),vn(e),null);case 4:return fa(),up(t,e),t===null&&Ul(e.stateNode.containerInfo),vn(e),null;case 10:return Qm(e.type._context),vn(e),null;case 17:return Gn(e.type)&&Bu(),vn(e),null;case 19:if(Tt(It),s=e.memoizedState,s===null)return vn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)qa(s,!1);else{if(tn!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=$u(t),o!==null){for(e.flags|=128,qa(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return vt(It,It.current&1|2),e.child}t=t.sibling}s.tail!==null&&$t()>pa&&(e.flags|=128,i=!0,qa(s,!1),e.lanes=4194304)}else{if(!i)if(t=$u(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),qa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!bt)return vn(e),null}else 2*$t()-s.renderingStartTime>pa&&n!==1073741824&&(e.flags|=128,i=!0,qa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=$t(),e.sibling=null,n=It.current,vt(It,i?n&1|2:n&1),e):(vn(e),null);case 22:case 23:return p0(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?ii&1073741824&&(vn(e),e.subtreeFlags&6&&(e.flags|=8192)):vn(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function iw(t,e){switch(Ym(e),e.tag){case 1:return Gn(e.type)&&Bu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return fa(),Tt(Hn),Tt(wn),i0(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return n0(e),null;case 13:if(Tt(It),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));ua()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Tt(It),null;case 4:return fa(),null;case 10:return Qm(e.type._context),null;case 22:case 23:return p0(),null;case 24:return null;default:return null}}var Cc=!1,Mn=!1,rw=typeof WeakSet=="function"?WeakSet:Set,de=null;function Yo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){kt(t,e,i)}else n.current=null}function hp(t,e,n){try{n()}catch(i){kt(t,e,i)}}var G1=!1;function sw(t,e){if(Yd=Nu,t=q2(),$m(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,d=t,f=null;t:for(;;){for(var g;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)f=d,d=g;for(;;){if(d===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++h===i&&(l=o),(g=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(qd={focusedElem:t,selectionRange:n},Nu=!1,de=e;de!==null;)if(e=de,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,de=t;else for(;de!==null;){e=de;try{var p=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var x=p.memoizedProps,m=p.memoizedState,u=e.stateNode,_=u.getSnapshotBeforeUpdate(e.elementType===e.type?x:ki(e.type,x),m);u.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(S){kt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,de=t;break}de=e.return}return p=G1,G1=!1,p}function vl(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&hp(e,n,s)}r=r.next}while(r!==i)}}function Ah(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function fp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Xy(t){var e=t.alternate;e!==null&&(t.alternate=null,Xy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[or],delete e[Fl],delete e[Qd],delete e[VE],delete e[HE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function $y(t){return t.tag===5||t.tag===3||t.tag===4}function W1(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$y(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function dp(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ku));else if(i!==4&&(t=t.child,t!==null))for(dp(t,e,n),t=t.sibling;t!==null;)dp(t,e,n),t=t.sibling}function pp(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(pp(t,e,n),t=t.sibling;t!==null;)pp(t,e,n),t=t.sibling}var fn=null,Bi=!1;function jr(t,e,n){for(n=n.child;n!==null;)jy(t,e,n),n=n.sibling}function jy(t,e,n){if(lr&&typeof lr.onCommitFiberUnmount=="function")try{lr.onCommitFiberUnmount(vh,n)}catch{}switch(n.tag){case 5:Mn||Yo(n,e);case 6:var i=fn,r=Bi;fn=null,jr(t,e,n),fn=i,Bi=r,fn!==null&&(Bi?(t=fn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):fn.removeChild(n.stateNode));break;case 18:fn!==null&&(Bi?(t=fn,n=n.stateNode,t.nodeType===8?Af(t.parentNode,n):t.nodeType===1&&Af(t,n),Ll(t)):Af(fn,n.stateNode));break;case 4:i=fn,r=Bi,fn=n.stateNode.containerInfo,Bi=!0,jr(t,e,n),fn=i,Bi=r;break;case 0:case 11:case 14:case 15:if(!Mn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&hp(n,e,o),r=r.next}while(r!==i)}jr(t,e,n);break;case 1:if(!Mn&&(Yo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){kt(n,e,a)}jr(t,e,n);break;case 21:jr(t,e,n);break;case 22:n.mode&1?(Mn=(i=Mn)||n.memoizedState!==null,jr(t,e,n),Mn=i):jr(t,e,n);break;default:jr(t,e,n)}}function X1(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new rw),e.forEach(function(i){var r=pw.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Ii(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:fn=a.stateNode,Bi=!1;break e;case 3:fn=a.stateNode.containerInfo,Bi=!0;break e;case 4:fn=a.stateNode.containerInfo,Bi=!0;break e}a=a.return}if(fn===null)throw Error(ee(160));jy(s,o,r),fn=null,Bi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){kt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Yy(e,t),e=e.sibling}function Yy(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ii(e,t),Qi(t),i&4){try{vl(3,t,t.return),Ah(3,t)}catch(x){kt(t,t.return,x)}try{vl(5,t,t.return)}catch(x){kt(t,t.return,x)}}break;case 1:Ii(e,t),Qi(t),i&512&&n!==null&&Yo(n,n.return);break;case 5:if(Ii(e,t),Qi(t),i&512&&n!==null&&Yo(n,n.return),t.flags&32){var r=t.stateNode;try{Rl(r,"")}catch(x){kt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&g2(r,s),kd(a,o);var c=kd(a,s);for(o=0;o<l.length;o+=2){var h=l[o],d=l[o+1];h==="style"?S2(r,d):h==="dangerouslySetInnerHTML"?y2(r,d):h==="children"?Rl(r,d):Im(r,h,d,c)}switch(a){case"input":Id(r,s);break;case"textarea":_2(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Qo(r,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?Qo(r,!!s.multiple,s.defaultValue,!0):Qo(r,!!s.multiple,s.multiple?[]:"",!1))}r[Fl]=s}catch(x){kt(t,t.return,x)}}break;case 6:if(Ii(e,t),Qi(t),i&4){if(t.stateNode===null)throw Error(ee(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){kt(t,t.return,x)}}break;case 3:if(Ii(e,t),Qi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ll(e.containerInfo)}catch(x){kt(t,t.return,x)}break;case 4:Ii(e,t),Qi(t);break;case 13:Ii(e,t),Qi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(f0=$t())),i&4&&X1(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Mn=(c=Mn)||h,Ii(e,t),Mn=c):Ii(e,t),Qi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(de=t,h=t.child;h!==null;){for(d=de=h;de!==null;){switch(f=de,g=f.child,f.tag){case 0:case 11:case 14:case 15:vl(4,f,f.return);break;case 1:Yo(f,f.return);var p=f.stateNode;if(typeof p.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,p.props=e.memoizedProps,p.state=e.memoizedState,p.componentWillUnmount()}catch(x){kt(i,n,x)}}break;case 5:Yo(f,f.return);break;case 22:if(f.memoizedState!==null){j1(d);continue}}g!==null?(g.return=f,de=g):j1(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=x2("display",o))}catch(x){kt(t,t.return,x)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){kt(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Ii(e,t),Qi(t),i&4&&X1(t);break;case 21:break;default:Ii(e,t),Qi(t)}}function Qi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if($y(n)){var i=n;break e}n=n.return}throw Error(ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Rl(r,""),i.flags&=-33);var s=W1(t);pp(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=W1(t);dp(t,a,o);break;default:throw Error(ee(161))}}catch(l){kt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ow(t,e,n){de=t,qy(t)}function qy(t,e,n){for(var i=(t.mode&1)!==0;de!==null;){var r=de,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Cc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Mn;a=Cc;var c=Mn;if(Cc=o,(Mn=l)&&!c)for(de=r;de!==null;)o=de,l=o.child,o.tag===22&&o.memoizedState!==null?Y1(r):l!==null?(l.return=o,de=l):Y1(r);for(;s!==null;)de=s,qy(s),s=s.sibling;de=r,Cc=a,Mn=c}$1(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,de=s):$1(t)}}function $1(t){for(;de!==null;){var e=de;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Mn||Ah(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Mn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ki(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&P1(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}P1(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&Ll(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}Mn||e.flags&512&&fp(e)}catch(f){kt(e,e.return,f)}}if(e===t){de=null;break}if(n=e.sibling,n!==null){n.return=e.return,de=n;break}de=e.return}}function j1(t){for(;de!==null;){var e=de;if(e===t){de=null;break}var n=e.sibling;if(n!==null){n.return=e.return,de=n;break}de=e.return}}function Y1(t){for(;de!==null;){var e=de;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ah(4,e)}catch(l){kt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){kt(e,r,l)}}var s=e.return;try{fp(e)}catch(l){kt(e,s,l)}break;case 5:var o=e.return;try{fp(e)}catch(l){kt(e,o,l)}}}catch(l){kt(e,e.return,l)}if(e===t){de=null;break}var a=e.sibling;if(a!==null){a.return=e.return,de=a;break}de=e.return}}var aw=Math.ceil,qu=Xr.ReactCurrentDispatcher,u0=Xr.ReactCurrentOwner,Ti=Xr.ReactCurrentBatchConfig,Je=0,un=null,Jt=null,dn=0,ii=0,qo=Ls(0),tn=0,Hl=null,fo=0,Rh=0,h0=0,yl=null,Bn=null,f0=0,pa=1/0,Ar=null,Ku=!1,mp=null,gs=null,bc=!1,us=null,Zu=0,xl=0,gp=null,fu=-1,du=0;function bn(){return Je&6?$t():fu!==-1?fu:fu=$t()}function _s(t){return t.mode&1?Je&2&&dn!==0?dn&-dn:WE.transition!==null?(du===0&&(du=I2()),du):(t=ht,t!==0||(t=window.event,t=t===void 0?16:z2(t.type)),t):1}function Xi(t,e,n,i){if(50<xl)throw xl=0,gp=null,Error(ee(185));Yl(t,n,i),(!(Je&2)||t!==un)&&(t===un&&(!(Je&2)&&(Rh|=n),tn===4&&os(t,dn)),Wn(t,i),n===1&&Je===0&&!(e.mode&1)&&(pa=$t()+500,Eh&&Ds()))}function Wn(t,e){var n=t.callbackNode;WM(t,e);var i=Uu(t,t===un?dn:0);if(i===0)n!==null&&i1(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&i1(n),e===1)t.tag===0?GE(q1.bind(null,t)):sy(q1.bind(null,t)),BE(function(){!(Je&6)&&Ds()}),n=null;else{switch(U2(i)){case 1:n=km;break;case 4:n=L2;break;case 16:n=Iu;break;case 536870912:n=D2;break;default:n=Iu}n=ix(n,Ky.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ky(t,e){if(fu=-1,du=0,Je&6)throw Error(ee(327));var n=t.callbackNode;if(ia()&&t.callbackNode!==n)return null;var i=Uu(t,t===un?dn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Qu(t,i);else{e=i;var r=Je;Je|=2;var s=Qy();(un!==t||dn!==e)&&(Ar=null,pa=$t()+500,io(t,e));do try{uw();break}catch(a){Zy(t,a)}while(!0);Zm(),qu.current=s,Je=r,Jt!==null?e=0:(un=null,dn=0,e=tn)}if(e!==0){if(e===2&&(r=Gd(t),r!==0&&(i=r,e=_p(t,r))),e===1)throw n=Hl,io(t,0),os(t,i),Wn(t,$t()),n;if(e===6)os(t,i);else{if(r=t.current.alternate,!(i&30)&&!lw(r)&&(e=Qu(t,i),e===2&&(s=Gd(t),s!==0&&(i=s,e=_p(t,s))),e===1))throw n=Hl,io(t,0),os(t,i),Wn(t,$t()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:$s(t,Bn,Ar);break;case 3:if(os(t,i),(i&130023424)===i&&(e=f0+500-$t(),10<e)){if(Uu(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){bn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Zd($s.bind(null,t,Bn,Ar),e);break}$s(t,Bn,Ar);break;case 4:if(os(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Wi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=$t()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*aw(i/1960))-i,10<i){t.timeoutHandle=Zd($s.bind(null,t,Bn,Ar),i);break}$s(t,Bn,Ar);break;case 5:$s(t,Bn,Ar);break;default:throw Error(ee(329))}}}return Wn(t,$t()),t.callbackNode===n?Ky.bind(null,t):null}function _p(t,e){var n=yl;return t.current.memoizedState.isDehydrated&&(io(t,e).flags|=256),t=Qu(t,e),t!==2&&(e=Bn,Bn=n,e!==null&&vp(e)),t}function vp(t){Bn===null?Bn=t:Bn.push.apply(Bn,t)}function lw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!$i(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function os(t,e){for(e&=~h0,e&=~Rh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Wi(e),i=1<<n;t[n]=-1,e&=~i}}function q1(t){if(Je&6)throw Error(ee(327));ia();var e=Uu(t,0);if(!(e&1))return Wn(t,$t()),null;var n=Qu(t,e);if(t.tag!==0&&n===2){var i=Gd(t);i!==0&&(e=i,n=_p(t,i))}if(n===1)throw n=Hl,io(t,0),os(t,e),Wn(t,$t()),n;if(n===6)throw Error(ee(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,$s(t,Bn,Ar),Wn(t,$t()),null}function d0(t,e){var n=Je;Je|=1;try{return t(e)}finally{Je=n,Je===0&&(pa=$t()+500,Eh&&Ds())}}function po(t){us!==null&&us.tag===0&&!(Je&6)&&ia();var e=Je;Je|=1;var n=Ti.transition,i=ht;try{if(Ti.transition=null,ht=1,t)return t()}finally{ht=i,Ti.transition=n,Je=e,!(Je&6)&&Ds()}}function p0(){ii=qo.current,Tt(qo)}function io(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,kE(n)),Jt!==null)for(n=Jt.return;n!==null;){var i=n;switch(Ym(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Bu();break;case 3:fa(),Tt(Hn),Tt(wn),i0();break;case 5:n0(i);break;case 4:fa();break;case 13:Tt(It);break;case 19:Tt(It);break;case 10:Qm(i.type._context);break;case 22:case 23:p0()}n=n.return}if(un=t,Jt=t=vs(t.current,null),dn=ii=e,tn=0,Hl=null,h0=Rh=fo=0,Bn=yl=null,Js!==null){for(e=0;e<Js.length;e++)if(n=Js[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Js=null}return t}function Zy(t,e){do{var n=Jt;try{if(Zm(),cu.current=Yu,ju){for(var i=Ut.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ju=!1}if(ho=0,cn=en=Ut=null,_l=!1,Bl=0,u0.current=null,n===null||n.return===null){tn=1,Hl=e,Jt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=dn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=F1(o);if(g!==null){g.flags&=-257,O1(g,o,a,s,e),g.mode&1&&N1(s,c,e),e=g,l=c;var p=e.updateQueue;if(p===null){var x=new Set;x.add(l),e.updateQueue=x}else p.add(l);break e}else{if(!(e&1)){N1(s,c,e),m0();break e}l=Error(ee(426))}}else if(bt&&a.mode&1){var m=F1(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),O1(m,o,a,s,e),qm(da(l,a));break e}}s=l=da(l,a),tn!==4&&(tn=2),yl===null?yl=[s]:yl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Uy(s,l,e);b1(s,u);break e;case 1:a=l;var _=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(gs===null||!gs.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Ny(s,a,e);b1(s,S);break e}}s=s.return}while(s!==null)}ex(n)}catch(C){e=C,Jt===n&&n!==null&&(Jt=n=n.return);continue}break}while(!0)}function Qy(){var t=qu.current;return qu.current=Yu,t===null?Yu:t}function m0(){(tn===0||tn===3||tn===2)&&(tn=4),un===null||!(fo&268435455)&&!(Rh&268435455)||os(un,dn)}function Qu(t,e){var n=Je;Je|=2;var i=Qy();(un!==t||dn!==e)&&(Ar=null,io(t,e));do try{cw();break}catch(r){Zy(t,r)}while(!0);if(Zm(),Je=n,qu.current=i,Jt!==null)throw Error(ee(261));return un=null,dn=0,tn}function cw(){for(;Jt!==null;)Jy(Jt)}function uw(){for(;Jt!==null&&!NM();)Jy(Jt)}function Jy(t){var e=nx(t.alternate,t,ii);t.memoizedProps=t.pendingProps,e===null?ex(t):Jt=e,u0.current=null}function ex(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=iw(n,e),n!==null){n.flags&=32767,Jt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{tn=6,Jt=null;return}}else if(n=nw(n,e,ii),n!==null){Jt=n;return}if(e=e.sibling,e!==null){Jt=e;return}Jt=e=t}while(e!==null);tn===0&&(tn=5)}function $s(t,e,n){var i=ht,r=Ti.transition;try{Ti.transition=null,ht=1,hw(t,e,n,i)}finally{Ti.transition=r,ht=i}return null}function hw(t,e,n,i){do ia();while(us!==null);if(Je&6)throw Error(ee(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ee(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(XM(t,s),t===un&&(Jt=un=null,dn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||bc||(bc=!0,ix(Iu,function(){return ia(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ti.transition,Ti.transition=null;var o=ht;ht=1;var a=Je;Je|=4,u0.current=null,sw(t,n),Yy(n,t),LE(qd),Nu=!!Yd,qd=Yd=null,t.current=n,ow(n),FM(),Je=a,ht=o,Ti.transition=s}else t.current=n;if(bc&&(bc=!1,us=t,Zu=r),s=t.pendingLanes,s===0&&(gs=null),BM(n.stateNode),Wn(t,$t()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ku)throw Ku=!1,t=mp,mp=null,t;return Zu&1&&t.tag!==0&&ia(),s=t.pendingLanes,s&1?t===gp?xl++:(xl=0,gp=t):xl=0,Ds(),null}function ia(){if(us!==null){var t=U2(Zu),e=Ti.transition,n=ht;try{if(Ti.transition=null,ht=16>t?16:t,us===null)var i=!1;else{if(t=us,us=null,Zu=0,Je&6)throw Error(ee(331));var r=Je;for(Je|=4,de=t.current;de!==null;){var s=de,o=s.child;if(de.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(de=c;de!==null;){var h=de;switch(h.tag){case 0:case 11:case 15:vl(8,h,s)}var d=h.child;if(d!==null)d.return=h,de=d;else for(;de!==null;){h=de;var f=h.sibling,g=h.return;if(Xy(h),h===c){de=null;break}if(f!==null){f.return=g,de=f;break}de=g}}}var p=s.alternate;if(p!==null){var x=p.child;if(x!==null){p.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}de=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,de=o;else e:for(;de!==null;){if(s=de,s.flags&2048)switch(s.tag){case 0:case 11:case 15:vl(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,de=u;break e}de=s.return}}var _=t.current;for(de=_;de!==null;){o=de;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,de=v;else e:for(o=_;de!==null;){if(a=de,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ah(9,a)}}catch(C){kt(a,a.return,C)}if(a===o){de=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,de=S;break e}de=a.return}}if(Je=r,Ds(),lr&&typeof lr.onPostCommitFiberRoot=="function")try{lr.onPostCommitFiberRoot(vh,t)}catch{}i=!0}return i}finally{ht=n,Ti.transition=e}}return!1}function K1(t,e,n){e=da(n,e),e=Uy(t,e,1),t=ms(t,e,1),e=bn(),t!==null&&(Yl(t,1,e),Wn(t,e))}function kt(t,e,n){if(t.tag===3)K1(t,t,n);else for(;e!==null;){if(e.tag===3){K1(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(gs===null||!gs.has(i))){t=da(n,t),t=Ny(e,t,1),e=ms(e,t,1),t=bn(),e!==null&&(Yl(e,1,t),Wn(e,t));break}}e=e.return}}function fw(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=bn(),t.pingedLanes|=t.suspendedLanes&n,un===t&&(dn&n)===n&&(tn===4||tn===3&&(dn&130023424)===dn&&500>$t()-f0?io(t,0):h0|=n),Wn(t,e)}function tx(t,e){e===0&&(t.mode&1?(e=yc,yc<<=1,!(yc&130023424)&&(yc=4194304)):e=1);var n=bn();t=zr(t,e),t!==null&&(Yl(t,e,n),Wn(t,n))}function dw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),tx(t,n)}function pw(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),tx(t,n)}var nx;nx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Hn.current)Vn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Vn=!1,tw(t,e,n);Vn=!!(t.flags&131072)}else Vn=!1,bt&&e.flags&1048576&&oy(e,Hu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;hu(t,e),t=e.pendingProps;var r=ca(e,wn.current);na(e,n),r=s0(null,e,i,t,r,n);var s=o0();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Gn(i)?(s=!0,zu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,e0(e),r.updater=Th,e.stateNode=r,r._reactInternals=e,rp(e,i,t,n),e=ap(null,e,i,!0,s,n)):(e.tag=0,bt&&s&&jm(e),Cn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(hu(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=gw(i),t=ki(i,t),r){case 0:e=op(null,e,i,t,n);break e;case 1:e=z1(null,e,i,t,n);break e;case 11:e=k1(null,e,i,t,n);break e;case 14:e=B1(null,e,i,ki(i.type,t),n);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ki(i,r),op(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ki(i,r),z1(t,e,i,r,n);case 3:e:{if(By(e),t===null)throw Error(ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,fy(t,e),Xu(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=da(Error(ee(423)),e),e=V1(t,e,i,n,r);break e}else if(i!==r){r=da(Error(ee(424)),e),e=V1(t,e,i,n,r);break e}else for(ri=ps(e.stateNode.containerInfo.firstChild),si=e,bt=!0,zi=null,n=uy(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ua(),i===r){e=Vr(t,e,n);break e}Cn(t,e,i,n)}e=e.child}return e;case 5:return dy(e),t===null&&tp(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Kd(i,r)?o=null:s!==null&&Kd(i,s)&&(e.flags|=32),ky(t,e),Cn(t,e,o,n),e.child;case 6:return t===null&&tp(e),null;case 13:return zy(t,e,n);case 4:return t0(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ha(e,null,i,n):Cn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ki(i,r),k1(t,e,i,r,n);case 7:return Cn(t,e,e.pendingProps,n),e.child;case 8:return Cn(t,e,e.pendingProps.children,n),e.child;case 12:return Cn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,vt(Gu,i._currentValue),i._currentValue=o,s!==null)if($i(s.value,o)){if(s.children===r.children&&!Hn.current){e=Vr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ur(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),np(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ee(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),np(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Cn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,na(e,n),r=Ai(r),i=i(r),e.flags|=1,Cn(t,e,i,n),e.child;case 14:return i=e.type,r=ki(i,e.pendingProps),r=ki(i.type,r),B1(t,e,i,r,n);case 15:return Fy(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ki(i,r),hu(t,e),e.tag=1,Gn(i)?(t=!0,zu(e)):t=!1,na(e,n),Iy(e,i,r),rp(e,i,r,n),ap(null,e,i,!0,t,n);case 19:return Vy(t,e,n);case 22:return Oy(t,e,n)}throw Error(ee(156,e.tag))};function ix(t,e){return P2(t,e)}function mw(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mi(t,e,n,i){return new mw(t,e,n,i)}function g0(t){return t=t.prototype,!(!t||!t.isReactComponent)}function gw(t){if(typeof t=="function")return g0(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Nm)return 11;if(t===Fm)return 14}return 2}function vs(t,e){var n=t.alternate;return n===null?(n=Mi(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function pu(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")g0(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Bo:return ro(n.children,r,s,e);case Um:o=8,r|=8;break;case Cd:return t=Mi(12,n,e,r|2),t.elementType=Cd,t.lanes=s,t;case bd:return t=Mi(13,n,e,r),t.elementType=bd,t.lanes=s,t;case Pd:return t=Mi(19,n,e,r),t.elementType=Pd,t.lanes=s,t;case d2:return Ch(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case h2:o=10;break e;case f2:o=9;break e;case Nm:o=11;break e;case Fm:o=14;break e;case is:o=16,i=null;break e}throw Error(ee(130,t==null?t:typeof t,""))}return e=Mi(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function ro(t,e,n,i){return t=Mi(7,t,i,e),t.lanes=n,t}function Ch(t,e,n,i){return t=Mi(22,t,i,e),t.elementType=d2,t.lanes=n,t.stateNode={isHidden:!1},t}function Uf(t,e,n){return t=Mi(6,t,null,e),t.lanes=n,t}function Nf(t,e,n){return e=Mi(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function _w(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mf(0),this.expirationTimes=mf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mf(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function _0(t,e,n,i,r,s,o,a,l){return t=new _w(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Mi(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},e0(s),t}function vw(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ko,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function rx(t){if(!t)return Es;t=t._reactInternals;e:{if(xo(t)!==t||t.tag!==1)throw Error(ee(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Gn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(t.tag===1){var n=t.type;if(Gn(n))return ry(t,n,e)}return e}function sx(t,e,n,i,r,s,o,a,l){return t=_0(n,i,!0,t,r,s,o,a,l),t.context=rx(null),n=t.current,i=bn(),r=_s(n),s=Ur(i,r),s.callback=e??null,ms(n,s,r),t.current.lanes=r,Yl(t,r,i),Wn(t,i),t}function bh(t,e,n,i){var r=e.current,s=bn(),o=_s(r);return n=rx(n),e.context===null?e.context=n:e.pendingContext=n,e=Ur(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ms(r,e,o),t!==null&&(Xi(t,r,o,s),lu(t,r,o)),o}function Ju(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Z1(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function v0(t,e){Z1(t,e),(t=t.alternate)&&Z1(t,e)}function yw(){return null}var ox=typeof reportError=="function"?reportError:function(t){console.error(t)};function y0(t){this._internalRoot=t}Ph.prototype.render=y0.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ee(409));bh(t,e,null,null)};Ph.prototype.unmount=y0.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;po(function(){bh(null,t,null,null)}),e[Br]=null}};function Ph(t){this._internalRoot=t}Ph.prototype.unstable_scheduleHydration=function(t){if(t){var e=O2();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ss.length&&e!==0&&e<ss[n].priority;n++);ss.splice(n,0,t),n===0&&B2(t)}};function x0(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Lh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Q1(){}function xw(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Ju(o);s.call(c)}}var o=sx(e,i,t,0,null,!1,!1,"",Q1);return t._reactRootContainer=o,t[Br]=o.current,Ul(t.nodeType===8?t.parentNode:t),po(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Ju(l);a.call(c)}}var l=_0(t,0,!1,null,null,!1,!1,"",Q1);return t._reactRootContainer=l,t[Br]=l.current,Ul(t.nodeType===8?t.parentNode:t),po(function(){bh(e,l,n,i)}),l}function Dh(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Ju(o);a.call(l)}}bh(e,o,t,r)}else o=xw(n,e,t,r,i);return Ju(o)}N2=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=al(e.pendingLanes);n!==0&&(Bm(e,n|1),Wn(e,$t()),!(Je&6)&&(pa=$t()+500,Ds()))}break;case 13:po(function(){var i=zr(t,1);if(i!==null){var r=bn();Xi(i,t,1,r)}}),v0(t,1)}};zm=function(t){if(t.tag===13){var e=zr(t,134217728);if(e!==null){var n=bn();Xi(e,t,134217728,n)}v0(t,134217728)}};F2=function(t){if(t.tag===13){var e=_s(t),n=zr(t,e);if(n!==null){var i=bn();Xi(n,t,e,i)}v0(t,e)}};O2=function(){return ht};k2=function(t,e){var n=ht;try{return ht=t,e()}finally{ht=n}};zd=function(t,e,n){switch(e){case"input":if(Id(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Mh(i);if(!r)throw Error(ee(90));m2(i),Id(i,r)}}}break;case"textarea":_2(t,n);break;case"select":e=n.value,e!=null&&Qo(t,!!n.multiple,e,!1)}};w2=d0;T2=po;var Sw={usingClientEntryPoint:!1,Events:[Kl,Go,Mh,M2,E2,d0]},Ka={findFiberByHostInstance:Qs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Mw={bundleType:Ka.bundleType,version:Ka.version,rendererPackageName:Ka.rendererPackageName,rendererConfig:Ka.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=C2(t),t===null?null:t.stateNode},findFiberByHostInstance:Ka.findFiberByHostInstance||yw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pc.isDisabled&&Pc.supportsFiber)try{vh=Pc.inject(Mw),lr=Pc}catch{}}ci.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sw;ci.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x0(e))throw Error(ee(200));return vw(t,e,null,n)};ci.createRoot=function(t,e){if(!x0(t))throw Error(ee(299));var n=!1,i="",r=ox;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=_0(t,1,!1,null,null,n,!1,i,r),t[Br]=e.current,Ul(t.nodeType===8?t.parentNode:t),new y0(e)};ci.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ee(188)):(t=Object.keys(t).join(","),Error(ee(268,t)));return t=C2(e),t=t===null?null:t.stateNode,t};ci.flushSync=function(t){return po(t)};ci.hydrate=function(t,e,n){if(!Lh(e))throw Error(ee(200));return Dh(null,t,e,!0,n)};ci.hydrateRoot=function(t,e,n){if(!x0(t))throw Error(ee(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=ox;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=sx(e,null,t,1,n??null,r,!1,s,o),t[Br]=e.current,Ul(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Ph(e)};ci.render=function(t,e,n){if(!Lh(e))throw Error(ee(200));return Dh(null,t,e,!1,n)};ci.unmountComponentAtNode=function(t){if(!Lh(t))throw Error(ee(40));return t._reactRootContainer?(po(function(){Dh(null,null,t,!1,function(){t._reactRootContainer=null,t[Br]=null})}),!0):!1};ci.unstable_batchedUpdates=d0;ci.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Lh(n))throw Error(ee(200));if(t==null||t._reactInternals===void 0)throw Error(ee(38));return Dh(t,e,n,!1,i)};ci.version="18.3.1-next-f1338f8080-20240426";function ax(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ax)}catch(t){console.error(t)}}ax(),a2.exports=ci;var Ew=a2.exports,J1=Ew;Ad.createRoot=J1.createRoot,Ad.hydrateRoot=J1.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const S0="169",ww=0,e_=1,Tw=2,lx=1,cx=2,Tr=3,ws=0,Pn=1,ar=2,ys=0,ra=1,t_=2,n_=3,i_=4,Aw=5,Ks=100,Rw=101,Cw=102,bw=103,Pw=104,Lw=200,Dw=201,Iw=202,Uw=203,yp=204,xp=205,Nw=206,Fw=207,Ow=208,kw=209,Bw=210,zw=211,Vw=212,Hw=213,Gw=214,Sp=0,Mp=1,Ep=2,ma=3,wp=4,Tp=5,Ap=6,Rp=7,ux=0,Ww=1,Xw=2,xs=0,$w=1,jw=2,Yw=3,qw=4,Kw=5,Zw=6,Qw=7,hx=300,ga=301,_a=302,Cp=303,bp=304,Ih=306,Pp=1e3,to=1001,Lp=1002,Ei=1003,Jw=1004,Lc=1005,Vi=1006,Ff=1007,no=1008,Hr=1009,fx=1010,dx=1011,Gl=1012,M0=1013,mo=1014,Dr=1015,Ql=1016,E0=1017,w0=1018,va=1020,px=35902,mx=1021,gx=1022,Gi=1023,_x=1024,vx=1025,sa=1026,ya=1027,yx=1028,T0=1029,xx=1030,A0=1031,R0=1033,mu=33776,gu=33777,_u=33778,vu=33779,Dp=35840,Ip=35841,Up=35842,Np=35843,Fp=36196,Op=37492,kp=37496,Bp=37808,zp=37809,Vp=37810,Hp=37811,Gp=37812,Wp=37813,Xp=37814,$p=37815,jp=37816,Yp=37817,qp=37818,Kp=37819,Zp=37820,Qp=37821,yu=36492,Jp=36494,em=36495,Sx=36283,tm=36284,nm=36285,im=36286,e4=3200,t4=3201,Mx=0,n4=1,as="",ir="srgb",Is="srgb-linear",C0="display-p3",Uh="display-p3-linear",eh="linear",Et="srgb",th="rec709",nh="p3",Eo=7680,r_=519,i4=512,r4=513,s4=514,Ex=515,o4=516,a4=517,l4=518,c4=519,s_=35044,o_="300 es",Ir=2e3,ih=2001;class Ua{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Of=Math.PI/180,rm=180/Math.PI;function Jl(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(yn[t&255]+yn[t>>8&255]+yn[t>>16&255]+yn[t>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[n&63|128]+yn[n>>8&255]+"-"+yn[n>>16&255]+yn[n>>24&255]+yn[i&255]+yn[i>>8&255]+yn[i>>16&255]+yn[i>>24&255]).toLowerCase()}function zn(t,e,n){return Math.max(e,Math.min(n,t))}function u4(t,e){return(t%e+e)%e}function kf(t,e,n){return(1-n)*t+n*e}function Za(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Fn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class st{constructor(e=0,n=0){st.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(zn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,n,i,r,s,o,a,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],g=i[5],p=i[8],x=r[0],m=r[3],u=r[6],_=r[1],v=r[4],S=r[7],C=r[2],A=r[5],T=r[8];return s[0]=o*x+a*_+l*C,s[3]=o*m+a*v+l*A,s[6]=o*u+a*S+l*T,s[1]=c*x+h*_+d*C,s[4]=c*m+h*v+d*A,s[7]=c*u+h*S+d*T,s[2]=f*x+g*_+p*C,s[5]=f*m+g*v+p*A,s[8]=f*u+g*S+p*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return n*o*h-n*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,f=a*l-h*s,g=c*s-o*l,p=n*d+i*f+r*g;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return e[0]=d*x,e[1]=(r*c-h*i)*x,e[2]=(a*i-r*o)*x,e[3]=f*x,e[4]=(h*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=g*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Bf.makeScale(e,n)),this}rotate(e){return this.premultiply(Bf.makeRotation(-e)),this}translate(e,n){return this.premultiply(Bf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bf=new Be;function wx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function rh(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function h4(){const t=rh("canvas");return t.style.display="block",t}const a_={};function xu(t){t in a_||(a_[t]=!0,console.warn(t))}function f4(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function d4(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function p4(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const l_=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),c_=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Qa={[Is]:{transfer:eh,primaries:th,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[ir]:{transfer:Et,primaries:th,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Uh]:{transfer:eh,primaries:nh,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(c_),fromReference:t=>t.applyMatrix3(l_)},[C0]:{transfer:Et,primaries:nh,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(c_),fromReference:t=>t.applyMatrix3(l_).convertLinearToSRGB()}},m4=new Set([Is,Uh]),lt={enabled:!0,_workingColorSpace:Is,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!m4.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Qa[e].toReference,r=Qa[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Qa[t].primaries},getTransfer:function(t){return t===as?eh:Qa[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Qa[e].luminanceCoefficients)}};function oa(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function zf(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let wo;class g4{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{wo===void 0&&(wo=rh("canvas")),wo.width=e.width,wo.height=e.height;const i=wo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=wo}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=rh("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=oa(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(oa(n[i]/255)*255):n[i]=oa(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _4=0;class Tx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_4++}),this.uuid=Jl(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Vf(r[o].image)):s.push(Vf(r[o]))}else s=Vf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Vf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?g4.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let v4=0;class Xn extends Ua{constructor(e=Xn.DEFAULT_IMAGE,n=Xn.DEFAULT_MAPPING,i=to,r=to,s=Vi,o=no,a=Gi,l=Hr,c=Xn.DEFAULT_ANISOTROPY,h=as){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:v4++}),this.uuid=Jl(),this.name="",this.source=new Tx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pp:e.x=e.x-Math.floor(e.x);break;case to:e.x=e.x<0?0:1;break;case Lp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pp:e.y=e.y-Math.floor(e.y);break;case to:e.y=e.y<0?0:1;break;case Lp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=hx;Xn.DEFAULT_ANISOTROPY=1;class Bt{constructor(e=0,n=0,i=0,r=1){Bt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],g=l[5],p=l[9],x=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,S=(g+1)/2,C=(u+1)/2,A=(h+f)/4,T=(d+x)/4,b=(p+m)/4;return v>S&&v>C?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=A/i,s=T/i):S>C?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=b/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=T/s,r=b/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-p)*(m-p)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(m-p)/_,this.y=(d-x)/_,this.z=(f-h)/_,this.w=Math.acos((c+g+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class y4 extends Ua{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Bt(0,0,e,n),this.scissorTest=!1,this.viewport=new Bt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Xn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Tx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class go extends y4{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Ax extends Xn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ei,this.minFilter=Ei,this.wrapR=to,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class x4 extends Xn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ei,this.minFilter=Ei,this.wrapR=to,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ec{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],d=i[r+3];const f=s[o+0],g=s[o+1],p=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=g,e[n+2]=p,e[n+3]=x;return}if(d!==x||l!==f||c!==g||h!==p){let m=1-a;const u=l*f+c*g+h*p+d*x,_=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const C=Math.sqrt(v),A=Math.atan2(C,u*_);m=Math.sin(m*A)/C,a=Math.sin(a*A)/C}const S=a*_;if(l=l*m+f*S,c=c*m+g*S,h=h*m+p*S,d=d*m+x*S,m===1-a){const C=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=C,c*=C,h*=C,d*=C}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],d=s[o],f=s[o+1],g=s[o+2],p=s[o+3];return e[n]=a*p+h*d+l*g-c*f,e[n+1]=l*p+h*f+c*d-a*g,e[n+2]=c*p+h*g+a*f-l*d,e[n+3]=h*p-a*d-l*f-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),d=a(s/2),f=l(i/2),g=l(r/2),p=l(s/2);switch(o){case"XYZ":this._x=f*h*d+c*g*p,this._y=c*g*d-f*h*p,this._z=c*h*p+f*g*d,this._w=c*h*d-f*g*p;break;case"YXZ":this._x=f*h*d+c*g*p,this._y=c*g*d-f*h*p,this._z=c*h*p-f*g*d,this._w=c*h*d+f*g*p;break;case"ZXY":this._x=f*h*d-c*g*p,this._y=c*g*d+f*h*p,this._z=c*h*p+f*g*d,this._w=c*h*d-f*g*p;break;case"ZYX":this._x=f*h*d-c*g*p,this._y=c*g*d+f*h*p,this._z=c*h*p-f*g*d,this._w=c*h*d+f*g*p;break;case"YZX":this._x=f*h*d+c*g*p,this._y=c*g*d+f*h*p,this._z=c*h*p-f*g*d,this._w=c*h*d-f*g*p;break;case"XZY":this._x=f*h*d-c*g*p,this._y=c*g*d-f*h*p,this._z=c*h*p+f*g*d,this._w=c*h*d+f*g*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],h=n[6],d=n[10],f=i+a+d;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(h-l)*g,this._y=(s-c)*g,this._z=(o-r)*g}else if(i>a&&i>d){const g=2*Math.sqrt(1+i-a-d);this._w=(h-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+c)/g}else if(a>d){const g=2*Math.sqrt(1+a-i-d);this._w=(s-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+h)/g}else{const g=2*Math.sqrt(1+d-i-a);this._w=(o-r)/g,this._x=(s+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-n)*h)/c,f=Math.sin(n*h)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(u_.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(u_.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),h=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*h,this.y=i+l*h+a*c-s*d,this.z=r+l*d+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Hf.copy(this).projectOnVector(e),this.sub(Hf)}reflect(e){return this.sub(Hf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(zn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hf=new k,u_=new ec;class tc{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Ui.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Ui.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Ui.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ui):Ui.fromBufferAttribute(s,o),Ui.applyMatrix4(e.matrixWorld),this.expandByPoint(Ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Dc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Dc.copy(i.boundingBox)),Dc.applyMatrix4(e.matrixWorld),this.union(Dc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ja),Ic.subVectors(this.max,Ja),To.subVectors(e.a,Ja),Ao.subVectors(e.b,Ja),Ro.subVectors(e.c,Ja),Yr.subVectors(Ao,To),qr.subVectors(Ro,Ao),Os.subVectors(To,Ro);let n=[0,-Yr.z,Yr.y,0,-qr.z,qr.y,0,-Os.z,Os.y,Yr.z,0,-Yr.x,qr.z,0,-qr.x,Os.z,0,-Os.x,-Yr.y,Yr.x,0,-qr.y,qr.x,0,-Os.y,Os.x,0];return!Gf(n,To,Ao,Ro,Ic)||(n=[1,0,0,0,1,0,0,0,1],!Gf(n,To,Ao,Ro,Ic))?!1:(Uc.crossVectors(Yr,qr),n=[Uc.x,Uc.y,Uc.z],Gf(n,To,Ao,Ro,Ic))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xr=[new k,new k,new k,new k,new k,new k,new k,new k],Ui=new k,Dc=new tc,To=new k,Ao=new k,Ro=new k,Yr=new k,qr=new k,Os=new k,Ja=new k,Ic=new k,Uc=new k,ks=new k;function Gf(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){ks.fromArray(t,s);const a=r.x*Math.abs(ks.x)+r.y*Math.abs(ks.y)+r.z*Math.abs(ks.z),l=e.dot(ks),c=n.dot(ks),h=i.dot(ks);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const S4=new tc,el=new k,Wf=new k;class b0{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):S4.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;el.subVectors(e,this.center);const n=el.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(el,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(el.copy(e.center).add(Wf)),this.expandByPoint(el.copy(e.center).sub(Wf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Sr=new k,Xf=new k,Nc=new k,Kr=new k,$f=new k,Fc=new k,jf=new k;class M4{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Sr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Sr.copy(this.origin).addScaledVector(this.direction,n),Sr.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Xf.copy(e).add(n).multiplyScalar(.5),Nc.copy(n).sub(e).normalize(),Kr.copy(this.origin).sub(Xf);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Nc),a=Kr.dot(this.direction),l=-Kr.dot(Nc),c=Kr.lengthSq(),h=Math.abs(1-o*o);let d,f,g,p;if(h>0)if(d=o*l-a,f=o*a-l,p=s*h,d>=0)if(f>=-p)if(f<=p){const x=1/h;d*=x,f*=x,g=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+c;else f<=-p?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),g=-d*d+f*(f+2*l)+c):f<=p?(d=0,f=Math.min(Math.max(-s,-l),s),g=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),g=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Xf).addScaledVector(Nc,f),g}intersectSphere(e,n){Sr.subVectors(e.center,this.origin);const i=Sr.dot(this.direction),r=Sr.dot(Sr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Sr)!==null}intersectTriangle(e,n,i,r,s){$f.subVectors(n,e),Fc.subVectors(i,e),jf.crossVectors($f,Fc);let o=this.direction.dot(jf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Kr.subVectors(this.origin,e);const l=a*this.direction.dot(Fc.crossVectors(Kr,Fc));if(l<0)return null;const c=a*this.direction.dot($f.cross(Kr));if(c<0||l+c>o)return null;const h=-a*Kr.dot(jf);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(e,n,i,r,s,o,a,l,c,h,d,f,g,p,x,m){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,h,d,f,g,p,x,m)}set(e,n,i,r,s,o,a,l,c,h,d,f,g,p,x,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=g,u[7]=p,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Co.setFromMatrixColumn(e,0).length(),s=1/Co.setFromMatrixColumn(e,1).length(),o=1/Co.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*h,g=o*d,p=a*h,x=a*d;n[0]=l*h,n[4]=-l*d,n[8]=c,n[1]=g+p*c,n[5]=f-x*c,n[9]=-a*l,n[2]=x-f*c,n[6]=p+g*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*h,g=l*d,p=c*h,x=c*d;n[0]=f+x*a,n[4]=p*a-g,n[8]=o*c,n[1]=o*d,n[5]=o*h,n[9]=-a,n[2]=g*a-p,n[6]=x+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*h,g=l*d,p=c*h,x=c*d;n[0]=f-x*a,n[4]=-o*d,n[8]=p+g*a,n[1]=g+p*a,n[5]=o*h,n[9]=x-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*h,g=o*d,p=a*h,x=a*d;n[0]=l*h,n[4]=p*c-g,n[8]=f*c+x,n[1]=l*d,n[5]=x*c+f,n[9]=g*c-p,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,g=o*c,p=a*l,x=a*c;n[0]=l*h,n[4]=x-f*d,n[8]=p*d+g,n[1]=d,n[5]=o*h,n[9]=-a*h,n[2]=-c*h,n[6]=g*d+p,n[10]=f-x*d}else if(e.order==="XZY"){const f=o*l,g=o*c,p=a*l,x=a*c;n[0]=l*h,n[4]=-d,n[8]=c*h,n[1]=f*d+x,n[5]=o*h,n[9]=g*d-p,n[2]=p*d-g,n[6]=a*h,n[10]=x*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(E4,e,w4)}lookAt(e,n,i){const r=this.elements;return Qn.subVectors(e,n),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Zr.crossVectors(i,Qn),Zr.lengthSq()===0&&(Math.abs(i.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Zr.crossVectors(i,Qn)),Zr.normalize(),Oc.crossVectors(Qn,Zr),r[0]=Zr.x,r[4]=Oc.x,r[8]=Qn.x,r[1]=Zr.y,r[5]=Oc.y,r[9]=Qn.y,r[2]=Zr.z,r[6]=Oc.z,r[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],g=i[13],p=i[2],x=i[6],m=i[10],u=i[14],_=i[3],v=i[7],S=i[11],C=i[15],A=r[0],T=r[4],b=r[8],H=r[12],y=r[1],E=r[5],F=r[9],N=r[13],W=r[2],$=r[6],V=r[10],K=r[14],L=r[3],q=r[7],Q=r[11],re=r[15];return s[0]=o*A+a*y+l*W+c*L,s[4]=o*T+a*E+l*$+c*q,s[8]=o*b+a*F+l*V+c*Q,s[12]=o*H+a*N+l*K+c*re,s[1]=h*A+d*y+f*W+g*L,s[5]=h*T+d*E+f*$+g*q,s[9]=h*b+d*F+f*V+g*Q,s[13]=h*H+d*N+f*K+g*re,s[2]=p*A+x*y+m*W+u*L,s[6]=p*T+x*E+m*$+u*q,s[10]=p*b+x*F+m*V+u*Q,s[14]=p*H+x*N+m*K+u*re,s[3]=_*A+v*y+S*W+C*L,s[7]=_*T+v*E+S*$+C*q,s[11]=_*b+v*F+S*V+C*Q,s[15]=_*H+v*N+S*K+C*re,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],g=e[14],p=e[3],x=e[7],m=e[11],u=e[15];return p*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*g-i*l*g)+x*(+n*l*g-n*c*f+s*o*f-r*o*g+r*c*h-s*l*h)+m*(+n*c*d-n*a*g-s*o*d+i*o*g+s*a*h-i*c*h)+u*(-r*a*h-n*l*d+n*a*f+r*o*d-i*o*f+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],g=e[11],p=e[12],x=e[13],m=e[14],u=e[15],_=d*m*c-x*f*c+x*l*g-a*m*g-d*l*u+a*f*u,v=p*f*c-h*m*c-p*l*g+o*m*g+h*l*u-o*f*u,S=h*x*c-p*d*c+p*a*g-o*x*g-h*a*u+o*d*u,C=p*d*l-h*x*l-p*a*f+o*x*f+h*a*m-o*d*m,A=n*_+i*v+r*S+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=_*T,e[1]=(x*f*s-d*m*s-x*r*g+i*m*g+d*r*u-i*f*u)*T,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*u+i*l*u)*T,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*g-i*l*g)*T,e[4]=v*T,e[5]=(h*m*s-p*f*s+p*r*g-n*m*g-h*r*u+n*f*u)*T,e[6]=(p*l*s-o*m*s-p*r*c+n*m*c+o*r*u-n*l*u)*T,e[7]=(o*f*s-h*l*s+h*r*c-n*f*c-o*r*g+n*l*g)*T,e[8]=S*T,e[9]=(p*d*s-h*x*s-p*i*g+n*x*g+h*i*u-n*d*u)*T,e[10]=(o*x*s-p*a*s+p*i*c-n*x*c-o*i*u+n*a*u)*T,e[11]=(h*a*s-o*d*s-h*i*c+n*d*c+o*i*g-n*a*g)*T,e[12]=C*T,e[13]=(h*x*r-p*d*r+p*i*f-n*x*f-h*i*m+n*d*m)*T,e[14]=(p*a*r-o*x*r-p*i*l+n*x*l+o*i*m-n*a*m)*T,e[15]=(o*d*r-h*a*r+h*i*l-n*d*l-o*i*f+n*a*f)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,h=o+o,d=a+a,f=s*c,g=s*h,p=s*d,x=o*h,m=o*d,u=a*d,_=l*c,v=l*h,S=l*d,C=i.x,A=i.y,T=i.z;return r[0]=(1-(x+u))*C,r[1]=(g+S)*C,r[2]=(p-v)*C,r[3]=0,r[4]=(g-S)*A,r[5]=(1-(f+u))*A,r[6]=(m+_)*A,r[7]=0,r[8]=(p+v)*T,r[9]=(m-_)*T,r[10]=(1-(f+x))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Co.set(r[0],r[1],r[2]).length();const o=Co.set(r[4],r[5],r[6]).length(),a=Co.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ni.copy(this);const c=1/s,h=1/o,d=1/a;return Ni.elements[0]*=c,Ni.elements[1]*=c,Ni.elements[2]*=c,Ni.elements[4]*=h,Ni.elements[5]*=h,Ni.elements[6]*=h,Ni.elements[8]*=d,Ni.elements[9]*=d,Ni.elements[10]*=d,n.setFromRotationMatrix(Ni),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ir){const l=this.elements,c=2*s/(n-e),h=2*s/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r);let g,p;if(a===Ir)g=-(o+s)/(o-s),p=-2*o*s/(o-s);else if(a===ih)g=-o/(o-s),p=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ir){const l=this.elements,c=1/(n-e),h=1/(i-r),d=1/(o-s),f=(n+e)*c,g=(i+r)*h;let p,x;if(a===Ir)p=(o+s)*d,x=-2*d;else if(a===ih)p=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=x,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Co=new k,Ni=new Vt,E4=new k(0,0,0),w4=new k(1,1,1),Zr=new k,Oc=new k,Qn=new k,h_=new Vt,f_=new ec;class hr{constructor(e=0,n=0,i=0,r=hr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],d=r[2],f=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(zn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-zn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(zn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-zn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(zn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-zn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return h_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(h_,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return f_.setFromEuler(this),this.setFromQuaternion(f_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hr.DEFAULT_ORDER="XYZ";class Rx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let T4=0;const d_=new k,bo=new ec,Mr=new Vt,kc=new k,tl=new k,A4=new k,R4=new ec,p_=new k(1,0,0),m_=new k(0,1,0),g_=new k(0,0,1),__={type:"added"},C4={type:"removed"},Po={type:"childadded",child:null},Yf={type:"childremoved",child:null};class pn extends Ua{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:T4++}),this.uuid=Jl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pn.DEFAULT_UP.clone();const e=new k,n=new hr,i=new ec,r=new k(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Vt},normalMatrix:{value:new Be}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return bo.setFromAxisAngle(e,n),this.quaternion.multiply(bo),this}rotateOnWorldAxis(e,n){return bo.setFromAxisAngle(e,n),this.quaternion.premultiply(bo),this}rotateX(e){return this.rotateOnAxis(p_,e)}rotateY(e){return this.rotateOnAxis(m_,e)}rotateZ(e){return this.rotateOnAxis(g_,e)}translateOnAxis(e,n){return d_.copy(e).applyQuaternion(this.quaternion),this.position.add(d_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(p_,e)}translateY(e){return this.translateOnAxis(m_,e)}translateZ(e){return this.translateOnAxis(g_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mr.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?kc.copy(e):kc.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),tl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mr.lookAt(tl,kc,this.up):Mr.lookAt(kc,tl,this.up),this.quaternion.setFromRotationMatrix(Mr),r&&(Mr.extractRotation(r.matrixWorld),bo.setFromRotationMatrix(Mr),this.quaternion.premultiply(bo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(__),Po.child=e,this.dispatchEvent(Po),Po.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(C4),Yf.child=e,this.dispatchEvent(Yf),Yf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(__),Po.child=e,this.dispatchEvent(Po),Po.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tl,e,A4),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tl,R4,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),g=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),p.length>0&&(i.nodes=p)}return i.object=r,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}pn.DEFAULT_UP=new k(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fi=new k,Er=new k,qf=new k,wr=new k,Lo=new k,Do=new k,v_=new k,Kf=new k,Zf=new k,Qf=new k,Jf=new Bt,ed=new Bt,td=new Bt;class Hi{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Fi.subVectors(e,n),r.cross(Fi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Fi.subVectors(r,n),Er.subVectors(i,n),qf.subVectors(e,n);const o=Fi.dot(Fi),a=Fi.dot(Er),l=Fi.dot(qf),c=Er.dot(Er),h=Er.dot(qf),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,g=(c*l-a*h)*f,p=(o*h-a*l)*f;return s.set(1-g-p,p,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,wr)===null?!1:wr.x>=0&&wr.y>=0&&wr.x+wr.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,wr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,wr.x),l.addScaledVector(o,wr.y),l.addScaledVector(a,wr.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Jf.setScalar(0),ed.setScalar(0),td.setScalar(0),Jf.fromBufferAttribute(e,n),ed.fromBufferAttribute(e,i),td.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Jf,s.x),o.addScaledVector(ed,s.y),o.addScaledVector(td,s.z),o}static isFrontFacing(e,n,i,r){return Fi.subVectors(i,n),Er.subVectors(e,n),Fi.cross(Er).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fi.subVectors(this.c,this.b),Er.subVectors(this.a,this.b),Fi.cross(Er).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Hi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Hi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Lo.subVectors(r,i),Do.subVectors(s,i),Kf.subVectors(e,i);const l=Lo.dot(Kf),c=Do.dot(Kf);if(l<=0&&c<=0)return n.copy(i);Zf.subVectors(e,r);const h=Lo.dot(Zf),d=Do.dot(Zf);if(h>=0&&d<=h)return n.copy(r);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),n.copy(i).addScaledVector(Lo,o);Qf.subVectors(e,s);const g=Lo.dot(Qf),p=Do.dot(Qf);if(p>=0&&g<=p)return n.copy(s);const x=g*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),n.copy(i).addScaledVector(Do,a);const m=h*p-g*d;if(m<=0&&d-h>=0&&g-p>=0)return v_.subVectors(s,r),a=(d-h)/(d-h+(g-p)),n.copy(r).addScaledVector(v_,a);const u=1/(m+x+f);return o=x*u,a=f*u,n.copy(i).addScaledVector(Lo,o).addScaledVector(Do,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Cx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qr={h:0,s:0,l:0},Bc={h:0,s:0,l:0};function nd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ge{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ir){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=lt.workingColorSpace){return this.r=e,this.g=n,this.b=i,lt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=lt.workingColorSpace){if(e=u4(e,1),n=zn(n,0,1),i=zn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=nd(o,s,e+1/3),this.g=nd(o,s,e),this.b=nd(o,s,e-1/3)}return lt.toWorkingColorSpace(this,r),this}setStyle(e,n=ir){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ir){const i=Cx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oa(e.r),this.g=oa(e.g),this.b=oa(e.b),this}copyLinearToSRGB(e){return this.r=zf(e.r),this.g=zf(e.g),this.b=zf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ir){return lt.fromWorkingColorSpace(xn.copy(this),e),Math.round(zn(xn.r*255,0,255))*65536+Math.round(zn(xn.g*255,0,255))*256+Math.round(zn(xn.b*255,0,255))}getHexString(e=ir){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=lt.workingColorSpace){lt.fromWorkingColorSpace(xn.copy(this),n);const i=xn.r,r=xn.g,s=xn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=lt.workingColorSpace){return lt.fromWorkingColorSpace(xn.copy(this),n),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=ir){lt.fromWorkingColorSpace(xn.copy(this),e);const n=xn.r,i=xn.g,r=xn.b;return e!==ir?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Qr),this.setHSL(Qr.h+e,Qr.s+n,Qr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Qr),e.getHSL(Bc);const i=kf(Qr.h,Bc.h,n),r=kf(Qr.s,Bc.s,n),s=kf(Qr.l,Bc.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new Ge;Ge.NAMES=Cx;let b4=0;class nc extends Ua{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:b4++}),this.uuid=Jl(),this.name="",this.type="Material",this.blending=ra,this.side=ws,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yp,this.blendDst=xp,this.blendEquation=Ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=ma,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=r_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Eo,this.stencilZFail=Eo,this.stencilZPass=Eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ra&&(i.blending=this.blending),this.side!==ws&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==yp&&(i.blendSrc=this.blendSrc),this.blendDst!==xp&&(i.blendDst=this.blendDst),this.blendEquation!==Ks&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ma&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==r_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Eo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Eo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Eo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class P0 extends nc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hr,this.combine=ux,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new k,zc=new st;class ur{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=s_,this.updateRanges=[],this.gpuType=Dr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)zc.fromBufferAttribute(this,n),zc.applyMatrix3(e),this.setXY(n,zc.x,zc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Kt.fromBufferAttribute(this,n),Kt.applyMatrix3(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Kt.fromBufferAttribute(this,n),Kt.applyMatrix4(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Kt.fromBufferAttribute(this,n),Kt.applyNormalMatrix(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Kt.fromBufferAttribute(this,n),Kt.transformDirection(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Za(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Fn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Za(n,this.array)),n}setX(e,n){return this.normalized&&(n=Fn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Za(n,this.array)),n}setY(e,n){return this.normalized&&(n=Fn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Za(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Fn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Za(n,this.array)),n}setW(e,n){return this.normalized&&(n=Fn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Fn(n,this.array),i=Fn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Fn(n,this.array),i=Fn(i,this.array),r=Fn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Fn(n,this.array),i=Fn(i,this.array),r=Fn(r,this.array),s=Fn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==s_&&(e.usage=this.usage),e}}class bx extends ur{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Px extends ur{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class mn extends ur{constructor(e,n,i){super(new Float32Array(e),n,i)}}let P4=0;const pi=new Vt,id=new pn,Io=new k,Jn=new tc,nl=new tc,on=new k;class Yi extends Ua{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:P4++}),this.uuid=Jl(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wx(e)?Px:bx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,n,i){return pi.makeTranslation(e,n,i),this.applyMatrix4(pi),this}scale(e,n,i){return pi.makeScale(e,n,i),this.applyMatrix4(pi),this}lookAt(e){return id.lookAt(e),id.updateMatrix(),this.applyMatrix4(id.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Io).negate(),this.translate(Io.x,Io.y,Io.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new mn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Jn.setFromBufferAttribute(s),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new b0);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];nl.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(Jn.min,nl.min),Jn.expandByPoint(on),on.addVectors(Jn.max,nl.max),Jn.expandByPoint(on)):(Jn.expandByPoint(nl.min),Jn.expandByPoint(nl.max))}Jn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)on.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(on));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)on.fromBufferAttribute(a,c),l&&(Io.fromBufferAttribute(e,c),on.add(Io)),r=Math.max(r,i.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ur(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new k,l[b]=new k;const c=new k,h=new k,d=new k,f=new st,g=new st,p=new st,x=new k,m=new k;function u(b,H,y){c.fromBufferAttribute(i,b),h.fromBufferAttribute(i,H),d.fromBufferAttribute(i,y),f.fromBufferAttribute(s,b),g.fromBufferAttribute(s,H),p.fromBufferAttribute(s,y),h.sub(c),d.sub(c),g.sub(f),p.sub(f);const E=1/(g.x*p.y-p.x*g.y);isFinite(E)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(d,-g.y).multiplyScalar(E),m.copy(d).multiplyScalar(g.x).addScaledVector(h,-p.x).multiplyScalar(E),a[b].add(x),a[H].add(x),a[y].add(x),l[b].add(m),l[H].add(m),l[y].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let b=0,H=_.length;b<H;++b){const y=_[b],E=y.start,F=y.count;for(let N=E,W=E+F;N<W;N+=3)u(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const v=new k,S=new k,C=new k,A=new k;function T(b){C.fromBufferAttribute(r,b),A.copy(C);const H=a[b];v.copy(H),v.sub(C.multiplyScalar(C.dot(H))).normalize(),S.crossVectors(A,H);const E=S.dot(l[b])<0?-1:1;o.setXYZW(b,v.x,v.y,v.z,E)}for(let b=0,H=_.length;b<H;++b){const y=_[b],E=y.start,F=y.count;for(let N=E,W=E+F;N<W;N+=3)T(e.getX(N+0)),T(e.getX(N+1)),T(e.getX(N+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ur(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);const r=new k,s=new k,o=new k,a=new k,l=new k,c=new k,h=new k,d=new k;if(e)for(let f=0,g=e.count;f<g;f+=3){const p=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,p),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,g=n.count;f<g;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)on.fromBufferAttribute(e,n),on.normalize(),e.setXYZ(n,on.x,on.y,on.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h);let g=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?g=l[x]*a.data.stride+a.offset:g=l[x]*h;for(let u=0;u<h;u++)f[p++]=c[g++]}return new ur(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Yi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){const f=c[h],g=e(f,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const g=c[d];h.push(g.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let f=0,g=d.length;f<g;f++)h.push(d[f].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const y_=new Vt,Bs=new M4,Vc=new b0,x_=new k,Hc=new k,Gc=new k,Wc=new k,rd=new k,Xc=new k,S_=new k,$c=new k;class ve extends pn{constructor(e=new Yi,n=new P0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Xc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],d=s[l];h!==0&&(rd.fromBufferAttribute(d,e),o?Xc.addScaledVector(rd,h):Xc.addScaledVector(rd.sub(n),h))}n.add(Xc)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Vc.copy(i.boundingSphere),Vc.applyMatrix4(s),Bs.copy(e.ray).recast(e.near),!(Vc.containsPoint(Bs.origin)===!1&&(Bs.intersectSphere(Vc,x_)===null||Bs.origin.distanceToSquared(x_)>(e.far-e.near)**2))&&(y_.copy(s).invert(),Bs.copy(e.ray).applyMatrix4(y_),!(i.boundingBox!==null&&Bs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Bs)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){const m=f[p],u=o[m.materialIndex],_=Math.max(m.start,g.start),v=Math.min(a.count,Math.min(m.start+m.count,g.start+g.count));for(let S=_,C=v;S<C;S+=3){const A=a.getX(S),T=a.getX(S+1),b=a.getX(S+2);r=jc(this,u,e,i,c,h,d,A,T,b),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const p=Math.max(0,g.start),x=Math.min(a.count,g.start+g.count);for(let m=p,u=x;m<u;m+=3){const _=a.getX(m),v=a.getX(m+1),S=a.getX(m+2);r=jc(this,o,e,i,c,h,d,_,v,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){const m=f[p],u=o[m.materialIndex],_=Math.max(m.start,g.start),v=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let S=_,C=v;S<C;S+=3){const A=S,T=S+1,b=S+2;r=jc(this,u,e,i,c,h,d,A,T,b),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const p=Math.max(0,g.start),x=Math.min(l.count,g.start+g.count);for(let m=p,u=x;m<u;m+=3){const _=m,v=m+1,S=m+2;r=jc(this,o,e,i,c,h,d,_,v,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function L4(t,e,n,i,r,s,o,a){let l;if(e.side===Pn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ws,a),l===null)return null;$c.copy(a),$c.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo($c);return c<n.near||c>n.far?null:{distance:c,point:$c.clone(),object:t}}function jc(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Hc),t.getVertexPosition(l,Gc),t.getVertexPosition(c,Wc);const h=L4(t,e,n,i,Hc,Gc,Wc,S_);if(h){const d=new k;Hi.getBarycoord(S_,Hc,Gc,Wc,d),r&&(h.uv=Hi.getInterpolatedAttribute(r,a,l,c,d,new st)),s&&(h.uv1=Hi.getInterpolatedAttribute(s,a,l,c,d,new st)),o&&(h.normal=Hi.getInterpolatedAttribute(o,a,l,c,d,new k),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new k,materialIndex:0};Hi.getNormal(Hc,Gc,Wc,f.normal),h.face=f,h.barycoord=d}return h}class Xe extends Yi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,g=0;p("z","y","x",-1,-1,i,n,e,o,s,0),p("z","y","x",1,-1,i,n,-e,o,s,1),p("x","z","y",1,1,e,i,n,r,o,2),p("x","z","y",1,-1,e,i,-n,r,o,3),p("x","y","z",1,-1,e,n,i,r,s,4),p("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new mn(c,3)),this.setAttribute("normal",new mn(h,3)),this.setAttribute("uv",new mn(d,2));function p(x,m,u,_,v,S,C,A,T,b,H){const y=S/T,E=C/b,F=S/2,N=C/2,W=A/2,$=T+1,V=b+1;let K=0,L=0;const q=new k;for(let Q=0;Q<V;Q++){const re=Q*E-N;for(let Ce=0;Ce<$;Ce++){const je=Ce*y-F;q[x]=je*_,q[m]=re*v,q[u]=W,c.push(q.x,q.y,q.z),q[x]=0,q[m]=0,q[u]=A>0?1:-1,h.push(q.x,q.y,q.z),d.push(Ce/T),d.push(1-Q/b),K+=1}}for(let Q=0;Q<b;Q++)for(let re=0;re<T;re++){const Ce=f+re+$*Q,je=f+re+$*(Q+1),X=f+(re+1)+$*(Q+1),te=f+(re+1)+$*Q;l.push(Ce,je,te),l.push(je,X,te),L+=6}a.addGroup(g,L,H),g+=L,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xe(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xa(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function An(t){const e={};for(let n=0;n<t.length;n++){const i=xa(t[n]);for(const r in i)e[r]=i[r]}return e}function D4(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Lx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const I4={clone:xa,merge:An};var U4=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,N4=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gr extends nc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=U4,this.fragmentShader=N4,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xa(e.uniforms),this.uniformsGroups=D4(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Dx extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=Ir}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Jr=new k,M_=new st,E_=new st;class xi extends Dx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=rm*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Of*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rm*2*Math.atan(Math.tan(Of*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Jr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Jr.x,Jr.y).multiplyScalar(-e/Jr.z),Jr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Jr.x,Jr.y).multiplyScalar(-e/Jr.z)}getViewSize(e,n){return this.getViewBounds(e,M_,E_),n.subVectors(E_,M_)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Of*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Uo=-90,No=1;class F4 extends pn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new xi(Uo,No,e,n);r.layers=this.layers,this.add(r);const s=new xi(Uo,No,e,n);s.layers=this.layers,this.add(s);const o=new xi(Uo,No,e,n);o.layers=this.layers,this.add(o);const a=new xi(Uo,No,e,n);a.layers=this.layers,this.add(a);const l=new xi(Uo,No,e,n);l.layers=this.layers,this.add(l);const c=new xi(Uo,No,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ir)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ih)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(d,f,g),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class Ix extends Xn{constructor(e,n,i,r,s,o,a,l,c,h){e=e!==void 0?e:[],n=n!==void 0?n:ga,super(e,n,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class O4 extends go{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ix(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Vi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Xe(5,5,5),s=new Gr({name:"CubemapFromEquirect",uniforms:xa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pn,blending:ys});s.uniforms.tEquirect.value=n;const o=new ve(r,s),a=n.minFilter;return n.minFilter===no&&(n.minFilter=Vi),new F4(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const sd=new k,k4=new k,B4=new Be;class js{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=sd.subVectors(i,n).cross(k4.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(sd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||B4.getNormalMatrix(e),r=this.coplanarPoint(sd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zs=new b0,Yc=new k;class L0{constructor(e=new js,n=new js,i=new js,r=new js,s=new js,o=new js){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ir){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],d=r[6],f=r[7],g=r[8],p=r[9],x=r[10],m=r[11],u=r[12],_=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-s,f-c,m-g,S-u).normalize(),i[1].setComponents(l+s,f+c,m+g,S+u).normalize(),i[2].setComponents(l+o,f+h,m+p,S+_).normalize(),i[3].setComponents(l-o,f-h,m-p,S-_).normalize(),i[4].setComponents(l-a,f-d,m-x,S-v).normalize(),n===Ir)i[5].setComponents(l+a,f+d,m+x,S+v).normalize();else if(n===ih)i[5].setComponents(a,d,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),zs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zs)}intersectsSprite(e){return zs.center.set(0,0,0),zs.radius=.7071067811865476,zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(zs)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Yc.x=r.normal.x>0?e.max.x:e.min.x,Yc.y=r.normal.y>0?e.max.y:e.min.y,Yc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Yc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ux(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function z4(t){const e=new WeakMap;function n(a,l){const c=a.array,h=a.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,h),a.onUploadCallback();let g;if(c instanceof Float32Array)g=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=t.SHORT;else if(c instanceof Uint32Array)g=t.UNSIGNED_INT;else if(c instanceof Int32Array)g=t.INT;else if(c instanceof Int8Array)g=t.BYTE;else if(c instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const h=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,h);else{d.sort((g,p)=>g.start-p.start);let f=0;for(let g=1;g<d.length;g++){const p=d[f],x=d[g];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,d[f]=x)}d.length=f+1;for(let g=0,p=d.length;g<p;g++){const x=d[g];t.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Sa extends Yi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,d=e/a,f=n/l,g=[],p=[],x=[],m=[];for(let u=0;u<h;u++){const _=u*f-o;for(let v=0;v<c;v++){const S=v*d-s;p.push(S,-_,0),x.push(0,0,1),m.push(v/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let _=0;_<a;_++){const v=_+c*u,S=_+c*(u+1),C=_+1+c*(u+1),A=_+1+c*u;g.push(v,S,A),g.push(S,C,A)}this.setIndex(g),this.setAttribute("position",new mn(p,3)),this.setAttribute("normal",new mn(x,3)),this.setAttribute("uv",new mn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sa(e.width,e.height,e.widthSegments,e.heightSegments)}}var V4=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,H4=`#ifdef USE_ALPHAHASH
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
#endif`,G4=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,W4=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X4=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$4=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,j4=`#ifdef USE_AOMAP
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
#endif`,Y4=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,q4=`#ifdef USE_BATCHING
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
#endif`,K4=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Z4=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Q4=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,J4=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,eT=`#ifdef USE_IRIDESCENCE
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
#endif`,tT=`#ifdef USE_BUMPMAP
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
#endif`,nT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,iT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,aT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,uT=`#define PI 3.141592653589793
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
} // validated`,hT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fT=`vec3 transformedNormal = objectNormal;
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
#endif`,dT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_T="gl_FragColor = linearToOutputTexel( gl_FragColor );",vT=`
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
}`,yT=`#ifdef USE_ENVMAP
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
#endif`,xT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ST=`#ifdef USE_ENVMAP
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
#endif`,MT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ET=`#ifdef USE_ENVMAP
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
#endif`,wT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,TT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,AT=`#ifdef USE_FOG
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
#endif`,CT=`#ifdef USE_GRADIENTMAP
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
}`,bT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,PT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,LT=`varying vec3 vViewPosition;
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
#endif`,IT=`#ifdef USE_ENVMAP
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
material.diffuseColor = diffuseColor.rgb;`,NT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,FT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,OT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kT=`PhysicalMaterial material;
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
#endif`,BT=`struct PhysicalMaterial {
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
}`,zT=`
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
#endif`,VT=`#if defined( RE_IndirectDiffuse )
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
#endif`,HT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,GT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$T=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,YT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,KT=`#if defined( USE_POINTS_UV )
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
#endif`,ZT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,QT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,JT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nA=`#ifdef USE_MORPHTARGETS
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
#endif`,iA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,oA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cA=`#ifdef USE_NORMALMAP
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
#endif`,uA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_A=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,SA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,MA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,EA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,TA=`float getShadowMask() {
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
}`,AA=`#ifdef USE_SKINNING
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
#endif`,CA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bA=`#ifdef USE_SKINNING
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
#endif`,PA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,LA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,DA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,IA=`#ifndef saturate
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
#endif`,NA=`#ifdef USE_TRANSMISSION
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
#endif`,FA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VA=`uniform sampler2D t2D;
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
}`,HA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,WA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$A=`#include <common>
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
}`,jA=`#if DEPTH_PACKING == 3200
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
}`,YA=`#define DISTANCE
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
}`,qA=`#define DISTANCE
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
}`,KA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZA=`uniform sampler2D tEquirect;
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
}`,JA=`uniform vec3 diffuse;
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
}`,eR=`#include <common>
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
}`,tR=`uniform vec3 diffuse;
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
}`,nR=`#define LAMBERT
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
}`,iR=`#define LAMBERT
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
}`,rR=`#define MATCAP
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
}`,sR=`#define MATCAP
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
}`,oR=`#define NORMAL
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
}`,aR=`#define NORMAL
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
}`,lR=`#define PHONG
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
}`,cR=`#define PHONG
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
}`,uR=`#define STANDARD
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
}`,hR=`#define STANDARD
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
}`,fR=`#define TOON
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
}`,dR=`#define TOON
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
}`,pR=`uniform float size;
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
}`,mR=`uniform vec3 diffuse;
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
}`,gR=`#include <common>
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
}`,_R=`uniform vec3 color;
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
}`,vR=`uniform float rotation;
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
}`,yR=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:V4,alphahash_pars_fragment:H4,alphamap_fragment:G4,alphamap_pars_fragment:W4,alphatest_fragment:X4,alphatest_pars_fragment:$4,aomap_fragment:j4,aomap_pars_fragment:Y4,batching_pars_vertex:q4,batching_vertex:K4,begin_vertex:Z4,beginnormal_vertex:Q4,bsdfs:J4,iridescence_fragment:eT,bumpmap_pars_fragment:tT,clipping_planes_fragment:nT,clipping_planes_pars_fragment:iT,clipping_planes_pars_vertex:rT,clipping_planes_vertex:sT,color_fragment:oT,color_pars_fragment:aT,color_pars_vertex:lT,color_vertex:cT,common:uT,cube_uv_reflection_fragment:hT,defaultnormal_vertex:fT,displacementmap_pars_vertex:dT,displacementmap_vertex:pT,emissivemap_fragment:mT,emissivemap_pars_fragment:gT,colorspace_fragment:_T,colorspace_pars_fragment:vT,envmap_fragment:yT,envmap_common_pars_fragment:xT,envmap_pars_fragment:ST,envmap_pars_vertex:MT,envmap_physical_pars_fragment:IT,envmap_vertex:ET,fog_vertex:wT,fog_pars_vertex:TT,fog_fragment:AT,fog_pars_fragment:RT,gradientmap_pars_fragment:CT,lightmap_pars_fragment:bT,lights_lambert_fragment:PT,lights_lambert_pars_fragment:LT,lights_pars_begin:DT,lights_toon_fragment:UT,lights_toon_pars_fragment:NT,lights_phong_fragment:FT,lights_phong_pars_fragment:OT,lights_physical_fragment:kT,lights_physical_pars_fragment:BT,lights_fragment_begin:zT,lights_fragment_maps:VT,lights_fragment_end:HT,logdepthbuf_fragment:GT,logdepthbuf_pars_fragment:WT,logdepthbuf_pars_vertex:XT,logdepthbuf_vertex:$T,map_fragment:jT,map_pars_fragment:YT,map_particle_fragment:qT,map_particle_pars_fragment:KT,metalnessmap_fragment:ZT,metalnessmap_pars_fragment:QT,morphinstance_vertex:JT,morphcolor_vertex:eA,morphnormal_vertex:tA,morphtarget_pars_vertex:nA,morphtarget_vertex:iA,normal_fragment_begin:rA,normal_fragment_maps:sA,normal_pars_fragment:oA,normal_pars_vertex:aA,normal_vertex:lA,normalmap_pars_fragment:cA,clearcoat_normal_fragment_begin:uA,clearcoat_normal_fragment_maps:hA,clearcoat_pars_fragment:fA,iridescence_pars_fragment:dA,opaque_fragment:pA,packing:mA,premultiplied_alpha_fragment:gA,project_vertex:_A,dithering_fragment:vA,dithering_pars_fragment:yA,roughnessmap_fragment:xA,roughnessmap_pars_fragment:SA,shadowmap_pars_fragment:MA,shadowmap_pars_vertex:EA,shadowmap_vertex:wA,shadowmask_pars_fragment:TA,skinbase_vertex:AA,skinning_pars_vertex:RA,skinning_vertex:CA,skinnormal_vertex:bA,specularmap_fragment:PA,specularmap_pars_fragment:LA,tonemapping_fragment:DA,tonemapping_pars_fragment:IA,transmission_fragment:UA,transmission_pars_fragment:NA,uv_pars_fragment:FA,uv_pars_vertex:OA,uv_vertex:kA,worldpos_vertex:BA,background_vert:zA,background_frag:VA,backgroundCube_vert:HA,backgroundCube_frag:GA,cube_vert:WA,cube_frag:XA,depth_vert:$A,depth_frag:jA,distanceRGBA_vert:YA,distanceRGBA_frag:qA,equirect_vert:KA,equirect_frag:ZA,linedashed_vert:QA,linedashed_frag:JA,meshbasic_vert:eR,meshbasic_frag:tR,meshlambert_vert:nR,meshlambert_frag:iR,meshmatcap_vert:rR,meshmatcap_frag:sR,meshnormal_vert:oR,meshnormal_frag:aR,meshphong_vert:lR,meshphong_frag:cR,meshphysical_vert:uR,meshphysical_frag:hR,meshtoon_vert:fR,meshtoon_frag:dR,points_vert:pR,points_frag:mR,shadow_vert:gR,shadow_frag:_R,sprite_vert:vR,sprite_frag:yR},se={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},rr={basic:{uniforms:An([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:An([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ge(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:An([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:An([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:An([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Ge(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:An([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:An([se.points,se.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:An([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:An([se.common,se.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:An([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:An([se.sprite,se.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:An([se.common,se.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:An([se.lights,se.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};rr.physical={uniforms:An([rr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const qc={r:0,b:0,g:0},Vs=new hr,xR=new Vt;function SR(t,e,n,i,r,s,o){const a=new Ge(0);let l=s===!0?0:1,c,h,d=null,f=0,g=null;function p(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?n:e).get(v)),v}function x(_){let v=!1;const S=p(_);S===null?u(a,l):S&&S.isColor&&(u(S,1),v=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(_,v){const S=p(v);S&&(S.isCubeTexture||S.mapping===Ih)?(h===void 0&&(h=new ve(new Xe(1,1,1),new Gr({name:"BackgroundCubeMaterial",uniforms:xa(rr.backgroundCube.uniforms),vertexShader:rr.backgroundCube.vertexShader,fragmentShader:rr.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Vs.copy(v.backgroundRotation),Vs.x*=-1,Vs.y*=-1,Vs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Vs.y*=-1,Vs.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(xR.makeRotationFromEuler(Vs)),h.material.toneMapped=lt.getTransfer(S.colorSpace)!==Et,(d!==S||f!==S.version||g!==t.toneMapping)&&(h.material.needsUpdate=!0,d=S,f=S.version,g=t.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new ve(new Sa(2,2),new Gr({name:"BackgroundMaterial",uniforms:xa(rr.background.uniforms),vertexShader:rr.background.vertexShader,fragmentShader:rr.background.fragmentShader,side:ws,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=lt.getTransfer(S.colorSpace)!==Et,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,d=S,f=S.version,g=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function u(_,v){_.getRGB(qc,Lx(t)),i.buffers.color.setClear(qc.r,qc.g,qc.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),l=v,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,u(a,l)},render:x,addToRenderList:m}}function MR(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(y,E,F,N,W){let $=!1;const V=d(N,F,E);s!==V&&(s=V,c(s.object)),$=g(y,N,F,W),$&&p(y,N,F,W),W!==null&&e.update(W,t.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,S(y,E,F,N),W!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function h(y){return t.deleteVertexArray(y)}function d(y,E,F){const N=F.wireframe===!0;let W=i[y.id];W===void 0&&(W={},i[y.id]=W);let $=W[E.id];$===void 0&&($={},W[E.id]=$);let V=$[N];return V===void 0&&(V=f(l()),$[N]=V),V}function f(y){const E=[],F=[],N=[];for(let W=0;W<n;W++)E[W]=0,F[W]=0,N[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:F,attributeDivisors:N,object:y,attributes:{},index:null}}function g(y,E,F,N){const W=s.attributes,$=E.attributes;let V=0;const K=F.getAttributes();for(const L in K)if(K[L].location>=0){const Q=W[L];let re=$[L];if(re===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(re=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(re=y.instanceColor)),Q===void 0||Q.attribute!==re||re&&Q.data!==re.data)return!0;V++}return s.attributesNum!==V||s.index!==N}function p(y,E,F,N){const W={},$=E.attributes;let V=0;const K=F.getAttributes();for(const L in K)if(K[L].location>=0){let Q=$[L];Q===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(Q=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(Q=y.instanceColor));const re={};re.attribute=Q,Q&&Q.data&&(re.data=Q.data),W[L]=re,V++}s.attributes=W,s.attributesNum=V,s.index=N}function x(){const y=s.newAttributes;for(let E=0,F=y.length;E<F;E++)y[E]=0}function m(y){u(y,0)}function u(y,E){const F=s.newAttributes,N=s.enabledAttributes,W=s.attributeDivisors;F[y]=1,N[y]===0&&(t.enableVertexAttribArray(y),N[y]=1),W[y]!==E&&(t.vertexAttribDivisor(y,E),W[y]=E)}function _(){const y=s.newAttributes,E=s.enabledAttributes;for(let F=0,N=E.length;F<N;F++)E[F]!==y[F]&&(t.disableVertexAttribArray(F),E[F]=0)}function v(y,E,F,N,W,$,V){V===!0?t.vertexAttribIPointer(y,E,F,W,$):t.vertexAttribPointer(y,E,F,N,W,$)}function S(y,E,F,N){x();const W=N.attributes,$=F.getAttributes(),V=E.defaultAttributeValues;for(const K in $){const L=$[K];if(L.location>=0){let q=W[K];if(q===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(q=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(q=y.instanceColor)),q!==void 0){const Q=q.normalized,re=q.itemSize,Ce=e.get(q);if(Ce===void 0)continue;const je=Ce.buffer,X=Ce.type,te=Ce.bytesPerElement,ue=X===t.INT||X===t.UNSIGNED_INT||q.gpuType===M0;if(q.isInterleavedBufferAttribute){const ae=q.data,Fe=ae.stride,Pe=q.offset;if(ae.isInstancedInterleavedBuffer){for(let Ke=0;Ke<L.locationSize;Ke++)u(L.location+Ke,ae.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ke=0;Ke<L.locationSize;Ke++)m(L.location+Ke);t.bindBuffer(t.ARRAY_BUFFER,je);for(let Ke=0;Ke<L.locationSize;Ke++)v(L.location+Ke,re/L.locationSize,X,Q,Fe*te,(Pe+re/L.locationSize*Ke)*te,ue)}else{if(q.isInstancedBufferAttribute){for(let ae=0;ae<L.locationSize;ae++)u(L.location+ae,q.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ae=0;ae<L.locationSize;ae++)m(L.location+ae);t.bindBuffer(t.ARRAY_BUFFER,je);for(let ae=0;ae<L.locationSize;ae++)v(L.location+ae,re/L.locationSize,X,Q,re*te,re/L.locationSize*ae*te,ue)}}else if(V!==void 0){const Q=V[K];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(L.location,Q);break;case 3:t.vertexAttrib3fv(L.location,Q);break;case 4:t.vertexAttrib4fv(L.location,Q);break;default:t.vertexAttrib1fv(L.location,Q)}}}}_()}function C(){b();for(const y in i){const E=i[y];for(const F in E){const N=E[F];for(const W in N)h(N[W].object),delete N[W];delete E[F]}delete i[y]}}function A(y){if(i[y.id]===void 0)return;const E=i[y.id];for(const F in E){const N=E[F];for(const W in N)h(N[W].object),delete N[W];delete E[F]}delete i[y.id]}function T(y){for(const E in i){const F=i[E];if(F[y.id]===void 0)continue;const N=F[y.id];for(const W in N)h(N[W].object),delete N[W];delete F[y.id]}}function b(){H(),o=!0,s!==r&&(s=r,c(s.object))}function H(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:H,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function ER(t,e,n){let i;function r(c){i=c}function s(c,h){t.drawArrays(i,c,h),n.update(h,i,1)}function o(c,h,d){d!==0&&(t.drawArraysInstanced(i,c,h,d),n.update(h,i,d))}function a(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let g=0;for(let p=0;p<d;p++)g+=h[p];n.update(g,i,1)}function l(c,h,d,f){if(d===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<c.length;p++)o(c[p],h[p],f[p]);else{g.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,d);let p=0;for(let x=0;x<d;x++)p+=h[x];for(let x=0;x<f.length;x++)n.update(p,i,f[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function wR(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Gi&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const b=T===Ql&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Hr&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Dr&&!b)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const g=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=p>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:g,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:S,vertexTextures:C,maxSamples:A}}function TR(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new js,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const g=d.length!==0||f||i!==0||r;return r=f,i=d.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=h(d,f,0)},this.setState=function(d,f,g){const p=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,u=t.get(d);if(!r||p===null||p.length===0||s&&!m)s?h(null):c();else{const _=s?0:i,v=_*4;let S=u.clippingState||null;l.value=S,S=h(p,f,v,g);for(let C=0;C!==v;++C)S[C]=n[C];u.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,f,g,p){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,p!==!0||m===null){const u=g+x*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<u)&&(m=new Float32Array(u));for(let v=0,S=g;v!==x;++v,S+=4)o.copy(d[v]).applyMatrix4(_,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function AR(t){let e=new WeakMap;function n(o,a){return a===Cp?o.mapping=ga:a===bp&&(o.mapping=_a),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Cp||a===bp)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new O4(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Nx extends Dx{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ko=4,w_=[.125,.215,.35,.446,.526,.582],Zs=20,od=new Nx,T_=new Ge;let ad=null,ld=0,cd=0,ud=!1;const Ys=(1+Math.sqrt(5))/2,Fo=1/Ys,A_=[new k(-Ys,Fo,0),new k(Ys,Fo,0),new k(-Fo,0,Ys),new k(Fo,0,Ys),new k(0,Ys,-Fo),new k(0,Ys,Fo),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class R_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){ad=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=P_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=b_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ad,ld,cd),this._renderer.xr.enabled=ud,e.scissorTest=!1,Kc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ga||e.mapping===_a?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ad=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Vi,minFilter:Vi,generateMipmaps:!1,type:Ql,format:Gi,colorSpace:Is,depthBuffer:!1},r=C_(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=C_(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=RR(s)),this._blurMaterial=CR(s,e,n)}return r}_compileMaterial(e){const n=new ve(this._lodPlanes[0],e);this._renderer.compile(n,od)}_sceneToCubeUV(e,n,i,r){const a=new xi(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(T_),h.toneMapping=xs,h.autoClear=!1;const g=new P0({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),p=new ve(new Xe,g);let x=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,x=!0):(g.color.copy(T_),x=!0);for(let u=0;u<6;u++){const _=u%3;_===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):_===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const v=this._cubeSize;Kc(r,_*v,u>2?v:0,v,v),h.setRenderTarget(r),x&&h.render(p,a),h.render(e,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ga||e.mapping===_a;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=P_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=b_());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ve(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Kc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,od)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=A_[(r-s-1)%A_.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new ve(this._lodPlanes[r],c),f=c.uniforms,g=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Zs-1),x=s/p,m=isFinite(s)?1+Math.floor(h*x):Zs;m>Zs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Zs}`);const u=[];let _=0;for(let T=0;T<Zs;++T){const b=T/x,H=Math.exp(-b*b/2);u.push(H),T===0?_+=H:T<m&&(_+=2*H)}for(let T=0;T<u.length;T++)u[T]=u[T]/_;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=p,f.mipInt.value=v-i;const S=this._sizeLods[r],C=3*S*(r>v-Ko?r-v+Ko:0),A=4*(this._cubeSize-S);Kc(n,C,A,3*S,2*S),l.setRenderTarget(n),l.render(d,od)}}function RR(t){const e=[],n=[],i=[];let r=t;const s=t-Ko+1+w_.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ko?l=w_[o-t+Ko-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],g=6,p=6,x=3,m=2,u=1,_=new Float32Array(x*p*g),v=new Float32Array(m*p*g),S=new Float32Array(u*p*g);for(let A=0;A<g;A++){const T=A%3*2/3-1,b=A>2?0:-1,H=[T,b,0,T+2/3,b,0,T+2/3,b+1,0,T,b,0,T+2/3,b+1,0,T,b+1,0];_.set(H,x*p*A),v.set(f,m*p*A);const y=[A,A,A,A,A,A];S.set(y,u*p*A)}const C=new Yi;C.setAttribute("position",new ur(_,x)),C.setAttribute("uv",new ur(v,m)),C.setAttribute("faceIndex",new ur(S,u)),e.push(C),r>Ko&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function C_(t,e,n){const i=new go(t,e,n);return i.texture.mapping=Ih,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Kc(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function CR(t,e,n){const i=new Float32Array(Zs),r=new k(0,1,0);return new Gr({name:"SphericalGaussianBlur",defines:{n:Zs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:D0(),fragmentShader:`

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
		`,blending:ys,depthTest:!1,depthWrite:!1})}function b_(){return new Gr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:D0(),fragmentShader:`

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
		`,blending:ys,depthTest:!1,depthWrite:!1})}function P_(){return new Gr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:D0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ys,depthTest:!1,depthWrite:!1})}function D0(){return`

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
	`}function bR(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Cp||l===bp,h=l===ga||l===_a;if(c||h){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new R_(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const g=a.image;return c&&g&&g.height>0||h&&g&&r(g)?(n===null&&(n=new R_(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function PR(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&xu("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function LR(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const p in f.attributes)e.remove(f.attributes[p]);for(const p in f.morphAttributes){const x=f.morphAttributes[p];for(let m=0,u=x.length;m<u;m++)e.remove(x[m])}f.removeEventListener("dispose",o),delete r[f.id];const g=s.get(f);g&&(e.remove(g),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)e.update(f[p],t.ARRAY_BUFFER);const g=d.morphAttributes;for(const p in g){const x=g[p];for(let m=0,u=x.length;m<u;m++)e.update(x[m],t.ARRAY_BUFFER)}}function c(d){const f=[],g=d.index,p=d.attributes.position;let x=0;if(g!==null){const _=g.array;x=g.version;for(let v=0,S=_.length;v<S;v+=3){const C=_[v+0],A=_[v+1],T=_[v+2];f.push(C,A,A,T,T,C)}}else if(p!==void 0){const _=p.array;x=p.version;for(let v=0,S=_.length/3-1;v<S;v+=3){const C=v+0,A=v+1,T=v+2;f.push(C,A,A,T,T,C)}}else return;const m=new(wx(f)?Px:bx)(f,1);m.version=x;const u=s.get(d);u&&e.remove(u),s.set(d,m)}function h(d){const f=s.get(d);if(f){const g=d.index;g!==null&&f.version<g.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function DR(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,g){t.drawElements(i,g,s,f*o),n.update(g,i,1)}function c(f,g,p){p!==0&&(t.drawElementsInstanced(i,g,s,f*o,p),n.update(g,i,p))}function h(f,g,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,f,0,p);let m=0;for(let u=0;u<p;u++)m+=g[u];n.update(m,i,1)}function d(f,g,p,x){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/o,g[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(i,g,0,s,f,0,x,0,p);let u=0;for(let _=0;_<p;_++)u+=g[_];for(let _=0;_<x.length;_++)n.update(u,i,x[_])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function IR(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function UR(t,e,n){const i=new WeakMap,r=new Bt;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let y=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var g=y;f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let S=0;p===!0&&(S=1),x===!0&&(S=2),m===!0&&(S=3);let C=a.attributes.position.count*S,A=1;C>e.maxTextureSize&&(A=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const T=new Float32Array(C*A*4*d),b=new Ax(T,C,A,d);b.type=Dr,b.needsUpdate=!0;const H=S*4;for(let E=0;E<d;E++){const F=u[E],N=_[E],W=v[E],$=C*A*4*E;for(let V=0;V<F.count;V++){const K=V*H;p===!0&&(r.fromBufferAttribute(F,V),T[$+K+0]=r.x,T[$+K+1]=r.y,T[$+K+2]=r.z,T[$+K+3]=0),x===!0&&(r.fromBufferAttribute(N,V),T[$+K+4]=r.x,T[$+K+5]=r.y,T[$+K+6]=r.z,T[$+K+7]=0),m===!0&&(r.fromBufferAttribute(W,V),T[$+K+8]=r.x,T[$+K+9]=r.y,T[$+K+10]=r.z,T[$+K+11]=W.itemSize===4?r.w:1)}}f={count:d,texture:b,size:new st(C,A)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let p=0;for(let m=0;m<c.length;m++)p+=c[m];const x=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function NR(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class Fx extends Xn{constructor(e,n,i,r,s,o,a,l,c,h=sa){if(h!==sa&&h!==ya)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===sa&&(i=mo),i===void 0&&h===ya&&(i=va),super(null,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Ei,this.minFilter=l!==void 0?l:Ei,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Ox=new Xn,L_=new Fx(1,1),kx=new Ax,Bx=new x4,zx=new Ix,D_=[],I_=[],U_=new Float32Array(16),N_=new Float32Array(9),F_=new Float32Array(4);function Na(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=D_[r];if(s===void 0&&(s=new Float32Array(r),D_[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function nn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function rn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Nh(t,e){let n=I_[e];n===void 0&&(n=new Int32Array(e),I_[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function FR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function OR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;t.uniform2fv(this.addr,e),rn(n,e)}}function kR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(nn(n,e))return;t.uniform3fv(this.addr,e),rn(n,e)}}function BR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;t.uniform4fv(this.addr,e),rn(n,e)}}function zR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(nn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,i))return;F_.set(i),t.uniformMatrix2fv(this.addr,!1,F_),rn(n,i)}}function VR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(nn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,i))return;N_.set(i),t.uniformMatrix3fv(this.addr,!1,N_),rn(n,i)}}function HR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(nn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,i))return;U_.set(i),t.uniformMatrix4fv(this.addr,!1,U_),rn(n,i)}}function GR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function WR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;t.uniform2iv(this.addr,e),rn(n,e)}}function XR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(nn(n,e))return;t.uniform3iv(this.addr,e),rn(n,e)}}function $R(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;t.uniform4iv(this.addr,e),rn(n,e)}}function jR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function YR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;t.uniform2uiv(this.addr,e),rn(n,e)}}function qR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(nn(n,e))return;t.uniform3uiv(this.addr,e),rn(n,e)}}function KR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;t.uniform4uiv(this.addr,e),rn(n,e)}}function ZR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(L_.compareFunction=Ex,s=L_):s=Ox,n.setTexture2D(e||s,r)}function QR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Bx,r)}function JR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||zx,r)}function eC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||kx,r)}function tC(t){switch(t){case 5126:return FR;case 35664:return OR;case 35665:return kR;case 35666:return BR;case 35674:return zR;case 35675:return VR;case 35676:return HR;case 5124:case 35670:return GR;case 35667:case 35671:return WR;case 35668:case 35672:return XR;case 35669:case 35673:return $R;case 5125:return jR;case 36294:return YR;case 36295:return qR;case 36296:return KR;case 35678:case 36198:case 36298:case 36306:case 35682:return ZR;case 35679:case 36299:case 36307:return QR;case 35680:case 36300:case 36308:case 36293:return JR;case 36289:case 36303:case 36311:case 36292:return eC}}function nC(t,e){t.uniform1fv(this.addr,e)}function iC(t,e){const n=Na(e,this.size,2);t.uniform2fv(this.addr,n)}function rC(t,e){const n=Na(e,this.size,3);t.uniform3fv(this.addr,n)}function sC(t,e){const n=Na(e,this.size,4);t.uniform4fv(this.addr,n)}function oC(t,e){const n=Na(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function aC(t,e){const n=Na(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function lC(t,e){const n=Na(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function cC(t,e){t.uniform1iv(this.addr,e)}function uC(t,e){t.uniform2iv(this.addr,e)}function hC(t,e){t.uniform3iv(this.addr,e)}function fC(t,e){t.uniform4iv(this.addr,e)}function dC(t,e){t.uniform1uiv(this.addr,e)}function pC(t,e){t.uniform2uiv(this.addr,e)}function mC(t,e){t.uniform3uiv(this.addr,e)}function gC(t,e){t.uniform4uiv(this.addr,e)}function _C(t,e,n){const i=this.cache,r=e.length,s=Nh(n,r);nn(i,s)||(t.uniform1iv(this.addr,s),rn(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Ox,s[o])}function vC(t,e,n){const i=this.cache,r=e.length,s=Nh(n,r);nn(i,s)||(t.uniform1iv(this.addr,s),rn(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Bx,s[o])}function yC(t,e,n){const i=this.cache,r=e.length,s=Nh(n,r);nn(i,s)||(t.uniform1iv(this.addr,s),rn(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||zx,s[o])}function xC(t,e,n){const i=this.cache,r=e.length,s=Nh(n,r);nn(i,s)||(t.uniform1iv(this.addr,s),rn(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||kx,s[o])}function SC(t){switch(t){case 5126:return nC;case 35664:return iC;case 35665:return rC;case 35666:return sC;case 35674:return oC;case 35675:return aC;case 35676:return lC;case 5124:case 35670:return cC;case 35667:case 35671:return uC;case 35668:case 35672:return hC;case 35669:case 35673:return fC;case 5125:return dC;case 36294:return pC;case 36295:return mC;case 36296:return gC;case 35678:case 36198:case 36298:case 36306:case 35682:return _C;case 35679:case 36299:case 36307:return vC;case 35680:case 36300:case 36308:case 36293:return yC;case 36289:case 36303:case 36311:case 36292:return xC}}class MC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=tC(n.type)}}class EC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=SC(n.type)}}class wC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const hd=/(\w+)(\])?(\[|\.)?/g;function O_(t,e){t.seq.push(e),t.map[e.id]=e}function TC(t,e,n){const i=t.name,r=i.length;for(hd.lastIndex=0;;){const s=hd.exec(i),o=hd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){O_(n,c===void 0?new MC(a,t,e):new EC(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new wC(a),O_(n,d)),n=d}}}class Su{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);TC(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function k_(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const AC=37297;let RC=0;function CC(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function bC(t){const e=lt.getPrimaries(lt.workingColorSpace),n=lt.getPrimaries(t);let i;switch(e===n?i="":e===nh&&n===th?i="LinearDisplayP3ToLinearSRGB":e===th&&n===nh&&(i="LinearSRGBToLinearDisplayP3"),t){case Is:case Uh:return[i,"LinearTransferOETF"];case ir:case C0:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function B_(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+CC(t.getShaderSource(e),o)}else return r}function PC(t,e){const n=bC(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function LC(t,e){let n;switch(e){case $w:n="Linear";break;case jw:n="Reinhard";break;case Yw:n="Cineon";break;case qw:n="ACESFilmic";break;case Zw:n="AgX";break;case Qw:n="Neutral";break;case Kw:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Zc=new k;function DC(){lt.getLuminanceCoefficients(Zc);const t=Zc.x.toFixed(4),e=Zc.y.toFixed(4),n=Zc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function IC(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cl).join(`
`)}function UC(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function NC(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function cl(t){return t!==""}function z_(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function V_(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const FC=/^[ \t]*#include +<([\w\d./]+)>/gm;function sm(t){return t.replace(FC,kC)}const OC=new Map;function kC(t,e){let n=ke[e];if(n===void 0){const i=OC.get(e);if(i!==void 0)n=ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return sm(n)}const BC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function H_(t){return t.replace(BC,zC)}function zC(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function G_(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function VC(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===lx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===cx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Tr&&(e="SHADOWMAP_TYPE_VSM"),e}function HC(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ga:case _a:e="ENVMAP_TYPE_CUBE";break;case Ih:e="ENVMAP_TYPE_CUBE_UV";break}return e}function GC(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case _a:e="ENVMAP_MODE_REFRACTION";break}return e}function WC(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case ux:e="ENVMAP_BLENDING_MULTIPLY";break;case Ww:e="ENVMAP_BLENDING_MIX";break;case Xw:e="ENVMAP_BLENDING_ADD";break}return e}function XC(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function $C(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=VC(n),c=HC(n),h=GC(n),d=WC(n),f=XC(n),g=IC(n),p=UC(s),x=r.createProgram();let m,u,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter(cl).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter(cl).join(`
`),u.length>0&&(u+=`
`)):(m=[G_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cl).join(`
`),u=[G_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==xs?"#define TONE_MAPPING":"",n.toneMapping!==xs?ke.tonemapping_pars_fragment:"",n.toneMapping!==xs?LC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,PC("linearToOutputTexel",n.outputColorSpace),DC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(cl).join(`
`)),o=sm(o),o=z_(o,n),o=V_(o,n),a=sm(a),a=z_(a,n),a=V_(a,n),o=H_(o),a=H_(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===o_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===o_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const v=_+m+o,S=_+u+a,C=k_(r,r.VERTEX_SHADER,v),A=k_(r,r.FRAGMENT_SHADER,S);r.attachShader(x,C),r.attachShader(x,A),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function T(E){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(x).trim(),N=r.getShaderInfoLog(C).trim(),W=r.getShaderInfoLog(A).trim();let $=!0,V=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,C,A);else{const K=B_(r,C,"vertex"),L=B_(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+F+`
`+K+`
`+L)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(N===""||W==="")&&(V=!1);V&&(E.diagnostics={runnable:$,programLog:F,vertexShader:{log:N,prefix:m},fragmentShader:{log:W,prefix:u}})}r.deleteShader(C),r.deleteShader(A),b=new Su(r,x),H=NC(r,x)}let b;this.getUniforms=function(){return b===void 0&&T(this),b};let H;this.getAttributes=function(){return H===void 0&&T(this),H};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(x,AC)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=RC++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=A,this}let jC=0;class YC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new qC(e),n.set(e,i)),i}}class qC{constructor(e){this.id=jC++,this.code=e,this.usedTimes=0}}function KC(t,e,n,i,r,s,o){const a=new Rx,l=new YC,c=new Set,h=[],d=r.logarithmicDepthBuffer,f=r.reverseDepthBuffer,g=r.vertexTextures;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return c.add(y),y===0?"uv":`uv${y}`}function u(y,E,F,N,W){const $=N.fog,V=W.geometry,K=y.isMeshStandardMaterial?N.environment:null,L=(y.isMeshStandardMaterial?n:e).get(y.envMap||K),q=L&&L.mapping===Ih?L.image.height:null,Q=x[y.type];y.precision!==null&&(p=r.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const re=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ce=re!==void 0?re.length:0;let je=0;V.morphAttributes.position!==void 0&&(je=1),V.morphAttributes.normal!==void 0&&(je=2),V.morphAttributes.color!==void 0&&(je=3);let X,te,ue,ae;if(Q){const Nn=rr[Q];X=Nn.vertexShader,te=Nn.fragmentShader}else X=y.vertexShader,te=y.fragmentShader,l.update(y),ue=l.getVertexShaderID(y),ae=l.getFragmentShaderID(y);const Fe=t.getRenderTarget(),Pe=W.isInstancedMesh===!0,Ke=W.isBatchedMesh===!0,ft=!!y.map,Ze=!!y.matcap,P=!!L,qn=!!y.aoMap,Ye=!!y.lightMap,tt=!!y.bumpMap,De=!!y.normalMap,xt=!!y.displacementMap,Ne=!!y.emissiveMap,R=!!y.metalnessMap,M=!!y.roughnessMap,O=y.anisotropy>0,Y=y.clearcoat>0,J=y.dispersion>0,j=y.iridescence>0,we=y.sheen>0,oe=y.transmission>0,me=O&&!!y.anisotropyMap,nt=Y&&!!y.clearcoatMap,ne=Y&&!!y.clearcoatNormalMap,ge=Y&&!!y.clearcoatRoughnessMap,Ie=j&&!!y.iridescenceMap,Ue=j&&!!y.iridescenceThicknessMap,_e=we&&!!y.sheenColorMap,qe=we&&!!y.sheenRoughnessMap,Oe=!!y.specularMap,mt=!!y.specularColorMap,D=!!y.specularIntensityMap,he=oe&&!!y.transmissionMap,G=oe&&!!y.thicknessMap,Z=!!y.gradientMap,le=!!y.alphaMap,fe=y.alphaTest>0,Qe=!!y.alphaHash,qt=!!y.extensions;let Un=xs;y.toneMapped&&(Fe===null||Fe.isXRRenderTarget===!0)&&(Un=t.toneMapping);const rt={shaderID:Q,shaderType:y.type,shaderName:y.name,vertexShader:X,fragmentShader:te,defines:y.defines,customVertexShaderID:ue,customFragmentShaderID:ae,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Ke,batchingColor:Ke&&W._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&W.instanceColor!==null,instancingMorph:Pe&&W.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:Fe===null?t.outputColorSpace:Fe.isXRRenderTarget===!0?Fe.texture.colorSpace:Is,alphaToCoverage:!!y.alphaToCoverage,map:ft,matcap:Ze,envMap:P,envMapMode:P&&L.mapping,envMapCubeUVHeight:q,aoMap:qn,lightMap:Ye,bumpMap:tt,normalMap:De,displacementMap:g&&xt,emissiveMap:Ne,normalMapObjectSpace:De&&y.normalMapType===n4,normalMapTangentSpace:De&&y.normalMapType===Mx,metalnessMap:R,roughnessMap:M,anisotropy:O,anisotropyMap:me,clearcoat:Y,clearcoatMap:nt,clearcoatNormalMap:ne,clearcoatRoughnessMap:ge,dispersion:J,iridescence:j,iridescenceMap:Ie,iridescenceThicknessMap:Ue,sheen:we,sheenColorMap:_e,sheenRoughnessMap:qe,specularMap:Oe,specularColorMap:mt,specularIntensityMap:D,transmission:oe,transmissionMap:he,thicknessMap:G,gradientMap:Z,opaque:y.transparent===!1&&y.blending===ra&&y.alphaToCoverage===!1,alphaMap:le,alphaTest:fe,alphaHash:Qe,combine:y.combine,mapUv:ft&&m(y.map.channel),aoMapUv:qn&&m(y.aoMap.channel),lightMapUv:Ye&&m(y.lightMap.channel),bumpMapUv:tt&&m(y.bumpMap.channel),normalMapUv:De&&m(y.normalMap.channel),displacementMapUv:xt&&m(y.displacementMap.channel),emissiveMapUv:Ne&&m(y.emissiveMap.channel),metalnessMapUv:R&&m(y.metalnessMap.channel),roughnessMapUv:M&&m(y.roughnessMap.channel),anisotropyMapUv:me&&m(y.anisotropyMap.channel),clearcoatMapUv:nt&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:ne&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:qe&&m(y.sheenRoughnessMap.channel),specularMapUv:Oe&&m(y.specularMap.channel),specularColorMapUv:mt&&m(y.specularColorMap.channel),specularIntensityMapUv:D&&m(y.specularIntensityMap.channel),transmissionMapUv:he&&m(y.transmissionMap.channel),thicknessMapUv:G&&m(y.thicknessMap.channel),alphaMapUv:le&&m(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(De||O),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!V.attributes.uv&&(ft||le),fog:!!$,useFog:y.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:f,skinning:W.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:je,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&F.length>0,shadowMapType:t.shadowMap.type,toneMapping:Un,decodeVideoTexture:ft&&y.map.isVideoTexture===!0&&lt.getTransfer(y.map.colorSpace)===Et,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ar,flipSided:y.side===Pn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:qt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&y.extensions.multiDraw===!0||Ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return rt.vertexUv1s=c.has(1),rt.vertexUv2s=c.has(2),rt.vertexUv3s=c.has(3),c.clear(),rt}function _(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const F in y.defines)E.push(F),E.push(y.defines[F]);return y.isRawShaderMaterial===!1&&(v(E,y),S(E,y),E.push(t.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function v(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function S(y,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),y.push(a.mask)}function C(y){const E=x[y.type];let F;if(E){const N=rr[E];F=I4.clone(N.uniforms)}else F=y.uniforms;return F}function A(y,E){let F;for(let N=0,W=h.length;N<W;N++){const $=h[N];if($.cacheKey===E){F=$,++F.usedTimes;break}}return F===void 0&&(F=new $C(t,E,y,s),h.push(F)),F}function T(y){if(--y.usedTimes===0){const E=h.indexOf(y);h[E]=h[h.length-1],h.pop(),y.destroy()}}function b(y){l.remove(y)}function H(){l.dispose()}return{getParameters:u,getProgramCacheKey:_,getUniforms:C,acquireProgram:A,releaseProgram:T,releaseShaderCache:b,programs:h,dispose:H}}function ZC(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function QC(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function W_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function X_(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,f,g,p,x,m){let u=t[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:g,groupOrder:p,renderOrder:d.renderOrder,z:x,group:m},t[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=g,u.groupOrder=p,u.renderOrder=d.renderOrder,u.z=x,u.group=m),e++,u}function a(d,f,g,p,x,m){const u=o(d,f,g,p,x,m);g.transmission>0?i.push(u):g.transparent===!0?r.push(u):n.push(u)}function l(d,f,g,p,x,m){const u=o(d,f,g,p,x,m);g.transmission>0?i.unshift(u):g.transparent===!0?r.unshift(u):n.unshift(u)}function c(d,f){n.length>1&&n.sort(d||QC),i.length>1&&i.sort(f||W_),r.length>1&&r.sort(f||W_)}function h(){for(let d=e,f=t.length;d<f;d++){const g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function JC(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new X_,t.set(i,[o])):r>=s.length?(o=new X_,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function eb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new Ge};break;case"SpotLight":n={position:new k,direction:new k,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":n={color:new Ge,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function tb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let nb=0;function ib(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function rb(t){const e=new eb,n=tb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const r=new k,s=new Vt,o=new Vt;function a(c){let h=0,d=0,f=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let g=0,p=0,x=0,m=0,u=0,_=0,v=0,S=0,C=0,A=0,T=0;c.sort(ib);for(let H=0,y=c.length;H<y;H++){const E=c[H],F=E.color,N=E.intensity,W=E.distance,$=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=F.r*N,d+=F.g*N,f+=F.b*N;else if(E.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(E.sh.coefficients[V],N);T++}else if(E.isDirectionalLight){const V=e.get(E);if(V.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const K=E.shadow,L=n.get(E);L.shadowIntensity=K.intensity,L.shadowBias=K.bias,L.shadowNormalBias=K.normalBias,L.shadowRadius=K.radius,L.shadowMapSize=K.mapSize,i.directionalShadow[g]=L,i.directionalShadowMap[g]=$,i.directionalShadowMatrix[g]=E.shadow.matrix,_++}i.directional[g]=V,g++}else if(E.isSpotLight){const V=e.get(E);V.position.setFromMatrixPosition(E.matrixWorld),V.color.copy(F).multiplyScalar(N),V.distance=W,V.coneCos=Math.cos(E.angle),V.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),V.decay=E.decay,i.spot[x]=V;const K=E.shadow;if(E.map&&(i.spotLightMap[C]=E.map,C++,K.updateMatrices(E),E.castShadow&&A++),i.spotLightMatrix[x]=K.matrix,E.castShadow){const L=n.get(E);L.shadowIntensity=K.intensity,L.shadowBias=K.bias,L.shadowNormalBias=K.normalBias,L.shadowRadius=K.radius,L.shadowMapSize=K.mapSize,i.spotShadow[x]=L,i.spotShadowMap[x]=$,S++}x++}else if(E.isRectAreaLight){const V=e.get(E);V.color.copy(F).multiplyScalar(N),V.halfWidth.set(E.width*.5,0,0),V.halfHeight.set(0,E.height*.5,0),i.rectArea[m]=V,m++}else if(E.isPointLight){const V=e.get(E);if(V.color.copy(E.color).multiplyScalar(E.intensity),V.distance=E.distance,V.decay=E.decay,E.castShadow){const K=E.shadow,L=n.get(E);L.shadowIntensity=K.intensity,L.shadowBias=K.bias,L.shadowNormalBias=K.normalBias,L.shadowRadius=K.radius,L.shadowMapSize=K.mapSize,L.shadowCameraNear=K.camera.near,L.shadowCameraFar=K.camera.far,i.pointShadow[p]=L,i.pointShadowMap[p]=$,i.pointShadowMatrix[p]=E.shadow.matrix,v++}i.point[p]=V,p++}else if(E.isHemisphereLight){const V=e.get(E);V.skyColor.copy(E.color).multiplyScalar(N),V.groundColor.copy(E.groundColor).multiplyScalar(N),i.hemi[u]=V,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;const b=i.hash;(b.directionalLength!==g||b.pointLength!==p||b.spotLength!==x||b.rectAreaLength!==m||b.hemiLength!==u||b.numDirectionalShadows!==_||b.numPointShadows!==v||b.numSpotShadows!==S||b.numSpotMaps!==C||b.numLightProbes!==T)&&(i.directional.length=g,i.spot.length=x,i.rectArea.length=m,i.point.length=p,i.hemi.length=u,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=S+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,b.directionalLength=g,b.pointLength=p,b.spotLength=x,b.rectAreaLength=m,b.hemiLength=u,b.numDirectionalShadows=_,b.numPointShadows=v,b.numSpotShadows=S,b.numSpotMaps=C,b.numLightProbes=T,i.version=nb++)}function l(c,h){let d=0,f=0,g=0,p=0,x=0;const m=h.matrixWorldInverse;for(let u=0,_=c.length;u<_;u++){const v=c[u];if(v.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(v.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),g++}else if(v.isRectAreaLight){const S=i.rectArea[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),p++}else if(v.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function $_(t){const e=new rb(t),n=[],i=[];function r(h){c.camera=h,n.length=0,i.length=0}function s(h){n.push(h)}function o(h){i.push(h)}function a(){e.setup(n)}function l(h){e.setupView(n,h)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function sb(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new $_(t),e.set(r,[a])):s>=o.length?(a=new $_(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class ob extends nc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=e4,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ab extends nc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const lb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cb=`uniform sampler2D shadow_pass;
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
}`;function ub(t,e,n){let i=new L0;const r=new st,s=new st,o=new Bt,a=new ob({depthPacking:t4}),l=new ab,c={},h=n.maxTextureSize,d={[ws]:Pn,[Pn]:ws,[ar]:ar},f=new Gr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:lb,fragmentShader:cb}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const p=new Yi;p.setAttribute("position",new ur(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ve(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lx;let u=this.type;this.render=function(A,T,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const H=t.getRenderTarget(),y=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),F=t.state;F.setBlending(ys),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const N=u!==Tr&&this.type===Tr,W=u===Tr&&this.type!==Tr;for(let $=0,V=A.length;$<V;$++){const K=A[$],L=K.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const q=L.getFrameExtents();if(r.multiply(q),s.copy(L.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/q.x),r.x=s.x*q.x,L.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/q.y),r.y=s.y*q.y,L.mapSize.y=s.y)),L.map===null||N===!0||W===!0){const re=this.type!==Tr?{minFilter:Ei,magFilter:Ei}:{};L.map!==null&&L.map.dispose(),L.map=new go(r.x,r.y,re),L.map.texture.name=K.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const Q=L.getViewportCount();for(let re=0;re<Q;re++){const Ce=L.getViewport(re);o.set(s.x*Ce.x,s.y*Ce.y,s.x*Ce.z,s.y*Ce.w),F.viewport(o),L.updateMatrices(K,re),i=L.getFrustum(),S(T,b,L.camera,K,this.type)}L.isPointLightShadow!==!0&&this.type===Tr&&_(L,b),L.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(H,y,E)};function _(A,T){const b=e.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,g.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new go(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(T,null,b,f,x,null),g.uniforms.shadow_pass.value=A.mapPass.texture,g.uniforms.resolution.value=A.mapSize,g.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(T,null,b,g,x,null)}function v(A,T,b,H){let y=null;const E=b.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(E!==void 0)y=E;else if(y=b.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const F=y.uuid,N=T.uuid;let W=c[F];W===void 0&&(W={},c[F]=W);let $=W[N];$===void 0&&($=y.clone(),W[N]=$,T.addEventListener("dispose",C)),y=$}if(y.visible=T.visible,y.wireframe=T.wireframe,H===Tr?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:d[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,b.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const F=t.properties.get(y);F.light=b}return y}function S(A,T,b,H,y){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Tr)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,A.matrixWorld);const N=e.update(A),W=A.material;if(Array.isArray(W)){const $=N.groups;for(let V=0,K=$.length;V<K;V++){const L=$[V],q=W[L.materialIndex];if(q&&q.visible){const Q=v(A,q,H,y);A.onBeforeShadow(t,A,T,b,N,Q,L),t.renderBufferDirect(b,null,N,Q,A,L),A.onAfterShadow(t,A,T,b,N,Q,L)}}}else if(W.visible){const $=v(A,W,H,y);A.onBeforeShadow(t,A,T,b,N,$,null),t.renderBufferDirect(b,null,N,$,A,null),A.onAfterShadow(t,A,T,b,N,$,null)}}const F=A.children;for(let N=0,W=F.length;N<W;N++)S(F[N],T,b,H,y)}function C(A){A.target.removeEventListener("dispose",C);for(const b in c){const H=c[b],y=A.target.uuid;y in H&&(H[y].dispose(),delete H[y])}}}const hb={[Sp]:Mp,[Ep]:Ap,[wp]:Rp,[ma]:Tp,[Mp]:Sp,[Ap]:Ep,[Rp]:wp,[Tp]:ma};function fb(t){function e(){let D=!1;const he=new Bt;let G=null;const Z=new Bt(0,0,0,0);return{setMask:function(le){G!==le&&!D&&(t.colorMask(le,le,le,le),G=le)},setLocked:function(le){D=le},setClear:function(le,fe,Qe,qt,Un){Un===!0&&(le*=qt,fe*=qt,Qe*=qt),he.set(le,fe,Qe,qt),Z.equals(he)===!1&&(t.clearColor(le,fe,Qe,qt),Z.copy(he))},reset:function(){D=!1,G=null,Z.set(-1,0,0,0)}}}function n(){let D=!1,he=!1,G=null,Z=null,le=null;return{setReversed:function(fe){he=fe},setTest:function(fe){fe?ue(t.DEPTH_TEST):ae(t.DEPTH_TEST)},setMask:function(fe){G!==fe&&!D&&(t.depthMask(fe),G=fe)},setFunc:function(fe){if(he&&(fe=hb[fe]),Z!==fe){switch(fe){case Sp:t.depthFunc(t.NEVER);break;case Mp:t.depthFunc(t.ALWAYS);break;case Ep:t.depthFunc(t.LESS);break;case ma:t.depthFunc(t.LEQUAL);break;case wp:t.depthFunc(t.EQUAL);break;case Tp:t.depthFunc(t.GEQUAL);break;case Ap:t.depthFunc(t.GREATER);break;case Rp:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Z=fe}},setLocked:function(fe){D=fe},setClear:function(fe){le!==fe&&(t.clearDepth(fe),le=fe)},reset:function(){D=!1,G=null,Z=null,le=null}}}function i(){let D=!1,he=null,G=null,Z=null,le=null,fe=null,Qe=null,qt=null,Un=null;return{setTest:function(rt){D||(rt?ue(t.STENCIL_TEST):ae(t.STENCIL_TEST))},setMask:function(rt){he!==rt&&!D&&(t.stencilMask(rt),he=rt)},setFunc:function(rt,Nn,yr){(G!==rt||Z!==Nn||le!==yr)&&(t.stencilFunc(rt,Nn,yr),G=rt,Z=Nn,le=yr)},setOp:function(rt,Nn,yr){(fe!==rt||Qe!==Nn||qt!==yr)&&(t.stencilOp(rt,Nn,yr),fe=rt,Qe=Nn,qt=yr)},setLocked:function(rt){D=rt},setClear:function(rt){Un!==rt&&(t.clearStencil(rt),Un=rt)},reset:function(){D=!1,he=null,G=null,Z=null,le=null,fe=null,Qe=null,qt=null,Un=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},h={},d=new WeakMap,f=[],g=null,p=!1,x=null,m=null,u=null,_=null,v=null,S=null,C=null,A=new Ge(0,0,0),T=0,b=!1,H=null,y=null,E=null,F=null,N=null;const W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,V=0;const K=t.getParameter(t.VERSION);K.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(K)[1]),$=V>=1):K.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),$=V>=2);let L=null,q={};const Q=t.getParameter(t.SCISSOR_BOX),re=t.getParameter(t.VIEWPORT),Ce=new Bt().fromArray(Q),je=new Bt().fromArray(re);function X(D,he,G,Z){const le=new Uint8Array(4),fe=t.createTexture();t.bindTexture(D,fe),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Qe=0;Qe<G;Qe++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(he,0,t.RGBA,1,1,Z,0,t.RGBA,t.UNSIGNED_BYTE,le):t.texImage2D(he+Qe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,le);return fe}const te={};te[t.TEXTURE_2D]=X(t.TEXTURE_2D,t.TEXTURE_2D,1),te[t.TEXTURE_CUBE_MAP]=X(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[t.TEXTURE_2D_ARRAY]=X(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),te[t.TEXTURE_3D]=X(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ue(t.DEPTH_TEST),s.setFunc(ma),Ye(!1),tt(e_),ue(t.CULL_FACE),P(ys);function ue(D){c[D]!==!0&&(t.enable(D),c[D]=!0)}function ae(D){c[D]!==!1&&(t.disable(D),c[D]=!1)}function Fe(D,he){return h[D]!==he?(t.bindFramebuffer(D,he),h[D]=he,D===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=he),D===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=he),!0):!1}function Pe(D,he){let G=f,Z=!1;if(D){G=d.get(he),G===void 0&&(G=[],d.set(he,G));const le=D.textures;if(G.length!==le.length||G[0]!==t.COLOR_ATTACHMENT0){for(let fe=0,Qe=le.length;fe<Qe;fe++)G[fe]=t.COLOR_ATTACHMENT0+fe;G.length=le.length,Z=!0}}else G[0]!==t.BACK&&(G[0]=t.BACK,Z=!0);Z&&t.drawBuffers(G)}function Ke(D){return g!==D?(t.useProgram(D),g=D,!0):!1}const ft={[Ks]:t.FUNC_ADD,[Rw]:t.FUNC_SUBTRACT,[Cw]:t.FUNC_REVERSE_SUBTRACT};ft[bw]=t.MIN,ft[Pw]=t.MAX;const Ze={[Lw]:t.ZERO,[Dw]:t.ONE,[Iw]:t.SRC_COLOR,[yp]:t.SRC_ALPHA,[Bw]:t.SRC_ALPHA_SATURATE,[Ow]:t.DST_COLOR,[Nw]:t.DST_ALPHA,[Uw]:t.ONE_MINUS_SRC_COLOR,[xp]:t.ONE_MINUS_SRC_ALPHA,[kw]:t.ONE_MINUS_DST_COLOR,[Fw]:t.ONE_MINUS_DST_ALPHA,[zw]:t.CONSTANT_COLOR,[Vw]:t.ONE_MINUS_CONSTANT_COLOR,[Hw]:t.CONSTANT_ALPHA,[Gw]:t.ONE_MINUS_CONSTANT_ALPHA};function P(D,he,G,Z,le,fe,Qe,qt,Un,rt){if(D===ys){p===!0&&(ae(t.BLEND),p=!1);return}if(p===!1&&(ue(t.BLEND),p=!0),D!==Aw){if(D!==x||rt!==b){if((m!==Ks||v!==Ks)&&(t.blendEquation(t.FUNC_ADD),m=Ks,v=Ks),rt)switch(D){case ra:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case t_:t.blendFunc(t.ONE,t.ONE);break;case n_:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case i_:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ra:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case t_:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case n_:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case i_:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}u=null,_=null,S=null,C=null,A.set(0,0,0),T=0,x=D,b=rt}return}le=le||he,fe=fe||G,Qe=Qe||Z,(he!==m||le!==v)&&(t.blendEquationSeparate(ft[he],ft[le]),m=he,v=le),(G!==u||Z!==_||fe!==S||Qe!==C)&&(t.blendFuncSeparate(Ze[G],Ze[Z],Ze[fe],Ze[Qe]),u=G,_=Z,S=fe,C=Qe),(qt.equals(A)===!1||Un!==T)&&(t.blendColor(qt.r,qt.g,qt.b,Un),A.copy(qt),T=Un),x=D,b=!1}function qn(D,he){D.side===ar?ae(t.CULL_FACE):ue(t.CULL_FACE);let G=D.side===Pn;he&&(G=!G),Ye(G),D.blending===ra&&D.transparent===!1?P(ys):P(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);const Z=D.stencilWrite;o.setTest(Z),Z&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),xt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ue(t.SAMPLE_ALPHA_TO_COVERAGE):ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(D){H!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),H=D)}function tt(D){D!==ww?(ue(t.CULL_FACE),D!==y&&(D===e_?t.cullFace(t.BACK):D===Tw?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ae(t.CULL_FACE),y=D}function De(D){D!==E&&($&&t.lineWidth(D),E=D)}function xt(D,he,G){D?(ue(t.POLYGON_OFFSET_FILL),(F!==he||N!==G)&&(t.polygonOffset(he,G),F=he,N=G)):ae(t.POLYGON_OFFSET_FILL)}function Ne(D){D?ue(t.SCISSOR_TEST):ae(t.SCISSOR_TEST)}function R(D){D===void 0&&(D=t.TEXTURE0+W-1),L!==D&&(t.activeTexture(D),L=D)}function M(D,he,G){G===void 0&&(L===null?G=t.TEXTURE0+W-1:G=L);let Z=q[G];Z===void 0&&(Z={type:void 0,texture:void 0},q[G]=Z),(Z.type!==D||Z.texture!==he)&&(L!==G&&(t.activeTexture(G),L=G),t.bindTexture(D,he||te[D]),Z.type=D,Z.texture=he)}function O(){const D=q[L];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Y(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ie(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ue(D){Ce.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),Ce.copy(D))}function _e(D){je.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),je.copy(D))}function qe(D,he){let G=l.get(he);G===void 0&&(G=new WeakMap,l.set(he,G));let Z=G.get(D);Z===void 0&&(Z=t.getUniformBlockIndex(he,D.name),G.set(D,Z))}function Oe(D,he){const Z=l.get(he).get(D);a.get(he)!==Z&&(t.uniformBlockBinding(he,Z,D.__bindingPointIndex),a.set(he,Z))}function mt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},L=null,q={},h={},d=new WeakMap,f=[],g=null,p=!1,x=null,m=null,u=null,_=null,v=null,S=null,C=null,A=new Ge(0,0,0),T=0,b=!1,H=null,y=null,E=null,F=null,N=null,Ce.set(0,0,t.canvas.width,t.canvas.height),je.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ue,disable:ae,bindFramebuffer:Fe,drawBuffers:Pe,useProgram:Ke,setBlending:P,setMaterial:qn,setFlipSided:Ye,setCullFace:tt,setLineWidth:De,setPolygonOffset:xt,setScissorTest:Ne,activeTexture:R,bindTexture:M,unbindTexture:O,compressedTexImage2D:Y,compressedTexImage3D:J,texImage2D:ge,texImage3D:Ie,updateUBOMapping:qe,uniformBlockBinding:Oe,texStorage2D:nt,texStorage3D:ne,texSubImage2D:j,texSubImage3D:we,compressedTexSubImage2D:oe,compressedTexSubImage3D:me,scissor:Ue,viewport:_e,reset:mt}}function j_(t,e,n,i){const r=db(i);switch(n){case mx:return t*e;case _x:return t*e;case vx:return t*e*2;case yx:return t*e/r.components*r.byteLength;case T0:return t*e/r.components*r.byteLength;case xx:return t*e*2/r.components*r.byteLength;case A0:return t*e*2/r.components*r.byteLength;case gx:return t*e*3/r.components*r.byteLength;case Gi:return t*e*4/r.components*r.byteLength;case R0:return t*e*4/r.components*r.byteLength;case mu:case gu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case _u:case vu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ip:case Np:return Math.max(t,16)*Math.max(e,8)/4;case Dp:case Up:return Math.max(t,8)*Math.max(e,8)/2;case Fp:case Op:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case kp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Bp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case zp:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Vp:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Hp:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Gp:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Wp:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Xp:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case $p:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case jp:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Yp:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case qp:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Kp:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Zp:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Qp:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case yu:case Jp:case em:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Sx:case tm:return Math.ceil(t/4)*Math.ceil(e/4)*8;case nm:case im:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function db(t){switch(t){case Hr:case fx:return{byteLength:1,components:1};case Gl:case dx:case Ql:return{byteLength:2,components:1};case E0:case w0:return{byteLength:2,components:4};case mo:case M0:case Dr:return{byteLength:4,components:1};case px:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function pb(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,h=new WeakMap;let d;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,M){return g?new OffscreenCanvas(R,M):rh("canvas")}function x(R,M,O){let Y=1;const J=Ne(R);if((J.width>O||J.height>O)&&(Y=O/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const j=Math.floor(Y*J.width),we=Math.floor(Y*J.height);d===void 0&&(d=p(j,we));const oe=M?p(j,we):d;return oe.width=j,oe.height=we,oe.getContext("2d").drawImage(R,0,0,j,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+j+"x"+we+")."),oe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==Ei&&R.minFilter!==Vi}function u(R){t.generateMipmap(R)}function _(R,M,O,Y,J=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=M;if(M===t.RED&&(O===t.FLOAT&&(j=t.R32F),O===t.HALF_FLOAT&&(j=t.R16F),O===t.UNSIGNED_BYTE&&(j=t.R8)),M===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(j=t.R8UI),O===t.UNSIGNED_SHORT&&(j=t.R16UI),O===t.UNSIGNED_INT&&(j=t.R32UI),O===t.BYTE&&(j=t.R8I),O===t.SHORT&&(j=t.R16I),O===t.INT&&(j=t.R32I)),M===t.RG&&(O===t.FLOAT&&(j=t.RG32F),O===t.HALF_FLOAT&&(j=t.RG16F),O===t.UNSIGNED_BYTE&&(j=t.RG8)),M===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&(j=t.RG8UI),O===t.UNSIGNED_SHORT&&(j=t.RG16UI),O===t.UNSIGNED_INT&&(j=t.RG32UI),O===t.BYTE&&(j=t.RG8I),O===t.SHORT&&(j=t.RG16I),O===t.INT&&(j=t.RG32I)),M===t.RGB_INTEGER&&(O===t.UNSIGNED_BYTE&&(j=t.RGB8UI),O===t.UNSIGNED_SHORT&&(j=t.RGB16UI),O===t.UNSIGNED_INT&&(j=t.RGB32UI),O===t.BYTE&&(j=t.RGB8I),O===t.SHORT&&(j=t.RGB16I),O===t.INT&&(j=t.RGB32I)),M===t.RGBA_INTEGER&&(O===t.UNSIGNED_BYTE&&(j=t.RGBA8UI),O===t.UNSIGNED_SHORT&&(j=t.RGBA16UI),O===t.UNSIGNED_INT&&(j=t.RGBA32UI),O===t.BYTE&&(j=t.RGBA8I),O===t.SHORT&&(j=t.RGBA16I),O===t.INT&&(j=t.RGBA32I)),M===t.RGB&&O===t.UNSIGNED_INT_5_9_9_9_REV&&(j=t.RGB9_E5),M===t.RGBA){const we=J?eh:lt.getTransfer(Y);O===t.FLOAT&&(j=t.RGBA32F),O===t.HALF_FLOAT&&(j=t.RGBA16F),O===t.UNSIGNED_BYTE&&(j=we===Et?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT_4_4_4_4&&(j=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(j=t.RGB5_A1)}return(j===t.R16F||j===t.R32F||j===t.RG16F||j===t.RG32F||j===t.RGBA16F||j===t.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function v(R,M){let O;return R?M===null||M===mo||M===va?O=t.DEPTH24_STENCIL8:M===Dr?O=t.DEPTH32F_STENCIL8:M===Gl&&(O=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===mo||M===va?O=t.DEPTH_COMPONENT24:M===Dr?O=t.DEPTH_COMPONENT32F:M===Gl&&(O=t.DEPTH_COMPONENT16),O}function S(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ei&&R.minFilter!==Vi?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function C(R){const M=R.target;M.removeEventListener("dispose",C),T(M),M.isVideoTexture&&h.delete(M)}function A(R){const M=R.target;M.removeEventListener("dispose",A),H(M)}function T(R){const M=i.get(R);if(M.__webglInit===void 0)return;const O=R.source,Y=f.get(O);if(Y){const J=Y[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&b(R),Object.keys(Y).length===0&&f.delete(O)}i.remove(R)}function b(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const O=R.source,Y=f.get(O);delete Y[M.__cacheKey],o.memory.textures--}function H(R){const M=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(M.__webglFramebuffer[Y]))for(let J=0;J<M.__webglFramebuffer[Y].length;J++)t.deleteFramebuffer(M.__webglFramebuffer[Y][J]);else t.deleteFramebuffer(M.__webglFramebuffer[Y]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[Y])}else{if(Array.isArray(M.__webglFramebuffer))for(let Y=0;Y<M.__webglFramebuffer.length;Y++)t.deleteFramebuffer(M.__webglFramebuffer[Y]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Y=0;Y<M.__webglColorRenderbuffer.length;Y++)M.__webglColorRenderbuffer[Y]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[Y]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const O=R.textures;for(let Y=0,J=O.length;Y<J;Y++){const j=i.get(O[Y]);j.__webglTexture&&(t.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(O[Y])}i.remove(R)}let y=0;function E(){y=0}function F(){const R=y;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),y+=1,R}function N(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function W(R,M){const O=i.get(R);if(R.isVideoTexture&&De(R),R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){const Y=R.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{je(O,R,M);return}}n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+M)}function $(R,M){const O=i.get(R);if(R.version>0&&O.__version!==R.version){je(O,R,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+M)}function V(R,M){const O=i.get(R);if(R.version>0&&O.__version!==R.version){je(O,R,M);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+M)}function K(R,M){const O=i.get(R);if(R.version>0&&O.__version!==R.version){X(O,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+M)}const L={[Pp]:t.REPEAT,[to]:t.CLAMP_TO_EDGE,[Lp]:t.MIRRORED_REPEAT},q={[Ei]:t.NEAREST,[Jw]:t.NEAREST_MIPMAP_NEAREST,[Lc]:t.NEAREST_MIPMAP_LINEAR,[Vi]:t.LINEAR,[Ff]:t.LINEAR_MIPMAP_NEAREST,[no]:t.LINEAR_MIPMAP_LINEAR},Q={[i4]:t.NEVER,[c4]:t.ALWAYS,[r4]:t.LESS,[Ex]:t.LEQUAL,[s4]:t.EQUAL,[l4]:t.GEQUAL,[o4]:t.GREATER,[a4]:t.NOTEQUAL};function re(R,M){if(M.type===Dr&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Vi||M.magFilter===Ff||M.magFilter===Lc||M.magFilter===no||M.minFilter===Vi||M.minFilter===Ff||M.minFilter===Lc||M.minFilter===no)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,L[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,L[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,L[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,q[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,q[M.minFilter]),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Q[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ei||M.minFilter!==Lc&&M.minFilter!==no||M.type===Dr&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Ce(R,M){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",C));const Y=M.source;let J=f.get(Y);J===void 0&&(J={},f.set(Y,J));const j=N(M);if(j!==R.__cacheKey){J[j]===void 0&&(J[j]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,O=!0),J[j].usedTimes++;const we=J[R.__cacheKey];we!==void 0&&(J[R.__cacheKey].usedTimes--,we.usedTimes===0&&b(M)),R.__cacheKey=j,R.__webglTexture=J[j].texture}return O}function je(R,M,O){let Y=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Y=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Y=t.TEXTURE_3D);const J=Ce(R,M),j=M.source;n.bindTexture(Y,R.__webglTexture,t.TEXTURE0+O);const we=i.get(j);if(j.version!==we.__version||J===!0){n.activeTexture(t.TEXTURE0+O);const oe=lt.getPrimaries(lt.workingColorSpace),me=M.colorSpace===as?null:lt.getPrimaries(M.colorSpace),nt=M.colorSpace===as||oe===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let ne=x(M.image,!1,r.maxTextureSize);ne=xt(M,ne);const ge=s.convert(M.format,M.colorSpace),Ie=s.convert(M.type);let Ue=_(M.internalFormat,ge,Ie,M.colorSpace,M.isVideoTexture);re(Y,M);let _e;const qe=M.mipmaps,Oe=M.isVideoTexture!==!0,mt=we.__version===void 0||J===!0,D=j.dataReady,he=S(M,ne);if(M.isDepthTexture)Ue=v(M.format===ya,M.type),mt&&(Oe?n.texStorage2D(t.TEXTURE_2D,1,Ue,ne.width,ne.height):n.texImage2D(t.TEXTURE_2D,0,Ue,ne.width,ne.height,0,ge,Ie,null));else if(M.isDataTexture)if(qe.length>0){Oe&&mt&&n.texStorage2D(t.TEXTURE_2D,he,Ue,qe[0].width,qe[0].height);for(let G=0,Z=qe.length;G<Z;G++)_e=qe[G],Oe?D&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,_e.width,_e.height,ge,Ie,_e.data):n.texImage2D(t.TEXTURE_2D,G,Ue,_e.width,_e.height,0,ge,Ie,_e.data);M.generateMipmaps=!1}else Oe?(mt&&n.texStorage2D(t.TEXTURE_2D,he,Ue,ne.width,ne.height),D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ne.width,ne.height,ge,Ie,ne.data)):n.texImage2D(t.TEXTURE_2D,0,Ue,ne.width,ne.height,0,ge,Ie,ne.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Oe&&mt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,Ue,qe[0].width,qe[0].height,ne.depth);for(let G=0,Z=qe.length;G<Z;G++)if(_e=qe[G],M.format!==Gi)if(ge!==null)if(Oe){if(D)if(M.layerUpdates.size>0){const le=j_(_e.width,_e.height,M.format,M.type);for(const fe of M.layerUpdates){const Qe=_e.data.subarray(fe*le/_e.data.BYTES_PER_ELEMENT,(fe+1)*le/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,fe,_e.width,_e.height,1,ge,Qe,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,0,_e.width,_e.height,ne.depth,ge,_e.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,G,Ue,_e.width,_e.height,ne.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,0,_e.width,_e.height,ne.depth,ge,Ie,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,G,Ue,_e.width,_e.height,ne.depth,0,ge,Ie,_e.data)}else{Oe&&mt&&n.texStorage2D(t.TEXTURE_2D,he,Ue,qe[0].width,qe[0].height);for(let G=0,Z=qe.length;G<Z;G++)_e=qe[G],M.format!==Gi?ge!==null?Oe?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,G,0,0,_e.width,_e.height,ge,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,G,Ue,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?D&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,_e.width,_e.height,ge,Ie,_e.data):n.texImage2D(t.TEXTURE_2D,G,Ue,_e.width,_e.height,0,ge,Ie,_e.data)}else if(M.isDataArrayTexture)if(Oe){if(mt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,Ue,ne.width,ne.height,ne.depth),D)if(M.layerUpdates.size>0){const G=j_(ne.width,ne.height,M.format,M.type);for(const Z of M.layerUpdates){const le=ne.data.subarray(Z*G/ne.data.BYTES_PER_ELEMENT,(Z+1)*G/ne.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Z,ne.width,ne.height,1,ge,Ie,le)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ge,Ie,ne.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ue,ne.width,ne.height,ne.depth,0,ge,Ie,ne.data);else if(M.isData3DTexture)Oe?(mt&&n.texStorage3D(t.TEXTURE_3D,he,Ue,ne.width,ne.height,ne.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ge,Ie,ne.data)):n.texImage3D(t.TEXTURE_3D,0,Ue,ne.width,ne.height,ne.depth,0,ge,Ie,ne.data);else if(M.isFramebufferTexture){if(mt)if(Oe)n.texStorage2D(t.TEXTURE_2D,he,Ue,ne.width,ne.height);else{let G=ne.width,Z=ne.height;for(let le=0;le<he;le++)n.texImage2D(t.TEXTURE_2D,le,Ue,G,Z,0,ge,Ie,null),G>>=1,Z>>=1}}else if(qe.length>0){if(Oe&&mt){const G=Ne(qe[0]);n.texStorage2D(t.TEXTURE_2D,he,Ue,G.width,G.height)}for(let G=0,Z=qe.length;G<Z;G++)_e=qe[G],Oe?D&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,ge,Ie,_e):n.texImage2D(t.TEXTURE_2D,G,Ue,ge,Ie,_e);M.generateMipmaps=!1}else if(Oe){if(mt){const G=Ne(ne);n.texStorage2D(t.TEXTURE_2D,he,Ue,G.width,G.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,Ie,ne)}else n.texImage2D(t.TEXTURE_2D,0,Ue,ge,Ie,ne);m(M)&&u(Y),we.__version=j.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function X(R,M,O){if(M.image.length!==6)return;const Y=Ce(R,M),J=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+O);const j=i.get(J);if(J.version!==j.__version||Y===!0){n.activeTexture(t.TEXTURE0+O);const we=lt.getPrimaries(lt.workingColorSpace),oe=M.colorSpace===as?null:lt.getPrimaries(M.colorSpace),me=M.colorSpace===as||we===oe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const nt=M.isCompressedTexture||M.image[0].isCompressedTexture,ne=M.image[0]&&M.image[0].isDataTexture,ge=[];for(let Z=0;Z<6;Z++)!nt&&!ne?ge[Z]=x(M.image[Z],!0,r.maxCubemapSize):ge[Z]=ne?M.image[Z].image:M.image[Z],ge[Z]=xt(M,ge[Z]);const Ie=ge[0],Ue=s.convert(M.format,M.colorSpace),_e=s.convert(M.type),qe=_(M.internalFormat,Ue,_e,M.colorSpace),Oe=M.isVideoTexture!==!0,mt=j.__version===void 0||Y===!0,D=J.dataReady;let he=S(M,Ie);re(t.TEXTURE_CUBE_MAP,M);let G;if(nt){Oe&&mt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,qe,Ie.width,Ie.height);for(let Z=0;Z<6;Z++){G=ge[Z].mipmaps;for(let le=0;le<G.length;le++){const fe=G[le];M.format!==Gi?Ue!==null?Oe?D&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,0,0,fe.width,fe.height,Ue,fe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,qe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,0,0,fe.width,fe.height,Ue,_e,fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,qe,fe.width,fe.height,0,Ue,_e,fe.data)}}}else{if(G=M.mipmaps,Oe&&mt){G.length>0&&he++;const Z=Ne(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,he,qe,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ne){Oe?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ge[Z].width,ge[Z].height,Ue,_e,ge[Z].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,qe,ge[Z].width,ge[Z].height,0,Ue,_e,ge[Z].data);for(let le=0;le<G.length;le++){const Qe=G[le].image[Z].image;Oe?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,0,0,Qe.width,Qe.height,Ue,_e,Qe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,qe,Qe.width,Qe.height,0,Ue,_e,Qe.data)}}else{Oe?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ue,_e,ge[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,qe,Ue,_e,ge[Z]);for(let le=0;le<G.length;le++){const fe=G[le];Oe?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,0,0,Ue,_e,fe.image[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,qe,Ue,_e,fe.image[Z])}}}m(M)&&u(t.TEXTURE_CUBE_MAP),j.__version=J.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function te(R,M,O,Y,J,j){const we=s.convert(O.format,O.colorSpace),oe=s.convert(O.type),me=_(O.internalFormat,we,oe,O.colorSpace);if(!i.get(M).__hasExternalTextures){const ne=Math.max(1,M.width>>j),ge=Math.max(1,M.height>>j);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,j,me,ne,ge,M.depth,0,we,oe,null):n.texImage2D(J,j,me,ne,ge,0,we,oe,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),tt(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,J,i.get(O).__webglTexture,0,Ye(M)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Y,J,i.get(O).__webglTexture,j),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ue(R,M,O){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer){const Y=M.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,j=v(M.stencilBuffer,J),we=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=Ye(M);tt(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,oe,j,M.width,M.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,oe,j,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,j,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,we,t.RENDERBUFFER,R)}else{const Y=M.textures;for(let J=0;J<Y.length;J++){const j=Y[J],we=s.convert(j.format,j.colorSpace),oe=s.convert(j.type),me=_(j.internalFormat,we,oe,j.colorSpace),nt=Ye(M);O&&tt(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,nt,me,M.width,M.height):tt(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,nt,me,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,me,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ae(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W(M.depthTexture,0);const Y=i.get(M.depthTexture).__webglTexture,J=Ye(M);if(M.depthTexture.format===sa)tt(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Y,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Y,0);else if(M.depthTexture.format===ya)tt(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Y,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Fe(R){const M=i.get(R),O=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const Y=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Y){const J=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),M.__depthDisposeCallback=J}M.__boundDepthTexture=Y}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");ae(M.__webglFramebuffer,R)}else if(O){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]===void 0)M.__webglDepthbuffer[Y]=t.createRenderbuffer(),ue(M.__webglDepthbuffer[Y],R,!1);else{const J=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,j=M.__webglDepthbuffer[Y];t.bindRenderbuffer(t.RENDERBUFFER,j),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,j)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),ue(M.__webglDepthbuffer,R,!1);else{const Y=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,J),t.framebufferRenderbuffer(t.FRAMEBUFFER,Y,t.RENDERBUFFER,J)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Pe(R,M,O){const Y=i.get(R);M!==void 0&&te(Y.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&Fe(R)}function Ke(R){const M=R.texture,O=i.get(R),Y=i.get(M);R.addEventListener("dispose",A);const J=R.textures,j=R.isWebGLCubeRenderTarget===!0,we=J.length>1;if(we||(Y.__webglTexture===void 0&&(Y.__webglTexture=t.createTexture()),Y.__version=M.version,o.memory.textures++),j){O.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[oe]=[];for(let me=0;me<M.mipmaps.length;me++)O.__webglFramebuffer[oe][me]=t.createFramebuffer()}else O.__webglFramebuffer[oe]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let oe=0;oe<M.mipmaps.length;oe++)O.__webglFramebuffer[oe]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(we)for(let oe=0,me=J.length;oe<me;oe++){const nt=i.get(J[oe]);nt.__webglTexture===void 0&&(nt.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&tt(R)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let oe=0;oe<J.length;oe++){const me=J[oe];O.__webglColorRenderbuffer[oe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[oe]);const nt=s.convert(me.format,me.colorSpace),ne=s.convert(me.type),ge=_(me.internalFormat,nt,ne,me.colorSpace,R.isXRRenderTarget===!0),Ie=Ye(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ie,ge,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.RENDERBUFFER,O.__webglColorRenderbuffer[oe])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),ue(O.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(j){n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),re(t.TEXTURE_CUBE_MAP,M);for(let oe=0;oe<6;oe++)if(M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)te(O.__webglFramebuffer[oe][me],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,me);else te(O.__webglFramebuffer[oe],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(M)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(we){for(let oe=0,me=J.length;oe<me;oe++){const nt=J[oe],ne=i.get(nt);n.bindTexture(t.TEXTURE_2D,ne.__webglTexture),re(t.TEXTURE_2D,nt),te(O.__webglFramebuffer,R,nt,t.COLOR_ATTACHMENT0+oe,t.TEXTURE_2D,0),m(nt)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let oe=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(oe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(oe,Y.__webglTexture),re(oe,M),M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)te(O.__webglFramebuffer[me],R,M,t.COLOR_ATTACHMENT0,oe,me);else te(O.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,oe,0);m(M)&&u(oe),n.unbindTexture()}R.depthBuffer&&Fe(R)}function ft(R){const M=R.textures;for(let O=0,Y=M.length;O<Y;O++){const J=M[O];if(m(J)){const j=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,we=i.get(J).__webglTexture;n.bindTexture(j,we),u(j),n.unbindTexture()}}}const Ze=[],P=[];function qn(R){if(R.samples>0){if(tt(R)===!1){const M=R.textures,O=R.width,Y=R.height;let J=t.COLOR_BUFFER_BIT;const j=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,we=i.get(R),oe=M.length>1;if(oe)for(let me=0;me<M.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let me=0;me<M.length;me++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),oe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,we.__webglColorRenderbuffer[me]);const nt=i.get(M[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,nt,0)}t.blitFramebuffer(0,0,O,Y,0,0,O,Y,J,t.NEAREST),l===!0&&(Ze.length=0,P.length=0,Ze.push(t.COLOR_ATTACHMENT0+me),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ze.push(j),P.push(j),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,P)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ze))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),oe)for(let me=0;me<M.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,we.__webglColorRenderbuffer[me]);const nt=i.get(M[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,nt,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function Ye(R){return Math.min(r.maxSamples,R.samples)}function tt(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function De(R){const M=o.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function xt(R,M){const O=R.colorSpace,Y=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||O!==Is&&O!==as&&(lt.getTransfer(O)===Et?(Y!==Gi||J!==Hr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),M}function Ne(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=E,this.setTexture2D=W,this.setTexture2DArray=$,this.setTexture3D=V,this.setTextureCube=K,this.rebindTextures=Pe,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=qn,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=te,this.useMultisampledRTT=tt}function mb(t,e){function n(i,r=as){let s;const o=lt.getTransfer(r);if(i===Hr)return t.UNSIGNED_BYTE;if(i===E0)return t.UNSIGNED_SHORT_4_4_4_4;if(i===w0)return t.UNSIGNED_SHORT_5_5_5_1;if(i===px)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===fx)return t.BYTE;if(i===dx)return t.SHORT;if(i===Gl)return t.UNSIGNED_SHORT;if(i===M0)return t.INT;if(i===mo)return t.UNSIGNED_INT;if(i===Dr)return t.FLOAT;if(i===Ql)return t.HALF_FLOAT;if(i===mx)return t.ALPHA;if(i===gx)return t.RGB;if(i===Gi)return t.RGBA;if(i===_x)return t.LUMINANCE;if(i===vx)return t.LUMINANCE_ALPHA;if(i===sa)return t.DEPTH_COMPONENT;if(i===ya)return t.DEPTH_STENCIL;if(i===yx)return t.RED;if(i===T0)return t.RED_INTEGER;if(i===xx)return t.RG;if(i===A0)return t.RG_INTEGER;if(i===R0)return t.RGBA_INTEGER;if(i===mu||i===gu||i===_u||i===vu)if(o===Et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===mu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===gu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_u)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===mu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===gu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_u)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Dp||i===Ip||i===Up||i===Np)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Dp)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ip)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Up)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Np)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fp||i===Op||i===kp)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Fp||i===Op)return o===Et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===kp)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Bp||i===zp||i===Vp||i===Hp||i===Gp||i===Wp||i===Xp||i===$p||i===jp||i===Yp||i===qp||i===Kp||i===Zp||i===Qp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Bp)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===zp)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vp)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Hp)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Gp)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wp)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xp)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$p)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===jp)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Yp)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===qp)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Kp)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zp)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Qp)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yu||i===Jp||i===em)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===yu)return o===Et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Jp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===em)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Sx||i===tm||i===nm||i===im)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===yu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===tm)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===nm)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===im)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===va?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class gb extends xi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Dt extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _b={type:"move"};class fd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),u=this._getHandJoint(c,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),g=.02,p=.005;c.inputState.pinching&&f>g+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=g-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_b)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Dt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const vb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yb=`
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

}`;class xb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Xn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Gr({vertexShader:vb,fragmentShader:yb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ve(new Sa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Sb extends Ua{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,g=null,p=null;const x=new xb,m=n.getContextAttributes();let u=null,_=null;const v=[],S=[],C=new st;let A=null;const T=new xi;T.layers.enable(1),T.viewport=new Bt;const b=new xi;b.layers.enable(2),b.viewport=new Bt;const H=[T,b],y=new gb;y.layers.enable(1),y.layers.enable(2);let E=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let te=v[X];return te===void 0&&(te=new fd,v[X]=te),te.getTargetRaySpace()},this.getControllerGrip=function(X){let te=v[X];return te===void 0&&(te=new fd,v[X]=te),te.getGripSpace()},this.getHand=function(X){let te=v[X];return te===void 0&&(te=new fd,v[X]=te),te.getHandSpace()};function N(X){const te=S.indexOf(X.inputSource);if(te===-1)return;const ue=v[te];ue!==void 0&&(ue.update(X.inputSource,X.frame,c||o),ue.dispatchEvent({type:X.type,data:X.inputSource}))}function W(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",$);for(let X=0;X<v.length;X++){const te=S[X];te!==null&&(S[X]=null,v[X].disconnect(te))}E=null,F=null,x.reset(),e.setRenderTarget(u),g=null,f=null,d=null,r=null,_=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return d},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",W),r.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,te),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),_=new go(g.framebufferWidth,g.framebufferHeight,{format:Gi,type:Hr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,ue=null,ae=null;m.depth&&(ae=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,te=m.stencil?ya:sa,ue=m.stencil?va:mo);const Fe={colorFormat:n.RGBA8,depthFormat:ae,scaleFactor:s};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(Fe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new go(f.textureWidth,f.textureHeight,{format:Gi,type:Hr,depthTexture:new Fx(f.textureWidth,f.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),je.setContext(r),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function $(X){for(let te=0;te<X.removed.length;te++){const ue=X.removed[te],ae=S.indexOf(ue);ae>=0&&(S[ae]=null,v[ae].disconnect(ue))}for(let te=0;te<X.added.length;te++){const ue=X.added[te];let ae=S.indexOf(ue);if(ae===-1){for(let Pe=0;Pe<v.length;Pe++)if(Pe>=S.length){S.push(ue),ae=Pe;break}else if(S[Pe]===null){S[Pe]=ue,ae=Pe;break}if(ae===-1)break}const Fe=v[ae];Fe&&Fe.connect(ue)}}const V=new k,K=new k;function L(X,te,ue){V.setFromMatrixPosition(te.matrixWorld),K.setFromMatrixPosition(ue.matrixWorld);const ae=V.distanceTo(K),Fe=te.projectionMatrix.elements,Pe=ue.projectionMatrix.elements,Ke=Fe[14]/(Fe[10]-1),ft=Fe[14]/(Fe[10]+1),Ze=(Fe[9]+1)/Fe[5],P=(Fe[9]-1)/Fe[5],qn=(Fe[8]-1)/Fe[0],Ye=(Pe[8]+1)/Pe[0],tt=Ke*qn,De=Ke*Ye,xt=ae/(-qn+Ye),Ne=xt*-qn;if(te.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ne),X.translateZ(xt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Fe[10]===-1)X.projectionMatrix.copy(te.projectionMatrix),X.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const R=Ke+xt,M=ft+xt,O=tt-Ne,Y=De+(ae-Ne),J=Ze*ft/M*R,j=P*ft/M*R;X.projectionMatrix.makePerspective(O,Y,J,j,R,M),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function q(X,te){te===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(te.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let te=X.near,ue=X.far;x.texture!==null&&(x.depthNear>0&&(te=x.depthNear),x.depthFar>0&&(ue=x.depthFar)),y.near=b.near=T.near=te,y.far=b.far=T.far=ue,(E!==y.near||F!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,F=y.far);const ae=X.parent,Fe=y.cameras;q(y,ae);for(let Pe=0;Pe<Fe.length;Pe++)q(Fe[Pe],ae);Fe.length===2?L(y,T,b):y.projectionMatrix.copy(T.projectionMatrix),Q(X,y,ae)};function Q(X,te,ue){ue===null?X.matrix.copy(te.matrixWorld):(X.matrix.copy(ue.matrixWorld),X.matrix.invert(),X.matrix.multiply(te.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(te.projectionMatrix),X.projectionMatrixInverse.copy(te.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=rm*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&g===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let re=null;function Ce(X,te){if(h=te.getViewerPose(c||o),p=te,h!==null){const ue=h.views;g!==null&&(e.setRenderTargetFramebuffer(_,g.framebuffer),e.setRenderTarget(_));let ae=!1;ue.length!==y.cameras.length&&(y.cameras.length=0,ae=!0);for(let Pe=0;Pe<ue.length;Pe++){const Ke=ue[Pe];let ft=null;if(g!==null)ft=g.getViewport(Ke);else{const P=d.getViewSubImage(f,Ke);ft=P.viewport,Pe===0&&(e.setRenderTargetTextures(_,P.colorTexture,f.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(_))}let Ze=H[Pe];Ze===void 0&&(Ze=new xi,Ze.layers.enable(Pe),Ze.viewport=new Bt,H[Pe]=Ze),Ze.matrix.fromArray(Ke.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(Ke.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(ft.x,ft.y,ft.width,ft.height),Pe===0&&(y.matrix.copy(Ze.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ae===!0&&y.cameras.push(Ze)}const Fe=r.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")){const Pe=d.getDepthInformation(ue[0]);Pe&&Pe.isValid&&Pe.texture&&x.init(e,Pe,r.renderState)}}for(let ue=0;ue<v.length;ue++){const ae=S[ue],Fe=v[ue];ae!==null&&Fe!==void 0&&Fe.update(ae,te,c||o)}re&&re(X,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),p=null}const je=new Ux;je.setAnimationLoop(Ce),this.setAnimationLoop=function(X){re=X},this.dispose=function(){}}}const Hs=new hr,Mb=new Vt;function Eb(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,Lx(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,_,v,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),d(m,u)):u.isMeshPhongMaterial?(s(m,u),h(m,u)):u.isMeshStandardMaterial?(s(m,u),f(m,u),u.isMeshPhysicalMaterial&&g(m,u,S)):u.isMeshMatcapMaterial?(s(m,u),p(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),x(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,_,v):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Pn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Pn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const _=e.get(u),v=_.envMap,S=_.envMapRotation;v&&(m.envMap.value=v,Hs.copy(S),Hs.x*=-1,Hs.y*=-1,Hs.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Hs.y*=-1,Hs.z*=-1),m.envMapRotation.value.setFromMatrix4(Mb.makeRotationFromEuler(Hs)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,_,v){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*_,m.scale.value=v*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function g(m,u,_){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Pn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){const _=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function wb(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){const S=v.program;i.uniformBlockBinding(_,S)}function c(_,v){let S=r[_.id];S===void 0&&(p(_),S=h(_),r[_.id]=S,_.addEventListener("dispose",m));const C=v.program;i.updateUBOMapping(_,C);const A=e.render.frame;s[_.id]!==A&&(f(_),s[_.id]=A)}function h(_){const v=d();_.__bindingPointIndex=v;const S=t.createBuffer(),C=_.__size,A=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,C,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const v=r[_.id],S=_.uniforms,C=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let A=0,T=S.length;A<T;A++){const b=Array.isArray(S[A])?S[A]:[S[A]];for(let H=0,y=b.length;H<y;H++){const E=b[H];if(g(E,A,H,C)===!0){const F=E.__offset,N=Array.isArray(E.value)?E.value:[E.value];let W=0;for(let $=0;$<N.length;$++){const V=N[$],K=x(V);typeof V=="number"||typeof V=="boolean"?(E.__data[0]=V,t.bufferSubData(t.UNIFORM_BUFFER,F+W,E.__data)):V.isMatrix3?(E.__data[0]=V.elements[0],E.__data[1]=V.elements[1],E.__data[2]=V.elements[2],E.__data[3]=0,E.__data[4]=V.elements[3],E.__data[5]=V.elements[4],E.__data[6]=V.elements[5],E.__data[7]=0,E.__data[8]=V.elements[6],E.__data[9]=V.elements[7],E.__data[10]=V.elements[8],E.__data[11]=0):(V.toArray(E.__data,W),W+=K.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,F,E.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(_,v,S,C){const A=_.value,T=v+"_"+S;if(C[T]===void 0)return typeof A=="number"||typeof A=="boolean"?C[T]=A:C[T]=A.clone(),!0;{const b=C[T];if(typeof A=="number"||typeof A=="boolean"){if(b!==A)return C[T]=A,!0}else if(b.equals(A)===!1)return b.copy(A),!0}return!1}function p(_){const v=_.uniforms;let S=0;const C=16;for(let T=0,b=v.length;T<b;T++){const H=Array.isArray(v[T])?v[T]:[v[T]];for(let y=0,E=H.length;y<E;y++){const F=H[y],N=Array.isArray(F.value)?F.value:[F.value];for(let W=0,$=N.length;W<$;W++){const V=N[W],K=x(V),L=S%C,q=L%K.boundary,Q=L+q;S+=q,Q!==0&&C-Q<K.storage&&(S+=C-Q),F.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=K.storage}}}const A=S%C;return A>0&&(S+=C-A),_.__size=S,_.__cache={},this}function x(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){const v=_.target;v.removeEventListener("dispose",m);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class Tb{constructor(e={}){const{canvas:n=h4(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),p=new Int32Array(4);let x=null,m=null;const u=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ir,this.toneMapping=xs,this.toneMappingExposure=1;const v=this;let S=!1,C=0,A=0,T=null,b=-1,H=null;const y=new Bt,E=new Bt;let F=null;const N=new Ge(0);let W=0,$=n.width,V=n.height,K=1,L=null,q=null;const Q=new Bt(0,0,$,V),re=new Bt(0,0,$,V);let Ce=!1;const je=new L0;let X=!1,te=!1;const ue=new Vt,ae=new Vt,Fe=new k,Pe=new Bt,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function Ze(){return T===null?K:1}let P=i;function qn(w,I){return n.getContext(w,I)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${S0}`),n.addEventListener("webglcontextlost",Z,!1),n.addEventListener("webglcontextrestored",le,!1),n.addEventListener("webglcontextcreationerror",fe,!1),P===null){const I="webgl2";if(P=qn(I,w),P===null)throw qn(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ye,tt,De,xt,Ne,R,M,O,Y,J,j,we,oe,me,nt,ne,ge,Ie,Ue,_e,qe,Oe,mt,D;function he(){Ye=new PR(P),Ye.init(),Oe=new mb(P,Ye),tt=new wR(P,Ye,e,Oe),De=new fb(P),tt.reverseDepthBuffer&&De.buffers.depth.setReversed(!0),xt=new IR(P),Ne=new ZC,R=new pb(P,Ye,De,Ne,tt,Oe,xt),M=new AR(v),O=new bR(v),Y=new z4(P),mt=new MR(P,Y),J=new LR(P,Y,xt,mt),j=new NR(P,J,Y,xt),Ue=new UR(P,tt,R),ne=new TR(Ne),we=new KC(v,M,O,Ye,tt,mt,ne),oe=new Eb(v,Ne),me=new JC,nt=new sb(Ye),Ie=new SR(v,M,O,De,j,f,l),ge=new ub(v,j,tt),D=new wb(P,xt,tt,De),_e=new ER(P,Ye,xt),qe=new DR(P,Ye,xt),xt.programs=we.programs,v.capabilities=tt,v.extensions=Ye,v.properties=Ne,v.renderLists=me,v.shadowMap=ge,v.state=De,v.info=xt}he();const G=new Sb(v,P);this.xr=G,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const w=Ye.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ye.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(w){w!==void 0&&(K=w,this.setSize($,V,!1))},this.getSize=function(w){return w.set($,V)},this.setSize=function(w,I,B=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=w,V=I,n.width=Math.floor(w*K),n.height=Math.floor(I*K),B===!0&&(n.style.width=w+"px",n.style.height=I+"px"),this.setViewport(0,0,w,I)},this.getDrawingBufferSize=function(w){return w.set($*K,V*K).floor()},this.setDrawingBufferSize=function(w,I,B){$=w,V=I,K=B,n.width=Math.floor(w*B),n.height=Math.floor(I*B),this.setViewport(0,0,w,I)},this.getCurrentViewport=function(w){return w.copy(y)},this.getViewport=function(w){return w.copy(Q)},this.setViewport=function(w,I,B,z){w.isVector4?Q.set(w.x,w.y,w.z,w.w):Q.set(w,I,B,z),De.viewport(y.copy(Q).multiplyScalar(K).round())},this.getScissor=function(w){return w.copy(re)},this.setScissor=function(w,I,B,z){w.isVector4?re.set(w.x,w.y,w.z,w.w):re.set(w,I,B,z),De.scissor(E.copy(re).multiplyScalar(K).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(w){De.setScissorTest(Ce=w)},this.setOpaqueSort=function(w){L=w},this.setTransparentSort=function(w){q=w},this.getClearColor=function(w){return w.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(w=!0,I=!0,B=!0){let z=0;if(w){let U=!1;if(T!==null){const ie=T.texture.format;U=ie===R0||ie===A0||ie===T0}if(U){const ie=T.texture.type,ce=ie===Hr||ie===mo||ie===Gl||ie===va||ie===E0||ie===w0,ye=Ie.getClearColor(),Se=Ie.getClearAlpha(),be=ye.r,Le=ye.g,Te=ye.b;ce?(g[0]=be,g[1]=Le,g[2]=Te,g[3]=Se,P.clearBufferuiv(P.COLOR,0,g)):(p[0]=be,p[1]=Le,p[2]=Te,p[3]=Se,P.clearBufferiv(P.COLOR,0,p))}else z|=P.COLOR_BUFFER_BIT}I&&(z|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),B&&(z|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Z,!1),n.removeEventListener("webglcontextrestored",le,!1),n.removeEventListener("webglcontextcreationerror",fe,!1),me.dispose(),nt.dispose(),Ne.dispose(),M.dispose(),O.dispose(),j.dispose(),mt.dispose(),D.dispose(),we.dispose(),G.dispose(),G.removeEventListener("sessionstart",Fg),G.removeEventListener("sessionend",Og),Fs.stop()};function Z(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=xt.autoReset,I=ge.enabled,B=ge.autoUpdate,z=ge.needsUpdate,U=ge.type;he(),xt.autoReset=w,ge.enabled=I,ge.autoUpdate=B,ge.needsUpdate=z,ge.type=U}function fe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Qe(w){const I=w.target;I.removeEventListener("dispose",Qe),qt(I)}function qt(w){Un(w),Ne.remove(w)}function Un(w){const I=Ne.get(w).programs;I!==void 0&&(I.forEach(function(B){we.releaseProgram(B)}),w.isShaderMaterial&&we.releaseShaderCache(w))}this.renderBufferDirect=function(w,I,B,z,U,ie){I===null&&(I=Ke);const ce=U.isMesh&&U.matrixWorld.determinant()<0,ye=WS(w,I,B,z,U);De.setMaterial(z,ce);let Se=B.index,be=1;if(z.wireframe===!0){if(Se=J.getWireframeAttribute(B),Se===void 0)return;be=2}const Le=B.drawRange,Te=B.attributes.position;let ut=Le.start*be,St=(Le.start+Le.count)*be;ie!==null&&(ut=Math.max(ut,ie.start*be),St=Math.min(St,(ie.start+ie.count)*be)),Se!==null?(ut=Math.max(ut,0),St=Math.min(St,Se.count)):Te!=null&&(ut=Math.max(ut,0),St=Math.min(St,Te.count));const Ft=St-ut;if(Ft<0||Ft===1/0)return;mt.setup(U,z,ye,B,Se);let Kn,ot=_e;if(Se!==null&&(Kn=Y.get(Se),ot=qe,ot.setIndex(Kn)),U.isMesh)z.wireframe===!0?(De.setLineWidth(z.wireframeLinewidth*Ze()),ot.setMode(P.LINES)):ot.setMode(P.TRIANGLES);else if(U.isLine){let Ae=z.linewidth;Ae===void 0&&(Ae=1),De.setLineWidth(Ae*Ze()),U.isLineSegments?ot.setMode(P.LINES):U.isLineLoop?ot.setMode(P.LINE_LOOP):ot.setMode(P.LINE_STRIP)}else U.isPoints?ot.setMode(P.POINTS):U.isSprite&&ot.setMode(P.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)ot.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))ot.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Ae=U._multiDrawStarts,hn=U._multiDrawCounts,at=U._multiDrawCount,Di=Se?Y.get(Se).bytesPerElement:1,So=Ne.get(z).currentProgram.getUniforms();for(let Zn=0;Zn<at;Zn++)So.setValue(P,"_gl_DrawID",Zn),ot.render(Ae[Zn]/Di,hn[Zn])}else if(U.isInstancedMesh)ot.renderInstances(ut,Ft,U.count);else if(B.isInstancedBufferGeometry){const Ae=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,hn=Math.min(B.instanceCount,Ae);ot.renderInstances(ut,Ft,hn)}else ot.render(ut,Ft)};function rt(w,I,B){w.transparent===!0&&w.side===ar&&w.forceSinglePass===!1?(w.side=Pn,w.needsUpdate=!0,dc(w,I,B),w.side=ws,w.needsUpdate=!0,dc(w,I,B),w.side=ar):dc(w,I,B)}this.compile=function(w,I,B=null){B===null&&(B=w),m=nt.get(B),m.init(I),_.push(m),B.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),w!==B&&w.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights();const z=new Set;return w.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const ie=U.material;if(ie)if(Array.isArray(ie))for(let ce=0;ce<ie.length;ce++){const ye=ie[ce];rt(ye,B,U),z.add(ye)}else rt(ie,B,U),z.add(ie)}),_.pop(),m=null,z},this.compileAsync=function(w,I,B=null){const z=this.compile(w,I,B);return new Promise(U=>{function ie(){if(z.forEach(function(ce){Ne.get(ce).currentProgram.isReady()&&z.delete(ce)}),z.size===0){U(w);return}setTimeout(ie,10)}Ye.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let Nn=null;function yr(w){Nn&&Nn(w)}function Fg(){Fs.stop()}function Og(){Fs.start()}const Fs=new Ux;Fs.setAnimationLoop(yr),typeof self<"u"&&Fs.setContext(self),this.setAnimationLoop=function(w){Nn=w,G.setAnimationLoop(w),w===null?Fs.stop():Fs.start()},G.addEventListener("sessionstart",Fg),G.addEventListener("sessionend",Og),this.render=function(w,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(I),I=G.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,I,T),m=nt.get(w,_.length),m.init(I),_.push(m),ae.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),je.setFromProjectionMatrix(ae),te=this.localClippingEnabled,X=ne.init(this.clippingPlanes,te),x=me.get(w,u.length),x.init(),u.push(x),G.enabled===!0&&G.isPresenting===!0){const ie=v.xr.getDepthSensingMesh();ie!==null&&of(ie,I,-1/0,v.sortObjects)}of(w,I,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(L,q),ft=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,ft&&Ie.addToRenderList(x,w),this.info.render.frame++,X===!0&&ne.beginShadows();const B=m.state.shadowsArray;ge.render(B,w,I),X===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=x.opaque,U=x.transmissive;if(m.setupLights(),I.isArrayCamera){const ie=I.cameras;if(U.length>0)for(let ce=0,ye=ie.length;ce<ye;ce++){const Se=ie[ce];Bg(z,U,w,Se)}ft&&Ie.render(w);for(let ce=0,ye=ie.length;ce<ye;ce++){const Se=ie[ce];kg(x,w,Se,Se.viewport)}}else U.length>0&&Bg(z,U,w,I),ft&&Ie.render(w),kg(x,w,I);T!==null&&(R.updateMultisampleRenderTarget(T),R.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(v,w,I),mt.resetDefaultState(),b=-1,H=null,_.pop(),_.length>0?(m=_[_.length-1],X===!0&&ne.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function of(w,I,B,z){if(w.visible===!1)return;if(w.layers.test(I.layers)){if(w.isGroup)B=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(I);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||je.intersectsSprite(w)){z&&Pe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ae);const ce=j.update(w),ye=w.material;ye.visible&&x.push(w,ce,ye,B,Pe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||je.intersectsObject(w))){const ce=j.update(w),ye=w.material;if(z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Pe.copy(w.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Pe.copy(ce.boundingSphere.center)),Pe.applyMatrix4(w.matrixWorld).applyMatrix4(ae)),Array.isArray(ye)){const Se=ce.groups;for(let be=0,Le=Se.length;be<Le;be++){const Te=Se[be],ut=ye[Te.materialIndex];ut&&ut.visible&&x.push(w,ce,ut,B,Pe.z,Te)}}else ye.visible&&x.push(w,ce,ye,B,Pe.z,null)}}const ie=w.children;for(let ce=0,ye=ie.length;ce<ye;ce++)of(ie[ce],I,B,z)}function kg(w,I,B,z){const U=w.opaque,ie=w.transmissive,ce=w.transparent;m.setupLightsView(B),X===!0&&ne.setGlobalState(v.clippingPlanes,B),z&&De.viewport(y.copy(z)),U.length>0&&fc(U,I,B),ie.length>0&&fc(ie,I,B),ce.length>0&&fc(ce,I,B),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function Bg(w,I,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[z.id]===void 0&&(m.state.transmissionRenderTarget[z.id]=new go(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?Ql:Hr,minFilter:no,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));const ie=m.state.transmissionRenderTarget[z.id],ce=z.viewport||y;ie.setSize(ce.z,ce.w);const ye=v.getRenderTarget();v.setRenderTarget(ie),v.getClearColor(N),W=v.getClearAlpha(),W<1&&v.setClearColor(16777215,.5),v.clear(),ft&&Ie.render(B);const Se=v.toneMapping;v.toneMapping=xs;const be=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),m.setupLightsView(z),X===!0&&ne.setGlobalState(v.clippingPlanes,z),fc(w,B,z),R.updateMultisampleRenderTarget(ie),R.updateRenderTargetMipmap(ie),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let Te=0,ut=I.length;Te<ut;Te++){const St=I[Te],Ft=St.object,Kn=St.geometry,ot=St.material,Ae=St.group;if(ot.side===ar&&Ft.layers.test(z.layers)){const hn=ot.side;ot.side=Pn,ot.needsUpdate=!0,zg(Ft,B,z,Kn,ot,Ae),ot.side=hn,ot.needsUpdate=!0,Le=!0}}Le===!0&&(R.updateMultisampleRenderTarget(ie),R.updateRenderTargetMipmap(ie))}v.setRenderTarget(ye),v.setClearColor(N,W),be!==void 0&&(z.viewport=be),v.toneMapping=Se}function fc(w,I,B){const z=I.isScene===!0?I.overrideMaterial:null;for(let U=0,ie=w.length;U<ie;U++){const ce=w[U],ye=ce.object,Se=ce.geometry,be=z===null?ce.material:z,Le=ce.group;ye.layers.test(B.layers)&&zg(ye,I,B,Se,be,Le)}}function zg(w,I,B,z,U,ie){w.onBeforeRender(v,I,B,z,U,ie),w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),U.onBeforeRender(v,I,B,z,w,ie),U.transparent===!0&&U.side===ar&&U.forceSinglePass===!1?(U.side=Pn,U.needsUpdate=!0,v.renderBufferDirect(B,I,z,U,w,ie),U.side=ws,U.needsUpdate=!0,v.renderBufferDirect(B,I,z,U,w,ie),U.side=ar):v.renderBufferDirect(B,I,z,U,w,ie),w.onAfterRender(v,I,B,z,U,ie)}function dc(w,I,B){I.isScene!==!0&&(I=Ke);const z=Ne.get(w),U=m.state.lights,ie=m.state.shadowsArray,ce=U.state.version,ye=we.getParameters(w,U.state,ie,I,B),Se=we.getProgramCacheKey(ye);let be=z.programs;z.environment=w.isMeshStandardMaterial?I.environment:null,z.fog=I.fog,z.envMap=(w.isMeshStandardMaterial?O:M).get(w.envMap||z.environment),z.envMapRotation=z.environment!==null&&w.envMap===null?I.environmentRotation:w.envMapRotation,be===void 0&&(w.addEventListener("dispose",Qe),be=new Map,z.programs=be);let Le=be.get(Se);if(Le!==void 0){if(z.currentProgram===Le&&z.lightsStateVersion===ce)return Hg(w,ye),Le}else ye.uniforms=we.getUniforms(w),w.onBeforeCompile(ye,v),Le=we.acquireProgram(ye,Se),be.set(Se,Le),z.uniforms=ye.uniforms;const Te=z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Te.clippingPlanes=ne.uniform),Hg(w,ye),z.needsLights=$S(w),z.lightsStateVersion=ce,z.needsLights&&(Te.ambientLightColor.value=U.state.ambient,Te.lightProbe.value=U.state.probe,Te.directionalLights.value=U.state.directional,Te.directionalLightShadows.value=U.state.directionalShadow,Te.spotLights.value=U.state.spot,Te.spotLightShadows.value=U.state.spotShadow,Te.rectAreaLights.value=U.state.rectArea,Te.ltc_1.value=U.state.rectAreaLTC1,Te.ltc_2.value=U.state.rectAreaLTC2,Te.pointLights.value=U.state.point,Te.pointLightShadows.value=U.state.pointShadow,Te.hemisphereLights.value=U.state.hemi,Te.directionalShadowMap.value=U.state.directionalShadowMap,Te.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Te.spotShadowMap.value=U.state.spotShadowMap,Te.spotLightMatrix.value=U.state.spotLightMatrix,Te.spotLightMap.value=U.state.spotLightMap,Te.pointShadowMap.value=U.state.pointShadowMap,Te.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=Le,z.uniformsList=null,Le}function Vg(w){if(w.uniformsList===null){const I=w.currentProgram.getUniforms();w.uniformsList=Su.seqWithValue(I.seq,w.uniforms)}return w.uniformsList}function Hg(w,I){const B=Ne.get(w);B.outputColorSpace=I.outputColorSpace,B.batching=I.batching,B.batchingColor=I.batchingColor,B.instancing=I.instancing,B.instancingColor=I.instancingColor,B.instancingMorph=I.instancingMorph,B.skinning=I.skinning,B.morphTargets=I.morphTargets,B.morphNormals=I.morphNormals,B.morphColors=I.morphColors,B.morphTargetsCount=I.morphTargetsCount,B.numClippingPlanes=I.numClippingPlanes,B.numIntersection=I.numClipIntersection,B.vertexAlphas=I.vertexAlphas,B.vertexTangents=I.vertexTangents,B.toneMapping=I.toneMapping}function WS(w,I,B,z,U){I.isScene!==!0&&(I=Ke),R.resetTextureUnits();const ie=I.fog,ce=z.isMeshStandardMaterial?I.environment:null,ye=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Is,Se=(z.isMeshStandardMaterial?O:M).get(z.envMap||ce),be=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Le=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Te=!!B.morphAttributes.position,ut=!!B.morphAttributes.normal,St=!!B.morphAttributes.color;let Ft=xs;z.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Ft=v.toneMapping);const Kn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ot=Kn!==void 0?Kn.length:0,Ae=Ne.get(z),hn=m.state.lights;if(X===!0&&(te===!0||w!==H)){const di=w===H&&z.id===b;ne.setState(z,w,di)}let at=!1;z.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==hn.state.version||Ae.outputColorSpace!==ye||U.isBatchedMesh&&Ae.batching===!1||!U.isBatchedMesh&&Ae.batching===!0||U.isBatchedMesh&&Ae.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ae.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ae.instancing===!1||!U.isInstancedMesh&&Ae.instancing===!0||U.isSkinnedMesh&&Ae.skinning===!1||!U.isSkinnedMesh&&Ae.skinning===!0||U.isInstancedMesh&&Ae.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ae.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ae.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ae.instancingMorph===!1&&U.morphTexture!==null||Ae.envMap!==Se||z.fog===!0&&Ae.fog!==ie||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ne.numPlanes||Ae.numIntersection!==ne.numIntersection)||Ae.vertexAlphas!==be||Ae.vertexTangents!==Le||Ae.morphTargets!==Te||Ae.morphNormals!==ut||Ae.morphColors!==St||Ae.toneMapping!==Ft||Ae.morphTargetsCount!==ot)&&(at=!0):(at=!0,Ae.__version=z.version);let Di=Ae.currentProgram;at===!0&&(Di=dc(z,I,U));let So=!1,Zn=!1,af=!1;const Wt=Di.getUniforms(),$r=Ae.uniforms;if(De.useProgram(Di.program)&&(So=!0,Zn=!0,af=!0),z.id!==b&&(b=z.id,Zn=!0),So||H!==w){tt.reverseDepthBuffer?(ue.copy(w.projectionMatrix),d4(ue),p4(ue),Wt.setValue(P,"projectionMatrix",ue)):Wt.setValue(P,"projectionMatrix",w.projectionMatrix),Wt.setValue(P,"viewMatrix",w.matrixWorldInverse);const di=Wt.map.cameraPosition;di!==void 0&&di.setValue(P,Fe.setFromMatrixPosition(w.matrixWorld)),tt.logarithmicDepthBuffer&&Wt.setValue(P,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Wt.setValue(P,"isOrthographic",w.isOrthographicCamera===!0),H!==w&&(H=w,Zn=!0,af=!0)}if(U.isSkinnedMesh){Wt.setOptional(P,U,"bindMatrix"),Wt.setOptional(P,U,"bindMatrixInverse");const di=U.skeleton;di&&(di.boneTexture===null&&di.computeBoneTexture(),Wt.setValue(P,"boneTexture",di.boneTexture,R))}U.isBatchedMesh&&(Wt.setOptional(P,U,"batchingTexture"),Wt.setValue(P,"batchingTexture",U._matricesTexture,R),Wt.setOptional(P,U,"batchingIdTexture"),Wt.setValue(P,"batchingIdTexture",U._indirectTexture,R),Wt.setOptional(P,U,"batchingColorTexture"),U._colorsTexture!==null&&Wt.setValue(P,"batchingColorTexture",U._colorsTexture,R));const lf=B.morphAttributes;if((lf.position!==void 0||lf.normal!==void 0||lf.color!==void 0)&&Ue.update(U,B,Di),(Zn||Ae.receiveShadow!==U.receiveShadow)&&(Ae.receiveShadow=U.receiveShadow,Wt.setValue(P,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&($r.envMap.value=Se,$r.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&I.environment!==null&&($r.envMapIntensity.value=I.environmentIntensity),Zn&&(Wt.setValue(P,"toneMappingExposure",v.toneMappingExposure),Ae.needsLights&&XS($r,af),ie&&z.fog===!0&&oe.refreshFogUniforms($r,ie),oe.refreshMaterialUniforms($r,z,K,V,m.state.transmissionRenderTarget[w.id]),Su.upload(P,Vg(Ae),$r,R)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Su.upload(P,Vg(Ae),$r,R),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Wt.setValue(P,"center",U.center),Wt.setValue(P,"modelViewMatrix",U.modelViewMatrix),Wt.setValue(P,"normalMatrix",U.normalMatrix),Wt.setValue(P,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const di=z.uniformsGroups;for(let cf=0,jS=di.length;cf<jS;cf++){const Gg=di[cf];D.update(Gg,Di),D.bind(Gg,Di)}}return Di}function XS(w,I){w.ambientLightColor.needsUpdate=I,w.lightProbe.needsUpdate=I,w.directionalLights.needsUpdate=I,w.directionalLightShadows.needsUpdate=I,w.pointLights.needsUpdate=I,w.pointLightShadows.needsUpdate=I,w.spotLights.needsUpdate=I,w.spotLightShadows.needsUpdate=I,w.rectAreaLights.needsUpdate=I,w.hemisphereLights.needsUpdate=I}function $S(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,I,B){Ne.get(w.texture).__webglTexture=I,Ne.get(w.depthTexture).__webglTexture=B;const z=Ne.get(w);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||Ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,I){const B=Ne.get(w);B.__webglFramebuffer=I,B.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(w,I=0,B=0){T=w,C=I,A=B;let z=!0,U=null,ie=!1,ce=!1;if(w){const Se=Ne.get(w);if(Se.__useDefaultFramebuffer!==void 0)De.bindFramebuffer(P.FRAMEBUFFER,null),z=!1;else if(Se.__webglFramebuffer===void 0)R.setupRenderTarget(w);else if(Se.__hasExternalTextures)R.rebindTextures(w,Ne.get(w.texture).__webglTexture,Ne.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Te=w.depthTexture;if(Se.__boundDepthTexture!==Te){if(Te!==null&&Ne.has(Te)&&(w.width!==Te.image.width||w.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(w)}}const be=w.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(ce=!0);const Le=Ne.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Le[I])?U=Le[I][B]:U=Le[I],ie=!0):w.samples>0&&R.useMultisampledRTT(w)===!1?U=Ne.get(w).__webglMultisampledFramebuffer:Array.isArray(Le)?U=Le[B]:U=Le,y.copy(w.viewport),E.copy(w.scissor),F=w.scissorTest}else y.copy(Q).multiplyScalar(K).floor(),E.copy(re).multiplyScalar(K).floor(),F=Ce;if(De.bindFramebuffer(P.FRAMEBUFFER,U)&&z&&De.drawBuffers(w,U),De.viewport(y),De.scissor(E),De.setScissorTest(F),ie){const Se=Ne.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+I,Se.__webglTexture,B)}else if(ce){const Se=Ne.get(w.texture),be=I||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Se.__webglTexture,B||0,be)}b=-1},this.readRenderTargetPixels=function(w,I,B,z,U,ie,ce){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Ne.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ce!==void 0&&(ye=ye[ce]),ye){De.bindFramebuffer(P.FRAMEBUFFER,ye);try{const Se=w.texture,be=Se.format,Le=Se.type;if(!tt.textureFormatReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=w.width-z&&B>=0&&B<=w.height-U&&P.readPixels(I,B,z,U,Oe.convert(be),Oe.convert(Le),ie)}finally{const Se=T!==null?Ne.get(T).__webglFramebuffer:null;De.bindFramebuffer(P.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(w,I,B,z,U,ie,ce){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Ne.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ce!==void 0&&(ye=ye[ce]),ye){const Se=w.texture,be=Se.format,Le=Se.type;if(!tt.textureFormatReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=w.width-z&&B>=0&&B<=w.height-U){De.bindFramebuffer(P.FRAMEBUFFER,ye);const Te=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Te),P.bufferData(P.PIXEL_PACK_BUFFER,ie.byteLength,P.STREAM_READ),P.readPixels(I,B,z,U,Oe.convert(be),Oe.convert(Le),0);const ut=T!==null?Ne.get(T).__webglFramebuffer:null;De.bindFramebuffer(P.FRAMEBUFFER,ut);const St=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await f4(P,St,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Te),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ie),P.deleteBuffer(Te),P.deleteSync(St),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,I=null,B=0){w.isTexture!==!0&&(xu("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,w=arguments[1]);const z=Math.pow(2,-B),U=Math.floor(w.image.width*z),ie=Math.floor(w.image.height*z),ce=I!==null?I.x:0,ye=I!==null?I.y:0;R.setTexture2D(w,0),P.copyTexSubImage2D(P.TEXTURE_2D,B,0,0,ce,ye,U,ie),De.unbindTexture()},this.copyTextureToTexture=function(w,I,B=null,z=null,U=0){w.isTexture!==!0&&(xu("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,w=arguments[1],I=arguments[2],U=arguments[3]||0,B=null);let ie,ce,ye,Se,be,Le;B!==null?(ie=B.max.x-B.min.x,ce=B.max.y-B.min.y,ye=B.min.x,Se=B.min.y):(ie=w.image.width,ce=w.image.height,ye=0,Se=0),z!==null?(be=z.x,Le=z.y):(be=0,Le=0);const Te=Oe.convert(I.format),ut=Oe.convert(I.type);R.setTexture2D(I,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);const St=P.getParameter(P.UNPACK_ROW_LENGTH),Ft=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Kn=P.getParameter(P.UNPACK_SKIP_PIXELS),ot=P.getParameter(P.UNPACK_SKIP_ROWS),Ae=P.getParameter(P.UNPACK_SKIP_IMAGES),hn=w.isCompressedTexture?w.mipmaps[U]:w.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,hn.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,hn.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ye),P.pixelStorei(P.UNPACK_SKIP_ROWS,Se),w.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,U,be,Le,ie,ce,Te,ut,hn.data):w.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,U,be,Le,hn.width,hn.height,Te,hn.data):P.texSubImage2D(P.TEXTURE_2D,U,be,Le,ie,ce,Te,ut,hn),P.pixelStorei(P.UNPACK_ROW_LENGTH,St),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ft),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Kn),P.pixelStorei(P.UNPACK_SKIP_ROWS,ot),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ae),U===0&&I.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),De.unbindTexture()},this.copyTextureToTexture3D=function(w,I,B=null,z=null,U=0){w.isTexture!==!0&&(xu("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,w=arguments[2],I=arguments[3],U=arguments[4]||0);let ie,ce,ye,Se,be,Le,Te,ut,St;const Ft=w.isCompressedTexture?w.mipmaps[U]:w.image;B!==null?(ie=B.max.x-B.min.x,ce=B.max.y-B.min.y,ye=B.max.z-B.min.z,Se=B.min.x,be=B.min.y,Le=B.min.z):(ie=Ft.width,ce=Ft.height,ye=Ft.depth,Se=0,be=0,Le=0),z!==null?(Te=z.x,ut=z.y,St=z.z):(Te=0,ut=0,St=0);const Kn=Oe.convert(I.format),ot=Oe.convert(I.type);let Ae;if(I.isData3DTexture)R.setTexture3D(I,0),Ae=P.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)R.setTexture2DArray(I,0),Ae=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);const hn=P.getParameter(P.UNPACK_ROW_LENGTH),at=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Di=P.getParameter(P.UNPACK_SKIP_PIXELS),So=P.getParameter(P.UNPACK_SKIP_ROWS),Zn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ft.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ft.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Se),P.pixelStorei(P.UNPACK_SKIP_ROWS,be),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Le),w.isDataTexture||w.isData3DTexture?P.texSubImage3D(Ae,U,Te,ut,St,ie,ce,ye,Kn,ot,Ft.data):I.isCompressedArrayTexture?P.compressedTexSubImage3D(Ae,U,Te,ut,St,ie,ce,ye,Kn,Ft.data):P.texSubImage3D(Ae,U,Te,ut,St,ie,ce,ye,Kn,ot,Ft),P.pixelStorei(P.UNPACK_ROW_LENGTH,hn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,at),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Di),P.pixelStorei(P.UNPACK_SKIP_ROWS,So),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Zn),U===0&&I.generateMipmaps&&P.generateMipmap(Ae),De.unbindTexture()},this.initRenderTarget=function(w){Ne.get(w).__webglFramebuffer===void 0&&R.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),De.unbindTexture()},this.resetState=function(){C=0,A=0,T=null,De.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ir}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===C0?"display-p3":"srgb",n.unpackColorSpace=lt.workingColorSpace===Uh?"display-p3":"srgb"}}class I0{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ge(e),this.near=n,this.far=i}clone(){return new I0(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ab extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hr,this.environmentIntensity=1,this.environmentRotation=new hr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Cr extends Yi{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],d=[],f=[],g=[];let p=0;const x=[],m=i/2;let u=0;_(),o===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new mn(d,3)),this.setAttribute("normal",new mn(f,3)),this.setAttribute("uv",new mn(g,2));function _(){const S=new k,C=new k;let A=0;const T=(n-e)/i;for(let b=0;b<=s;b++){const H=[],y=b/s,E=y*(n-e)+e;for(let F=0;F<=r;F++){const N=F/r,W=N*l+a,$=Math.sin(W),V=Math.cos(W);C.x=E*$,C.y=-y*i+m,C.z=E*V,d.push(C.x,C.y,C.z),S.set($,T,V).normalize(),f.push(S.x,S.y,S.z),g.push(N,1-y),H.push(p++)}x.push(H)}for(let b=0;b<r;b++)for(let H=0;H<s;H++){const y=x[H][b],E=x[H+1][b],F=x[H+1][b+1],N=x[H][b+1];e>0&&(h.push(y,E,N),A+=3),n>0&&(h.push(E,F,N),A+=3)}c.addGroup(u,A,0),u+=A}function v(S){const C=p,A=new st,T=new k;let b=0;const H=S===!0?e:n,y=S===!0?1:-1;for(let F=1;F<=r;F++)d.push(0,m*y,0),f.push(0,y,0),g.push(.5,.5),p++;const E=p;for(let F=0;F<=r;F++){const W=F/r*l+a,$=Math.cos(W),V=Math.sin(W);T.x=H*V,T.y=m*y,T.z=H*$,d.push(T.x,T.y,T.z),f.push(0,y,0),A.x=$*.5+.5,A.y=V*.5*y+.5,g.push(A.x,A.y),p++}for(let F=0;F<r;F++){const N=C+F,W=E+F;S===!0?h.push(W,W+1,N):h.push(W+1,W,N),b+=3}c.addGroup(u,b,S===!0?1:2),u+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class U0 extends Cr{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new U0(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Oi extends Yi{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new k,f=new k,g=[],p=[],x=[],m=[];for(let u=0;u<=i;u++){const _=[],v=u/i;let S=0;u===0&&o===0?S=.5/n:u===i&&l===Math.PI&&(S=-.5/n);for(let C=0;C<=n;C++){const A=C/n;d.x=-e*Math.cos(r+A*s)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(r+A*s)*Math.sin(o+v*a),p.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),m.push(A+S,1-v),_.push(c++)}h.push(_)}for(let u=0;u<i;u++)for(let _=0;_<n;_++){const v=h[u][_+1],S=h[u][_],C=h[u+1][_],A=h[u+1][_+1];(u!==0||o>0)&&g.push(v,S,A),(u!==i-1||l<Math.PI)&&g.push(S,C,A)}this.setIndex(g),this.setAttribute("position",new mn(p,3)),this.setAttribute("normal",new mn(x,3)),this.setAttribute("uv",new mn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class sh extends Yi{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],h=new k,d=new k,f=new k;for(let g=0;g<=i;g++)for(let p=0;p<=r;p++){const x=p/r*s,m=g/i*Math.PI*2;d.x=(e+n*Math.cos(m))*Math.cos(x),d.y=(e+n*Math.cos(m))*Math.sin(x),d.z=n*Math.sin(m),a.push(d.x,d.y,d.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),c.push(p/r),c.push(g/i)}for(let g=1;g<=i;g++)for(let p=1;p<=r;p++){const x=(r+1)*g+p-1,m=(r+1)*(g-1)+p-1,u=(r+1)*(g-1)+p,_=(r+1)*g+p;o.push(x,m,_),o.push(m,u,_)}this.setIndex(o),this.setAttribute("position",new mn(a,3)),this.setAttribute("normal",new mn(l,3)),this.setAttribute("uv",new mn(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ze extends nc{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mx,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class N0 extends pn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class Rb extends N0{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const dd=new Vt,Y_=new k,q_=new k;class Cb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.map=null,this.mapPass=null,this.matrix=new Vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new L0,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Y_.setFromMatrixPosition(e.matrixWorld),n.position.copy(Y_),q_.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(q_),n.updateMatrixWorld(),dd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(dd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class bb extends Cb{constructor(){super(new Nx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pb extends N0{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.shadow=new bb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Lb extends N0{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:S0}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=S0);const gt=2.2,es=[-gt,0,gt],ts=-140,Gs=14,Db=34,Ib=12.5,Ub=.75,K_=gt*1.8,il=5,pd=7.5,Z_=1.7,Q_=2.6,Nb=.8,Fb=8,Ob=8,kb=20.5,Bb=4.3;function zb(t,e,n,i){const r=n-i,s=new Yi,o=[-t,0,n,-t,e,r,-t,0,r,t,0,n,t,e,r,t,0,r],a=[0,1,2,3,5,4,0,3,4,0,4,1,0,2,5,0,5,3,2,1,4,2,4,5];return s.setAttribute("position",new mn(o,3)),s.setIndex(a),s.computeVertexNormals(),s}class Vb{constructor(e,n={}){this.canvas=e,this.cb=n,this.raf=null,this._initThree(),this._buildWorld(),this.reset(),this._bindResize(),this.last=performance.now(),this._loop(this.last)}_initThree(){this.renderer=new Tb({canvas:this.canvas,antialias:!0}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=cx,this.scene=new Ab,this.scene.background=new Ge("#8fd0ff"),this.scene.fog=new I0("#bfe6ff",55,150),this.camera=new xi(62,1,.1,400),this.camera.position.set(0,8.8,13),this.camera.lookAt(0,.6,-20);const e=new Rb("#cfe9ff","#6b7a5a",1);this.scene.add(e);const n=new Pb("#fff6e0",1.7);n.position.set(-14,30,8),n.castShadow=!0,n.shadow.mapSize.set(1024,1024),n.shadow.camera.left=-30,n.shadow.camera.right=30,n.shadow.camera.top=30,n.shadow.camera.bottom=-30,n.shadow.camera.far=90,this.scene.add(n),this.scene.add(new Lb("#bcd4ff",.55))}_buildWorld(){const e=this.scene,n=new Oi(300,32,16),i=new Gr({side:Pn,uniforms:{top:{value:new Ge("#1e78d8")},bot:{value:new Ge("#bfe9ff")}},vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`varying vec3 vP; uniform vec3 top; uniform vec3 bot;
        void main(){ float h = clamp((vP.y/300.0)*0.5+0.5,0.0,1.0); gl_FragColor = vec4(mix(bot,top,h),1.0);} `});e.add(new ve(n,i));const r=new ve(new Oi(14,24,24),new P0({color:"#ffe6ad"}));r.position.set(-30,24,-180),e.add(r);const s=new ze({color:"#232a3a",roughness:1}),o=new ve(new Sa(400,400),s);o.rotation.x=-Math.PI/2,o.position.set(0,-.02,-100),o.receiveShadow=!0,e.add(o);const a=new ze({color:"#3a3d47",roughness:1}),l=new ve(new Sa(K_*2,400),a);l.rotation.x=-Math.PI/2,l.position.set(0,0,-100),l.receiveShadow=!0,e.add(l);const c=new ze({color:"#c7cfdd",metalness:.8,roughness:.35});for(const A of[-gt*1.5,-gt*.5,gt*.5,gt*1.5]){const T=new ve(new Xe(.18,.16,400),c);T.position.set(A,.08,-100),e.add(T)}this.sleepers=[];const h=new ze({color:"#5b4632",roughness:1}),d=new Xe(K_*2,.16,.6);this._sleeperSpacing=2.4,this._sleeperCount=70;for(let A=0;A<this._sleeperCount;A++){const T=new ve(d,h);T.position.set(0,.02,-A*this._sleeperSpacing+Gs),T.receiveShadow=!0,e.add(T),this.sleepers.push(T)}this.decor=[],this._decorSpan=260;const f=["#3b4a6b","#4a3b5f","#2f5a52","#5f4a3b","#404a5c"].map(A=>new ze({color:A,roughness:.85})),g=new ze({color:"#ffd98a",emissive:"#ffcf6e",emissiveIntensity:.8,roughness:.5}),p=new ze({color:"#6b4a2f",roughness:1}),x=new ze({color:"#2f7d4f",roughness:1}),m=new ze({color:"#7a8290",metalness:.6,roughness:.5}),u=new ze({color:"#fff2c0",emissive:"#ffe08a",emissiveIntensity:1}),_=(A,T)=>{const b=new Dt,H=8+T%5*4,y=4+T%3*1.5,E=4+(T>>1)%3*1.5,F=new ve(new Xe(y,H,E),f[T%f.length]);F.position.y=H/2,F.castShadow=!0,b.add(F);const N=3,W=Math.max(3,Math.floor(H/2.5));for(let $=0;$<W;$++)for(let V=0;V<N;V++){if(($+V+T)%4===0)continue;const K=new ve(new Xe(.7,1,.1),g);K.position.set((V-(N-1)/2)*(y/N)*.8,1.6+$*(H/W)*.9,(A<0?E/2:-E/2)+(A<0?.05:-.05)),b.add(K)}return b},v=()=>{const A=new Dt,T=new ve(new Cr(.25,.35,2.2,6),p);T.position.y=1.1,T.castShadow=!0,A.add(T);const b=new ve(new U0(1.6,3.4,8),x);return b.position.y=3.4,b.castShadow=!0,A.add(b),A},S=()=>{const A=new Dt,T=new ve(new Cr(.1,.12,5,6),m);T.position.y=2.5,A.add(T);const b=new ve(new Oi(.28,10,10),u);return b.position.y=5,A.add(b),A};let C=1;for(let A of[-1,1])for(let T=0;T<26;T++){C=C*1103515245+12345&2147483647;const b=C%5;let H,y;b<3?(H=_(A,C),y=A*(9+C%4)):b===3?(H=v(),y=A*(6.5+C%3)):(H=S(),y=A*5.2),H.position.set(y,0,-(T/26)*this._decorSpan+Gs-Math.random()*4),e.add(H),this.decor.push({obj:H,side:A,baseX:y})}this._geo={coin:new Cr(.55,.55,.16,20),train:new Xe(gt*.92,3.4,22),barrier:new Xe(gt*.92,1.1,.7),lowbar:new Xe(gt*.92,.5,.7),wheel:new Cr(.45,.45,.35,16),spoke:new Xe(.12,.82,.12)},this._mat={coin:new ze({color:"#ffcf33",metalness:.7,roughness:.3,emissive:"#7a5a00",emissiveIntensity:.3}),train:new ze({color:"#f4c518",metalness:.3,roughness:.45}),trainRoof:new ze({color:"#fbe9a0",roughness:.6}),trainWin:new ze({color:"#123",emissive:"#2a6a99",emissiveIntensity:.4}),barrier:new ze({color:"#f5a623",roughness:.6}),lowbar:new ze({color:"#9aa4b2",metalness:.6,roughness:.4}),wheel:new ze({color:"#2b2f36",metalness:.6,roughness:.5}),wheelSpoke:new ze({color:"#8b939d",metalness:.7,roughness:.4}),sideTrain:new ze({color:"#d94f4f",metalness:.3,roughness:.5}),loco:new ze({color:"#3a86ff",metalness:.3,roughness:.45}),trainBlock:new ze({color:"#5b626e",metalness:.4,roughness:.6}),rampPlank:new ze({color:"#ff9f1c",metalness:.4,roughness:.5,side:ar}),driverSkin:new ze({color:"#e8b98f",roughness:.8}),driverShirt:new ze({color:"#22406a",roughness:.7}),driverCap:new ze({color:"#1e2b45",roughness:.7}),magnet:new ze({color:"#e23b3b",metalness:.5,roughness:.4,emissive:"#5a0000",emissiveIntensity:.4}),magnetTip:new ze({color:"#d0d6de",metalness:.85,roughness:.3}),boots:new ze({color:"#7a4a26",roughness:.7}),bootsWing:new ze({color:"#eaf2ff",emissive:"#bcd4ff",emissiveIntensity:.5,roughness:.4})},this._buildSideTrains(),this._buildPlayer()}_makeTrainMesh(e=this._mat.train,n=22,{loco:i=!1,ramp:r=!1}={}){const s=new Dt,o=3.5,a=n/2,l=r?n-il:n,c=r?-il/2:0,h=c+l/2,d=new ve(new Xe(gt*.92,3.4,l),e);d.position.set(0,1.7,c),d.castShadow=!0,s.add(d);const f=new ve(new Xe(gt*.94,.4,l),this._mat.trainRoof);f.position.set(0,3.45,c),s.add(f);const g=Math.floor(l/2.4);for(let x=-g;x<=g;x++){const m=new ve(new Xe(gt*.94+.02,.9,1.6),this._mat.trainWin);m.position.set(0,2.1,c+x*2.2),Math.abs(m.position.z-c)<l/2-1&&s.add(m)}if(r){const x=new ve(zb(gt*.46,o,a,il),this._mat.rampPlank);x.castShadow=!0,x.receiveShadow=!0,s.add(x)}if(i){const x=new ve(new Xe(gt*.82,1.1,.4),e);x.position.set(0,4.1,a-.35),s.add(x);for(const v of[-gt*.39,gt*.39]){const S=new ve(new Xe(.12,1.1,1.9),e);S.position.set(v,4.1,a-1.15),s.add(S)}const m=new ve(new Xe(.64,.8,.46),this._mat.driverShirt);m.position.set(0,4.4,a-1.05),s.add(m);const u=new ve(new Oi(.29,14,14),this._mat.driverSkin);u.position.set(0,5.05,a-1),u.castShadow=!0,s.add(u);const _=new ve(new Oi(.31,14,8,0,Math.PI*2,0,Math.PI/2),this._mat.driverCap);_.position.set(0,5.12,a-1),s.add(_)}const p=[];for(const x of[-gt*.42,gt*.42])for(let m=c-l/2+3;m<=h-2;m+=4){const u=new Dt,_=new ve(this._geo.wheel,this._mat.wheel);_.rotation.z=Math.PI/2;const v=new ve(this._geo.spoke,this._mat.wheelSpoke);u.add(_,v),u.position.set(x,.5,m),s.add(u),p.push(u)}return{grp:s,wheels:p}}_buildSideTrains(){this.sideTrains=[],this._sideSpan=220;const e=new ze({color:"#c7cfdd",metalness:.8,roughness:.35});for(const n of[-1,1]){const i=n*13;for(const r of[-.7,.7]){const s=new ve(new Xe(.16,.14,400),e);s.position.set(i+r,.07,-100),this.scene.add(s)}for(let r=0;r<2;r++){const{grp:s,wheels:o}=this._makeTrainMesh(this._mat.sideTrain,34),a=Gs-r*(this._sideSpan/2)-n*30;s.position.set(i,0,a),this.scene.add(s),this.sideTrains.push({mesh:s,wheels:o,baseX:i,z:a,speed:1.7})}}}_buildPlayer(){const e=new Dt,n=new ze({color:"#f6cfa8",roughness:.8}),i=new ze({color:"#22d3ee",roughness:.6}),r=new ze({color:"#22406a",roughness:.8}),s=new ze({color:"#ef4444",roughness:.7}),o=new ve(new Xe(.9,1.1,.55),i);o.position.y=1.55,o.castShadow=!0,e.add(o);const a=new ve(new Oi(.42,16,16),n);a.position.y=2.45,a.castShadow=!0,e.add(a);const l=new ve(new Oi(.44,16,12,0,Math.PI*2,0,Math.PI/2),s);l.position.y=2.5,e.add(l);const c=new ve(new Xe(.5,.08,.4),s);c.position.set(0,2.5,.42),e.add(c);const h=new Xe(.24,.9,.24);this.armL=new Dt,this.armR=new Dt;const d=new ve(h,i);d.position.y=-.45,d.castShadow=!0;const f=new ve(h,i);f.position.y=-.45,f.castShadow=!0,this.armL.add(d),this.armR.add(f),this.armL.position.set(-.58,2,0),this.armR.position.set(.58,2,0),e.add(this.armL,this.armR);const g=new Xe(.3,1,.3);this.legL=new Dt,this.legR=new Dt;const p=new ve(g,r);p.position.y=-.5,p.castShadow=!0;const x=new ve(g,r);x.position.y=-.5,x.castShadow=!0,this.legL.add(p),this.legR.add(x),this.legL.position.set(-.22,1,0),this.legR.position.set(.22,1,0),e.add(this.legL,this.legR),this.heldMagnet=new Dt;const m=new ve(new sh(.2,.08,10,16,Math.PI),this._mat.magnet);m.rotation.z=Math.PI,this.heldMagnet.add(m);for(const u of[-.2,.2]){const _=new ve(new Cr(.08,.08,.14,10),this._mat.magnetTip);_.position.set(u,-.07,0),this.heldMagnet.add(_)}this.heldMagnet.position.set(0,-.95,0),this.heldMagnet.visible=!1,this.armR.add(this.heldMagnet),this.boots=[];for(const u of[this.legL,this.legR]){const _=new Dt,v=new ve(new Xe(.38,.32,.6),this._mat.boots);v.position.set(0,-.15,.12),_.add(v);const S=new ve(new Xe(.4,.4,.4),this._mat.boots);S.position.set(0,.12,-.02),_.add(S);for(const C of[-.24,.24]){const A=new ve(new Xe(.06,.3,.36),this._mat.bootsWing);A.position.set(C,.12,-.05),A.rotation.z=C>0?-.5:.5,_.add(A)}_.position.set(0,-1,0),_.visible=!1,u.add(_),this.boots.push(_)}this.player=e,this.playerTorso=o,this.scene.add(e),this._buildPolice()}_buildPolice(){const e=new Dt,n=new ze({color:"#e8b98f",roughness:.8}),i=new ze({color:"#4a7d4f",roughness:.7}),r=new ze({color:"#3a5c3f",roughness:.8}),s=new ze({color:"#2f5233",roughness:.7}),o=new ve(new Xe(1.05,1.2,.62),i);o.position.y=1.6,o.castShadow=!0,e.add(o);const a=new ve(new Oi(.46,16,16),n);a.position.y=2.55,a.castShadow=!0,e.add(a);const l=new ve(new Oi(.48,16,12,0,Math.PI*2,0,Math.PI/2),s);l.position.y=2.6,e.add(l);const c=new ve(new Xe(.55,.08,.42),s);c.position.set(0,2.6,.46),e.add(c);const h=new Xe(.28,.95,.28);this.pArmL=new Dt,this.pArmR=new Dt;const d=new ve(h,i);d.position.y=-.47,d.castShadow=!0;const f=new ve(h,i);f.position.y=-.47,f.castShadow=!0,this.pArmL.add(d),this.pArmR.add(f),this.pArmL.position.set(-.68,2.05,0),this.pArmR.position.set(.68,2.05,0),e.add(this.pArmL,this.pArmR);const g=new Xe(.34,1.05,.34);this.pLegL=new Dt,this.pLegR=new Dt;const p=new ve(g,r);p.position.y=-.52,p.castShadow=!0;const x=new ve(g,r);x.position.y=-.52,x.castShadow=!0,this.pLegL.add(p),this.pLegR.add(x),this.pLegL.position.set(-.26,1.05,0),this.pLegR.position.set(.26,1.05,0),e.add(this.pLegL,this.pLegR),this.police=e,this.scene.add(e)}reset(){var e,n;if(this.targetLane=1,this.laneX=0,this.y=0,this.vy=0,this.groundY=0,this.grounded=!0,this.rolling=0,this.speed=20,this.dist=0,this.score=0,this.coins=0,this.spawnTimer=0,this.running=!1,this.gameOver=!1,this.time=0,this.shake=0,this.policeX=0,this.policeZ=pd,this.stumbleT=0,this.caught=!1,this.caughtT=0,this._over=!1,this.crashType=null,this.magnetT=0,this.bootsT=0,(n=(e=this.cb).onPower)==null||n.call(e,0,0),this.items)for(const i of this.items)this.scene.remove(i.mesh);this.items=[],this.player&&(this.player.position.set(0,0,0),this.player.rotation.set(0,0,0),this.player.scale.y=1),this.police&&(this.police.position.set(0,0,pd),this.police.rotation.set(0,0,0))}_bindResize(){this.resize=()=>{const e=window.innerWidth,n=window.innerHeight;this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.setSize(e,n),this.camera.aspect=e/n,this.camera.updateProjectionMatrix()},this.resize(),window.addEventListener("resize",this.resize)}destroy(){this.raf&&cancelAnimationFrame(this.raf),window.removeEventListener("resize",this.resize),this.renderer.dispose()}start(){this.reset(),this.running=!0,this.last=performance.now(),this.raf||this._loop(this.last)}moveLeft(){this.running&&this.stumbleT<=0&&(this.targetLane=Math.max(0,this.targetLane-1))}moveRight(){this.running&&this.stumbleT<=0&&(this.targetLane=Math.min(2,this.targetLane+1))}setLane(e){this.running&&this.stumbleT<=0&&(this.targetLane=Math.max(0,Math.min(2,e)))}jump(){this.running&&this.stumbleT<=0&&this.grounded&&this.rolling<=0&&(this.vy=this.bootsT>0?kb:Ib)}roll(){this.running&&this.stumbleT<=0&&this.grounded&&(this.rolling=Ub,this.vy=0)}_spawn(){const e=Math.random(),n=Math.floor(Math.random()*3),i=this.time>25?Math.min(.05,.012+(this.time-25)*8e-4):0;if(Math.random()<i){this._addPower(n,Math.random()<.5?"magnet":"boots");return}if(e<.06)this._addObstacle(n,"train",ts,{climb:!0,ramp:!0}),this._addObstacle(n,"train",ts-22,{climb:!0,ramp:!1}),this._addRoofCoins(n,ts);else if(e<.55){const r=["barrier","train","lowbar"],s=r[Math.floor(Math.random()*r.length)];let o={};if(s==="train"){const a=Math.random();a<.18?o={moving:!0}:a<.3&&(o={climb:!0})}this._addObstacle(n,s,ts,o),s==="train"&&Math.random()<.5&&this._addRoofCoins(n,ts)}else{const r=4+Math.floor(Math.random()*4);for(let s=0;s<r;s++)this._addCoin(n,ts-s*2.6)}}_addRoofCoins(e,n){for(let i=-2;i<=2;i++)this._addCoin(e,n+i*3,Bb)}_addCoin(e,n,i=1.1){const r=new ve(this._geo.coin,this._mat.coin);r.rotation.x=Math.PI/2,r.position.set(es[e],i,n),r.castShadow=!0,this.scene.add(r),this.items.push({mesh:r,type:"coin",lane:e,z:n,zHalf:.4,baseY:i})}_addPower(e,n,i=ts){const r=new Dt;if(n==="magnet"){const s=new ve(new sh(.55,.2,12,20,Math.PI),this._mat.magnet);s.rotation.z=Math.PI,s.position.y=.1,r.add(s);for(const o of[-.55,.55]){const a=new ve(new Cr(.2,.2,.35,12),this._mat.magnetTip);a.position.set(o,-.17,0),r.add(a)}}else{const s=new ve(new Xe(.5,.3,1),this._mat.boots);s.position.set(0,-.25,.15),r.add(s);const o=new ve(new Xe(.5,.8,.5),this._mat.boots);o.position.set(0,.25,-.15),r.add(o);for(const a of[-.32,.32]){const l=new ve(new Xe(.08,.4,.5),this._mat.bootsWing);l.position.set(a,.1,-.1),l.rotation.z=a>0?-.5:.5,r.add(l)}}r.position.set(es[e],1.5,i),r.traverse(s=>{s.isMesh&&(s.castShadow=!0)}),this.scene.add(r),this.items.push({mesh:r,type:"power",kind:n,lane:e,z:i,zHalf:.7})}_addObstacle(e,n,i=ts,r={}){const{moving:s=!1,climb:o=!1,ramp:a=o}=r;let l,c,h,d;if(n==="train"){const g=s?this._mat.loco:o?this._mat.train:this._mat.trainBlock,p=this._makeTrainMesh(g,22,{loco:s,ramp:o&&a});l=p.grp,d=p.wheels,c=11,h="top"}else if(n==="barrier")l=new ve(this._geo.barrier,this._mat.barrier),l.position.y=.55,l.castShadow=!0,c=.5,h="jump";else{const g=new Dt,p=new ve(this._geo.lowbar,this._mat.lowbar);p.position.y=2.1,p.castShadow=!0,g.add(p);for(const x of[-gt*.42,gt*.42]){const m=new ve(new Xe(.18,2.3,.18),this._mat.lowbar);m.position.set(x,1.15,0),g.add(m)}l=g,c=.4,h="roll"}l.position.x=es[e],l.position.z=i,this.scene.add(l);const f=n==="train"&&s?1.35:1;this.items.push({mesh:l,type:"obs",kind:n,lane:e,z:i,zHalf:c,clear:h,wheels:d,roll:f,climb:n==="train"&&o,topY:n==="train"?3.5:0})}_update(e){var l,c,h,d,f,g;this.time+=e,this.speed+=e*.32;const n=this.speed*e;if(this.dist+=n,this.score+=n*1.2,(c=(l=this.cb).onScore)==null||c.call(l,Math.floor(this.score),this.coins),this.laneX+=(this.targetLane-1-this.laneX)*Math.min(1,e*13),this.rolling>0&&(this.rolling-=e),this.stumbleT>0&&(this.stumbleT-=e),this.shake>0&&(this.shake-=e),this.magnetT>0||this.bootsT>0){const p=this.magnetT,x=this.bootsT;this.magnetT>0&&(this.magnetT=Math.max(0,this.magnetT-e)),this.bootsT>0&&(this.bootsT=Math.max(0,this.bootsT-e)),(p>0!=this.magnetT>0||x>0!=this.bootsT>0)&&((d=(h=this.cb).onPower)==null||d.call(h,this.magnetT,this.bootsT))}this.stumbleT<=0&&(this.policeZ+=(pd-this.policeZ)*e*.12),this.spawnTimer-=e;const i=Math.max(.5,1.2-this.time*.006);this.spawnTimer<=0&&(this._spawn(),this.spawnTimer=i);for(const p of this.sleepers)p.position.z+=n,p.position.z>Gs&&(p.position.z-=this._sleeperCount*this._sleeperSpacing);for(const p of this.decor)p.obj.position.z+=n,p.obj.position.z>Gs+6&&(p.obj.position.z-=this._decorSpan);for(const p of this.sideTrains){const x=n*p.speed;p.z+=x,p.mesh.position.z=p.z;for(const m of p.wheels)m.rotation.x+=x/.45;p.z>Gs+20&&(p.z-=this._sideSpan)}const r=this.laneX*gt,s=this.magnetT>0;for(const p of this.items){const x=p.type==="obs"&&p.kind==="train"?n*p.roll:n;if(p.z+=x,p.mesh.position.z=p.z,p.wheels)for(const m of p.wheels)m.rotation.x+=x/.45;p.type==="coin"?(p.mesh.rotation.z+=e*6,s&&!p.taken&&p.z>-20&&p.z<8?(p.mesh.position.x+=(r-p.mesh.position.x)*Math.min(1,e*9),p.mesh.position.y+=(this.y+.6-p.mesh.position.y)*Math.min(1,e*9)):(p.mesh.position.x+=(es[p.lane]-p.mesh.position.x)*Math.min(1,e*6),p.mesh.position.y=p.baseY+Math.sin(this.time*4+p.z)*.12)):p.type==="power"&&(p.mesh.rotation.y+=e*2.2,p.mesh.position.y=1.5+Math.sin(this.time*3+p.z)*.18)}let o=0;for(const p of this.items)if(!(p.type!=="obs"||!(Math.abs(es[p.lane]-r)<gt*.55))&&p.kind==="train"&&Math.abs(p.z)<p.zHalf){const m=p.z+p.zHalf;if(this.y>=p.topY-.5)o=Math.max(o,p.topY);else if(p.climb&&m<=il)o=Math.max(o,p.topY*Math.max(0,m/il));else if(!p.climb&&m<3){this._crash("front");return}else if(!p.hit){if(p.hit=!0,this.policeZ-Q_<=Z_){this._crash("side");return}this._stumble(p.lane,r)}}this.groundY=o,this.vy===0&&o>this.y?this.y=o:(this.vy-=Db*e,this.y+=this.vy*e,this.y<=o&&(this.y=o,this.vy=0)),this.grounded=this.y<=o+.05;const a=p=>{var x,m;p.taken=!0,this.coins+=1,this.score+=15,(m=(x=this.cb).onScore)==null||m.call(x,Math.floor(this.score),this.coins)};for(const p of this.items){if(p.type==="coin"){if(p.taken)continue;if(s&&p.z>-20&&p.z<8){const u=p.mesh.position.x-r,_=p.mesh.position.y-(this.y+.6);u*u+_*_+p.z*p.z<4&&a(p)}else{const u=Math.abs(p.z)<p.zHalf+.6,_=Math.abs(es[p.lane]-r)<gt*.55;u&&_&&Math.abs(this.y-p.mesh.position.y)<1.4&&a(p)}continue}const x=Math.abs(p.z)<p.zHalf+.6,m=Math.abs(es[p.lane]-r)<gt*.55;if(!(!x||!m)){if(p.type==="power")!p.taken&&Math.abs(this.y-p.mesh.position.y)<1.8&&(p.taken=!0,p.kind==="magnet"?this.magnetT=Fb:this.bootsT=Ob,(g=(f=this.cb).onPower)==null||g.call(f,this.magnetT,this.bootsT));else if(p.kind==="barrier"){if(!p.hit&&!(this.y>1.3)){this._crash("front");return}p.hit=!0}else if(p.kind==="lowbar"){if(!p.hit&&!(this.rolling>0)&&this.y<2.6){this._crash("front");return}p.hit=!0}}}this.items=this.items.filter(p=>{const x=p.z<Gs&&!p.taken;return x||this.scene.remove(p.mesh),x}),this._animatePlayer(e)}_animatePlayer(e){const n=this.player;if(n.position.x+=(this.laneX*gt-n.position.x)*Math.min(1,e*13),n.position.y=this.y,this.stumbleT>0){n.rotation.x+=(1.45-n.rotation.x)*Math.min(1,e*14),n.rotation.z+=(0-n.rotation.z)*Math.min(1,e*14),n.scale.y+=(.7-n.scale.y)*Math.min(1,e*14),this.legL.rotation.x=.5,this.legR.rotation.x=.3,this.armL.rotation.x=.4,this.armR.rotation.x=.6;return}const i=this.rolling>0,r=i?.42:1;n.scale.y+=(r-n.scale.y)*Math.min(1,e*16),n.rotation.x+=((i?.95:0)-n.rotation.x)*Math.min(1,e*16),n.rotation.z+=((this.targetLane-1-this.laneX)*-.4-n.rotation.z)*Math.min(1,e*10);const s=!this.grounded;if(i)this.legL.rotation.x=.15,this.legR.rotation.x=.15,this.armL.rotation.x=.1,this.armR.rotation.x=.1;else{const o=s?.5:Math.sin(this.time*15)*.9;this.legL.rotation.x=o,this.legR.rotation.x=-o,this.armL.rotation.x=-o,this.armR.rotation.x=o}this.heldMagnet.visible=this.magnetT>0,this.magnetT>0&&(this.armR.rotation.x+=(-2.7-this.armR.rotation.x)*Math.min(1,e*12));for(const o of this.boots)o.visible=this.bootsT>0;this._animatePolice(e)}_animatePolice(e){if(!this.police)return;this.policeX+=(this.player.position.x-this.policeX)*Math.min(1,e*4),this.police.position.set(this.policeX,0,this.policeZ);const n=Math.sin(this.time*15+.6);this.pLegL.rotation.x=n,this.pLegR.rotation.x=-n,this.pArmL.rotation.x=-n*.8,this.pArmR.rotation.x=n*.8}_stumble(e,n){this.stumbleT=Nb,this.policeZ=Math.max(Z_,this.policeZ-Q_);const i=n<=es[e]?-1:1;this.targetLane=Math.max(0,Math.min(2,e+i)),this.vy=0,this.y=0,this.shake=.35}_crash(e){this.caught||(this.running=!1,this.gameOver=!0,this.caught=!0,this.caughtT=0,this.crashType=e,this.shake=.5,e==="side"&&(this.policeZ=Math.min(this.policeZ,3)))}_updateCaught(e){var i,r;this.caughtT+=e,this.policeX+=(this.player.position.x-this.policeX)*Math.min(1,e*9),this.policeZ+=(this.player.position.z+1.3-this.policeZ)*Math.min(1,e*5),this.police.position.set(this.policeX,this.player.position.y,this.policeZ),this.pArmL.rotation.x=-1.5,this.pArmR.rotation.x=-1.5;const n=Math.sin(this.caughtT*24)*.7;this.pLegL.rotation.x=n,this.pLegR.rotation.x=-n,this.player.rotation.x+=((this.crashType==="front"?.5:.2)-this.player.rotation.x)*Math.min(1,e*8),!this._over&&this.caughtT>.7&&(this._over=!0,(r=(i=this.cb).onGameOver)==null||r.call(i,Math.floor(this.score),this.coins))}_render(){this.shake>0?(this.camera.position.x=0+(Math.random()-.5)*this.shake*2,this.camera.position.y=8.8+(Math.random()-.5)*this.shake*2):(this.camera.position.x+=(0-this.camera.position.x)*.2,this.camera.position.y+=(8.8-this.camera.position.y)*.2),this.renderer.render(this.scene,this.camera)}_loop(e){let n=(e-this.last)/1e3;this.last=e,n>.05&&(n=.05),this.running?this._update(n):(this.shake>0&&(this.shake-=n),this.caught&&this._updateCaught(n)),this._render(),this.raf=requestAnimationFrame(i=>this._loop(i))}}var ic=typeof self<"u"?self:{};function Vx(t){e:{for(var e=["CLOSURE_FLAGS"],n=ic,i=0;i<e.length;i++)if((n=n[e[i]])==null){e=null;break e}e=n}return(t=e&&e[t])!=null&&t}function Ws(){throw Error("Invalid UTF8")}function J_(t,e){return e=String.fromCharCode.apply(null,e),t==null?e:t+e}let Qc,md;const Hb=typeof TextDecoder<"u";let Gb;const Wb=typeof TextEncoder<"u";function Hx(t){if(Wb)t=(Gb||(Gb=new TextEncoder)).encode(t);else{let n=0;const i=new Uint8Array(3*t.length);for(let r=0;r<t.length;r++){var e=t.charCodeAt(r);if(128>e)i[n++]=e;else{if(2048>e)i[n++]=e>>6|192;else{if(55296<=e&&57343>=e){if(56319>=e&&r<t.length){const s=t.charCodeAt(++r);if(56320<=s&&57343>=s){e=1024*(e-55296)+s-56320+65536,i[n++]=e>>18|240,i[n++]=e>>12&63|128,i[n++]=e>>6&63|128,i[n++]=63&e|128;continue}r--}e=65533}i[n++]=e>>12|224,i[n++]=e>>6&63|128}i[n++]=63&e|128}}t=n===i.length?i:i.subarray(0,n)}return t}var Wl,Gx=Vx(610401301),Xb=Vx(188588736);const ev=ic.navigator;function om(t){return!!Gx&&!!Wl&&Wl.brands.some(({brand:e})=>e&&e.indexOf(t)!=-1)}function Si(t){var e;return(e=ic.navigator)&&(e=e.userAgent)||(e=""),e.indexOf(t)!=-1}function ls(){return!!Gx&&!!Wl&&0<Wl.brands.length}function gd(){return ls()?om("Chromium"):(Si("Chrome")||Si("CriOS"))&&!(!ls()&&Si("Edge"))||Si("Silk")}function F0(t){return F0[" "](t),t}Wl=ev&&ev.userAgentData||null,F0[" "]=function(){};var $b=!ls()&&(Si("Trident")||Si("MSIE"));!Si("Android")||gd(),gd(),Si("Safari")&&(gd()||!ls()&&Si("Coast")||!ls()&&Si("Opera")||!ls()&&Si("Edge")||(ls()?om("Microsoft Edge"):Si("Edg/"))||ls()&&om("Opera"));var Wx={},ul=null;function jb(t){var e=t.length,n=3*e/4;n%3?n=Math.floor(n):"=.".indexOf(t[e-1])!=-1&&(n="=.".indexOf(t[e-2])!=-1?n-2:n-1);var i=new Uint8Array(n),r=0;return function(s,o){function a(g){for(;l<s.length;){var p=s.charAt(l++),x=ul[p];if(x!=null)return x;if(!/^[\s\xa0]*$/.test(p))throw Error("Unknown base64 encoding at char: "+p)}return g}Xx();for(var l=0;;){var c=a(-1),h=a(0),d=a(64),f=a(64);if(f===64&&c===-1)break;o(c<<2|h>>4),d!=64&&(o(h<<4&240|d>>2),f!=64&&o(d<<6&192|f))}}(t,function(s){i[r++]=s}),r!==n?i.subarray(0,r):i}function Xx(){if(!ul){ul={};for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],n=0;5>n;n++){var i=t.concat(e[n].split(""));Wx[n]=i;for(var r=0;r<i.length;r++){var s=i[r];ul[s]===void 0&&(ul[s]=r)}}}}var $x=typeof Uint8Array<"u",jx=!$b&&typeof btoa=="function";function tv(t){if(!jx){var e;e===void 0&&(e=0),Xx(),e=Wx[e];var n=Array(Math.floor(t.length/3)),i=e[64]||"";let l=0,c=0;for(;l<t.length-2;l+=3){var r=t[l],s=t[l+1],o=t[l+2],a=e[r>>2];r=e[(3&r)<<4|s>>4],s=e[(15&s)<<2|o>>6],o=e[63&o],n[c++]=a+r+s+o}switch(a=0,o=i,t.length-l){case 2:o=e[(15&(a=t[l+1]))<<2]||i;case 1:t=t[l],n[c]=e[t>>2]+e[(3&t)<<4|a>>4]+o+i}return n.join("")}for(e="",n=0,i=t.length-10240;n<i;)e+=String.fromCharCode.apply(null,t.subarray(n,n+=10240));return e+=String.fromCharCode.apply(null,n?t.subarray(n):t),btoa(e)}const nv=/[-_.]/g,Yb={"-":"+",_:"/",".":"="};function qb(t){return Yb[t]||""}function Yx(t){if(!jx)return jb(t);nv.test(t)&&(t=t.replace(nv,qb)),t=atob(t);const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}function rc(t){return $x&&t!=null&&t instanceof Uint8Array}let Kb;function Fh(){return Kb||(Kb=new Uint8Array(0))}var Ma={};let Zb;function qx(t){if(t!==Ma)throw Error("illegal external caller")}function _o(){return Zb||(Zb=new Nr(null,Ma))}function O0(t){qx(Ma);var e=t.g;return(e=e==null||rc(e)?e:typeof e=="string"?Yx(e):null)==null?e:t.g=e}var Nr=class{constructor(t,e){if(qx(e),this.g=t,t!=null&&t.length===0)throw Error("ByteString should be constructed with non-empty values")}h(){const t=O0(this);return t?new Uint8Array(t):Fh()}};function Kx(t,e){return Error(`Invalid wire type: ${t} (at position ${e})`)}function k0(){return Error("Failed to read varint, encoding is invalid.")}function Zx(t,e){return Error(`Tried to read past the end of the data ${e} > ${t}`)}function B0(t){if(typeof t=="string")return{buffer:Yx(t),P:!1};if(Array.isArray(t))return{buffer:new Uint8Array(t),P:!1};if(t.constructor===Uint8Array)return{buffer:t,P:!1};if(t.constructor===ArrayBuffer)return{buffer:new Uint8Array(t),P:!1};if(t.constructor===Nr)return{buffer:O0(t)||Fh(),P:!0};if(t instanceof Uint8Array)return{buffer:new Uint8Array(t.buffer,t.byteOffset,t.byteLength),P:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function z0(){return typeof BigInt=="function"}const Qb=typeof Uint8Array.prototype.slice=="function";let Qx,wt=0,Zt=0;function so(t){const e=0>t;let n=(t=Math.abs(t))>>>0;if(t=Math.floor((t-n)/4294967296),e){const[i,r]=G0(n,t);t=r,n=i}wt=n>>>0,Zt=t>>>0}function V0(t){const e=Qx||(Qx=new DataView(new ArrayBuffer(8)));e.setFloat32(0,+t,!0),Zt=0,wt=e.getUint32(0,!0)}function am(t,e){return 4294967296*e+(t>>>0)}function H0(t,e){const n=2147483648&e;return n&&(e=~e>>>0,(t=1+~t>>>0)==0&&(e=e+1>>>0)),t=am(t,e),n?-t:t}function oh(t,e){if(t>>>=0,2097151>=(e>>>=0))var n=""+(4294967296*e+t);else z0()?n=""+(BigInt(e)<<BigInt(32)|BigInt(t)):(t=(16777215&t)+6777216*(n=16777215&(t>>>24|e<<8))+6710656*(e=e>>16&65535),n+=8147497*e,e*=2,1e7<=t&&(n+=Math.floor(t/1e7),t%=1e7),1e7<=n&&(e+=Math.floor(n/1e7),n%=1e7),n=e+iv(n)+iv(t));return n}function iv(t){return t=String(t),"0000000".slice(t.length)+t}function Jx(){var t=wt,e=Zt;if(2147483648&e)if(z0())t=""+(BigInt(0|e)<<BigInt(32)|BigInt(t>>>0));else{const[n,i]=G0(t,e);t="-"+oh(n,i)}else t=oh(t,e);return t}function Oh(t){if(16>t.length)so(Number(t));else if(z0())t=BigInt(t),wt=Number(t&BigInt(4294967295))>>>0,Zt=Number(t>>BigInt(32)&BigInt(4294967295));else{const e=+(t[0]==="-");Zt=wt=0;const n=t.length;for(let i=e,r=(n-e)%6+e;r<=n;i=r,r+=6){const s=Number(t.slice(i,r));Zt*=1e6,wt=1e6*wt+s,4294967296<=wt&&(Zt+=Math.trunc(wt/4294967296),Zt>>>=0,wt>>>=0)}if(e){const[i,r]=G0(wt,Zt);wt=i,Zt=r}}}function G0(t,e){return e=~e,t?t=1+~t:e+=1,[t,e]}function W0(t,e){let n,i=0,r=0,s=0;const o=t.h;let a=t.g;do n=o[a++],i|=(127&n)<<s,s+=7;while(32>s&&128&n);for(32<s&&(r|=(127&n)>>4),s=3;32>s&&128&n;s+=7)n=o[a++],r|=(127&n)<<s;if(oo(t,a),128>n)return e(i>>>0,r>>>0);throw k0()}function X0(t){let e=0,n=t.g;const i=n+10,r=t.h;for(;n<i;){const s=r[n++];if(e|=s,(128&s)==0)return oo(t,n),!!(127&e)}throw k0()}function Ts(t){const e=t.h;let n=t.g,i=e[n++],r=127&i;if(128&i&&(i=e[n++],r|=(127&i)<<7,128&i&&(i=e[n++],r|=(127&i)<<14,128&i&&(i=e[n++],r|=(127&i)<<21,128&i&&(i=e[n++],r|=i<<28,128&i&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++])))))throw k0();return oo(t,n),r}function As(t){return Ts(t)>>>0}function lm(t){var e=t.h;const n=t.g,i=e[n],r=e[n+1],s=e[n+2];return e=e[n+3],oo(t,t.g+4),(i<<0|r<<8|s<<16|e<<24)>>>0}function cm(t){var e=lm(t);t=2*(e>>31)+1;const n=e>>>23&255;return e&=8388607,n==255?e?NaN:1/0*t:n==0?t*Math.pow(2,-149)*e:t*Math.pow(2,n-150)*(e+Math.pow(2,23))}function Jb(t){return Ts(t)}function _d(t,e,{ca:n=!1}={}){t.ca=n,e&&(e=B0(e),t.h=e.buffer,t.m=e.P,t.j=0,t.l=t.h.length,t.g=t.j)}function oo(t,e){if(t.g=e,e>t.l)throw Zx(t.l,e)}function e3(t,e){if(0>e)throw Error(`Tried to read a negative byte length: ${e}`);const n=t.g,i=n+e;if(i>t.l)throw Zx(e,t.l-n);return t.g=i,n}function t3(t,e){if(e==0)return _o();var n=e3(t,e);return t.ca&&t.m?n=t.h.subarray(n,n+e):(t=t.h,n=n===(e=n+e)?Fh():Qb?t.slice(n,e):new Uint8Array(t.subarray(n,e))),n.length==0?_o():new Nr(n,Ma)}var rv=[];function n3(t){var e=t.g;if(e.g==e.l)return!1;t.l=t.g.g;var n=As(t.g);if(e=n>>>3,!(0<=(n&=7)&&5>=n))throw Kx(n,t.l);if(1>e)throw Error(`Invalid field number: ${e} (at position ${t.l})`);return t.m=e,t.h=n,!0}function Mu(t){switch(t.h){case 0:t.h!=0?Mu(t):X0(t.g);break;case 1:oo(t=t.g,t.g+8);break;case 2:if(t.h!=2)Mu(t);else{var e=As(t.g);oo(t=t.g,t.g+e)}break;case 5:oo(t=t.g,t.g+4);break;case 3:for(e=t.m;;){if(!n3(t))throw Error("Unmatched start-group tag: stream EOF");if(t.h==4){if(t.m!=e)throw Error("Unmatched end-group tag");break}Mu(t)}break;default:throw Kx(t.h,t.l)}}function sc(t,e,n){const i=t.g.l,r=As(t.g),s=t.g.g+r;let o=s-i;if(0>=o&&(t.g.l=s,n(e,t,void 0,void 0,void 0),o=s-t.g.g),o)throw Error(`Message parsing ended unexpectedly. Expected to read ${r} bytes, instead read ${r-o} bytes, either the data ended unexpectedly or the message misreported its own length`);return t.g.g=s,t.g.l=i,e}function $0(t){var e=As(t.g),n=e3(t=t.g,e);if(t=t.h,Hb){var i,r=t;(i=md)||(i=md=new TextDecoder("utf-8",{fatal:!0})),e=n+e,r=n===0&&e===r.length?r:r.subarray(n,e);try{var s=i.decode(r)}catch(a){if(Qc===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),Qc=!0}catch{Qc=!1}}throw!Qc&&(md=void 0),a}}else{e=(s=n)+e,n=[];let a,l=null;for(;s<e;){var o=t[s++];128>o?n.push(o):224>o?s>=e?Ws():(a=t[s++],194>o||(192&a)!=128?(s--,Ws()):n.push((31&o)<<6|63&a)):240>o?s>=e-1?Ws():(a=t[s++],(192&a)!=128||o===224&&160>a||o===237&&160<=a||(192&(i=t[s++]))!=128?(s--,Ws()):n.push((15&o)<<12|(63&a)<<6|63&i)):244>=o?s>=e-2?Ws():(a=t[s++],(192&a)!=128||a-144+(o<<28)>>30||(192&(i=t[s++]))!=128||(192&(r=t[s++]))!=128?(s--,Ws()):(o=(7&o)<<18|(63&a)<<12|(63&i)<<6|63&r,o-=65536,n.push(55296+(o>>10&1023),56320+(1023&o)))):Ws(),8192<=n.length&&(l=J_(l,n),n.length=0)}s=J_(l,n)}return s}function i3(t){const e=As(t.g);return t3(t.g,e)}function kh(t,e,n){var i=As(t.g);for(i=t.g.g+i;t.g.g<i;)n.push(e(t.g))}var Jc=[];function sv(t){return t?/^\d+$/.test(t)?(Oh(t),new ov(wt,Zt)):null:eP||(eP=new ov(0,0))}var ov=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let eP;function av(t){return t?/^-?\d+$/.test(t)?(Oh(t),new lv(wt,Zt)):null:tP||(tP=new lv(0,0))}var lv=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let tP;function ah(t,e,n){for(;0<n||127<e;)t.g.push(127&e|128),e=(e>>>7|n<<25)>>>0,n>>>=7;t.g.push(e)}function oc(t,e){for(;127<e;)t.g.push(127&e|128),e>>>=7;t.g.push(e)}function Bh(t,e){if(0<=e)oc(t,e);else{for(let n=0;9>n;n++)t.g.push(127&e|128),e>>=7;t.g.push(1)}}function Xl(t,e){t.g.push(e>>>0&255),t.g.push(e>>>8&255),t.g.push(e>>>16&255),t.g.push(e>>>24&255)}function Ea(t,e){e.length!==0&&(t.l.push(e),t.h+=e.length)}function bi(t,e,n){oc(t.g,8*e+n)}function j0(t,e){return bi(t,e,2),e=t.g.end(),Ea(t,e),e.push(t.h),e}function Y0(t,e){var n=e.pop();for(n=t.h+t.g.length()-n;127<n;)e.push(127&n|128),n>>>=7,t.h++;e.push(n),t.h++}function zh(t,e,n){bi(t,e,2),oc(t.g,n.length),Ea(t,t.g.end()),Ea(t,n)}function um(t,e,n,i){n!=null&&(e=j0(t,e),i(n,t),Y0(t,e))}class Fa{constructor(e,n,i,r){this.g=e,this.h=n,this.l=i,this.pa=r}}function ai(t){return Array.prototype.slice.call(t)}function q0(t){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():t}var fr=q0(),cv=q0("0di"),vd=q0("2ex"),K0=fr?(t,e)=>{t[fr]|=e}:(t,e)=>{t.g!==void 0?t.g|=e:Object.defineProperties(t,{g:{value:e,configurable:!0,writable:!0,enumerable:!1}})},lh=fr?(t,e)=>{t[fr]&=~e}:(t,e)=>{t.g!==void 0&&(t.g&=~e)};function Sn(t,e,n){return n?t|e:t&~e}var Ht=fr?t=>0|t[fr]:t=>0|t.g,ct=fr?t=>t[fr]:t=>t.g,zt=fr?(t,e)=>(t[fr]=e,t):(t,e)=>(t.g!==void 0?t.g=e:Object.defineProperties(t,{g:{value:e,configurable:!0,writable:!0,enumerable:!1}}),t);function Oa(t){return K0(t,34),t}function nP(t,e){zt(e,-14591&(0|t))}function hm(t,e){zt(e,-14557&(34|t))}function r3(t){return(t=t>>14&1023)===0?536870912:t}var Z0,ac={},s3={};function uv(t){return!(!t||typeof t!="object"||t.Ja!==s3)}function Q0(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)&&t.constructor===Object}function J0(t,e,n){if(t!=null){if(typeof t=="string")t=t?new Nr(t,Ma):_o();else if(t.constructor!==Nr)if(rc(t))t=t.length?new Nr(n?t:new Uint8Array(t),Ma):_o();else{if(!e)throw Error();t=void 0}}return t}function ch(t,e,n){if(!Array.isArray(t)||t.length)return!1;const i=Ht(t);return!!(1&i)||!(!e||!(Array.isArray(e)?e.includes(n):e.has(n)))&&(zt(t,1|i),!0)}const hv=[];function gr(t){if(2&t)throw Error()}zt(hv,55),Z0=Object.freeze(hv);class uh{constructor(e,n,i){this.l=0,this.g=e,this.h=n,this.m=i}next(){if(this.l<this.g.length){const e=this.g[this.l++];return{done:!1,value:this.h?this.h.call(this.m,e):e}}return{done:!0,value:void 0}}[Symbol.iterator](){return new uh(this.g,this.h,this.m)}}let Ss,iP,rP;function o3(t,e){(e=Ss?e[Ss]:void 0)&&(t[Ss]=ai(e))}function a3(t,e){t.__closure__error__context__984382||(t.__closure__error__context__984382={}),t.__closure__error__context__984382.severity=e}function sP(){const t=Error();a3(t,"incident"),function(e){ic.setTimeout(()=>{throw e},0)}(t)}function fm(t){return a3(t=Error(t),"warning"),t}function Us(t){return t==null||typeof t=="number"?t:t==="NaN"||t==="Infinity"||t==="-Infinity"?Number(t):void 0}function l3(t){return t==null||typeof t=="boolean"?t:typeof t=="number"?!!t:void 0}Object.freeze(new class{}),Object.freeze(new class{});const oP=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Vh(t){const e=typeof t;return e==="number"?Number.isFinite(t):e==="string"&&oP.test(t)}function ka(t){if(t==null)return t;if(typeof t=="string"){if(!t)return;t=+t}return typeof t=="number"&&Number.isFinite(t)?0|t:void 0}function aP(t){if(t==null)return t;if(typeof t=="string"){if(!t)return;t=+t}return typeof t=="number"&&Number.isFinite(t)?t>>>0:void 0}function fv(t){return t[0]!=="-"&&(20>t.length||t.length===20&&184467>Number(t.substring(0,6)))}function c3(t){return t[0]==="-"?20>t.length||t.length===20&&-922337<Number(t.substring(0,7)):19>t.length||t.length===19&&922337>Number(t.substring(0,6))}function eg(t){return t=Math.trunc(t),Number.isSafeInteger(t)||(so(t),t=H0(wt,Zt)),t}function tg(t){var e=Math.trunc(Number(t));return Number.isSafeInteger(e)?String(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),c3(t)||(Oh(t),t=Jx()),t)}function hh(t){return t==null?t:Vh(t)?typeof t=="number"?eg(t):tg(t):void 0}function lc(t){if(typeof t!="string")throw Error();return t}function Ba(t){if(t!=null&&typeof t!="string")throw Error();return t}function ao(t){return t==null||typeof t=="string"?t:void 0}function ng(t,e,n,i){if(t!=null&&typeof t=="object"&&t.X===ac)return t;if(!Array.isArray(t))return n?2&i?(t=e[cv])?e=t:(Oa((t=new e).s),e=e[cv]=t):e=new e:e=void 0,e;let r=n=Ht(t);return r===0&&(r|=32&i),r|=2&i,r!==n&&zt(t,r),new e(t)}function lP(t,e,n){if(e){var i=!!i;if(!Vh(e=t))throw fm("int64");typeof e=="string"?i=tg(e):i?(i=Math.trunc(e),Number.isSafeInteger(i)?i=String(i):c3(e=String(i))?i=e:(so(i),i=Jx())):i=eg(e)}else i=hh(t);return typeof(n=(t=i)==null?n?0:void 0:t)=="string"&&(i=+n,Number.isSafeInteger(i))?i:n}let fh,ig,cP;function dh(t){switch(typeof t){case"boolean":return ig||(ig=[0,void 0,!0]);case"number":return 0<t?void 0:t===0?cP||(cP=[0,void 0]):[-t,void 0];case"string":return[0,t];case"object":return t}}function lo(t,e){return u3(t,e[0],e[1])}function u3(t,e,n){if(t==null&&(t=fh),fh=void 0,t==null){var i=96;n?(t=[n],i|=512):t=[],e&&(i=-16760833&i|(1023&e)<<14)}else{if(!Array.isArray(t))throw Error("narr");if(2048&(i=Ht(t)))throw Error("farr");if(64&i)return t;if(i|=64,n&&(i|=512,n!==t[0]))throw Error("mid");e:{const r=(n=t).length;if(r){const s=r-1;if(Q0(n[s])){if(1024<=(e=s-(+!!(512&(i|=256))-1)))throw Error("pvtlmt");i=-16760833&i|(1023&e)<<14;break e}}if(e){if(1024<(e=Math.max(e,r-(+!!(512&i)-1))))throw Error("spvt");i=-16760833&i|(1023&e)<<14}}}return zt(t,i),t}const uP={};let hP=function(){try{return F0(new class extends Map{constructor(){super()}}),!1}catch{return!0}}();class yd{constructor(){this.g=new Map}get(e){return this.g.get(e)}set(e,n){return this.g.set(e,n),this.size=this.g.size,this}delete(e){return e=this.g.delete(e),this.size=this.g.size,e}clear(){this.g.clear(),this.size=this.g.size}has(e){return this.g.has(e)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(e,n){return this.g.forEach(e,n)}[Symbol.iterator](){return this.entries()}}const fP=hP?(Object.setPrototypeOf(yd.prototype,Map.prototype),Object.defineProperties(yd.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),yd):class extends Map{constructor(){super()}};function dv(t){return t}function xd(t){if(2&t.N)throw Error("Cannot mutate an immutable Map")}var Ci=class extends fP{constructor(t,e,n=dv,i=dv){super();let r=Ht(t);r|=64,zt(t,r),this.N=r,this.U=e,this.S=n,this.Z=this.U?dP:i;for(let s=0;s<t.length;s++){const o=t[s],a=n(o[0],!1,!0);let l=o[1];e?l===void 0&&(l=null):l=i(o[1],!1,!0,void 0,void 0,r),super.set(a,l)}}oa(t=pv){if(this.size!==0)return this.Y(t)}Y(t=pv){const e=[],n=super.entries();for(var i;!(i=n.next()).done;)(i=i.value)[0]=t(i[0]),i[1]=t(i[1]),e.push(i);return e}clear(){xd(this),super.clear()}delete(t){return xd(this),super.delete(this.S(t,!0,!1))}entries(){var t=this.na();return new uh(t,pP,this)}keys(){return this.Ia()}values(){var t=this.na();return new uh(t,Ci.prototype.get,this)}forEach(t,e){super.forEach((n,i)=>{t.call(e,this.get(i),i,this)})}set(t,e){return xd(this),(t=this.S(t,!0,!1))==null?this:e==null?(super.delete(t),this):super.set(t,this.Z(e,!0,!0,this.U,!1,this.N))}Oa(t){const e=this.S(t[0],!1,!0);t=t[1],t=this.U?t===void 0?null:t:this.Z(t,!1,!0,void 0,!1,this.N),super.set(e,t)}has(t){return super.has(this.S(t,!1,!1))}get(t){t=this.S(t,!1,!1);const e=super.get(t);if(e!==void 0){var n=this.U;return n?((n=this.Z(e,!1,!0,n,this.ta,this.N))!==e&&super.set(t,n),n):e}}na(){return Array.from(super.keys())}Ia(){return super.keys()}[Symbol.iterator](){return this.entries()}};function dP(t,e,n,i,r,s){return t=ng(t,i,n,s),r&&(t=Gh(t)),t}function pv(t){return t}function pP(t){return[t,this.get(t)]}let mP;function mv(){return mP||(mP=new Ci(Oa([]),void 0,void 0,void 0,uP))}function rg(t,e,n,i,r){if(t!=null){if(Array.isArray(t))t=ch(t,void 0,0)?void 0:r&&2&Ht(t)?t:Hh(t,e,n,i!==void 0,r);else if(Q0(t)){const s={};for(let o in t)s[o]=rg(t[o],e,n,i,r);t=s}else t=e(t,i);return t}}function Hh(t,e,n,i,r){const s=i||n?Ht(t):0;i=i?!!(32&s):void 0;const o=ai(t);for(let a=0;a<o.length;a++)o[a]=rg(o[a],e,n,i,r);return n&&(o3(o,t),n(s,o)),o}function gP(t){return rg(t,sg,void 0,void 0,!1)}function sg(t){return t.X===ac?t.toJSON():t instanceof Ci?t.oa(gP):function(e){switch(typeof e){case"number":return isFinite(e)?e:String(e);case"boolean":return e?1:0;case"object":if(e)if(Array.isArray(e)){if(ch(e,void 0,0))return}else{if(rc(e))return tv(e);if(e instanceof Nr){const n=e.g;return n==null?"":typeof n=="string"?n:e.g=tv(n)}if(e instanceof Ci)return e.oa()}}return e}(t)}function dm(t,e,n=hm){if(t!=null){if($x&&t instanceof Uint8Array)return e?t:new Uint8Array(t);if(Array.isArray(t)){var i=Ht(t);return 2&i||(e&&(e=i===0||!!(32&i)&&!(64&i||!(16&i))),t=e?zt(t,-12293&(34|i)):Hh(t,dm,4&i?hm:n,!0,!0)),t}return t.X===ac?(n=t.s,t=2&(i=ct(n))?t:og(t,n,i,!0)):t instanceof Ci&&!(2&t.N)&&(n=Oa(t.Y(dm)),t=new Ci(n,t.U,t.S,t.Z)),t}}function og(t,e,n,i){return t=t.constructor,fh=e=h3(e,n,i),e=new t(e),fh=void 0,e}function h3(t,e,n){const i=n||2&e?hm:nP,r=!!(32&e);return t=function(s,o,a){const l=ai(s);var c=l.length;const h=256&o?l[c-1]:void 0;for(c+=h?-1:0,o=512&o?1:0;o<c;o++)l[o]=a(l[o]);if(h){o=l[o]={};for(const d in h)o[d]=a(h[d])}return o3(l,s),l}(t,e,s=>dm(s,r,i)),K0(t,32|(n?2:0)),t}function Gh(t){const e=t.s,n=ct(e);return 2&n?og(t,e,n,!1):t}function f3(t,e,n,i){return!(4&e)||n!=null}function Rs(t,e){return _r(t=t.s,ct(t),e)}function gv(t,e,n,i){if(!(0>(e=i+(+!!(512&e)-1))||e>=t.length||e>=n))return t[e]}function _r(t,e,n,i){if(n===-1)return null;const r=r3(e);if(!(n>=r)){var s=t.length;return i&&256&e&&(i=t[s-1][n])!=null?(gv(t,e,r,n)&&vd!=null&&(4<=(e=(t=rP??(rP={}))[vd]||0)||(t[vd]=e+1,sP())),i):gv(t,e,r,n)}return 256&e?t[t.length-1][n]:void 0}function _t(t,e,n,i){const r=t.s;let s=ct(r);return gr(s),At(r,s,e,n,i),t}function At(t,e,n,i,r){const s=r3(e);if(n>=s||r){let o=e;if(256&e)r=t[t.length-1];else{if(i==null)return o;r=t[s+(+!!(512&e)-1)]={},o|=256}return r[n]=i,n<s&&(t[n+(+!!(512&e)-1)]=void 0),o!==e&&zt(t,o),o}return t[n+(+!!(512&e)-1)]=i,256&e&&n in(t=t[t.length-1])&&delete t[n],e}function za(t,e,n,i,r){var s=2&e;let o=_r(t,e,n,r);Array.isArray(o)||(o=Z0);const a=!(2&i);i=!(1&i);const l=!!(32&e);let c=Ht(o);return c!==0||!l||s||a?1&c||(c|=1,zt(o,c)):(c|=33,zt(o,c)),s?(t=!1,2&c||(Oa(o),t=!!(4&c)),(i||t)&&Object.freeze(o)):(s=!!(2&c)||!!(2048&c),i&&s?(o=ai(o),i=1,l&&!a&&(i|=32),zt(o,i),At(t,e,n,o,r)):a&&32&c&&!s&&lh(o,32)),o}function Eu(t,e){t=t.s;let n=ct(t);const i=_r(t,n,e),r=Us(i);return r!=null&&r!==i&&At(t,n,e,r),r}function d3(t){t=t.s;let e=ct(t);const n=_r(t,e,1),i=J0(n,!0,!!(34&e));return i!=null&&i!==n&&At(t,e,1,i),i}function Zo(t,e,n){const i=t.s;let r=ct(i);const s=2&r?1:2;let o=p3(i,r,e);var a=Ht(o);if(f3(t,a,void 0)){(4&a||Object.isFrozen(o))&&(o=ai(o),a=vo(a,r),r=At(i,r,e,o));let l=t=0;for(;t<o.length;t++){const c=n(o[t]);c!=null&&(o[l++]=c)}l<t&&(o.length=l),a=Sn(a=m3(a,r),20,!0),a=Sn(a,4096,!1),a=Sn(a,8192,!1),zt(o,a),2&a&&Object.freeze(o)}return Sl(a)||(n=a,(a=(t=s===1||s===4&&!!(32&a))?Sn(a,2,!0):wa(a,r,!1))!==n&&zt(o,a),t&&Object.freeze(o)),s===2&&Sl(a)&&(o=ai(o),a=wa(a=vo(a,r),r,!1),zt(o,a),At(i,r,e,o)),o}function p3(t,e,n){return t=_r(t,e,n),Array.isArray(t)?t:Z0}function m3(t,e){return t===0&&(t=vo(t,e)),Sn(t,1,!0)}function Sl(t){return!!(2&t)&&!!(4&t)||!!(2048&t)}function g3(t){t=ai(t);for(let e=0;e<t.length;e++){const n=t[e]=ai(t[e]);Array.isArray(n[1])&&(n[1]=Oa(n[1]))}return t}function ph(t,e,n){{const a=t.s;let l=ct(a);if(gr(l),n==null)At(a,l,e);else{var i,r=Ht(n),s=r,o=!!(2&r)||Object.isFrozen(n);if((i=!o)&&(i=!1),f3(t,r))for(r=21,o&&(n=ai(n),s=0,r=wa(r=vo(r,l),l,!0)),t=0;t<n.length;t++)n[t]=lc(n[t]);i&&(n=ai(n),s=0,r=wa(r=vo(r,l),l,!0)),r!==s&&zt(n,r),At(a,l,e,n)}}}function pm(t,e,n,i){t=t.s;let r=ct(t);gr(r),At(t,r,e,(i==="0"?Number(n)===0:n===i)?void 0:n)}function cc(t,e,n,i){const r=ct(t);gr(r),t=za(t,r,e,2),i=n(i,!!(4&(e=Ht(t)))&&!!(4096&e)),t.push(i)}function _P(t){return t}function Sd(t,e){return ag(t=t.s,ct(t),eS)===e?e:-1}function ag(t,e,n){let i=0;for(let r=0;r<n.length;r++){const s=n[r];_r(t,e,s)!=null&&(i!==0&&(e=At(t,e,i)),i=s)}return i}function lg(t,e,n,i){let r=ct(t);gr(r);const s=_r(t,r,n,i);let o;if(s!=null&&s.X===ac)return(e=Gh(s))!==s&&At(t,r,n,e,i),e.s;if(Array.isArray(s)){const a=Ht(s);o=2&a?h3(s,a,!1):s,o=lo(o,e)}else o=lo(void 0,e);return o!==s&&At(t,r,n,o,i),o}function _3(t,e,n,i){t=t.s;let r=ct(t);const s=_r(t,r,n,i);return(e=ng(s,e,!1,r))!==s&&e!=null&&At(t,r,n,e,i),e}function et(t,e,n,i=!1){if((e=_3(t,e,n,i))==null)return e;t=t.s;let r=ct(t);if(!(2&r)){const s=Gh(e);s!==e&&At(t,r,n,e=s,i)}return e}function v3(t,e,n,i,r,s){var o=2,a=!!(2&e);o=a?1:o,r=!!r,s&&(s=!a),a=p3(t,e,i);var l=Ht(a);const c=!!(4&l);if(!c){var h=a,d=e;const f=!!(2&(l=m3(l,e)));f&&(d=Sn(d,2,!0));let g=!f,p=!0,x=0,m=0;for(;x<h.length;x++){const u=ng(h[x],n,!1,d);if(u instanceof n){if(!f){const _=!!(2&Ht(u.s));g&&(g=!_),p&&(p=_)}h[m++]=u}}m<x&&(h.length=m),l=Sn(l,4,!0),l=Sn(l,16,p),l=Sn(l,8,g),zt(h,l),f&&Object.freeze(h)}if(s&&!(8&l||!a.length&&(o===1||o===4&&32&l))){for(Sl(l)&&(a=ai(a),l=vo(l,e),e=At(t,e,i,a)),n=a,s=l,h=0;h<n.length;h++)(l=n[h])!==(d=Gh(l))&&(n[h]=d);s=Sn(s,8,!0),s=Sn(s,16,!n.length),zt(n,s),l=s}return Sl(l)||(n=l,(l=(s=o===1||o===4&&!!(32&l))?Sn(l,!a.length||16&l&&(!c||32&l)?2:2048,!0):wa(l,e,r))!==n&&zt(a,l),s&&Object.freeze(a)),o===2&&Sl(l)&&(a=ai(a),l=wa(l=vo(l,e),e,r),zt(a,l),At(t,e,i,a)),a}function Wr(t,e,n){t=t.s;const i=ct(t);return v3(t,i,e,n,!1,!(2&i))}function Re(t,e,n,i,r){return i==null&&(i=void 0),_t(t,n,i,r)}function Ml(t,e,n,i){i==null&&(i=void 0),t=t.s;let r=ct(t);gr(r),(n=ag(t,r,n))&&n!==e&&i!=null&&(r=At(t,r,n)),At(t,r,e,i)}function vo(t,e){return t=Sn(t,2,!!(2&e)),t=Sn(t,32,!0),Sn(t,2048,!1)}function wa(t,e,n){return 32&e&&n||(t=Sn(t,32,!1)),t}function mh(t,e,n,i){t=t.s;const r=ct(t);gr(r),e=v3(t,r,n,e,!0),n=i??new n,e.push(n),2&Ht(n.s)?lh(e,8):lh(e,16)}function wi(t,e){return ka(Rs(t,e))}function ji(t,e){return t??e}function Xt(t,e){return ji(Eu(t,e),0)}function dr(t,e){return ji(ao(Rs(t,e)),"")}function $l(t,e,n){if(n!=null&&typeof n!="boolean")throw t=typeof n,Error(`Expected boolean but got ${t!="object"?t:n?Array.isArray(n)?"array":t:"null"}: ${n}`);_t(t,e,n)}function pr(t,e,n){if(n!=null){if(typeof n!="number"||!Number.isFinite(n))throw fm("int32");n|=0}_t(t,e,n)}function Me(t,e,n){if(n!=null&&typeof n!="number")throw Error(`Value of float/double field must be a number, found ${typeof n}: ${n}`);_t(t,e,n)}function qi(t,e,n){e.g?e.m(t,e.g,e.h,n,!0):e.m(t,e.h,n,!0)}Ci.prototype.toJSON=void 0,Ci.prototype.Ja=s3;var xe=class{constructor(t,e){this.s=u3(t,e)}toJSON(){return y3(this,Hh(this.s,sg,void 0,void 0,!1),!0)}l(){var t=EL;return t.g?t.l(this,t.g,t.h,!0):t.l(this,t.h,t.defaultValue,!0)}clone(){const t=this.s;return og(this,t,ct(t),!1)}P(){return!!(2&Ht(this.s))}};function y3(t,e,n){var i=Xb?void 0:t.constructor.B;const r=ct(n?t.s:e);if(!(t=e.length))return e;let s,o;if(Q0(n=e[t-1])){e:{var a=n;let h={},d=!1;for(var l in a){let f=a[l];if(Array.isArray(f)){let g=f;(ch(f,i,+l)||uv(f)&&f.size===0)&&(f=null),f!=g&&(d=!0)}f!=null?h[l]=f:d=!0}if(d){for(var c in h){a=h;break e}a=null}}a!=n&&(s=!0),t--}for(l=+!!(512&r)-1;0<t&&(n=e[c=t-1],c-=l,n==null||ch(n,i,c)||uv(n)&&n.size===0);t--)o=!0;return(s||o)&&(e=Array.prototype.slice.call(e,0,t),a&&e.push(a)),e}function x3(t){return Array.isArray(t)?t[0]instanceof Fa?t:[CP,t]:[t,void 0]}function Va(t,e){if(Array.isArray(e)){var n=Ht(e);if(4&n)return e;for(var i=0,r=0;i<e.length;i++){const s=t(e[i]);s!=null&&(e[r++]=s)}return r<i&&(e.length=r),zt(e,-12289&(5|n)),2&n&&Object.freeze(e),e}}xe.prototype.X=ac,xe.prototype.toString=function(){return y3(this,this.s,!1).toString()};const _v=Symbol();function cg(t){let e=t[_v];if(!e){const n=M3(t),i=hg(t),r=i.l;e=r?(s,o)=>r(s,o,i):(s,o)=>{for(;n3(o)&&o.h!=4;){var a=o.m,l=i[a];if(!l){var c=i.ea;c&&(c=c[a])&&(l=i[a]=vP(c))}l&&l(o,s,a)||(a=(l=o).l,Mu(l),l.ia?l=void 0:(c=l.g.g-a,l.g.g=a,l=t3(l.g,c)),a=s,l&&(Ss||(Ss=Symbol()),(c=a[Ss])?c.push(l):a[Ss]=[l]))}n===S3||n===wu||n.j||(s[iP||(iP=Symbol())]=n)},t[_v]=e}return e}function vP(t){const e=(t=x3(t))[0].g;if(t=t[1]){const n=cg(t),i=hg(t).T;return(r,s,o)=>e(r,s,o,i,n)}return e}class Md{}let S3,wu;const El=Symbol();function yP(t,e,n){const i=n[1];let r;if(i){const s=i[El];r=s?s.T:dh(i[0]),t[e]=s??i}r&&r===ig?(t.g||(t.g=new Set)).add(e):n[0]&&(t.h||(t.h=new Set)).add(e)}function vv(t,e){return[t.l,!e||0<e[0]?void 0:e]}function M3(t){var e=t[El];if(e)return e;if(!(e=ug(t,t[El]=new Md,vv,vv,yP)).ea&&!e.h&&!e.g){let n=!0;for(let i in e)isNaN(i)||(n=!1);n?(dh(t[0])===ig?wu?e=wu:((e=new Md).T=dh(!0),e=wu=e):e=S3||(S3=new Md),e=t[El]=e):e.j=!0}return e}function xP(t,e,n){t[e]=n}function ug(t,e,n,i,r=xP){e.T=dh(t[0]);let s=0;var o=t[++s];o&&o.constructor===Object&&(e.ea=o,typeof(o=t[++s])=="function"&&(e.l=o,e.m=t[++s],o=t[++s]));const a={};for(;Array.isArray(o)&&typeof o[0]=="number"&&0<o[0];){for(var l=0;l<o.length;l++)a[o[l]]=o;o=t[++s]}for(l=1;o!==void 0;){let d;typeof o=="number"&&(l+=o,o=t[++s]);var c=void 0;if(o instanceof Fa?d=o:(d=bP,s--),d.pa){o=t[++s],c=t;var h=s;typeof o=="function"&&(o=o(),c[h]=o),c=o}for(h=l+1,typeof(o=t[++s])=="number"&&0>o&&(h-=o,o=t[++s]);l<h;l++){const f=a[l];r(e,l,c?i(d,c,f):n(d,f))}}return e}const yv=Symbol();function E3(t){let e=t[yv];if(!e){const n=Wh(t);e=(i,r)=>T3(i,r,n),t[yv]=e}return e}const mm=Symbol();function SP(t){return t.h}function MP(t,e){let n,i;const r=t.h;return(s,o,a)=>r(s,o,a,i||(i=Wh(e).T),n||(n=E3(e)))}function Wh(t){let e=t[mm];return e||(e=ug(t,t[mm]={},SP,MP),w3(t),e)}const gm=Symbol();function EP(t,e){const n=t.g;return e?(i,r,s)=>n(i,r,s,e):n}function wP(t,e,n){const i=t.g;let r,s;return(o,a,l)=>i(o,a,l,s||(s=hg(e).T),r||(r=cg(e)),n)}function hg(t){let e=t[gm];return e||(M3(t),e=ug(t,t[gm]={},EP,wP),w3(t),e)}function w3(t){gm in t&&El in t&&mm in t&&(t.length=0)}function xv(t,e){var n=t[e];if(n)return n;if((n=t.ea)&&(n=n[e])){var i=(n=x3(n))[0].h;if(n=n[1]){const r=E3(n),s=Wh(n).T;n=(n=t.m)?n(s,r):(o,a,l)=>i(o,a,l,s,r)}else n=i;return t[e]=n}}function T3(t,e,n){for(var i=ct(t),r=+!!(512&i)-1,s=t.length,o=512&i?1:0,a=s+(256&i?-1:0);o<a;o++){const l=t[o];if(l==null)continue;const c=o-r,h=xv(n,c);h&&h(e,l,c)}if(256&i){i=t[s-1];for(let l in i)r=+l,Number.isNaN(r)||(s=i[l])!=null&&(a=xv(n,r))&&a(e,s,r)}if(t=Ss?t[Ss]:void 0)for(Ea(e,e.g.end()),n=0;n<t.length;n++)Ea(e,O0(t[n])||Fh())}function jn(t,e){return new Fa(t,e,!1,!1)}function Ha(t,e){return new Fa(t,e,!0,!1)}function Xh(t,e){return new Fa(t,e,!1,!0)}function Yn(t,e,n){At(t,ct(t),e,n)}var TP=Xh(function(t,e,n,i,r){return t.h===2&&(t=sc(t,lo([void 0,void 0],i),r),gr(i=ct(e)),(r=_r(e,i,n))instanceof Ci?2&r.N?((r=r.Y()).push(t),At(e,i,n,r)):r.Oa(t):Array.isArray(r)?(2&Ht(r)&&At(e,i,n,r=g3(r)),r.push(t)):At(e,i,n,[t]),!0)},function(t,e,n,i,r){if(e instanceof Ci)e.forEach((s,o)=>{um(t,n,lo([o,s],i),r)});else if(Array.isArray(e))for(let s=0;s<e.length;s++){const o=e[s];Array.isArray(o)&&um(t,n,lo(o,i),r)}});function A3(t,e,n){e:if(e!=null){if(Vh(e)){if(typeof e=="string"){e=tg(e);break e}if(typeof e=="number"){e=eg(e);break e}}e=void 0}e!=null&&(typeof e=="string"&&av(e),e!=null&&(bi(t,n,0),typeof e=="number"?(t=t.g,so(e),ah(t,wt,Zt)):(n=av(e),ah(t.g,n.h,n.g))))}function R3(t,e,n){(e=ka(e))!=null&&e!=null&&(bi(t,n,0),Bh(t.g,e))}function C3(t,e,n){(e=l3(e))!=null&&(bi(t,n,0),t.g.g.push(e?1:0))}function b3(t,e,n){(e=ao(e))!=null&&zh(t,n,Hx(e))}function $h(t,e,n,i,r){um(t,n,e instanceof xe?e.s:Array.isArray(e)?lo(e,i):void 0,r)}function P3(t,e,n){(e=e==null||typeof e=="string"||rc(e)||e instanceof Nr?e:void 0)!=null&&zh(t,n,B0(e).buffer)}function L3(t,e,n){return(t.h===5||t.h===2)&&(e=za(e,ct(e),n,2,!1),t.h==2?kh(t,cm,e):e.push(cm(t.g)),!0)}var Qt,Fr=jn(function(t,e,n){if(t.h!==1)return!1;var i=t.g;t=lm(i);const r=lm(i);i=2*(r>>31)+1;const s=r>>>20&2047;return t=4294967296*(1048575&r)+t,Yn(e,n,s==2047?t?NaN:1/0*i:s==0?i*Math.pow(2,-1074)*t:i*Math.pow(2,s-1075)*(t+4503599627370496)),!0},function(t,e,n){(e=Us(e))!=null&&(bi(t,n,1),t=t.g,(n=Qx||(Qx=new DataView(new ArrayBuffer(8)))).setFloat64(0,+e,!0),wt=n.getUint32(0,!0),Zt=n.getUint32(4,!0),Xl(t,wt),Xl(t,Zt))}),sn=jn(function(t,e,n){return t.h===5&&(Yn(e,n,cm(t.g)),!0)},function(t,e,n){(e=Us(e))!=null&&(bi(t,n,5),t=t.g,V0(e),Xl(t,wt))}),AP=Ha(L3,function(t,e,n){if((e=Va(Us,e))!=null)for(let o=0;o<e.length;o++){var i=t,r=n,s=e[o];s!=null&&(bi(i,r,5),i=i.g,V0(s),Xl(i,wt))}}),fg=Ha(L3,function(t,e,n){if((e=Va(Us,e))!=null&&e.length){bi(t,n,2),oc(t.g,4*e.length);for(let i=0;i<e.length;i++)n=t.g,V0(e[i]),Xl(n,wt)}}),Cs=jn(function(t,e,n){return t.h===0&&(Yn(e,n,W0(t.g,H0)),!0)},A3),Ed=jn(function(t,e,n){return t.h===0&&(Yn(e,n,(t=W0(t.g,H0))===0?void 0:t),!0)},A3),RP=jn(function(t,e,n){return t.h===0&&(Yn(e,n,W0(t.g,am)),!0)},function(t,e,n){e:if(e!=null){if(Vh(e)){if(typeof e=="string"){var i=Math.trunc(Number(e));Number.isSafeInteger(i)&&0<=i?e=String(i):((i=e.indexOf("."))!==-1&&(e=e.substring(0,i)),fv(e)||(Oh(e),e=oh(wt,Zt)));break e}if(typeof e=="number"){e=0<=(e=Math.trunc(e))&&Number.isSafeInteger(e)?e:function(r){if(0>r){so(r);const s=oh(wt,Zt);return r=Number(s),Number.isSafeInteger(r)?r:s}return fv(String(r))?r:(so(r),am(wt,Zt))}(e);break e}}e=void 0}e!=null&&(typeof e=="string"&&sv(e),e!=null&&(bi(t,n,0),typeof e=="number"?(t=t.g,so(e),ah(t,wt,Zt)):(n=sv(e),ah(t.g,n.h,n.g))))}),Gt=jn(function(t,e,n){return t.h===0&&(Yn(e,n,Ts(t.g)),!0)},R3),jh=Ha(function(t,e,n){return(t.h===0||t.h===2)&&(e=za(e,ct(e),n,2,!1),t.h==2?kh(t,Ts,e):e.push(Ts(t.g)),!0)},function(t,e,n){if((e=Va(ka,e))!=null&&e.length){n=j0(t,n);for(let i=0;i<e.length;i++)Bh(t.g,e[i]);Y0(t,n)}}),Ta=jn(function(t,e,n){return t.h===0&&(Yn(e,n,(t=Ts(t.g))===0?void 0:t),!0)},R3),jt=jn(function(t,e,n){return t.h===0&&(Yn(e,n,X0(t.g)),!0)},C3),wl=jn(function(t,e,n){return t.h===0&&(Yn(e,n,(t=X0(t.g))===!1?void 0:t),!0)},C3),En=Ha(function(t,e,n){return t.h===2&&(cc(e,n,_P,t=$0(t)),!0)},function(t,e,n){if((e=Va(ao,e))!=null)for(let o=0;o<e.length;o++){var i=t,r=n,s=e[o];s!=null&&zh(i,r,Hx(s))}}),bs=jn(function(t,e,n){return t.h===2&&(Yn(e,n,(t=$0(t))===""?void 0:t),!0)},b3),dt=jn(function(t,e,n){return t.h===2&&(Yn(e,n,$0(t)),!0)},b3),CP=Xh(function(t,e,n,i,r){return t.h===2&&(sc(t,lg(e,i,n,!0),r),!0)},$h),bP=Xh(function(t,e,n,i,r){return t.h===2&&(sc(t,lg(e,i,n),r),!0)},$h);Qt=new Fa(function(t,e,n,i,r){if(t.h!==2)return!1;i=lo(void 0,i);let s=ct(e);gr(s);let o=za(e,s,n,3);return s=ct(e),4&Ht(o)&&(o=ai(o),zt(o,-2079&(1|Ht(o))),At(e,s,n,o)),o.push(i),sc(t,i,r),!0},function(t,e,n,i,r){if(Array.isArray(e))for(let s=0;s<e.length;s++)$h(t,e[s],n,i,r)},!0,!0);var pt=Xh(function(t,e,n,i,r,s){if(t.h!==2)return!1;let o=ct(e);return gr(o),(s=ag(e,o,s))&&n!==s&&At(e,o,s),sc(t,e=lg(e,i,n),r),!0},$h),D3=jn(function(t,e,n){return t.h===2&&(Yn(e,n,i3(t)),!0)},P3),PP=Ha(function(t,e,n){return(t.h===0||t.h===2)&&(e=za(e,ct(e),n,2,!1),t.h==2?kh(t,As,e):e.push(As(t.g)),!0)},function(t,e,n){if((e=Va(aP,e))!=null)for(let o=0;o<e.length;o++){var i=t,r=n,s=e[o];s!=null&&(bi(i,r,0),oc(i.g,s))}}),mr=jn(function(t,e,n){return t.h===0&&(Yn(e,n,Ts(t.g)),!0)},function(t,e,n){(e=ka(e))!=null&&(e=parseInt(e,10),bi(t,n,0),Bh(t.g,e))}),LP=Ha(function(t,e,n){return(t.h===0||t.h===2)&&(e=za(e,ct(e),n,2,!1),t.h==2?kh(t,Jb,e):e.push(Ts(t.g)),!0)},function(t,e,n){if((e=Va(ka,e))!=null&&e.length){n=j0(t,n);for(let i=0;i<e.length;i++)Bh(t.g,e[i]);Y0(t,n)}});class DP{constructor(e,n){this.h=e,this.g=n,this.l=et,this.m=Re,this.defaultValue=void 0}}function Ki(t,e){return new DP(t,e)}function Ns(t,e){return(n,i)=>{if(Jc.length){const s=Jc.pop();s.o(i),_d(s.g,n,i),n=s}else n=new class{constructor(s,o){if(rv.length){const a=rv.pop();_d(a,s,o),s=a}else s=new class{constructor(a,l){this.h=null,this.m=!1,this.g=this.l=this.j=0,_d(this,a,l)}clear(){this.h=null,this.m=!1,this.g=this.l=this.j=0,this.ca=!1}}(s,o);this.g=s,this.l=this.g.g,this.h=this.m=-1,this.o(o)}o({ia:s=!1}={}){this.ia=s}}(n,i);try{const s=new t,o=s.s;cg(e)(o,n);var r=s}finally{n.g.clear(),n.m=-1,n.h=-1,100>Jc.length&&Jc.push(n)}return r}}function Yh(t){return function(){const e=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const o=this.g;return this.g=[],o}}}};T3(this.s,e,Wh(t)),Ea(e,e.g.end());const n=new Uint8Array(e.h),i=e.l,r=i.length;let s=0;for(let o=0;o<r;o++){const a=i[o];n.set(a,s),s+=a.length}return e.l=[n],n}}var Sv=class extends xe{constructor(t){super(t)}},I3=[0,bs,jn(function(t,e,n){return t.h===2&&(Yn(e,n,(t=i3(t))===_o()?void 0:t),!0)},function(t,e,n){if(e!=null){if(e instanceof xe){const i=e.Qa;return void(i&&(e=i(e),e!=null&&zh(t,n,B0(e).buffer)))}if(Array.isArray(e))return}P3(t,e,n)})],IP=[0,dt],U3=[0,Gt,mr,jt,-1,jh,mr,-1],UP=[0,jt,-1],N3=class extends xe{constructor(){super()}};N3.B=[6];var F3=[0,jt,dt,jt,mr,-1,LP,dt,-1,UP,mr],O3=[0,dt,-2],Mv=class extends xe{constructor(){super()}},k3=[0],B3=[0,Gt,jt,-4],li=class extends xe{constructor(t){super(t,2)}},Pt={},NP=[-2,Pt,jt];Pt[336783863]=[0,dt,jt,-1,Gt,[0,[1,2,3,4,5,6],pt,k3,pt,F3,pt,O3,pt,B3,pt,U3,pt,[0,dt]],IP,jt,[0,[1,3],[2,4],pt,[0,jh],-1,pt,[0,En],-1,Qt,[0,dt,-1]],dt];var FP=[0,bs,wl],z3=[0,Ed,-1,wl,-3,Ed,jh,bs,Ta,Ed,-1,wl,Ta,wl,-2,bs],uc=[-1,{}],V3=[0,dt,1,uc],H3=[0,dt,En,uc];function hi(t,e){pm(t,2,Ba(e),"")}function yt(t,e){cc(t.s,3,lc,e)}function $e(t,e){cc(t.s,4,lc,e)}var Tn=class extends xe{constructor(t){super(t,500)}o(t){return Re(this,0,7,t)}};Tn.B=[3,4,5,6,8,13,17,1005];var OP=[-500,bs,-1,En,-3,NP,Qt,I3,Ta,-1,V3,H3,Qt,FP,bs,z3,Ta,En,987,En],kP=[0,bs,-1,uc],BP=[-500,dt,-1,[-1,{}],998,dt],zP=[-500,dt,En,-1,[-2,{},jt],997,En,-1],VP=[-500,dt,En,uc,998,En];function fi(t,e){mh(t,1,Tn,e)}function Rt(t,e){cc(t.s,10,lc,e)}function it(t,e){cc(t.s,15,lc,e)}var In=class extends xe{constructor(t){super(t,500)}o(t){return Re(this,0,1001,t)}};In.B=[1,6,7,9,10,15,16,17,14,1002];var G3=[-500,Qt,OP,4,Qt,BP,Qt,zP,Ta,Qt,VP,En,Ta,V3,H3,Qt,kP,En,-2,z3,bs,-1,wl,979,uc,Qt,I3],HP=Ns(In,G3);In.prototype.g=Yh(G3);var GP=[0,Qt,[0,Gt,-2]],WP=class extends xe{constructor(t){super(t)}},XP=[0,Gt,sn,dt,-1],dg=class extends xe{constructor(t){super(t)}g(){return Wr(this,WP,1)}};dg.B=[1];var W3=[0,Qt,XP],qh=Ns(dg,W3),$P=[0,Gt,sn],jP=[0,Gt,-1,GP],YP=class extends xe{constructor(t){super(t)}},qP=[0,Gt,-3],KP=[0,sn,-3],ZP=class extends xe{constructor(t){super(t)}},QP=[0,sn,-1,dt,sn],Tu=class extends xe{constructor(t){super(t)}h(){return et(this,YP,2)}g(){return Wr(this,ZP,5)}};Tu.B=[5];var JP=[0,mr,qP,KP,jP,Qt,QP],X3=class extends xe{constructor(t){super(t)}};X3.B=[1,2,3,8,9];var $3=Ns(X3,[0,En,jh,fg,JP,dt,-1,Cs,Qt,$P,En,Cs]),j3=class extends xe{constructor(t){super(t)}},eL=[0,sn,-4],Y3=class extends xe{constructor(t){super(t)}};Y3.B=[1];var aa=Ns(Y3,[0,Qt,eL]),q3=class extends xe{constructor(t){super(t)}},tL=[0,sn,-4],K3=class extends xe{constructor(t){super(t)}};K3.B=[1];var hc=Ns(K3,[0,Qt,tL]),Z3=class extends xe{constructor(t){super(t)}};Z3.B=[3];var nL=[0,Gt,-1,fg,mr],Q3=class extends xe{constructor(){super()}};Q3.prototype.g=Yh([0,sn,-4,Cs]);var iL=class extends xe{constructor(t){super(t)}},rL=[0,1,Gt,dt,W3],J3=class extends xe{constructor(t){super(t)}};J3.B=[1];var sL=Ns(J3,[0,Qt,rL,Cs]),_m=class extends xe{constructor(t){super(t)}};_m.B=[1];var oL=class extends xe{constructor(t){super(t)}qa(){const t=d3(this);return t??_o()}},aL=class extends xe{constructor(t){super(t)}},eS=[1,2],lL=[0,eS,pt,[0,fg],pt,[0,D3],Gt,dt],tS=class extends xe{constructor(t){super(t)}};tS.B=[1];var cL=Ns(tS,[0,Qt,lL,Cs]),Kh=class extends xe{constructor(t){super(t)}};Kh.B=[4,5];var nS=[0,dt,Gt,sn,En,-1],Ev=class extends xe{constructor(t){super(t)}},uL=[0,jt,-1],wv=class extends xe{constructor(t){super(t)}},Au=[1,2,3,4,5],gh=class extends xe{constructor(t){super(t)}g(){return d3(this)!=null}h(){return ao(Rs(this,2))!=null}},iS=[0,D3,dt,[0,Gt,Cs,-1],[0,RP,Cs]],Lt=class extends xe{constructor(t){super(t)}g(){return l3(Rs(this,2))??!1}},Yt=[0,iS,jt,[0,Au,pt,B3,pt,F3,pt,U3,pt,k3,pt,O3],mr],Zh=class extends xe{constructor(t){super(t)}},pg=[0,Yt,sn,-1,Gt],hL=Ki(502141897,Zh);Pt[502141897]=pg;var rS=[0,iS];Pt[512499200]=rS;var sS=[0,rS];Pt[515723506]=sS;var fL=Ns(class extends xe{constructor(t){super(t)}},[0,[0,mr,-1,AP,PP],nL]),oS=[0,Yt];Pt[508981768]=oS;var aS=class extends xe{constructor(t){super(t)}},mg=[0,Yt,sn,oS,jt],lS=class extends xe{constructor(t){super(t)}},cS=[0,Yt,pg,mg,sn,sS];Pt[508968149]=mg;var dL=Ki(508968150,lS);Pt[508968150]=cS;var uS=class extends xe{constructor(t){super(t)}},pL=Ki(513916220,uS);Pt[513916220]=[0,Yt,cS,Gt];var Oo=class extends xe{constructor(t){super(t)}h(){return et(this,Kh,2)}g(){_t(this,2)}},hS=[0,Yt,nS];Pt[478825465]=hS;var fS=[0,Yt];Pt[478825422]=fS;var mL=class extends xe{constructor(t){super(t)}},dS=[0,Yt,fS,hS,-1],pS=class extends xe{constructor(t){super(t)}},mS=[0,Yt,sn,Gt],gg=class extends xe{constructor(t){super(t)}},_g=[0,Yt,sn],vg=class extends xe{constructor(t){super(t)}},gS=[0,Yt,mS,_g,sn],_S=class extends xe{constructor(t){super(t)}},gL=[0,Yt,gS,dS];Pt[463370452]=dS,Pt[464864288]=mS,Pt[474472470]=_g;var _L=Ki(462713202,vg);Pt[462713202]=gS;var vL=Ki(479097054,_S);Pt[479097054]=gL;var yL=class extends xe{constructor(t){super(t)}},xL=[0,Yt],vS=class extends xe{constructor(t){super(t)}},yg=[0,Yt,sn,-1,Gt];Pt[514774813]=yg;var yS=class extends xe{constructor(t){super(t)}},xg=[0,Yt,sn,jt];Pt[518928384]=xg;var xS=class extends xe{constructor(){super()}};xS.prototype.g=Yh([0,Yt,_g,xL,pg,mg,yg,xg]);var SS=class extends xe{constructor(t){super(t)}},SL=Ki(456383383,SS);Pt[456383383]=[0,Yt,nS];var MS=class extends xe{constructor(t){super(t)}},ML=Ki(476348187,MS);Pt[476348187]=[0,Yt,uL];var ES=class extends xe{constructor(t){super(t)}},wS=[0,mr,-1],vm=class extends xe{constructor(t){super(t)}};vm.B=[3];var EL=Ki(458105876,class extends xe{constructor(t){super(t)}g(){var t=this.s;const e=ct(t);var n=2&e;return t=function(i,r,s){var o=vm;const a=2&r;let l=!1;if(s==null){if(a)return mv();s=[]}else if(s.constructor===Ci){if(!(2&s.N)||a)return s;s=s.Y()}else Array.isArray(s)?l=!!(2&Ht(s)):s=[];if(a){if(!s.length)return mv();l||(l=!0,Oa(s))}else l&&(l=!1,s=g3(s));return l||(64&Ht(s)?lh(s,32):32&r&&K0(s,32)),At(i,r,2,o=new Ci(s,o,lP,void 0),!1),o}(t,e,_r(t,e,2)),t==null||!n&&vm&&(t.ta=!0),n=t}});Pt[458105876]=[0,wS,TP,[!0,Cs,[0,dt,-1,En]]];var Sg=class extends xe{constructor(t){super(t)}},TS=Ki(458105758,Sg);Pt[458105758]=[0,Yt,dt,wS];var Mg=class extends xe{constructor(t){super(t)}};Mg.B=[5,6];var wL=Ki(443442058,Mg);Pt[443442058]=[0,Yt,dt,Gt,sn,En,-1];var AS=class extends xe{constructor(t){super(t)}},TL=Ki(516587230,AS);function ym(t,e){return e=e?e.clone():new Kh,t.displayNamesLocale!==void 0?_t(e,1,Ba(t.displayNamesLocale)):t.displayNamesLocale===void 0&&_t(e,1),t.maxResults!==void 0?pr(e,2,t.maxResults):"maxResults"in t&&_t(e,2),t.scoreThreshold!==void 0?Me(e,3,t.scoreThreshold):"scoreThreshold"in t&&_t(e,3),t.categoryAllowlist!==void 0?ph(e,4,t.categoryAllowlist):"categoryAllowlist"in t&&_t(e,4),t.categoryDenylist!==void 0?ph(e,5,t.categoryDenylist):"categoryDenylist"in t&&_t(e,5),e}function Eg(t,e=-1,n=""){return{categories:t.map(i=>({index:ji(wi(i,1),0)??-1,score:Xt(i,2)??0,categoryName:dr(i,3)??"",displayName:dr(i,4)??""})),headIndex:e,headName:n}}function RS(t){var o,a;var e=Zo(t,3,Us),n=Zo(t,2,ka),i=Zo(t,1,ao),r=Zo(t,9,ao);const s={categories:[],keypoints:[]};for(let l=0;l<e.length;l++)s.categories.push({score:e[l],index:n[l]??-1,categoryName:i[l]??"",displayName:r[l]??""});if((e=(o=et(t,Tu,4))==null?void 0:o.h())&&(s.boundingBox={originX:wi(e,1)??0,originY:wi(e,2)??0,width:wi(e,3)??0,height:wi(e,4)??0,angle:0}),(a=et(t,Tu,4))==null?void 0:a.g().length)for(const l of et(t,Tu,4).g())s.keypoints.push({x:Eu(l,1)??0,y:Eu(l,2)??0,score:Eu(l,4)??0,label:ao(Rs(l,3))??""});return s}function Qh(t){const e=[];for(const n of Wr(t,q3,1))e.push({x:Xt(n,1)??0,y:Xt(n,2)??0,z:Xt(n,3)??0,visibility:Xt(n,4)??0});return e}function Tl(t){const e=[];for(const n of Wr(t,j3,1))e.push({x:Xt(n,1)??0,y:Xt(n,2)??0,z:Xt(n,3)??0,visibility:Xt(n,4)??0});return e}function Tv(t){return Array.from(t,e=>127<e?e-256:e)}function Av(t,e){if(t.length!==e.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${t.length} vs. ${e.length}).`);let n=0,i=0,r=0;for(let s=0;s<t.length;s++)n+=t[s]*e[s],i+=t[s]*t[s],r+=e[s]*e[s];if(0>=i||0>=r)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*r)}let eu;Pt[516587230]=[0,Yt,yg,xg,sn];const AL=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function CS(){if(eu===void 0)try{await WebAssembly.instantiate(AL),eu=!0}catch{eu=!1}return eu}async function rl(t,e=""){const n=await CS()?"wasm_internal":"wasm_nosimd_internal";return{wasmLoaderPath:`${e}/${t}_${n}.js`,wasmBinaryPath:`${e}/${t}_${n}.wasm`}}var qs=class{};function bS(){var t=navigator;return typeof OffscreenCanvas<"u"&&(!function(e=navigator){return(e=e.userAgent).includes("Safari")&&!e.includes("Chrome")}(t)||!!((t=t.userAgent.match(/Version\/([\d]+).*Safari/))&&1<=t.length&&17<=Number(t[1])))}async function Rv(t){if(typeof importScripts!="function"){const e=document.createElement("script");return e.src=t.toString(),e.crossOrigin="anonymous",new Promise((n,i)=>{e.addEventListener("load",()=>{n()},!1),e.addEventListener("error",r=>{i(r)},!1),document.body.appendChild(e)})}importScripts(t.toString())}function PS(t){return t.videoWidth!==void 0?[t.videoWidth,t.videoHeight]:t.naturalWidth!==void 0?[t.naturalWidth,t.naturalHeight]:t.displayWidth!==void 0?[t.displayWidth,t.displayHeight]:[t.width,t.height]}function Ee(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(e=t.i.stringToNewUTF8(e)),t.i._free(e)}function Cv(t,e,n){if(!t.i.canvas)throw Error("No OpenGL canvas configured.");if(n?t.i._bindTextureToStream(n):t.i._bindTextureToCanvas(),!(n=t.i.canvas.getContext("webgl2")||t.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e),t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);const[i,r]=PS(e);return!t.l||i===t.i.canvas.width&&r===t.i.canvas.height||(t.i.canvas.width=i,t.i.canvas.height=r),[i,r]}function bv(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const i=new Uint32Array(e.length);for(let r=0;r<e.length;r++)i[r]=t.i.stringToNewUTF8(e[r]);e=t.i._malloc(4*i.length),t.i.HEAPU32.set(i,e>>2),n(e);for(const r of i)t.i._free(r);t.i._free(e)}function Ji(t,e,n){t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=n}function ns(t,e,n){let i=[];t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=(r,s,o)=>{s?(n(i,o),i=[]):i.push(r)}}qs.forVisionTasks=function(t){return rl("vision",t)},qs.forTextTasks=function(t){return rl("text",t)},qs.forGenAiExperimentalTasks=function(t){return rl("genai_experimental",t)},qs.forGenAiTasks=function(t){return rl("genai",t)},qs.forAudioTasks=function(t){return rl("audio",t)},qs.isSimdSupported=function(){return CS()};async function RL(t,e,n,i){return t=await(async(r,s,o,a,l)=>{if(s&&await Rv(s),!self.ModuleFactory||o&&(await Rv(o),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&l&&((s=self.Module).locateFile=l.locateFile,l.mainScriptUrlOrBlob&&(s.mainScriptUrlOrBlob=l.mainScriptUrlOrBlob)),l=await self.ModuleFactory(self.Module||l),self.ModuleFactory=self.Module=void 0,new r(l,a)})(t,n.wasmLoaderPath,n.assetLoaderPath,e,{locateFile:r=>r.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&r.endsWith(".data")?n.assetBinaryPath.toString():r}),await t.o(i),t}function wd(t,e){const n=et(t.baseOptions,gh,1)||new gh;typeof e=="string"?(_t(n,2,Ba(e)),_t(n,1)):e instanceof Uint8Array&&(_t(n,1,J0(e,!1,!1)),_t(n,2)),Re(t.baseOptions,0,1,n)}function Pv(t){try{const e=t.K.length;if(e===1)throw Error(t.K[0].message);if(1<e)throw Error("Encountered multiple errors: "+t.K.map(n=>n.message).join(", "))}finally{t.K=[]}}function pe(t,e){t.J=Math.max(t.J,e)}function Jh(t,e){t.C=new Tn,hi(t.C,"PassThroughCalculator"),yt(t.C,"free_memory"),$e(t.C,"free_memory_unused_out"),Rt(e,"free_memory"),fi(e,t.C)}function Aa(t,e){yt(t.C,e),$e(t.C,e+"_unused_out")}function ef(t){t.g.addBoolToStream(!0,"free_memory",t.J)}var Ru=class{constructor(t){this.g=t,this.K=[],this.J=0,this.g.setAutoRenderToScreen(!1)}l(t,e=!0){var n,i,r,s,o,a;if(e){const l=t.baseOptions||{};if((n=t.baseOptions)!=null&&n.modelAssetBuffer&&((i=t.baseOptions)!=null&&i.modelAssetPath))throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!((r=et(this.baseOptions,gh,1))!=null&&r.g()||(s=et(this.baseOptions,gh,1))!=null&&s.h()||(o=t.baseOptions)!=null&&o.modelAssetBuffer||(a=t.baseOptions)!=null&&a.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if(function(c,h){let d=et(c.baseOptions,wv,3);if(!d){var f=d=new wv,g=new Mv;Ml(f,4,Au,g)}"delegate"in h&&(h.delegate==="GPU"?(h=d,f=new N3,Ml(h,2,Au,f)):(h=d,f=new Mv,Ml(h,4,Au,f))),Re(c.baseOptions,0,3,d)}(this,l),l.modelAssetPath)return fetch(l.modelAssetPath.toString()).then(c=>{if(c.ok)return c.arrayBuffer();throw Error(`Failed to fetch model: ${l.modelAssetPath} (${c.status})`)}).then(c=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(c),!0,!1,!1),wd(this,"/model.dat"),this.m(),this.L()});if(l.modelAssetBuffer instanceof Uint8Array)wd(this,l.modelAssetBuffer);else if(l.modelAssetBuffer)return async function(c){const h=[];for(var d=0;;){const{done:f,value:g}=await c.read();if(f)break;h.push(g),d+=g.length}if(h.length===0)return new Uint8Array(0);if(h.length===1)return h[0];c=new Uint8Array(d),d=0;for(const f of h)c.set(f,d),d+=f.length;return c}(l.modelAssetBuffer).then(c=>{wd(this,c),this.m(),this.L()})}return this.m(),this.L(),Promise.resolve()}L(){}fa(){let t;if(this.g.fa(e=>{t=HP(e)}),!t)throw Error("Failed to retrieve CalculatorGraphConfig");return t}setGraph(t,e){this.g.attachErrorListener((n,i)=>{this.K.push(Error(i))}),this.g.Ma(),this.g.setGraph(t,e),this.C=void 0,Pv(this)}finishProcessing(){this.g.finishProcessing(),Pv(this)}close(){this.C=void 0,this.g.closeGraph()}};function Or(t,e){if(!t)throw Error(`Unable to obtain required WebGL resource: ${e}`);return t}Ru.prototype.close=Ru.prototype.close,function(t,e){t=t.split(".");var n,i=ic;for((t[0]in i)||i.execScript===void 0||i.execScript("var "+t[0]);t.length&&(n=t.shift());)t.length||e===void 0?i=i[n]&&i[n]!==Object.prototype[n]?i[n]:i[n]={}:i[n]=e}("TaskRunner",Ru);class CL{constructor(e,n,i,r){this.g=e,this.h=n,this.m=i,this.l=r}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function Lv(t,e,n){const i=t.g;if(n=Or(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,e),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(t.h,n),n}function Dv(t,e){const n=t.g,i=Or(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);const r=Or(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(t.K),n.vertexAttribPointer(t.K,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);const s=Or(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(t.J),n.vertexAttribPointer(t.J,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new CL(n,i,r,s)}function wg(t,e){if(t.g){if(e!==t.g)throw Error("Cannot change GL context once initialized")}else t.g=e}function Tg(t,e,n,i){return wg(t,e),t.h||(t.m(),t.D()),n?(t.v||(t.v=Dv(t,!0)),n=t.v):(t.A||(t.A=Dv(t,!1)),n=t.A),e.useProgram(t.h),n.bind(),t.l(),t=i(),n.g.bindVertexArray(null),t}function tf(t,e,n){return wg(t,e),t=Or(e.createTexture(),"Failed to create texture"),e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,n??e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,n??e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),t}function nf(t,e,n){wg(t,e),t.u||(t.u=Or(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,t.u),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0)}function Ag(t){var e;(e=t.g)==null||e.bindFramebuffer(t.g.FRAMEBUFFER,null)}var Rg=class{H(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const t=this.g;if(this.h=Or(t.createProgram(),"Failed to create WebGL program"),this.ba=Lv(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,t.VERTEX_SHADER),this.aa=Lv(this,this.H(),t.FRAGMENT_SHADER),t.linkProgram(this.h),!t.getProgramParameter(this.h,t.LINK_STATUS))throw Error(`Error during program linking: ${t.getProgramInfoLog(this.h)}`);this.K=t.getAttribLocation(this.h,"aVertex"),this.J=t.getAttribLocation(this.h,"aTex")}D(){}l(){}close(){if(this.h){const t=this.g;t.deleteProgram(this.h),t.deleteShader(this.ba),t.deleteShader(this.aa)}this.u&&this.g.deleteFramebuffer(this.u),this.A&&this.A.close(),this.v&&this.v.close()}};function br(t,e){switch(e){case 0:return t.g.find(n=>n instanceof Uint8Array);case 1:return t.g.find(n=>n instanceof Float32Array);case 2:return t.g.find(n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture);default:throw Error(`Type is not supported: ${e}`)}}function xm(t){var e=br(t,1);if(!e){if(e=br(t,0))e=new Float32Array(e).map(i=>i/255);else{e=new Float32Array(t.width*t.height);const i=Ra(t);var n=Cg(t);if(nf(n,i,LS(t)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in self.document){n=new Float32Array(t.width*t.height*4),i.readPixels(0,0,t.width,t.height,i.RGBA,i.FLOAT,n);for(let r=0,s=0;r<e.length;++r,s+=4)e[r]=n[s]}else i.readPixels(0,0,t.width,t.height,i.RED,i.FLOAT,e)}t.g.push(e)}return e}function LS(t){let e=br(t,2);if(!e){const n=Ra(t);e=IS(t);const i=xm(t),r=DS(t);n.texImage2D(n.TEXTURE_2D,0,r,t.width,t.height,0,n.RED,n.FLOAT,i),Sm(t)}return e}function Ra(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.h||(t.h=Or(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function DS(t){if(t=Ra(t),!tu)if(t.getExtension("EXT_color_buffer_float")&&t.getExtension("OES_texture_float_linear")&&t.getExtension("EXT_float_blend"))tu=t.R32F;else{if(!t.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");tu=t.R16F}return tu}function Cg(t){return t.l||(t.l=new Rg),t.l}function IS(t){const e=Ra(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);let n=br(t,2);return n||(n=tf(Cg(t),e,t.m?e.LINEAR:e.NEAREST),t.g.push(n),t.j=!0),e.bindTexture(e.TEXTURE_2D,n),n}function Sm(t){t.h.bindTexture(t.h.TEXTURE_2D,null)}var tu,an=class{constructor(t,e,n,i,r,s,o){this.g=t,this.m=e,this.j=n,this.canvas=i,this.l=r,this.width=s,this.height=o,this.j&&--Iv===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Ha(){return!!br(this,0)}la(){return!!br(this,1)}R(){return!!br(this,2)}ka(){return(e=br(t=this,0))||(e=xm(t),e=new Uint8Array(e.map(n=>255*n)),t.g.push(e)),e;var t,e}ja(){return xm(this)}O(){return LS(this)}clone(){const t=[];for(const e of this.g){let n;if(e instanceof Uint8Array)n=new Uint8Array(e);else if(e instanceof Float32Array)n=new Float32Array(e);else{if(!(e instanceof WebGLTexture))throw Error(`Type is not supported: ${e}`);{const i=Ra(this),r=Cg(this);i.activeTexture(i.TEXTURE1),n=tf(r,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);const s=DS(this);i.texImage2D(i.TEXTURE_2D,0,s,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),nf(r,i,n),Tg(r,i,!1,()=>{IS(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Sm(this)}),Ag(r),Sm(this)}}t.push(n)}return new an(t,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&Ra(this).deleteTexture(br(this,2)),Iv=-1}};an.prototype.close=an.prototype.close,an.prototype.clone=an.prototype.clone,an.prototype.getAsWebGLTexture=an.prototype.O,an.prototype.getAsFloat32Array=an.prototype.ja,an.prototype.getAsUint8Array=an.prototype.ka,an.prototype.hasWebGLTexture=an.prototype.R,an.prototype.hasFloat32Array=an.prototype.la,an.prototype.hasUint8Array=an.prototype.Ha;var Iv=250;function sr(t,e){switch(e){case 0:return t.g.find(n=>n instanceof ImageData);case 1:return t.g.find(n=>typeof ImageBitmap<"u"&&n instanceof ImageBitmap);case 2:return t.g.find(n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture);default:throw Error(`Type is not supported: ${e}`)}}function US(t){var e=sr(t,0);if(!e){e=Ca(t);const n=rf(t),i=new Uint8Array(t.width*t.height*4);nf(n,e,Cu(t)),e.readPixels(0,0,t.width,t.height,e.RGBA,e.UNSIGNED_BYTE,i),Ag(n),e=new ImageData(new Uint8ClampedArray(i.buffer),t.width,t.height),t.g.push(e)}return e}function Cu(t){let e=sr(t,2);if(!e){const n=Ca(t);e=bu(t);const i=sr(t,1)||US(t);n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,i),hl(t)}return e}function Ca(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when iniitializing the image.");return t.h||(t.h=Or(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function rf(t){return t.l||(t.l=new Rg),t.l}function bu(t){const e=Ca(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);let n=sr(t,2);return n||(n=tf(rf(t),e),t.g.push(n),t.m=!0),e.bindTexture(e.TEXTURE_2D,n),n}function hl(t){t.h.bindTexture(t.h.TEXTURE_2D,null)}function Uv(t){const e=Ca(t);return Tg(rf(t),e,!0,()=>function(n,i){const r=n.canvas;if(r.width===n.width&&r.height===n.height)return i();const s=r.width,o=r.height;return r.width=n.width,r.height=n.height,n=i(),r.width=s,r.height=o,n}(t,()=>{if(e.bindFramebuffer(e.FRAMEBUFFER,null),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.TRIANGLE_FAN,0,4),!(t.canvas instanceof OffscreenCanvas))throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");return t.canvas.transferToImageBitmap()}))}var ln=class{constructor(t,e,n,i,r,s,o){this.g=t,this.j=e,this.m=n,this.canvas=i,this.l=r,this.width=s,this.height=o,(this.j||this.m)&&--Nv===0&&console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.")}Ga(){return!!sr(this,0)}ma(){return!!sr(this,1)}R(){return!!sr(this,2)}Ea(){return US(this)}Da(){var t=sr(this,1);return t||(Cu(this),bu(this),t=Uv(this),hl(this),this.g.push(t),this.j=!0),t}O(){return Cu(this)}clone(){const t=[];for(const e of this.g){let n;if(e instanceof ImageData)n=new ImageData(e.data,this.width,this.height);else if(e instanceof WebGLTexture){const i=Ca(this),r=rf(this);i.activeTexture(i.TEXTURE1),n=tf(r,i),i.bindTexture(i.TEXTURE_2D,n),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,this.width,this.height,0,i.RGBA,i.UNSIGNED_BYTE,null),i.bindTexture(i.TEXTURE_2D,null),nf(r,i,n),Tg(r,i,!1,()=>{bu(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),hl(this)}),Ag(r),hl(this)}else{if(!(e instanceof ImageBitmap))throw Error(`Type is not supported: ${e}`);Cu(this),bu(this),n=Uv(this),hl(this)}t.push(n)}return new ln(t,this.ma(),this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&sr(this,1).close(),this.m&&Ca(this).deleteTexture(sr(this,2)),Nv=-1}};ln.prototype.close=ln.prototype.close,ln.prototype.clone=ln.prototype.clone,ln.prototype.getAsWebGLTexture=ln.prototype.O,ln.prototype.getAsImageBitmap=ln.prototype.Da,ln.prototype.getAsImageData=ln.prototype.Ea,ln.prototype.hasWebGLTexture=ln.prototype.R,ln.prototype.hasImageBitmap=ln.prototype.ma,ln.prototype.hasImageData=ln.prototype.Ga;var Nv=250;function Zi(...t){return t.map(([e,n])=>({start:e,end:n}))}const bL=function(t){return class extends t{Ma(){this.i._registerModelResourcesGraphService()}}}((Fv=class{constructor(t,e){this.l=!0,this.i=t,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",e!==void 0?this.i.canvas=e:bS()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(t){const e=await(await fetch(t)).arrayBuffer();t=!(t.endsWith(".pbtxt")||t.endsWith(".textproto")),this.setGraph(new Uint8Array(e),t)}setGraphFromString(t){this.setGraph(new TextEncoder().encode(t),!1)}setGraph(t,e){const n=t.length,i=this.i._malloc(n);this.i.HEAPU8.set(t,i),e?this.i._changeBinaryGraph(n,i):this.i._changeTextGraph(n,i),this.i._free(i)}configureAudio(t,e,n,i,r){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),Ee(this,i||"input_audio",s=>{Ee(this,r=r||"audio_header",o=>{this.i._configureAudio(s,o,t,e,n)})})}setAutoResizeCanvas(t){this.l=t}setAutoRenderToScreen(t){this.i._setAutoRenderToScreen(t)}setGpuBufferVerticalFlip(t){this.i.gpuOriginForWebTexturesIsBottomLeft=t}fa(t){Ji(this,"__graph_config__",e=>{t(e)}),Ee(this,"__graph_config__",e=>{this.i._getGraphConfig(e,void 0)}),delete this.i.simpleListeners.__graph_config__}attachErrorListener(t){this.i.errorListener=t}attachEmptyPacketListener(t,e){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[t]=e}addAudioToStream(t,e,n){this.addAudioToStreamWithShape(t,0,0,e,n)}addAudioToStreamWithShape(t,e,n,i,r){const s=4*t.length;this.h!==s&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(s),this.h=s),this.i.HEAPF32.set(t,this.g/4),Ee(this,i,o=>{this.i._addAudioToInputStream(this.g,e,n,o,r)})}addGpuBufferToStream(t,e,n){Ee(this,e,i=>{const[r,s]=Cv(this,t,i);this.i._addBoundTextureToStream(i,r,s,n)})}addBoolToStream(t,e,n){Ee(this,e,i=>{this.i._addBoolToInputStream(t,i,n)})}addDoubleToStream(t,e,n){Ee(this,e,i=>{this.i._addDoubleToInputStream(t,i,n)})}addFloatToStream(t,e,n){Ee(this,e,i=>{this.i._addFloatToInputStream(t,i,n)})}addIntToStream(t,e,n){Ee(this,e,i=>{this.i._addIntToInputStream(t,i,n)})}addUintToStream(t,e,n){Ee(this,e,i=>{this.i._addUintToInputStream(t,i,n)})}addStringToStream(t,e,n){Ee(this,e,i=>{Ee(this,t,r=>{this.i._addStringToInputStream(r,i,n)})})}addStringRecordToStream(t,e,n){Ee(this,e,i=>{bv(this,Object.keys(t),r=>{bv(this,Object.values(t),s=>{this.i._addFlatHashMapToInputStream(r,s,Object.keys(t).length,i,n)})})})}addProtoToStream(t,e,n,i){Ee(this,n,r=>{Ee(this,e,s=>{const o=this.i._malloc(t.length);this.i.HEAPU8.set(t,o),this.i._addProtoToInputStream(o,t.length,s,r,i),this.i._free(o)})})}addEmptyPacketToStream(t,e){Ee(this,t,n=>{this.i._addEmptyPacketToInputStream(n,e)})}addBoolVectorToStream(t,e,n){Ee(this,e,i=>{const r=this.i._allocateBoolVector(t.length);if(!r)throw Error("Unable to allocate new bool vector on heap.");for(const s of t)this.i._addBoolVectorEntry(r,s);this.i._addBoolVectorToInputStream(r,i,n)})}addDoubleVectorToStream(t,e,n){Ee(this,e,i=>{const r=this.i._allocateDoubleVector(t.length);if(!r)throw Error("Unable to allocate new double vector on heap.");for(const s of t)this.i._addDoubleVectorEntry(r,s);this.i._addDoubleVectorToInputStream(r,i,n)})}addFloatVectorToStream(t,e,n){Ee(this,e,i=>{const r=this.i._allocateFloatVector(t.length);if(!r)throw Error("Unable to allocate new float vector on heap.");for(const s of t)this.i._addFloatVectorEntry(r,s);this.i._addFloatVectorToInputStream(r,i,n)})}addIntVectorToStream(t,e,n){Ee(this,e,i=>{const r=this.i._allocateIntVector(t.length);if(!r)throw Error("Unable to allocate new int vector on heap.");for(const s of t)this.i._addIntVectorEntry(r,s);this.i._addIntVectorToInputStream(r,i,n)})}addUintVectorToStream(t,e,n){Ee(this,e,i=>{const r=this.i._allocateUintVector(t.length);if(!r)throw Error("Unable to allocate new unsigned int vector on heap.");for(const s of t)this.i._addUintVectorEntry(r,s);this.i._addUintVectorToInputStream(r,i,n)})}addStringVectorToStream(t,e,n){Ee(this,e,i=>{const r=this.i._allocateStringVector(t.length);if(!r)throw Error("Unable to allocate new string vector on heap.");for(const s of t)Ee(this,s,o=>{this.i._addStringVectorEntry(r,o)});this.i._addStringVectorToInputStream(r,i,n)})}addBoolToInputSidePacket(t,e){Ee(this,e,n=>{this.i._addBoolToInputSidePacket(t,n)})}addDoubleToInputSidePacket(t,e){Ee(this,e,n=>{this.i._addDoubleToInputSidePacket(t,n)})}addFloatToInputSidePacket(t,e){Ee(this,e,n=>{this.i._addFloatToInputSidePacket(t,n)})}addIntToInputSidePacket(t,e){Ee(this,e,n=>{this.i._addIntToInputSidePacket(t,n)})}addUintToInputSidePacket(t,e){Ee(this,e,n=>{this.i._addUintToInputSidePacket(t,n)})}addStringToInputSidePacket(t,e){Ee(this,e,n=>{Ee(this,t,i=>{this.i._addStringToInputSidePacket(i,n)})})}addProtoToInputSidePacket(t,e,n){Ee(this,n,i=>{Ee(this,e,r=>{const s=this.i._malloc(t.length);this.i.HEAPU8.set(t,s),this.i._addProtoToInputSidePacket(s,t.length,r,i),this.i._free(s)})})}addBoolVectorToInputSidePacket(t,e){Ee(this,e,n=>{const i=this.i._allocateBoolVector(t.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(const r of t)this.i._addBoolVectorEntry(i,r);this.i._addBoolVectorToInputSidePacket(i,n)})}addDoubleVectorToInputSidePacket(t,e){Ee(this,e,n=>{const i=this.i._allocateDoubleVector(t.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(const r of t)this.i._addDoubleVectorEntry(i,r);this.i._addDoubleVectorToInputSidePacket(i,n)})}addFloatVectorToInputSidePacket(t,e){Ee(this,e,n=>{const i=this.i._allocateFloatVector(t.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(const r of t)this.i._addFloatVectorEntry(i,r);this.i._addFloatVectorToInputSidePacket(i,n)})}addIntVectorToInputSidePacket(t,e){Ee(this,e,n=>{const i=this.i._allocateIntVector(t.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(const r of t)this.i._addIntVectorEntry(i,r);this.i._addIntVectorToInputSidePacket(i,n)})}addUintVectorToInputSidePacket(t,e){Ee(this,e,n=>{const i=this.i._allocateUintVector(t.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(const r of t)this.i._addUintVectorEntry(i,r);this.i._addUintVectorToInputSidePacket(i,n)})}addStringVectorToInputSidePacket(t,e){Ee(this,e,n=>{const i=this.i._allocateStringVector(t.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(const r of t)Ee(this,r,s=>{this.i._addStringVectorEntry(i,s)});this.i._addStringVectorToInputSidePacket(i,n)})}attachBoolListener(t,e){Ji(this,t,e),Ee(this,t,n=>{this.i._attachBoolListener(n)})}attachBoolVectorListener(t,e){ns(this,t,e),Ee(this,t,n=>{this.i._attachBoolVectorListener(n)})}attachIntListener(t,e){Ji(this,t,e),Ee(this,t,n=>{this.i._attachIntListener(n)})}attachIntVectorListener(t,e){ns(this,t,e),Ee(this,t,n=>{this.i._attachIntVectorListener(n)})}attachUintListener(t,e){Ji(this,t,e),Ee(this,t,n=>{this.i._attachUintListener(n)})}attachUintVectorListener(t,e){ns(this,t,e),Ee(this,t,n=>{this.i._attachUintVectorListener(n)})}attachDoubleListener(t,e){Ji(this,t,e),Ee(this,t,n=>{this.i._attachDoubleListener(n)})}attachDoubleVectorListener(t,e){ns(this,t,e),Ee(this,t,n=>{this.i._attachDoubleVectorListener(n)})}attachFloatListener(t,e){Ji(this,t,e),Ee(this,t,n=>{this.i._attachFloatListener(n)})}attachFloatVectorListener(t,e){ns(this,t,e),Ee(this,t,n=>{this.i._attachFloatVectorListener(n)})}attachStringListener(t,e){Ji(this,t,e),Ee(this,t,n=>{this.i._attachStringListener(n)})}attachStringVectorListener(t,e){ns(this,t,e),Ee(this,t,n=>{this.i._attachStringVectorListener(n)})}attachProtoListener(t,e,n){Ji(this,t,e),Ee(this,t,i=>{this.i._attachProtoListener(i,n||!1)})}attachProtoVectorListener(t,e,n){ns(this,t,e),Ee(this,t,i=>{this.i._attachProtoVectorListener(i,n||!1)})}attachAudioListener(t,e,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),Ji(this,t,(i,r)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),e(i,r)}),Ee(this,t,i=>{this.i._attachAudioListener(i,n||!1)})}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends Fv{get ha(){return this.i}sa(t,e,n){Ee(this,e,i=>{const[r,s]=Cv(this,t,i);this.ha._addBoundTextureAsImageToStream(i,r,s,n)})}W(t,e){Ji(this,t,e),Ee(this,t,n=>{this.ha._attachImageListener(n)})}da(t,e){ns(this,t,e),Ee(this,t,n=>{this.ha._attachImageVectorListener(n)})}}));var Fv,Pi=class extends bL{};async function We(t,e,n){return async function(i,r,s,o){return RL(i,r,s,o)}(t,n.canvas??(bS()?void 0:document.createElement("canvas")),e,n)}function NS(t,e,n,i){if(t.V){const s=new Q3;if(n!=null&&n.regionOfInterest){if(!t.ra)throw Error("This task doesn't support region-of-interest.");var r=n.regionOfInterest;if(r.left>=r.right||r.top>=r.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(0>r.left||0>r.top||1<r.right||1<r.bottom)throw Error("Expected RectF values to be in [0,1].");Me(s,1,(r.left+r.right)/2),Me(s,2,(r.top+r.bottom)/2),Me(s,4,r.right-r.left),Me(s,3,r.bottom-r.top)}else Me(s,1,.5),Me(s,2,.5),Me(s,4,1),Me(s,3,1);if(n!=null&&n.rotationDegrees){if((n==null?void 0:n.rotationDegrees)%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(Me(s,5,-Math.PI*n.rotationDegrees/180),(n==null?void 0:n.rotationDegrees)%180!=0){const[o,a]=PS(e);n=Xt(s,3)*a/o,r=Xt(s,4)*o/a,Me(s,4,n),Me(s,3,r)}}t.g.addProtoToStream(s.g(),"mediapipe.NormalizedRect",t.V,i)}t.g.sa(e,t.ba,i??performance.now()),t.finishProcessing()}function Li(t,e,n){var i;if((i=t.baseOptions)!=null&&i.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");NS(t,e,n,t.J+1)}function vr(t,e,n,i){var r;if(!((r=t.baseOptions)!=null&&r.g()))throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");NS(t,e,n,i)}function ba(t,e,n,i){var r=e.data;const s=e.width,o=s*(e=e.height);if((r instanceof Uint8Array||r instanceof Float32Array)&&r.length!==o)throw Error("Unsupported channel count: "+r.length/o);return t=new an([r],n,!1,t.g.i.canvas,t.M,s,e),i?t.clone():t}var $n=class extends Ru{constructor(t,e,n,i){super(t),this.g=t,this.ba=e,this.V=n,this.ra=i,this.M=new Rg}l(t,e=!0){if("runningMode"in t&&$l(this.baseOptions,2,!!t.runningMode&&t.runningMode!=="IMAGE"),t.canvas!==void 0&&this.g.i.canvas!==t.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(t,e)}close(){this.M.close(),super.close()}};$n.prototype.close=$n.prototype.close;var mi=class extends $n{constructor(t,e){super(new Pi(t,e),"image_in","norm_rect_in",!1),this.j={detections:[]},Re(t=this.h=new Zh,0,1,e=new Lt),Me(this.h,2,.5),Me(this.h,3,.3)}get baseOptions(){return et(this.h,Lt,1)}set baseOptions(t){Re(this.h,0,1,t)}o(t){return"minDetectionConfidence"in t&&Me(this.h,2,t.minDetectionConfidence??.5),"minSuppressionThreshold"in t&&Me(this.h,3,t.minSuppressionThreshold??.3),this.l(t)}F(t,e){return this.j={detections:[]},Li(this,t,e),this.j}G(t,e,n){return this.j={detections:[]},vr(this,t,n,e),this.j}m(){var t=new In;Rt(t,"image_in"),Rt(t,"norm_rect_in"),it(t,"detections");const e=new li;qi(e,hL,this.h);const n=new Tn;hi(n,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),yt(n,"IMAGE:image_in"),yt(n,"NORM_RECT:norm_rect_in"),$e(n,"DETECTIONS:detections"),n.o(e),fi(t,n),this.g.attachProtoVectorListener("detections",(i,r)=>{for(const s of i)i=$3(s),this.j.detections.push(RS(i));pe(this,r)}),this.g.attachEmptyPacketListener("detections",i=>{pe(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};mi.prototype.detectForVideo=mi.prototype.G,mi.prototype.detect=mi.prototype.F,mi.prototype.setOptions=mi.prototype.o,mi.createFromModelPath=async function(t,e){return We(mi,t,{baseOptions:{modelAssetPath:e}})},mi.createFromModelBuffer=function(t,e){return We(mi,t,{baseOptions:{modelAssetBuffer:e}})},mi.createFromOptions=function(t,e){return We(mi,t,e)};var bg=Zi([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),Pg=Zi([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),Lg=Zi([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),FS=Zi([474,475],[475,476],[476,477],[477,474]),Dg=Zi([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),Ig=Zi([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),OS=Zi([469,470],[470,471],[471,472],[472,469]),Ug=Zi([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),kS=[...bg,...Pg,...Lg,...Dg,...Ig,...Ug],BS=Zi([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function Ov(t){t.u={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var Ot=class extends $n{constructor(t,e){super(new Pi(t,e),"image_in","norm_rect",!1),this.u={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Re(t=this.h=new lS,0,1,e=new Lt),this.H=new aS,Re(this.h,0,3,this.H),this.j=new Zh,Re(this.h,0,2,this.j),pr(this.j,4,1),Me(this.j,2,.5),Me(this.H,2,.5),Me(this.h,4,.5)}get baseOptions(){return et(this.h,Lt,1)}set baseOptions(t){Re(this.h,0,1,t)}o(t){return"numFaces"in t&&pr(this.j,4,t.numFaces??1),"minFaceDetectionConfidence"in t&&Me(this.j,2,t.minFaceDetectionConfidence??.5),"minTrackingConfidence"in t&&Me(this.h,4,t.minTrackingConfidence??.5),"minFacePresenceConfidence"in t&&Me(this.H,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in t&&(this.outputFacialTransformationMatrixes=!!t.outputFacialTransformationMatrixes),this.l(t)}F(t,e){return Ov(this),Li(this,t,e),this.u}G(t,e,n){return Ov(this),vr(this,t,n,e),this.u}m(){var t=new In;Rt(t,"image_in"),Rt(t,"norm_rect"),it(t,"face_landmarks");const e=new li;qi(e,dL,this.h);const n=new Tn;hi(n,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),yt(n,"IMAGE:image_in"),yt(n,"NORM_RECT:norm_rect"),$e(n,"NORM_LANDMARKS:face_landmarks"),n.o(e),fi(t,n),this.g.attachProtoVectorListener("face_landmarks",(i,r)=>{for(const s of i)i=hc(s),this.u.faceLandmarks.push(Qh(i));pe(this,r)}),this.g.attachEmptyPacketListener("face_landmarks",i=>{pe(this,i)}),this.outputFaceBlendshapes&&(it(t,"blendshapes"),$e(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",(i,r)=>{if(this.outputFaceBlendshapes)for(const s of i)i=qh(s),this.u.faceBlendshapes.push(Eg(i.g()??[]));pe(this,r)}),this.g.attachEmptyPacketListener("blendshapes",i=>{pe(this,i)})),this.outputFacialTransformationMatrixes&&(it(t,"face_geometry"),$e(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",(i,r)=>{if(this.outputFacialTransformationMatrixes)for(const s of i)(i=et(fL(s),Z3,2))&&this.u.facialTransformationMatrixes.push({rows:ji(wi(i,1),0)??0,columns:ji(wi(i,2),0)??0,data:Zo(i,3,Us).slice()??[]});pe(this,r)}),this.g.attachEmptyPacketListener("face_geometry",i=>{pe(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Ot.prototype.detectForVideo=Ot.prototype.G,Ot.prototype.detect=Ot.prototype.F,Ot.prototype.setOptions=Ot.prototype.o,Ot.createFromModelPath=function(t,e){return We(Ot,t,{baseOptions:{modelAssetPath:e}})},Ot.createFromModelBuffer=function(t,e){return We(Ot,t,{baseOptions:{modelAssetBuffer:e}})},Ot.createFromOptions=function(t,e){return We(Ot,t,e)},Ot.FACE_LANDMARKS_LIPS=bg,Ot.FACE_LANDMARKS_LEFT_EYE=Pg,Ot.FACE_LANDMARKS_LEFT_EYEBROW=Lg,Ot.FACE_LANDMARKS_LEFT_IRIS=FS,Ot.FACE_LANDMARKS_RIGHT_EYE=Dg,Ot.FACE_LANDMARKS_RIGHT_EYEBROW=Ig,Ot.FACE_LANDMARKS_RIGHT_IRIS=OS,Ot.FACE_LANDMARKS_FACE_OVAL=Ug,Ot.FACE_LANDMARKS_CONTOURS=kS,Ot.FACE_LANDMARKS_TESSELATION=BS;var er=class extends $n{constructor(t,e){super(new Pi(t,e),"image_in","norm_rect",!0),Re(t=this.j=new uS,0,1,e=new Lt)}get baseOptions(){return et(this.j,Lt,1)}set baseOptions(t){Re(this.j,0,1,t)}o(t){return super.l(t)}Pa(t,e,n){const i=typeof e!="function"?e:{};if(this.h=typeof e=="function"?e:n,Li(this,t,i??{}),!this.h)return this.u}m(){var t=new In;Rt(t,"image_in"),Rt(t,"norm_rect"),it(t,"stylized_image");const e=new li;qi(e,pL,this.j);const n=new Tn;hi(n,"mediapipe.tasks.vision.face_stylizer.FaceStylizerGraph"),yt(n,"IMAGE:image_in"),yt(n,"NORM_RECT:norm_rect"),$e(n,"STYLIZED_IMAGE:stylized_image"),n.o(e),fi(t,n),this.g.W("stylized_image",(i,r)=>{var s=!this.h,o=i.data,a=i.width;const l=a*(i=i.height);if(o instanceof Uint8Array)if(o.length===3*l){const c=new Uint8ClampedArray(4*l);for(let h=0;h<l;++h)c[4*h]=o[3*h],c[4*h+1]=o[3*h+1],c[4*h+2]=o[3*h+2],c[4*h+3]=255;o=new ImageData(c,a,i)}else{if(o.length!==4*l)throw Error("Unsupported channel count: "+o.length/l);o=new ImageData(new Uint8ClampedArray(o.buffer,o.byteOffset,o.length),a,i)}else if(!(o instanceof WebGLTexture))throw Error(`Unsupported format: ${o.constructor.name}`);a=new ln([o],!1,!1,this.g.i.canvas,this.M,a,i),this.u=s=s?a.clone():a,this.h&&this.h(s),pe(this,r)}),this.g.attachEmptyPacketListener("stylized_image",i=>{this.u=null,this.h&&this.h(null),pe(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};er.prototype.stylize=er.prototype.Pa,er.prototype.setOptions=er.prototype.o,er.createFromModelPath=function(t,e){return We(er,t,{baseOptions:{modelAssetPath:e}})},er.createFromModelBuffer=function(t,e){return We(er,t,{baseOptions:{modelAssetBuffer:e}})},er.createFromOptions=function(t,e){return We(er,t,e)};var Ng=Zi([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function kv(t){t.gestures=[],t.landmarks=[],t.worldLandmarks=[],t.handedness=[]}function Bv(t){return t.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:t.gestures,landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handedness:t.handedness,handednesses:t.handedness}}function zv(t,e=!0){const n=[];for(const r of t){var i=qh(r);t=[];for(const s of i.g())i=e&&wi(s,1)!=null?ji(wi(s,1),0):-1,t.push({score:Xt(s,2)??0,index:i,categoryName:dr(s,3)??"",displayName:dr(s,4)??""});n.push(t)}return n}var ei=class extends $n{constructor(t,e){super(new Pi(t,e),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Re(t=this.v=new _S,0,1,e=new Lt),this.A=new vg,Re(this.v,0,2,this.A),this.u=new gg,Re(this.A,0,3,this.u),this.h=new pS,Re(this.A,0,2,this.h),this.j=new mL,Re(this.v,0,3,this.j),Me(this.h,2,.5),Me(this.A,4,.5),Me(this.u,2,.5)}get baseOptions(){return et(this.v,Lt,1)}set baseOptions(t){Re(this.v,0,1,t)}o(t){var r,s,o,a;if(pr(this.h,3,t.numHands??1),"minHandDetectionConfidence"in t&&Me(this.h,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Me(this.A,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Me(this.u,2,t.minHandPresenceConfidence??.5),t.cannedGesturesClassifierOptions){var e=new Oo,n=e,i=ym(t.cannedGesturesClassifierOptions,(r=et(this.j,Oo,3))==null?void 0:r.h());Re(n,0,2,i),Re(this.j,0,3,e)}else t.cannedGesturesClassifierOptions===void 0&&((s=et(this.j,Oo,3))==null||s.g());return t.customGesturesClassifierOptions?(Re(n=e=new Oo,0,2,i=ym(t.customGesturesClassifierOptions,(o=et(this.j,Oo,4))==null?void 0:o.h())),Re(this.j,0,4,e)):t.customGesturesClassifierOptions===void 0&&((a=et(this.j,Oo,4))==null||a.g()),this.l(t)}Ka(t,e){return kv(this),Li(this,t,e),Bv(this)}La(t,e,n){return kv(this),vr(this,t,n,e),Bv(this)}m(){var t=new In;Rt(t,"image_in"),Rt(t,"norm_rect"),it(t,"hand_gestures"),it(t,"hand_landmarks"),it(t,"world_hand_landmarks"),it(t,"handedness");const e=new li;qi(e,vL,this.v);const n=new Tn;hi(n,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),yt(n,"IMAGE:image_in"),yt(n,"NORM_RECT:norm_rect"),$e(n,"HAND_GESTURES:hand_gestures"),$e(n,"LANDMARKS:hand_landmarks"),$e(n,"WORLD_LANDMARKS:world_hand_landmarks"),$e(n,"HANDEDNESS:handedness"),n.o(e),fi(t,n),this.g.attachProtoVectorListener("hand_landmarks",(i,r)=>{for(const s of i){i=hc(s);const o=[];for(const a of Wr(i,q3,1))o.push({x:Xt(a,1)??0,y:Xt(a,2)??0,z:Xt(a,3)??0,visibility:Xt(a,4)??0});this.landmarks.push(o)}pe(this,r)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{pe(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,r)=>{for(const s of i){i=aa(s);const o=[];for(const a of Wr(i,j3,1))o.push({x:Xt(a,1)??0,y:Xt(a,2)??0,z:Xt(a,3)??0,visibility:Xt(a,4)??0});this.worldLandmarks.push(o)}pe(this,r)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{pe(this,i)}),this.g.attachProtoVectorListener("hand_gestures",(i,r)=>{this.gestures.push(...zv(i,!1)),pe(this,r)}),this.g.attachEmptyPacketListener("hand_gestures",i=>{pe(this,i)}),this.g.attachProtoVectorListener("handedness",(i,r)=>{this.handedness.push(...zv(i)),pe(this,r)}),this.g.attachEmptyPacketListener("handedness",i=>{pe(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};function Vv(t){return{landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handednesses:t.handedness,handedness:t.handedness}}ei.prototype.recognizeForVideo=ei.prototype.La,ei.prototype.recognize=ei.prototype.Ka,ei.prototype.setOptions=ei.prototype.o,ei.createFromModelPath=function(t,e){return We(ei,t,{baseOptions:{modelAssetPath:e}})},ei.createFromModelBuffer=function(t,e){return We(ei,t,{baseOptions:{modelAssetBuffer:e}})},ei.createFromOptions=function(t,e){return We(ei,t,e)},ei.HAND_CONNECTIONS=Ng;var ti=class extends $n{constructor(t,e){super(new Pi(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Re(t=this.j=new vg,0,1,e=new Lt),this.u=new gg,Re(this.j,0,3,this.u),this.h=new pS,Re(this.j,0,2,this.h),pr(this.h,3,1),Me(this.h,2,.5),Me(this.u,2,.5),Me(this.j,4,.5)}get baseOptions(){return et(this.j,Lt,1)}set baseOptions(t){Re(this.j,0,1,t)}o(t){return"numHands"in t&&pr(this.h,3,t.numHands??1),"minHandDetectionConfidence"in t&&Me(this.h,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Me(this.j,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Me(this.u,2,t.minHandPresenceConfidence??.5),this.l(t)}F(t,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Li(this,t,e),Vv(this)}G(t,e,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],vr(this,t,n,e),Vv(this)}m(){var t=new In;Rt(t,"image_in"),Rt(t,"norm_rect"),it(t,"hand_landmarks"),it(t,"world_hand_landmarks"),it(t,"handedness");const e=new li;qi(e,_L,this.j);const n=new Tn;hi(n,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),yt(n,"IMAGE:image_in"),yt(n,"NORM_RECT:norm_rect"),$e(n,"LANDMARKS:hand_landmarks"),$e(n,"WORLD_LANDMARKS:world_hand_landmarks"),$e(n,"HANDEDNESS:handedness"),n.o(e),fi(t,n),this.g.attachProtoVectorListener("hand_landmarks",(i,r)=>{for(const s of i)i=hc(s),this.landmarks.push(Qh(i));pe(this,r)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{pe(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,r)=>{for(const s of i)i=aa(s),this.worldLandmarks.push(Tl(i));pe(this,r)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{pe(this,i)}),this.g.attachProtoVectorListener("handedness",(i,r)=>{var s=this.handedness,o=s.push;const a=[];for(const l of i){i=qh(l);const c=[];for(const h of i.g())c.push({score:Xt(h,2)??0,index:ji(wi(h,1),0)??-1,categoryName:dr(h,3)??"",displayName:dr(h,4)??""});a.push(c)}o.call(s,...a),pe(this,r)}),this.g.attachEmptyPacketListener("handedness",i=>{pe(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};ti.prototype.detectForVideo=ti.prototype.G,ti.prototype.detect=ti.prototype.F,ti.prototype.setOptions=ti.prototype.o,ti.createFromModelPath=function(t,e){return We(ti,t,{baseOptions:{modelAssetPath:e}})},ti.createFromModelBuffer=function(t,e){return We(ti,t,{baseOptions:{modelAssetBuffer:e}})},ti.createFromOptions=function(t,e){return We(ti,t,e)},ti.HAND_CONNECTIONS=Ng;var zS=Zi([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function Hv(t){t.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function Gv(t){try{if(!t.I)return t.h;t.I(t.h)}finally{ef(t)}}function nu(t,e){t=hc(t),e.push(Qh(t))}var Ct=class extends $n{constructor(t,e){super(new Pi(t,e),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Re(t=this.A=new xS,0,1,e=new Lt),this.u=new gg,Re(this.A,0,2,this.u),this.aa=new yL,Re(this.A,0,3,this.aa),this.j=new Zh,Re(this.A,0,4,this.j),this.H=new aS,Re(this.A,0,5,this.H),this.v=new vS,Re(this.A,0,6,this.v),this.D=new yS,Re(this.A,0,7,this.D),Me(this.j,2,.5),Me(this.j,3,.3),Me(this.H,2,.5),Me(this.v,2,.5),Me(this.v,3,.3),Me(this.D,2,.5),Me(this.u,2,.5)}get baseOptions(){return et(this.A,Lt,1)}set baseOptions(t){Re(this.A,0,1,t)}o(t){return"minFaceDetectionConfidence"in t&&Me(this.j,2,t.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in t&&Me(this.j,3,t.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in t&&Me(this.H,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"minPoseDetectionConfidence"in t&&Me(this.v,2,t.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in t&&Me(this.v,3,t.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in t&&Me(this.D,2,t.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in t&&(this.outputPoseSegmentationMasks=!!t.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in t&&Me(this.u,2,t.minHandLandmarksConfidence??.5),this.l(t)}F(t,e,n){const i=typeof e!="function"?e:{};return this.I=typeof e=="function"?e:n,Hv(this),Li(this,t,i),Gv(this)}G(t,e,n,i){const r=typeof n!="function"?n:{};return this.I=typeof n=="function"?n:i,Hv(this),vr(this,t,r,e),Gv(this)}m(){var t=new In;Rt(t,"input_frames_image"),it(t,"pose_landmarks"),it(t,"pose_world_landmarks"),it(t,"face_landmarks"),it(t,"left_hand_landmarks"),it(t,"left_hand_world_landmarks"),it(t,"right_hand_landmarks"),it(t,"right_hand_world_landmarks");const e=new li,n=new Sv;pm(n,1,Ba("type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),""),function(r,s){if(s!=null)if(Array.isArray(s))_t(r,2,Hh(s,sg,void 0,void 0,!1));else{if(!(typeof s=="string"||s instanceof Nr||rc(s)))throw Error("invalid value in Any.value field: "+s+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");pm(r,2,J0(s,!1,!1),_o())}}(n,this.A.g());const i=new Tn;hi(i,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),mh(i,8,Sv,n),yt(i,"IMAGE:input_frames_image"),$e(i,"POSE_LANDMARKS:pose_landmarks"),$e(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),$e(i,"FACE_LANDMARKS:face_landmarks"),$e(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),$e(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),$e(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),$e(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(e),fi(t,i),Jh(this,t),this.g.attachProtoListener("pose_landmarks",(r,s)=>{nu(r,this.h.poseLandmarks),pe(this,s)}),this.g.attachEmptyPacketListener("pose_landmarks",r=>{pe(this,r)}),this.g.attachProtoListener("pose_world_landmarks",(r,s)=>{var o=this.h.poseWorldLandmarks;r=aa(r),o.push(Tl(r)),pe(this,s)}),this.g.attachEmptyPacketListener("pose_world_landmarks",r=>{pe(this,r)}),this.outputPoseSegmentationMasks&&($e(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),Aa(this,"pose_segmentation_mask"),this.g.W("pose_segmentation_mask",(r,s)=>{this.h.poseSegmentationMasks=[ba(this,r,!0,!this.I)],pe(this,s)}),this.g.attachEmptyPacketListener("pose_segmentation_mask",r=>{this.h.poseSegmentationMasks=[],pe(this,r)})),this.g.attachProtoListener("face_landmarks",(r,s)=>{nu(r,this.h.faceLandmarks),pe(this,s)}),this.g.attachEmptyPacketListener("face_landmarks",r=>{pe(this,r)}),this.outputFaceBlendshapes&&(it(t,"extra_blendshapes"),$e(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",(r,s)=>{var o=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(r=qh(r),o.push(Eg(r.g()??[]))),pe(this,s)}),this.g.attachEmptyPacketListener("extra_blendshapes",r=>{pe(this,r)})),this.g.attachProtoListener("left_hand_landmarks",(r,s)=>{nu(r,this.h.leftHandLandmarks),pe(this,s)}),this.g.attachEmptyPacketListener("left_hand_landmarks",r=>{pe(this,r)}),this.g.attachProtoListener("left_hand_world_landmarks",(r,s)=>{var o=this.h.leftHandWorldLandmarks;r=aa(r),o.push(Tl(r)),pe(this,s)}),this.g.attachEmptyPacketListener("left_hand_world_landmarks",r=>{pe(this,r)}),this.g.attachProtoListener("right_hand_landmarks",(r,s)=>{nu(r,this.h.rightHandLandmarks),pe(this,s)}),this.g.attachEmptyPacketListener("right_hand_landmarks",r=>{pe(this,r)}),this.g.attachProtoListener("right_hand_world_landmarks",(r,s)=>{var o=this.h.rightHandWorldLandmarks;r=aa(r),o.push(Tl(r)),pe(this,s)}),this.g.attachEmptyPacketListener("right_hand_world_landmarks",r=>{pe(this,r)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Ct.prototype.detectForVideo=Ct.prototype.G,Ct.prototype.detect=Ct.prototype.F,Ct.prototype.setOptions=Ct.prototype.o,Ct.createFromModelPath=function(t,e){return We(Ct,t,{baseOptions:{modelAssetPath:e}})},Ct.createFromModelBuffer=function(t,e){return We(Ct,t,{baseOptions:{modelAssetBuffer:e}})},Ct.createFromOptions=function(t,e){return We(Ct,t,e)},Ct.HAND_CONNECTIONS=Ng,Ct.POSE_CONNECTIONS=zS,Ct.FACE_LANDMARKS_LIPS=bg,Ct.FACE_LANDMARKS_LEFT_EYE=Pg,Ct.FACE_LANDMARKS_LEFT_EYEBROW=Lg,Ct.FACE_LANDMARKS_LEFT_IRIS=FS,Ct.FACE_LANDMARKS_RIGHT_EYE=Dg,Ct.FACE_LANDMARKS_RIGHT_EYEBROW=Ig,Ct.FACE_LANDMARKS_RIGHT_IRIS=OS,Ct.FACE_LANDMARKS_FACE_OVAL=Ug,Ct.FACE_LANDMARKS_CONTOURS=kS,Ct.FACE_LANDMARKS_TESSELATION=BS;var gi=class extends $n{constructor(t,e){super(new Pi(t,e),"input_image","norm_rect",!0),this.j={classifications:[]},Re(t=this.h=new SS,0,1,e=new Lt)}get baseOptions(){return et(this.h,Lt,1)}set baseOptions(t){Re(this.h,0,1,t)}o(t){return Re(this.h,0,2,ym(t,et(this.h,Kh,2))),this.l(t)}ua(t,e){return this.j={classifications:[]},Li(this,t,e),this.j}va(t,e,n){return this.j={classifications:[]},vr(this,t,n,e),this.j}m(){var t=new In;Rt(t,"input_image"),Rt(t,"norm_rect"),it(t,"classifications");const e=new li;qi(e,SL,this.h);const n=new Tn;hi(n,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),yt(n,"IMAGE:input_image"),yt(n,"NORM_RECT:norm_rect"),$e(n,"CLASSIFICATIONS:classifications"),n.o(e),fi(t,n),this.g.attachProtoListener("classifications",(i,r)=>{this.j=function(s){const o={classifications:Wr(s,iL,1).map(a=>{var l;return Eg(((l=et(a,dg,4))==null?void 0:l.g())??[],ji(wi(a,2),0),dr(a,3))})};return hh(Rs(s,2))!=null&&(o.timestampMs=ji(hh(Rs(s,2)),0)),o}(sL(i)),pe(this,r)}),this.g.attachEmptyPacketListener("classifications",i=>{pe(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};gi.prototype.classifyForVideo=gi.prototype.va,gi.prototype.classify=gi.prototype.ua,gi.prototype.setOptions=gi.prototype.o,gi.createFromModelPath=function(t,e){return We(gi,t,{baseOptions:{modelAssetPath:e}})},gi.createFromModelBuffer=function(t,e){return We(gi,t,{baseOptions:{modelAssetBuffer:e}})},gi.createFromOptions=function(t,e){return We(gi,t,e)};var ni=class extends $n{constructor(t,e){super(new Pi(t,e),"image_in","norm_rect",!0),this.h=new MS,this.embeddings={embeddings:[]},Re(t=this.h,0,1,e=new Lt)}get baseOptions(){return et(this.h,Lt,1)}set baseOptions(t){Re(this.h,0,1,t)}o(t){var e=this.h,n=et(this.h,Ev,2);return n=n?n.clone():new Ev,t.l2Normalize!==void 0?$l(n,1,t.l2Normalize):"l2Normalize"in t&&_t(n,1),t.quantize!==void 0?$l(n,2,t.quantize):"quantize"in t&&_t(n,2),Re(e,0,2,n),this.l(t)}Ba(t,e){return Li(this,t,e),this.embeddings}Ca(t,e,n){return vr(this,t,n,e),this.embeddings}m(){var t=new In;Rt(t,"image_in"),Rt(t,"norm_rect"),it(t,"embeddings_out");const e=new li;qi(e,ML,this.h);const n=new Tn;hi(n,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),yt(n,"IMAGE:image_in"),yt(n,"NORM_RECT:norm_rect"),$e(n,"EMBEDDINGS:embeddings_out"),n.o(e),fi(t,n),this.g.attachProtoListener("embeddings_out",(i,r)=>{i=cL(i),this.embeddings=function(s){return{embeddings:Wr(s,aL,1).map(o=>{var l,c;const a={headIndex:ji(wi(o,3),0)??-1,headName:dr(o,4)??""};if(_3(o,_m,Sd(o,1))!==void 0)o=Zo(o=et(o,_m,Sd(o,1)),1,Us),a.floatEmbedding=o.slice();else{const h=new Uint8Array(0);a.quantizedEmbedding=((c=(l=et(o,oL,Sd(o,2)))==null?void 0:l.qa())==null?void 0:c.h())??h}return a}),timestampMs:ji(hh(Rs(s,2)),0)}}(i),pe(this,r)}),this.g.attachEmptyPacketListener("embeddings_out",i=>{pe(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};ni.cosineSimilarity=function(t,e){if(t.floatEmbedding&&e.floatEmbedding)t=Av(t.floatEmbedding,e.floatEmbedding);else{if(!t.quantizedEmbedding||!e.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");t=Av(Tv(t.quantizedEmbedding),Tv(e.quantizedEmbedding))}return t},ni.prototype.embedForVideo=ni.prototype.Ca,ni.prototype.embed=ni.prototype.Ba,ni.prototype.setOptions=ni.prototype.o,ni.createFromModelPath=function(t,e){return We(ni,t,{baseOptions:{modelAssetPath:e}})},ni.createFromModelBuffer=function(t,e){return We(ni,t,{baseOptions:{modelAssetBuffer:e}})},ni.createFromOptions=function(t,e){return We(ni,t,e)};var Mm=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){var t,e;(t=this.confidenceMasks)==null||t.forEach(n=>{n.close()}),(e=this.categoryMask)==null||e.close()}};function Wv(t){t.categoryMask=void 0,t.confidenceMasks=void 0,t.qualityScores=void 0}function Xv(t){try{const e=new Mm(t.confidenceMasks,t.categoryMask,t.qualityScores);if(!t.j)return e;t.j(e)}finally{ef(t)}}Mm.prototype.close=Mm.prototype.close;var On=class extends $n{constructor(t,e){super(new Pi(t,e),"image_in","norm_rect",!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Sg,this.v=new ES,Re(this.h,0,3,this.v),Re(t=this.h,0,1,e=new Lt)}get baseOptions(){return et(this.h,Lt,1)}set baseOptions(t){Re(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?_t(this.h,2,Ba(t.displayNamesLocale)):"displayNamesLocale"in t&&_t(this.h,2),"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}L(){(function(t){var n,i;const e=Wr(t.fa(),Tn,1).filter(r=>dr(r,1).includes("mediapipe.tasks.TensorsToSegmentationCalculator"));if(t.u=[],1<e.length)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");e.length===1&&(((i=(n=et(e[0],li,7))==null?void 0:n.l())==null?void 0:i.g())??new Map).forEach((r,s)=>{t.u[Number(s)]=dr(r,1)})})(this)}ga(t,e,n){const i=typeof e!="function"?e:{};return this.j=typeof e=="function"?e:n,Wv(this),Li(this,t,i),Xv(this)}Na(t,e,n,i){const r=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:i,Wv(this),vr(this,t,r,e),Xv(this)}Fa(){return this.u}m(){var t=new In;Rt(t,"image_in"),Rt(t,"norm_rect");const e=new li;qi(e,TS,this.h);const n=new Tn;hi(n,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),yt(n,"IMAGE:image_in"),yt(n,"NORM_RECT:norm_rect"),n.o(e),fi(t,n),Jh(this,t),this.outputConfidenceMasks&&(it(t,"confidence_masks"),$e(n,"CONFIDENCE_MASKS:confidence_masks"),Aa(this,"confidence_masks"),this.g.da("confidence_masks",(i,r)=>{this.confidenceMasks=i.map(s=>ba(this,s,!0,!this.j)),pe(this,r)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],pe(this,i)})),this.outputCategoryMask&&(it(t,"category_mask"),$e(n,"CATEGORY_MASK:category_mask"),Aa(this,"category_mask"),this.g.W("category_mask",(i,r)=>{this.categoryMask=ba(this,i,!1,!this.j),pe(this,r)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,pe(this,i)})),it(t,"quality_scores"),$e(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,r)=>{this.qualityScores=i,pe(this,r)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,pe(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};On.prototype.getLabels=On.prototype.Fa,On.prototype.segmentForVideo=On.prototype.Na,On.prototype.segment=On.prototype.ga,On.prototype.setOptions=On.prototype.o,On.createFromModelPath=function(t,e){return We(On,t,{baseOptions:{modelAssetPath:e}})},On.createFromModelBuffer=function(t,e){return We(On,t,{baseOptions:{modelAssetBuffer:e}})},On.createFromOptions=function(t,e){return We(On,t,e)};var Em=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){var t,e;(t=this.confidenceMasks)==null||t.forEach(n=>{n.close()}),(e=this.categoryMask)==null||e.close()}};Em.prototype.close=Em.prototype.close;var PL=class extends xe{constructor(t){super(t)}},Pa=[0,Gt,-2],LL=[0,Fr,-3,jt],sf=[0,Fr,-3,jt,Fr,-1],VS=[0,sf],DL=[0,VS,Pa],IL=[0,sf,Pa],HS=[0,sf,Gt,-1],UL=[0,HS,Pa],NL=[0,Fr,-3,jt,Pa,-1],FL=[0,Fr,-3,jt,mr],Td=class extends xe{constructor(t){super(t)}},$v=[0,Fr,-1,jt],GS=class extends xe{constructor(){super()}};GS.B=[1];var jv=class extends xe{constructor(t){super(t)}},wm=[1,2,3,4,5,6,7,8,9,10,14,15],OL=[0,wm,pt,sf,pt,IL,pt,VS,pt,DL,pt,$v,pt,FL,pt,LL,pt,[0,dt,Fr,-2,jt,Gt,jt,-1,2,Fr,Pa],pt,HS,pt,UL,Fr,Pa,dt,pt,NL,pt,[0,Qt,$v]],kL=[0,dt,Gt,-1,jt],Tm=class extends xe{constructor(){super()}};Tm.B=[1],Tm.prototype.g=Yh([0,Qt,OL,dt,kL]);var tr=class extends $n{constructor(t,e){super(new Pi(t,e),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Sg,this.v=new ES,Re(this.h,0,3,this.v),Re(t=this.h,0,1,e=new Lt)}get baseOptions(){return et(this.h,Lt,1)}set baseOptions(t){Re(this.h,0,1,t)}o(t){return"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}ga(t,e,n,i){const r=typeof n!="function"?n:{};this.j=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.J+1,i=new Tm;const s=new jv;var o=new PL;if(pr(o,1,255),Re(s,0,12,o),e.keypoint&&e.scribble)throw Error("Cannot provide both keypoint and scribble.");if(e.keypoint){var a=new Td;$l(a,3,!0),Me(a,1,e.keypoint.x),Me(a,2,e.keypoint.y),Ml(s,5,wm,a)}else{if(!e.scribble)throw Error("Must provide either a keypoint or a scribble.");for(a of(o=new GS,e.scribble))$l(e=new Td,3,!0),Me(e,1,a.x),Me(e,2,a.y),mh(o,1,Td,e);Ml(s,15,wm,o)}mh(i,1,jv,s),this.g.addProtoToStream(i.g(),"drishti.RenderData","roi_in",n),Li(this,t,r);e:{try{const c=new Em(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var l=c;break e}this.j(c)}finally{ef(this)}l=void 0}return l}m(){var t=new In;Rt(t,"image_in"),Rt(t,"roi_in"),Rt(t,"norm_rect_in");const e=new li;qi(e,TS,this.h);const n=new Tn;hi(n,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraph"),yt(n,"IMAGE:image_in"),yt(n,"ROI:roi_in"),yt(n,"NORM_RECT:norm_rect_in"),n.o(e),fi(t,n),Jh(this,t),this.outputConfidenceMasks&&(it(t,"confidence_masks"),$e(n,"CONFIDENCE_MASKS:confidence_masks"),Aa(this,"confidence_masks"),this.g.da("confidence_masks",(i,r)=>{this.confidenceMasks=i.map(s=>ba(this,s,!0,!this.j)),pe(this,r)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],pe(this,i)})),this.outputCategoryMask&&(it(t,"category_mask"),$e(n,"CATEGORY_MASK:category_mask"),Aa(this,"category_mask"),this.g.W("category_mask",(i,r)=>{this.categoryMask=ba(this,i,!1,!this.j),pe(this,r)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,pe(this,i)})),it(t,"quality_scores"),$e(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,r)=>{this.qualityScores=i,pe(this,r)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,pe(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};tr.prototype.segment=tr.prototype.ga,tr.prototype.setOptions=tr.prototype.o,tr.createFromModelPath=function(t,e){return We(tr,t,{baseOptions:{modelAssetPath:e}})},tr.createFromModelBuffer=function(t,e){return We(tr,t,{baseOptions:{modelAssetBuffer:e}})},tr.createFromOptions=function(t,e){return We(tr,t,e)};var _i=class extends $n{constructor(t,e){super(new Pi(t,e),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},Re(t=this.h=new Mg,0,1,e=new Lt)}get baseOptions(){return et(this.h,Lt,1)}set baseOptions(t){Re(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?_t(this.h,2,Ba(t.displayNamesLocale)):"displayNamesLocale"in t&&_t(this.h,2),t.maxResults!==void 0?pr(this.h,3,t.maxResults):"maxResults"in t&&_t(this.h,3),t.scoreThreshold!==void 0?Me(this.h,4,t.scoreThreshold):"scoreThreshold"in t&&_t(this.h,4),t.categoryAllowlist!==void 0?ph(this.h,5,t.categoryAllowlist):"categoryAllowlist"in t&&_t(this.h,5),t.categoryDenylist!==void 0?ph(this.h,6,t.categoryDenylist):"categoryDenylist"in t&&_t(this.h,6),this.l(t)}F(t,e){return this.j={detections:[]},Li(this,t,e),this.j}G(t,e,n){return this.j={detections:[]},vr(this,t,n,e),this.j}m(){var t=new In;Rt(t,"input_frame_gpu"),Rt(t,"norm_rect"),it(t,"detections");const e=new li;qi(e,wL,this.h);const n=new Tn;hi(n,"mediapipe.tasks.vision.ObjectDetectorGraph"),yt(n,"IMAGE:input_frame_gpu"),yt(n,"NORM_RECT:norm_rect"),$e(n,"DETECTIONS:detections"),n.o(e),fi(t,n),this.g.attachProtoVectorListener("detections",(i,r)=>{for(const s of i)i=$3(s),this.j.detections.push(RS(i));pe(this,r)}),this.g.attachEmptyPacketListener("detections",i=>{pe(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};_i.prototype.detectForVideo=_i.prototype.G,_i.prototype.detect=_i.prototype.F,_i.prototype.setOptions=_i.prototype.o,_i.createFromModelPath=async function(t,e){return We(_i,t,{baseOptions:{modelAssetPath:e}})},_i.createFromModelBuffer=function(t,e){return We(_i,t,{baseOptions:{modelAssetBuffer:e}})},_i.createFromOptions=function(t,e){return We(_i,t,e)};var Am=class{constructor(t,e,n){this.landmarks=t,this.worldLandmarks=e,this.segmentationMasks=n}close(){var t;(t=this.segmentationMasks)==null||t.forEach(e=>{e.close()})}};function Yv(t){t.landmarks=[],t.worldLandmarks=[],t.segmentationMasks=void 0}function qv(t){try{const e=new Am(t.landmarks,t.worldLandmarks,t.segmentationMasks);if(!t.j)return e;t.j(e)}finally{ef(t)}}Am.prototype.close=Am.prototype.close;var kn=class extends $n{constructor(t,e){super(new Pi(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Re(t=this.h=new AS,0,1,e=new Lt),this.D=new yS,Re(this.h,0,3,this.D),this.v=new vS,Re(this.h,0,2,this.v),pr(this.v,4,1),Me(this.v,2,.5),Me(this.D,2,.5),Me(this.h,4,.5)}get baseOptions(){return et(this.h,Lt,1)}set baseOptions(t){Re(this.h,0,1,t)}o(t){return"numPoses"in t&&pr(this.v,4,t.numPoses??1),"minPoseDetectionConfidence"in t&&Me(this.v,2,t.minPoseDetectionConfidence??.5),"minTrackingConfidence"in t&&Me(this.h,4,t.minTrackingConfidence??.5),"minPosePresenceConfidence"in t&&Me(this.D,2,t.minPosePresenceConfidence??.5),"outputSegmentationMasks"in t&&(this.outputSegmentationMasks=t.outputSegmentationMasks??!1),this.l(t)}F(t,e,n){const i=typeof e!="function"?e:{};return this.j=typeof e=="function"?e:n,Yv(this),Li(this,t,i),qv(this)}G(t,e,n,i){const r=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:i,Yv(this),vr(this,t,r,e),qv(this)}m(){var t=new In;Rt(t,"image_in"),Rt(t,"norm_rect"),it(t,"normalized_landmarks"),it(t,"world_landmarks"),it(t,"segmentation_masks");const e=new li;qi(e,TL,this.h);const n=new Tn;hi(n,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),yt(n,"IMAGE:image_in"),yt(n,"NORM_RECT:norm_rect"),$e(n,"NORM_LANDMARKS:normalized_landmarks"),$e(n,"WORLD_LANDMARKS:world_landmarks"),n.o(e),fi(t,n),Jh(this,t),this.g.attachProtoVectorListener("normalized_landmarks",(i,r)=>{this.landmarks=[];for(const s of i)i=hc(s),this.landmarks.push(Qh(i));pe(this,r)}),this.g.attachEmptyPacketListener("normalized_landmarks",i=>{this.landmarks=[],pe(this,i)}),this.g.attachProtoVectorListener("world_landmarks",(i,r)=>{this.worldLandmarks=[];for(const s of i)i=aa(s),this.worldLandmarks.push(Tl(i));pe(this,r)}),this.g.attachEmptyPacketListener("world_landmarks",i=>{this.worldLandmarks=[],pe(this,i)}),this.outputSegmentationMasks&&($e(n,"SEGMENTATION_MASK:segmentation_masks"),Aa(this,"segmentation_masks"),this.g.da("segmentation_masks",(i,r)=>{this.segmentationMasks=i.map(s=>ba(this,s,!0,!this.j)),pe(this,r)}),this.g.attachEmptyPacketListener("segmentation_masks",i=>{this.segmentationMasks=[],pe(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};kn.prototype.detectForVideo=kn.prototype.G,kn.prototype.detect=kn.prototype.F,kn.prototype.setOptions=kn.prototype.o,kn.createFromModelPath=function(t,e){return We(kn,t,{baseOptions:{modelAssetPath:e}})},kn.createFromModelBuffer=function(t,e){return We(kn,t,{baseOptions:{modelAssetBuffer:e}})},kn.createFromOptions=function(t,e){return We(kn,t,e)},kn.POSE_CONNECTIONS=zS;const BL="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm",zL="https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task";class VL{constructor(e,n={}){Wg(this,"_loop",()=>{if(!this.running)return;const e=performance.now();if(this.video.readyState>=2){const n=this.landmarker.detectForVideo(this.video,e);n.landmarks&&n.landmarks[0]&&this._process(n.landmarks[0],e)}requestAnimationFrame(this._loop)});this.video=e,this.cb=n,this.running=!1,this.landmarker=null,this.baselineY=null,this.prevY=null,this.lastJump=0,this.lastCrouch=0,this.lane=1,this.t=0}async start(){var i,r,s,o,a,l;(r=(i=this.cb).onStatus)==null||r.call(i,"Chargement du modèle…");const e=await qs.forVisionTasks(BL);this.landmarker=await kn.createFromOptions(e,{baseOptions:{modelAssetPath:zL,delegate:"GPU"},runningMode:"VIDEO",numPoses:1}),(o=(s=this.cb).onStatus)==null||o.call(s,"Accès à la caméra…");const n=await navigator.mediaDevices.getUserMedia({video:{width:640,height:480,facingMode:"user"},audio:!1});this.video.srcObject=n,await this.video.play(),this.running=!0,this.baselineY=null,(l=(a=this.cb).onStatus)==null||l.call(a,"Caméra active — bouge !"),this._loop()}stop(){this.running=!1;const e=this.video.srcObject;e&&e.getTracks().forEach(n=>n.stop()),this.video.srcObject=null}_process(e,n){var g,p,x,m,u,_,v,S;const i=e[11],r=e[12],s=e[23],o=e[24];if(!i||!r||!s||!o)return;const a=(i.y+r.y+s.y+o.y)/4,c=1-(i.x+r.x+s.x+o.x)/4;this.baselineY==null&&(this.baselineY=a);const h=a<this.baselineY-.08?.002:.03;this.baselineY+=(a-this.baselineY)*h;const d=this.prevY==null?0:a-this.prevY;this.prevY=a,a<this.baselineY-.06&&d<-.008&&n-this.lastJump>600&&(this.lastJump=n,(p=(g=this.cb).onJump)==null||p.call(g)),a>this.baselineY+.07&&n-this.lastCrouch>700&&(this.lastCrouch=n,(m=(x=this.cb).onCrouch)==null||m.call(x));let f=1;c<.4?f=0:c>.6&&(f=2),f!==this.lane&&(this.lane=f,(_=(u=this.cb).onLane)==null||_.call(u,f)),(S=(v=this.cb).onPose)==null||S.call(v,{cy:a,mx:c,baseline:this.baselineY})}}function HL(){const t=Rn.useRef(null),e=Rn.useRef(null),n=Rn.useRef(null),i=Rn.useRef(null),[r,s]=Rn.useState("menu"),[o,a]=Rn.useState(0),[l,c]=Rn.useState(0),[h,d]=Rn.useState(()=>Number(localStorage.getItem("sublive_best")||0)),[f,g]=Rn.useState({magnet:!1,boots:!1}),[p,x]=Rn.useState("off"),[m,u]=Rn.useState("");Rn.useEffect(()=>{const S=new Vb(t.current,{onScore:(F,N)=>{a(F),c(N)},onPower:(F,N)=>g({magnet:F>0,boots:N>0}),onGameOver:F=>{s("over"),F>h&&(d(F),localStorage.setItem("sublive_best",String(F)))}});e.current=S;const C=F=>{const N=e.current;if(N)switch(F.key){case"ArrowLeft":case"a":case"q":N.moveLeft();break;case"ArrowRight":case"d":N.moveRight();break;case"ArrowUp":case"w":case"z":case" ":F.preventDefault(),N.jump();break;case"ArrowDown":case"s":N.roll();break;default:return}};window.addEventListener("keydown",C);let A=0,T=0,b=0;const H=t.current,y=F=>{const N=F.changedTouches[0];A=N.clientX,T=N.clientY,b=Date.now()},E=F=>{const N=e.current;if(!N)return;const W=F.changedTouches[0],$=W.clientX-A,V=W.clientY-T;if(Math.abs($)<25&&Math.abs(V)<25&&Date.now()-b<250){N.jump();return}Math.abs($)>Math.abs(V)?$>0?N.moveRight():N.moveLeft():V>0?N.roll():N.jump()};return H.addEventListener("touchstart",y,{passive:!0}),H.addEventListener("touchend",E,{passive:!0}),()=>{var F;window.removeEventListener("keydown",C),H.removeEventListener("touchstart",y),H.removeEventListener("touchend",E),(F=i.current)==null||F.stop(),S.destroy()}},[]);const _=async()=>{if(p==="on"||p==="loading")return;x("loading");const S=new VL(n.current,{onStatus:C=>u(C),onJump:()=>{var C;return(C=e.current)==null?void 0:C.jump()},onCrouch:()=>{var C;return(C=e.current)==null?void 0:C.roll()},onLane:C=>{var A;return(A=e.current)==null?void 0:A.setLane(C)}});i.current=S;try{await S.start(),x("on")}catch(C){console.error(C),x("error"),u((C==null?void 0:C.message)||"Caméra indisponible")}},v=()=>{a(0),c(0),s("playing"),e.current.start()};return He.jsxs("div",{className:"app",children:[He.jsx("canvas",{ref:t}),He.jsxs("div",{className:`cam ${p==="on"?"live":""}`,children:[He.jsx("video",{ref:n,playsInline:!0,muted:!0}),p==="on"&&He.jsx("span",{className:"cam-badge",children:"● LIVE"})]}),r==="playing"&&He.jsxs("div",{className:"hud",children:[He.jsx("div",{className:"pill score",children:o.toLocaleString("fr-FR")}),He.jsxs("div",{className:"pill coins",children:["🪙 ",l]}),f.magnet&&He.jsx("div",{className:"pill power",children:"🧲"}),f.boots&&He.jsx("div",{className:"pill power",children:"👢"})]}),r==="menu"&&He.jsxs("div",{className:"overlay",children:[He.jsx("h1",{children:"subLive"}),He.jsx("p",{children:"Cours le plus loin possible, esquive les obstacles et ramasse les pièces. La vitesse augmente sans cesse !"}),He.jsxs("div",{className:"cam-ctrl",children:[He.jsx("button",{className:"btn ghost",onClick:_,disabled:p==="on"||p==="loading",children:p==="on"?"📷 Caméra active":p==="loading"?"⏳ …":"📷 Activer la webcam"}),m&&He.jsx("span",{className:"cam-msg",children:m})]}),He.jsx("div",{className:"keys",children:p==="on"?He.jsxs("span",{children:["🕺 ",He.jsx("b",{children:"Saute"})," pour sauter · ",He.jsx("b",{children:"baisse-toi"})," pour glisser · ",He.jsx("b",{children:"déplace-toi"})," à gauche/droite"]}):He.jsxs("span",{children:[He.jsx("kbd",{children:"←"}),He.jsx("kbd",{children:"→"})," voie · ",He.jsx("kbd",{children:"↑"}),"/",He.jsx("kbd",{children:"Espace"})," sauter · ",He.jsx("kbd",{children:"↓"})," glisser"]})}),He.jsx("button",{className:"btn",onClick:v,children:"Jouer ▶"}),h>0&&He.jsxs("p",{className:"final",children:["Meilleur score : ",h.toLocaleString("fr-FR")]})]}),r==="over"&&He.jsxs("div",{className:"overlay",children:[He.jsx("h2",{children:"Perdu !"}),He.jsxs("p",{className:"final",children:["Score : ",o.toLocaleString("fr-FR")," · 🪙 ",l]}),He.jsxs("p",{className:"final",children:["Meilleur : ",h.toLocaleString("fr-FR")]}),He.jsx("button",{className:"btn",onClick:v,children:"Rejouer ↻"})]})]})}Ad.createRoot(document.getElementById("root")).render(He.jsx(fM.StrictMode,{children:He.jsx(HL,{})}));
