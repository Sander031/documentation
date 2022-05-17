"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1288],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},A=Object.keys(e);for(r=0;r<A.length;r++)n=A[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);for(r=0;r<A.length;r++)n=A[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,A=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),h=a,f=u["".concat(l,".").concat(h)]||u[h]||p[h]||A;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var A=n.length,o=new Array(A);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<A;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7781:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=n(3117),a=n(102),A=(n(7294),n(3905)),o=["components"],i={},l="Test an API",s={unversionedId:"howtos/test-api",id:"howtos/test-api",title:"Test an API",description:"Testing an API means creating an integration test where two apps communicate. One hypothetical app (A) executes a REST call. The other app (B) hosting a REST service, will answer. In MTA it is not possible to directly execute a REST call or host a REST service, but it is possible to use the microflows where the REST call or service depends on.",source:"@site/docs/howtos/test-api.md",sourceDirName:"howtos",slug:"/howtos/test-api",permalink:"/howtos/test-api",tags:[],version:"current",lastUpdatedAt:1652783337,formattedLastUpdatedAt:"5/17/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Test with anonymous user",permalink:"/howtos/test-anonymous-user"},next:{title:"Java Compile Error",permalink:"/knownissues/java-compile-error"}},c=[{value:"Test a REST call",id:"test-a-rest-call",children:[],level:2},{value:"Test a published REST service",id:"test-a-published-rest-service",children:[],level:2},{value:"Feedback?",id:"feedback",children:[],level:2}],p={toc:c};function u(e){var t=e.components,i=(0,a.Z)(e,o);return(0,A.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,A.kt)("h1",{id:"test-an-api"},"Test an API"),(0,A.kt)("p",null,"Testing an API means creating an integration test where two apps communicate. One hypothetical app ",(0,A.kt)("strong",{parentName:"p"},"(A)")," executes a REST call. The other app ",(0,A.kt)("strong",{parentName:"p"},"(B)")," hosting a REST service, will answer. In MTA it is not possible to directly execute a REST call or host a REST service, but it is possible to use the microflows where the REST call or service depends on. "),(0,A.kt)("h2",{id:"test-a-rest-call"},"Test a REST call"),(0,A.kt)("p",null,"To test app ",(0,A.kt)("strong",{parentName:"p"},"(A)"),", a microflow that performs the REST call can be used. This microflow is executed from MTA, and will contain the following elements:"),(0,A.kt)("ol",null,(0,A.kt)("li",{parentName:"ol"},"input parameters being used in the REST call;"),(0,A.kt)("li",{parentName:"ol"},"a create variable action where the URL to the API is constructed;"),(0,A.kt)("li",{parentName:"ol"},"the REST call, yielding a JSON string;"),(0,A.kt)("li",{parentName:"ol"},"executing the submicroflow containing any custom logic;"),(0,A.kt)("li",{parentName:"ol"},"optionally any output parameters to be used in following test steps in MTA.")),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"Microflow with REST call",src:n(3937).Z})),(0,A.kt)("p",null,"Alternatively, only the submicroflow containing the logic could be used for unit testing. This means however the JSON string must be manually entered in MTA, using a Create Object test step."),(0,A.kt)("p",null,"Finally the steps in MTA to test are:\nexecute above microflow with the necessary parameters;\na retrieve object, with the output of test step 1, containing an assert (either on object count, or on attribute, depending on the expected result)."),(0,A.kt)("h2",{id:"test-a-published-rest-service"},"Test a published REST service"),(0,A.kt)("p",null,"To test app ",(0,A.kt)("strong",{parentName:"p"},"(B)"),", the microflow is executed that is part of the REST operation.\nTo find this microflow, open the Published REST service in Mendix Studio Pro en select Show for that REST operation:"),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"REST call",src:n(7028).Z})),(0,A.kt)("p",null,"This microflow will contain the same input parameter data as the microflow executing the REST call for app ",(0,A.kt)("strong",{parentName:"p"},"(A)"),", but the parameters are typed. For example:"),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"Microflow parameters",src:n(2849).Z})),(0,A.kt)("p",null,"The output of this microflow is an httpresponse."),(0,A.kt)("p",null,"Finally the steps in MTA to test are:"),(0,A.kt)("ol",null,(0,A.kt)("li",{parentName:"ol"},"execute above microflow with the necessary parameters;"),(0,A.kt)("li",{parentName:"ol"},"retrieve object, with the output of test step 1 (httpresponse), and one or more asserts on the attributes of the httpresponse, for example \u201cStatusCode = 200\u201d.")),(0,A.kt)("h2",{id:"feedback"},"Feedback?"),(0,A.kt)("p",null,"Missing anything? ",(0,A.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,A.kt)("p",null,"Last updated 21 april 2022"))}u.isMDXComponent=!0},2849:function(e,t){t.Z="data:image/png;base64,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"},3937:function(e,t,n){t.Z=n.p+"assets/images/microflow-with-rest-call-4d66eb9dc40351e44ed0ea1925e17cdc.png"},7028:function(e,t){t.Z="data:image/png;base64,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"}}]);