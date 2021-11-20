/**
 * Generate component document template.
 */
const fs = require("fs");
const Case = require("case")

const dir = fs.readdirSync("../src/components")

const slotKeyword = `__SLOT`
const classNameKeyword = `__CLASSNAME`

const template = `
<template>
    <component-view
    name="${classNameKeyword}"
    :propData="propData"
    :eventData="eventData"
    >
        ${slotKeyword}
    </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class ${classNameKeyword}Page extends Vue {
  propData = [];
  eventData = [];
}
</script>
`

let exportNames = []
for (let i = 0; i < dir.length; i++) {
    const name = dir[i].replace(".vue", "").replace(/^Sp/, "")
    exportNames.push(name)
}

exportNames.map(name=>{
    const kebab = Case.kebab(name)
    const path =`../docs/pages/${kebab}.vue` 
    if(fs.existsSync(path)){
        console.warn(`Already exists ${path}`);
        return
    }
    let src = template.replace(slotKeyword, `<${kebab}></${kebab}>`)
    src = src.replace(new RegExp(classNameKeyword, 'g'), name)
    fs.writeFileSync(path, src)
})
