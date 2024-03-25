"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8426],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>f});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(i),m=n,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return i?a.createElement(f,r(r({ref:t},d),{},{components:i})):a.createElement(f,r({ref:t},d))}));function f(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,r[1]=l;for(var c=2;c<o;c++)r[c]=i[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}m.displayName="MDXCreateElement"},283:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=i(7462),n=(i(7294),i(3905));const o={},r="Testability",l={unversionedId:"testability",id:"testability",title:"Testability",description:"Make your Mendix model testable",source:"@site/additional/02-bestpractice/testability.md",sourceDirName:".",slug:"/testability",permalink:"/additional/bestpractice/testability",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Test maintenance",permalink:"/additional/bestpractice/test-maintenance"},next:{title:"Test plan",permalink:"/additional/bestpractice/testplan"}},s={},c=[{value:"Make your Mendix model testable",id:"make-your-mendix-model-testable",level:2},{value:"Build microflows as a unit",id:"build-microflows-as-a-unit",level:3},{value:"Build microflow as a process",id:"build-microflow-as-a-process",level:3},{value:"Follow Mendix best practices",id:"follow-mendix-best-practices",level:3},{value:"Base Microflow names on Entity names",id:"base-microflow-names-on-entity-names",level:3},{value:"Keep your domain model readable",id:"keep-your-domain-model-readable",level:3},{value:"Avoid if/else constructions in microflow actions",id:"avoid-ifelse-constructions-in-microflow-actions",level:3},{value:"Other tips and tricks",id:"other-tips-and-tricks",level:3},{value:"Feedback?",id:"feedback",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"testability"},"Testability"),(0,n.kt)("h2",{id:"make-your-mendix-model-testable"},"Make your Mendix model testable"),(0,n.kt)("h3",{id:"build-microflows-as-a-unit"},"Build microflows as a unit"),(0,n.kt)("p",null,"A microflow behaves as a unit, whenever it has few submicroflows, is not too complex, does not have more than 10 end events, has a dedicated function and does not rely on the database too much."),(0,n.kt)("p",null,"Additionally, a microflow is more unit testable when it has only explicit in- and output:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Implicit and explicit",src:i(4326).Z,width:"819",height:"394"})),(0,n.kt)("h3",{id:"build-microflow-as-a-process"},"Build microflow as a process"),(0,n.kt)("p",null,"A microflow behaves as a process, whenever it calls submicroflows to perform actions, uses data from and saves data to the database and calls external modules or systems that it depends on."),(0,n.kt)("p",null,"Build microflows with process testing in mind: splitup governing microflows into submicroflows, provide an object as output parameter if used in a show page action and keep database retrieves and commits separated from business logic. "),(0,n.kt)("h3",{id:"follow-mendix-best-practices"},"Follow Mendix best practices"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.mendix.com/refguide/dev-best-practices/"},"https://docs.mendix.com/refguide/dev-best-practices/")),(0,n.kt)("h3",{id:"base-microflow-names-on-entity-names"},"Base Microflow names on Entity names"),(0,n.kt)("p",null,"For example"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ACT_Car_Save"),(0,n.kt)("li",{parentName:"ul"},"ACT_Insurance_Create"),(0,n.kt)("li",{parentName:"ul"},"SUB_Customer_Check_Address"),(0,n.kt)("li",{parentName:"ul"},"CAL_Invoice_Price")),(0,n.kt)("h3",{id:"keep-your-domain-model-readable"},"Keep your domain model readable"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Avoid association lines crossing as much as possible."),(0,n.kt)("li",{parentName:"ul"},"Move parent entities to the top, child entities to the bottom."),(0,n.kt)("li",{parentName:"ul"},"Keep non-persistable entities separate."),(0,n.kt)("li",{parentName:"ul"},"Move entities into their own module if the amount of attributes and associations keeps growing.")),(0,n.kt)("h3",{id:"avoid-ifelse-constructions-in-microflow-actions"},"Avoid if/else constructions in microflow actions"),(0,n.kt)("p",null,"Instead of doing this:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"If and else",src:i(2838).Z,width:"770",height:"206"})),(0,n.kt)("p",null,"Do this:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"If and else",src:i(9037).Z,width:"591",height:"234"})),(0,n.kt)("h3",{id:"other-tips-and-tricks"},"Other tips and tricks"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Avoid microflow logic duplication."),(0,n.kt)("li",{parentName:"ul"},"Avoid start- and stop transaction actions."),(0,n.kt)("li",{parentName:"ul"},"Use annotations for complex microflows or when differing from Mendix practices."),(0,n.kt)("li",{parentName:"ul"},"Have coworkers peer review your code."),(0,n.kt)("li",{parentName:"ul"},"Avoid Java actions in microflows. "),(0,n.kt)("li",{parentName:"ul"},"Plan refactoring time. "),(0,n.kt)("li",{parentName:"ul"},"Consider using test driven development to reduce refactoring time.")),(0,n.kt)("h2",{id:"feedback"},"Feedback?"),(0,n.kt)("p",null,"Missing anything? ",(0,n.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,n.kt)("p",null,"Last updated 1 March 2024"))}u.isMDXComponent=!0},9037:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/bp_if_else_right-63209aaf3f9a1b061e93b9bef6eb542f.png"},2838:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/bp_if_else_wrong-8e10fc81f42dc9d345f9ed0c3410cc73.png"},4326:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/bp_ut_in_ex-6670259cab387de0bc18ce6b01005a8d.png"}}]);