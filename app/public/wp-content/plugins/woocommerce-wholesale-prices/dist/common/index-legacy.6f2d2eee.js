!function(){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n(t)}function t(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var i=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=i){var e,c,a,o,r=[],l=!0,d=!1;try{if(a=(i=i.call(n)).next,0===t){if(Object(i)!==i)return;l=!1}else for(;!(l=(e=a.call(i)).done)&&(r.push(e.value),r.length!==t);l=!0);}catch(n){d=!0,c=n}finally{try{if(!l&&null!=i.return&&(o=i.return(),Object(o)!==o))return}finally{if(d)throw c}}return r}}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return i(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(n,t){(null==t||t>n.length)&&(t=n.length);for(var i=0,e=new Array(t);i<t;i++)e[i]=n[i];return e}function e(t,i,e){return(i=function(t){var i=function(t,i){if("object"!==n(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var c=e.call(t,i||"default");if("object"!==n(c))return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===i?String:Number)(t)}(t,"string");return"symbol"===n(i)?i:String(i)}(i))in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}System.register(["../apps/settings/index-legacy.14a49b0f.js","./KeyCode-legacy.b0ba69c7.js","./index-legacy.23e4d69e.js","./FormItemContext-legacy.14405347.js"],(function(n,i){"use strict";var c,a,o,r,l,d,u,s,h,g,w,p,f,S,v,m,b,I,M,y,k,x,C,P,z,E,H;return{setters:[function(n){c=n.G,a=n.H,o=n.ai,r=n._,l=n.a1,d=n.aj,u=n.I,s=n.ak,h=n.d,g=n.af,w=n.J,p=n.al,f=n.a2,S=n.r,v=n.y,m=n.L,b=n.v,I=n.x,M=n.b,y=n.D,k=n.E,x=n.am,C=n.Q,P=n.P},function(n){z=n.K},function(n){E=n.W},function(n){H=n.u}],execute:function(){var i=function(n){var t,i,c,a,o,r=n.componentCls,l="".concat(r,"-inner");return e({},r,e({},"&".concat(r,"-small"),(e(o={minWidth:n.switchMinWidthSM,height:n.switchHeightSM,lineHeight:"".concat(n.switchHeightSM,"px")},"".concat(r,"-inner"),(e(t={paddingInlineStart:n.switchInnerMarginMaxSM,paddingInlineEnd:n.switchInnerMarginMinSM},"".concat(l,"-checked"),{marginInlineStart:"calc(-100% + ".concat(n.switchPinSizeSM+2*n.switchPadding,"px - ").concat(2*n.switchInnerMarginMaxSM,"px)"),marginInlineEnd:"calc(100% - ".concat(n.switchPinSizeSM+2*n.switchPadding,"px + ").concat(2*n.switchInnerMarginMaxSM,"px)")}),e(t,"".concat(l,"-unchecked"),{marginTop:-n.switchHeightSM,marginInlineStart:0,marginInlineEnd:0}),t)),e(o,"".concat(r,"-handle"),{width:n.switchPinSizeSM,height:n.switchPinSizeSM}),e(o,"".concat(r,"-loading-icon"),{top:(n.switchPinSizeSM-n.switchLoadingIconSize)/2,fontSize:n.switchLoadingIconSize}),e(o,"&".concat(r,"-checked"),(e(c={},"".concat(r,"-inner"),(e(i={paddingInlineStart:n.switchInnerMarginMinSM,paddingInlineEnd:n.switchInnerMarginMaxSM},"".concat(l,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),e(i,"".concat(l,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(n.switchPinSizeSM+2*n.switchPadding,"px + ").concat(2*n.switchInnerMarginMaxSM,"px)"),marginInlineEnd:"calc(-100% + ".concat(n.switchPinSizeSM+2*n.switchPadding,"px - ").concat(2*n.switchInnerMarginMaxSM,"px)")}),i)),e(c,"".concat(r,"-handle"),{insetInlineStart:"calc(100% - ".concat(n.switchPinSizeSM+n.switchPadding,"px)")}),c)),e(o,"&:not(".concat(r,"-disabled):active"),(e(a={},"&:not(".concat(r,"-checked) ").concat(l),e({},"".concat(l,"-unchecked"),{marginInlineStart:n.marginXXS/2,marginInlineEnd:-n.marginXXS/2})),e(a,"&".concat(r,"-checked ").concat(l),e({},"".concat(l,"-checked"),{marginInlineStart:-n.marginXXS/2,marginInlineEnd:n.marginXXS/2})),a)),o)))},A=function(n){var t,i=n.componentCls;return e({},i,(e(t={},"".concat(i,"-loading-icon").concat(n.iconCls),{position:"relative",top:(n.switchPinSize-n.fontSize)/2,color:n.switchLoadingIconColor,verticalAlign:"top"}),e(t,"&".concat(i,"-checked ").concat(i,"-loading-icon"),{color:n.switchColor}),t))},T=function(n){var t,i,c=n.componentCls,a="".concat(c,"-handle");return e({},c,(e(i={},a,{position:"absolute",top:n.switchPadding,insetInlineStart:n.switchPadding,width:n.switchPinSize,height:n.switchPinSize,transition:"all ".concat(n.switchDuration," ease-in-out"),"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:n.colorWhite,borderRadius:n.switchPinSize/2,boxShadow:n.switchHandleShadow,transition:"all ".concat(n.switchDuration," ease-in-out"),content:'""'}}),e(i,"&".concat(c,"-checked ").concat(a),{insetInlineStart:"calc(100% - ".concat(n.switchPinSize+n.switchPadding,"px)")}),e(i,"&:not(".concat(c,"-disabled):active"),(e(t={},"".concat(a,"::before"),{insetInlineEnd:n.switchHandleActiveInset,insetInlineStart:0}),e(t,"&".concat(c,"-checked ").concat(a,"::before"),{insetInlineEnd:0,insetInlineStart:n.switchHandleActiveInset}),t)),i))},j=function(n){var t,i,c,a,o=n.componentCls,r="".concat(o,"-inner");return e({},o,(e(a={},r,(e(t={display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:n.switchInnerMarginMax,paddingInlineEnd:n.switchInnerMarginMin,transition:"padding-inline-start ".concat(n.switchDuration," ease-in-out, padding-inline-end ").concat(n.switchDuration," ease-in-out")},"".concat(r,"-checked, ").concat(r,"-unchecked"),{display:"block",color:n.colorTextLightSolid,fontSize:n.fontSizeSM,transition:"margin-inline-start ".concat(n.switchDuration," ease-in-out, margin-inline-end ").concat(n.switchDuration," ease-in-out"),pointerEvents:"none"}),e(t,"".concat(r,"-checked"),{marginInlineStart:"calc(-100% + ".concat(n.switchPinSize+2*n.switchPadding,"px - ").concat(2*n.switchInnerMarginMax,"px)"),marginInlineEnd:"calc(100% - ".concat(n.switchPinSize+2*n.switchPadding,"px + ").concat(2*n.switchInnerMarginMax,"px)")}),e(t,"".concat(r,"-unchecked"),{marginTop:-n.switchHeight,marginInlineStart:0,marginInlineEnd:0}),t)),e(a,"&".concat(o,"-checked ").concat(r),(e(i={paddingInlineStart:n.switchInnerMarginMin,paddingInlineEnd:n.switchInnerMarginMax},"".concat(r,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),e(i,"".concat(r,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(n.switchPinSize+2*n.switchPadding,"px + ").concat(2*n.switchInnerMarginMax,"px)"),marginInlineEnd:"calc(-100% + ".concat(n.switchPinSize+2*n.switchPadding,"px - ").concat(2*n.switchInnerMarginMax,"px)")}),i)),e(a,"&:not(".concat(o,"-disabled):active"),(e(c={},"&:not(".concat(o,"-checked) ").concat(r),e({},"".concat(r,"-unchecked"),{marginInlineStart:2*n.switchPadding,marginInlineEnd:2*-n.switchPadding})),e(c,"&".concat(o,"-checked ").concat(r),e({},"".concat(r,"-checked"),{marginInlineStart:2*-n.switchPadding,marginInlineEnd:2*n.switchPadding})),c)),a))},O=function(n){var t,i=n.componentCls;return e({},i,r(r(r(r({},l(n)),e({position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:n.switchMinWidth,height:n.switchHeight,lineHeight:"".concat(n.switchHeight,"px"),verticalAlign:"middle",background:n.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:"all ".concat(n.motionDurationMid),userSelect:"none"},"&:hover:not(".concat(i,"-disabled)"),{background:n.colorTextTertiary})),d(n)),(e(t={},"&".concat(i,"-checked"),e({background:n.switchColor},"&:hover:not(".concat(i,"-disabled)"),{background:n.colorPrimaryHover})),e(t,"&".concat(i,"-loading, &").concat(i,"-disabled"),{cursor:"not-allowed",opacity:n.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}}),e(t,"&".concat(i,"-rtl"),{direction:"rtl"}),t)))},D=c("Switch",(function(n){var t=n.fontSize*n.lineHeight,e=n.controlHeight/2,c=t-4,r=e-4,l=a(n,{switchMinWidth:2*c+8,switchHeight:t,switchDuration:n.motionDurationMid,switchColor:n.colorPrimary,switchDisabledOpacity:n.opacityLoading,switchInnerMarginMin:c/2,switchInnerMarginMax:c+2+4,switchPadding:2,switchPinSize:c,switchBg:n.colorBgContainer,switchMinWidthSM:2*r+4,switchHeightSM:e,switchInnerMarginMinSM:r/2,switchInnerMarginMaxSM:r+2+4,switchPinSizeSM:r,switchHandleShadow:"0 2px 4px 0 ".concat(new o("#00230b").setAlpha(.2).toRgbString()),switchLoadingIconSize:.75*n.fontSizeIcon,switchLoadingIconColor:"rgba(0, 0, 0, ".concat(n.opacityLoading,")"),switchHandleActiveInset:"-30%"});return[O(l),j(l),T(l),A(l),i(l)]})),F=s("small","default"),B=h({compatConfig:{MODE:3},name:"ASwitch",__ANT_SWITCH:!0,inheritAttrs:!1,props:{id:String,prefixCls:String,size:P.oneOf(F),disabled:{type:Boolean,default:void 0},checkedChildren:P.any,unCheckedChildren:P.any,tabindex:P.oneOfType([P.string,P.number]),autofocus:{type:Boolean,default:void 0},loading:{type:Boolean,default:void 0},checked:P.oneOfType([P.string,P.number,P.looseBool]),checkedValue:P.oneOfType([P.string,P.number,P.looseBool]).def(!0),unCheckedValue:P.oneOfType([P.string,P.number,P.looseBool]).def(!1),onChange:{type:Function},onClick:{type:Function},onKeydown:{type:Function},onMouseup:{type:Function},"onUpdate:checked":{type:Function},onBlur:Function,onFocus:Function},slots:Object,setup:function(n,i){var c=i.attrs,a=i.slots,o=i.expose,r=i.emit,l=H(),d=g(),u=w((function(){var t;return null!==(t=n.disabled)&&void 0!==t?t:d.value}));p((function(){f(),f()}));var s=S(void 0!==n.checked?n.checked:c.defaultChecked),h=w((function(){return s.value===n.checkedValue}));v((function(){return n.checked}),(function(){s.value=n.checked}));var P=m("switch",n),A=P.prefixCls,T=P.direction,j=P.size,O=t(D(A),2),F=O[0],B=O[1],L=S(),V=function(){var n;null===(n=L.value)||void 0===n||n.focus()};o({focus:V,blur:function(){var n;null===(n=L.value)||void 0===n||n.blur()}}),b((function(){I((function(){n.autofocus&&!u.value&&L.value.focus()}))}));var W=function(n,t){u.value||(r("update:checked",n),r("change",n,t),l.onFieldChange())},X=function(n){r("blur",n)},R=function(t){V();var i=h.value?n.unCheckedValue:n.checkedValue;W(i,t),r("click",i,t)},K=function(t){t.keyCode===z.LEFT?W(n.unCheckedValue,t):t.keyCode===z.RIGHT&&W(n.checkedValue,t),r("keydown",t)},_=function(n){var t;null===(t=L.value)||void 0===t||t.blur(),r("mouseup",n)},U=w((function(){var t;return e(t={},"".concat(A.value,"-small"),"small"===j.value),e(t,"".concat(A.value,"-loading"),n.loading),e(t,"".concat(A.value,"-checked"),h.value),e(t,"".concat(A.value,"-disabled"),u.value),e(t,A.value,!0),e(t,"".concat(A.value,"-rtl"),"rtl"===T.value),e(t,B.value,!0),t}));return function(){var t;return F(M(E,null,{default:function(){return[M("button",y(y(y({},k(n,["prefixCls","checkedChildren","unCheckedChildren","checked","autofocus","checkedValue","unCheckedValue","id","onChange","onUpdate:checked"])),c),{},{id:null!==(t=n.id)&&void 0!==t?t:l.id.value,onKeydown:K,onClick:R,onBlur:X,onMouseup:_,type:"button",role:"switch","aria-checked":s.value,disabled:u.value||n.loading,class:[c.class,U.value],ref:L}),[M("div",{class:"".concat(A.value,"-handle")},[n.loading?M(x,{class:"".concat(A.value,"-loading-icon")},null):null]),M("span",{class:"".concat(A.value,"-inner")},[M("span",{class:"".concat(A.value,"-inner-checked")},[C(a,n,"checkedChildren")]),M("span",{class:"".concat(A.value,"-inner-unchecked")},[C(a,n,"unCheckedChildren")])])])]}}))}}});n("A",u(B))}}}))}();