import{d as y,g as P,o as c,c as s,a as l,F as h,b as u,e as p,t as k,_ as w}from"./index-Bq-s6yE7.js";const g=["#ffd900","#ff9100","#ff4600","#ff0046","#ff008f","#ff00d9","#dc00ff","#9400ff","#4b00ff","#0100ff","#0049ff","#0091ff","#00daff","#00ffda","#00ff91","#00ff48","#00ff00","#4bff00","#94ff00","#ddff00"],B=n=>g[(Math.log2(n)-1)%g.length],C={class:"background"},H={class:"row"},W={class:"col card"},S={class:"cards"},M=["id"],F=y({__name:"board",props:{rows:{default:4},cols:{default:4},cardWidth:{default:60},cardHeight:{default:80},cardPadding:{default:4},cards:{},formatter:{}},emits:["drop"],setup(n,{emit:_}){const m=_,t=n,v=P(()=>{const{rows:a,cols:e,cardWidth:d,cardHeight:r,cardPadding:o}=t;return{"--card-width":`${t.cardWidth}px`,"--card-height":`${t.cardHeight}px`,"--card-padding":`${t.cardPadding}px`,width:`${(d+o)*e+o}px`,height:`${(r+o)*a+o}px`}}),b=a=>{const{y:e,x:d,num:r}=a,o=(t.cardHeight+t.cardPadding)*e+t.cardPadding,f=(t.cardWidth+t.cardPadding)*d+t.cardPadding,i=B(t.formatter&&t.formatter(r)||r);return`top: ${o}px; left: ${f}px; background-color: ${i}`},$=a=>{const{offsetX:e,offsetY:d}=a,{cardWidth:r,cardHeight:o,cardPadding:f}=t,i=Math.floor(e/(r+f)),x=Math.floor(d/(o+f));m("drop",{x:i,y:x})};return(a,e)=>(c(),s("div",{class:"board",style:p(v.value)},[l("div",C,[(c(!0),s(h,null,u(a.rows,d=>(c(),s("div",H,[(c(!0),s(h,null,u(a.cols,r=>(c(),s("div",W))),256))]))),256))]),l("div",S,[(c(!0),s(h,null,u(a.cards,d=>(c(),s("div",{class:"card",key:d.id,id:`card_${d.id}`,style:p(b(d))},k(d.num),13,M))),128))]),l("div",{class:"cover",onClick:$})],4))}}),D=w(F,[["__scopeId","data-v-a1b52bf0"]]);export{D as B};
