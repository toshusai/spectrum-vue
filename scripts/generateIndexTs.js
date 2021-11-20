/**
 * Generate src/index.ts
 * import and export all component & utils
 */
const fs = require("fs")

const dir = fs.readdirSync("../src/components")

let exportNames = []
let src = ``
for (let i = 0; i < dir.length; i++) {
    const name = dir[i].replace(".vue", "")
    src += `import ${name} from "./components/${name}.vue"\n`
    exportNames.push(name)
}

{
    const dir = fs.readdirSync("./src/utils")
    for (let i = 0; i < dir.length; i++) {
        const name = dir[i].replace(".ts", "")
        src += `import ${name} from "./utils/${name}"\n`
    exportNames.push(name)
    }
}
src += `import "./styles"\n`

src += `export {\n    ${exportNames.join(",\n    ")}\n}\n`

fs.writeFileSync(`./src/index.ts`, src)