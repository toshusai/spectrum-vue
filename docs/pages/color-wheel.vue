<template>
  <component-view
    name="ColorWheel"
    :propData="propData"
    :eventData="eventData"
    :slotData="slotData"
  >
  </component-view>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class ColorWheelPage extends Vue {
  propData = [
    { prop: "x", type: "number", default: "0" },
    { prop: "disabled", type: "boolean", default: "false" },
  ];
  slotData = [];
  eventData = [];
}
</script>
