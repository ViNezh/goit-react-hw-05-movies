"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[168],{304:function(e,n,t){t.d(n,{Hx:function(){return h},Y5:function(){return o},qF:function(){return s},wr:function(){return u},xc:function(){return f}});var r=t(861),a=t(757),c=t.n(a),i=t(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{language:"en-US"},headers:{Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwN2E5OThkNzEwNGE4YzU1MTE2YTNhMGZlNmI1ZTcwMyIsInN1YiI6IjY1MjNjM2I3MDcyMTY2NDViNmQ5YTBmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qnPTaEWYBN4zcIKafg-n-3TDQZFlldCqyLGijAdOKLg")}}),u=function(){var e=(0,r.Z)(c().mark((function e(){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/trending/movie/day");case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(e){return i.get("/search/movie",{params:{query:e,include_adult:"false",page:1}})},o=function(e){return i.get("/movie/".concat(e))},f=function(e){return i.get("/movie/".concat(e,"/credits"))},h=function(e){return i.get("/movie/".concat(e,"/reviews"))}},168:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var r=t(861),a=t(439),c=t(757),i=t.n(c),u=t(791),s=t(689),o=t(304),f=t(49),h="Reviews_reviewList__uMBar",l="Reviews_reviewWraper__8pZ8+",p=t(184),v=function(){var e=(0,u.useState)([]),n=(0,a.Z)(e,2),t=n[0],c=n[1],v=(0,u.useState)(!1),d=(0,a.Z)(v,2),m=d[0],w=d[1],g=(0,s.UO)().movieId;(0,u.useEffect)((function(){if(g){var e=function(){var e=(0,r.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,w(!0),e.next=4,(0,o.Hx)(g);case 4:n=e.sent,c(n.data.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:return e.prev=11,w(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}}),[g]);return(0,p.jsx)("ul",{className:h,children:m?(0,p.jsx)(f.Z,{}):0===t.length?(0,p.jsx)("li",{children:"We don't have any reviews for this movie"}):t.map((function(e){return(0,p.jsxs)("li",{className:l,children:[(0,p.jsxs)("p",{children:["Author: ",e.author]}),(0,p.jsx)("p",{children:e.content})]},e.id)}))})}}}]);
//# sourceMappingURL=168.dae5a229.chunk.js.map