<template>
  <div
    class="spectrum-CoachMarkIndicator spectrum-CoachMarkIndicator--quiet"
    style="position: absolute"
  >
    <div class="spectrum-CoachMarkIndicator-ring" />
    <div class="spectrum-CoachMarkIndicator-ring" />
    <div class="spectrum-CoachMarkIndicator-ring" />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({})
export default class SpCoachMark extends Vue {}
</script>