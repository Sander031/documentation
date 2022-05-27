"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7369],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1578:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],p={},l="Prepare MTA for an on-premise installation",s={unversionedId:"howtos/prepare-mta-onpremise",id:"howtos/prepare-mta-onpremise",title:"Prepare MTA for an on-premise installation",description:"Purpose",source:"@site/docs/howtos/prepare-mta-onpremise.md",sourceDirName:"howtos",slug:"/howtos/prepare-mta-onpremise",permalink:"/howtos/prepare-mta-onpremise",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Prepare Mendix project",permalink:"/howtos/prepare-mendix-project"},next:{title:"Record user actions",permalink:"/howtos/record-user-actions"}},c={},u=[{value:"Purpose",id:"purpose",level:2},{value:"Import the MTA Plugin module",id:"import-the-mta-plugin-module",level:2},{value:"Create an MTA Plugin User",id:"create-an-mta-plugin-user",level:2},{value:"Enable microflow testing for page calls",id:"enable-microflow-testing-for-page-calls",level:2},{value:"Create an API key for your Mendix account",id:"create-an-api-key-for-your-mendix-account",level:2},{value:"Feedback?",id:"feedback",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"prepare-mta-for-an-on-premise-installation"},"Prepare MTA for an on-premise installation"),(0,a.kt)("h2",{id:"purpose"},"Purpose"),(0,a.kt)("p",null,"This document describes step by step which actions need to be performed whenever an MTA node is going to be implemented on another platform than the Mendix cloud.  "),(0,a.kt)("p",null,"This could be any custom cloud environment like Clound Foundry or an on-premise installation. The main difference with hosting MTA on the Mendix cloud is that the client is responsible for managing the cloud platform."),(0,a.kt)("h2",{id:"import-the-mta-plugin-module"},"Import the MTA Plugin module"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"For each Mendix App to be tested in MTA, this action needs to be performed. ")),(0,a.kt)("p",null,"Follow the steps described ",(0,a.kt)("a",{parentName:"p",href:"import-plugin"},"here")," to complete this action."),(0,a.kt)("h2",{id:"create-an-mta-plugin-user"},"Create an MTA Plugin User"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"For each individual environment and for each Mendix App to be tested in MTA, this action needs to be performed. ")),(0,a.kt)("p",null,"Open the environment that is going to be used as Test application, and login with a user role that has Create rights on Account (like an Administrator). Create a local user (not a web service user) with only the role 'MTAPluginUser'. Give the user a name, and note the Username and Password for later."),(0,a.kt)("h2",{id:"enable-microflow-testing-for-page-calls"},"Enable microflow testing for page calls"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"For each Mendix App to be tested in MTA, this action needs to be performed.  ")),(0,a.kt)("p",null,"Follow the steps described ",(0,a.kt)("a",{parentName:"p",href:"prepare-mendix-project"},"here")," to complete this action."),(0,a.kt)("h2",{id:"create-an-api-key-for-your-mendix-account"},"Create an API key for your Mendix account"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"This action needs to be performed by each Mendix developer who wishes to test their Mendix Apps in MTA.")),(0,a.kt)("p",null,"An API key needs to be created to make communication possible with MTA and the Mendix platform. Make sure to store the API key in a password manager after creation.\nFollow the steps described on the Mendix documentation site to complete this action:\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.mendix.com/developerportal/community-tools/mendix-profile/#api-key"},"https://docs.mendix.com/developerportal/community-tools/mendix-profile/#api-key")),(0,a.kt)("h2",{id:"feedback"},"Feedback?"),(0,a.kt)("p",null,"Missing anything? ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,a.kt)("p",null,"Last updated 27 may 2022"))}d.isMDXComponent=!0}}]);