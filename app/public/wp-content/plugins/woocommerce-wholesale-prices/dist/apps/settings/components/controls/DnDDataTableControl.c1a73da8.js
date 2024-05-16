import{d as M,t as P,s as G,S as k,r as m,o as r,c as s,a as c,U as u,V as b,h as v,u as l,b as y,w as h,n as H,i as p,f as g,e as J,$ as w}from"../../index.7e5fa022.js";import{u as Q}from"../../../../common/settings-store.2e02aea6.js";import{d as W}from"../../../../common/DnDDataTableControl.vue_vue_type_style_index_0_scoped_1e9aff06_lang.20d3a2f9.js";import{c as X}from"../../../../common/cloneDeep.fe00636a.js";import{E as Y}from"../../../../common/EditOutlined.99286c6c.js";import{A as Z}from"../../../../common/index.59e8a5e6.js";import{D as ee}from"../../../../common/DeleteOutlined.21f5b41a.js";import{_ as te}from"../../../../common/_plugin-vue_export-helper.c27b6911.js";import"../../../../common/motion.0613b233.js";import"../../../../common/_assignValue.5ca01b62.js";import"../../../../common/_getPrototype.c0382199.js";import"../../../../common/index.d7c7b51e.js";import"../../../../common/index.4696b0ff.js";import"../../../../common/index.bde9bb0c.js";import"../../../../common/useState.ca06f0b3.js";import"../../../../common/warning.ed311ba9.js";import"../../../../common/compact-item.42ee0b0f.js";import"../../../../common/createContext.d5228530.js";import"../../../../common/useMergedState.28e4599a.js";import"../../../../common/KeyCode.5c67594e.js";import"../../../../common/ActionButton.c1747e64.js";const ae={class:"wwp-full-width-table"},oe={class:"thead-dark"},re={key:0,class:"editable-row-operations"},se={key:0,class:"editable-cell"},ne=["onClick"],ie=M({__name:"DnDDataTableControl",props:{params:{type:Object,required:!0},data:{type:Object,required:!0},editFields:{type:Object,required:!1,default:()=>({})},editedFields:{type:Number,required:!1,default:0}},emits:["fieldUpdatedData","fieldDeletedData","updateDataSource"],setup(C,{emit:f}){const S=C,{params:V,data:A,editedFields:E}=P(S),O=Q(),{inlineMappingEdit:T}=G(O),d=V.value,q=d.fields,i=k({data:window.lodash.sortBy(A.value,t=>typeof t.field_order<"u"&&t.field_order!==null?t.field_order:0)}),B=d.editable,N=d.can_delete,F=d.delete_action,R=d.sort_action,U=m(d.show_in_table),j=m(!1),_=k([]),x=E,D=m([]),$=t=>{_[t]=X(i.data.filter(n=>t===n.key)[0]),D.value=_[t],T.value=!1,f("fieldUpdatedData",D.value)},I=async t=>{const n=i.data.filter(a=>t===a.key)[0],e=[{key:"action",value:F}];for(const[a,o]of Object.entries(n))e.push({key:a,value:o});try{await w(e)==="success"&&(f("fieldDeletedData",t),i.data=i.data.filter(o=>o.key!==t))}catch(a){console.error(a)}finally{j.value=!1}},L=t=>Array.isArray(t)?t.join(", "):t,z=async t=>{const n=[{key:"action",value:R}],e="list",a=i.data;n.push({key:e,value:a});try{const o=await w(n,!1,!0);typeof o<"u"&&o!==null&&f("updateDataSource",o)}catch(o){console.error(o)}finally{}};return(t,n)=>(r(),s("table",ae,[c("thead",oe,[c("tr",null,[(r(!0),s(u,null,b(l(q),(e,a)=>(r(),s("th",{key:a,scope:"col"},v(e.title),1))),128))])]),y(l(W),{modelValue:i.data,"onUpdate:modelValue":n[0]||(n[0]=e=>i.data=e),tag:"tbody","item-key":"name",onEnd:z},{item:h(({element:e})=>[c("tr",{class:H({"not-draggable":!(e!=null&&e.draggable)})},[(r(!0),s(u,null,b(U.value,(a,o)=>(r(),s("td",{key:o,scope:"row"},[a==="operation"?(r(),s("div",re,[l(x)===null?(r(),s("div",se,[l(B)?(r(),s("a",{key:0,onClick:K=>$(e.key)},[y(l(Y))],8,ne)):p("",!0),g("   "),l(N)&&(e==null?void 0:e.deletetable)!=="no"?(r(),s(u,{key:1},[i.data.length?(r(),J(l(Z),{key:0,title:"Sure to delete?",onConfirm:K=>I(e.key)},{default:h(()=>[c("a",null,[y(l(ee))])]),_:2},1032,["onConfirm"])):p("",!0)],64)):p("",!0)])):p("",!0)])):(r(),s(u,{key:1},[g(v(L(e[a])),1)],64))]))),128))],2)]),_:1},8,["modelValue"])]))}}),Oe=te(ie,[["__scopeId","data-v-1e9aff06"]]);export{Oe as default};
