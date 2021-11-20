<template>
  <component-view
    name="ColorSlider"
    :propData="propData"
    :eventData="eventData"
  >
    <h4>Hue</h4>
    <sp-color-slider :h="h" @change="changeH" />
    <div>
      {{ h }}
    </div>

    <h4>Alpha</h4>
    <sp-color-slider :h="a" :alpha="true" @change="changeA" />
    <div>
      {{ a }}
    </div>
  </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class index extends Vue {
  propData = [
    {
      prop: "h",
      type: "number",
      default: "0",
      description: "h is 0 - 360. if enable alpha, h is 0.0-1.0",
    },
    {
      prop: "alpha",
      type: "boolean",
      default: "false",
      description: "",
    },
  ];

  eventData = [{ event: "change", arg: "number" }];

  h = 0;
  a = 0;
  changeA(a: number) {
    this.a = a;
  }

  changeH(h: number) {
    this.h = h;
  }
}
</script>
