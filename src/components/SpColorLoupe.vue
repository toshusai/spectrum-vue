<template>
  <svg class="spectrum-ColorLoupe is-open">
    <g transform="translate(1 1)">
      <path
        class="spectrum-ColorLoupe-inner"
        d="M24,0A24,24,0,0,1,48,24c0,16.255-24,40-24,40S0,40.255,0,24A24,24,0,0,1,24,0Z"
        :fill="fill"
      />
      <path
        class="spectrum-ColorLoupe-outer"
        d="M24,2A21.98,21.98,0,0,0,2,24c0,6.2,4,14.794,11.568,24.853A144.233,144.233,0,0,0,24,61.132,144.085,144.085,0,0,0,34.4,48.893C41.99,38.816,46,30.209,46,24A21.98,21.98,0,0,0,24,2m0-2A24,24,0,0,1,48,24c0,16.255-24,40-24,40S0,40.255,0,24A24,24,0,0,1,24,0Z"
      />
    </g>
  </svg>
</template>

<script lang="ts">


import { Vue, Component, Prop } from "vue-property-decorator";
import Color from "../utils/Color";

@Component({})
export default class SpColorLoupe extends Vue {
  @Prop({ default: new Color() }) color!: Color;
  get fill() {
    return this.color.toCss();
  }
}
</script>