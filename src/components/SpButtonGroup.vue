<template>
  <div
    class="spectrum-ButtonGroup"
    :class="[
      vertical ? 'spectrum-ButtonGroup--vertical' : '',
      dialog ? 'spectrum-Dialog-buttonGroup' : '',
      dialog ? 'spectrum-Dialog-buttonGroup--noFooter' : '',
    ]"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class SpButtonGroup extends Vue {
  @Prop({ default: false }) vertical!: boolean;
  @Prop({ default: false }) dialog!: boolean;
}
</script>