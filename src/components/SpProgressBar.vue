<template>
  <div
    class="spectrum-ProgressBar"
    :class="[
      'spectrum-ProgressBar--size' + size,
      indeterminate ? 'spectrum-ProgressBar--indeterminate' : '',
      sideLabel ? 'spectrum-ProgressBar--sideLabel' : '',
      overBackground ? 'spectrum-ProgressBar--overBackground' : '',
    ]"
    :value="value"
    role="progressbar"
    :aria-valuenow="value"
    aria-valuemin="0"
    aria-valuemax="100"
  >
    <div
      class="
        spectrum-FieldLabel spectrum-FieldLabel--sizeM
        spectrum-ProgressBar-label
      "
    >
      <slot />
    </div>
    <div
      class="
        spectrum-FieldLabel spectrum-FieldLabel--sizeM
        spectrum-ProgressBar-percentage
      "
    >
      {{ value }}%
    </div>
    <div class="spectrum-ProgressBar-track">
      <div
        class="spectrum-ProgressBar-fill"
        :style="`width: ${value}%`"
      />
    </div>
  </div>
</template>
<style>
@import "@spectrum-css/progressbar";
</style>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class SpProgressBar extends Vue {
  @Prop({ default: 0 }) value!: number;
  @Prop({ default: false }) indeterminate!: false;
  @Prop({ default: false }) sideLabel!: false;
  @Prop({ default: false }) overBackground!: false;
  @Prop({ default: "M" }) size!: string;
}
</script>