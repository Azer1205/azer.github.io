import{p as Z}from"./tools-DJurenHp.js";import{d as ee,r as l,g as y,f as q,h as te,o as S,c as O,a as h,t as z,F as le,b as oe,e as E,_ as ae}from"./index-HxRPOjLU.js";const ne={class:"game"},ue={class:"score"},se={class:"operate"},re=ee({__name:"down",setup(ie){const D=l(0),k=y(()=>D.value/5+.5),r=l(300),v=l(400),N=y(()=>`--width: ${r.value}px; --height: ${v.value}px`),g=l(12),_=l(24),C=l(80),n=l([]),P=y(()=>Math.ceil(v.value/C.value)+1),M=l(0),U=e=>{const{top:o,left:a,width:u}=e;return`top: ${o}px; left: ${a}px; width: ${u}px`},V=()=>{M.value++;const e=r.value*.5,o=r.value*.3,a=Math.random()*(e-o)+o;let u=r.value-g.value*2-a,m=g.value;const i=n.value[n.value.length-1];if(i){let d=!0;const{left:s,width:f}=i;if(s<=_.value+g.value)d=!1;else if(s+f+_.value>=r.value-g.value*2)d=!0;else{const p=s,A=v.value-s-f;d=Math.random()*(p+A)<p}d?u=s-_.value:m=Math.max(g.value,s+f+_.value-a)}const w=Math.random()*(u-m)+m,L=v.value,b=M.value,$=l({width:a,top:L,left:w,count:b});n.value.push($.value),n.value.length>P.value&&n.value.shift()},c=l(!0),j=()=>{c.value=!c.value},B=()=>{c.value=!1,cancelAnimationFrame(R.value),M.value=0,t.value={left:r.value/2-12,top:v.value,width:24,height:24,count:1,isOnfloor:!1,currentFloor:1,targetFloor:0},n.value=[],c.value=!0,T()};q(B);const F=l(0),R=l(0),T=()=>{if(!J()){if(H(),c.value){if(n.value.length===1&&F.value===0){const{left:e,width:o}=n.value[0];t.value.left=e+o/2-12,t.value.isOnfloor=!0}n.value.forEach((e,o)=>{e.top-=k.value;const{top:a,left:u,width:m,count:i}=e,{top:w,left:L,width:b,isOnfloor:$,currentFloor:d,targetFloor:s}=t.value,f=L+b/3*2-u,p=L+b/3-u-m;if($)d===i&&(f<0||p>0?t.value.isOnfloor=!1:t.value.top=e.top);else if(t.value.top+=Q.value,s)s===i&&(f<0||p>0?t.value.targetFloor=0:w>=a&&(t.value.top=a,t.value.isOnfloor=!0,t.value.currentFloor=i,t.value.targetFloor=0));else{const A=n.value[o-1];if(A){const{top:Y}=A;Y<w&&w<a&&(t.value.count=i,f>0&&p<0&&(t.value.targetFloor=i))}}}),F.value++,F.value>C.value/k.value&&(V(),F.value=0)}R.value=requestAnimationFrame(T)}},J=()=>{const{top:e}=t.value;return e<0||e>v.value?(Z(),!0):!1},W=l(2),Q=y(()=>k.value),X=y(()=>{const{left:e,top:o,width:a,height:u}=t.value;return{left:`${e}px`,top:`${o}px`,"--ball-width":`${a}px`,"--ball-height":`${u}px`}}),t=l({left:r.value/2-12,top:v.value,width:24,height:24,count:1,isOnfloor:!1,currentFloor:1,targetFloor:0}),x=l(!1),G=l("ArrowLeft"),H=()=>{if(x.value){const{left:e,width:o}=t.value;t.value.left=G.value==="ArrowLeft"?Math.max(0,e-W.value):Math.min(r.value-o,e+W.value)}},I=e=>{!["ArrowLeft","ArrowRight"].includes(e.code)||!c.value||x.value||(G.value=e.code,x.value=!0,H())},K=e=>{["ArrowLeft","ArrowRight"].includes(e.code)&&(x.value=!1)};return q(()=>{window.addEventListener("keydown",I),window.addEventListener("keyup",K)}),te(()=>{window.removeEventListener("keydown",I),window.removeEventListener("keyup",K)}),(e,o)=>(S(),O("div",ne,[h("div",ue,"当前楼层: "+z(t.value.count),1),h("div",{class:"building",style:E(N.value)},[(S(!0),O(le,null,oe(n.value,a=>(S(),O("div",{class:"floor",style:E(U(a))},null,4))),256)),h("div",{class:"player",style:E(X.value)},null,4)],4),h("div",se,[h("button",{class:"button",onClick:B},"重置"),h("button",{class:"button",onClick:j},z(c.value?"暂停":"运行"),1)])]))}}),fe=ae(re,[["__scopeId","data-v-dac1e721"]]);export{fe as default};
