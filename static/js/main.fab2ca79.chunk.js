(this["webpackJsonpfood-website"]=this["webpackJsonpfood-website"]||[]).push([[0],{34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},48:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(25),r=c.n(a),i=(c(34),c(4)),l=(c(35),c(36),c(37),c(8)),o=c(0),d=function(){return Object(o.jsx)(l.b,{to:"/",className:"logo-link",children:Object(o.jsx)("div",{className:"border",children:Object(o.jsx)("div",{className:"text",children:"F o o (d)"})})})},j=s.a.createContext(),u=function(e){var t=e.children,c=e.value;return Object(o.jsx)(j.Provider,{value:c,children:t})},b=function(){return Object(n.useContext)(j)},h=c(3),m=c(28),O=c(29),x=function(e){var t=e.selected,c=e.setSelected;return Object(o.jsxs)("select",{className:"query",name:"query",value:t,onChange:function(e){return c(e.target.value)},children:[Object(o.jsx)("option",{value:"name",children:"name"}),Object(o.jsx)("option",{value:"ingredient",children:"ingredient"}),Object(o.jsx)("option",{value:"category",children:"category"}),Object(o.jsx)("option",{value:"area",children:"area"})]})},f=function(e){e.setURL;var t=e.selected,c=e.setSelected,s=e.searched,a=e.setSearched,r=(e.finalizedSearch,e.setFinalizedSearch),l=(e.finalizedSelected,e.setFinalizedSelected),j=b().isShowingMobileView,u=Object(h.f)(),f=Object(n.useState)(!1),v=Object(i.a)(f,2),p=v[0],g=v[1],S=function(e){e.preventDefault(),r(s),l(t),u.push("/results")};return j?Object(o.jsxs)("nav",{className:"nav-container",children:[Object(o.jsxs)("div",{className:"center-logo",children:[Object(o.jsx)(d,{}),Object(o.jsx)(m.a,{icon:O.a,className:"burger-menu ".concat(p?"rotate-burger":""),onClick:function(){return g(!p)}})]}),Object(o.jsx)("div",{className:"drop-down-menu-container ".concat(p?"show-nav-bar":""),children:Object(o.jsxs)("form",{className:"drop-down-menu",onSubmit:function(e){return S(e)},children:[Object(o.jsx)(x,{selected:t,setSelected:c}),Object(o.jsx)("input",{type:"text",className:"nav-bar-input",value:s,onChange:function(e){return a(e.target.value)},placeholder:"Search by ".concat(t)}),Object(o.jsx)("button",{className:"btn",type:"submit",children:"Search"})]})})]}):Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("nav",{className:"nav-container",children:[Object(o.jsx)(d,{}),Object(o.jsxs)("form",{className:"select-input-container",onSubmit:function(e){return S(e)},children:[Object(o.jsx)(x,{selected:t,setSelected:c}),Object(o.jsxs)("div",{className:"nav-input-container",children:[Object(o.jsx)("input",{type:"text",className:"nav-bar-input",value:s,onChange:function(e){return a(e.target.value)},placeholder:"Search by ".concat(t)}),Object(o.jsx)("button",{className:"btn",type:"submit",children:j?"Search":""})]})]})]})})},v=(c(48),c(9)),p=c.n(v),g=function(e){var t=e.result,c="/results/".concat(t.strMeal.replaceAll(" ","-"));return Object(o.jsxs)(l.b,{to:c,className:"result-container",children:[Object(o.jsx)("img",{src:t.strMealThumb,alt:"food",className:"result-image"}),Object(o.jsx)("div",{className:"result-text",children:t.strMeal})]})},S=function(){return Object(o.jsxs)("div",{className:"loading-bars",children:[Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{})]})},N=function(e){var t=e.results;return e.loaded?t&&t.length>0?Object(o.jsx)("div",{className:"results-grid-container",children:t.map((function(e){return Object(o.jsx)(g,{result:e},e.idMeal)}))}):Object(o.jsx)("div",{className:"no-results-text",children:"We could not find any results matching your search :("}):Object(o.jsx)(S,{})},w=function(){var e=b(),t=e.setURL,c=e.selected,s=e.setSelected,a=e.searched,r=e.setSearched,l=e.finalizedSearch,d=e.setFinalizedSearch,j=e.finalizedSelected,u=e.setFinalizedSelected,h=Object(n.useState)([]),m=Object(i.a)(h,2),O=m[0],x=m[1],v=Object(n.useState)(!1),g=Object(i.a)(v,2),S=g[0],w=g[1];return Object(n.useEffect)((function(){w(!1);!function(){var e=function(e){var t=e.data.meals;x(t),w(!0)};switch(j){case"name":p.a.get("https://www.themealdb.com/api/json/v1/1/search.php?s=".concat(l)).then((function(t){e(t)}));break;case"ingredient":p.a.get("https://www.themealdb.com/api/json/v1/1/filter.php?i=".concat(l)).then((function(t){e(t)}));break;case"category":p.a.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=".concat(l)).then((function(t){e(t)}));break;default:p.a.get("https://www.themealdb.com/api/json/v1/1/filter.php?a=".concat(l)).then((function(t){e(t)}))}}()}),[l,j]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(f,{selected:c,setSelected:s,searched:a,setSearched:r,finalizedSearch:l,setFinalizedSearch:d,setURL:t,finalizedSelected:j,setFinalizedSelected:u}),Object(o.jsx)(N,{results:O,loaded:S})]})},z=(c(66),["name","ingredient","category","area"]),y=c.p+"static/media/search-btn.9cd876f2.svg",F=(c(67),function(){return Object(o.jsxs)("button",{type:"submit",className:"search-btn-small",children:[Object(o.jsx)("img",{src:y,alt:"",className:"search-img"}),"Search"]})}),M=function(e){var t=e.button,c=e.selected,n=e.changeSelected;return Object(o.jsx)("button",{onClick:function(){return n(t)},className:"nav-button ".concat(c.toLowerCase()===t.toLowerCase()?"bottom-border":""),children:t.toUpperCase()})},k=function(e){var t=e.buttons,c=e.selected,n=e.changeSelected;return Object(o.jsx)("div",{className:"nav-bar",children:t.map((function(e){return Object(o.jsx)(M,{button:e,selected:c,changeSelected:n},e)}))})},C=function(){var e=z,t=Object(n.useRef)(void 0),c=b(),s=c.selected,a=c.setSelected,r=c.searched,i=c.setSearched,l=c.setFinalizedSearch,j=c.setFinalizedSelected,u=Object(h.f)();return Object(n.useEffect)((function(){t.current.focus()}),[]),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("section",{className:"hero",children:[Object(o.jsx)("div",{className:"homepage-logo",children:Object(o.jsx)(d,{})}),Object(o.jsx)(k,{buttons:e,selected:s,changeSelected:function(e){a(e)}}),Object(o.jsxs)("form",{className:"home-input-form",onSubmit:function(e){return function(e){e.preventDefault(),l(r),j(s),u.push("/results")}(e)},children:[Object(o.jsx)("div",{className:"input-container",children:Object(o.jsx)("input",{className:"home-input",style:{height:"3rem"},type:"text",value:r,onChange:function(e){return i(e.target.value)},ref:t,placeholder:"Seach by ".concat(s)})}),Object(o.jsx)(F,{})]})]})})},L=(c(68),function(e){var t=e.text;return Object(o.jsx)("h1",{className:"error-message",children:t})}),U=function(e){var t=e.text,c=e.link;return Object(o.jsx)("a",{href:c,className:"link",children:t.toUpperCase()})},E=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"homepage-logo",children:Object(o.jsx)(d,{})}),Object(o.jsxs)("div",{className:"flex-container",children:[Object(o.jsx)(L,{text:"Sorry! We could not find the page you're looking for!"}),Object(o.jsx)(U,{text:"home",link:"/"})]})]})},R=(c(69),function(){var e=b(),t=e.setURL,c=e.selected,s=e.setSelected,a=e.searched,r=e.setSearched,l=e.setFinalizedSearch,d=e.setFinalizedSelected,j=Object(h.g)().name,u=Object(n.useState)({}),m=Object(i.a)(u,2),O=m[0],x=m[1],v=Object(n.useState)([]),g=Object(i.a)(v,2),S=g[0],N=g[1];return Object(n.useEffect)((function(){if(void 0!==j){var e=j.replaceAll("-"," ");p.a.get("https://www.themealdb.com/api/json/v1/1/search.php?s=".concat(e)).then((function(e){var t=e.data.meals[0],c=t.strMeal,n=t.strArea,s=t.strMealThumb,a=t.strYoutube.replace("watch?v=","embed/");N(function(e){for(var t=1,c=[];""!==e["strIngredient".concat(t)]&&void 0!==e["strIngredient".concat(t)];){if(""===e["strIngredients".concat(t)]||""===e["strMeasure".concat(t)])throw new Error("Number of ingredients don't match the number of measurements in the api call");c.push({name:e["strIngredient".concat(t)],measurement:e["strMeasure".concat(t)]}),t++}return c}(e.data.meals[0])),x({strMeal:c,strArea:n,strMealThumb:s,embeddedURL:a})}))}}),[j,N]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(f,{setURL:t,selected:c,setSelected:s,searched:a,setSearched:r,setFinalizedSearch:l,setFinalizedSelected:d}),Object(o.jsx)("div",{className:"content-section",children:Object(o.jsxs)("div",{className:"item-grid-container",children:[Object(o.jsxs)("section",{className:"name-section",children:[Object(o.jsx)("h1",{className:"name",children:O.strMeal}),Object(o.jsx)("p",{children:O.strArea})]}),Object(o.jsx)("section",{className:"image-section",children:Object(o.jsx)("img",{className:"meal-img",src:O.strMealThumb,alt:"meal"})}),Object(o.jsxs)("section",{className:"ingredients-section",children:[Object(o.jsx)("h2",{className:"ingredients-header",children:"Ingredients"}),S.map((function(e){var t=e.name,c=e.measurement;return Object(o.jsxs)("div",{className:"ingredient",children:[Object(o.jsx)("p",{className:"ingredient-name",children:t}),Object(o.jsx)("p",{className:"measurement",children:c})]},t)}))]}),Object(o.jsx)("section",{className:"youtube-section",children:Object(o.jsx)("iframe",{className:"youtube-video",title:"instructional video",src:O.embeddedURL,frameBorder:"0"})})]})})]})}),I=function(){var e=Object(n.useState)("name"),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),r=Object(i.a)(a,2),l=r[0],d=r[1],j=Object(n.useState)(""),b=Object(i.a)(j,2),m=b[0],O=b[1],x=Object(n.useState)(""),f=Object(i.a)(x,2),v=f[0],p=f[1],g=Object(n.useState)(!1),S=Object(i.a)(g,2),N=S[0],z=S[1],y=function(){window.innerWidth<=377?z(!0):z(!1)};return Object(n.useEffect)((function(){return y(),window.addEventListener("resize",y),function(){window.removeEventListener("resize",y)}})),Object(o.jsx)(u,{value:{selected:c,setSelected:s,searched:l,setSearched:d,finalizedSearch:m,setFinalizedSearch:O,finalizedSelected:v,setFinalizedSelected:p,isShowingMobileView:N},children:Object(o.jsxs)(h.c,{children:[Object(o.jsx)(h.a,{path:"/",exact:!0,children:Object(o.jsx)(C,{})}),Object(o.jsx)(h.a,{path:"/results",exact:!0,children:Object(o.jsx)(w,{})}),Object(o.jsx)(h.a,{path:"/results/:name",exact:!0,children:Object(o.jsx)(R,{})}),Object(o.jsx)(h.a,{path:"*",children:Object(o.jsx)(E,{})})]})})};r.a.render(Object(o.jsx)(l.a,{children:Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(I,{})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.fab2ca79.chunk.js.map