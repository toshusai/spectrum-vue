<template>
  <div :class="cssClass">
    <slot />
  </div>
</template>

<style>
@import "@spectrum-css/actiongroup";
</style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component({})
export default class SpActionButton extends Vue {
  @Prop({ default: false })
  quiet!: boolean;

  @Prop({ default: false })
  vertical!: boolean;

  @Prop({ default: false })
  compact!: boolean;

  get cssClass() {
    return [
      "spectrum-ActionGroup",
      this.quiet ? "spectrum-ActionGroup--quiet" : "",
      this.vertical ? "spectrum-ActionGroup--vertical" : "",
      this.compact ? "spectrum-ActionGroup--compact" : "",
    ];
  }
}
</script>