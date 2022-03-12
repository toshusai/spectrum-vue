<template>
  <component-view
    name="SliderTextfield"
    :propData="propData"
    :eventData="eventData"
    :slotData="slotData"
  >
  </component-view>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class SliderTextfieldPage extends Vue {
  propData = [
    { prop: "disabled", type: "boolean", default: "false" },
    { prop: "value", type: "number", default: '""' },
    { prop: "invalid", type: "boolean", default: "false" },
    { prop: "valid", type: "boolean", default: "false" },
    { prop: "quiet", type: "boolean", default: "false" },
    { prop: "step", type: "number", default: "0" },
    { prop: "scale", type: "number", default: "1" },
    { prop: "error", type: "string", default: '""' },
    { prop: "hint", type: "string", default: '""' },
    { prop: "placeholder", type: "string", default: '""' },
    { prop: "size", type: "string", default: '"M"' },
  ];
  slotData = [];
  eventData = [];
}
</script>
