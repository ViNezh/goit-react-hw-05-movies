"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{304:function(e,n,t){t.d(n,{Hx:function(){return h},Y5:function(){return s},qF:function(){return o},wr:function(){return i},xc:function(){return f}});var r=t(861),a=t(757),c=t.n(a),u=t(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{language:"en-US"},headers:{Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwN2E5OThkNzEwNGE4YzU1MTE2YTNhMGZlNmI1ZTcwMyIsInN1YiI6IjY1MjNjM2I3MDcyMTY2NDViNmQ5YTBmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qnPTaEWYBN4zcIKafg-n-3TDQZFlldCqyLGijAdOKLg")}}),i=function(){var e=(0,r.Z)(c().mark((function e(){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/trending/movie/day");case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(e){return u.get("/search/movie",{params:{query:e,include_adult:"false",page:1}})},s=function(e){return u.get("/movie/".concat(e))},f=function(e){return u.get("/movie/".concat(e,"/credits"))},h=function(e){return u.get("/movie/".concat(e,"/reviews"))}},186:function(e,n,t){t.r(n);var r=t(861),a=t(439),c=t(757),u=t.n(c),i=t(791),o=t(689),s=t(304),f=t(49),h=t(184);n.default=function(){var e=(0,i.useState)([]),n=(0,a.Z)(e,2),t=n[0],c=n[1],l=(0,i.useState)(!1),p=(0,a.Z)(l,2),d=p[0],v=p[1],m=(0,o.UO)().movieId;(0,i.useEffect)((function(){if(m){var e=function(){var e=(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v(!0),e.next=4,(0,s.Hx)(m);case 4:n=e.sent,c(n.data.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:return e.prev=11,v(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}}),[m]);return(0,h.jsx)("ul",{children:d?(0,h.jsx)(f.a,{}):0===t.length?(0,h.jsx)("li",{children:"We don't have any reviews for this movie"}):t.map((function(e){return(0,h.jsxs)("li",{children:[(0,h.jsxs)("p",{children:["Author: ",e.author]}),(0,h.jsx)("p",{children:e.content})]},e.id)}))})}}}]);
//# sourceMappingURL=186.3879df88.chunk.js.map