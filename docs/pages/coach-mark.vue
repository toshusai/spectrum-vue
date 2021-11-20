<template>
  <component-view name="CoachMark" :propData="propData" :eventData="eventData">
    <sp-coach-mark></sp-coach-mark>
  </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class CoachMarkPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
