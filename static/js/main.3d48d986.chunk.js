(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(2),s=n(14),a=n.n(s),o=(n(25),n(5)),l=n(3),i=n(15),u=n(16),j=n(19),h=n(18);n(26);var d=function(e){return Object(c.jsx)("form",{className:"search",children:Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("input",{value:e.search,onChange:e.handleInputChange,type:"text",className:"form-control",id:"input",placeholder:"Type in Employee name to filter",name:"search"})})})};n(27);var b=function(e){return Object(c.jsx)("div",{children:Object(c.jsxs)("table",{class:"table",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"col",children:"ID"}),Object(c.jsx)("th",{scope:"col",children:"Name"}),Object(c.jsx)("th",{scope:"col",children:"Phone"}),Object(c.jsx)("th",{scope:"col",children:"Email"}),Object(c.jsx)("th",{scope:"col",onClick:e.age,children:"Age"})]})}),Object(c.jsx)("tbody",{children:e.results.filter((function(t){return t.fullName.toLowerCase().includes(e.search.toLowerCase())})).map((function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"row",children:Object(c.jsx)("img",{src:e.picture.medium,alt:e.name.first})}),Object(c.jsx)("td",{children:e.fullName}),Object(c.jsx)("td",{children:e.phone}),Object(c.jsx)("td",{children:e.email}),Object(c.jsx)("td",{children:e.dob.age})]},e.key)}))})]})})};n(28);var m=function(){return Object(c.jsx)("div",{className:"jumbotron jumbotron-fluid",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h1",{className:"display-4",children:"Employee Directory"}),Object(c.jsx)("p",{className:"lead",children:"Click on age to filter by age or use the search box to narrow results"})]})})},p=n(17),O=n.n(p),f=function(){return O.a.get("https://randomuser.me/api/?results=50&nat=us")},x=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,r=new Array(c),s=0;s<c;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={search:"",results:[],order:!1},e.age=function(){var t=e.state,n=t.results,c=t.order,r=n.sort((function(e,t){return c?e.dob.age-t.dob.age:t.dob.age-e.dob.age}));e.setState({results:r,order:!c})},e.handleInputChange=function(t){var n=t.target.value,c=t.target.name;e.setState(Object(l.a)({},c,n))},e.getEmployee=function(){f().then((function(t){return e.setState({results:t.data.results.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{fullName:e.name.first+" "+e.name.last})}))})})).catch((function(e){return console.log(e)}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getEmployee()}},{key:"render",value:function(){var e=this.state,t=e.results,n=e.search;return Object(c.jsxs)("div",{children:[Object(c.jsx)(m,{}),Object(c.jsx)(d,{value:n,handleInputChange:this.handleInputChange}),Object(c.jsx)(b,{age:this.age,search:n,results:t})]})}}]),n}(r.Component);var g=function(){return Object(c.jsx)(x,{})};n(46);a.a.render(Object(c.jsx)(g,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.3d48d986.chunk.js.map