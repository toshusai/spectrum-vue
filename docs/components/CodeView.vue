<template>
  <pre>
    <code class="language-html">{{ code }}</code>
  </pre>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class CodeView extends Vue {
  @Prop({ default: "" }) code!: string;
}
</script>
