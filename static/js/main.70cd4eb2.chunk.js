(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{29:function(e,t,s){},36:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s(1),i=s.n(n),a=s(22),r=s.n(a),o=(s(29),s(2)),l=s(5);var j=function(e){var t=e.children;return Object(c.jsxs)("div",{className:"navbar",children:[Object(c.jsxs)("h2",{children:[" mediAid  ",Object(c.jsx)("i",{children:Object(c.jsx)(l.g,{})})]}),t]})},d=s(6),b=s.p+"static/media/2.c2a53616.png";var u=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(j,{}),Object(c.jsx)("div",{className:"body",children:Object(c.jsxs)("div",{className:"home",children:[Object(c.jsxs)("div",{className:"txt-holder",children:[Object(c.jsx)("h1",{children:"Hello!"}),Object(c.jsx)("p",{children:"You're about to perform a short, safe and anonymous health checkup. Your answers will be carefully analysed and you'll learn about the possible causes of your symptoms. You will also gain a little information about your symptoms and what you could do to feel better"}),Object(c.jsx)("h4",{children:"Before you continue, it is important to note the following:"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"Do  not use mediAid in the case of a health emergency. Instead, contact your local emergency service."}),Object(c.jsxs)("li",{children:["Checkup is meant for informational purposes ",Object(c.jsx)("b",{children:"only"})," and is not a qualified medical diagnosis."]}),Object(c.jsx)("li",{children:"The information you provide is anonymous and not shared with anyone   change"}),"."]}),Object(c.jsx)(d.b,{to:"/symptoms",children:Object(c.jsx)("button",{children:"Start checkup"})})]}),Object(c.jsx)("div",{className:"img-holder",children:Object(c.jsx)("img",{src:b,alt:"homeImg"})})]})})]})},h=s(3),O=s(16),m=s(10),x=s.n(m),p=s(14),f=i.a.createContext(),v=function(e){var t=e.children,s=Object(n.useState)([]),i=Object(h.a)(s,2),a=i[0],r=i[1],o=Object(n.useState)([]),l=Object(h.a)(o,2),j=l[0],d=l[1],b=Object(n.useState)([]),u=Object(h.a)(b,2),m=u[0],v=u[1],g=Object(n.useState)([]),y=Object(h.a)(g,2),N=y[0],w=y[1];Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("diagnoses"));v(e)}),[]),Object(n.useEffect)((function(){localStorage.setItem("diagnoses",JSON.stringify(m))}),[m]),Object(n.useEffect)((function(){k()}),[]);var k=function(){var e=Object(p.a)(x.a.mark((function e(){var t,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://medi-aid-server.herokuapp.com/symptoms");case 2:return t=e.sent,e.next=5,t.json();case 5:s=e.sent,console.log(s),r(s);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(p.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d([].concat(Object(O.a)(j),[t]));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(p.a)(x.a.mark((function e(){var t,s,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="",j.map((function(e,s){return t+="".concat(s?"&":"","array=").concat(e)})),e.next=4,fetch("https://medi-aid-server.herokuapp.com/tags?".concat(t));case 4:return s=e.sent,e.next=7,s.json();case 7:c=e.sent,console.log(t),console.log(c),v(c),C(c);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(p.a)(x.a.mark((function e(t){var s,c,n,i,a,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=j.filter((function(e,t){return t<Math.floor(.7*j.length)})),c="",s.map((function(e,t){return c+="".concat(t?"&":"","array=").concat(e)})),e.next=5,fetch("https://medi-aid-server.herokuapp.com/tags?".concat(c));case 5:return n=e.sent,e.next=8,n.json();case 8:return i=e.sent,console.log(c),console.log(i),e.next=13,t.map((function(e){return e.id}));case 13:a=e.sent,r=i.filter((function(e){return!a.includes(e.id)})),w(r);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)(f.Provider,{value:{symptoms:a,setSymptoms:r,showDetails:function(e){return a.find((function(t){return t.name===e}))},handleTags:function(e){j.includes(e)?function(e){var t=j.filter((function(t){return t!==e}));d(t)}(e):S(e)},tags:j,setTags:d,diagnoses:m,setDiagnoses:v,retrieveDiagnoses:D,showDiagnosisDetails:function(e){return m.find((function(t){return t.name===e}))},processLessLikelyDiagnoses:C,lessLikelyDiagnoses:N,showLessLikelyDiagnosisDetails:function(e){return N.find((function(t){return t.name===e}))}},children:t})};f.Consumer;var g=function(e){var t=e.page,s=Object(n.useState)({width:0}),i=Object(h.a)(s,2),a=i[0],r=i[1];return Object(n.useEffect)((function(){return"symptoms"===t?(r({width:"2rem"}),Object(c.jsx)("p",{children:"Initial symptom selection"})):"questions"===t?(r({width:"4rem"}),Object(c.jsx)("p",{children:"Diagnostic questions"})):"results"===t?(r({width:"6rem"}),Object(c.jsx)("p",{children:"Diagnosis results"})):void 0}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"sidebar",children:[Object(c.jsx)("p",{style:{color:"symptoms"===t?"#fff":"#000"},children:"Initial symptom selection"}),Object(c.jsx)("i",{children:Object(c.jsx)(l.b,{})}),Object(c.jsx)("p",{style:{color:"questions"===t?"#fff":"#000"},children:"Diagnostic questions"}),Object(c.jsx)("i",{children:Object(c.jsx)(l.b,{})}),Object(c.jsx)("p",{style:{color:"results"===t?"#fff":"#000"},children:"Diagnosis results"})]}),Object(c.jsxs)("div",{className:"altSidebar",children:["symptoms"===t?Object(c.jsx)("p",{children:"Initial symptom selection"}):"questions"===t?Object(c.jsx)("p",{children:"Diagnostic questions"}):"results"===t?Object(c.jsx)("p",{children:"Diagnosis results"}):void 0,Object(c.jsx)("div",{className:"progress-bar",children:Object(c.jsx)("span",{style:a})})]})]})};function y(){var e=Object(o.f)().slug,t=Object(n.useContext)(f),s=t.showDetails,i=t.tags,a=t.handleTags,r=t.retrieveDiagnoses,b=t.setDiagnoses,u=Object(n.useState)("questions"),O=Object(h.a)(u,1)[0];Object(n.useEffect)((function(){return function(){b([])}}),[]);var m=s(e);if(!m)return Object(c.jsx)("div",{children:"Requesting resources"});var x=m.questions,p=m.name;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(j,{}),Object(c.jsxs)("div",{className:"body",children:[Object(c.jsx)(g,{page:O}),Object(c.jsxs)("div",{className:"questions-box",children:[Object(c.jsxs)("h1",{className:"headline",children:[" ",p]}),Object(c.jsxs)("p",{className:"sub-headline",children:["Find possible causes of ",p," based on specific factors. Check at least one or more factors on this page that apply to your symptom(s).  The more the symptoms you provide, the more accurately mediAid can find out cause of your underlying symptoms "]}),Object(c.jsx)("div",{children:x.map((function(e,t){var s=e.question,n=e.tag;return Object(c.jsxs)("div",{className:"question",children:[Object(c.jsx)("p",{className:"question-txt",children:s}),Object(c.jsxs)("label",{className:"checkbox",children:[Object(c.jsx)("input",{type:"checkbox",onChange:function(){a(n)},checked:i.includes(n)}),Object(c.jsx)("span",{})]})]},t)}))}),Object(c.jsxs)("div",{className:"btn-holder",children:[Object(c.jsx)(d.b,{to:"/symptoms",children:Object(c.jsxs)("button",{className:"back-btn",children:[Object(c.jsx)("i",{children:Object(c.jsx)(l.a,{})}),"Back"]})}),Object(c.jsx)(d.b,{to:"/d",children:Object(c.jsx)("button",{className:"submit-btn",onClick:function(){r()},children:"Submit"})})]})]})]})]})}var N=function(e){var t=e.diagnosis.name;return Object(c.jsx)(d.b,{to:"/diagnosis/".concat(t),children:Object(c.jsxs)("button",{className:"diagnosis",children:[t,Object(c.jsx)("i",{children:Object(c.jsx)(l.b,{})})]})})};var w=function(e){var t=Object(n.useContext)(f),s=t.diagnoses,i=t.setTags,a=t.lessLikelyDiagnoses,r=Object(n.useState)("results"),o=Object(h.a)(r,1)[0],b=Object(n.useState)(!1),u=Object(h.a)(b,2),O=u[0],m=u[1],x=Object(n.useState)(!1),p=Object(h.a)(x,2),v=p[0],y=p[1];return Object(n.useEffect)((function(){return function(){i([])}}),[O]),setTimeout((function(){m(!0)}),1e4),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(j,{}),null!=s&&0===s.length?Object(c.jsx)("div",{children:O?Object(c.jsxs)("div",{className:"body",children:[Object(c.jsx)(g,{page:o}),Object(c.jsxs)("div",{className:"diagnoses-list-box",children:[Object(c.jsx)("h1",{children:"Please try again. Your selected symptoms either didn't match our current diagnoses list or you did not choose enough symptoms to arrive at a diagnosis. "}),Object(c.jsx)(d.b,{to:"/",children:Object(c.jsx)("button",{className:"restart-btn",children:"Restart diagnostic process"})})]})]}):Object(c.jsx)("div",{className:"body",children:Object(c.jsx)("div",{className:"diagnoses-list-box",children:Object(c.jsx)("h1",{children:"Processing diagnosis..."})})})}):Object(c.jsxs)("div",{className:"body",style:{display:s===[]?"none":"flex"},children:[Object(c.jsx)(g,{page:o}),Object(c.jsxs)("div",{className:"diagnoses-list-box",children:[Object(c.jsx)("h1",{className:"headline",children:"Diagnosis Results"}),Object(c.jsx)("p",{className:"sub-headline",children:"Please note that the list below may not be complete and is provided solely for informtational purposes and is not a qualified medical opinion"}),s?s.map((function(e){return Object(c.jsx)(N,{diagnosis:e},e._id)})):null,0===a.length?Object(c.jsx)(c.Fragment,{}):Object(c.jsxs)("div",{children:[Object(c.jsxs)("button",{onClick:function(){y(!v)},className:"less-likely-diagnosis",children:[Object(c.jsx)("i",{children:Object(c.jsx)(l.f,{})}),v?"Hide less likely diagnoses":"Show less likely diagnosis","  "]}),Object(c.jsx)("div",{style:{display:v?"block":"none"},children:a.map((function(e){return Object(c.jsx)(N,{diagnosis:e},e._id)}))})]}),Object(c.jsx)(d.b,{to:"/",children:Object(c.jsx)("button",{className:"restart-btn",children:"Restart diagnostic process"})})]})]})]})};function k(){var e,t=Object(o.f)().slug,s=Object(n.useContext)(f),i=s.showDiagnosisDetails,a=s.showLessLikelyDiagnosisDetails,r=i(t)||a(t),b=Object(n.useState)(!1),u=Object(h.a)(b,2),O=u[0],m=u[1],x=function(){clearInterval(e),window.speechSynthesis.cancel()};if(!r)return Object(c.jsx)("div",{children:"The resource you requested for couldn't be retreived"});var p=r.name,v=r.overview,g=r.causes,y=r.symptoms,N=r.prevention,w=r.firstAid,k=Object(h.a)(r.firstAid,1)[0],S=r.triage,D=k.list;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(j,{children:Object(c.jsx)(d.b,{to:"/",children:Object(c.jsx)("button",{className:"restart-btn",children:"Restart diagnostic process"})})}),Object(c.jsxs)("div",{className:"body",children:[Object(c.jsxs)("div",{className:"overlay",style:{height:O?"100%":"0"},children:[Object(c.jsx)("button",{to:"",className:"closebtn",onClick:function(){m(!O),x()},children:"\xd7"}),Object(c.jsxs)("div",{className:"overlay-content",children:[Object(c.jsxs)("div",{className:"triage-div",children:[Object(c.jsx)("div",{className:"img-holder",children:Object(c.jsx)(l.d,{})}),Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("h2",{children:"Triage Advice"}),S.map((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:e.message}),Object(c.jsx)("ul",{children:e.list.map((function(e){return Object(c.jsx)("li",{children:e})}))})]})}))]})]}),Object(c.jsxs)("div",{className:"firstAid-div",children:[Object(c.jsx)("div",{className:"img-holder",children:Object(c.jsx)(l.c,{})}),Object(c.jsxs)("div",{className:"content",children:[Object(c.jsxs)("div",{className:"headline",children:[Object(c.jsx)("h2",{children:"First-Aid/Treatment options"}),Object(c.jsxs)("div",{id:"btn-holder",children:[Object(c.jsxs)("button",{onClick:function(){e=setInterval((function(t){var s=t.next(),c=s.value;if(s.done)clearInterval(e);else{console.log(c);var n=new SpeechSynthesisUtterance;n.text=c,speechSynthesis.speak(n)}}),1e3,D[Symbol.iterator]())},children:[Object(c.jsx)("i",{children:Object(c.jsx)(l.e,{})})," Read aloud "]}),Object(c.jsx)("button",{onClick:x,id:"cancel",children:"End read aloud"})]})]}),w.map((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:e.headline}),Object(c.jsx)("ul",{children:e.list.map((function(e){return Object(c.jsx)("li",{children:e})}))})]})}))]})]})]})]}),Object(c.jsxs)("div",{className:"diagnosisDetailsPage",children:[Object(c.jsx)("div",{className:"header",children:Object(c.jsx)("h1",{className:"diagnosis-name",children:Object(c.jsx)("b",{children:p})})}),Object(c.jsxs)("div",{className:"overview",children:[Object(c.jsx)("h1",{children:"Overview"}),Object(c.jsx)("p",{children:v})]}),Object(c.jsxs)("div",{className:"causes",children:[Object(c.jsx)("h1",{children:"Causes"}),g.map((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:e.headline}),Object(c.jsx)("ul",{children:e.list.map((function(e){return Object(c.jsx)("li",{children:e})}))})]})}))]}),Object(c.jsxs)("div",{className:"symptoms",children:[Object(c.jsx)("h1",{children:"Symptoms"}),y.map((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:e.headline}),Object(c.jsx)("ul",{children:e.list.map((function(e){return Object(c.jsx)("li",{children:e})}))})]})}))]}),Object(c.jsxs)("div",{className:"prevention",children:[Object(c.jsx)("h1",{children:"Prevention"}),N.map((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:e.headline}),Object(c.jsx)("ul",{children:e.list.map((function(e){return Object(c.jsx)("li",{children:e})}))})]})}))]})]}),Object(c.jsxs)("button",{style:{visibility:O?"hidden":"visible"},className:"triage-btn",onClick:function(){return m(!O)},children:[Object(c.jsx)("i",{children:Object(c.jsx)(l.c,{})}),"First-Aid"]})]})]})}var S=function(e){var t=e.symptom,s=e.setTags,n=e.tags,i=t.name,a=t.tag;return Object(c.jsx)(d.b,{to:"/".concat(i),children:Object(c.jsxs)("button",{className:"symptom",onClick:function(){s([].concat(Object(O.a)(n),[a]))},children:[i,Object(c.jsx)("i",{children:Object(c.jsx)(l.b,{})})]})})};var D=function(){var e=Object(n.useContext)(f),t=e.symptoms,s=e.tags,i=e.setTags,a=Object(n.useState)(""),r=Object(h.a)(a,2),o=r[0],l=r[1],d=Object(n.useState)("symptoms"),b=Object(h.a)(d,1)[0],u=t,O=o.trim().toLowerCase();return O.length>0&&(u=u.filter((function(e){return e.name.toLowerCase().match(O)}))),Object(n.useEffect)((function(){i([])}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(j,{}),Object(c.jsxs)("div",{className:"body",children:[Object(c.jsx)(g,{page:b}),Object(c.jsxs)("div",{className:"symptoms-box",children:[Object(c.jsxs)("div",{className:"search-box",children:[Object(c.jsx)("h3",{children:"What is the main symptom you are experiencing?"}),Object(c.jsx)("input",{placeholder:"Search list of symptoms",value:o,onChange:function(e){l(e.target.value)}})]}),Object(c.jsx)("div",{className:"symptoms-list",children:u.map((function(e){return Object(c.jsx)(S,{symptom:e,tags:s,setTags:i},e._id)}))})]})]})]})};var C=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(o.c,{children:[Object(c.jsx)(o.a,{exact:!0,path:"/",component:u}),Object(c.jsx)(o.a,{exact:!0,path:"/symptoms",component:D}),Object(c.jsx)(o.a,{exact:!0,path:"/d",component:w}),Object(c.jsx)(o.a,{exact:!0,path:"/:slug",component:y}),Object(c.jsx)(o.a,{exact:!0,path:"/diagnosis/:slug",component:k})]})})},q=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,37)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,a=t.getTTFB;s(e),c(e),n(e),i(e),a(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(v,{children:Object(c.jsx)(d.a,{basename:"https://poseyxyz.github.io/mediAid/",children:Object(c.jsx)(C,{})})})}),document.getElementById("root")),q()}},[[36,1,2]]]);
//# sourceMappingURL=main.70cd4eb2.chunk.js.map