(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{251:function(e,t,r){"use strict";r.r(t);var o=r(49),n=r(78),c=r(76),l=r(77),f=r(50),v=r(22),h=(r(48),r(17),r(137),r(1)),d=r(41),y=r(178);function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=Object(f.a)(e);if(t){var n=Object(f.a)(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return Object(l.a)(this,r)}}var j=function(e,t,r,desc){var o,n=arguments.length,c=n<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(c=(n<3?o(c):n>3?o(t,r,c):o(t,r))||c);return n>3&&c&&Object.defineProperty(t,r,c),c},w=function(e){Object(c.a)(r,e);var t=O(r);function r(){var e;return Object(o.a)(this,r),(e=t.apply(this,arguments)).color=new y.Color,e.propData=[{prop:"color",type:"Color",default:"new Color()"},{prop:"h",type:"number",default:"0"}],e.eventData=[{event:"change",arg:"Color"}],e}return Object(n.a)(r,[{key:"changeColor",value:function(e){this.color=e}}]),r}(h.a),R=w=j([Object(d.a)({})],w),C=r(31),component=Object(C.a)(R,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("component-view",{attrs:{name:"ColorArea",propData:e.propData,eventData:e.eventData}},[r("sp-color-area",{attrs:{color:e.color},on:{change:e.changeColor}}),e._v(" "),r("div",[e._v(e._s(e.color))])],1)}),[],!1,null,null,null);t.default=component.exports}}]);