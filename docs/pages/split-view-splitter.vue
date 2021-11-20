<template>
  <component-view
    name="SplitViewSplitter"
    :propData="propData"
    :eventData="eventData"
  >
    <sp-split-view-splitter></sp-split-view-splitter>
  </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class SplitViewSplitterPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
