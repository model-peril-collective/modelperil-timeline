"use strict";(self.webpackChunkmodelperil_timeline=self.webpackChunkmodelperil_timeline||[]).push([[255],{9558:function(e,t,r){r.r(t),r.d(t,{default:function(){return M}});var n=r(3733),i=r(885);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function c(e){var t=function(e,t){if("object"!==o(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===o(t)?t:String(t)}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,c(n.key),n)}}function a(e,t){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},a(e,t)}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}function l(e,t){if(t&&("object"===o(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=s(e);if(t){var i=s(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return l(this,r)}}var d=r(2791);function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},h.apply(this,arguments)}var y=new Map,v=new WeakMap,p=0,b=void 0;function g(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return"".concat(t,"_").concat("root"===t?(r=e.root)?(v.has(r)||(p+=1,v.set(r,p.toString())),v.get(r)):"0":e[t]);var r})).toString()}function m(e){var t=g(e),r=y.get(t);if(!r){var n,i=new Map,o=new IntersectionObserver((function(t){t.forEach((function(t){var r,o=t.isIntersecting&&n.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=o),null==(r=i.get(t.target))||r.forEach((function(e){e(o,t)}))}))}),e);n=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:o,elements:i},y.set(t,r)}return r}function w(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:b;if("undefined"===typeof window.IntersectionObserver&&void 0!==n){var i=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:"number"===typeof r.threshold?r.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),function(){}}var o=m(r),c=o.id,u=o.observer,a=o.elements,s=a.get(e)||[];return a.has(e)||a.set(e,s),s.push(t),u.observe(e),function(){s.splice(s.indexOf(t),1),0===s.length&&(a.delete(e),u.unobserve(e)),0===a.size&&(u.disconnect(),y.delete(c))}}var _=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function O(e){return"function"!==typeof e.children}d.Component;var j="Hero_wrapper__fcP6D",V="Hero_visible__czIaE",k="Hero_logo__aJgh0",P="Hero_title__0riIs",R="Hero_name__Nghez",S=r.p+"static/media/logo.c43fe375c3cab954c06e.png",I=r(184),M=function(){var e=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.threshold,n=t.delay,o=t.trackVisibility,c=t.rootMargin,u=t.root,a=t.triggerOnce,s=t.skip,l=t.initialInView,f=t.fallbackInView,h=t.onChange,y=d.useState(null),v=(0,i.Z)(y,2),p=v[0],b=v[1],g=d.useRef(),m=d.useState({inView:!!l,entry:void 0}),_=(0,i.Z)(m,2),O=_[0],j=_[1];g.current=h,d.useEffect((function(){var e;if(!s&&p)return e=w(p,(function(t,r){j({inView:t,entry:r}),g.current&&g.current(t,r),r.isIntersecting&&a&&e&&(e(),e=void 0)}),{root:u,rootMargin:c,threshold:r,trackVisibility:o,delay:n},f),function(){e&&e()}}),[Array.isArray(r)?r.toString():r,p,u,c,a,s,o,f,n]);var V=null==(e=O.entry)?void 0:e.target,k=d.useRef();p||!V||a||s||k.current===V||(k.current=V,j({inView:!!l,entry:void 0}));var P=[b,O.inView,O.entry];return P.ref=P[0],P.inView=P[1],P.entry=P[2],P}({threshold:.3,triggerOnce:!0}),t=e.ref,r=e.inView;return(0,I.jsxs)("header",{ref:t,className:(0,n.Z)(j,r&&V),children:[(0,I.jsx)("img",{className:k,src:S,alt:"Model Peril logo"}),(0,I.jsxs)("h1",{className:P,children:[(0,I.jsx)("span",{className:R,children:"Model Peril"})," Timeline"]})]})}}}]);
//# sourceMappingURL=255.7d5ea579.chunk.js.map