<template>
  <button
    :class="cssClass"
    :disabled="disabled"
    @click="click"
    @pointerdown="pointerdown"
  >
    <svg
      v-if="corner"
      class="
        spectrum-Icon
        spectrum-UIIcon-CornerTriangle100
        spectrum-ActionButton-hold
      "
      focusable="false"
      aria-hidden="true"
    >
      <use xlink:href="#spectrum-css-icon-CornerTriangle100" />
    </svg>
    <slot />
  </button>
</template>

<style>
@import "@spectrum-css/actionbutton";
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
  item!: boolean;

  @Prop({ default: false })
  corner!: boolean;

  @Prop({ default: false })
  selected!: boolean;

  @Prop({ default: false })
  emphasized!: boolean;

  @Prop({ default: false })
  disabled!: boolean;

  @Prop({ default: "M" })
  size!: string;

  get cssClass() {
    return [
      "spectrum-ActionButton",
      "spectrum-ActionButton--size" + this.size,
      this.quiet ? "spectrum-ActionButton--quiet" : "",
      this.item ? "spectrum-ActionGroup-item" : "",
      this.emphasized ? "spectrum-ActionButton--emphasized" : "",
      this.selected ? "is-selected" : "",
    ];
  }

  click(e: Event) {
    this.$emit("click", e);
  }

  pointerdown(e: Event) {
    this.$emit("pointerdown", e);
  }
}
</script>