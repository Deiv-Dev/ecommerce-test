import{_ as J,P as b,k as Y,l as He,m as We,d as ye,q as A,v as Ae,x as ve,y as q,z as Ee,A as we,b as m,T as Ce,B as _e,C as Se,D as E,E as Le,F as ze,r as H,G as Ke,H as Xe,I as Ye,J as K,K as Ge,L as qe,M as Je,N as ke,O as xe,Q as me,R as Qe,t as Ze,s as et,S as tt,g as De,o as F,c as U,a as Oe,u as D,U as ce,V as $e,e as de,w as X,W as Pe,X as Te,Y as Ne,Z as je,f as he,h as be,i as pe,n as nt,p as ot,$ as Ie}from"../../index.7e5fa022.js";import{u as at}from"../../../../common/settings-store.2e02aea6.js";import lt from"./DnDDataTableControl.c1a73da8.js";import{_ as rt}from"../../../../common/DataTableControl.vue_vue_type_script_setup_true_lang.ce61acc2.js";import{d as it,B as ge}from"../../../../common/index.4696b0ff.js";import{K as dt}from"../../../../common/KeyCode.5c67594e.js";import{P as st}from"../../../../common/motion.0613b233.js";import{N as ut}from"../../../../common/compact-item.42ee0b0f.js";/* empty css                                                                                                 */import{_ as ft}from"../../../../common/_plugin-vue_export-helper.c27b6911.js";import"../../../../common/DnDDataTableControl.vue_vue_type_style_index_0_scoped_1e9aff06_lang.20d3a2f9.js";import"../../../../common/cloneDeep.fe00636a.js";import"../../../../common/_assignValue.5ca01b62.js";import"../../../../common/_getPrototype.c0382199.js";import"../../../../common/EditOutlined.99286c6c.js";import"../../../../common/index.59e8a5e6.js";import"../../../../common/index.d7c7b51e.js";import"../../../../common/useMergedState.28e4599a.js";import"../../../../common/ActionButton.c1747e64.js";import"../../../../common/DeleteOutlined.21f5b41a.js";import"../../../../common/GroupEditFields.vue_vue_type_script_setup_true_lang.4f46f636.js";import"../../../../common/index.6ea81646.js";import"../../../../common/FormItemContext.35071f2d.js";import"../../../../common/createContext.d5228530.js";import"../../../../common/statusUtils.d389f965.js";import"../../../../common/SearchOutlined.ee7ae234.js";import"../../../../common/index.cce61528.js";import"../../../../common/isPlainObject.3e91d860.js";import"../../../../common/index.1dcb9c38.js";import"../../../../common/index.262196b2.js";import"../../../../common/index.bde9bb0c.js";import"../../../../common/useState.ca06f0b3.js";import"../../../../common/index.0c111eb2.js";import"../../../../common/DownOutlined.bfa465e3.js";import"../../../../common/isMobile.358fd6c2.js";import"../../../../common/warning.ed311ba9.js";import"../../../../common/index.d6d25a06.js";import"../../../../common/pickAttrs.d443463a.js";import"../../../../common/slide.233af8a0.js";import"../../../../common/index.568c686c.js";import"../../../../common/index.d80a1bbc.js";import"../../../../common/Checkbox.9e7c80aa.js";import"../../../../common/index.b4d68751.js";import"../../../../common/index.13c388c6.js";import"../../../../common/debounce.0d8c9361.js";const ct=e=>!isNaN(parseFloat(e))&&isFinite(e),Be=ct,Re=()=>({prefixCls:String,width:b.oneOfType([b.string,b.number]),height:b.oneOfType([b.string,b.number]),style:{type:Object,default:void 0},class:String,rootClassName:String,rootStyle:Y(),placement:{type:String},wrapperClassName:String,level:{type:[String,Array]},levelMove:{type:[Number,Function,Array]},duration:String,ease:String,showMask:{type:Boolean,default:void 0},maskClosable:{type:Boolean,default:void 0},maskStyle:{type:Object,default:void 0},afterVisibleChange:Function,keyboard:{type:Boolean,default:void 0},contentWrapperStyle:He(),autofocus:{type:Boolean,default:void 0},open:{type:Boolean,default:void 0},motion:We(),maskMotion:Y()}),pt=()=>J(J({},Re()),{forceRender:{type:Boolean,default:void 0},getContainer:b.oneOfType([b.string,b.func,b.object,b.looseBool])}),vt=()=>J(J({},Re()),{getContainer:Function,getOpenCount:Function,scrollLocker:b.any,inline:Boolean});function yt(e){return Array.isArray(e)?e:[e]}const mt={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend"};Object.keys(mt).filter(e=>{if(typeof document>"u")return!1;const s=document.getElementsByTagName("html")[0];return e in(s?s.style:{})})[0];const ht=!(typeof window<"u"&&window.document&&window.document.createElement);var bt=globalThis&&globalThis.__rest||function(e,s){var c={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&s.indexOf(o)<0&&(c[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,o=Object.getOwnPropertySymbols(e);p<o.length;p++)s.indexOf(o[p])<0&&Object.prototype.propertyIsEnumerable.call(e,o[p])&&(c[o[p]]=e[o[p]]);return c};const gt=ye({compatConfig:{MODE:3},inheritAttrs:!1,props:vt(),emits:["close","handleClick","change"],setup(e,s){let{emit:c,slots:o}=s;const p=A(),$=A(),M=A(),T=A(),P=A();let O=[];"drawer_id_".concat(Number((Date.now()+Math.random()).toString().replace(".",Math.round(Math.random()*9).toString())).toString(16)),Ae(()=>{ve(()=>{var d;const{open:v,getContainer:x,showMask:I,autofocus:g}=e,u=x==null?void 0:x();h(e),v&&(u&&(u.parentNode,document.body),ve(()=>{g&&_()}),I&&((d=e.scrollLocker)===null||d===void 0||d.lock()))})}),q(()=>e.level,()=>{h(e)},{flush:"post"}),q(()=>e.open,()=>{const{open:d,getContainer:v,scrollLocker:x,showMask:I,autofocus:g}=e,u=v==null?void 0:v();u&&(u.parentNode,document.body),d?(g&&_(),I&&(x==null||x.lock())):x==null||x.unLock()},{flush:"post"}),Ee(()=>{var d;const{open:v}=e;v&&(document.body.style.touchAction=""),(d=e.scrollLocker)===null||d===void 0||d.unLock()}),q(()=>e.placement,d=>{d&&(P.value=null)});const _=()=>{var d,v;(v=(d=$.value)===null||d===void 0?void 0:d.focus)===null||v===void 0||v.call(d)},y=d=>{c("close",d)},N=d=>{d.keyCode===dt.ESC&&(d.stopPropagation(),y(d))},S=()=>{const{open:d,afterVisibleChange:v}=e;v&&v(!!d)},h=d=>{let{level:v,getContainer:x}=d;if(ht)return;const I=x==null?void 0:x(),g=I?I.parentNode:null;O=[],v==="all"?(g?Array.prototype.slice.call(g.children):[]).forEach(j=>{j.nodeName!=="SCRIPT"&&j.nodeName!=="STYLE"&&j.nodeName!=="LINK"&&j!==I&&O.push(j)}):v&&yt(v).forEach(u=>{document.querySelectorAll(u).forEach(j=>{O.push(j)})})},L=d=>{c("handleClick",d)},k=A(!1);return q($,()=>{ve(()=>{k.value=!0})}),()=>{var d,v;const{width:x,height:I,open:g,prefixCls:u,placement:j,level:W,levelMove:z,ease:se,duration:ne,getContainer:oe,onChange:ue,afterVisibleChange:ae,showMask:G,maskClosable:Q,maskStyle:Z,keyboard:le,getOpenCount:r,scrollLocker:f,contentWrapperStyle:w,style:B,class:R,rootClassName:re,rootStyle:ee,maskMotion:fe,motion:te,inline:l}=e,t=bt(e,["width","height","open","prefixCls","placement","level","levelMove","ease","duration","getContainer","onChange","afterVisibleChange","showMask","maskClosable","maskStyle","keyboard","getOpenCount","scrollLocker","contentWrapperStyle","style","class","rootClassName","rootStyle","maskMotion","motion","inline"]),n=g&&k.value,i=we(u,{["".concat(u,"-").concat(j)]:!0,["".concat(u,"-open")]:n,["".concat(u,"-inline")]:l,"no-mask":!G,[re]:!0}),a=typeof te=="function"?te(j):te;return m("div",E(E({},Le(t,["autofocus"])),{},{tabindex:-1,class:i,style:ee,ref:$,onKeydown:n&&le?N:void 0}),[m(Ce,fe,{default:()=>[G&&_e(m("div",{class:"".concat(u,"-mask"),onClick:Q?y:void 0,style:Z,ref:M},null),[[Se,n]])]}),m(Ce,E(E({},a),{},{onAfterEnter:S,onAfterLeave:S}),{default:()=>[_e(m("div",{class:"".concat(u,"-content-wrapper"),style:[w],ref:p},[m("div",{class:["".concat(u,"-content"),R],style:B,ref:P},[(d=o.default)===null||d===void 0?void 0:d.call(o)]),o.handler?m("div",{onClick:L,ref:T},[(v=o.handler)===null||v===void 0?void 0:v.call(o)]):null]),[[Se,n]])]})])}}}),Fe=gt;var Me=globalThis&&globalThis.__rest||function(e,s){var c={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&s.indexOf(o)<0&&(c[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,o=Object.getOwnPropertySymbols(e);p<o.length;p++)s.indexOf(o[p])<0&&Object.prototype.propertyIsEnumerable.call(e,o[p])&&(c[o[p]]=e[o[p]]);return c};const wt=ye({compatConfig:{MODE:3},inheritAttrs:!1,props:ze(pt(),{prefixCls:"drawer",placement:"left",getContainer:"body",level:"all",duration:".3s",ease:"cubic-bezier(0.78, 0.14, 0.15, 0.86)",afterVisibleChange:()=>{},showMask:!0,maskClosable:!0,maskStyle:{},wrapperClassName:"",keyboard:!0,forceRender:!1,autofocus:!0}),emits:["handleClick","close"],setup(e,s){let{emit:c,slots:o}=s;const p=H(null),$=T=>{c("handleClick",T)},M=T=>{c("close",T)};return()=>{const{getContainer:T,wrapperClassName:P,rootClassName:O,rootStyle:_,forceRender:y}=e,N=Me(e,["getContainer","wrapperClassName","rootClassName","rootStyle","forceRender"]);let S=null;if(!T)return m(Fe,E(E({},N),{},{rootClassName:O,rootStyle:_,open:e.open,onClose:M,onHandleClick:$,inline:!0}),o);const h=!!o.handler||y;return(h||e.open||p.value)&&(S=m(st,{autoLock:!0,visible:e.open,forceRender:h,getContainer:T,wrapperClassName:P},{default:L=>{var{visible:k,afterClose:d}=L,v=Me(L,["visible","afterClose"]);return m(Fe,E(E(E({ref:p},N),v),{},{rootClassName:O,rootStyle:_,open:k!==void 0?k:e.open,afterVisibleChange:d!==void 0?d:e.afterVisibleChange,onClose:M,onHandleClick:$}),o)}})),S}}}),Ct=wt,_t=e=>{const{componentCls:s,motionDurationSlow:c}=e,o={"&-enter, &-appear, &-leave":{"&-start":{transition:"none"},"&-active":{transition:"all ".concat(c)}}};return{[s]:{["".concat(s,"-mask-motion")]:{"&-enter, &-appear, &-leave":{"&-active":{transition:"all ".concat(c)}},"&-enter, &-appear":{opacity:0,"&-active":{opacity:1}},"&-leave":{opacity:1,"&-active":{opacity:0}}},["".concat(s,"-panel-motion")]:{"&-left":[o,{"&-enter, &-appear":{"&-start":{transform:"translateX(-100%) !important"},"&-active":{transform:"translateX(0)"}},"&-leave":{transform:"translateX(0)","&-active":{transform:"translateX(-100%)"}}}],"&-right":[o,{"&-enter, &-appear":{"&-start":{transform:"translateX(100%) !important"},"&-active":{transform:"translateX(0)"}},"&-leave":{transform:"translateX(0)","&-active":{transform:"translateX(100%)"}}}],"&-top":[o,{"&-enter, &-appear":{"&-start":{transform:"translateY(-100%) !important"},"&-active":{transform:"translateY(0)"}},"&-leave":{transform:"translateY(0)","&-active":{transform:"translateY(-100%)"}}}],"&-bottom":[o,{"&-enter, &-appear":{"&-start":{transform:"translateY(100%) !important"},"&-active":{transform:"translateY(0)"}},"&-leave":{transform:"translateY(0)","&-active":{transform:"translateY(100%)"}}}]}}}},St=_t,kt=e=>{const{componentCls:s,zIndexPopup:c,colorBgMask:o,colorBgElevated:p,motionDurationSlow:$,motionDurationMid:M,padding:T,paddingLG:P,fontSizeLG:O,lineHeightLG:_,lineWidth:y,lineType:N,colorSplit:S,marginSM:h,colorIcon:L,colorIconHover:k,colorText:d,fontWeightStrong:v,drawerFooterPaddingVertical:x,drawerFooterPaddingHorizontal:I}=e,g="".concat(s,"-content-wrapper");return{[s]:{position:"fixed",inset:0,zIndex:c,pointerEvents:"none","&-pure":{position:"relative",background:p,["&".concat(s,"-left")]:{boxShadow:e.boxShadowDrawerLeft},["&".concat(s,"-right")]:{boxShadow:e.boxShadowDrawerRight},["&".concat(s,"-top")]:{boxShadow:e.boxShadowDrawerUp},["&".concat(s,"-bottom")]:{boxShadow:e.boxShadowDrawerDown}},"&-inline":{position:"absolute"},["".concat(s,"-mask")]:{position:"absolute",inset:0,zIndex:c,background:o,pointerEvents:"auto"},[g]:{position:"absolute",zIndex:c,transition:"all ".concat($),"&-hidden":{display:"none"}},["&-left > ".concat(g)]:{top:0,bottom:0,left:{_skip_check_:!0,value:0},boxShadow:e.boxShadowDrawerLeft},["&-right > ".concat(g)]:{top:0,right:{_skip_check_:!0,value:0},bottom:0,boxShadow:e.boxShadowDrawerRight},["&-top > ".concat(g)]:{top:0,insetInline:0,boxShadow:e.boxShadowDrawerUp},["&-bottom > ".concat(g)]:{bottom:0,insetInline:0,boxShadow:e.boxShadowDrawerDown},["".concat(s,"-content")]:{width:"100%",height:"100%",overflow:"auto",background:p,pointerEvents:"auto"},["".concat(s,"-wrapper-body")]:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},["".concat(s,"-header")]:{display:"flex",flex:0,alignItems:"center",padding:"".concat(T,"px ").concat(P,"px"),fontSize:O,lineHeight:_,borderBottom:"".concat(y,"px ").concat(N," ").concat(S),"&-title":{display:"flex",flex:1,alignItems:"center",minWidth:0,minHeight:0}},["".concat(s,"-extra")]:{flex:"none"},["".concat(s,"-close")]:{display:"inline-block",marginInlineEnd:h,color:L,fontWeight:v,fontSize:O,fontStyle:"normal",lineHeight:1,textAlign:"center",textTransform:"none",textDecoration:"none",background:"transparent",border:0,outline:0,cursor:"pointer",transition:"color ".concat(M),textRendering:"auto","&:focus, &:hover":{color:k,textDecoration:"none"}},["".concat(s,"-title")]:{flex:1,margin:0,color:d,fontWeight:e.fontWeightStrong,fontSize:O,lineHeight:_},["".concat(s,"-body")]:{flex:1,minWidth:0,minHeight:0,padding:P,overflow:"auto"},["".concat(s,"-footer")]:{flexShrink:0,padding:"".concat(x,"px ").concat(I,"px"),borderTop:"".concat(y,"px ").concat(N," ").concat(S)},"&-rtl":{direction:"rtl"}}}},xt=Ke("Drawer",e=>{const s=Xe(e,{drawerFooterPaddingVertical:e.paddingXS,drawerFooterPaddingHorizontal:e.padding});return[kt(s),St(s)]},e=>({zIndexPopup:e.zIndexPopupBase}));var Dt=globalThis&&globalThis.__rest||function(e,s){var c={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&s.indexOf(o)<0&&(c[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,o=Object.getOwnPropertySymbols(e);p<o.length;p++)s.indexOf(o[p])<0&&Object.prototype.propertyIsEnumerable.call(e,o[p])&&(c[o[p]]=e[o[p]]);return c};const Ot=["top","right","bottom","left"],Ve={distance:180},$t=()=>({autofocus:{type:Boolean,default:void 0},closable:{type:Boolean,default:void 0},closeIcon:b.any,destroyOnClose:{type:Boolean,default:void 0},forceRender:{type:Boolean,default:void 0},getContainer:{type:[String,Function,Boolean,Object],default:void 0},maskClosable:{type:Boolean,default:void 0},mask:{type:Boolean,default:void 0},maskStyle:Y(),rootClassName:String,rootStyle:Y(),size:{type:String},drawerStyle:Y(),headerStyle:Y(),bodyStyle:Y(),contentWrapperStyle:{type:Object,default:void 0},title:b.any,visible:{type:Boolean,default:void 0},open:{type:Boolean,default:void 0},width:b.oneOfType([b.string,b.number]),height:b.oneOfType([b.string,b.number]),zIndex:Number,prefixCls:String,push:b.oneOfType([b.looseBool,{type:Object}]),placement:b.oneOf(Ot),keyboard:{type:Boolean,default:void 0},extra:b.any,footer:b.any,footerStyle:Y(),level:b.any,levelMove:{type:[Number,Array,Function]},handle:b.any,afterVisibleChange:Function,onAfterVisibleChange:Function,onAfterOpenChange:Function,"onUpdate:visible":Function,"onUpdate:open":Function,onClose:Function}),Pt=ye({compatConfig:{MODE:3},name:"ADrawer",inheritAttrs:!1,props:ze($t(),{closable:!0,placement:"right",maskClosable:!0,mask:!0,level:null,keyboard:!0,push:Ve}),slots:Object,setup(e,s){let{emit:c,slots:o,attrs:p}=s;const $=A(!1),M=A(!1),T=A(null),P=A(!1),O=A(!1),_=K(()=>{var r;return(r=e.open)!==null&&r!==void 0?r:e.visible});q(_,()=>{_.value?P.value=!0:O.value=!1},{immediate:!0}),q([_,P],()=>{_.value&&P.value&&(O.value=!0)},{immediate:!0});const y=Ge("parentDrawerOpts",null),{prefixCls:N,getPopupContainer:S,direction:h}=qe("drawer",e),[L,k]=xt(N),d=K(()=>e.getContainer===void 0&&(S!=null&&S.value)?()=>S.value(document.body):e.getContainer);it(!e.afterVisibleChange,"Drawer","`afterVisibleChange` prop is deprecated, please use `@afterVisibleChange` event instead"),Je("parentDrawerOpts",{setPush:()=>{$.value=!0},setPull:()=>{$.value=!1,ve(()=>{I()})}}),Ae(()=>{_.value&&y&&y.setPush()}),Ee(()=>{y&&y.setPull()}),q(O,()=>{y&&(O.value?y.setPush():y.setPull())},{flush:"post"});const I=()=>{var r,f;(f=(r=T.value)===null||r===void 0?void 0:r.domFocus)===null||f===void 0||f.call(r)},g=r=>{c("update:visible",!1),c("update:open",!1),c("close",r)},u=r=>{var f;r||(M.value===!1&&(M.value=!0),e.destroyOnClose&&(P.value=!1)),(f=e.afterVisibleChange)===null||f===void 0||f.call(e,r),c("afterVisibleChange",r),c("afterOpenChange",r)},j=K(()=>{const{push:r,placement:f}=e;let w;return typeof r=="boolean"?w=r?Ve.distance:0:w=r.distance,w=parseFloat(String(w||0)),f==="left"||f==="right"?"translateX(".concat(f==="left"?w:-w,"px)"):f==="top"||f==="bottom"?"translateY(".concat(f==="top"?w:-w,"px)"):null}),W=K(()=>{var r;return(r=e.width)!==null&&r!==void 0?r:e.size==="large"?736:378}),z=K(()=>{var r;return(r=e.height)!==null&&r!==void 0?r:e.size==="large"?736:378}),se=K(()=>{const{mask:r,placement:f}=e;if(!O.value&&!r)return{};const w={};return f==="left"||f==="right"?w.width=Be(W.value)?"".concat(W.value,"px"):W.value:w.height=Be(z.value)?"".concat(z.value,"px"):z.value,w}),ne=K(()=>{const{zIndex:r}=e,f=se.value;return[{zIndex:r,transform:$.value?j.value:void 0},f]}),oe=r=>{const{closable:f,headerStyle:w}=e,B=me(o,e,"extra"),R=me(o,e,"title");return!R&&!f?null:m("div",{class:we("".concat(r,"-header"),{["".concat(r,"-header-close-only")]:f&&!R&&!B}),style:w},[m("div",{class:"".concat(r,"-header-title")},[ue(r),R&&m("div",{class:"".concat(r,"-title")},[R])]),B&&m("div",{class:"".concat(r,"-extra")},[B])])},ue=r=>{var f;const{closable:w}=e,B=o.closeIcon?(f=o.closeIcon)===null||f===void 0?void 0:f.call(o):e.closeIcon;return w&&m("button",{key:"closer",onClick:g,"aria-label":"Close",class:"".concat(r,"-close")},[B===void 0?m(Qe,null,null):B])},ae=r=>{var f;if(M.value&&!e.forceRender&&!P.value)return null;const{bodyStyle:w,drawerStyle:B}=e;return m("div",{class:"".concat(r,"-wrapper-body"),style:B},[oe(r),m("div",{key:"body",class:"".concat(r,"-body"),style:w},[(f=o.default)===null||f===void 0?void 0:f.call(o)]),G(r)])},G=r=>{const f=me(o,e,"footer");if(!f)return null;const w="".concat(r,"-footer");return m("div",{class:w,style:e.footerStyle},[f])},Q=K(()=>we({"no-mask":!e.mask,["".concat(N.value,"-rtl")]:h.value==="rtl"},e.rootClassName,k.value)),Z=K(()=>ke(xe(N.value,"mask-motion"))),le=r=>ke(xe(N.value,"panel-motion-".concat(r)));return()=>{const{width:r,height:f,placement:w,mask:B,forceRender:R}=e,re=Dt(e,["width","height","placement","mask","forceRender"]),ee=J(J(J({},p),Le(re,["size","closeIcon","closable","destroyOnClose","drawerStyle","headerStyle","bodyStyle","title","push","onAfterVisibleChange","onClose","onUpdate:visible","onUpdate:open","visible"])),{forceRender:R,onClose:g,afterVisibleChange:u,handler:!1,prefixCls:N.value,open:O.value,showMask:B,placement:w,ref:T});return L(m(ut,null,{default:()=>[m(Ct,E(E({},ee),{},{maskMotion:Z.value,motion:le,width:W.value,height:z.value,getContainer:d.value,rootClassName:Q.value,rootStyle:e.rootStyle,contentWrapperStyle:ne.value}),{handler:e.handle?()=>e.handle:o.handle,default:()=>ae(N.value)})]}))}}}),Tt=Ye(Pt),Nt=["id"],jt={key:0},It={class:"data-table-buttons"},Bt={key:1,class:"data-table"},Ft={key:2,class:"data-table"},Mt=["innerHTML"],Vt=ye({__name:"GroupConditionalControl",props:{params:{type:Object,required:!0},conditionalValues:{type:Object,required:!1,default:()=>({})}},emits:["input","fieldData","selectedCondition","conditionalData","selectedDependent","fieldUpdatedData","fieldUpdatedPopupData","updateDataSource"],setup(e,{emit:s}){var ee,fe,te;const c=e,{params:o}=Ze(c),p=at(),{editedRowKey:$,selectedConditionKey:M,selectedConditionValue:T,openDrawer:P,dynamicOptions:O,groupData:_}=et(p),y=o.value,N=y.classes,S=y.id,h=H(y.fields),L=window.lodash.cloneDeep(h),k=tt({fields:h.value}),d=H(y.table.data),v=y.group_action,x=(ee=y.table)==null?void 0:ee.edit_action,I=H((te=(fe=y.table)==null?void 0:fe.inline_edit)!=null?te:!0),g=H(!1),u=H([]),j=H([]),W=H(""),z=H(""),se=H("right");if(typeof _.value<"u"&&Object.keys(_.value).length>0&&typeof _.value[S]<"u"&&(d.value=_.value[S]),k.fields)for(const[l,t]of Object.entries(k.fields)){const n=t;u.value[n.id]=n.default}const ne=l=>{Object.entries(l).forEach(([t,n])=>{u.value[t]=n})};typeof h.value<"u"&&h.value!==null&&(k.fields=h.value.filter(l=>typeof l.hide<"u"&&l.hide!==null?!l.hide:!0));const oe=l=>{let t="",n="";for(const[i,a]of Object.entries(l)){let C=a;t=i,n=C}k.fields=h.value.filter(i=>{if(typeof i.condition<"u"&&i.condition!==null){const a=i.condition.find(C=>C.key===t);return a.value==="yes"&&n==="yes"?!0:a.value==="no"&&n==="no"}else return!0}),j.value[t]=n},ue=l=>{Object.assign(d.value.filter(t=>l.key===t.key)[0],l),_.value[S]=d.value},ae=l=>{P.value=!0,$.value=l.key,u.value=l,W.value=l!=null&&l.field_name?l.field_name:"",z.value=l!=null&&l.field_description?l.field_description:"",M.value="",T.value="",k.fields=h.value.filter(t=>{if(typeof l[t.id]<"u"&&l[t.id]!==null){const n=h.value.find(i=>i.id===t.id);if(typeof l.disabled_field<"u"&&l.disabled_field.includes(t.id))return!1;if(typeof n.condition<"u"&&n.condition!==null){const i=n.condition.find(a=>Array.isArray(a.value)&&a.value.includes(l[a.key])?a.value.includes(l[a.key]):a.value===l[a.key]);if(typeof i<"u"&&i!==null){let a=l[t.id];return typeof t.prefix<"u"&&t.prefix!==null&&(a=a.replace(t.prefix,"")),t.default=a,typeof n.dependent_option<"u"&&n.dependent_option!==null&&(O.value[n.dependent_option]=l[n.dependent_option]),!0}else return!1}else{let i=l[t.id];return typeof t.prefix<"u"&&t.prefix!==null&&(i=i.replace(t.prefix,"")),t.default=i,typeof t.disable_edit<"u"&&t.disable_edit&&(t.disabled=t.disable_edit),!0}}else if(typeof l.additional_fields<"u"&&typeof l.additional_fields[t.id]<"u"){if(typeof l.disabled_field<"u"&&l.disabled_field.includes(t.id))return!1;{let n=l.additional_fields[t.id];return typeof t.prefix<"u"&&t.prefix!==null&&(n=n.replace(t.prefix,"")),t.default=n,typeof t.disable_edit<"u"&&t.disable_edit&&(t.disabled=t.disable_edit),!0}}else return!1})},G=l=>{d.value=d.value.filter(t=>t.key!==l),_.value[S]=d.value},Q=l=>{let t="",n="";for(const[i,a]of Object.entries(l)){let C=a;t=i,n=C}k.fields=h.value.filter(i=>{const a=h.value.find(C=>C.id===i.id);if(a)if(typeof a.condition<"u"&&a.condition!==null){const C=a.condition.find(V=>V.key===t);return typeof C<"u"&&C.key===t&&(!Array.isArray(C.value)&&C.value===n||Array.isArray(C.value)&&C.value.includes(n))?(typeof u.value[a.id]<"u"&&u.value[a.id]!==null&&(i.default=u.value[a.id]),typeof a.dependent_option<"u"&&a.dependent_option!==null&&(i.default=a.dependent_default),!0):!1}else return typeof u.value[a.id]<"u"&&u.value[a.id]!==null&&(i.default=u.value[a.id]),typeof a.dependent_option<"u"&&a.dependent_option!==null&&(i.default=a.dependent_default),!0;else return!1})},Z=l=>{k.fields=h.value.filter(t=>{const n=h.value.find(i=>i.id===t.id);return n?typeof n.hide<"u"&&n.hide!==null&&n.hide?!1:(typeof u.value[n.id]<"u"&&u.value[n.id]!==null&&(t.default=u.value[n.id]),typeof n.dependent_option<"u"&&n.dependent_option!==null&&(t.default=n.dependent_default),!0):!1})},le=async()=>{g.value=!0;const l=[{key:"action",value:v}],t={};let n=0;if(d.value.length>0){let i=d.value.map(C=>C.key);n=Math.max(...i)+1}t.key=n;for(const[i,a]of Object.entries(u.value)){let C=a;typeof a=="object"&&a!==null&&(C=JSON.stringify(a)),l.push({key:i,value:C});let V=a;const ie=h.value.find(Ue=>Ue.id===i);typeof ie<"u"&&typeof ie.prefix<"u"&&(V=ie.prefix+a),t[i]=V}try{await Ie(l)==="success"&&(d.value.push(t),_.value[S]=d.value,M.value="",T.value="",I.value||s("fieldUpdatedData",t)),g.value=!1}catch(i){console.error(i)}finally{g.value=!1,B()}},r=()=>{P.value=!1,$.value=null,B()},f=async()=>{g.value=!0;const l=[{key:"action",value:x}],t={};for(const[n,i]of Object.entries(u.value)){let a=i;typeof i=="object"&&i!==null&&(a=JSON.stringify(i)),l.push({key:n,value:a});let C=i;const V=h.value.find(ie=>ie.id===n);typeof V<"u"&&typeof V.prefix<"u"&&(typeof V.exclude_prefix<"u"&&Array.isArray(V.exclude_prefix)&&V.exclude_prefix.includes(i)?C=i:C=V.prefix+i),t[n]=C}try{await Ie(l)==="success"&&(W.value="",Object.assign(d.value.filter(i=>t.key===i.key)[0],t),_.value[S]=d.value,r(),I.value||s("fieldUpdatedData",t)),g.value=!1}catch(n){}finally{g.value=!1,r()}},w=l=>{_.value[S]=l},B=()=>{k.fields=h.value.filter(l=>{const t=L.value.find(i=>i.id===l.id);let n="";return typeof t.default<"u"&&t.default!==null&&(n=t.default),l.default=n,typeof t.disable_edit<"u"&&t.disable_edit&&(l.disabled=!1),u.value[t.id]=n,typeof t.hide<"u"&&t.hide!==null?!t.hide:!0})},R=De("cancelButtonText",wp.i18n.__("Cancel","woocommerce-wholesale-prices")),re=De("saveButtonText",wp.i18n.__("Update Item","woocommerce-wholesale-prices"));return(l,t)=>{var n;return F(),U(ce,null,[Oe("div",{id:D(S),class:nt(D(N))},[D($)===null?(F(),U("div",jt,[(F(!0),U(ce,null,$e(k.fields,(i,a)=>(F(),U("div",{key:a},[(F(),de(je,null,{fallback:X(()=>[m(Pe)]),default:X(()=>[(F(),de(Te(D(Ne)(i.type)),{params:i,"conditional-values":j.value,onFieldData:ne,onConditionalData:oe,onSelectedCondition:Q,onSelectedDependent:Z},null,40,["params","conditional-values"]))]),_:2},1024))]))),128)),Oe("div",It,[D(y).button_label!==""?(F(),de(D(ge),{key:0,type:"primary",class:"save-group-btn",loading:g.value,onClick:le},{default:X(()=>[he(be(D(y).button_label),1)]),_:1},8,["loading"])):pe("",!0)])])):pe("",!0),(n=D(y).table)!=null&&n.drag_and_drop?(F(),U("div",Bt,[m(lt,{params:D(y).table,data:d.value,"edit-fields":h.value,"edited-fields":D($),onFieldUpdatedData:ae,onFieldDeletedData:G,onUpdateDataSource:w},null,8,["params","data","edit-fields","edited-fields"])])):(F(),U("div",Ft,[m(rt,{params:D(y).table,data:d.value,"edit-fields":h.value,onFieldUpdatedData:ue,onFieldUpdatedPopupData:ae,onFieldDeletedData:G},null,8,["params","data","edit-fields"])]))],10,Nt),m(D(Tt),{width:600,title:W.value,placement:se.value,open:D(P),onClose:r},{extra:X(()=>[m(D(ge),{style:{"margin-right":"8px"},onClick:r},{default:X(()=>[he(be(D(R)),1)]),_:1}),m(D(ge),{type:"primary",loading:g.value,onClick:f},{default:X(()=>[he(be(D(re)),1)]),_:1},8,["loading"])]),default:X(()=>{var i;return[D($)!==null?(F(),U(ce,{key:0},[z.value!==""?(F(),U("div",{key:0,class:"wwp-drawer-description",innerHTML:D(ot)(((i=z.value)==null?void 0:i.length)>0?z.value:"")},null,8,Mt)):pe("",!0),(F(!0),U(ce,null,$e(k.fields,(a,C)=>(F(),U("div",{key:C},[(F(),de(je,null,{fallback:X(()=>[m(Pe)]),default:X(()=>[(F(),de(Te(D(Ne)(a.type)),{params:a,"conditional-values":j.value,onFieldData:ne,onConditionalData:oe,onSelectedCondition:Q,onSelectedDependent:Z},null,40,["params","conditional-values"]))]),_:2},1024))]))),128))],64)):pe("",!0)]}),_:1},8,["title","placement","open"])],64)}}}),Tn=ft(Vt,[["__scopeId","data-v-29e15088"]]);export{Tn as default};
