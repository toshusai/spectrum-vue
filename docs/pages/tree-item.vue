<template>
  <component-view
    name="TreeItem"
    :propData="propData"
    :eventData="eventData"
    :slotData="slotData"
  >
  </component-view>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class TreeItemPage extends Vue {
  propData = [
    { prop: "hideRoot", type: "boolean", default: "true" },
    { prop: "isRoot", type: "boolean", default: "true" },
    { prop: "thumbnail", type: "boolean", default: "false" },
  ];
  slotData = [];
  eventData = [];
}
</script>
