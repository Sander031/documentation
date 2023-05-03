"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3917],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),c=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,f=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return r?a.createElement(f,s(s({ref:t},p),{},{components:r})):a.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:n,s[1]=l;for(var c=2;c<i;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1550:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_position:13},s="Generated test",l={unversionedId:"generated-test",id:"generated-test",title:"Generated test",description:"Test generation is meant to speedup test scripting and can be used as a starting point for building any Test Case.",source:"@site/docs/generated-test.md",sourceDirName:".",slug:"/generated-test",permalink:"/generated-test",draft:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Feedback Message",permalink:"/feedback-message"},next:{title:"Test Case",permalink:"/test-case"}},o={},c=[{value:"Properties (recording)",id:"properties-recording",level:2},{value:"Business rules (recording)",id:"business-rules-recording",level:2},{value:"Actions",id:"actions",level:2},{value:"Create a Recording",id:"create-a-recording",level:3},{value:"Create a Microflow test",id:"create-a-microflow-test",level:3},{value:"Related topics",id:"related-topics",level:2},{value:"Feedback?",id:"feedback",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"generated-test"},"Generated test"),(0,n.kt)("p",null,"Test generation is meant to speedup test scripting and can be used as a starting point for building any Test Case. "),(0,n.kt)("p",null,"There are two types of generated tests, the result of both being a set of Teststeps in a single Test Case:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Generated test by recording;"),(0,n.kt)("li",{parentName:"ol"},"Generated test by microflow. ")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Recording"),(0,n.kt)("br",null),"\nIt is possible to automatically generate Teststeps by creating a recording. MTA bases these Teststeps on intercepted user actions that are executed on an ",(0,n.kt)("a",{parentName:"p",href:"application-instance"},"Application Instance"),". "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Microflow"),(0,n.kt)("br",null),"\nIt is possible to automatically generate Teststeps by selecting a microflow. Teststeps will be generated to fill the input parameters of the microflow and the last teststep generated will call the microflow."),(0,n.kt)("h2",{id:"properties-recording"},"Properties (recording)"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Max. duration recording (s)"),(0,n.kt)("td",{parentName:"tr",align:null},"The number of seconds that MTA will intercept user actions before the recording times out.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Max. number of recorded actions"),(0,n.kt)("td",{parentName:"tr",align:null},"The maximum number of intercepted user actions to store in MTA.")))),(0,n.kt)("h2",{id:"business-rules-recording"},"Business rules (recording)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If the recording times out, no Teststeps will be created. "),(0,n.kt)("li",{parentName:"ul"},"If more user actions are intercepted than the set maximum, Teststeps will be created based until the maximum is reached.")),(0,n.kt)("p",null,"Note that one recorded action can lead to zero or many Teststeps, and that the 'Max. number of recorded actions' is not the same as the maximum number of created Teststeps."),(0,n.kt)("h2",{id:"actions"},"Actions"),(0,n.kt)("h3",{id:"create-a-recording"},"Create a Recording"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Click on "',(0,n.kt)("i",{class:"fas fa-wand-magic-sparkles"}),' Generate test" in the Test Case.'),(0,n.kt)("li",{parentName:"ul"},'Select "',(0,n.kt)("i",{class:"fas fa-wand-magic-sparkles"}),' Generate test by recording" to open the recording page.'),(0,n.kt)("li",{parentName:"ul"},'Click "Start recording".'),(0,n.kt)("li",{parentName:"ul"},"In the browser, navigate to the Test Application."),(0,n.kt)("li",{parentName:"ul"},"Perform the actions to be recorded there. Make sure to start the recorder before opening the page where the first record action takes place."),(0,n.kt)("li",{parentName:"ul"},"In the browser, navigate back to MTA."),(0,n.kt)("li",{parentName:"ul"},'Click "Stop recording".')),(0,n.kt)("p",null,"The recording page will close and the Teststeps created by the recorder will appear automatically. "),(0,n.kt)("p",null,"Learn more about creating Recordings in the How To and Best Practice sections."),(0,n.kt)("h3",{id:"create-a-microflow-test"},"Create a Microflow test"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Click on "',(0,n.kt)("i",{class:"fas fa-wand-magic-sparkles"}),' Generate test" in the Test Case.'),(0,n.kt)("li",{parentName:"ul"},'Select "',(0,n.kt)("i",{class:"fas fa-wand-magic-sparkles"}),' Generate test by microflow" to open the microflow selection page.'),(0,n.kt)("li",{parentName:"ul"},"Select a microflow.")),(0,n.kt)("p",null,"MTA will now generate Teststeps. Teststeps generated to fill the parameters of the microflow will contain random values, or values from the database if the parameter is an Object. Note that if the object is nonpersistable, MTA will not be able to generate a teststep to fill it."),(0,n.kt)("h2",{id:"related-topics"},"Related topics"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"application-instance"},"Application Instance")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"test-case"},"Test Case")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"teststep"},"Teststep"))),(0,n.kt)("h2",{id:"feedback"},"Feedback?"),(0,n.kt)("p",null,"Missing anything? ",(0,n.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,n.kt)("p",null,"Last updated: 19 january 2023"))}u.isMDXComponent=!0}}]);