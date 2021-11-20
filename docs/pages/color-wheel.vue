<template>
  <component-view name="ColorWheel" :propData="propData" :eventData="eventData">
    <sp-color-wheel></sp-color-wheel>
  </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class ColorWheelPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
