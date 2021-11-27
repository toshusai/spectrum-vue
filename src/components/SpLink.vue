<template>
  <a
    class="spectrum-Link"
    :class="[
      'spectrum-Link--size' + size,
      type ? 'spectrum-Link--' + type : '',
      quiet ? 'spectrum-Link--quiet' : '',
    ]"
    v-bind="$attrs"
    v-on="$listeners" 
  >
    <slot />
  </a>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class SpLink extends Vue {
  @Prop({ default: "M" }) size!: string;
  // secondary or overBackground
  @Prop({ default: "" }) type!: string;
  @Prop({ default: false }) quiet!: boolean;
}
</script>