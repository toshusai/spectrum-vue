<template>
  <div ref="el" class="spectrum-ColorArea">
    <div
      type="range"
      style="pointer-events: all; z-index: 2"
      class="spectrum-ColorArea-slider"
      name="x"
      aria-label="saturation and value"
      min="0"
      max="1"
      step="0.01"
      @pointerdown="start"
      @touchstart="start"
    />
    <!-- <input
      type="range"
      class="spectrum-ColorArea-slider"
      name="y"
      aria-label="saturation and value"
      min="0"
      max="1"
      step="0.01"
    /> -->
    <div class="spectrum-ColorArea-gradient" :style="gradientStyle" />

    <div
      class="spectrum-ColorHandle spectrum-ColorArea-handle"
      :style="`transform: translate(${xx}px, ${yy}px)`"
    >
      <div
        class="spectrum-ColorHandle-color"
        :style="`background-color: ${rgbStr}`"
      />
      <svg class="spectrum-ColorLoupe">
        <g transform="translate(1 1)">
          <path
            class="spectrum-ColorLoupe-inner"
            d="M24,0A24,24,0,0,1,48,24c0,16.255-24,40-24,40S0,40.255,0,24A24,24,0,0,1,24,0Z"
            :fill="rgbStr"
          />
          <path
            class="spectrum-ColorLoupe-outer"
            d="M24,2A21.98,21.98,0,0,0,2,24c0,6.2,4,14.794,11.568,24.853A144.233,144.233,0,0,0,24,61.132,144.085,144.085,0,0,0,34.4,48.893C41.99,38.816,46,30.209,46,24A21.98,21.98,0,0,0,24,2m0-2A24,24,0,0,1,48,24c0,16.255-24,40-24,40S0,40.255,0,24A24,24,0,0,1,24,0Z"
          />
        </g>
      </svg>
    </div>
  </div>
</template>



<script lang="ts">
import * as convert from "color-convert";
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import Color from "../utils/Color";
import addDragEventOnce from "../utils/addDragEventOnce";

@Component({})
export default class SpColorArea extends Vue {
  @Prop({ default: 0 }) h!: number;
  @Prop({ default: () => new Color() }) color!: Color;

  width = 192;

  get x() {
    const hsv = this.color.toHsv();
    if (hsv) return (hsv[1] / 100) * this.width;
  }

  xx = 0;
  yy = 0;

  get y() {
    const hsv = this.color.toHsv();
    if (hsv) return (1 - hsv[2] / 100) * this.width;
  }

  get brgb() {
    const rgb = convert.hsv.rgb([this.h, 100, 100]);
    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
  }

  get rgbStr() {
    return this.color.toCss();
  }

  get gradientStyle(): Partial<CSSStyleDeclaration> {
    return `background: linear-gradient(to top, black 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(to right, white 0%, rgba(0, 0, 0, 0) 100%), ${this.brgb};`;
  }

  @Watch("h")
  update() {
    const [, s, v] = this.color.toHsv();

    const [r, g, b] = convert.hsv.rgb([this.h, s, v]);
    const [r2, g2, b2] = convert.hsv.rgb([
      this.h,
      Math.round((this.xx / this.width) * 100),
      Math.round((1 - this.yy / this.width) * 100),
    ]);

    // const xs = Math.round((this.xx / this.width) * 100);
    // RGB is not chagne, but x may be chagne.
    // x = 0~192 && s = 0~100
    // avoid move x position
    if (r != r2 && g != g2 && b != b2) {
      this.xx = (s / 100) * this.width;
      this.yy = (1 - v / 100) * this.width;
    }
    const c = new Color();
    c.r = r;
    c.g = g;
    c.b = b;
    this.$emit("change", c);
  }

  start(_: MouseEvent) {
    addDragEventOnce((e) => {
      if (e instanceof TouchEvent) return;
      const el = this.$refs.el as HTMLElement;
      const rect = el.getBoundingClientRect();
      const s = (e.clientX - rect.left) / this.width;
      let si = Math.round(s * 100);
      this.xx = e.clientX - rect.left;
      this.yy = e.clientY - rect.top;
      if (si > 100) {
        si = 100;
        this.xx = this.width;
      } else if (si < 0) {
        si = 0;
        this.xx = 0;
      }
      const v = 1 - (e.clientY - rect.top) / this.width;
      let vi = Math.round(v * 100);
      if (vi > 100) {
        vi = 100;
        this.yy = 0;
      } else if (vi < 0) {
        vi = 0;
        this.yy = this.width;
      }
      const rgb = convert.hsv.rgb([this.h, si, vi]);
      const r = rgb[0];
      const g = rgb[1];
      const b = rgb[2];
      const c = new Color();
      c.r = r;
      c.g = g;
      c.b = b;
      this.$emit("change", c);
    });
  }
}
</script>
