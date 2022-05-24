"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3963],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),l=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(a,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8117:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),s=["components"],c={},a="Access Mendix model",l={unversionedId:"howtos/access-mendix-model",id:"howtos/access-mendix-model",title:"Access Mendix model",description:"To access Mendix projects, the user who logs in to MTA must be linked to a Mendix user.",source:"@site/docs/howtos/access-mendix-model.md",sourceDirName:"howtos",slug:"/howtos/access-mendix-model",permalink:"/howtos/access-mendix-model",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Access environment",permalink:"/howtos/access-environment"},next:{title:"Change revision before deploying",permalink:"/howtos/change-revision-before-deploying"}},u={},p=[{value:"Feedback?",id:"feedback",level:2}],d={toc:p};function f(e){var t=e.components,c=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"access-mendix-model"},"Access Mendix model"),(0,i.kt)("p",null,"To access Mendix projects, the user who logs in to MTA must be linked to a Mendix user."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"First, login to MTA using the credentials provided by Menditect."),(0,i.kt)("li",{parentName:"ul"},"Click the user icon on the top right ",(0,i.kt)("svg",{role:"img",viewBox:"0 0 512 512",width:"2%",height:"2%",xmlns:"http://www.w3.org/2000/svg"},(0,i.kt)("path",{fill:"currentColor",d:"M256 112c-48.6 0-88 39.4-88 88C168 248.6 207.4 288 256 288s88-39.4 88-88C344 151.4 304.6 112 256 112zM256 240c-22.06 0-40-17.95-40-40C216 177.9 233.9 160 256 160s40 17.94 40 40C296 222.1 278.1 240 256 240zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-46.73 0-89.76-15.68-124.5-41.79C148.8 389 182.4 368 220.2 368h71.69c37.75 0 71.31 21.01 88.68 54.21C345.8 448.3 302.7 464 256 464zM416.2 388.5C389.2 346.3 343.2 320 291.8 320H220.2c-51.36 0-97.35 26.25-124.4 68.48C65.96 352.5 48 306.3 48 256c0-114.7 93.31-208 208-208s208 93.31 208 208C464 306.3 446 352.5 416.2 388.5z"})))),(0,i.kt)("p",null,"The following popup will appear:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Mendix credentials",src:n(7091).Z,width:"847",height:"673"})),(0,i.kt)("p",null,"Now fill in the fields under 'Mendix credentials'"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Mendix account username;"),(0,i.kt)("li",{parentName:"ul"},"An API key created for this Mendix profile. Go to ",(0,i.kt)("a",{parentName:"li",href:"https://sprintr.home.mendix.com/link/profilesettings/apikeys"},"API keys")," (links to Mendix site) to create an API key for your Mendix profile."),(0,i.kt)("li",{parentName:"ul"},'Choose "Save".')),(0,i.kt)("p",null,"To test if this step was successful, try to add a new Test Application. "),(0,i.kt)("p",null,"The Mendix projects associated with the given Mendix user should be visible."),(0,i.kt)("h2",{id:"feedback"},"Feedback?"),(0,i.kt)("p",null,"Missing anything? ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,i.kt)("p",null,"Last updated 21 april 2022"))}f.isMDXComponent=!0},7091:function(e,t,n){t.Z=n.p+"assets/images/mx-credentials-new-96e2085f95c1a000466e7bac9229f516.png"}}]);