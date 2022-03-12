<template>
  <component-view
    name="HintTextfield"
    :propData="propData"
    :eventData="eventData"
    :slotData="slotData"
  >
  </component-view>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class HintTextfieldPage extends Vue {
  propData = [
    { prop: "disabled", type: "boolean", default: "false" },
    { prop: "value", type: "string | number", default: '""' },
    { prop: "invalid", type: "boolean", default: "false" },
    { prop: "valid", type: "boolean", default: "false" },
    { prop: "quiet", type: "boolean", default: "false" },
    { prop: "type", type: "string", default: '"text"' },
    { prop: "step", type: "number", default: "1" },
    { prop: "error", type: "string", default: '""' },
    { prop: "hint", type: "string", default: '""' },
    { prop: "placeholder", type: "string", default: '""' },
  ];
  slotData = [];
  eventData = [];
}
</script>
