"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1501],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),f=i,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||r;return n?a.createElement(d,o(o({ref:t},s),{},{components:n})):a.createElement(d,o({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1526:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={},o="Application Branch",l={unversionedId:"application-branch",id:"version-1.5.0/application-branch",title:"Application Branch",description:"Definition",source:"@site/versioned_docs/version-1.5.0/application-branch.md",sourceDirName:".",slug:"/application-branch",permalink:"/1.5.0/application-branch",draft:!1,tags:[],version:"1.5.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Reference guide",permalink:"/1.5.0/"},next:{title:"Application Environment",permalink:"/1.5.0/application-environment"}},p={},c=[{value:"Definition",id:"definition",level:2},{value:"Properties",id:"properties",level:2},{value:"Business rules",id:"business-rules",level:2},{value:"Actions on Application branch",id:"actions-on-application-branch",level:2},{value:"View Application branches for an Application",id:"view-application-branches-for-an-application",level:3},{value:"Delete an Application branch for an Application",id:"delete-an-application-branch-for-an-application",level:3},{value:"Related topics",id:"related-topics",level:2},{value:"Feedback?",id:"feedback",level:2}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"application-branch"},"Application Branch"),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("p",null,"A copy of an ",(0,i.kt)("a",{parentName:"p",href:"application"},"Application")," codeline, managed with Mendix teamserver. Information about an Application Branch is imported from teamserver by MTA. "),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://docs.mendix.com"},"Mendix documentation")," for more information about branches. "),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Name"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the Application Branch.")))),(0,i.kt)("h2",{id:"business-rules"},"Business rules"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Application Branch information cannot be deleted from MTA if ",(0,i.kt)("a",{parentName:"li",href:"application-revision"},"Application Revision")," information still exists in the branch.")),(0,i.kt)("h2",{id:"actions-on-application-branch"},"Actions on Application branch"),(0,i.kt)("h3",{id:"view-application-branches-for-an-application"},"View Application branches for an Application"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Navigate to the "Applications" page to view all Applications that are used in MTA.'),(0,i.kt)("li",{parentName:"ul"},"Select an ",(0,i.kt)("a",{parentName:"li",href:"application"},"Application"),"."),(0,i.kt)("li",{parentName:"ul"},'Navigate to the "Application branches & revisions" tab to view the Application Branches.')),(0,i.kt)("h3",{id:"delete-an-application-branch-for-an-application"},"Delete an Application branch for an Application"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Navigate to the "Application branches & revisions" tab to view the Application Branches.'),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("i",{class:"fas fa-trash-alt"})," next to the Application Branch name to delete the information about it from MTA.")),(0,i.kt)("h2",{id:"related-topics"},"Related topics"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"application"},"Application")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"application-environment"},"Application Environment")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"application-revision"},"Application Revision")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"test-application"},"Test Application"))),(0,i.kt)("h2",{id:"feedback"},"Feedback?"),(0,i.kt)("p",null,"Missing anything? ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,i.kt)("p",null,"Last updated 21 april 2022"))}u.isMDXComponent=!0}}]);