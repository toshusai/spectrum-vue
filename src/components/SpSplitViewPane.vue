<template>
  <div class="spectrum-SplitView-pane">
    <slot />
  </div>
</template>

<style>
@import "@spectrum-css/splitview";
</style>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({})
export default class SpSplitViewPane extends Vue {}
</script>