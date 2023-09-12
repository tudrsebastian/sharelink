import{s as ve,v as re,r as ce,g as T,l as P,c as O,h as w,i as D,z as pe,m as S,d as V,k as C,A as L,D as me,E as ke,F as ye}from"../chunks/scheduler.1005fe53.js";import{S as Te,i as we,d as z,v as Ce,j as Ae,k as Pe,m as Se,b as Ee,t as Be,l as Re,e as k,g as v,a as Z,n as c,p as K,s as J}from"../chunks/index.9d1d7535.js";import{A as be}from"../chunks/AuthCheck.3770d72f.js";import{e as Y,b as Q,u as X,f as H,j as he,w as de}from"../chunks/firebase.b7e54b21.js";const je=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,{console:Ue}=je,A="G:/PersonalProjects/myapp/src/routes/login/username/+page.svelte";function x(t){let e,n,r,u;const o={c:function(){e=T("p"),n=P("Checking availability of @"),r=P(t[0]),u=P("..."),this.h()},l:function(l){e=w(l,"P",{class:!0});var i=D(e);n=S(i,"Checking availability of @"),r=S(i,t[0]),u=S(i,"..."),i.forEach(k),this.h()},h:function(){v(e,"class","text-secondary"),C(e,A,76,8,2015)},m:function(l,i){Z(l,e,i),c(e,n),c(e,r),c(e,u)},p:function(l,i){i&1&&J(r,l[0])},d:function(l){l&&k(e)}};return z("SvelteRegisterBlock",{block:o,id:x.name,type:"if",source:"(69:6) {#if loading}",ctx:t}),o}function $(t){let e,n="must be 3-16 characters long, alphanumeric only";const r={c:function(){e=T("p"),e.textContent=n,this.h()},l:function(o){e=w(o,"P",{class:!0,"data-svelte-h":!0}),pe(e)!=="svelte-zmkcp1"&&(e.textContent=n),this.h()},h:function(){v(e,"class","text-error text-sm"),C(e,A,80,8,2144)},m:function(o,a){Z(o,e,a)},d:function(o){o&&k(e)}};return z("SvelteRegisterBlock",{block:r,id:$.name,type:"if",source:"(73:6) {#if !isValid && isTouched}",ctx:t}),r}function ee(t){let e,n,r,u;const o={c:function(){e=T("p"),n=P("@"),r=P(t[0]),u=P(" is not available"),this.h()},l:function(l){e=w(l,"P",{class:!0});var i=D(e);n=S(i,"@"),r=S(i,t[0]),u=S(i," is not available"),i.forEach(k),this.h()},h:function(){v(e,"class","text-warning text-sm"),C(e,A,86,8,2321)},m:function(l,i){Z(l,e,i),c(e,n),c(e,r),c(e,u)},p:function(l,i){i&1&&J(r,l[0])},d:function(l){l&&k(e)}};return z("SvelteRegisterBlock",{block:o,id:ee.name,type:"if",source:"(79:6) {#if isValid && !isAvailable && !loading}",ctx:t}),o}function te(t){let e,n,r;const u={c:function(){e=T("button"),n=P("Confirm username @"),r=P(t[0]),this.h()},l:function(a){e=w(a,"BUTTON",{class:!0});var l=D(e);n=S(l,"Confirm username @"),r=S(l,t[0]),l.forEach(k),this.h()},h:function(){v(e,"class","btn btn-success"),C(e,A,92,8,2457)},m:function(a,l){Z(a,e,l),c(e,n),c(e,r)},p:function(a,l){l&1&&J(r,a[0])},d:function(a){a&&k(e)}};return z("SvelteRegisterBlock",{block:u,id:te.name,type:"if",source:"(85:6) {#if isAvailable}",ctx:t}),u}function ge(t){var oe;let e,n,r="Your current username is",u,o=((oe=t[8])==null?void 0:oe.username)+"",a,l,i,N,d,F,h,E,B,y,R,I,q,U,s,G,M,ie,_=t[1]&&x(t),g=!t[3]&&t[7]&&$(t),p=t[3]&&!t[2]&&!t[1]&&ee(t),b=t[2]&&te(t);const se={c:function(){e=T("form"),n=T("p"),n.textContent=r,u=P(`\r
    @`),a=P(o),l=O(),i=T("input"),N=O(),d=T("div"),_&&_.c(),F=O(),g&&g.c(),h=O(),p&&p.c(),E=O(),b&&b.c(),B=O(),y=T("button"),R=T("a"),I=P("Previous Step"),q=O(),U=T("button"),s=T("a"),G=P("Next Step"),this.h()},l:function(f){e=w(f,"FORM",{class:!0});var m=D(e);n=w(m,"P",{"data-svelte-h":!0}),pe(n)!=="svelte-fg94xm"&&(n.textContent=r),u=S(m,`\r
    @`),a=S(m,o),l=V(m),i=w(m,"INPUT",{type:!0,placeholder:!0,class:!0}),N=V(m),d=w(m,"DIV",{class:!0});var j=D(d);_&&_.l(j),F=V(j),g&&g.l(j),h=V(j),p&&p.l(j),E=V(j),b&&b.l(j),j.forEach(k),B=V(m),y=w(m,"BUTTON",{class:!0});var ae=D(y);R=w(ae,"A",{href:!0});var le=D(R);I=S(le,"Previous Step"),le.forEach(k),ae.forEach(k),q=V(m),U=w(m,"BUTTON",{class:!0});var ue=D(U);s=w(ue,"A",{href:!0});var fe=D(s);G=S(fe,"Next Step"),fe.forEach(k),ue.forEach(k),m.forEach(k),this.h()},h:function(){C(n,A,62,4,1568),v(i,"type","text"),v(i,"placeholder","Username"),v(i,"class","input w-full"),L(i,"input-error",!t[3]&&t[7]),L(i,"input-warning",t[6]),L(i,"input-success",t[2]&&t[3]&&!t[1]),C(i,A,64,4,1633),v(d,"class","my-4 min-h-16 px-8 w-full"),C(d,A,74,4,1945),v(R,"href",t[5]),C(R,A,96,7,2598),v(y,"class","btn btn-primary"),C(y,A,95,4,2558),v(s,"href",t[4]),C(s,A,98,36,2691),v(U,"class","btn btn-primary"),C(U,A,98,4,2659),v(e,"class","w-2/5"),C(e,A,61,2,1499)},m:function(f,m){Z(f,e,m),c(e,n),c(e,u),c(e,a),c(e,l),c(e,i),me(i,t[0]),c(e,N),c(e,d),_&&_.m(d,null),c(d,F),g&&g.m(d,null),c(d,h),p&&p.m(d,null),c(d,E),b&&b.m(d,null),c(e,B),c(e,y),c(y,R),c(R,I),c(e,q),c(e,U),c(U,s),c(s,G),M||(ie=[K(i,"input",t[11]),K(i,"input",t[9],!1,!1,!1,!1),K(e,"submit",ke(t[10]),!1,!0,!1,!1)],M=!0)},p:function(f,m){var j;m&256&&o!==(o=((j=f[8])==null?void 0:j.username)+"")&&J(a,o),m&1&&i.value!==f[0]&&me(i,f[0]),m&136&&L(i,"input-error",!f[3]&&f[7]),m&64&&L(i,"input-warning",f[6]),m&14&&L(i,"input-success",f[2]&&f[3]&&!f[1]),f[1]?_?_.p(f,m):(_=x(f),_.c(),_.m(d,F)):_&&(_.d(1),_=null),!f[3]&&f[7]?g||(g=$(f),g.c(),g.m(d,h)):g&&(g.d(1),g=null),f[3]&&!f[2]&&!f[1]?p?p.p(f,m):(p=ee(f),p.c(),p.m(d,E)):p&&(p.d(1),p=null),f[2]?b?b.p(f,m):(b=te(f),b.c(),b.m(d,null)):b&&(b.d(1),b=null),m&32&&v(R,"href",f[5]),m&16&&v(s,"href",f[4])},d:function(f){f&&k(e),_&&_.d(),g&&g.d(),p&&p.d(),b&&b.d(),M=!1,ye(ie)}};return z("SvelteRegisterBlock",{block:se,id:ge.name,type:"slot",source:"(54:0) <AuthCheck>",ctx:t}),se}function ne(t){let e,n;e=new be({props:{$$slots:{default:[ge]},$$scope:{ctx:t}},$$inline:!0});const r={c:function(){Ae(e.$$.fragment)},l:function(o){Pe(e.$$.fragment,o)},m:function(o,a){Se(e,o,a),n=!0},p:function(o,[a]){const l={};a&16895&&(l.$$scope={dirty:a,ctx:o}),e.$set(l)},i:function(o){n||(Ee(e.$$.fragment,o),n=!0)},o:function(o){Be(e.$$.fragment,o),n=!1},d:function(o){Re(e,o)}};return z("SvelteRegisterBlock",{block:r,id:ne.name,type:"component",source:"",ctx:t}),r}const _e=/^(?=[a-zA-Z0-9._]{3,16}$)(?!.*[_.]{2})[^_.].*[^_.]$/;function De(t,e,n){let r,u,o,a,l,i,N;re(Q,"user"),ce(t,Q,s=>n(13,i=s)),re(X,"userData"),ce(t,X,s=>n(8,N=s));let{$$slots:d={},$$scope:F}=e;Ce("Page",d,[]);let h="",E=!1,B=!1,y;async function R(){n(2,B=!1),clearTimeout(y),n(1,E=!0),y=setTimeout(async()=>{console.log("checking availability of",h);const s=H(Y,"usernames",h),G=await he(s).then(M=>M.exists());n(2,B=!G),n(1,E=!1)},500)}async function I(){console.log("confirming username",h);const s=de(Y);s.set(H(Y,"usernames",h),{uid:i==null?void 0:i.uid}),s.set(H(Y,"users",i.uid),{username:h,photoURL:(i==null?void 0:i.photoURL)??null,published:!0,bio:"I am the Walrus",links:[{title:"Test Link",url:"https://kung.foo",icon:"custom"}]}),await s.commit(),n(0,h=""),n(2,B=!1)}const q=[];Object.keys(e).forEach(s=>{!~q.indexOf(s)&&s.slice(0,2)!=="$$"&&s!=="slot"&&Ue.warn(`<Page> was created with unknown prop '${s}'`)});function U(){h=this.value,n(0,h)}return t.$capture_state=()=>({AuthCheck:be,db:Y,user:Q,userData:X,doc:H,getDoc:he,writeBatch:de,re:_e,username:h,loading:E,isAvailable:B,debounceTimer:y,checkAvailability:R,confirmUsername:I,href:l,previoushref:a,isValid:r,isTaken:o,isTouched:u,$user:i,$userData:N}),t.$inject_state=s=>{"username"in s&&n(0,h=s.username),"loading"in s&&n(1,E=s.loading),"isAvailable"in s&&n(2,B=s.isAvailable),"debounceTimer"in s&&(y=s.debounceTimer),"href"in s&&n(4,l=s.href),"previoushref"in s&&n(5,a=s.previoushref),"isValid"in s&&n(3,r=s.isValid),"isTaken"in s&&n(6,o=s.isTaken),"isTouched"in s&&n(7,u=s.isTouched)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),t.$$.update=()=>{t.$$.dirty&1&&n(3,r=(h==null?void 0:h.length)>2&&h.length<16&&_e.test(h)),t.$$.dirty&1&&n(7,u=h.length>0),t.$$.dirty&14&&n(6,o=r&&!B&&!E)},n(5,a="/login"),n(4,l="/login/photo"),[h,E,B,r,l,a,o,u,N,R,I,U]}class Ie extends Te{constructor(e){super(e),we(this,e,De,ne,ve,{}),z("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:ne.name})}}export{Ie as component};