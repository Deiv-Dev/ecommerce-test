import{d as T,t as A,r as i,g as L,o as a,c as n,a as c,b as y,u as t,e as g,w as p,f as v,h as r,p as N,i as V,n as H,j as M}from"../../index.7e5fa022.js";import"../../../../common/settings-store.2e02aea6.js";/* empty css                                                                                      */import"../../../../common/DnDDataTableControl.vue_vue_type_style_index_0_scoped_1e9aff06_lang.20d3a2f9.js";/* empty css                                                                                                 */import{_ as $}from"../../../../common/LabelControl.vue_vue_type_script_setup_true_lang.17d7dea1.js";/* empty css                                                                                        */import{B as b}from"../../../../common/index.4696b0ff.js";import{A as j}from"../../../../common/index.59e8a5e6.js";import"../../../../common/index.d7c7b51e.js";import"../../../../common/motion.0613b233.js";import"../../../../common/index.bde9bb0c.js";import"../../../../common/useState.ca06f0b3.js";import"../../../../common/warning.ed311ba9.js";import"../../../../common/compact-item.42ee0b0f.js";import"../../../../common/createContext.d5228530.js";import"../../../../common/useMergedState.28e4599a.js";import"../../../../common/KeyCode.5c67594e.js";import"../../../../common/ActionButton.c1747e64.js";const q={key:0,class:"wwp-row-handle"},R={class:"wwp-left-content"},z={class:"wwp-right-content"},D=["innerHTML"],E={key:1,class:"wwp-button-control"},I=["id","href","target"],O=["id","type"],rt=T({__name:"ButtonControl",props:{params:{type:Object,required:!0}},setup(w){const k=w,{params:h}=A(k),e=h.value,m=i(!!e.link),B=i(e.external?"_blank":"_self"),l=i(!0),s=i(!1);(e.action==="submit"||e.action==="button")&&(l.value=!1),m.value&&(l.value=!1);const x=L("confirmText",wp.i18n.__("Are you sure want to clear the cache?","woocommerce-wholesale-prices")),u=d=>{s.value=!0;try{M({action:d}),setTimeout(()=>{s.value=!1},1e3)}catch(o){console.error(o)}};return(d,o)=>{var f,_;return l.value?(a(),n("div",q,[c("div",R,[y(t($),{params:t(e)},null,8,["params"])]),c("div",z,[t(e).confirmation?(a(),g(t(j),{key:0,title:t(x),onConfirm:o[0]||(o[0]=C=>u(t(e).action))},{default:p(()=>[y(t(b),{class:"wpp-action-btn",type:"primary",loading:s.value},{default:p(()=>[v(r(t(e).button_label),1)]),_:1},8,["loading"])]),_:1},8,["title"])):(a(),g(t(b),{key:1,class:"wpp-action-btn",type:"primary",loading:s.value,onClick:o[1]||(o[1]=C=>u(t(e).action))},{default:p(()=>[v(r(t(e).button_label),1)]),_:1},8,["loading"])),t(e).description!=="undefined"?(a(),n("p",{key:2,innerHTML:t(N)((_=(f=t(e))==null?void 0:f.description)!=null?_:"")},null,8,D)):V("",!0)])])):(a(),n("div",E,[c("div",{class:H(t(e).classes)},[m.value?(a(),n("a",{key:0,id:t(e).id,href:t(e).link,target:B.value},r(t(e).button_label),9,I)):(a(),n("button",{key:1,id:t(e).id,type:t(e).action},r(t(e).button_label),9,O))],2)]))}}});export{rt as default};