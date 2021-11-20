<template>
  <component-view name="TreeItem" :propData="propData" :eventData="eventData">
    <sp-tree-item></sp-tree-item>
  </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class TreeItemPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
