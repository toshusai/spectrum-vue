<template>
  <div
    class="spectrum-ProgressCircle"
    :class="[
      'spectrum-ProgressCircle--' + size,
      indeterminate ? 'spectrum-ProgressCircle--indeterminate' : '',
    ]"
  >
    <div class="spectrum-ProgressCircle-track" />
    <div class="spectrum-ProgressCircle-fills">
      <div class="spectrum-ProgressCircle-fillMask1">
        <div
          class="spectrum-ProgressCircle-fillSubMask1"
          :style="mask1Style"
        >
          <div class="spectrum-ProgressCircle-fill" />
        </div>
      </div>
      <div class="spectrum-ProgressCircle-fillMask2">
        <div
          class="spectrum-ProgressCircle-fillSubMask2"
          :style="mask2Style"
        >
          <div class="spectrum-ProgressCircle-fill" />
        </div>
      </div>
    </div>
  </div>
</template>
<style>
@import "@spectrum-css/progresscircle";
</style>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class SpProgressCircle extends Vue {
  @Prop({ default: 0 }) value!: number;
  @Prop({ default: "small" }) size!: string;
  @(Prop({ default: false })!) indeterminate!: boolean;

  // 0 ~ 50 = 180 ~ 360
  get mask1Style() {
    if (this.indeterminate) return {};
    let deg = 360;
    if (this.value < 0) {
      deg = 180;
    } else if (this.value < 50) {
      deg = 180 + this.value * 2 * 1.8;
    }
    return `transform: rotate(${deg}deg)`;
  }

  // 50 ~ 100 = 180 ~ 360
  get mask2Style() {
    if (this.indeterminate) return {};
    let deg = 180;
    if (this.value > 100) {
      deg = 360;
    } else if (this.value > 50) {
      deg = 180 + this.value * 1.8;
    }
    return `transform: rotate(${deg}deg)`;
  }
}
</script>