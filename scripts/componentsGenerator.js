/**
 * Generate component name and page path list.
 */
const fs = require("fs");
const Case = require("case")

const dir = fs.readdirSync("../src/components")

let exportNames = []
for (let i = 0; i < dir.length; i++) {
    const name = dir[i].replace(".vue", "").replace(/^Sp/,"")
    exportNames.push(name)
}


const array = exportNames.map(name=>{
    return `{ text: "${name}", href: "/${Case.kebab(name)}", }`
}).join(",\n    ")

const src = `export const links = [${array}]`

fs.writeFileSync(`../docs/data/links.ts`, src)
