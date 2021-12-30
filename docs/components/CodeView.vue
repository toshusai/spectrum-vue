<template>
  <pre>
    <code class="language-html">{{ code }}</code>
  </pre>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class CodeView extends Vue {
  @Prop({ default: "" }) code!: string;
}
</script>
