import{Q as ra,T as sa,V as $,W as E,X as H,Y as F,A as na,Z as J,_ as fa,$ as z,a0 as L,a1 as y,a2 as R,a3 as P,a4 as j,a5 as ia,a6 as la,x as G,a7 as O,a8 as K,a9 as m,aa as ta,ab as ua,ac as _a,ad as va,ae as ca,af as oa,ag as da,ah as ha,N as pa,n as Q,ai as Aa,aj as Ea,ak as Na,z as U,al as Ta}from"./runtime.C3HDJazU.js";function Ma(e,a){return a}function ga(e,a,r,s){for(var i=[],l=a.length,u=0;u<l;u++)ta(a[u].e,i,!0);var o=l>0&&i.length===0&&r!==null;if(o){var N=r.parentNode;ua(N),N.append(r),s.clear(),x(e,a[0].prev,a[l-1].next)}_a(i,()=>{for(var h=0;h<l;h++){var c=a[h];o||(s.delete(c.k),x(e,c.prev,c.next)),va(c.e,!o)}})}function Ra(e,a,r,s,i,l=null){var u=e,o={flags:a,items:new Map,first:null},N=(a&$)!==0;if(N){var h=e;u=E?H(ca(h)):h.appendChild(ra())}E&&F();var c=null,w=!1;sa(()=>{var n=r(),v=na(n)?n:n==null?[]:J(n),_=v.length;if(w&&_===0)return;w=_===0;let g=!1;if(E){var p=u.data===fa;p!==(_===0)&&(u=z(),H(u),L(!1),g=!0)}if(E){for(var A=null,T,d=0;d<_;d++){if(y.nodeType===8&&y.data===oa){u=y,g=!0,L(!1);break}var f=v[d],t=s(f,d);T=aa(y,o,A,null,f,t,d,i,a),o.items.set(t,T),A=T}_>0&&H(z())}if(!E){var S=da;Ia(v,o,u,i,a,(S.f&R)!==0,s)}l!==null&&(_===0?c?P(c):c=j(()=>l(u)):c!==null&&ia(c,()=>{c=null})),g&&L(!0),r()}),E&&(u=y)}function Ia(e,a,r,s,i,l,u){var b,V,B,X;var o=(i&ha)!==0,N=(i&(O|m))!==0,h=e.length,c=a.items,w=a.first,n=w,v,_=null,g,p=[],A=[],T,d,f,t;if(o)for(t=0;t<h;t+=1)T=e[t],d=u(T,t),f=c.get(d),f!==void 0&&((b=f.a)==null||b.measure(),(g??(g=new Set)).add(f));for(t=0;t<h;t+=1){if(T=e[t],d=u(T,t),f=c.get(d),f===void 0){var S=n?n.e.nodes_start:r;_=aa(S,a,_,_===null?a.first:_.next,T,d,t,s,i),c.set(d,_),p=[],A=[],n=_.next;continue}if(N&&xa(f,T,t,i),f.e.f&R&&(P(f.e),o&&((V=f.a)==null||V.unfix(),(g??(g=new Set)).delete(f))),f!==n){if(v!==void 0&&v.has(f)){if(p.length<A.length){var M=A[0],I;_=M.prev;var Y=p[0],k=p[p.length-1];for(I=0;I<p.length;I+=1)W(p[I],M,r);for(I=0;I<A.length;I+=1)v.delete(A[I]);x(a,Y.prev,k.next),x(a,_,Y),x(a,k,M),n=M,_=k,t-=1,p=[],A=[]}else v.delete(f),W(f,n,r),x(a,f.prev,f.next),x(a,f,_===null?a.first:_.next),x(a,_,f),_=f;continue}for(p=[],A=[];n!==null&&n.k!==d;)(l||!(n.e.f&R))&&(v??(v=new Set)).add(n),A.push(n),n=n.next;if(n===null)continue;f=n}p.push(f),_=f,n=f.next}if(n!==null||v!==void 0){for(var C=v===void 0?[]:J(v);n!==null;)(l||!(n.e.f&R))&&C.push(n),n=n.next;var D=C.length;if(D>0){var ea=i&$&&h===0?r:null;if(o){for(t=0;t<D;t+=1)(B=C[t].a)==null||B.measure();for(t=0;t<D;t+=1)(X=C[t].a)==null||X.fix()}ga(a,C,ea,c)}}o&&la(()=>{var q;if(g!==void 0)for(f of g)(q=f.a)==null||q.apply()}),G.first=a.first&&a.first.e,G.last=_&&_.e}function xa(e,a,r,s){s&O&&K(e.v,a),s&m?K(e.i,r):e.i=r}function aa(e,a,r,s,i,l,u,o,N){var h=(N&O)!==0,c=(N&Aa)===0,w=h?c?pa(i):Q(i):i,n=N&m?Q(u):u,v={i:n,v:w,k:l,a:null,e:null,prev:r,next:s};try{return v.e=j(()=>o(e,w,n),E),v.e.prev=r&&r.e,v.e.next=s&&s.e,r===null?a.first=v:(r.next=v,r.e.next=v.e),s!==null&&(s.prev=v,s.e.prev=v.e),v}finally{}}function W(e,a,r){for(var s=e.next?e.next.e.nodes_start:r,i=a?a.e.nodes_start:r,l=e.e.nodes_start;l!==s;){var u=Ea(l);i.before(l),l=u}}function x(e,a,r){a===null?e.first=r:(a.next=r,a.e.next=r&&r.e),r!==null&&(r.prev=a,r.e.prev=a&&a.e)}function Sa(e,a,r,s,i){var o;E&&F();var l=(o=a.$$slots)==null?void 0:o[r],u=!1;l===!0&&(l=a.children,u=!0),l===void 0||l(e,u?()=>s:s)}function ka(e,a,r,s){var i=e.__attributes??(e.__attributes={});E&&(i[a]=e.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&e.nodeName==="LINK")||i[a]!==(i[a]=r)&&(a==="style"&&"__styles"in e&&(e.__styles={}),a==="loading"&&(e[Na]=r),r==null?e.removeAttribute(a):typeof r!="string"&&wa(e).includes(a)?e[a]=r:e.setAttribute(a,r))}var Z=new Map;function wa(e){var a=Z.get(e.nodeName);if(a)return a;Z.set(e.nodeName,a=[]);for(var r,s=U(e),i=Element.prototype;i!==s;){r=Ta(s);for(var l in r)r[l].set&&a.push(l);s=U(s)}return a}function Da(e,a){var r=e.__className,s=Ca(a);E&&e.className===s?e.__className=s:(r!==s||E&&e.className!==s)&&(a==null?e.removeAttribute("class"):e.className=s,e.__className=s)}function Ca(e){return e??""}export{ka as a,Da as b,Ra as e,Ma as i,Sa as s};