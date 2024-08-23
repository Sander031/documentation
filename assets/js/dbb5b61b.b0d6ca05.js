"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1374],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>g});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=n.createContext({}),u=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(a),v=l,g=p["".concat(c,".").concat(v)]||p[v]||d[v]||r;return a?n.createElement(g,o(o({ref:t},s),{},{components:a})):n.createElement(g,o({ref:t},s))}));function g(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=v;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}v.displayName="MDXCreateElement"},9469:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var n=a(7462),l=(a(7294),a(3905));const r={sidebar_position:11},o="Coverage Calculation",i={unversionedId:"coverage-calculation",id:"coverage-calculation",title:"Coverage Calculation",description:"Definition",source:"@site/docs/coverage-calculation.md",sourceDirName:".",slug:"/coverage-calculation",permalink:"/coverage-calculation",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Construction Error",permalink:"/construction-error"},next:{title:"Coverage Exception",permalink:"/coverage-exception"}},c={},u=[{value:"Definition",id:"definition",level:2},{value:"Properties",id:"properties",level:2},{value:"Business rules",id:"business-rules",level:2},{value:"Actions on a Coverage Calculation",id:"actions-on-a-coverage-calculation",level:2},{value:"View Coverage Calculations on an Application",id:"view-coverage-calculations-on-an-application",level:3},{value:"View Coverage Calculations on an Application Revision",id:"view-coverage-calculations-on-an-application-revision",level:3},{value:"View Coverage Calculations on a Test Configuration",id:"view-coverage-calculations-on-a-test-configuration",level:3},{value:"View Coverage Calculations on a Test Run",id:"view-coverage-calculations-on-a-test-run",level:3},{value:"Related topics",id:"related-topics",level:2},{value:"Feedback?",id:"feedback",level:2}],s={toc:u},p="wrapper";function d(e){let{components:t,...a}=e;return(0,l.kt)(p,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"coverage-calculation"},"Coverage Calculation"),(0,l.kt)("h2",{id:"definition"},"Definition"),(0,l.kt)("p",null,"A overage Calculation is a representation of the code coverage of one moment in time. It represents the coverage percentage of microflows that were executed, out of all included microflows for the associated ",(0,l.kt)("a",{parentName:"p",href:"coverage-goal"},"Coverage Goal"),".  This Coverage Goal is ",(0,l.kt)("strong",{parentName:"p"},"calculated"),' and stored as a Coverage Calculation, whenever a test is executed, "Coverage" was selected when starting the Test Run, and Coverage Goals exist. '),(0,l.kt)("p",null,"A overage Calculation can be associated to a ",(0,l.kt)("a",{parentName:"p",href:"test-configuration"},"Test Configuration"),", or to an ",(0,l.kt)("a",{parentName:"p",href:"application"},"Application"),"."),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CalculationDate"),(0,l.kt)("td",{parentName:"tr",align:null},"The date and time when the ",(0,l.kt)("a",{parentName:"td",href:"coverage-goal"},"Coverage Goal")," was calculated.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"App revision"),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("a",{parentName:"td",href:"application-revision"},"Application Revision")," that was used to evaluate and calculate the Coverage Goal.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Total #"),(0,l.kt)("td",{parentName:"tr",align:null},"The total number of microflows in the App revision.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Excluded #"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of microflows that was excluded after evaluating the Coverage Goal.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Included #"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of microflows that was included after evaluating the Coverage Goal, ",(0,l.kt)("br",null)," and used to calculate the Coverage Goal.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Executed excl. #"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of microflows that were executed but not included in the Coverage Goal.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Executed incl. #"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of microflows that were executed and included in the Coverage Goal.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Not executed #"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of microflows that were not executed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Coverage %"),(0,l.kt)("td",{parentName:"tr",align:null},"The coverage percentage (Executed incl devided by Included).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Trend %"),(0,l.kt)("td",{parentName:"tr",align:null},"The absolute difference in coverage percentage of this Calculation, ",(0,l.kt)("br",null)," compared to the previous Calculation for the same Coverage Goal.")))),(0,l.kt)("h2",{id:"business-rules"},"Business rules"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A Coverage Calculation will only be created when executing a full ",(0,l.kt)("a",{parentName:"li",href:"test-configuration"},"Test Configuration"),' and with "Coverage" enabled.'),(0,l.kt)("li",{parentName:"ul"},"A Coverage Calculation will only be created for ",(0,l.kt)("a",{parentName:"li",href:"test-run"},"Test Runs"),' where the result is "Passed".'),(0,l.kt)("li",{parentName:"ul"},"A Coverage Calculation on an Application will be created for Test Runs in all Test Configurations that are included in the associated ",(0,l.kt)("a",{parentName:"li",href:"coverage-goal"},"Coverage Goal"),", and only for Test Configurations on the latest ",(0,l.kt)("a",{parentName:"li",href:"application-revision"},"Application Revision")," found in these Test Configurations."),(0,l.kt)("li",{parentName:"ul"},"A Coverage Calculation for Test Runs that were deleted, will only show Coverage % and Trend %. Other properties are no longer available then."),(0,l.kt)("li",{parentName:"ul"},"For any ",(0,l.kt)("a",{parentName:"li",href:"application"},"Application"),", only details for the 2 most recent Coverage Calculations will be kept in the cleanup process."),(0,l.kt)("li",{parentName:"ul"},"Additionally, for any Application, the latest Coverage Calculation will also be kept, if the calculation was performed for a subset of included Test Configurations."),(0,l.kt)("li",{parentName:"ul"},"For any Test Configuration, details of the Coverage Calculations will be kept if the associated Test Runs are not yet deleted.")),(0,l.kt)("h2",{id:"actions-on-a-coverage-calculation"},"Actions on a Coverage Calculation"),(0,l.kt)("h3",{id:"view-coverage-calculations-on-an-application"},"View Coverage Calculations on an Application"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"coverage-goal#view-coverage-goals-on-an-application"},"View Coverage Goals on an Application")),(0,l.kt)("li",{parentName:"ul"},'Click "',(0,l.kt)("i",{class:"fal fa-eye"}),' Calculated".')),(0,l.kt)("h3",{id:"view-coverage-calculations-on-an-application-revision"},"View Coverage Calculations on an Application Revision"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"application-revision#view-downloaded-application-revisions-for-an-application"},"View downloaded Application revisions for an Application")),(0,l.kt)("li",{parentName:"ul"},"Select the Application Revision to view the Calculated Goals for."),(0,l.kt)("li",{parentName:"ul"},"Click on ",(0,l.kt)("i",{class:"fal fa-umbrella"}),".")),(0,l.kt)("h3",{id:"view-coverage-calculations-on-a-test-configuration"},"View Coverage Calculations on a Test Configuration"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"coverage-goal#view-coverage-goals-on-a-test-configuration"},"View Coverage Goals on a Test Configuration")),(0,l.kt)("li",{parentName:"ul"},'Click "',(0,l.kt)("i",{class:"fal fa-eye"}),' Calculated".')),(0,l.kt)("h3",{id:"view-coverage-calculations-on-a-test-run"},"View Coverage Calculations on a Test Run"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"test-run#view-test-runs"},"View Test Runs")),(0,l.kt)("li",{parentName:"ul"},"Select the Test Run to view the Calculated Goals for."),(0,l.kt)("li",{parentName:"ul"},"Click on ",(0,l.kt)("i",{class:"fal fa-umbrella"}),".")),(0,l.kt)("h2",{id:"related-topics"},"Related topics"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"coverage-goal"},"Coverage Goal")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"application"},"Application")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"test-configuration"},"Test Configuration"))),(0,l.kt)("h2",{id:"feedback"},"Feedback?"),(0,l.kt)("p",null,"Missing anything? ",(0,l.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,l.kt)("p",null,"Last updated 24 June 2024"))}d.isMDXComponent=!0}}]);