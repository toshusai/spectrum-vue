
<template>
    <component-view
    name="AssetFile"
    :propData="propData"
    :eventData="eventData"
    >
        <asset-file></asset-file>
    </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class AssetFilePage extends Vue {
  propData = [];
  eventData = [];
}
</script>
