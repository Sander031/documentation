"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5533],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8051:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},i="Connect Menditect Extension to MTA",l={unversionedId:"connect-menditect-extension-to-mta",id:"connect-menditect-extension-to-mta",title:"Connect Menditect Extension to MTA",description:"Howto",source:"@site/additional/01-howtos/connect-menditect-extension-to-mta.md",sourceDirName:".",slug:"/connect-menditect-extension-to-mta",permalink:"/additional/howtos/connect-menditect-extension-to-mta",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configure MTA to use SAML SSO",permalink:"/additional/howtos/configure-mta-saml"},next:{title:"Deal with a failed Test Run",permalink:"/additional/howtos/deal-with-failed-testrun"}},s={},c=[{value:"Howto",id:"howto",level:2},{value:"Prepare MTA",id:"prepare-mta",level:2},{value:"Configure Extension",id:"configure-extension",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Feedback?",id:"feedback",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"connect-menditect-extension-to-mta"},"Connect Menditect Extension to MTA"),(0,a.kt)("h2",{id:"howto"},"Howto"),(0,a.kt)("p",null,"This document describes how to connect the ",(0,a.kt)("a",{parentName:"p",href:"use-microflow-call-hierarchy-extension"},"Menditect Call Hierarchy extension")," to MTA, in order to view and generate test cases from Mendix Studio Pro."),(0,a.kt)("h2",{id:"prepare-mta"},"Prepare MTA"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Make sure to create an Account in MTA having at least ",(0,a.kt)("inlineCode",{parentName:"li"},"Tester")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"ApiUser")," ",(0,a.kt)("a",{parentName:"li",href:"manage-accounts#mta-user-roles"},"User Roles"),". "),(0,a.kt)("li",{parentName:"ul"},"Login as that Account."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../test-configuration#create-a-new-test-configuration"},"Create a Test configuration")," that is linked to the App that you want to test."),(0,a.kt)("li",{parentName:"ul"},"Create (or use an existing) ",(0,a.kt)("a",{parentName:"li",href:"../../application-instance#create-an-application-instance"},"application instance")," to be used for running locally from Studio Pro, and ",(0,a.kt)("a",{parentName:"li",href:"../../test-setting#set-a-test-setting-as-preference"},"set it as the preferred instance"),".")),(0,a.kt)("p",null,"If you want to run tests from Studio Pro, make sure to ",(0,a.kt)("a",{parentName:"p",href:"import-plugin#configuring-mta-plugin"},"configure the plugin")," to be connected to MTA."),(0,a.kt)("h2",{id:"configure-extension"},"Configure Extension"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open the App that you want to test in Studio Pro."),(0,a.kt)("li",{parentName:"ul"},"Open the Microflow Call Hierarchy tab. "),(0,a.kt)("li",{parentName:"ul"},"Click on ",(0,a.kt)("i",{class:"fal fa-cog"}),"."),(0,a.kt)("li",{parentName:"ul"},"Enter the MTA Endpoint. Should start with https.",(0,a.kt)("br",null),"You can copy the URL to MTA from your browser's address bar.",(0,a.kt)("br",null),"For example: ",(0,a.kt)("inlineCode",{parentName:"li"},"https://mta-menditect-9fo2p.mendixcloud.com")),(0,a.kt)("li",{parentName:"ul"},"Enter the Username and Password for the Account that you created in MTA to be used by the Extension."),(0,a.kt)("li",{parentName:"ul"},"Select the ",(0,a.kt)("a",{parentName:"li",href:"../../test-configuration"},"Test configuration")," that should be used to store and view ",(0,a.kt)("a",{parentName:"li",href:"../../test-case"},"Test Cases"),"."),(0,a.kt)("li",{parentName:"ul"},"Save the settings. You can now ",(0,a.kt)("a",{parentName:"li",href:"generate-test#from-mendix-studio-pro"},"Generate tests from Studio Pro!"))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The credentials that are used to login to MTA are stored in the Windows Account settings. This is done to prevent having to manually login everytime the extension is used."),(0,a.kt)("p",{parentName:"admonition"},"Settings are stored here:",(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"C:\\Users\\{your_user_name}\\AppData\\Local\\Menditect\\Microflow Call Hierarchy"))),(0,a.kt)("h2",{id:"limitations"},"Limitations"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"use-microflow-call-hierarchy-extension#mta-integration-limitations"},"Check this list for current limitations with the MTA integration")),(0,a.kt)("h2",{id:"feedback"},"Feedback?"),(0,a.kt)("p",null,"Missing anything? ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,a.kt)("p",null,"Last updated 9 April 2024"))}m.isMDXComponent=!0}}]);