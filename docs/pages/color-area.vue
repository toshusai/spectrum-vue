<template>
  <component-view name="ColorArea" :propData="propData" :eventData="eventData">
    <sp-color-area :color="color" @change="changeColor" />
    <div>{{ color }}</div>
  </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Color } from "@toshusai/spectrum-vue";

@Component({})
export default class index extends Vue {
  color = new Color();

  propData = [
    { prop: "color", type: "Color", default: "new Color()" },
    { prop: "h", type: "number", default: "0" },
  ];

  eventData = [{ event: "change", arg: "Color" }];

  changeColor(c: Color) {
    this.color = c;
  }
}
</script>