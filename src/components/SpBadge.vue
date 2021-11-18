<template>
  <span :class="cssClass"><slot /></span>
</template>
<style>
@import "@spectrum-css/badge";
</style>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class SpBadge extends Vue {
  @Prop({ default: "S" }) size!: string;
  @Prop({ default: "neutral" }) color!: string;

  get cssClass() {
    return [
      "spectrum-Badge",
      "spectrum-Badge--size" + this.size,
      "spectrum-Badge--" + this.color,
    ];
  }
}
</script>