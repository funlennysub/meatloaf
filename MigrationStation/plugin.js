(function(l,r,k,i,s,a){"use strict";function c(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var d=c(i),p=c(s);async function m(){let e=p.default.installed.ghost,o=Object.keys(e).map(n=>[n,e[n]]),t={plugins:[]};for(const n of o)t.plugins.push({url:n[0],nest:await d.default.get(n[0]+"_CUMCORD_STORE")});return t}function f(e,o){let t=document.createElement("a");t.href=`data:,${encodeURIComponent(e)}`,t.setAttribute("download",o),t.click(),t.remove()}const u=r.findByProps("Sizes","Colors","Looks","DropdownSizes");function g(e){return a.React.createElement(a.React.Fragment,null,a.React.createElement(u,{color:u.Colors.BRAND,size:u.Sizes.MEDIUM,onClick:async o=>{f(JSON.stringify(await m()),"backup.json")}},"Test backup :)"))}var b=()=>({onUnload(){},settings:l.createElement(g)});return b})(cumcord.modules.common.React,cumcord.modules.webpack,cumcord.pluginData,cumcord.modules.internal.idbKeyval,cumcord.plugins,cumcord.modules.common);