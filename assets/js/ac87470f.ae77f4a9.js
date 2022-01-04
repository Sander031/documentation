"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[192],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7761:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],l={},u="Data Variation",s={unversionedId:"definitions/datavariation",id:"definitions/datavariation",title:"Data Variation",description:"Definition",source:"@site/docs/definitions/datavariation.md",sourceDirName:"definitions",slug:"/definitions/datavariation",permalink:"/documentation/definitions/datavariation",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Data Variation Item",permalink:"/documentation/definitions/datavariation-item"},next:{title:"Microflow Parameter Value",permalink:"/documentation/definitions/microflow-parameter-value"}},c=[{value:"Definition",id:"definition",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Business rules",id:"business-rules",children:[],level:2},{value:"Actions on ...",id:"actions-on-",children:[{value:"View ...",id:"view-",children:[],level:3}],level:2},{value:"Related topics",id:"related-topics",children:[],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"data-variation"},"Data Variation"),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("p",null,"Data Variation is used to execute the same ",(0,i.kt)("a",{parentName:"p",href:"test-suite"},"Test Suite")," multiple times upon ",(0,i.kt)("a",{parentName:"p",href:"test-configuration"},"Test Configuration")," execution, but each time with different values for variant items, such as ",(0,i.kt)("a",{parentName:"p",href:"attribute-value"},"Attribute Values")," or input and output parameters. These variant items need to be explicitly included in the data variation to be able to vary them per ",(0,i.kt)("a",{parentName:"p",href:"test-run"},"Test Run"),". For each data variation of a ",(0,i.kt)("a",{parentName:"p",href:"test-suite"},"Test Suite"),", a ",(0,i.kt)("a",{parentName:"p",href:"test-run"},"Test Run")," will be created."),(0,i.kt)("p",null,"Data Variation consists of Data Variation Items or variants."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Number"),(0,i.kt)("td",{parentName:"tr",align:null},"The rank of the Data Variation in the execution order of the Test Suite.")))),(0,i.kt)("h2",{id:"business-rules"},"Business rules"),(0,i.kt)("p",null,"None.\nNote that it is possible to have a data variation that does not consist of data variation items. This means that the Test Suite will simply be ran multiple times but with the exact same data."),(0,i.kt)("h2",{id:"actions-on-"},"Actions on ..."),(0,i.kt)("h3",{id:"view-"},"View ..."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"...")),(0,i.kt)("h2",{id:"related-topics"},"Related topics"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"test-suite"},"Test Suite")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"test-run"},"Test Run"))))}d.isMDXComponent=!0}}]);