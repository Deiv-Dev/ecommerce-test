import{d as G,t as R,r as p,aa as z,S as J,o as r,c as h,u as t,e as o,i,w as m,U as g,V as x,a as A,p as V}from"../apps/settings/index.7e5fa022.js";import{I as D,A as K}from"./index.6ea81646.js";import{A as P}from"./index.262196b2.js";import{A as O}from"./index.0c111eb2.js";import{S as I,A as L}from"./index.d6d25a06.js";const Q=["innerHTML"],W=["innerHTML"],ae=G({__name:"GroupEditFields",props:{editableData:{type:Object,required:!0},fieldValue:{type:[String,Number,Array,Object,Boolean],required:!0},fieldData:{type:Object,required:!0}},emits:["fieldUpdatedData"],setup(T,{emit:v}){var w;const S=T,{editableData:k,fieldValue:B,fieldData:H}=R(S),u=H.value,n=p((w=u.type)!=null?w:"").value,M=z(n,B.value),a=p(M),f=p(n==="select"?u.options:[]),d=p([]),y=J({check:a.value==="yes"}),N=p(n==="switch"?u.options.yes:""),j=p(n==="switch"?u.options.no:"");n==="select"&&u.multiple&&(a.value=k==null?void 0:k.value[u.id]);const q=()=>{d.value[u.id]=a.value,v("fieldUpdatedData",d.value)},E=s=>{d.value[u.id]=s.target.value,v("fieldUpdatedData",d.value)},U=()=>{d.value[u.id]=a.value,v("fieldUpdatedData",d.value)},C=()=>{d.value[u.id]=a.value+"%",v("fieldUpdatedData",d.value)},b=s=>{a.value=s;let l=f.value[s];Array.isArray(s)&&(l=s.map(e=>f.value[e])),d.value[u.id]=a.value,typeof u.label_id<"u"&&u.label_id!==null&&(d.value[u.label_id]=l),v("fieldUpdatedData",d.value)},F=s=>{a.value=s?"yes":"no",d.value[u.id]=a.value,y.check=s,v("fieldUpdatedData",d.value)};return(s,l)=>(r(),h(g,null,[t(n)==="text"||t(n)==="email"?(r(),o(t(D),{key:0,value:a.value,"onUpdate:value":l[0]||(l[0]=e=>a.value=e),onInput:q},null,8,["value"])):i("",!0),t(n)==="checkbox"?(r(),o(t(D),{key:1,value:a.value,"onUpdate:value":l[1]||(l[1]=e=>a.value=e),onInput:l[2]||(l[2]=e=>E(e))},null,8,["value"])):i("",!0),t(n)==="number"?(r(),o(t(O),{key:2,value:a.value,"onUpdate:value":l[3]||(l[3]=e=>a.value=e),onInput:U,onChange:U},null,8,["value"])):i("",!0),t(n)==="percent"?(r(),o(t(O),{key:3,value:a.value,"onUpdate:value":l[4]||(l[4]=e=>a.value=e),onInput:C,onChange:C},null,8,["value"])):i("",!0),t(n)==="textarea"?(r(),o(t(K),{key:4,value:a.value,"onUpdate:value":l[5]||(l[5]=e=>a.value=e),rows:4},null,8,["value"])):i("",!0),t(n)==="select"&&t(u).multiple?(r(),o(t(L),{key:5,ref:"select",value:a.value,"onUpdate:value":l[6]||(l[6]=e=>a.value=e),mode:"multiple",style:{"max-width":"320px",width:"100%"},onChange:b},{default:m(()=>[(r(!0),h(g,null,x(f.value,(e,c)=>(r(),o(t(I),{key:c,value:c},{default:m(()=>[A("span",{innerHTML:t(V)(e)},null,8,Q)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])):t(n)==="select"?(r(),o(t(L),{key:6,ref:"select",value:a.value,"onUpdate:value":l[7]||(l[7]=e=>a.value=e),style:{"max-width":"320px",width:"100%"},onChange:b},{default:m(()=>[(r(!0),h(g,null,x(f.value,(e,c)=>(r(),o(t(I),{key:c,value:c},{default:m(()=>[A("span",{innerHTML:t(V)(e)},null,8,W)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])):i("",!0),t(n)==="switch"?(r(),o(t(P),{key:7,checked:y.check,"onUpdate:checked":l[8]||(l[8]=e=>y.check=e),"checked-children":N.value,"un-checked-children":j.value,onChange:l[9]||(l[9]=e=>F(e))},null,8,["checked","checked-children","un-checked-children"])):i("",!0)],64))}});export{ae as _};