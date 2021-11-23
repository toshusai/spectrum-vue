<template>
  <div class="spectrum-ColorWheel" :class="{ 'is-disabled': disabled }">
    <svg
      class="spectrum-ColorWheel-wheel"
      viewBox="0 0 160 160"
      aria-hidden="true"
    >
      <defs>
        <mask id="mask">
          <circle cx="80" cy="80" r="80" fill="white" />
          <circle cx="80" cy="80" r="56" fill="black" />
        </mask>
      </defs>
      <g class="spectrum-ColorWheel-segment" mask="url(#mask)">
        <rect
          v-for="(_, i) in rad"
          :key="i"
          width="80"
          height="2"
          x="80"
          y="79"
          :fill="`hsl(${i}, 100%, 50%)`"
          :transform="`rotate(${i} 80 80)`"
        />
      </g>
      <circle
        cx="80"
        cy="80"
        r="79.5"
        class="spectrum-ColorWheel-outerCircle"
        mask="url(#mask)"
      />
      <circle cx="80" cy="80" r="56" class="spectrum-ColorWheel-innerCircle" />
    </svg>

    <div
      class="spectrum-ColorHandle spectrum-ColorWheel-handle"
      :style="handleStyle"
    >
      <div
        class="spectrum-ColorHandle-color"
        style="background-color: rgb(255, 0, 0)"
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
      class="spectrum-ColorWheel-slider"
      aria-label="hue"
      min="0"
      max="360"
      step="`"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class SpColorWheel extends Vue {
  @Prop({ default: 0 }) x!: number;
  @Prop({ default: false }) disabled!: boolean;
  get rad() {
    return new Array(360);
  }

  get handleStyle(): Partial<CSSStyleDeclaration> {
    const x = 67.5 * Math.cos(this.x);
    const y = 67.5 * Math.sin(this.x);
    return `transform: translate(${x}px, ${y}px)`;
  }
}
</script>