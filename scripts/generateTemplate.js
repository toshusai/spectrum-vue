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
    const slotReg = new RegExp(/<slot.*name="(.*?)".*\/>?/mg)
    var match = slotReg.exec(src)
    while (match != null) {
        slots.push(match[1])
        match = slotReg.exec(src)
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
        .replace(/'/g, "&#039;");
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
                filter(x => x == " *" || x.startsWith(" * ")).map(x => x == " *" ? "" : x.replace(" * ", "")).join('\n')
            const reg = new RegExp(/<code>(.*?)<\/code>/s)
            var match = reg.exec(doc)
            while (match) {
                let t = escapeHTML(match[1]).trimStart().trimEnd()
                doc = doc.replace(match[0], match[1] + `<code-view :code="\`${t}\`"></code-view>`)
                match = reg.exec(doc)
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
                const a = exp.arguments[0]
                if (!ts.isObjectLiteralExpression(a)) return
                a.properties.forEach(p => {
                    if (!ts.isPropertyAssignment(p)) return
                    props.push({
                        prop: m.name.text,
                        default: p.initializer.getText(sourceFile),
                        type: m.type.getText(sourceFile),
                    })
                })
            })
        })
    })

    return {
        slots: slots,
        props: props,
        doc: doc
    }
}

const slotKeyword = `__SLOT`
const classNameKeyword = `__CLASSNAME`
const PROP_DATA = `__PROP_DATA`
const SLOT_DATA = `__SLOT_DATA`
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
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class ${classNameKeyword}Page extends Vue {
  propData = ${PROP_DATA};
  slotData = ${SLOT_DATA};
  eventData = [];
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
    if (name != "ActionButton" && fs.existsSync(path)) {
        // console.warn(`Already exists ${path}`);
        return
    }
    const src = fs.readFileSync(`../src/components/Sp${name}.vue`).toString()
    const res = getComponentInfo(src)
    console.log(res);
    let docSrc = template.replace(slotKeyword, res.doc)
    docSrc = docSrc.replace(new RegExp(classNameKeyword, 'g'), name)
    docSrc = docSrc.replace(new RegExp(PROP_DATA, 'g'), JSON.stringify(res.props))
    docSrc = docSrc.replace(new RegExp(SLOT_DATA, 'g'), JSON.stringify(res.slots.map(s => ({ name: s }))))
    fs.writeFileSync(path, docSrc)
})
