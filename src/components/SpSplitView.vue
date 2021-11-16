<template>
  <div
    class="spectrum-SplitView"
    :class="
      vertical
        ? 'spectrum-SplitView--vertical'
        : 'spectrum-SplitView--horizontal'
    "
  >
    <slot />
  </div>
</template>

<style>
@import "@spectrum-css/splitview";
</style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component({})
export default class SpSplitView extends Vue {
  @Prop({ default: false }) vertical!: boolean;
}
</script>