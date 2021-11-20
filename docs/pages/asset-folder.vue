<template>
  <component-view
    name="AssetFolder"
    :propData="propData"
    :eventData="eventData"
  >
    <sp-asset-folder></sp-asset-folder>
  </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class AssetFolderPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
