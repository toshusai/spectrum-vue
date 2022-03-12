<template>
  <component-view
    name="FieldGroup"
    :propData="propData"
    :eventData="eventData"
    :slotData="slotData"
  >
  </component-view>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class FieldGroupPage extends Vue {
  propData = [{ prop: "horizontal", type: "boolean", default: "true" }];
  slotData = [{ name: "default" }];
  eventData = [];
}
</script>
