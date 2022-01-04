"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[114],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=u(n),f=i,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,o(o({ref:e},c),{},{components:n})):r.createElement(m,o({ref:e},c))}));function f(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7355:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(3117),i=n(102),a=(n(7294),n(3905)),o=["components"],l={},s="Test instruction",u={unversionedId:"definitions/test-instruction",id:"definitions/test-instruction",title:"Test instruction",description:"Definition",source:"@site/docs/definitions/test-instruction.md",sourceDirName:"definitions",slug:"/definitions/test-instruction",permalink:"/documentation/definitions/test-instruction",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Test configuration",permalink:"/documentation/definitions/test-configuration"},next:{title:"Test run",permalink:"/documentation/definitions/test-run"}},c=[{value:"Definition",id:"definition",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Business rules",id:"business-rules",children:[],level:2},{value:"Actions on ...",id:"actions-on-",children:[{value:"View ...",id:"view-",children:[],level:3}],level:2},{value:"Related topics",id:"related-topics",children:[],level:2}],p={toc:c};function d(t){var e=t.components,n=(0,i.Z)(t,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"test-instruction"},"Test instruction"),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("p",null,"A test instruction is a descriptive counterpart of a Test step. A test instruction is always part of a test case that has the Manual type."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Title"),(0,a.kt)("td",{parentName:"tr",align:null},"Title of the test instruction")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Description"),(0,a.kt)("td",{parentName:"tr",align:null},"Description of a test instruction")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Highlight"),(0,a.kt)("td",{parentName:"tr",align:null},"Indicates whether to visually highlight the test step in the test instruction to draw attention to it")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Input data"),(0,a.kt)("td",{parentName:"tr",align:null},"Description of the input data for a test instruction")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Expected result"),(0,a.kt)("td",{parentName:"tr",align:null},"Description of the expected result of a test instruction")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Image"),(0,a.kt)("td",{parentName:"tr",align:null},"A descriptive image (for instance, png or jpg file) that shows the expected outcome of the test instruction")))),(0,a.kt)("h2",{id:"business-rules"},"Business rules"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Title is mandatory")),(0,a.kt)("h2",{id:"actions-on-"},"Actions on ..."),(0,a.kt)("h3",{id:"view-"},"View ..."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"...")),(0,a.kt)("h2",{id:"related-topics"},"Related topics"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"test-suite"},"Test suite")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"test-run"},"Test run"))))}d.isMDXComponent=!0}}]);