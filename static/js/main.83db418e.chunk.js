(this.webpackJsonpcyberlark=this.webpackJsonpcyberlark||[]).push([[0],{21:function(e,t,s){},22:function(e,t,s){},35:function(e,t,s){"use strict";s.r(t);var a=s(2),c=s(14),i=s.n(c),r=(s(21),s(6)),l=s(7),n=s(9),j=s(8),o=s(15),d=s.n(o),h=(s(22),s(16)),m=s(10),b=s.n(m),O=s(1),p=function(e){Object(n.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.project,t=this.props.data.github,s=this.props.data.name,a=this.props.data.description;return Object(O.jsxs)("header",{id:"home",children:[Object(O.jsx)(h.a,{type:"circle",bg:!0}),Object(O.jsxs)("nav",{id:"nav-wrap",children:[Object(O.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(O.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(O.jsxs)("ul",{id:"nav",className:"nav",children:[Object(O.jsx)("li",{className:"current",children:Object(O.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})})]})]}),Object(O.jsx)("div",{className:"row banner",children:Object(O.jsxs)("div",{className:"banner-text",children:[Object(O.jsx)(b.a,{bottom:!0,children:Object(O.jsx)("h1",{className:"responsive-headline",children:s})}),Object(O.jsx)(b.a,{bottom:!0,duration:1200,children:Object(O.jsxs)("h3",{children:[a,"."]})}),Object(O.jsx)("hr",{}),Object(O.jsx)(b.a,{bottom:!0,duration:2e3,children:Object(O.jsxs)("ul",{className:"social",children:[Object(O.jsxs)("a",{href:e,className:"button btn project-btn",children:[Object(O.jsx)("i",{className:"fa fa-book"}),"Linkedin"]}),Object(O.jsxs)("a",{href:t,className:"button btn github-btn",children:[Object(O.jsx)("i",{className:"fa fa-github"}),"Github"]})]})})]})}),Object(O.jsx)("p",{className:"scrolldown",children:Object(O.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(O.jsx)("i",{className:"icon-down-circle"})})})]})}}]),s}(a.Component),x=p,u=function(e){Object(n.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,t="images/"+this.props.data.image,s=this.props.data.bio,a=this.props.data.phone,c=this.props.data.email,i=this.props.data.resumedownload;return Object(O.jsx)("section",{id:"about",children:Object(O.jsx)(b.a,{duration:1e3,children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"three columns",children:Object(O.jsx)("img",{className:"profile-pic",src:t,alt:"David Profile"})}),Object(O.jsxs)("div",{className:"nine columns main-col",children:[Object(O.jsx)("h2",{children:"About Me"}),Object(O.jsx)("p",{children:s}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsxs)("div",{className:"columns contact-details",children:[Object(O.jsx)("h2",{children:"Contact Details"}),Object(O.jsx)("p",{className:"address",children:Object(O.jsxs)("span",{children:[e,Object(O.jsx)("br",{}),"Mobile: ",a,Object(O.jsx)("br",{}),"Email: ",c,Object(O.jsx)("br",{}),this.props.data.address.line1,Object(O.jsx)("br",{}),this.props.data.address.line2,Object(O.jsx)("br",{}),this.props.data.address.line3,Object(O.jsx)("br",{})]})})]}),Object(O.jsx)("div",{className:"columns download",children:Object(O.jsx)("p",{children:Object(O.jsxs)("a",{href:i,className:"button",children:[Object(O.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})]})]})]})})})}}]),s}(a.Component),v=u,f=function(e){Object(n.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"getRandomColor",value:function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},{key:"render",value:function(){var e=this;if(!this.props.data)return null;var t=this.props.data.skillmessage,s=this.props.data.education.map((function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:e.school}),Object(O.jsxs)("p",{className:"info",children:[e.degree," ",Object(O.jsx)("span",{children:"\u2022"}),Object(O.jsx)("em",{className:"date",children:e.graduated})]}),Object(O.jsx)("p",{children:e.description})]},e.school)})),a=this.props.data.work.map((function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:e.company}),Object(O.jsxs)("p",{className:"info",children:[e.title,Object(O.jsx)("span",{children:"\u2022"})," ",Object(O.jsx)("em",{className:"date",children:e.years})]}),Object(O.jsx)("p",{children:e.description})]},e.company)})),c=this.props.data.skills.map((function(t){var s=e.getRandomColor(),a="bar-expand "+t.name.toLowerCase(),c=t.level;return Object(O.jsxs)("li",{children:[Object(O.jsx)("span",{style:{width:c,backgroundColor:s},className:a}),Object(O.jsx)("em",{children:t.name})]},t.name)}));return Object(O.jsxs)("section",{id:"resume",children:[Object(O.jsx)(b.a,{left:!0,duration:1300,children:Object(O.jsxs)("div",{className:"row education",children:[Object(O.jsx)("div",{className:"three columns header-col",children:Object(O.jsx)("h1",{children:Object(O.jsx)("span",{children:"Education"})})}),Object(O.jsx)("div",{className:"nine columns main-col",children:Object(O.jsx)("div",{className:"row item",children:Object(O.jsx)("div",{className:"twelve columns",children:s})})})]})}),Object(O.jsx)(b.a,{left:!0,duration:1300,children:Object(O.jsxs)("div",{className:"row work",children:[Object(O.jsx)("div",{className:"three columns header-col",children:Object(O.jsx)("h1",{children:Object(O.jsx)("span",{children:"Work"})})}),Object(O.jsx)("div",{className:"nine columns main-col",children:a})]})}),Object(O.jsx)(b.a,{left:!0,duration:1300,children:Object(O.jsxs)("div",{className:"row skill",children:[Object(O.jsx)("div",{className:"three columns header-col",children:Object(O.jsx)("h1",{children:Object(O.jsx)("span",{children:"Skills"})})}),Object(O.jsxs)("div",{className:"nine columns main-col",children:[Object(O.jsx)("p",{children:t}),Object(O.jsx)("div",{className:"bars",children:Object(O.jsx)("ul",{className:"skills",children:c})})]})]})})]})}}]),s}(a.Component),N=f,g=s.p+"static/media/A-25plus5-clock.46fe317b.png",w=s.p+"static/media/A-JavaScript-Calculator.4a7e5c98.png",A=s.p+"static/media/A-Drum_Machine.fba40b1a.png",k=s.p+"static/media/A-Markdown-Previewer.127e5d84.png",y=s.p+"static/media/A-Bar-Chart.0de4a1b3.png",C=s.p+"static/media/A-ScatterPlot-Graph.c5e7bf4a.png",M=s.p+"static/media/A-Heat-Map.70e8ea95.png",D=s.p+"static/media/A-Random-Quote-Machine.5dba3aef.png",S=s.p+"static/media/A-Treemap-Diagram.9cd8d813.png",P=s.p+"static/media/A-Choropleth-Map.6ee23f17.png",R=function(e){Object(n.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){var e=Object(O.jsx)("div",{className:"columns portfolio-item",children:Object(O.jsx)("div",{className:"item-wrap",children:Object(O.jsxs)("a",{href:"https://davion-wong.github.io/A-25plus5-Clock/",title:"",children:[Object(O.jsx)("img",{alt:"",src:g}),Object(O.jsx)("div",{className:"overlay",children:Object(O.jsx)("div",{className:"portfolio-item-meta",children:Object(O.jsx)("h5",{children:"A 25 + 5 clock"})})})]})})},"A-25plus5-clock"),t=Object(O.jsx)("div",{className:"columns portfolio-item",children:Object(O.jsx)("div",{className:"item-wrap",children:Object(O.jsxs)("a",{href:"https://davion-wong.github.io/A-JavaScript-Calculator/",title:"",children:[Object(O.jsx)("img",{alt:"",src:w}),Object(O.jsx)("div",{className:"overlay",children:Object(O.jsx)("div",{className:"portfolio-item-meta",children:Object(O.jsx)("h5",{children:"A JavaScrip Calculator"})})})]})})},"A-JavaScrip-Calculator"),s=Object(O.jsx)("div",{className:"columns portfolio-item",children:Object(O.jsx)("div",{className:"item-wrap",children:Object(O.jsxs)("a",{href:"https://davion-wong.github.io/A-Drum-Machine/",title:"",children:[Object(O.jsx)("img",{alt:"",src:A}),Object(O.jsx)("div",{className:"overlay",children:Object(O.jsx)("div",{className:"portfolio-item-meta",children:Object(O.jsx)("h5",{children:"A Drum Machine"})})})]})})},"A-Drum-Machine"),a=Object(O.jsx)("div",{className:"columns portfolio-item",children:Object(O.jsx)("div",{className:"item-wrap",children:Object(O.jsxs)("a",{href:"https://davion-wong.github.io/A-Markdown-Previewer/",title:"",children:[Object(O.jsx)("img",{alt:"",src:k}),Object(O.jsx)("div",{className:"overlay",children:Object(O.jsx)("div",{className:"portfolio-item-meta",children:Object(O.jsx)("h5",{children:"A Markdown Previewer"})})})]})})},"A-Markdown-Previewer"),c=Object(O.jsx)("div",{className:"columns portfolio-item",children:Object(O.jsx)("div",{className:"item-wrap",children:Object(O.jsxs)("a",{href:"https://davion-wong.github.io/A-Bar-Chart/",title:"",children:[Object(O.jsx)("img",{alt:"",src:y}),Object(O.jsx)("div",{className:"overlay",children:Object(O.jsx)("div",{className:"portfolio-item-meta",children:Object(O.jsx)("h5",{children:"A Bar Chart"})})})]})})},"A-Bar-Chart"),i=Object(O.jsx)("div",{className:"columns portfolio-item",children:Object(O.jsx)("div",{className:"item-wrap",children:Object(O.jsxs)("a",{href:"https://davion-wong.github.io/A-ScatterPlot-Graph/",title:"",children:[Object(O.jsx)("img",{alt:"",src:C}),Object(O.jsx)("div",{className:"overlay",children:Object(O.jsx)("div",{className:"portfolio-item-meta",children:Object(O.jsx)("h5",{children:"A ScatterPlot Graph"})})})]})})},"A-ScatterPlot-Graph"),r=Object(O.jsx)("div",{className:"columns portfolio-item",children:Object(O.jsx)("div",{className:"item-wrap",children:Object(O.jsxs)("a",{href:"https://davion-wong.github.io/A-Heat-Map/",title:"",children:[Object(O.jsx)("img",{alt:"",src:M}),Object(O.jsx)("div",{className:"overlay",children:Object(O.jsx)("div",{className:"portfolio-item-meta",children:Object(O.jsx)("h5",{children:"A Heat Map"})})})]})})},"A-Heat-Map"),l=Object(O.jsx)("div",{className:"columns portfolio-item",children:Object(O.jsx)("div",{className:"item-wrap",children:Object(O.jsxs)("a",{href:"https://davion-wong.github.io/A-Random-Quote-Machine/",title:"",children:[Object(O.jsx)("img",{alt:"",src:D}),Object(O.jsx)("div",{className:"overlay",children:Object(O.jsx)("div",{className:"portfolio-item-meta",children:Object(O.jsx)("h5",{children:"A Random Quote Machine"})})})]})})},"A-Quote-Machine"),n=Object(O.jsx)("div",{className:"columns portfolio-item",children:Object(O.jsx)("div",{className:"item-wrap",children:Object(O.jsxs)("a",{href:"https://davion-wong.github.io/A-Choropleth-Map/",title:"",children:[Object(O.jsx)("img",{alt:"",src:P}),Object(O.jsx)("div",{className:"overlay",children:Object(O.jsx)("div",{className:"portfolio-item-meta",children:Object(O.jsx)("h5",{children:"A Choropleth Map"})})})]})})},"A-Choropleth-Map"),j=Object(O.jsx)("div",{className:"columns portfolio-item",children:Object(O.jsx)("div",{className:"item-wrap",children:Object(O.jsxs)("a",{href:"https://davion-wong.github.io/A-Treemap-Diagram/",title:"",children:[Object(O.jsx)("img",{alt:"",src:S}),Object(O.jsx)("div",{className:"overlay",children:Object(O.jsx)("div",{className:"portfolio-item-meta",children:Object(O.jsx)("h5",{children:"A Treemap Diagram"})})})]})})},"A-Treemap-Diagram");return Object(O.jsx)("section",{id:"portfolio",children:Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"twelve columns collapsed",children:[Object(O.jsx)("h1",{children:"Check Out Some of My Works."}),Object(O.jsxs)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:[e,t,s,a,c,i,r,l,n,j]})]})})})}}]),s}(a.Component),B=R,H=function(e){Object(n.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).state={foo:"bar",resumeData:{}},console.log(a.state.resumeData.resume),a}return Object(l.a)(s,[{key:"getResumeData",value:function(){d.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,s){console.log(s),alert(s)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(x,{data:this.state.resumeData.main}),Object(O.jsx)(B,{data:this.state.resumeData.portfolio}),Object(O.jsx)(v,{data:this.state.resumeData.main}),Object(O.jsx)(N,{data:this.state.resumeData.resume})]})}}]),s}(a.Component),T=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,36)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;s(e),a(e),c(e),i(e),r(e)}))};i.a.render(Object(O.jsx)(H,{}),document.getElementById("root")),T()}},[[35,1,2]]]);
//# sourceMappingURL=main.83db418e.chunk.js.map