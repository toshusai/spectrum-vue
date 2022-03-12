<template>
  <component-view
    name="Toast"
    :propData="propData"
    :eventData="eventData"
    :slotData="slotData"
  >
  </component-view>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class ToastPage extends Vue {
  propData = [
    { prop: "positive", type: "boolean", default: "false" },
    { prop: "negative", type: "boolean", default: "false" },
    { prop: "info", type: "boolean", default: "false" },
    { prop: "warning", type: "boolean", default: "false" },
    { prop: "removable", type: "boolean", default: "false" },
    { prop: "button", type: "string", default: '""' },
  ];
  slotData = [{ name: "default" }];
  eventData = [];
}
</script>
