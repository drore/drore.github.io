(function(e){function r(r){for(var n,s,u=r[0],c=r[1],i=r[2],_=0,p=[];_<u.length;_++)s=u[_],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(r);while(p.length)p.shift()();return a.push.apply(a,i||[]),t()}function t(){for(var e,r=0;r<a.length;r++){for(var t=a[r],n=!0,u=1;u<t.length;u++){var c=t[u];0!==o[c]&&(n=!1)}n&&(a.splice(r--,1),e=s(s.s=t[0]))}return e}var n={},o={app:0},a=[];function s(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=n,s.d=function(e,r,t){s.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,r){if(1&r&&(e=s(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)s.d(t,n,function(r){return e[r]}.bind(null,n));return t},s.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(r,"a",r),r},s.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},s.p="/segercalc/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=r,u=u.slice();for(var i=0;i<u.length;i++)r(u[i]);var l=c;a.push([0,"chunk-vendors"]),t()})({0:function(e,r,t){e.exports=t("56d7")},"034f":function(e,r,t){"use strict";var n=t("85ec"),o=t.n(n);o.a},"56d7":function(e,r,t){"use strict";t.r(r);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),o=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{attrs:{id:"app"}},[t("div",[t("select",{directives:[{name:"model",rawName:"v-model",value:e.color,expression:"color"}],on:{change:function(r){var t=Array.prototype.filter.call(r.target.options,(function(e){return e.selected})).map((function(e){var r="_value"in e?e._value:e.value;return r}));e.color=r.target.multiple?t:t[0]}}},[t("option",{attrs:{disabled:"",value:""}},[e._v("צבע האזור")]),t("option",{attrs:{value:"green"}},[e._v(e._s(e.HEBREW_COLORS.green))]),t("option",{attrs:{value:"yellow"}},[e._v(e._s(e.HEBREW_COLORS.yellow))]),t("option",{attrs:{value:"orange"}},[e._v(e._s(e.HEBREW_COLORS.orange))]),t("option",{attrs:{value:"red"}},[e._v(e._s(e.HEBREW_COLORS.red))])])]),t("div",[e._v(" גודל המבנה "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.structure_size,expression:"structure_size"}],attrs:{type:"number"},domProps:{value:e.structure_size},on:{input:function(r){r.target.composing||(e.structure_size=r.target.value)}}})]),t("div",[e._v(" מספר כניסות ראשיות "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.num_primary_enternces,expression:"num_primary_enternces"}],attrs:{type:"number"},domProps:{value:e.num_primary_enternces},on:{input:function(r){r.target.composing||(e.num_primary_enternces=r.target.value)}}})]),t("div",[e._v(" מספר כניסות משניות "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.num_secondary_enternces,expression:"num_secondary_enternces"}],attrs:{type:"number"},domProps:{value:e.num_secondary_enternces},on:{input:function(r){r.target.composing||(e.num_secondary_enternces=r.target.value)}}})]),t("div",[t("h2",[e._v(e._s(e.result)+" מתפללים")]),t("h2",[e._v(e._s(e.num_groups)+" קפסולות")])])])},a=[],s=(t("d3b7"),t("25f0"),{COLORS:{green:"green",yellow:"yellow",orange:"orange",red:"red"},HEBREW_COLORS:{green:"ירוק",yellow:"צהוב",orange:"כתום",red:"אדום"},GROUP_SIZE_IN_CLOSED_STRUCTURE:{red:10,green:25,yellow:25,orange:25}}),u=s,c={data:function(){return{calc_params:{structure_size:500,num_primary_enternces:5,num_secondary_enternces:0,color:u.COLORS.green},structure_size:500,num_primary_enternces:5,num_secondary_enternces:0,structure_open:!0,color:u.COLORS.green,num_groups:1,result:null}},mounted:function(){this.getResult()},watch:{color:function(){this.calc_params.color=this.color.toString(),this.getResult()},structure_size:function(){this.calc_params.structure_size=+this.structure_size,this.getResult()},num_primary_enternces:function(){this.calc_params.num_primary_enternces=+this.num_primary_enternces,this.getResult()},num_secondary_enternces:function(){this.calc_params.num_secondary_enternces=+this.num_secondary_enternces,this.getResult()}},computed:{HEBREW_COLORS:function(){return u.HEBREW_COLORS}},methods:{getResult:function(){var e=this.calc_params.structure_size/4,r=3*this.calc_params.num_primary_enternces+2*this.calc_params.num_secondary_enternces,t=Math.floor(Math.round(Math.min(e,r*u.GROUP_SIZE_IN_CLOSED_STRUCTURE[this.calc_params.color])));this.result=t-t%u.GROUP_SIZE_IN_CLOSED_STRUCTURE[this.calc_params.color],this.num_groups=Math.floor(Math.max(1,this.result/u.GROUP_SIZE_IN_CLOSED_STRUCTURE[this.calc_params.color]))}}},i=c,l=(t("034f"),t("2877")),_=Object(l["a"])(i,o,a,!1,null,null,null),p=_.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(p)}}).$mount("#app")},"85ec":function(e,r,t){}});
//# sourceMappingURL=app.d71c3385.js.map