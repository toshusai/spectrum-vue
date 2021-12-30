<template>
  <div class="spectrum-SplitView-pane">
    <slot />
  </div>
</template>



<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class SpSplitViewPane extends Vue {}
</script>