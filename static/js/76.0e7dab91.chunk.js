"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{304:function(e,t,n){n.d(t,{Hx:function(){return p},Y5:function(){return o},qF:function(){return s},wr:function(){return u},xc:function(){return f}});var r=n(861),a=n(757),c=n.n(a),i=n(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{language:"en-US"},headers:{Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwN2E5OThkNzEwNGE4YzU1MTE2YTNhMGZlNmI1ZTcwMyIsInN1YiI6IjY1MjNjM2I3MDcyMTY2NDViNmQ5YTBmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qnPTaEWYBN4zcIKafg-n-3TDQZFlldCqyLGijAdOKLg")}}),u=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/trending/movie/day");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(e){return i.get("/search/movie",{params:{query:e,include_adult:"false",page:1}})},o=function(e){return i.get("/movie/".concat(e))},f=function(e){return i.get("/movie/".concat(e,"/credits"))},p=function(e){return i.get("/movie/".concat(e,"/reviews"))}},76:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(861),a=n(439),c=n(757),i=n.n(c),u=n(791),s=n(689),o=n(304),f=n(49),p="Cast_listWraper__xxkGT",h="Cast_castImage__d8bQP",m=n(184),l=function(){var e=(0,u.useState)([]),t=(0,a.Z)(e,2),n=t[0],c=t[1],l=(0,u.useState)(!1),d=(0,a.Z)(l,2),g=d[0],v=d[1],x=(0,s.UO)().movieId;(0,u.useEffect)((function(){if(x){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v(!0),e.next=4,(0,o.xc)(x);case 4:t=e.sent,c(t.data.cast),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:return e.prev=11,v(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}}),[x]);return(0,m.jsx)("ul",{className:p,children:g?(0,m.jsx)(f.Z,{}):n.map((function(e){return(0,m.jsxs)("li",{children:[(0,m.jsx)("img",{src:e.profile_path?"https://image.tmdb.org/t/p/w500/".concat(e.profile_path):"https://dummyimage.com/80.jpg/99cccc&text=No+foto!",className:h,alt:e.name,width:"120px",height:"160px"}),(0,m.jsxs)("p",{children:[" ",e.name," "]}),(0,m.jsxs)("p",{children:[" Character: ",e.character," "]})]},e.id)}))})}}}]);
//# sourceMappingURL=76.0e7dab91.chunk.js.map