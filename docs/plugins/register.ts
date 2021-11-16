import * as components from "spectrum-vue"
import ComponentView from "../components/ComponentView.vue"
import Vue from "vue"

Object.entries(components).forEach(([name, component]) => {
    Vue.component(name, component)
})


Vue.component('component-view', ComponentView)
