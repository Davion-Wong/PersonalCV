(this.webpackJsonpcyberlark=this.webpackJsonpcyberlark||[]).push([[0],{21:function(e,s,t){},22:function(e,s,t){},35:function(e,s,t){"use strict";t.r(s);var a=t(2),c=t(14),n=t.n(c),i=(t(21),t(4)),r=t(5),l=t(7),j=t(6),o=t(15),d=t.n(o),h=(t(22),t(16)),b=t(8),m=t.n(b),u=t(1),O=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.project,s=this.props.data.github,t=this.props.data.name,a=this.props.data.description;return Object(u.jsxs)("header",{id:"home",children:[Object(u.jsx)(h.a,{type:"circle",bg:!0}),Object(u.jsxs)("nav",{id:"nav-wrap",children:[Object(u.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(u.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(u.jsxs)("ul",{id:"nav",className:"nav",children:[Object(u.jsx)("li",{className:"current",children:Object(u.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})})]})]}),Object(u.jsx)("div",{className:"row banner",children:Object(u.jsxs)("div",{className:"banner-text",children:[Object(u.jsx)(m.a,{bottom:!0,children:Object(u.jsx)("h1",{className:"responsive-headline",children:t})}),Object(u.jsx)(m.a,{bottom:!0,duration:1200,children:Object(u.jsxs)("h3",{children:[a,"."]})}),Object(u.jsx)("hr",{}),Object(u.jsx)(m.a,{bottom:!0,duration:2e3,children:Object(u.jsxs)("ul",{className:"social",children:[Object(u.jsxs)("a",{href:e,className:"button btn project-btn",children:[Object(u.jsx)("i",{className:"fa fa-book"}),"Linkedin"]}),Object(u.jsxs)("a",{href:s,className:"button btn github-btn",children:[Object(u.jsx)("i",{className:"fa fa-github"}),"Github"]})]})})]})}),Object(u.jsx)("p",{className:"scrolldown",children:Object(u.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(u.jsx)("i",{className:"icon-down-circle"})})})]})}}]),t}(a.Component),x=O,p=(a.Component,function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,s="images/"+this.props.data.image,t=this.props.data.bio,a=this.props.data.phone,c=this.props.data.email,n=this.props.data.resumedownload;return Object(u.jsx)("section",{id:"about",children:Object(u.jsx)(m.a,{duration:1e3,children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"three columns",children:Object(u.jsx)("img",{className:"profile-pic",src:s,alt:"David Profile"})}),Object(u.jsxs)("div",{className:"nine columns main-col",children:[Object(u.jsx)("h2",{children:"About Me"}),Object(u.jsx)("p",{children:t}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"columns contact-details",children:[Object(u.jsx)("h2",{children:"Contact Details"}),Object(u.jsx)("p",{className:"address",children:Object(u.jsxs)("span",{children:[e,Object(u.jsx)("br",{}),"Mobile: ",a,Object(u.jsx)("br",{}),"Email: ",c,Object(u.jsx)("br",{}),this.props.data.address.line1,Object(u.jsx)("br",{}),this.props.data.address.line2,Object(u.jsx)("br",{}),this.props.data.address.line3,Object(u.jsx)("br",{})]})})]}),Object(u.jsx)("div",{className:"columns download",children:Object(u.jsx)("p",{children:Object(u.jsxs)("a",{href:n,className:"button",children:[Object(u.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})]})]})]})})})}}]),t}(a.Component)),v=p,f=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"getRandomColor",value:function(){for(var e="#",s=0;s<6;s++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},{key:"render",value:function(){var e=this;if(!this.props.data)return null;var s=this.props.data.skillmessage,t=this.props.data.education.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:e.school}),Object(u.jsxs)("p",{className:"info",children:[e.degree," ",Object(u.jsx)("span",{children:"\u2022"}),Object(u.jsx)("em",{className:"date",children:e.graduated})]}),Object(u.jsx)("p",{children:e.description})]},e.school)})),a=this.props.data.work.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:e.company}),Object(u.jsxs)("p",{className:"info",children:[e.title,Object(u.jsx)("span",{children:"\u2022"})," ",Object(u.jsx)("em",{className:"date",children:e.years})]}),Object(u.jsx)("p",{children:e.description})]},e.company)})),c=this.props.data.skills.map((function(s){var t=e.getRandomColor(),a="bar-expand "+s.name.toLowerCase(),c=s.level;return Object(u.jsxs)("li",{children:[Object(u.jsx)("span",{style:{width:c,backgroundColor:t},className:a}),Object(u.jsx)("em",{children:s.name})]},s.name)}));return Object(u.jsxs)("section",{id:"resume",children:[Object(u.jsx)(m.a,{left:!0,duration:1300,children:Object(u.jsxs)("div",{className:"row education",children:[Object(u.jsx)("div",{className:"three columns header-col",children:Object(u.jsx)("h1",{children:Object(u.jsx)("span",{children:"Education"})})}),Object(u.jsx)("div",{className:"nine columns main-col",children:Object(u.jsx)("div",{className:"row item",children:Object(u.jsx)("div",{className:"twelve columns",children:t})})})]})}),Object(u.jsx)(m.a,{left:!0,duration:1300,children:Object(u.jsxs)("div",{className:"row work",children:[Object(u.jsx)("div",{className:"three columns header-col",children:Object(u.jsx)("h1",{children:Object(u.jsx)("span",{children:"Work"})})}),Object(u.jsx)("div",{className:"nine columns main-col",children:a})]})}),Object(u.jsx)(m.a,{left:!0,duration:1300,children:Object(u.jsxs)("div",{className:"row skill",children:[Object(u.jsx)("div",{className:"three columns header-col",children:Object(u.jsx)("h1",{children:Object(u.jsx)("span",{children:"Skills"})})}),Object(u.jsxs)("div",{className:"nine columns main-col",children:[Object(u.jsx)("p",{children:s}),Object(u.jsx)("div",{className:"bars",children:Object(u.jsx)("ul",{className:"skills",children:c})})]})]})})]})}}]),t}(a.Component),N=f,g=(a.Component,function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(e){var a;return Object(i.a)(this,t),(a=s.call(this,e)).state={foo:"bar",resumeData:{}},a}return Object(r.a)(t,[{key:"getResumeData",value:function(){d.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,s,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(x,{data:this.state.resumeData.main}),Object(u.jsx)(v,{data:this.state.resumeData.main}),Object(u.jsx)(N,{data:this.state.resumeData.resume})]})}}]),t}(a.Component)),w=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,36)).then((function(s){var t=s.getCLS,a=s.getFID,c=s.getFCP,n=s.getLCP,i=s.getTTFB;t(e),a(e),c(e),n(e),i(e)}))};n.a.render(Object(u.jsx)(g,{}),document.getElementById("root")),w()}},[[35,1,2]]]);
//# sourceMappingURL=main.5e28f175.chunk.js.map