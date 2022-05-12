"use strict";(self.webpackChunksketchybar_site=self.webpackChunksketchybar_site||[]).push([[233],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),f=l(r),m=i,y=f["".concat(c,".").concat(m)]||f[m]||s[m]||o;return r?n.createElement(y,a(a({ref:t},p),{},{components:r})):n.createElement(y,a({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9930:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return s}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],u={id:"querying",title:"Querying Information",sidebar_position:1},c=void 0,l={unversionedId:"config/querying",id:"config/querying",title:"Querying Information",description:"Querying",source:"@site/docs/config/Querying.md",sourceDirName:"config",slug:"/config/querying",permalink:"/config/querying",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"querying",title:"Querying Information",sidebar_position:1},sidebar:"docs",previous:{title:"Events & Scripting",permalink:"/config/events"},next:{title:"Type Nomenclature",permalink:"/config/types"}},p={},s=[{value:"Querying",id:"querying",level:2},{value:"Bar Properties",id:"bar-properties",level:3},{value:"Item Properties",id:"item-properties",level:3},{value:"Default Properties",id:"default-properties",level:3},{value:"Event Properties",id:"event-properties",level:3}],f={toc:s};function m(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"querying"},"Querying"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"SketchyBar")," can be queried for information about a number of things."),(0,o.kt)("h3",{id:"bar-properties"},"Bar Properties"),(0,o.kt)("p",null,"Information about the bar can be queried via:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sketchybar --query bar\n")),(0,o.kt)("p",null,"The output is a json structure containing relevant information about the configuration settings of the bar."),(0,o.kt)("h3",{id:"item-properties"},"Item Properties"),(0,o.kt)("p",null,"Information about an item can be queried via:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sketchybar --query <name>\n")),(0,o.kt)("p",null,"The output is a json structure containing relevant information about the configuration of the item."),(0,o.kt)("h3",{id:"default-properties"},"Default Properties"),(0,o.kt)("p",null,"Information about the current defaults."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sketchybar --query defaults\n")),(0,o.kt)("h3",{id:"event-properties"},"Event Properties"),(0,o.kt)("p",null,"Information about the events."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sketchybar --query events\n")))}m.isMDXComponent=!0}}]);