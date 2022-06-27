"use strict";(self.webpackChunksketchybar_site=self.webpackChunksketchybar_site||[]).push([[571],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,u=d["".concat(l,".").concat(h)]||d[h]||m[h]||i;return n?a.createElement(u,s(s({ref:t},c),{},{components:n})):a.createElement(u,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1230:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),s=["components"],o={id:"events",title:"Events & Scripting",sidebar_position:1},l=void 0,p={unversionedId:"config/events",id:"config/events",title:"Events & Scripting",description:"Events and Scripting",source:"@site/docs/config/Events.md",sourceDirName:"config",slug:"/config/events",permalink:"/SketchyBar/config/events",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"events",title:"Events & Scripting",sidebar_position:1},sidebar:"docs",previous:{title:"Popup Menus",permalink:"/SketchyBar/config/popups"},next:{title:"Querying Information",permalink:"/SketchyBar/config/querying"}},c={},m=[{value:"Events and Scripting",id:"events-and-scripting",level:2},{value:"Creating custom events",id:"creating-custom-events",level:3},{value:"Triggering custom events",id:"triggering-custom-events",level:3},{value:"Forcing all shell scripts to run and the bar to refresh",id:"forcing-all-shell-scripts-to-run-and-the-bar-to-refresh",level:3}],d={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"events-and-scripting"},"Events and Scripting"),(0,i.kt)("p",null,"All items can ",(0,i.kt)("em",{parentName:"p"},"subscribe")," to arbitrary ",(0,i.kt)("em",{parentName:"p"},"events"),"; when the ",(0,i.kt)("em",{parentName:"p"},"event")," happens,\nall items subscribed to the ",(0,i.kt)("em",{parentName:"p"},"event")," will execute their ",(0,i.kt)("em",{parentName:"p"},"script"),".\nThis can be used to create more reactive and performant items which react to\nevents rather than polling for a change."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sketchybar --subscribe <name> <event> ... <event>\n")),(0,i.kt)("p",null,"where the events are:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"<event",">"),(0,i.kt)("th",{parentName:"tr",align:"center"},"description"),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"th"},"$INFO")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"front_app_switched")),(0,i.kt)("td",{parentName:"tr",align:"center"},"When the front application changes (not triggered if a different window of the same app is focused)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"front application name")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"space_change")),(0,i.kt)("td",{parentName:"tr",align:"center"},"When the active mission control space changes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"JSON for active spaces on all displays")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"display_change")),(0,i.kt)("td",{parentName:"tr",align:"center"},"When the active display is changed"),(0,i.kt)("td",{parentName:"tr",align:"center"},"new active display id")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"system_will_sleep")),(0,i.kt)("td",{parentName:"tr",align:"center"},"When the system prepares to sleep"),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"system_woke")),(0,i.kt)("td",{parentName:"tr",align:"center"},"When the system has awaken from sleep"),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"mouse.entered")),(0,i.kt)("td",{parentName:"tr",align:"center"},"When the mouse enters over an item"),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"mouse.exited")),(0,i.kt)("td",{parentName:"tr",align:"center"},"When the mouse leaves an item"),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"mouse.entered.global")),(0,i.kt)("td",{parentName:"tr",align:"center"},"When the mouse enters over ",(0,i.kt)("em",{parentName:"td"},"any")," part of the bar"),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"mouse.exited.global")),(0,i.kt)("td",{parentName:"tr",align:"center"},"When the mouse leaves ",(0,i.kt)("em",{parentName:"td"},"all")," parts of the bar"),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"mouse.clicked")),(0,i.kt)("td",{parentName:"tr",align:"center"},"When an item is clicked"),(0,i.kt)("td",{parentName:"tr",align:"center"})))),(0,i.kt)("p",null,"Some events send additional information in the ",(0,i.kt)("inlineCode",{parentName:"p"},"$INFO")," variable\nWhen an item is subscribed to these events the ",(0,i.kt)("em",{parentName:"p"},"script")," is run and it gets passed the ",(0,i.kt)("inlineCode",{parentName:"p"},"$SENDER")," variable, which holds exactly the above names to distinguish between the different events.\nIt is thus possible to have a script that reacts to each event differently e.g. via a switch for the ",(0,i.kt)("inlineCode",{parentName:"p"},"$SENDER")," variable in the ",(0,i.kt)("em",{parentName:"p"},"script"),"."),(0,i.kt)("p",null,"Alternatively a fixed ",(0,i.kt)("em",{parentName:"p"},"update_freq")," can be ",(0,i.kt)("em",{parentName:"p"},"--set"),", such that the event is routinely run to poll for change, the ",(0,i.kt)("inlineCode",{parentName:"p"},"$SENDER")," variable will in this case hold the value ",(0,i.kt)("inlineCode",{parentName:"p"},"routine"),"."),(0,i.kt)("p",null,"When an item invokes a script, the script has access to some environment variables, such as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$NAME\n$SENDER\n")),(0,i.kt)("p",null,"Where ",(0,i.kt)("inlineCode",{parentName:"p"},"$NAME")," is the name of the item that has invoked the script and ",(0,i.kt)("inlineCode",{parentName:"p"},"$SENDER")," is the reason why the script is executed."),(0,i.kt)("p",null,"If an item is ",(0,i.kt)("em",{parentName:"p"},"clicked")," the script has access to the additional variables:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$BUTTON\n$MODIFIER\n")),(0,i.kt)("p",null,"where the ",(0,i.kt)("inlineCode",{parentName:"p"},"$BUTTON")," can be ",(0,i.kt)("em",{parentName:"p"},"left"),", ",(0,i.kt)("em",{parentName:"p"},"right")," or ",(0,i.kt)("em",{parentName:"p"},"other")," and specifies the mouse button that was used to click the item, while the ",(0,i.kt)("inlineCode",{parentName:"p"},"$MODIFIER")," is either ",(0,i.kt)("em",{parentName:"p"},"shift"),", ",(0,i.kt)("em",{parentName:"p"},"ctrl"),", ",(0,i.kt)("em",{parentName:"p"},"alt")," or ",(0,i.kt)("em",{parentName:"p"},"cmd")," and\nspecifies the modifier key held down while clicking the item."),(0,i.kt)("p",null,"All scripts are forced to terminate after 60 seconds and do not run while the system is sleeping. "),(0,i.kt)("h3",{id:"creating-custom-events"},"Creating custom events"),(0,i.kt)("p",null,"This allows to define events which are triggered by arbitrary applications or manually (see Trigger custom events).\nItems can also subscribe to these events for their script execution."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sketchybar --add event <name> [optional: <NSDistributedNotificationName>]\n")),(0,i.kt)("p",null,"Optional: You can subscribe to the notifications sent to the NSDistributedNotificationCenter e.g.\nthe notification Spotify sends on track change:\n",(0,i.kt)("inlineCode",{parentName:"p"},"com.spotify.client.PlaybackStateChanged")," (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FelixKratz/SketchyBar/discussions/12#discussioncomment-1455842"},"example"),"), or the\nnotification sent by the system when the screen is unlocked:\n",(0,i.kt)("inlineCode",{parentName:"p"},"com.apple.screenIsUnlocked")," (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FelixKratz/SketchyBar/discussions/12?sort=new#discussioncomment-2979651"},"example"),")\nto create more responsive items.\nCustom events that subscribe to NSDistributedNotificationCenter notifications\nwill receive additional notification information in the ",(0,i.kt)("inlineCode",{parentName:"p"},"$INFO")," variable if available.\nFor more NSDistributedNotifications see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FelixKratz/SketchyBar/discussions/151"},"this discussion"),"."),(0,i.kt)("h3",{id:"triggering-custom-events"},"Triggering custom events"),(0,i.kt)("p",null,"This triggers a custom event that has been added before"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sketchybar --trigger <event> [Optional: <envvar>=<value> ... <envvar>=<value>]\n")),(0,i.kt)("p",null,"Optionally you can add environment variables to the trigger command witch are passed to the script, e.g.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sketchybar --trigger demo VAR=Test\n")),(0,i.kt)("p",null,"will trigger the demo event and ",(0,i.kt)("inlineCode",{parentName:"p"},"$VAR")," will be available as an environment variable in the scripts that this event invokes."),(0,i.kt)("h3",{id:"forcing-all-shell-scripts-to-run-and-the-bar-to-refresh"},"Forcing all shell scripts to run and the bar to refresh"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sketchybar --update\n")))}h.isMDXComponent=!0}}]);