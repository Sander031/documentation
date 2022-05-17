"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3676],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||r;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4337:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(3117),i=n(102),r=(n(7294),n(3905)),o=["components"],l={},p="Application Branch",c={unversionedId:"refguide/application-branch",id:"refguide/application-branch",title:"Application Branch",description:"This document is based on MTA version 1.6.",source:"@site/docs/refguide/application-branch.md",sourceDirName:"refguide",slug:"/refguide/application-branch",permalink:"/refguide/application-branch",tags:[],version:"current",lastUpdatedAt:1652783337,formattedLastUpdatedAt:"5/17/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Reference guide",permalink:"/refguide/"},next:{title:"Application Environment",permalink:"/refguide/application-environment"}},u=[{value:"Definition",id:"definition",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Business rules",id:"business-rules",children:[],level:2},{value:"Actions on Application branch",id:"actions-on-application-branch",children:[{value:"View Application branches for an Application",id:"view-application-branches-for-an-application",children:[],level:3},{value:"Delete an Application branch for an Application",id:"delete-an-application-branch-for-an-application",children:[],level:3}],level:2},{value:"Related topics",id:"related-topics",children:[],level:2},{value:"Feedback?",id:"feedback",children:[],level:2}],s={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"application-branch"},"Application Branch"),(0,r.kt)("p",null,"This document is based on MTA version 1.6."),(0,r.kt)("h2",{id:"definition"},"Definition"),(0,r.kt)("p",null,"A copy of an ",(0,r.kt)("a",{parentName:"p",href:"application"},"Application")," codeline, managed with Mendix teamserver. Information about an Application Branch is imported from teamserver by MTA. "),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://docs.mendix.com"},"Mendix documentation")," for more information about branches. "),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Name"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the Application Branch.")))),(0,r.kt)("h2",{id:"business-rules"},"Business rules"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Application Branch information cannot be deleted from MTA if ",(0,r.kt)("a",{parentName:"li",href:"application-revision"},"Application Revision")," information still exists in the branch.")),(0,r.kt)("h2",{id:"actions-on-application-branch"},"Actions on Application branch"),(0,r.kt)("h3",{id:"view-application-branches-for-an-application"},"View Application branches for an Application"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Navigate to the "Applications" page to view all Applications that are used in MTA.'),(0,r.kt)("li",{parentName:"ul"},"Select an ",(0,r.kt)("a",{parentName:"li",href:"application"},"Application"),"."),(0,r.kt)("li",{parentName:"ul"},'Navigate to the "Application branches & revisions" tab to view the Application Branches.')),(0,r.kt)("h3",{id:"delete-an-application-branch-for-an-application"},"Delete an Application branch for an Application"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Navigate to the "Application branches & revisions" tab to view the Application Branches.'),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("i",{class:"fas fa-trash-alt"})," next to the Application Branch name to delete the information about it from MTA.")),(0,r.kt)("h2",{id:"related-topics"},"Related topics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"application"},"Application")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"application-environment"},"Application Environment")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"application-revision"},"Application Revision")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"test-application"},"Test Application"))),(0,r.kt)("h2",{id:"feedback"},"Feedback?"),(0,r.kt)("p",null,"Missing anything? ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,r.kt)("p",null,"Last updated 21 april 2022"))}d.isMDXComponent=!0}}]);