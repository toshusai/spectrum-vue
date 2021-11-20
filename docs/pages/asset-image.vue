<template>
  <component-view name="AssetImage" :propData="propData" :eventData="eventData">
    <sp-asset-image></sp-asset-image>
  </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class AssetImagePage extends Vue {
  propData = [];
  eventData = [];
}
</script>
