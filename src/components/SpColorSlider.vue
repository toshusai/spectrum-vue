<template>
  <div
    ref="el"
    class="spectrum-ColorSlider"
  >
    <div
      class="spectrum-ColorSlider-checkerboard"
      role="presentation"
    >
      <div
        class="spectrum-ColorSlider-gradient"
        role="presentation"
        :style="backstyle"
      />
    </div>

    <div
      class="spectrum-ColorHandle spectrum-ColorSlider-handle"
      :style="`left: ${x}px`"
    >
      <div
        class="spectrum-ColorHandle-color"
        :style="`background-color: ${rgb}`"
      />
      <svg class="spectrum-ColorLoupe">
        <g transform="translate(1 1)">
          <path
            class="spectrum-ColorLoupe-inner"
            d="M24,0A24,24,0,0,1,48,24c0,16.255-24,40-24,40S0,40.255,0,24A24,24,0,0,1,24,0Z"
            fill="rgb(255, 0, 0)"
          />
          <path
            class="spectrum-ColorLoupe-outer"
            d="M24,2A21.98,21.98,0,0,0,2,24c0,6.2,4,14.794,11.568,24.853A144.233,144.233,0,0,0,24,61.132,144.085,144.085,0,0,0,34.4,48.893C41.99,38.816,46,30.209,46,24A21.98,21.98,0,0,0,24,2m0-2A24,24,0,0,1,48,24c0,16.255-24,40-24,40S0,40.255,0,24A24,24,0,0,1,24,0Z"
          />
        </g>
      </svg>
    </div>

    <input
      type="range"
      class="spectrum-ColorSlider-slider"
      style="pointer-events: all; z-index: 2"
      min="0"
      max="100"
      step="1"
      @pointerdown="start"
    >
  </div>
</template>



<script lang="ts">
import * as convert from "color-convert";


import { Vue, Component, Prop } from "vue-property-decorator";
import addDragEventOnce from "../utils/addDragEventOnce";

@Component({})
export default class SpColorSlider extends Vue {
  @Prop({ default: 0 }) h!: number;
  @Prop({ default: false }) alpha!: boolean;

  width = 192;

  get backstyle() {
    if (this.alpha) {
      return `background: linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);`;
    }
    return `background: linear-gradient( to right, rgb(255, 0, 0) 0%, rgb(255, 255, 0) 17%, rgb(0, 255, 0) 33%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 67%, rgb(255, 0, 255) 83%, rgb(255, 0, 0) 100%);`;
  }

  get x() {
    if (this.alpha) return this.h * this.width;
    return (this.h / 360) * this.width;
  }

  get rgb() {
    if (this.alpha) {
      return `rgba(0, 0, 0, ${1 - this.h})`;
    }
    const [r, g, b] = convert.hsv.rgb([this.h, 100, 100]);
    return `rgb(${r}, ${g}, ${b})`;
  }

  start(_: MouseEvent) {
    addDragEventOnce((e) => {
      if (e instanceof TouchEvent) return;
      const el = this.$refs.el as HTMLElement;
      const rect = el.getBoundingClientRect();
      let s = (e.pageX - rect.left) / this.width;
      if (s > 1) s = 1;
      else if (s < 0) s = 0;
      if (this.alpha) {
        this.$emit("change", s);
      } else {
        const si = Math.round(s * 360);
        this.$emit("change", si);
      }
    });
  }
}
/**
<h3>Hue</h3>
<code>
<sp-color-slider :h="h" @change="v => h = v" />
<div>
  {{ h }}
</div>
</code>

<h3>Alpha</h3>
<code>
<sp-color-slider :h="a" :alpha="true" @change="v => a = v" />
<div>
  {{ a }}
</div>
</code>
<component>
h = 0;
a = 0;
</component>
 */
</script>