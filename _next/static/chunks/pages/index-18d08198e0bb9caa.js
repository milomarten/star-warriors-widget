(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,i,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(4369)}])},4369:function(e,i,a){"use strict";a.r(i),a.d(i,{DatePicker:function(){return d},Faction:function(){return y},Footer:function(){return N},Results:function(){return j},default:function(){return o}});var t=a(5893),r=a(7294),s=a(9008),n=a.n(s);function o(){let[e,i]=(0,r.useState)([0,0]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n(),{children:[(0,t.jsx)("title",{children:"Star Warriors Cosmic Color Lookup"}),(0,t.jsx)("link",{rel:"icon",href:"favicon.ico"}),(0,t.jsx)("link",{rel:"manifest",href:"manifest.json"}),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,t.jsx)("meta",{name:"theme-color",content:"#1D1A65"}),(0,t.jsx)("meta",{name:"description",content:"A widget dedicated to finding Star Warrior cosmic colors given a date"})]}),(0,t.jsxs)("div",{className:"container-fluid root",children:[(0,t.jsx)(d,{lookup:function(e,a){i([e,a])}}),(0,t.jsx)(j,{date:e}),(0,t.jsx)(N,{})]})]})}let l=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],c=[0,31,29,31,30,31,30,31,31,30,31,30,31],m=new Date;function d(e){let[i,a]=(0,r.useState)(m.getMonth()+1),[s,n]=(0,r.useState)(m.getDate()),o=function(e){if(Number.isNaN(e)){a(e);return}e<1?e=1:e>12&&(e=12),a(e)},d=function(e){if(Number.isNaN(e)){n(e);return}let a=c[i];e<1?e=1:e>a&&(e=a),n(e)};return(0,t.jsx)("form",{action:"#",onSubmit:function(a){i&&s&&e.lookup(i,s),a.preventDefault()},children:(0,t.jsxs)("div",{className:"row g-3",children:[(0,t.jsxs)("div",{className:"col col-xs-12",children:[(0,t.jsx)("label",{htmlFor:"month",className:"form-label",children:"Month:"}),(0,t.jsxs)("div",{className:"input-group",children:[(0,t.jsx)("input",{id:"month",className:"form-control",type:"number",required:!0,value:i,onChange:e=>o(e.target.valueAsNumber)}),(0,t.jsx)("span",{className:"input-group-text dark-text",children:l[i]})]})]}),(0,t.jsxs)("div",{className:"col col-xs-12",children:[(0,t.jsx)("label",{htmlFor:"day",className:"form-label",children:"Day:"}),(0,t.jsx)("input",{id:"day",className:"form-control",type:"number",required:!0,value:s,onChange:e=>d(e.target.valueAsNumber)})]}),(0,t.jsx)("div",{className:"col-auto snap-to-bottom",children:(0,t.jsx)("input",{type:"submit",className:"btn btn-primary",value:"Ascend"})})]})})}let u=[{name:"Aries",symbol:"/images/zodiac/aries.png",an:!0,terms:["Evasive","Swift"]},{name:"Taurus",symbol:"/images/zodiac/taurus.png",terms:["Chaotic","Random"]},{name:"Gemini",symbol:"/images/zodiac/gemini.png",terms:["Repeating","Persistant"]},{name:"Cancer",symbol:"/images/zodiac/cancer.png",terms:["Resistant","Steady"]},{name:"Leo",symbol:"/images/zodiac/leo.png",terms:["Unyielding","Forceful"]},{name:"Virgo",symbol:"/images/zodiac/virgo.png",terms:["Bolstering","Empowering"]},{name:"Libra",symbol:"/images/zodiac/libra.png",terms:["Disruptive","Harmonic"]},{name:"Scorpius",symbol:"/images/zodiac/scorpius.png",terms:["Manipulative","Controlled"]},{name:"Sagittarius",symbol:"/images/zodiac/sagittarius.png",terms:["Deterministic","Focused"]},{name:"Capricorn",symbol:"/images/zodiac/capricorn.png",terms:["Fluid","Turbulent"]},{name:"Aquarius",symbol:"/images/zodiac/aquarius.png",an:!0,terms:["Volatile","Instant"]},{name:"Pisces",symbol:"/images/zodiac/pisces.png",terms:["Overwhelming","Hindering"]}],f=[[],[9,20],[10,19],[11,21],[0,20],[1,21],[2,21],[3,23],[4,23],[5,23],[6,23],[7,22],[8,22]];function h(e,i){let a=0;for(let t=1;t<e;t++)a+=c[t];return a+i}let p=h(3,21),g=[{name:"Speed",flavor:"Star Warriors with this affinity can use their cosmic power faster."},{name:"Stamina",flavor:"Star Warriors with this affinity can sustain their cosmic power for longer."},{name:"Strength",flavor:"Star Warriors with this affinity can exert their cosmic power harder."},{name:"Will",flavor:"Star Warriors with this affinity can control their cosmic power better."},{name:"Mind",flavor:"Star Warriors with this affinity can transform their cosmic power further."},{name:"Agility",flavor:"Star Warriors with this affinity can alter their cosmic power sooner."}],x=[[h(1,1),57,0,255],[h(1,14),20,0,255],[h(2,1),0,101,255],[h(2,14),0,212,255],[h(3,1),0,255,160],[h(3,14),0,255,60],[h(4,1),46,255,0],[h(4,14),100,255,0],[h(5,1),171,255,0],[h(5,14),225,255,0],[h(6,1),255,236,0],[h(6,14),255,215,0],[h(7,1),255,186,0],[h(7,14),255,164,0],[h(8,1),255,127,0],[h(8,14),255,95,0],[h(9,1),255,50,0],[h(9,14),255,18,0],[h(10,1),255,0,50],[h(10,14),255,0,125],[h(11,1),255,0,242],[h(11,14),187,0,255],[h(12,1),129,0,255],[h(12,14),99,0,255],[h(12,31),59,0,255]];function b(e,i,a){return Math.trunc(e).toString(16).padStart(2,"0")+Math.trunc(i).toString(16).padStart(2,"0")+Math.trunc(a).toString(16).padStart(2,"0")}let v=[{name:"Calix",badge:"/images/faction/calix.png",flavor:"The caring and protecting.",description:"A Calix reinforces their allies with their supportive abilities.",affinities:[2,1,5]},{name:"Nummus",badge:"/images/faction/nummus.png",flavor:"The creative and astute.",description:"A Nummus shines with their ideas and strategies in missions.",affinities:[0,4,3]},{name:"Virgula",badge:"/images/faction/virgula.png",flavor:"The skilled and mystical.",description:"A Virgula turns the tables with ease using specialized abilities.",affinities:[5,4,3]},{name:"Gladius",badge:"/images/faction/gladius.png",flavor:"The valiant and combating.",description:"A Gladius gives their all, making them formidable combatants.",affinities:[2,1,0]}];function j(e){let[i,a]=e.date;if(0===i)return(0,t.jsx)("div",{});{let r,s;let n=u[a<(r=f[i])[1]?r[0]:(r[0]+1)%12],o=h(i,a),l=function(e){let i=360*e/366;for(let a=0;a<6;a++){let t=15+60*a,r=60+t;if(r>360||i>=t&&i<r)return a}return 5}(((s=o-p)<0&&(s+=366),s)),c=g[l],m=v.filter(e=>e.affinities.includes(l));console.log(m);let d={color:"#"+function(e){for(let i=0;i<x.length;i++){let[a,t,r,s]=x[i];if(a===e)return b(t,r,s);if(a>e){let[n,o,l,c]=x[i-1];return b(o+(e-n)*(t-o)/(a-n),l+(e-n)*(r-l)/(a-n),c+(e-n)*(s-c)/(a-n))}}}(o)};return(0,t.jsxs)("div",{children:[(0,t.jsx)("img",{className:"mx-auto d-block",src:"/star-warriors-widget"+n.symbol,alt:n.name+" symbol",width:"200px"}),(0,t.jsxs)("div",{className:"pb-2",children:["You were born on ",i,"/",a,". That means you're ",n.an?"an":"a"," ",n.name,"!"]}),(0,t.jsxs)("div",{className:"pb-2",children:["Star Warriors born on this day are typically ",n.terms[0]," and ",n.terms[1],", and typically have a natural affinity for ",c.name,". ",c.flavor]}),(0,t.jsxs)("div",{className:"pb-2",children:["Your Cosmic Color is:",(0,t.jsxs)("div",{className:"input-group",children:[(0,t.jsx)("input",{type:"color",id:"cosmic-color",className:"form-control form-control-color",value:d.color,readOnly:!0}),(0,t.jsx)("input",{type:"text",className:"form-control",value:d.color,readOnly:!0}),(0,t.jsx)("button",{className:"btn btn-outline-primary",type:"button",onClick:function(){navigator.clipboard.writeText(d.color)},children:"Copy RGB to Clipboard"})]})]}),(0,t.jsxs)("div",{className:"pb-2",children:["These factions may be interested in you:",(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)(y,{data:m[0]}),(0,t.jsx)(y,{data:m[1]})]})]})]})}}function y(e){let i=e.data;return(0,t.jsx)("div",{className:"col-sm-6",children:(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-md-4",children:(0,t.jsx)("img",{src:"/star-warriors-widget"+i.badge,className:"card-img-top",alt:i.name+" symbol",width:"200px"})}),(0,t.jsx)("div",{className:"col-md-8",children:(0,t.jsxs)("div",{className:"card-body",children:[(0,t.jsx)("h5",{className:"card-title",children:i.name}),(0,t.jsx)("p",{className:"card-text text-muted",children:i.flavor}),(0,t.jsx)("p",{className:"card-text",children:i.description})]})})]})})})}function N(){return(0,t.jsxs)("footer",{children:[(0,t.jsxs)("div",{className:"left-footer",children:[(0,t.jsx)("a",{href:"https://www.starwarriorscomic.com/",children:"Star Warriors"})," \xa92022 Scott Fraser"]}),(0,t.jsx)("div",{className:"right-footer",children:"Created with \uD83D\uDC9A by Milo Marten"})]})}},9008:function(e,i,a){e.exports=a(3121)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);