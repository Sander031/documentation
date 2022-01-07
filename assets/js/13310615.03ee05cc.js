"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[79],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),s=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(n),d=r,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||a;return n?i.createElement(m,o(o({ref:t},c),{},{components:n})):i.createElement(m,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3172:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return f}});var i=n(3117),r=n(102),a=(n(7294),n(3905)),o=["components"],l={},u="Test Configuration",s={unversionedId:"definitions/test-configuration",id:"definitions/test-configuration",title:"Test Configuration",description:"Definition",source:"@site/docs/definitions/test-configuration.md",sourceDirName:"definitions",slug:"/definitions/test-configuration",permalink:"/documentation/definitions/test-configuration",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Test Case",permalink:"/documentation/definitions/test-case"},next:{title:"Test Instruction",permalink:"/documentation/definitions/test-instruction"}},c=[{value:"Definition",id:"definition",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Business rules",id:"business-rules",children:[],level:2},{value:"Actions on Test Configuration",id:"actions-on-test-configuration",children:[{value:"View Test Configurations",id:"view-test-configurations",children:[],level:3},{value:"Create a new Test Configuration",id:"create-a-new-test-configuration",children:[],level:3},{value:"Execute a Test Configuration",id:"execute-a-test-configuration",children:[],level:3},{value:"Delete a Test Configuration",id:"delete-a-test-configuration",children:[],level:3},{value:"Restore a deleted Test Configuration",id:"restore-a-deleted-test-configuration",children:[],level:3}],level:2},{value:"Related topics",id:"related-topics",children:[],level:2}],p={toc:c};function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"test-configuration"},"Test Configuration"),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("p",null,"A Test Configuration is an executable test script that describes which ",(0,a.kt)("a",{parentName:"p",href:"test-suite"},"Test Suites")," and which ",(0,a.kt)("a",{parentName:"p",href:"test-application"},"Test Applications")," will be/are tested. "),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Name"),(0,a.kt)("td",{parentName:"tr",align:null},"The name of the Test Configuration")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CiCd enabled"),(0,a.kt)("td",{parentName:"tr",align:null},"If set to Yes, the Test Configuration will be executed if one of it's associated Test Applications is executed via CiCd api")))),(0,a.kt)("h2",{id:"business-rules"},"Business rules"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Name is mandatory"),(0,a.kt)("li",{parentName:"ul"},"The application revision of the Test Suite must be equal to the application revision of the Test Configuration, with the same Application in order to be able to execute the Test Configuration."),(0,a.kt)("li",{parentName:"ul"},"There can only be two Test Runs per Test Configuration that are Pinned.")),(0,a.kt)("h2",{id:"actions-on-test-configuration"},"Actions on Test Configuration"),(0,a.kt)("h3",{id:"view-test-configurations"},"View Test Configurations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go to the Test design page in MTA to view a list of all the Test Configurations in MTA.")),(0,a.kt)("h3",{id:"create-a-new-test-configuration"},"Create a new Test Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go to the Test design page in MTA. "),(0,a.kt)("li",{parentName:"ul"},"Add a new Test Configuration and enter a Name and optional Description. "),(0,a.kt)("li",{parentName:"ul"},"Choose whether the Test Configuration should be Ci/Cd enabled. "),(0,a.kt)("li",{parentName:"ul"},"For more about Ci/Cd, go to ",(0,a.kt)("a",{parentName:"li",href:"../howtos/cicd"},"Ci/Cd configuration"))),(0,a.kt)("h3",{id:"execute-a-test-configuration"},"Execute a Test Configuration"),(0,a.kt)("p",null,"There are multiple ways to execute a Test Configuration.\nFrom the Test design page:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go to the Test design page in MTA. "),(0,a.kt)("li",{parentName:"ul"},"Click on Execute on the Test Configuration you want to execute.")),(0,a.kt)("p",null,"From the Test Run overview page:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go to the Test Run](test-run) overview page in MTA. "),(0,a.kt)("li",{parentName:"ul"},"Click on Execute on the Test Configuration you want to execute.")),(0,a.kt)("p",null,"From a ",(0,a.kt)("a",{parentName:"p",href:"test-suite"},"Test Suite"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open a Test Suite."),(0,a.kt)("li",{parentName:"ul"},"Click on Execute and go to Test Run overview."),(0,a.kt)("li",{parentName:"ul"},"Click Proceed on the confirmation window.")),(0,a.kt)("p",null,"From a ",(0,a.kt)("a",{parentName:"p",href:"datavariation"},"Data Variation"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click on Execute and go to Test Run overview."),(0,a.kt)("li",{parentName:"ul"},"Click Proceed on the confirmation window.")),(0,a.kt)("p",null,"From a ",(0,a.kt)("a",{parentName:"p",href:"test-run"},"Test Run"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click on Execute Test Configuration")),(0,a.kt)("h3",{id:"delete-a-test-configuration"},"Delete a Test Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go to the Test design page in MTA. "),(0,a.kt)("li",{parentName:"ul"},"Click on the recycle bin icon to delete the Test Configuration you want to delete.")),(0,a.kt)("p",null,"Note that Testers cannot delete Test Configurations."),(0,a.kt)("h3",{id:"restore-a-deleted-test-configuration"},"Restore a deleted Test Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go to the Test design page in MTA. "),(0,a.kt)("li",{parentName:"ul"},"Go to Deleted configurations."),(0,a.kt)("li",{parentName:"ul"},"Click on recover on the Test Configuration you want to restore.")),(0,a.kt)("h2",{id:"related-topics"},"Related topics"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"test-suite"},"Test Suite")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"test-run"},"Test Run"))))}f.isMDXComponent=!0}}]);