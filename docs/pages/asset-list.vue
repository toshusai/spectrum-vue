<template>
  <component-view name="AssetList" :propData="propData" :eventData="eventData">
    <sp-asset-list></sp-asset-list>
  </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class AssetListPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
