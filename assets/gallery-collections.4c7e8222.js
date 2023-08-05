import{_ as B}from"./gallery-lazy.719d725f.js";import{_ as w}from"./gallery-page-title.868399a9.js";import{c as T}from"./gallery.c290c06f.js";import{m as H}from"./gallery-makeCoverUrl.8378190f.js";import{_ as x,c as l,d as p,a,t as g,F as m,j as y,e as h,r as L,b as P,o as i,g as v,i as b,k as n,w as z}from"./lodash.1321b47a.js";import"./content-script-helpers.d9db1ad0.js";import"./jquery.050764e9.js";import"./index.ee874ed1.js";import"./howler.22814ddb.js";import"./tippy.82bfa66a.js";const D={name:"aleCollections",mixins:[T,H],data:function(){return{collections:null,pageTitle:null,pageSubTitle:null}},computed:{filteredCollections(){const e=this;return _.filter(this.collections,function(o){return o.key==="audible"?!e.$store.state.sticky.collectionsHidePremade:!0})}},created:function(){this.pageTitle="Collections",this.pageSubTitle=null;const e=this;let t=[];_.each(this.$store.state.library.collections,function(o){let c={id:o.id,title:o.title,isSpecial:e.isSpecial(o)};c.books=_.filter(e.$store.state.library.books,function(k){return _.includes(o.books,k.asin)}),t.push(c)}),t=_.orderBy(t,[function(o){return e.isSpecial(o)},"title"],["desc","asc"]),this.collections=this.chunkify(t),this.$store.commit("prop",[{key:"pageCollection",value:[]},{key:"mutatingCollection",value:[]}])},methods:{getRandomBooks:function(e,t){return _.sampleSize(e,t)},isSpecial(e){return _.get(e,"id","").indexOf("__")===0},chunkify(e){const t=_.filter(e,{isSpecial:!0}).length,o=e.splice(0,t);return[{key:"audible",items:o},{key:"user",items:e}]}}},N={key:0,id:"ale-collections",class:"box-layout-wrapper"},V={class:"hide-premade-btn-wrapper"},q={class:"sample-covers-square"},F=["src"],M=["innerHTML"];function R(e,t,o,c,k,f){const C=w,u=L("router-link"),S=B,$=P("tippy");return e.collections?(i(),l("div",N,[p(C),a("div",V,[a("div",{onClick:t[0]||(t[0]=r=>e.$store.commit("prop",{key:"sticky.collectionsHidePremade",value:!e.$store.state.sticky.collectionsHidePremade}))},g(e.$store.state.sticky.collectionsHidePremade?"show":"hide")+" premade collections ",1)]),(i(!0),l(m,null,y(f.filteredCollections,r=>(i(),l("div",{key:r.key,class:v([r.key+"-collection"])},[(i(!0),l(m,null,y(r.items,(s,U)=>(i(),b(S,{tag:s.isSpecial?"span":"div",class:v(["single-box",{"is-special":s.isSpecial}]),"data-collection-id":s.id,key:s.id},{default:n(()=>[a("div",q,[(i(!0),l(m,null,y(f.getRandomBooks(s.books,4),d=>(i(),l("div",{class:"sample-cover",key:d.asin},[p(u,{to:{name:"collection",params:{collection:s.id},query:{book:d.asin}}},{default:n(()=>[a("img",{crossorigin:"anonymous",src:e.makeCoverUrl(d.cover),alt:""},null,8,F)]),_:2},1032,["to"])]))),128))]),p(u,{class:"collection-title",to:{name:"collection",params:{collection:s.id}}},{default:n(()=>[a("h2",null,g(s.title),1)]),_:2},1032,["to"]),s.books&&s.books.length?(i(),b(u,{key:0,class:"books-total",to:{name:"collection",params:{collection:s.id}}},{default:n(()=>[z(a("div",{innerHTML:s.books.length,content:"Total number of books in this collection."},null,8,M),[[$,{placement:"right"}]])]),_:2},1032,["to"])):h("",!0)]),_:2},1032,["tag","data-collection-id","class"]))),128))],2))),128))])):h("",!0)}var X=x(D,[["render",R],["__scopeId","data-v-2b80055f"]]);export{X as default};
