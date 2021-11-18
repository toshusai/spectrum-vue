(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{246:function(t,e,n){var content=n(248);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("6759f5ab",content,!0,{sourceMap:!1})},247:function(t,e,n){"use strict";n(246)},248:function(t,e,n){var r=n(26)(!1);r.push([t.i,'.emoji{font-family:Monaco,"Courier New",monospace,"Apple Color Emoji"}.margin{margin:8px}',""]),t.exports=r},255:function(t,e,n){"use strict";n.r(e);var r=n(49),c=n(78),o=n(76),l=n(77),v=n(50),m=n(22),d=(n(48),n(17),n(137),n(138)),_=n(1),f=n(41),h=n(177);function C(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(v.a)(t);if(e){var c=Object(v.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var k=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},y=function(t){Object(o.a)(n,t);var e=C(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).componentTableData=[{name:"ActionButton"}],t.componentTableHeader=[{text:"Components",key:"name"}],t.links=h.a,t.color=new d.Color,t.sliderValue=0,t.hue=0,t}return Object(c.a)(n,[{key:"clickLink",value:function(t,e){t.preventDefault(),this.$router.push(e)}}]),n}(_.a),x=y=k([Object(f.a)({})],y),j=(n(247),n(31)),component=Object(j.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Spectrum Vue")]),t._v(" "),n("p",[t._v("\n    UI Components for Vue based on\n    "),n("sp-link",{attrs:{href:"https://spectrum.adobe.com/",target:"_blank"}},[t._v("\n      Adobe Spectrum Design System ")]),t._v(".\n  ")],1),t._v(" "),t._m(0),t._v(" "),n("ul",[t._m(1),t._v(" "),n("li",[t._v("This project was not developed by Adobe.")]),t._v(" "),n("li",[t._v("\n      Not the same as\n      "),n("sp-link",{attrs:{href:"https://github.com/adobe/react-spectrum",target:"_blank"}},[t._v("\n        React Spectrum\n      ")]),t._v("\n      ,\n      "),n("sp-link",{attrs:{href:"https://github.com/adobe/spectrum-web-components",target:"_blank"}},[t._v("\n        Spectrum Web Components\n      ")]),t._v("\n      API.\n    ")],1)]),t._v(" "),n("div",[n("sp-split-view",{attrs:{vertical:!0}},[n("sp-split-view-pane",{staticStyle:{padding:"8px"}},[n("div",{staticClass:"margin"},[n("sp-button",[t._v("Button CTA")])],1),t._v(" "),n("div",{staticClass:"margin"},[n("sp-action-button",[t._v(" ActionButton ")])],1),t._v(" "),n("div",{staticClass:"margin"},[n("sp-action-group",{attrs:{compact:!0}},[n("sp-action-button",{attrs:{item:!0}},[t._v("Action")]),t._v(" "),n("sp-action-button",{attrs:{item:!0}},[t._v("Group")])],1)],1),t._v(" "),n("div",{staticClass:"margin"},[n("sp-checkbox",[t._v(" Checkbox ")])],1),t._v(" "),n("div",{staticClass:"margin"},[n("sp-textfield",{attrs:{placeholder:"Textfield"}})],1),t._v(" "),n("div",{staticClass:"margin"},[n("sp-text-area",{attrs:{placeholder:"TextArea"}})],1),t._v(" "),n("div",{staticClass:"margin"},[n("sp-help-text",[t._v("Helptext")])],1),t._v(" "),n("div",{staticClass:"margin"},[n("sp-slider",{attrs:{min:0,max:1,value:t.sliderValue,showValue:!0,label:"Slider"},on:{input:function(e){return t.sliderValue=e}}})],1),t._v(" "),n("div",{staticClass:"margin"},[n("sp-menu",[n("sp-menu-item",[t._v("MenuItem 1")]),t._v(" "),n("sp-menu-item",[t._v("MenuItem 2")])],1)],1),t._v(" "),n("div",{staticClass:"margin"},[n("sp-link",[t._v("link")])],1),t._v(" "),n("div",{staticClass:"margin"},[n("sp-action-menu",{attrs:{items:[{text:"Item1",action:function(){}}]}},[t._v("ActionMenu")])],1),t._v(" "),n("div",{staticClass:"margin"},[n("sp-avatar",{attrs:{src:"/spectrum-vue/example-ava.jpeg"}})],1),t._v(" "),n("div",{staticClass:"margin"},[n("sp-badge",[t._v("badge")])],1),t._v(" "),n("div",{staticClass:"margin"},[n("sp-accordion",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v(" Header ")]},proxy:!0}])},[t._v("\n            Content\n          ")])],1),t._v(" "),n("div",{staticClass:"margin"},[n("sp-breadcrumbs",[n("sp-breadcrumbs-item",[t._v("breadcrumb")]),t._v(" "),n("sp-breadcrumbs-item",[t._v("breadcrumb")]),t._v(" "),n("sp-breadcrumbs-item",[t._v("breadcrumb")])],1)],1),t._v(" "),n("div",{staticClass:"margin"},[n("sp-divider")],1),t._v(" "),n("div",{staticClass:"margin"},[n("sp-tag",{attrs:{label:"Tag",size:"S"}}),t._v(" "),n("sp-tag",{attrs:{label:"Tag2",selected:!0,size:"S"}}),t._v(" "),n("sp-tag",{attrs:{label:"Tag3",invalid:!0,size:"S"}})],1),t._v(" "),n("div",{staticClass:"margin"},[n("sp-icon",{attrs:{name:"Cloud"}}),t._v(" "),n("sp-icon",{attrs:{name:"Erase"}}),t._v(" "),n("sp-icon",{attrs:{name:"Home"}})],1),t._v(" "),n("div",{staticClass:"margin"},[n("sp-table",{attrs:{headers:[{key:"column1",text:"Column2"},{key:"column2",text:"Column2"}],data:[{column1:"Table",column2:"Data2"},{column1:"Data3",column2:"Data4"}]}})],1),t._v(" "),n("div",{staticClass:"margin"},[n("sp-tree-item",{attrs:{itemSync:{id:"1",name:"Root",children:[{id:"2",name:"Child",children:[]},{id:"3",name:"Child",children:[]}]}},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.item;return[t._v("\n              "+t._s(n.name)+"\n            ")]}}])})],1),t._v(" "),n("div",{staticClass:"margin"},[n("sp-tabs",{attrs:{tabs:["TAB1","TAB2"]}})],1)]),t._v(" "),n("sp-split-view-splitter",{attrs:{gripper:!0}}),t._v(" "),n("sp-split-view-pane",{staticStyle:{padding:"8px"}},[n("div",{staticClass:"margin"},[n("sp-color-area",{attrs:{h:t.hue,color:t.color},on:{change:function(e){return t.color=e}}})],1),t._v(" "),n("div",{staticClass:"margin"},[n("sp-color-slider",{attrs:{h:t.hue},on:{change:function(e){return t.hue=e}}})],1)])],1)],1),t._v(" "),n("div",[n("h2",[t._v("Components")]),t._v(" "),n("ul",t._l(t.links,(function(link,i){return n("li",{key:i,staticStyle:{margin:"8px"}},[n("sp-link",{attrs:{href:"/spectrum-vue/"+link.href},on:{click:function(e){return t.clickLink(e,link.href)}}},[t._v("\n          "+t._s(link.text)+"\n        ")])],1)})),0)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("span",{staticClass:"emoji"},[t._v("⚠")]),t._v("️️ This project is work in progress. Not\n    a stable version. May make destructive changes.\n  ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[t._v("\n      It was created "),n("strong",[t._v("based")]),t._v(" on Spectrum and is not the same as\n      Spectrum.\n    ")])}],!1,null,null,null);e.default=component.exports}}]);