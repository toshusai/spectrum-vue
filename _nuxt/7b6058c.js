(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{560:function(e,t,n){"use strict";n.r(t);var l=n(45),r=n(62),v=n(63),o=n(34),c=n(13),f=(n(44),n(22),n(120),n(2)),d=n(30);function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=Object(o.a)(e);if(t){var r=Object(o.a)(this).constructor;n=Reflect.construct(l,arguments,r)}else n=l.apply(this,arguments);return Object(v.a)(this,n)}}var _=function(e,t,n,desc){var l,r=arguments.length,v=r<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(c.a)(Reflect))&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(l=e[i])&&(v=(r<3?l(v):r>3?l(t,n,v):l(t,n))||v);return r>3&&v&&Object.defineProperty(t,n,v),v},x=function(e){Object(r.a)(n,e);var t=m(n);function n(){var e;return Object(l.a)(this,n),(e=t.apply(this,arguments)).propData=[{prop:"disabled",type:"boolean",default:"false"},{prop:"filled",type:"boolean",default:"false"},{prop:"valueText",type:"string",default:'""'},{prop:"ramp",type:"boolean",default:"false"},{prop:"label",type:"string",default:'""'},{prop:"value",type:"number",default:"0"},{prop:"step",type:"number",default:"0"},{prop:"min",type:"number",default:"0"},{prop:"max",type:"number",default:"0"},{prop:"offset",type:"number",default:"0"}],e.slotData=[],e.eventData=[],e.value1=.5,e.value2=1,e.value3=0,e.value4=0,e.value5=50,e}return n}(f.a),y=x=_([Object(d.a)({})],x),h=n(31),component=Object(h.a)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("component-view",{attrs:{name:"Slider",propData:e.propData,eventData:e.eventData,slotData:e.slotData}},[n("h3",[e._v("Standard")]),e._v(" "),n("sp-slider",{attrs:{min:0,max:1,value:e.value1},on:{input:function(t){return e.value1=t}}}),e._v("\n"+e._s(e.value1)+"\n"),n("code-view",{attrs:{code:'<sp-slider :min="0" :max="1" :value="value1" @input="(v) => (value1 = v)" />\n{{ value1 }}'}}),e._v(" "),n("h3",[e._v("filled")]),e._v(" "),n("sp-slider",{attrs:{filled:!0,min:1,max:8,value:e.value2},on:{input:function(t){return e.value2=t}}}),e._v("\n"+e._s(e.value2)+"\n"),n("code-view",{attrs:{code:'<sp-slider\n  :filled="true"\n  :min="1"\n  :max="8"\n  :value="value2"\n  @input="(v) => (value2 = v)"\n/>\n{{ value2 }}'}}),e._v(" "),n("h3",[e._v("label + showValue")]),e._v(" "),n("sp-slider",{attrs:{label:"This is label",valueText:e.value3,min:0,max:100,value:e.value3},on:{input:function(t){return e.value3=t}}}),e._v("\n"+e._s(e.value3)+"\n"),n("code-view",{attrs:{code:'<sp-slider\n  :label="\'This is label\'"\n  :valueText="value3"\n  :min="0"\n  :max="100"\n  :value="value3"\n  @input="(v) => (value3 = v)"\n/>\n{{ value3 }}'}}),e._v(" "),n("h3",[e._v("step")]),e._v(" "),n("sp-slider",{attrs:{label:"min 0, max 50, step 5",valueText:e.value4,min:0,max:50,step:5,value:e.value4},on:{input:function(t){return e.value4=t}}}),e._v(" "),n("code-view",{attrs:{code:'<sp-slider\n  :label="\'min 0, max 50, step 5\'"\n  :valueText="value4"\n  :min="0"\n  :max="50"\n  :step="5"\n  :value="value4"\n  @input="(v) => (value4 = v)"\n/>'}}),e._v(" "),n("h3",[e._v("ramp")]),e._v(" "),n("sp-slider",{attrs:{label:"Ramp",valueText:e.value5,min:0,max:100,value:e.value5,ramp:!0},on:{input:function(t){return e.value5=t}}}),e._v(" "),n("code-view",{attrs:{code:'<sp-slider\n  :label="\'Ramp\'"\n  :valueText="value5"\n  :min="0"\n  :max="100"\n  :value="value5"\n  :ramp="true"\n  @input="(v) => (value5 = v)"\n/>'}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);