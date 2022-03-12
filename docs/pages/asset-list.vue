<template>
  <component-view
    name="AssetList"
    :propData="propData"
    :eventData="eventData"
    :slotData="slotData"
  >
  </component-view>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class AssetListPage extends Vue {
  propData = [];
  slotData = [];
  eventData = [];
}
</script>
