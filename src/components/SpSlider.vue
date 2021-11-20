<template>
  <div
    class="spectrum-Slider"
    :class="{ 'is-disabled': disabled, 'spectrum-Slider--filled': filled }"
  >
    <div
      v-if="label"
      class="spectrum-Slider-labelContainer"
    >
      <label
        id="spectrum-Slider-label-8"
        class="spectrum-Slider-label"
        for="spectrum-Slider-input-8"
      >
        {{ label }}
      </label>
      <div
        v-if="showValue"
        class="spectrum-Slider-value"
        role="textbox"
        aria-readonly="true"
        aria-labelledby="spectrum-Slider-label-8"
      >
        {{ valueDisplay }}
      </div>
    </div>
    <div
      ref="controls"
      class="spectrum-Slider-controls"
    >
      <div
        v-if="ramp"
        class="spectrum-Slider-ramp"
      >
        <svg
          viewBox="0 0 240 16"
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M240,4v8c0,2.3-1.9,4.1-4.2,4L1,9C0.4,9,0,8.5,0,8c0-0.5,0.4-1,1-1l234.8-7C238.1-0.1,240,1.7,240,4z"
          />
        </svg>
      </div>
      <div
        v-else
        class="spectrum-Slider-track"
        :style="`width:${position}%`"
      />
      <div
        class="spectrum-Slider-handle"
        :style="`left: ${position}%; cursor: pointer`"
        @pointerdown="pointerdown"
      >
        <input
          type="range"
          class="spectrum-Slider-input"
          :value="value"
          :step="step"
          :min="min"
          :max="max"
          :disabled="disabled"
        >
      </div>
      <div
        v-if="!ramp"
        class="spectrum-Slider-track"
        :style="`width:${100 - position}%`"
      />
      <!-- <div class="spectrum-Slider-fill" :style="`left: 0%; width: 0%`" /> -->
    </div>
  </div>
</template>

<style>
@import "@spectrum-css/slider";
</style>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Ref } from "vue-property-decorator";
import addDragEventOnce from "../utils/addDragEventOnce";

@Component({})
export default class SpSlider extends Vue {
  @Prop({ default: false }) disabled!: boolean;
  @Prop({ default: false }) filled!: boolean;
  @Prop({ default: false }) showValue!: boolean;
  @Prop({ default: false }) ramp!: boolean;
  @Prop({ default: "" }) label!: string;
  @Prop({ default: 0 }) value!: number;
  @Prop({ default: 0 }) step!: number;
  @Prop({ default: 0 }) min!: number;
  @Prop({ default: 0 }) max!: number;
  @Prop({ default: 0 }) offset!: number;

  controls: HTMLElement | null = null;
  start = -1;

  get position() {
    const size = this.max - this.min;
    if (size == 0) return 0;
    return (this.value / size) * 100;
  }

  get width() {
    if (this.controls) return this.controls.getBoundingClientRect().width;
    return Number.MAX_SAFE_INTEGER;
  }

  get valueDisplay() {
    return Math.round(this.value).toString();
  }

  pointerdown(e: MouseEvent | Touch) {
    this.start = e.pageX;
    const startValue = this.value;
    addDragEventOnce((e) => {
      if (e instanceof MouseEvent) {
        // px space
        const delta = e.pageX - this.start;
        // value space 1 - 0
        const range = this.max - this.min;
        const rate = range / this.width;
        const newValue = startValue + delta * rate;
        if (newValue < this.min) return;
        else if (newValue > this.max) return;

        if (this.step == 0) {
          this.$emit("input", newValue);
        } else {
          const v = Math.round(newValue);
          if (v % this.step == 0) {
            this.$emit("input", v);
          }
        }
      }
    });
  }

  mounted() {
    this.controls = this.$el.querySelector(".spectrum-Slider-controls");
  }
}
</script>