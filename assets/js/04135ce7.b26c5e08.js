"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5761],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=l(r),f=o,d=p["".concat(u,".").concat(f)]||p[f]||m[f]||s;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},574:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const s={},i="Error on execute with a Retrieve action",a={unversionedId:"error-on-execute-retrieve-action",id:"error-on-execute-retrieve-action",title:"Error on execute with a Retrieve action",description:"Issue summary",source:"@site/additional/04-knownissues/error-on-execute-retrieve-action.md",sourceDirName:".",slug:"/error-on-execute-retrieve-action",permalink:"/additional/knownissues/error-on-execute-retrieve-action",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cannot add application",permalink:"/additional/knownissues/cannot_add_application"},next:{title:"Generic random error message",permalink:"/additional/knownissues/generic-random-error-message"}},u={},l=[{value:"Issue summary",id:"issue-summary",level:2},{value:"Possible causes and resolutions",id:"possible-causes-and-resolutions",level:2},{value:"Consecutive Retrieve from Former Teststep without Persisting",id:"consecutive-retrieve-from-former-teststep-without-persisting",level:3},{value:"Resolutions",id:"resolutions",level:4}],c={toc:l},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"error-on-execute-with-a-retrieve-action"},"Error on execute with a Retrieve action"),(0,o.kt)("h2",{id:"issue-summary"},"Issue summary"),(0,o.kt)("p",null,"When using a Retrieve from Former Teststep, pointing to a Teststep that also uses a Retrieve from Former Teststep, you may get an error upon Executing."),(0,o.kt)("h2",{id:"possible-causes-and-resolutions"},"Possible causes and resolutions"),(0,o.kt)("h3",{id:"consecutive-retrieve-from-former-teststep-without-persisting"},"Consecutive Retrieve from Former Teststep without Persisting"),(0,o.kt)("p",null,"This is (an example of) an exact scenario:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Test Case 1 contains a Create teststep of a persistable object, but no Persist Teststep or microflow that commits the object."),(0,o.kt)("li",{parentName:"ul"},"Test Case 2 contains a Retrieve from Former Teststep using the teststep in Test Case 1, but no Persist Teststep or microflow that commits the object."),(0,o.kt)("li",{parentName:"ul"},"Test Case 3 contains a Retrieve from Former Teststep using the teststep in Test Case 2, but no Persist Teststep or microflow that commits the object.")),(0,o.kt)("p",null,"When executing, this error will be shown in the Test Run for Test Case 3:"),(0,o.kt)("font",{color:"Red"},"Failed to execute..."),(0,o.kt)("br",null),'Cannot execute pre-action "select object for retrieve run" because entity value runs of the test step run output are not found',(0,o.kt)("p",null,"Other comparable scenario's leading to this error:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the object is committed to the database, but deleted thereafter. "),(0,o.kt)("li",{parentName:"ul"},"the object is committed to the database, but the Execution User in Test Case 2 or 3 does not have access to the Entity.")),(0,o.kt)("h4",{id:"resolutions"},"Resolutions"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Insert a Persist teststep in Test Case 1 after the first teststep."),(0,o.kt)("li",{parentName:"ol"},"Make sure the Execution User has access to the Entity."),(0,o.kt)("li",{parentName:"ol"},"Avoid using consequtive retrieves from former teststep, but always retrieve from the same teststep (in above example, the teststep in Test Case 1).")))}m.isMDXComponent=!0}}]);