/**
 * Generate component document template.
 */
const fs = require("fs");
const Case = require("case")

const ts = require("typescript")

const dir = fs.readdirSync("../src/components")



/**
 * Get slots from template.
 * @param src vue template src.
 * @returns slot names in template
 */
function getSlots(src) {
    const slots = []
    const slotReg = new RegExp(/<slot.*?name="(.*?)".*?\/>?/sg)
    var tmp = src
    var match = slotReg.exec(tmp)
    while (match != null) {
        slots.push(match[1])
        tmp = tmp.replace(match[0], "")
        match = slotReg.exec(tmp)
    }
    if (src.match(/<slot \/>/)) {
        slots.push("default")
    }
    return slots
}

function escapeHTML(str) {
    return str.replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
    // .replace(/'/g, "&#039;");
}


function getComponentInfo(src) {
    const slots = getSlots(src)
    // get typescript src from vue template
    const reg = new RegExp(/<script lang="ts">(.*)<\/script>/, 's')
    src = src.match(reg)

    const sourceFile = ts.createSourceFile(
        "main.ts",
        src[1],
        ts.ScriptTarget.Latest,
        true
    );

    const fullText = sourceFile.getFullText()

    let doc = ""
    let comp = ""
    let imp = ""
    ts.forEachChild(sourceFile, (node => {
        let ranges = ts.getLeadingCommentRanges(fullText, node.getFullStart())
        if (ranges && ranges.length > 0) {
            const range = ranges[0]
            const comment = fullText.substr(range.pos, range.end - range.pos)
            /**
             *  
             */
            // remove above comment syntax.
            doc = comment.split("\n").
                filter(x => x != "/**" && x != " */").map(x => x == " *" ? "" : x.replace(" * ", "")).join('\n')
            const reg = new RegExp(/<code>(.*?)<\/code>/s)
            var match = reg.exec(doc)
            while (match) {
                let t = escapeHTML(match[1]).trimStart().trimEnd()
                doc = doc.replace(match[0], match[1] + `<code-view :code="\`${t}\`"></code-view>`)
                match = reg.exec(doc)
            }
            const compReg = new RegExp(/<component>(.*?)<\/component>/s)
            var m = compReg.exec(doc)
            if (m) {
                doc = doc.replace(m[0], "")
                comp = m[1]
            }
            const impReg = new RegExp(/<import>(.*?)<\/import>/s)
            var m = impReg.exec(doc)
            if (m) {
                doc = doc.replace(m[0], "")
                imp = m[1]
            }
        }
    }))

    const props = []
    sourceFile.statements.forEach(s => {
        if (!ts.isClassDeclaration(s)) return
        s.members.forEach(m => {
            if (!ts.isPropertyDeclaration(m)) return
            m.decorators?.forEach(dec => {
                if (!ts.isDecorator(dec)) return
                const exp = dec.expression
                if (!ts.isCallExpression(exp)) return
                const decFuncName = exp.expression.getText(sourceFile)
                if (decFuncName != "Prop" && decFuncName != "PropSync") return;
                if (exp.arguments.length != 1) return
                const a = exp.arguments[0]
                if (!ts.isObjectLiteralExpression(a)) return
                var prop = {
                    prop: m.name.text,
                    type: m.type.getText(sourceFile),
                }
                a.properties.forEach(p => {
                    if (!ts.isPropertyAssignment(p)) return
                    if (p.name.getText(sourceFile) == "default")
                        prop.default = p.initializer.getText(sourceFile)
                    if (p.name.getText(sourceFile) == "required")
                        prop.required = p.initializer.getText(sourceFile)
                })
                props.push(prop)
            })
        })
    })

    return {
        slots: slots,
        props: props,
        doc: doc,
        comp: comp,
        imp: imp,
    }
}

const slotKeyword = `__SLOT`
const classNameKeyword = `__CLASSNAME`
const PROP_DATA = `__PROP_DATA`
const SLOT_DATA = `__SLOT_DATA`
const ADDITIONAL = `__ADDITIONAL`
const IMPORT = `__IMPORT`
const template = `
<template>
    <component-view
    name="${classNameKeyword}"
    :propData="propData"
    :eventData="eventData"
    :slotData="slotData"
    >
        ${slotKeyword}
    </component-view>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
${IMPORT}
@Component({})
export default class ${classNameKeyword}Page extends Vue {
  propData = ${PROP_DATA};
  slotData = ${SLOT_DATA};
  eventData = [];

  ${ADDITIONAL}
}
</script>
`

let exportNames = []
for (let i = 0; i < dir.length; i++) {
    const name = dir[i].replace(".vue", "").replace(/^Sp/, "")
    exportNames.push(name)
}

exportNames.map(name => {
    const kebab = Case.kebab(name)
    const path = `../docs/pages/${kebab}.vue`
    const src = fs.readFileSync(`../src/components/Sp${name}.vue`).toString()
    const res = getComponentInfo(src)
    let docSrc = template.replace(slotKeyword, res.doc)
    docSrc = docSrc.replace(new RegExp(classNameKeyword, 'g'), name)
    docSrc = docSrc.replace(new RegExp(PROP_DATA, 'g'), JSON.stringify(res.props))
    docSrc = docSrc.replace(new RegExp(SLOT_DATA, 'g'), JSON.stringify(res.slots.map(s => ({ name: s }))))
    docSrc = docSrc.replace(new RegExp(ADDITIONAL, 'g'), res.comp)
    docSrc = docSrc.replace(new RegExp(IMPORT, 'g'), res.imp)
    fs.writeFileSync(path, docSrc)
})
