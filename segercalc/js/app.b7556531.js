(function(t){function e(e){for(var s,o,c=e[0],l=e[1],i=e[2],p=0,_=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&_.push(n[o][0]),n[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(_.length)_.shift()();return a.push.apply(a,i||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],s=!0,c=1;c<r.length;c++){var l=r[c];0!==n[l]&&(s=!1)}s&&(a.splice(e--,1),t=o(o.s=r[0]))}return t}var s={},n={app:0},a=[];function o(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=s,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(r,s,function(e){return t[e]}.bind(null,s));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/segercalc/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var i=0;i<c.length;i++)e(c[i]);var u=l;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var s=r("85ec"),n=r.n(s);n.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-main",[s("v-row",{staticStyle:{height:"100%"}},[s("v-col",{staticClass:"pa-0 calc",attrs:{cols:"12",sm:"6"}},[s("Calculator",{staticClass:"calc-inside"})],1),s("v-col",{staticClass:"pa-0",attrs:{cols:"12",sm:"6"}},[s("v-img",{attrs:{position:"top",height:t.imageHeight,src:r("ad3c"),gradient:"to top right,rgba(58,175,159,0.4), rgba(58,175,159,0.5)"}})],1)],1)],1)],1)},a=[],o=(r("b0c0"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("v-row",{attrs:{justify:"center"}},[r("v-col",{staticClass:"mb-4",attrs:{cols:"10"}},[r("v-select",{attrs:{items:t.items,"item-text":"text","item-value":"value",label:"הגדרת אזור"},on:{change:t.colorSelected},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}})],1)],1),r("v-row",{attrs:{justify:"center"}},[r("v-col",{staticClass:"mb-4",attrs:{cols:"10"}},[r("div",[r("v-text-field",{attrs:{label:"גודל המבנה (מטרים רבועים)",required:""},model:{value:t.structure_size,callback:function(e){t.structure_size=e},expression:"structure_size"}})],1)])],1),r("v-row",{attrs:{justify:"center"}},[r("v-col",{staticClass:"mb-4",attrs:{cols:"10"}},[r("div",[r("v-text-field",{attrs:{label:"מספר כניסות",required:""},model:{value:t.num_enternces,callback:function(e){t.num_enternces=e},expression:"num_enternces"}})],1)])],1),r("v-row",{staticClass:"text-center",attrs:{justify:"center"}},[r("v-col",{staticClass:"mb-4",attrs:{cols:"10"}},[t._v(" בחלל זה ניתן לקיים תפילה בנוכחות "),r("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(t._s(t.result)+" מתפללות ומתפללים")]),r("hr"),t.result?r("h2",[t._v(t._s(t.finalNumGroups)+" קפסולות של "+t._s(t.finalCapsuleSize))]):t._e(),t.addedOnTop&&t.num_groups>1?r("h3",[t._v("ועוד "+t._s(this.addedOnTop)+" בקפסולה נפרדת")]):t._e(),r("p",{staticClass:"subheading font-weight-regular"},[t._v(" השימוש במחשבון על אחריות המשתמש בלבד "),r("br"),t._v("להוראות משרד הבריאות "),r("a",{attrs:{href:"https://www.gov.il/he/departments/news/13092020_04",target:"_blank"}},[t._v("הקליקו כאן")])]),r("p",{staticClass:"subheading font-weight-regular"},[t._v(" העדיפו תפילה באוויר הפתוח "),r("br"),t._v("עטו מסיכות ושמרו על ריחוק חברתי ")]),r("p",{staticClass:"subheading font-weight-bold"},[t._v("ונשמרתם מאוד לנפשותיכם")])])],1)],1)}),c=[],l=(r("d3b7"),r("25f0"),{COLORS:{green:"green",yellow:"yellow",orange:"orange",red:"red"},HEBREW_COLORS:{green:"ירוק",yellow:"צהוב",orange:"כתום",red:"אדום"},GROUP_SIZE_IN_CLOSED_STRUCTURE:{red:10,green:25,yellow:25,orange:25}}),i=l,u={name:"SegerCalc",data:function(){return{calc_params:{structure_size:300,num_enternces:2,color:i.COLORS.green},items:[{text:"ירוק",value:"green"},{text:"צהוב",value:"yellow"},{text:"כתום",value:"orange"},{text:"אדום",value:"red"}],structure_size:300,num_enternces:2,structure_open:!0,color:i.COLORS.green,num_groups:1,capsule_size:i.GROUP_SIZE_IN_CLOSED_STRUCTURE["green"],result:null,addedOnTop:0}},mounted:function(){this.getResult()},watch:{color:function(){this.calc_params.color=this.color.toString(),this.getResult()},structure_size:function(){this.calc_params.structure_size=+this.structure_size,this.getResult()},num_enternces:function(){this.calc_params.num_enternces=+this.num_enternces,this.getResult()}},computed:{HEBREW_COLORS:function(){return i.HEBREW_COLORS},finalCapsuleSize:function(){return 1===this.num_groups&&this.addedOnTop?this.addedOnTop:this.capsule_size},finalNumGroups:function(){return this.addedOnTop&&this.num_groups>1?this.num_groups-1:this.num_groups}},methods:{colorSelected:function(t){this.capsule_size=i.GROUP_SIZE_IN_CLOSED_STRUCTURE[t]},getResult:function(){var t=this.calc_params.structure_size/4,e=3*this.calc_params.num_enternces+2*Math.max(0,this.calc_params.num_enternces-3),r=e*i.GROUP_SIZE_IN_CLOSED_STRUCTURE[this.calc_params.color],s=Math.floor(Math.round(Math.min(t,r)));console.log("temp_result",s),this.result=s-s%i.GROUP_SIZE_IN_CLOSED_STRUCTURE[this.calc_params.color],this.num_groups=Math.floor(Math.max(1,this.result/i.GROUP_SIZE_IN_CLOSED_STRUCTURE[this.calc_params.color]));var n=this.calc_params.structure_size-4*this.result,a=Math.min(i.GROUP_SIZE_IN_CLOSED_STRUCTURE[this.calc_params.color],Math.floor(n/4));this.addedOnTop=this.num_groups<e&&(a<=i.GROUP_SIZE_IN_CLOSED_STRUCTURE[this.calc_params.color]?a:0),this.addedOnTop&&(this.result+=this.addedOnTop,this.result>this.addedOnTop&&this.num_groups++),console.log("maxPeopleBySqM: ".concat(t),e,r,s,this.result,this.num_groups,"roomLeft: ".concat(n),"peopleInRoomLeft: ".concat(a))}}},p=u,_=r("2877"),d=r("6544"),h=r.n(d),f=r("62ad"),m=r("a523"),g=r("0fd9"),v=r("b974"),O=r("8654"),b=Object(_["a"])(p,o,c,!1,null,null,null),S=b.exports;h()(b,{VCol:f["a"],VContainer:m["a"],VRow:g["a"],VSelect:v["a"],VTextField:O["a"]});var C={name:"App",components:{Calculator:S},data:function(){return{}},computed:{imageHeight:function(){switch(this.$vuetify.breakpoint.name){case"xs":return"220px";default:return"100%"}}}},R=C,w=(r("034f"),r("7496")),E=r("adda"),y=r("f6c4"),T=Object(_["a"])(R,n,a,!1,null,null,null),x=T.exports;h()(T,{VApp:w["a"],VCol:f["a"],VImg:E["a"],VMain:y["a"],VRow:g["a"]});var U=r("f309");s["a"].use(U["a"]);var I=new U["a"]({rtl:!0});s["a"].config.productionTip=!1,new s["a"]({vuetify:I,render:function(t){return t(x)}}).$mount("#app")},"85ec":function(t,e,r){},ad3c:function(t,e,r){t.exports=r.p+"img/bibi.7d546372.jpg"}});
//# sourceMappingURL=app.b7556531.js.map