import{_ as v,r as p,o as f,a as y,c as h,b as c,F as m,p as b,d as k,e as Y}from"./index-45a58654.js";const x={name:"userSocial",setup(){const e=p(null),n=p(null),r=p(null);f(()=>{e.value.style.backgroundPositionX="50%",n.value.style.backgroundPositionX="50%",r.value.style.backgroundPositionX="50%",document.addEventListener("mousemove",$),document.addEventListener("scroll",g)});const $=u=>{try{let o=window.innerWidth/2,a=u.clientX,l,t,s,d,i;l="50%",t=`${50+(a-o)*.01}%`,s=`${50+(a-o)*.02}%`,d=`${50+(a-o)*.03}%`,i=`${50+(a-o)*.04}%`;let _=`${i}, ${d}, ${s}, ${t}, ${l}`;n.value.style.backgroundPositionX=_,t=`${50+(a-o)*.05}%`,s=`${50+(a-o)*.07}%`,_=`${s}, ${t}`,r.value.style.backgroundPositionX=_}catch{}},g=u=>{try{var o=window.scrollY,a=e.value.offsetTop+e.value.offsetHeight;let l,t,s,d,i;o>e.value.offsetTop&&o<=a-370&&(t=`${scrollY*.05}%`,s=`${scrollY*.08}%`,d=`${scrollY*.11}%`,i=`${scrollY*.14}%`,l=`${i}, ${d}, ${s}, ${t}`,n.value.style.backgroundPositionY=l,t=`${scrollY*.18}%`,s=`${scrollY*.25}%`,l=`${s}, ${t}`,r.value.style.backgroundPositionY=l)}catch{}};return{layerbg:e,layer1:n,layer2:r}}},X=e=>(b("data-v-1cd9613c"),e=e(),k(),e),w={class:"background",id:"layer-bg",ref:"layerbg"},P={class:"background",id:"layer-1",ref:"layer1"},B=X(()=>c("div",{class:"fog-container"},[c("div",{class:"fog-img fog-img-first"}),Y(),c("div",{class:"fog-img fog-img-second"})],-1)),I={class:"background",id:"layer-2",ref:"layer2"};function S(e,n,r,$,g,u){return y(),h(m,null,[c("div",w,null,512),c("div",P,null,512),B,c("div",I,null,512)],64)}const T=v(x,[["render",S],["__scopeId","data-v-1cd9613c"]]);export{T as default};
