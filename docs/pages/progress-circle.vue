<template>
  <component-view
    name="ProgressCircle"
    :propData="propData"
    :eventData="eventData"
  >
    <sp-progress-circle></sp-progress-circle>
    <sp-progress-circle :value="30"></sp-progress-circle>
    <sp-progress-circle :value="50"></sp-progress-circle>
    <sp-progress-circle :value="80"></sp-progress-circle>
    <sp-progress-circle :indeterminate="true"></sp-progress-circle>
  </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class ProgressCirclePage extends Vue {
  propData = [];
  eventData = [];
}
</script>
