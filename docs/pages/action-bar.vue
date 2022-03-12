<template>
  <component-view
    name="ActionBar"
    :propData="propData"
    :eventData="eventData"
    :slotData="slotData"
  >
  </component-view>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class ActionBarPage extends Vue {
  propData = [];
  slotData = [];
  eventData = [];
}
</script>
