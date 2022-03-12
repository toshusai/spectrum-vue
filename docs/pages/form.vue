<template>
  <component-view
    name="Form"
    :propData="propData"
    :eventData="eventData"
    :slotData="slotData"
  >
  </component-view>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class FormPage extends Vue {
  propData = [{ prop: "labelsAbove", type: "boolean", default: "false" }];
  slotData = [{ name: "default" }];
  eventData = [];
}
</script>
