(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{480:function(t,e,o){"use strict";o.r(e);var r=o(37),n=o(52),c=o(53),l=o(29),f=o(13),v=(o(36),o(15),o(113),o(19)),d=o(139);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,r=Object(l.a)(t);if(e){var n=Object(l.a)(this).constructor;o=Reflect.construct(r,arguments,n)}else o=r.apply(this,arguments);return Object(c.a)(this,o)}}var y=function(t,e,o,desc){var r,n=arguments.length,c=n<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,o):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(n<3?r(c):n>3?r(e,o,c):r(e,o))||c);return n>3&&c&&Object.defineProperty(e,o,c),c},O=function(t){Object(n.a)(o,t);var e=h(o);function o(){var t;return Object(r.a)(this,o),(t=e.apply(this,arguments)).propData=[{prop:"h",type:"number",default:"0"},{prop:"color",type:"Color",default:"() => new Color()"}],t.slotData=[],t.eventData=[],t.color=new d.Color,t}return o}(v.c),j=O=y([Object(v.a)({})],O),w=o(26),component=Object(w.a)(j,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("component-view",{attrs:{name:"ColorArea",propData:t.propData,eventData:t.eventData,slotData:t.slotData}},[o("sp-color-area",{attrs:{color:t.color},on:{change:function(e){return t.color=e}}}),t._v(" "),o("div",[t._v("\n"+t._s(t.color)+"\n")]),t._v(" "),o("code-view",{attrs:{code:'<sp-color-area :color="color" @change="v => color = v" />\n<div>\n{{color}}\n</div>'}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);