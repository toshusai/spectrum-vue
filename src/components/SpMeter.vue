<template>
  <div
    class="spectrum-ProgressBar spectrum-ProgressBar--sizeM"
    :class="['is-' + type]"
    value="50"
    role="progressbar"
    aria-valuenow="50"
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

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class SpMeter extends Vue {
  @Prop({ default: 0 }) value!: number;
  @Prop({ default: "positive" }) type!: number;
}
</script>