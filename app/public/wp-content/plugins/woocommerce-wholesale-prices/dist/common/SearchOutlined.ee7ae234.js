import{b as u,a0 as f}from"../apps/settings/index.7e5fa022.js";function l(t){t.target.composing=!0}function c(t){t.target.composing&&(t.target.composing=!1,d(t.target,"input"))}function d(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function i(t,e,n,r){t.addEventListener(e,n,r)}const p={created(t,e){(!e.modifiers||!e.modifiers.lazy)&&(i(t,"compositionstart",l),i(t,"compositionend",c),i(t,"change",c))}},O=p;var m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"};const g=m;function s(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),r.forEach(function(a){v(t,a,n[a])})}return t}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var o=function(e,n){var r=s({},e,n.attrs);return u(f,s({},r,{icon:g}),null)};o.displayName="SearchOutlined";o.inheritAttrs=!1;const S=o;export{S,O as a};
