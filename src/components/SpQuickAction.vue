<template>
  <div
    class="spectrum-QuickActions"
    :class="[
      textOnly ? 'spectrum-QuickActions--textOnly' : '',
      isOpen ? 'is-open' : '',
    ]"
  >
    <slot />
  </div>
</template>
<style>
@import "@spectrum-css/quickaction";
</style>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class SpQuickAction extends Vue {
  @Prop({ default: false }) isOpen!: boolean;
  @Prop({ default: false }) textOnly!: boolean;
}
</script>