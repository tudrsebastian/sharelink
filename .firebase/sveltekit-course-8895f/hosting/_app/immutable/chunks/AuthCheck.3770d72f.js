import{s as j,v as q,r as E,e as y,n as N,g as C,l as O,h as w,i as Y,m as x,z,k as A,w as p,u as D,p as G,q as F}from"./scheduler.1005fe53.js";import{S as H,i as I,d as _,v as J,a as R,h as K,t as b,c as L,b as v,e as k,g as m,n as S}from"./index.9d1d7535.js";import{b as h}from"./firebase.b7e54b21.js";const $="G:/PersonalProjects/myapp/src/lib/components/AuthCheck.svelte";function B(i){let e,o,t,r="Sign in";const a={c:function(){e=C("p"),o=O(`You must be signed in to view this page.\r
    `),t=C("a"),t.textContent=r,this.h()},l:function(s){e=w(s,"P",{class:!0});var l=Y(e);o=x(l,`You must be signed in to view this page.\r
    `),t=w(l,"A",{class:!0,href:!0,"data-svelte-h":!0}),z(t)!=="svelte-1do4sx8"&&(t.textContent=r),l.forEach(k),this.h()},h:function(){m(t,"class","btn btn-primary"),m(t,"href","/login"),A(t,$,9,4,179),m(e,"class","text-error"),A(e,$,7,2,105)},m:function(s,l){R(s,e,l),S(e,o),S(e,t)},p,i:p,o:p,d:function(s){s&&k(e)}};return _("SvelteRegisterBlock",{block:a,id:B.name,type:"else",source:"(6:0) {:else}",ctx:i}),a}function P(i){let e;const o=i[2].default,t=N(o,i,i[1],null),r={c:function(){t&&t.c()},l:function(n){t&&t.l(n)},m:function(n,s){t&&t.m(n,s),e=!0},p:function(n,s){t&&t.p&&(!e||s&2)&&D(t,o,n,n[1],e?F(o,n[1],s,null):G(n[1]),null)},i:function(n){e||(v(t,n),e=!0)},o:function(n){b(t,n),e=!1},d:function(n){t&&t.d(n)}};return _("SvelteRegisterBlock",{block:r,id:P.name,type:"if",source:"(4:0) {#if $user}",ctx:i}),r}function g(i){let e,o,t,r;const a=[P,B],n=[];function s(u,c){return u[0]?0:1}e=s(i),o=n[e]=a[e](i);const l={c:function(){o.c(),t=y()},l:function(c){o.l(c),t=y()},m:function(c,f){n[e].m(c,f),R(c,t,f),r=!0},p:function(c,[f]){let d=e;e=s(c),e===d?n[e].p(c,f):(K(),b(n[d],1,1,()=>{n[d]=null}),L(),o=n[e],o?o.p(c,f):(o=n[e]=a[e](c),o.c()),v(o,1),o.m(t.parentNode,t))},i:function(c){r||(v(o),r=!0)},o:function(c){b(o),r=!1},d:function(c){c&&k(t),n[e].d(c)}};return _("SvelteRegisterBlock",{block:l,id:g.name,type:"component",source:"",ctx:i}),l}function M(i,e,o){let t;q(h,"user"),E(i,h,s=>o(0,t=s));let{$$slots:r={},$$scope:a}=e;J("AuthCheck",r,["default"]);const n=[];return Object.keys(e).forEach(s=>{!~n.indexOf(s)&&s.slice(0,2)!=="$$"&&s!=="slot"&&console.warn(`<AuthCheck> was created with unknown prop '${s}'`)}),i.$$set=s=>{"$$scope"in s&&o(1,a=s.$$scope)},i.$capture_state=()=>({user:h,$user:t}),[t,a,r]}class V extends H{constructor(e){super(e),I(this,e,M,g,j,{}),_("SvelteRegisterComponent",{component:this,tagName:"AuthCheck",options:e,id:g.name})}}export{V as A};
