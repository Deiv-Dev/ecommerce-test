import{d as T,t as x,s as B,r as i,o as c,c as f,a as v,b as _,u as t,p as D,i as H}from"../../index.7e5fa022.js";import{u as I}from"../../../../common/settings-store.2e02aea6.js";/* empty css                                                                                      */import"../../../../common/DnDDataTableControl.vue_vue_type_style_index_0_scoped_1e9aff06_lang.20d3a2f9.js";/* empty css                                                                                                 */import{_ as N}from"../../../../common/LabelControl.vue_vue_type_script_setup_true_lang.17d7dea1.js";/* empty css                                                                                        */import{I as S}from"../../../../common/index.6ea81646.js";import"../../../../common/index.d7c7b51e.js";import"../../../../common/motion.0613b233.js";import"../../../../common/FormItemContext.35071f2d.js";import"../../../../common/createContext.d5228530.js";import"../../../../common/statusUtils.d389f965.js";import"../../../../common/SearchOutlined.ee7ae234.js";import"../../../../common/compact-item.42ee0b0f.js";import"../../../../common/index.cce61528.js";import"../../../../common/index.4696b0ff.js";import"../../../../common/index.bde9bb0c.js";import"../../../../common/useState.ca06f0b3.js";import"../../../../common/warning.ed311ba9.js";import"../../../../common/isPlainObject.3e91d860.js";import"../../../../common/_getPrototype.c0382199.js";import"../../../../common/index.1dcb9c38.js";const L={class:"wwp-row-handle"},M={class:"wwp-left-content"},R={class:"wwp-right-content"},U=["innerHTML"],se=T({__name:"TextControl",props:{params:{type:Object,required:!0}},emits:["input","fieldData"],setup(h,{emit:n}){var p,l;const w=h,{params:b}=x(w),g=I(),{showPopup:r,componentUpgrade:s}=B(g),e=b.value,o=i((p=e.default)!=null?p:""),y=i((l=e.disabled)!=null?l:!1),a=i([]);o.value!==""&&(a.value[e.id]=o.value,n("fieldData",a.value));const C=()=>{typeof e.pro<"u"&&e.pro!==null?(typeof e.pro_on_active<"u"&&e.pro_on_active!==null?e.pro_on_active&&o.value!==""&&(r.value=!0):r.value=!0,s.value=e.pro,o.value=""):(a.value[e.id]=o,n("fieldData",a.value))},k=()=>{typeof e.pro<"u"&&e.pro!==null&&(r.value=!0,s.value=e.pro)};return(j,u)=>{var d,m;return c(),f("div",L,[v("div",M,[_(t(N),{params:t(e)},null,8,["params"])]),v("div",R,[_(t(S),{id:t(e).id,value:o.value,"onUpdate:value":u[0]||(u[0]=V=>o.value=V),placeholder:t(e).placeholder,name:t(e).id,disabled:y.value,onInput:C,onClick:k},null,8,["id","value","placeholder","name","disabled"]),t(e).description!=="undefined"?(c(),f("p",{key:0,innerHTML:t(D)((m=(d=t(e))==null?void 0:d.description)!=null?m:"")},null,8,U)):H("",!0)])])}}});export{se as default};
