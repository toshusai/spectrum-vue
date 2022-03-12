<template>
  <component-view
    name="Menu"
    :propData="propData"
    :eventData="eventData"
    :slotData="slotData"
  >
  </component-view>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class MenuPage extends Vue {
  propData = [];
  slotData = [{ name: "default" }];
  eventData = [];
}
</script>
