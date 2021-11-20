<template>
  <a
    class="spectrum-Link"
    :class="[
      'spectrum-Link--size' + size,
      type ? 'spectrum-Link--' + type : '',
      quiet ? 'spectrum-Link--quiet' : '',
    ]"
    v-bind="$attrs"
  >
    <slot />
  </a>
</template>
<style>
@import "@spectrum-css/link";
</style>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class SpLink extends Vue {
  @Prop({ default: "M" }) size!: string;
  // secondary or overBackground
  @Prop({ default: "" }) type!: string;
}
</script>