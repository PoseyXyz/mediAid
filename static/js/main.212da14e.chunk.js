(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{29:function(e,t,s){},36:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s(1),i=s.n(n),a=s(22),r=s.n(a),l=(s(29),s(2)),j=s(10),o=s.n(j),d=s(12),b=s(5);var u=function(e){return Object(c.jsx)("div",{className:"navbar",children:Object(c.jsxs)("h2",{children:[" mediAid  ",Object(c.jsx)("i",{children:Object(c.jsx)(b.f,{})})]})})},h=s(6),O=s.p+"static/media/2.c2a53616.png";var x=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(u,{}),Object(c.jsx)("div",{className:"body",children:Object(c.jsxs)("div",{className:"home",children:[Object(c.jsxs)("div",{className:"txt-holder",children:[Object(c.jsx)("h1",{children:"Hello!"}),Object(c.jsx)("p",{children:"You're about to perform a short, safe and anonymous health checkup. Your answers will be carefully analysed and you'll learn about the possible causes of your symptoms. You will also gain a little information about your symptoms and what you could do to feel better"}),Object(c.jsx)("h4",{children:"Before you continue, it is important to note the following:"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"Do  not use mediAid in the case of a health emergency. Instead, contact your local emergency service."}),Object(c.jsxs)("li",{children:["Checkup is meant for informational purposes ",Object(c.jsx)("b",{children:"only"})," and is not a qualified medical diagnosis."]}),Object(c.jsx)("li",{children:"The information you provide is anonymous and not shared with anyone"}),"."]}),Object(c.jsx)(h.b,{to:"/symptoms",children:Object(c.jsx)("button",{children:"Start checkup"})})]}),Object(c.jsx)("div",{className:"img-holder",children:Object(c.jsx)("img",{src:O})})]})})]})},m=s(4),p=s(16),f=i.a.createContext(),v=function(e){var t=e.children,s=Object(n.useState)([]),i=Object(m.a)(s,2),a=i[0],r=i[1],l=Object(n.useState)([]),j=Object(m.a)(l,2),b=j[0],u=j[1],h=Object(n.useState)([]),O=Object(m.a)(h,2),x=O[0],v=O[1];Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("diagnoses"));v(e)}),[]),Object(n.useEffect)((function(){localStorage.setItem("diagnoses",JSON.stringify(x))}),[x]),Object(n.useEffect)((function(){g()}),[]);var g=function(){var e=Object(d.a)(o.a.mark((function e(){var t,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://medi-aid-server.herokuapp.com/symptoms");case 2:return t=e.sent,e.next=5,t.json();case 5:s=e.sent,console.log(s),r(s);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(d.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u([].concat(Object(p.a)(b),[t]));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(e){var t=b.filter((function(t){return t!==e}));u(t)},w=function(){var e=Object(d.a)(o.a.mark((function e(){var t,s,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="",b.map((function(e,s){return t+="".concat(s?"&":"","array=").concat(e)})),e.next=4,fetch("https://medi-aid-server.herokuapp.com/tags?".concat(t));case 4:return s=e.sent,e.next=7,s.json();case 7:c=e.sent,console.log(t),console.log(c),v(c);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsx)(f.Provider,{value:{symptoms:a,setSymptoms:r,showDetails:function(e){return a.find((function(t){return t.name===e}))},handleSomething:function(e){b.includes(e)?N(e):y(e)},addValue:y,removeValue:N,values:b,setValues:u,diagnoses:x,setDiagnoses:v,retrieveDiagnoses:w,showDiagnosisDetails:function(e){return x.find((function(t){return t.name===e}))}},children:t})};f.Consumer;var g=function(e){var t=e.page,s=Object(n.useState)({width:0}),i=Object(m.a)(s,2),a=i[0],r=i[1];return Object(n.useEffect)((function(){return"symptoms"===t?(r({width:"2rem"}),Object(c.jsx)("p",{children:"Initial symptom selection"})):"questions"===t?(r({width:"4rem"}),Object(c.jsx)("p",{children:"Diagnostic questions"})):(t="results")?(r({width:"6rem"}),Object(c.jsx)("p",{children:"Diagnosis results"})):void 0}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"sidebar",children:[Object(c.jsx)("p",{style:{color:"symptoms"===t?"#fff":"#000"},children:"Initial symptom selection"}),Object(c.jsx)("i",{children:Object(c.jsx)(b.b,{})}),Object(c.jsx)("p",{style:{color:"questions"===t?"#fff":"#000"},children:"Diagnostic questions"}),Object(c.jsx)("i",{children:Object(c.jsx)(b.b,{})}),Object(c.jsx)("p",{style:{color:"results"===t?"#fff":"#000"},children:"Diagnosis results"})]}),Object(c.jsxs)("div",{className:"altSidebar",children:["symptoms"===t?Object(c.jsx)("p",{children:"Initial symptom selection"}):"questions"===t?Object(c.jsx)("p",{children:"Diagnostic questions"}):(t="results")?Object(c.jsx)("p",{children:"Diagnosis results"}):void 0,Object(c.jsx)("div",{className:"progress-bar",children:Object(c.jsx)("span",{style:a})})]})]})};function y(){var e=Object(l.f)().slug,t=Object(n.useContext)(f),s=t.showDetails,i=t.values,a=t.handleSomething,r=t.retrieveDiagnoses,j=t.setDiagnoses,o=(t.setValues,Object(n.useState)("questions")),d=Object(m.a)(o,1)[0];Object(n.useEffect)((function(){return function(){j([])}}),[]);var O=s(e);if(!O)return Object(c.jsx)("div",{children:"Requesting resources"});var x=O.questions,p=O.name;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(u,{}),Object(c.jsxs)("div",{className:"body",children:[Object(c.jsx)(g,{page:d}),Object(c.jsxs)("div",{className:"questions-box",children:[Object(c.jsxs)("h1",{className:"headline",children:[" ",p]}),Object(c.jsxs)("p",{className:"sub-headline",children:["Find possible causes of ",p," based on specific factors. Check at least one or more factors on this page that apply to your symptom(s)."]}),Object(c.jsx)("div",{children:x.map((function(e,t){var s=e.question,n=e.tag;return Object(c.jsxs)("div",{className:"question",children:[Object(c.jsx)("p",{className:"question-txt",children:s}),Object(c.jsxs)("label",{className:"checkbox",children:[Object(c.jsx)("input",{type:"checkbox",onChange:function(){a(n)},checked:i.includes(n)}),Object(c.jsx)("span",{})]})]},t)}))}),Object(c.jsxs)("div",{className:"btn-holder",children:[Object(c.jsx)(h.b,{to:"/d",children:Object(c.jsxs)("button",{className:"back-btn",children:[Object(c.jsx)("i",{children:Object(c.jsx)(b.a,{})}),"Back"]})}),Object(c.jsx)(h.b,{to:"/d",children:Object(c.jsx)("button",{className:"submit-btn",onClick:r,children:"Submit"})})]}),Object(c.jsx)("div",{children:i})]})]})]})}var N=function(e){var t=e.diagnosis.name;return Object(c.jsx)(h.b,{to:"/diagnosis/".concat(t),children:Object(c.jsxs)("button",{className:"diagnosis",children:[t,Object(c.jsx)("i",{"aria-hidden":"t",children:Object(c.jsx)(b.b,{})})]})})};var w=function(e){var t=Object(n.useContext)(f),s=t.diagnoses,i=t.setValues,a=(t.setDiagnoses,Object(n.useState)("results")),r=Object(m.a)(a,1)[0],l=Object(n.useState)(!1),j=Object(m.a)(l,2),o=(j[0],j[1]);return Object(n.useEffect)((function(){return o(!0),function(){i([])}}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(u,{}),Object(c.jsxs)("div",{className:"body",style:{display:s===[]?"none":"flex"},children:[Object(c.jsx)(g,{page:r}),Object(c.jsxs)("div",{className:"diagnoses-list-box",children:[Object(c.jsx)("h1",{className:"headline",children:"Diagnosis Results"}),Object(c.jsx)("p",{className:"sub-headline",children:"Please note that the list below may not be complete and is provided solely for informtational purposes and is not a qualified medical opinion"}),s.map((function(e){return Object(c.jsx)(N,{diagnosis:e},e._id)}))]})]})]})};function S(){var e,t=Object(l.f)().slug,s=(0,Object(n.useContext)(f).showDiagnosisDetails)(t),i=Object(n.useState)(!1),a=Object(m.a)(i,2),r=a[0],j=a[1];if(!s)return Object(c.jsx)("div",{children:"The resource you requested for couldn't be retreived"});var o=s.name,d=s.overview,h=s.causes,O=s.symptoms,x=s.prevention,p=s.firstAid,v=Object(m.a)(s.firstAid,1)[0],g=s.triage,y=(v.headline,v.list);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(u,{}),Object(c.jsxs)("div",{className:"body",children:[Object(c.jsxs)("div",{className:"overlay",style:{height:r?"100%":"0"},children:[Object(c.jsx)("button",{to:"",className:"closebtn",onClick:function(){return j(!r)},children:"\xd7"}),Object(c.jsxs)("div",{className:"overlay-content",children:[Object(c.jsxs)("div",{className:"triage-div",children:[Object(c.jsx)("div",{className:"img-holder",children:Object(c.jsx)(b.d,{})}),Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("h2",{children:"Triage Advice"}),g.map((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:e.message}),Object(c.jsx)("ul",{children:e.list.map((function(e){return Object(c.jsx)("li",{children:e})}))})]})}))]})]}),Object(c.jsxs)("div",{className:"firstAid-div",children:[Object(c.jsx)("div",{className:"img-holder",children:Object(c.jsx)(b.c,{})}),Object(c.jsxs)("div",{className:"content",children:[Object(c.jsxs)("div",{className:"headline",children:[Object(c.jsx)("h2",{children:"First-Aid/Treatment options"}),Object(c.jsxs)("div",{id:"btn-holder",children:[Object(c.jsxs)("button",{onClick:function(){e=setInterval((function(t){var s=t.next(),c=s.value;if(s.done)clearInterval(e);else{console.log(c);var n=new SpeechSynthesisUtterance;n.text=c,speechSynthesis.speak(n)}}),5e3,y[Symbol.iterator]())},children:[Object(c.jsx)("i",{children:Object(c.jsx)(b.e,{})})," Read Aloud "]}),Object(c.jsx)("button",{onClick:function(){clearInterval(e),window.speechSynthesis.cancel()},id:"cancel",children:"Cancel Read Aloud"})]})]}),p.map((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:e.headline}),Object(c.jsx)("ul",{children:e.list.map((function(e){return Object(c.jsx)("li",{children:e})}))})]})}))]})]})]})]}),Object(c.jsxs)("div",{className:"diagnosisDetailsPage",children:[Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)("h1",{className:"diagnosis-name",children:Object(c.jsx)("b",{children:o})}),Object(c.jsxs)("div",{className:"nav-buttons",children:[Object(c.jsx)("button",{children:"Symptoms"}),Object(c.jsx)("button",{children:"Causes"}),Object(c.jsx)("button",{children:"Prevention"})]})]}),Object(c.jsxs)("div",{className:"overview",children:[Object(c.jsx)("h1",{children:"Overview"}),Object(c.jsx)("p",{children:d})]}),Object(c.jsxs)("div",{className:"causes",children:[Object(c.jsx)("h1",{children:"Causes"}),h.map((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:e.headline}),Object(c.jsx)("ul",{children:e.list.map((function(e){return Object(c.jsx)("li",{children:e})}))})]})}))]}),Object(c.jsxs)("div",{className:"symptoms",children:[Object(c.jsx)("h1",{children:"Symptoms"}),O.map((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:e.headline}),Object(c.jsx)("ul",{children:e.list.map((function(e){return Object(c.jsx)("li",{children:e})}))})]})}))]}),Object(c.jsxs)("div",{className:"prevention",children:[Object(c.jsx)("h1",{children:"Preventive measures"}),x.map((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:e.headline}),Object(c.jsx)("ul",{children:e.list.map((function(e){return Object(c.jsx)("li",{children:e})}))})]})}))]})]}),Object(c.jsxs)("button",{style:{visibility:r?"hidden":"visible"},className:"triage-btn",onClick:function(){return j(!r)},children:[Object(c.jsx)("i",{children:Object(c.jsx)(b.c,{})}),"First-Aid"]})]})]})}var C=function(e){var t=e.symptom,s=e.setValues,n=e.values,i=t.name,a=t.tag;return Object(c.jsx)(h.b,{to:"/".concat(i),children:Object(c.jsxs)("button",{className:"symptom",onClick:function(){s([].concat(Object(p.a)(n),[a]))},children:[i,Object(c.jsx)("i",{"aria-hidden":"t",children:Object(c.jsx)(b.b,{})})]})})};var k=function(e){var t=Object(n.useContext)(f),s=t.symptoms,i=(t.setSymptoms,t.values),a=t.setValues,r=Object(n.useState)(""),l=Object(m.a)(r,2),j=l[0],o=l[1],d=Object(n.useState)("symptoms"),b=Object(m.a)(d,1)[0],h=s,O=j.trim().toLowerCase();return O.length>0&&(h=h.filter((function(e){return e.name.toLowerCase().match(O)}))),Object(n.useEffect)((function(){a([])}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(u,{}),Object(c.jsxs)("div",{className:"body",children:[Object(c.jsx)(g,{page:b}),Object(c.jsxs)("div",{className:"symptoms-box",children:[Object(c.jsxs)("div",{className:"search-box",children:[Object(c.jsx)("h3",{children:"What is the main symptom you are experiencing?"}),Object(c.jsx)("input",{placeholder:"Search list of symptoms",value:j,onChange:function(e){o(e.target.value)}})]}),Object(c.jsx)("div",{className:"symptoms-list",children:h.map((function(e){return Object(c.jsx)(C,{symptom:e,values:i,setValues:a},e._id)}))})]})]})]})};var D=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{exact:!0,path:"/",component:x}),Object(c.jsx)(l.a,{exact:!0,path:"/symptoms",component:k}),Object(c.jsx)(l.a,{exact:!0,path:"/d",component:w}),Object(c.jsx)(l.a,{exact:!0,path:"/:slug",component:y}),Object(c.jsx)(l.a,{exact:!0,path:"/diagnosis/:slug",component:S})]})})},q=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,37)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,a=t.getTTFB;s(e),c(e),n(e),i(e),a(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(v,{children:Object(c.jsx)(h.a,{children:Object(c.jsx)(D,{})})})}),document.getElementById("root")),q()}},[[36,1,2]]]);
//# sourceMappingURL=main.212da14e.chunk.js.map