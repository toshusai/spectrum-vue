<template>
  <component-view
    name="TextArea"
    :propData="propData"
    :eventData="eventData"
    :slotData="slotData"
  >
  </component-view>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class TextAreaPage extends Vue {
  propData = [
    { prop: "disabled", type: "boolean", default: "false" },
    { prop: "value", type: "string | number", default: '""' },
    { prop: "invalid", type: "boolean", default: "false" },
    { prop: "valid", type: "boolean", default: "false" },
    { prop: "quiet", type: "boolean", default: "false" },
    { prop: "placeholder", type: "string", default: '""' },
    { prop: "resize", type: "string", default: '""' },
  ];
  slotData = [];
  eventData = [];
}
</script>
