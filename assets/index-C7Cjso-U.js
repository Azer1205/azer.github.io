import{d as v,r as b,o as a,c as s,a as n,F as c,b as d,n as f,e as g,t as _,_ as k}from"./index-Bq-s6yE7.js";const p={class:"home"},m={class:"cabinet"},x={class:"cabinet-inner"},y={class:"menus"},C=["onClick"],w=v({__name:"index",setup(B){const t=b([{label:"2048",children:[{label:"普通版",link:"/2048/normal"},{label:"进化版",link:"/2048/drop"},{label:"融合版",link:"/2048/merge"}]},{label:"星星",children:[{label:"消灭星星",link:"/stars/destory"}]},{label:"上或下",children:[{label:"下楼100层",link:"/stairs/down"}]}]),h=i=>{const l=t.value.find(e=>e.label===i);l&&(l.active?(l.active=!1,setTimeout(()=>{l.holding=!1},800)):(t.value.forEach(e=>{e.active=!1,e.holding=!1}),l.active=!0,l.holding=!0))};return(i,l)=>(a(),s("div",p,[n("div",m,[n("div",x,[(a(!0),s(c,null,d(t.value,(e,u)=>{var r;return a(),s("div",{class:f(["drawer",{"is-active":e.active,"is-holding":e.holding}]),key:e.label,style:g(`--index: ${u}; --items: ${(r=e.children)==null?void 0:r.length}`)},[n("div",y,[(a(!0),s(c,null,d(e.children,o=>(a(),s("div",{class:"menu",key:e.label},_(o.label),1))),128))]),n("div",{class:"drawer-name",onClick:o=>h(e.label)},_(e.label),9,C)],6)}),128))])])]))}}),z=k(w,[["__scopeId","data-v-90e3a59d"]]);export{z as default};
