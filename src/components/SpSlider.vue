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
        v-if="valueText !== ''"
        class="spectrum-Slider-value"
        role="textbox"
        aria-readonly="true"
        aria-labelledby="spectrum-Slider-label-8"
      >
        {{ valueText }}
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
      <!-- @touchstart="prevent" for disable iOS back swipe -->
      <div
        class="spectrum-Slider-handle"
        :style="`left: ${position}%; cursor: pointer`"
        @pointerdown="pointerdown"
        @touchstart="prevent"
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
    </div>
  </div>
</template>



<script lang="ts">
import Vue from "vue";
import { Component, Prop, Ref } from "vue-property-decorator";
import addDragEventOnce from "../utils/addDragEventOnce";

@Component({})
export default class SpSlider extends Vue {
  @Prop({ default: false }) disabled!: boolean;
  @Prop({ default: false }) filled!: boolean;
  @Prop({ default: "" }) valueText!: string;
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

  pointerdown(e: MouseEvent | TouchEvent | PointerEvent) {
    //@ts-ignore
    this.start = e.pageX;
    const startValue = this.value;
    e.preventDefault();
    addDragEventOnce(
      (e) => {
        e.preventDefault();
        e.stopImmediatePropagation();
        if (e instanceof MouseEvent) {
          // px space
          const delta = e.pageX - this.start;
          // value space 1 - 0
          const range = this.max - this.min;
          const rate = range / this.width;
          const newValue = startValue + delta * rate;
          if (newValue < this.min) {
            this.$emit("input", this.min);
            return;
          } else if (newValue > this.max) {
            this.$emit("input", this.max);
            return;
          }

          if (this.step == 0) {
            this.$emit("input", newValue);
          } else {
            const v = Math.round(newValue);
            if (v % this.step == 0) {
              this.$emit("input", v);
            }
          }
        }
      },
      undefined,
      { passive: false }
    );
  }

  mounted() {
    this.controls = this.$el.querySelector(".spectrum-Slider-controls");
  }

  prevent(e: Event) {
    e.preventDefault();
  }
}
/**
<h3>Standard</h3>
<code>
<sp-slider :min="0" :max="1" :value="value1" @input="(v) => (value1 = v)" />
{{ value1 }}
</code>

<h3>filled</h3>
<code>
<sp-slider
  :filled="true"
  :min="0"
  :max="100"
  :value="value2"
  @input="(v) => (value2 = v)"
/>
{{ value2 }}
</code>

<h3>label + showValue</h3>
<code>
<sp-slider
  :label="'This is label'"
  :valueText="value3"
  :min="0"
  :max="100"
  :value="value3"
  @input="(v) => (value3 = v)"
/>
{{ value3 }}
</code>

<h3>step</h3>
<code>
<sp-slider
  :label="'min 0, max 50, step 5'"
  :valueText="value4"
  :min="0"
  :max="50"
  :step="5"
  :value="value4"
  @input="(v) => (value4 = v)"
/>
</code>

<h3>ramp</h3>
<code>
<sp-slider
  :label="'Ramp'"
  :valueText="value5"
  :min="0"
  :max="100"
  :value="value5"
  :ramp="true"
  @input="(v) => (value5 = v)"
/>
</code>

<component>
value1: number = 0.5;
value2: number = 0;
value3: number = 0;
value4: number = 0;
value5: number = 50;
</component>
 */
</script>