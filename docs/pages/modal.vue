<template>
  <component-view
    name="Modal"
    :propData="propData"
    :eventData="eventData"
    :slotData="slotData"
  >
  </component-view>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class ModalPage extends Vue {
  propData = [{ prop: "isOpen", type: "boolean", default: "false" }];
  slotData = [{ name: "default" }];
  eventData = [];
}
</script>
