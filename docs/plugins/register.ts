import * as components from "@toshusai/spectrum-vue"
import ComponentView from "../components/ComponentView.vue"
import CodeView from "../components/CodeView.vue"
import Vue from "vue"

Object.entries(components).forEach(([name, component]) => {
    Vue.component(name, component)
})


Vue.component('component-view', ComponentView)
Vue.component('code-view', CodeView)
