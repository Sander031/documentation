"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2390],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),o=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=o(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=o(n),m=r,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[c]="string"==typeof e?e:r,l[1]=s;for(var o=2;o<i;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7545:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:17},l="Test Run",s={unversionedId:"test-run",id:"test-run",title:"Test Run",description:"Definition",source:"@site/docs/test-run.md",sourceDirName:".",slug:"/test-run",permalink:"/test-run",draft:!1,tags:[],version:"current",sidebarPosition:17,frontMatter:{sidebar_position:17},sidebar:"tutorialSidebar",previous:{title:"Test Configuration",permalink:"/test-configuration"},next:{title:"Test Setting",permalink:"/test-setting"}},u={},o=[{value:"Definition",id:"definition",level:2},{value:"Properties",id:"properties",level:2},{value:"Business rules",id:"business-rules",level:2},{value:"Actions on Test Run",id:"actions-on-test-run",level:2},{value:"View Test Runs",id:"view-test-runs",level:3},{value:"Create a new Test Run",id:"create-a-new-test-run",level:3},{value:"Delete a Test Run",id:"delete-a-test-run",level:3},{value:"Pin a Test Run",id:"pin-a-test-run",level:3},{value:"Related topics",id:"related-topics",level:2},{value:"Feedback?",id:"feedback",level:2}],p={toc:o},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"test-run"},"Test Run"),(0,r.kt)("h2",{id:"definition"},"Definition"),(0,r.kt)("p",null,"The Test Run contains the tests that can be/are executed according a ",(0,r.kt)("a",{parentName:"p",href:"test-configuration"},"Test Configuration"),"."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Name"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the Test Run.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Flagged for delete"),(0,r.kt)("td",{parentName:"tr",align:null},"This indicates if the Test Run is flagged for deletion by the user.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pinned"),(0,r.kt)("td",{parentName:"tr",align:null},"If a Test Run is pinned by a user it will not be deleted overnight.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result"),(0,r.kt)("td",{parentName:"tr",align:null},"The test result ('Pass' or 'Fail').")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Start date"),(0,r.kt)("td",{parentName:"tr",align:null},"The moment when the Test Run starts.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Status"),(0,r.kt)("td",{parentName:"tr",align:null},"This indicates if the test is running or not; can be 'Running' or 'Finished'.")))),(0,r.kt)("h2",{id:"business-rules"},"Business rules"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can ",(0,r.kt)("a",{parentName:"li",href:"#pin-a-test-run"},"pin")," a maximum of two Test Runs per ",(0,r.kt)("a",{parentName:"li",href:"test-configuration"},"Test Configuration"),".")),(0,r.kt)("h2",{id:"actions-on-test-run"},"Actions on Test Run"),(0,r.kt)("h3",{id:"view-test-runs"},"View Test Runs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Navigate to the "Test configurations" page.'),(0,r.kt)("li",{parentName:"ul"},"Select the Test Configuration you want to view Test Runs for."),(0,r.kt)("li",{parentName:"ul"},'Navigate to "Test runs".')),(0,r.kt)("h3",{id:"create-a-new-test-run"},"Create a new Test Run"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To create a new Test Run, ",(0,r.kt)("a",{parentName:"li",href:"test-configuration#execute-a-test-configuration"},"Execute a Test Configuration"),".")),(0,r.kt)("h3",{id:"delete-a-test-run"},"Delete a Test Run"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Navigate to the "Test configurations" page.'),(0,r.kt)("li",{parentName:"ul"},"Select the Test Configuration you want to view Test Runs for."),(0,r.kt)("li",{parentName:"ul"},'Navigate to "Test runs".'),(0,r.kt)("li",{parentName:"ul"},'Click "',(0,r.kt)("i",{class:"fal fa-trash-can"}),'" for the Test run you want to delete.')),(0,r.kt)("p",null,"Note that for each Test Configuration, only the last two executed Test Runs are persisted overnight, plus a maximum of two pinned Test Runs. The rest is cleaned up. Read the ",(0,r.kt)("a",{parentName:"p",href:"#pin-a-test-run"},"Pin a Test Run")," section in this page for more information.\nIf a Test Run is cleaned up, the following information about the Test Run is stored for the statistics on the dashboard page:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"start date"),(0,r.kt)("li",{parentName:"ul"},"result (Pas, Fail, Error)"),(0,r.kt)("li",{parentName:"ul"},"number of testcaseruns OK"),(0,r.kt)("li",{parentName:"ul"},"number of testcaseruns NOK"),(0,r.kt)("li",{parentName:"ul"},"number of testcaseruns not executed"),(0,r.kt)("li",{parentName:"ul"},"per Test Case run: Test Case name, application, environment, revision, Test Run result")),(0,r.kt)("h3",{id:"pin-a-test-run"},"Pin a Test Run"),(0,r.kt)("p",null,"Pinning a Test Run will prevent it from being cleaned up overnight."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigate to the Test Run overview in MTA under Test Run."),(0,r.kt)("li",{parentName:"ul"},'Click on "',(0,r.kt)("i",{class:"fas fa-thumbtack"}),'" next to the Test Run you want to keep.')),(0,r.kt)("h2",{id:"related-topics"},"Related topics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"test-run"},"Test Run")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"test-suite"},"Test Suite"))),(0,r.kt)("h2",{id:"feedback"},"Feedback?"),(0,r.kt)("p",null,"Missing anything? ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,r.kt)("p",null,"Last updated: 19 january 2023"))}d.isMDXComponent=!0}}]);