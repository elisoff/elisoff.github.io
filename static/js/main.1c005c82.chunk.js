(this["webpackJsonpresume-site"]=this["webpackJsonpresume-site"]||[]).push([[0],[,,,,,,,,,,,,,function(e,n,t){e.exports=t.p+"static/media/ginger-cat-759.e65a81e4.png"},function(e,n,t){e.exports=t.p+"static/media/ginger-cat-735.da468188.png"},function(e,n,t){e.exports=t(30)},,,,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(9),o=t.n(i),c=t(4),s=t(10),l=t(3),m=t(2),d=t(7),u=t.n(d),p=t(12),f="https://www.googleapis.com/drive/v3/files/".concat("18uTZtOKHPzXdR2MkarfkL1tj2uSlnGzkTx3JFop1pm0","?fields=exportLinks&key=AIzaSyCGgXEYNVyAoKbqGnehqHHKUTmJPTP2nq4"),g=function(){var e=Object(p.a)(u.a.mark((function e(){var n,t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(f).then((function(e){if(!e.ok)throw new Error("Failed retrieving file info");return e.json()}));case 2:return n=e.sent,t=(n||{}).exportLinks,e.abrupt("return",t["application/pdf"]||null);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=(t(26),function(e){var n=e.title,t=e.body,i=e.initAsExpanded,o=Object(a.useState)(i),s=Object(c.a)(o,2),d=s[0],u=s[1],p=r.a.createRef();Object(a.useEffect)((function(){u(i)}),[i]);var f=d?m.a:m.b;return r.a.createElement("div",{className:"accordion"},r.a.createElement("div",{className:"accordion__title"},r.a.createElement("button",{type:"button",className:"accordion__button",onClick:function(e){p.current,u(!d)}.bind(void 0)},r.a.createElement(l.a,{icon:f}),n)),d&&r.a.createElement("div",{className:"accordion__body",ref:p},t))});E.defaultProps={initAsExpanded:!1};var h=E,b=(t(27),function(e){var n=e.initAsExpanded;return r.a.createElement("div",{className:"resume"},r.a.createElement(h,{title:"My resume",initAsExpanded:n,body:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"resume__container"},r.a.createElement("div",{className:"resume__iframe"},r.a.createElement("iframe",{title:"Elis Offerni's Resume",width:"800px",height:"100%",src:"https://docs.google.com/document/d/e/2PACX-1vQzPPN8K9j6TvigrHb0-UBqeyBJ6R1fZnobXIVZ0M-LMTiFRCkF6hg7WSsvHoS7pR8YDhnC082RDpnt/pub?embedded=true"}))),r.a.createElement("button",{className:"resume__download-button",type:"button",onClick:function(){g().then((function(e){return window.open(e)}))}},r.a.createElement(l.a,{icon:m.c}),"Download"))}))}),v=t(13),w=t.n(v),_=t(14),y=t.n(_),k=(t(28),function(){return r.a.createElement("div",{className:"app__sidebar"},r.a.createElement("img",{src:y.a,alt:"Cat with an idea",className:"app__sidebar__image"}),r.a.createElement("div",{className:"app__sidebar__text"},"Hi! I'm",r.a.createElement("div",{className:"app__sidebar__text-highlight"},"Elis Offerni"),"I love cats and coding!",r.a.createElement("p",null,"Here you'll find some information about me and my resume for viewing and downloading. I'm also on"," ",r.a.createElement("a",{href:"https://linkedin.com/in/elisofferni",target:"_blank",rel:"noopener noreferrer"},"LinkedIn")," ","and"," ",r.a.createElement("a",{href:"https://github.com/elisoff",target:"_blank",rel:"noopener noreferrer"},"GitHub"),".")))}),x=function(e){var n=e.initAsExpanded;return r.a.createElement(h,{title:"About me",body:r.a.createElement(s.a,null,"I'm a Brazilian Software Engineer living in Vancouver, Canada. I've been developing software for a living for 7+ years.\n\nI realized programming was going to be my job when I wrote my first _hello world_ in a class at my \"Informatics Technician\" course.\nSince then, I learned a lot about what being a Software Engineer is, and I'm on a mission to continue learning every day.\n\nI have experience working in agile environments, working closely with product and design to develop features that combine the right\ntechnical implementations (considering time, cost and benefit) with the best user experience. My primary stack and focus include\n**Javascript** (**React** and **Angular**), **NodeJS**, **HTML**, **CSS** (**SASS** and **LESS**), testing with\n**Jest**, **Testing Library** and **Enzyme**. A lot of my experience also involves integrating with and developing REST APIs, having\nworked in the back-end with languages such as **Python**, **Go**, **Scala** and **PHP**.\n"),initAsExpanded:n})},S=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"Illustrations by"," ",r.a.createElement("a",{href:"https://icons8.com",target:"_blank",rel:"noopener noreferrer"},"Icons8")))},N=function(){var e=Object(a.useState)(!1),n=Object(c.a)(e,2),t=n[0],i=n[1];return Object(a.useEffect)((function(){var e=window.location.search,n=new URLSearchParams(e);if(n.has("resume")){var t="true"===n.get("resume");i(t)}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"app"},r.a.createElement(k,null),r.a.createElement("div",{className:"app__content"},r.a.createElement(x,{initAsExpanded:!t}),r.a.createElement(b,{initAsExpanded:t})),r.a.createElement("img",{src:w.a,alt:"Cat working",className:"app__bottom-cat"}),r.a.createElement(S,null)))};t(29);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.1c005c82.chunk.js.map