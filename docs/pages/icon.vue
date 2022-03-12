<template>
  <component-view
    name="Icon"
    :propData="propData"
    :eventData="eventData"
    :slotData="slotData"
  >
  </component-view>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class IconPage extends Vue {
  propData = [
    { prop: "name", type: "string", default: '""' },
    { prop: "size", type: "string", default: '"M"' },
  ];
  slotData = [];
  eventData = [];
}
</script>
