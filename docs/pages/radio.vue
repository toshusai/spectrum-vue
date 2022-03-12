<template>
  <component-view
    name="Radio"
    :propData="propData"
    :eventData="eventData"
    :slotData="slotData"
  >
  </component-view>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class RadioPage extends Vue {
  propData = [
    { prop: "id", type: "string", default: '""' },
    { prop: "checked", type: "boolean", default: "false" },
    { prop: "size", type: "string", default: '"M"' },
    { prop: "disabled", type: "boolean", default: "false" },
    { prop: "emphasized", type: "boolean", default: "false" },
    { prop: "invalid", type: "boolean", default: "false" },
    { prop: "labelBelow", type: "boolean", default: "false" },
  ];
  slotData = [{ name: "default" }];
  eventData = [];
}
</script>
