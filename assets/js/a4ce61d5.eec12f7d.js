"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9043],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return n?i.createElement(h,o(o({ref:t},s),{},{components:n})):i.createElement(h,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3043:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var i=n(3117),a=n(102),r=(n(7294),n(3905)),o=["components"],l={},p="Application Environment",c={unversionedId:"refguide/application-environment",id:"refguide/application-environment",title:"Application Environment",description:"This document is based on MTA version 1.6.",source:"@site/docs/refguide/application-environment.md",sourceDirName:"refguide",slug:"/refguide/application-environment",permalink:"/refguide/application-environment",tags:[],version:"current",lastUpdatedAt:1652783337,formattedLastUpdatedAt:"5/17/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Application Branch",permalink:"/refguide/application-branch"},next:{title:"Application Revision",permalink:"/refguide/application-revision"}},s=[{value:"Definition",id:"definition",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Business rules",id:"business-rules",children:[],level:2},{value:"Actions on an Application Environment",id:"actions-on-an-application-environment",children:[{value:"View Application Environment for an Application",id:"view-application-environment-for-an-application",children:[],level:3},{value:"View Test Configurations that use an Application Environment",id:"view-test-configurations-that-use-an-application-environment",children:[],level:3},{value:"Delete Application Environment",id:"delete-application-environment",children:[],level:3}],level:2},{value:"Related topics",id:"related-topics",children:[],level:2},{value:"Feedback?",id:"feedback",children:[],level:2}],u={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"application-environment"},"Application Environment"),(0,r.kt)("p",null,"This document is based on MTA version 1.6."),(0,r.kt)("h2",{id:"definition"},"Definition"),(0,r.kt)("p",null,"A resource container on which exactly one Mendix application can be deployed i.e. Test, Acceptance and Production.\nAn Application Environment can be hosted on the Mendix Cloud, a third party cloud environment, on premise or locally on a computer. Application Environments are imported from the Mendix model by MTA. "),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://docs.mendix.com"},"Mendix documentation")," for more information about application environments."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Name"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of environment.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Model version"),(0,r.kt)("td",{parentName:"tr",align:null},"The version number of the package deployed in your environment.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"URL"),(0,r.kt)("td",{parentName:"tr",align:null},"The Mendix URL of the environment.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Plugin username"),(0,r.kt)("td",{parentName:"tr",align:null},"Username of the Plugin User in the environment of the application under test.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Plugin password"),(0,r.kt)("td",{parentName:"tr",align:null},"Password of the Plugin User in the environment of the application under test.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Show statistics"),(0,r.kt)("td",{parentName:"tr",align:null},"This indicates whether the application environment is displayed in the statistics overview (dashboard).")))),(0,r.kt)("h2",{id:"business-rules"},"Business rules"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The name is mandatory."),(0,r.kt)("li",{parentName:"ul"},"The URL is mandatory."),(0,r.kt)("li",{parentName:"ul"},"The URL should start with http of https and not end with a slash."),(0,r.kt)("li",{parentName:"ul"},"The Plugin username is mandatory."),(0,r.kt)("li",{parentName:"ul"},"The Plugin password is mandatory.")),(0,r.kt)("h2",{id:"actions-on-an-application-environment"},"Actions on an Application Environment"),(0,r.kt)("h3",{id:"view-application-environment-for-an-application"},"View Application Environment for an Application"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Navigate to the "Applications" page to view all Applications that are used in MTA.'),(0,r.kt)("li",{parentName:"ul"},"Select an ",(0,r.kt)("a",{parentName:"li",href:"application"},"Application"),"."),(0,r.kt)("li",{parentName:"ul"},'Navigate to the "Application environments & execution users" tab to view the Application Environments.')),(0,r.kt)("h3",{id:"view-test-configurations-that-use-an-application-environment"},"View Test Configurations that use an Application Environment"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Navigate to the "Application environments & execution users" tab to view the Application Environments.'),(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("i",{class:"fa fa-eye"})," next to an Application Environment. MTA shows a popup page with ",(0,r.kt)("a",{parentName:"li",href:"test-configuration"},"Test Configurations")," that have a ",(0,r.kt)("a",{parentName:"li",href:"test-application"},"Test Application")," using this Application Environment.")),(0,r.kt)("p",null,"If no Test Application is associated, the ",(0,r.kt)("i",{class:"fas fa-trash-alt"})," icon is shown instead of the ",(0,r.kt)("i",{class:"fa fa-eye"})," icon."),(0,r.kt)("h3",{id:"delete-application-environment"},"Delete Application Environment"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Go to the "Application environments & execution users" tab to view the Application Environments.'),(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("i",{class:"fas fa-trash-alt"})," next to the respective Application Environment. MTA will delete all data regarding the Application Environment. Note that the actual Mendix app environment will not be deleted. The Application Environment data will automatically be added again when referenced by a Test Configuration.")),(0,r.kt)("p",null,"If a Test Application is associated, the ",(0,r.kt)("i",{class:"fa fa-eye"})," icon is shown instead of the ",(0,r.kt)("i",{class:"fas fa-trash-alt"})," icon. "),(0,r.kt)("h2",{id:"related-topics"},"Related topics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"application"},"Application")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"application-branch"},"Application Branch")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"application-revision"},"Application Revision")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"test-application"},"Test Application"))),(0,r.kt)("h2",{id:"feedback"},"Feedback?"),(0,r.kt)("p",null,"Missing anything? ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,r.kt)("p",null,"Last updated 21 april 2022"))}d.isMDXComponent=!0}}]);