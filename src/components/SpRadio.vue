<template>
  <div
    class="spectrum-Radio"
    :class="cssClass"
  >
    <input
      :id="id"
      type="radio"
      v-bind="$attrs"
      class="spectrum-Radio-input"
      :checked="checked"
    >
    <span class="spectrum-Radio-button" />
    <label
      class="spectrum-Radio-label"
      :for="id"
    >
      <slot />
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class SpRadio extends Vue {
  @Prop({ default: "" }) id!: string;
  @Prop({ default: false }) checked!: boolean;
  @Prop({ default: "M" }) size!: string;
  @Prop({ default: false }) disabled!: boolean;
  @Prop({ default: false }) emphasized!: boolean;
  @Prop({ default: false }) invalid!: boolean;
  @Prop({ default: false }) labelBelow!: boolean;

  get cssClass() {
    return [
      this.emphasized ? "spectrum-Radio--emphasized" : "",
      this.invalid ? "is-invalid" : "",
      this.disabled ? "is-disabled" : "",
      this.labelBelow ? "spectrum-Radio--labelBelow" : "",
      "spectrum-Checkbox--size" + this.size,
    ];
  }
}
</script>