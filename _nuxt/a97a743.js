(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{503:function(t,e,n){"use strict";n.r(e);n(120);var o=n(45),c=n(62),d=n(63),l=n(34),r=n(13),f=(n(44),n(22),n(46),n(30));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(l.a)(t);if(e){var c=Object(l.a)(this).constructor;n=Reflect.construct(o,arguments,c)}else n=o.apply(this,arguments);return Object(d.a)(this,n)}}var h=function(t,e,n,desc){var o,c=arguments.length,d=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(r.a)(Reflect))&&"function"==typeof Reflect.decorate)d=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(d=(c<3?o(d):c>3?o(e,n,d):o(e,n))||d);return c>3&&d&&Object.defineProperty(e,n,d),d},m=function(t){Object(c.a)(n,t);var e=v(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).propData=[{prop:"quiet",type:"boolean",default:"false"},{prop:"selected",type:"boolean",default:"false"},{prop:"emphasized",type:"boolean",default:"false"},{prop:"disabled",type:"boolean",default:"false"},{prop:"icon",type:"boolean",default:"false"},{prop:"size",type:"string",default:"M"}],t.eventData=[{event:"click",arg:"Event"},{event:"pointerdown",arg:"Event"}],t.code1='<sp-action-button size="S">S</sp-action-button>\n<sp-action-button size="M">M</sp-action-button>\n<sp-action-button size="L">L</sp-action-button>',t.emp=[{text:"default",selected:!1,disabled:!1},{text:"selected",selected:!0,disabled:!1},{text:"disabled",selected:!1,disabled:!0},{text:"selected + disabled",selected:!0,disabled:!0}],t.title=[{title:"Standard",quiet:!1,emphasized:!1,code:'<sp-action-button>default</sp-action-button>\n<sp-action-button :selected="true">selected</sp-action-button>\n<sp-action-button :disabled="true">disabled</sp-action-button>\n<sp-action-button :selected="true" :disabled="true">selected + disabled</sp-action-button>'},{title:"Quiet",quiet:!0,emphasized:!1,code:'<sp-action-button :quiet="true">default</sp-action-button>\n<sp-action-button :quiet="true" :selected="true">selected</sp-action-button>\n<sp-action-button :quiet="true" :disabled="true">disabled</sp-action-button>\n<sp-action-button :quiet="true" :selected="true" :disabled="true">selected + disabled</sp-action-button>'},{title:"Emphasized",quiet:!1,emphasized:!0,code:'<sp-action-button :emphasized="true">default</sp-action-button>\n<sp-action-button :emphasized="true" :selected="true">selected</sp-action-button>\n<sp-action-button :emphasized="true" :disabled="true">disabled</sp-action-button>\n<sp-action-button :emphasized="true" :selected="true" :disabled="true">selected + disabled</sp-action-button>'},{title:"Emphasized + Quiet",quiet:!0,emphasized:!0,code:'<sp-action-button :quiet="true" :emphasized="true">default</sp-action-button>\n<sp-action-button :quiet="true" :emphasized="true" :selected="true">selected</sp-action-button>\n<sp-action-button :quiet="true" :emphasized="true" :disabled="true">disabled</sp-action-button>\n<sp-action-button :quiet="true" :emphasized="true" :selected="true" :disabled="true">selected + disabled</sp-action-button>'}].map((function(e){return{title:e.title,items:t.emp,quiet:e.quiet,emphasized:e.emphasized,code:e.code}})),t}return n}(f.c),z=m=h([Object(f.a)({})],m),y=n(31),component=Object(y.a)(z,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("component-view",{attrs:{name:"ActionButton",propData:t.propData,eventData:t.eventData}},[n("h3",[t._v("Size")]),t._v(" "),n("sp-action-button",{attrs:{size:"S"}},[t._v("S")]),t._v(" "),n("sp-action-button",{attrs:{size:"M"}},[t._v("M")]),t._v(" "),n("sp-action-button",{attrs:{size:"L"}},[t._v("L")]),t._v(" "),n("code-view",{attrs:{code:t.code1}}),t._v(" "),t._l(t.title,(function(e,i){return n("div",{key:i},[n("h3",[t._v(t._s(e.title))]),t._v(" "),t._l(e.items,(function(o,i){return n("sp-action-button",{key:"standard"+i,staticStyle:{margin:"8px"},attrs:{selected:o.selected,disabled:o.disabled,quiet:e.quiet,emphasized:e.emphasized}},[t._v("\n      "+t._s(o.text)+"\n    ")])})),t._v(" "),n("code-view",{attrs:{code:e.code}})],2)}))],2)}),[],!1,null,null,null);e.default=component.exports}}]);