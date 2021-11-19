<template>
  <button
    v-bind="$attrs"
    :class="cssClass"
    :disabled="disabled"
    @click="(e) => $emit('click', e)"
  >
    <span class="spectrum-Button-label">
      <slot />
    </span>
  </button>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class TimelineLayer extends Vue {
  @Prop({ default: false }) primary!: boolean;
  @Prop({ default: false }) disabled!: boolean;
  @Prop({ default: false }) quiet!: boolean;
  @Prop({ default: false }) group!: boolean;
  @Prop({ default: "M" }) size!: string;
  @Prop({ default: "cta" }) type!: string;

  get cssClass() {
    return [
      "spectrum-Button",
      "spectrum-Button--" + this.type,
      this.quiet ? "spectrum-Button--quiet" : "",
      "spectrum-Button--size" + this.size,
      this.group ? "spectrum-ButtonGroup-item" : "",
    ];
  }
}
</script>