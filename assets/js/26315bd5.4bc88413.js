"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9346],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(n),d=r,h=f["".concat(c,".").concat(d)]||f[d]||p[d]||a;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3136:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const a={},i="Transfer a Test Case to another Test Configuration",s={unversionedId:"store-test-case-to-collection",id:"store-test-case-to-collection",title:"Transfer a Test Case to another Test Configuration",description:"Definition",source:"@site/additional/01-howtos/store-test-case-to-collection.md",sourceDirName:".",slug:"/store-test-case-to-collection",permalink:"/additional/howtos/store-test-case-to-collection",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Use SSO",permalink:"/additional/howtos/sso"},next:{title:"Test with anonymous user",permalink:"/additional/howtos/test-anonymous-user"}},c={},l=[{value:"Definition",id:"definition",level:2},{value:"Feedback?",id:"feedback",level:2}],u={toc:l};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"transfer-a-test-case-to-another-test-configuration"},"Transfer a Test Case to another Test Configuration"),(0,r.kt)("h2",{id:"definition"},"Definition"),(0,r.kt)("p",null,"This document describes how to move and store a single Test Case into a 'container' Test Configuration, that is used as a collection of tests, for instance a Test configuration where all the unit tests for a certain Test Application are collected."),(0,r.kt)("p",null,"First the Test Suite is moved into the collection, then the Test Case is moved into an existing Test Suite."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Copy Test Case to collection Test Configuration",src:n(7423).Z,width:"705",height:"371"})),(0,r.kt)("p",null,"More in detail:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to the Test Design (home)page and select the Test Configuration containing the draft unit test"),(0,r.kt)("li",{parentName:"ol"},"Use the ",(0,r.kt)("i",{class:"fa fa-copy"})," button on the Test Suite to copy the Test Suite"),(0,r.kt)("li",{parentName:"ol"},'Expand the "Choose another test configuration, if the test suite should not be copied to the current test configuration:" groupbox, and select the container Test Configuration as target'),(0,r.kt)("li",{parentName:"ol"},"Navigate to the container Test Configuration and open the Test Suite copy"),(0,r.kt)("li",{parentName:"ol"},"Use the ",(0,r.kt)("i",{class:"fa fa-copy"})," button on the Test Case to copy the Test Case"),(0,r.kt)("li",{parentName:"ol"},'Expand the "Choose another test suite, if the test case should not be copied to the current test suite:" groupbox, and select an existing relevant Test Suite as target'),(0,r.kt)("li",{parentName:"ol"},"Navigate to the Test Design (home)page "),(0,r.kt)("li",{parentName:"ol"},"Delete the Test Configuration from step 1 using the ",(0,r.kt)("i",{class:"fa fa-trash-alt"})," button (since the actual intention was to move it, not to copy it)")),(0,r.kt)("h2",{id:"feedback"},"Feedback?"),(0,r.kt)("p",null,"Missing anything? ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,r.kt)("p",null,"Last updated 24 may 2022"))}p.isMDXComponent=!0},7423:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/unit-copy-30c8b502d25376112ea91310ea9c6bce.png"}}]);