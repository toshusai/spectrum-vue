# Generate Documentation
The multiline comments in Single Component File can generate document as Vue template.
`@Prop()`, `<slot />`, `<slot name="hello">` are generated automatically as docs.

## `<code></code>`
The code inside the tag is expanded as a vue template and the code is also displayed as a highlighted string.

## `<component></component>`
The code inside the tag is expanded in class prop/methods scope.
It can add data props for documentation.

## `<import></import>`
The code inside the tag is expanded in import scope.
It can add new import for documentation like `import { Color } from "@toshusai/spectrum-vue";`

## Example
```vue
<template>
    <div></div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class SpColorArea extends Vue {
    @Prop({ default: 0 }) h!: number;
    // ~~~
}
/**
<code>
<sp-color-area :color="color" @change="v => color = v" />
<div>
{{color}}
</div>
</code>
<import>
import { Color } from "@toshusai/spectrum-vue";
</import>
<component>
color = new Color();
</component>
 */
</script>
```