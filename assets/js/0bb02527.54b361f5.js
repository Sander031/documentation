"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5522],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),h=a,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},6393:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={},o="Record actions",l={unversionedId:"record-actions",id:"record-actions",title:"Record actions",description:"Definition",source:"@site/additional/02-bestpractice/record-actions.md",sourceDirName:".",slug:"/record-actions",permalink:"/additional/bestpractice/record-actions",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Process testing",permalink:"/additional/bestpractice/processtest"},next:{title:"Test maintenance",permalink:"/additional/bestpractice/test-maintenance"}},s={},c=[{value:"Definition",id:"definition",level:2},{value:"Guidelines",id:"guidelines",level:2},{value:"Preparations",id:"preparations",level:2},{value:"Microflow page calls",id:"microflow-page-calls",level:3},{value:"Recurring patterns",id:"recurring-patterns",level:3},{value:"Object handling in microflows",id:"object-handling-in-microflows",level:3},{value:"Limitations",id:"limitations",level:2},{value:"Rollback",id:"rollback",level:3},{value:"Delete",id:"delete",level:3},{value:"Important notes",id:"important-notes",level:2},{value:"Feedback?",id:"feedback",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"record-actions"},"Record actions"),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("p",null,"For many user actions performed in the ",(0,a.kt)("a",{parentName:"p",href:"../../application"},"Application"),", it is possible to record these actions in MTA, and have MTA convert them to either Object ",(0,a.kt)("a",{parentName:"p",href:"../../teststep"},"Teststeps")," or Microflow Teststeps, using the Recorder function. "),(0,a.kt)("p",null,"There are multiple advantages to using the Recording over creating teststeps by hand:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Speed;"),(0,a.kt)("li",{parentName:"ul"},"Certainty that the created teststeps will match the user flow, and that the user will have access;"),(0,a.kt)("li",{parentName:"ul"},"Gaining insights in the performance and code quality of your Mendix model.")),(0,a.kt)("p",null,"Despite these advantages, there can be scenario's that creating teststeps by hand is preferred:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When the person creating the recorder is also the one writing the code being tested;"),(0,a.kt)("li",{parentName:"ul"},"When creating a unit test. ")),(0,a.kt)("p",null,"This document describes what aspects to consider when creating such a recording.\nOther documents about this topic are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../generated-test"},"Recorder")," in the reference guide."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../howtos/record-user-actions"},"Complete recorded actions")," in the How to section.")),(0,a.kt)("h2",{id:"guidelines"},"Guidelines"),(0,a.kt)("p",null,"Before starting the recording, it is useful to follow these guidelines first."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Create a draft first using a simple text tool like notepad. Keep the transaction that you want to record as small as possible, that way there is a higher chance that the Recorder will get it right in one try. Use a numbered list to describe each step the user takes. Take double the amount of steps as the "Max. number of recorded actions" for the recording.'),(0,a.kt)("li",{parentName:"ul"},"Prepare your project for recording, following the the steps below."),(0,a.kt)("li",{parentName:"ul"},"Select an appropriate ",(0,a.kt)("a",{parentName:"li",href:"../../test-case"},"Test Case"),". You can choose to create multiple recordings and merge them in the same Test Case. This is described further in the How to section."),(0,a.kt)("li",{parentName:"ul"},"Make sure the Execution User for the selected Test Case exists, is active and not blocked."),(0,a.kt)("li",{parentName:"ul"},'Navigate to the Recorder page and set the "Max. number of recorded actions".'),(0,a.kt)("li",{parentName:"ul"},"Start the recorder."),(0,a.kt)("li",{parentName:"ul"},"Login to the Test Application using the Execution User for the selected Test Case and follow the steps described in the draft. You can also start the recorder when already logged in, but if microflows are executed to determine the context of the (home)page, this may result in errors."),(0,a.kt)("li",{parentName:"ul"},"When making a mistake during the recording, it is sometimes best to restart the process, otherwise the result will contain unwanted or duplicate steps."),(0,a.kt)("li",{parentName:"ul"},"Stop the recording."),(0,a.kt)("li",{parentName:"ul"},"Execute the Test Configuration (provided there are no errors) to check the result."),(0,a.kt)("li",{parentName:"ul"},"Follow the steps described in the How to section to make the teststeps complete.")),(0,a.kt)("h2",{id:"preparations"},"Preparations"),(0,a.kt)("h3",{id:"microflow-page-calls"},"Microflow page calls"),(0,a.kt)("p",null,'To prepare microflows with "Show page" activities, read ',(0,a.kt)("a",{parentName:"p",href:"../howtos/prepare-mendix-project"},"this section"),"."),(0,a.kt)("h3",{id:"recurring-patterns"},"Recurring patterns"),(0,a.kt)("p",null,"Sometimes the Recording result contains numerous changes of the same object, or calls to the same microflow. This can be the result of an on change event on a page element or a microflow in a list view, causing the same microflow to be called multiple times. To avoid this kind of pattern repetition, it is best to work with small amounts of test data. "),(0,a.kt)("h3",{id:"object-handling-in-microflows"},"Object handling in microflows"),(0,a.kt)("p",null,"If an object is created or changed by a microflow the recorder will create a Microflow Teststep calling that creation microflow. If the object is subsequently committed by a microflow, the recorder will create a second Microflow Teststep calling that save microflow. Also, the recorder will create a Change Object Teststep between the two Microflow Teststeps, where the values set in the page by the user are set."),(0,a.kt)("p",null,"Therefore, creating and saving objects using microflows is preferred over using page actions."),(0,a.kt)("h2",{id:"limitations"},"Limitations"),(0,a.kt)("h3",{id:"rollback"},"Rollback"),(0,a.kt)("p",null,'If an object is created and subsequently rolled back by the page and not by a microflow (for instance using a "Cancel changes" button in Mendix) it is not possible for the recorder to determine this rollback has taken place. '),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If testing the rollback action is the goal of the Test Case, it is advisable to include a Rollback action in a microflow and not in the page. "),(0,a.kt)("li",{parentName:"ul"},"Otherwise for obvious reasons, it is advisable to only record actions that are part of the test. ")),(0,a.kt)("h3",{id:"delete"},"Delete"),(0,a.kt)("p",null,"Deletes are not yet part of the recorder. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If an object is deleted either in a microflow or in a page, manually include a Delete Object Teststep, and a subsequent Persist Object Teststep to finalize the delete.")),(0,a.kt)("h2",{id:"important-notes"},"Important notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Only actions performed by the user that is set as the execution user will be recorded."),(0,a.kt)("li",{parentName:"ul"},"No other users should login under the same username on the test environment while recording."),(0,a.kt)("li",{parentName:"ul"},"Microflows used as datasource will not result in a Microflow Teststep, but in a Retrieve Object Teststep, and only if the object is used.")),(0,a.kt)("h2",{id:"feedback"},"Feedback?"),(0,a.kt)("p",null,"Missing anything? ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,a.kt)("p",null,"Last updated 2 june 2022"))}d.isMDXComponent=!0}}]);