<template>
  <div
    class="spectrum-Textfield"
    :class="cssClass"
  >
    <svg
      v-if="valid"
      class="
        spectrum-Icon
        spectrum-UIIcon-Checkmark100
        spectrum-Textfield-validationIcon
      "
      focusable="false"
      aria-hidden="true"
    >
      <use xlink:href="#spectrum-css-icon-Checkmark100" />
    </svg>

    <svg
      v-else-if="error || invalid"
      class="
        spectrum-Icon spectrum-Icon--sizeM
        spectrum-Textfield-validationIcon
      "
      focusable="false"
      aria-hidden="true"
    >
      <use xlink:href="#spectrum-icon-18-Alert" />
    </svg>

    <input
      ref="inputEl"
      class="spectrum-Textfield-input"
      :type="type"
      :step="step"
      :style="style"
      :value="value"
      :disabled="disabled"
      :placeholder="placeholder"
      @change="(e) => $emit('change', e.target.value, e)"
      @input="(e) => $emit('input', e.target.value)"
      @focus="(e) => $emit('focus', e)"
      @blur="(e) => $emit('blur', e)"
      @keydown="(e) => $emit('keydown', e)"
    >
  </div>
</template>

<style>
@import "@spectrum-css/textfield";
@import "@spectrum-css/icon";
@import "@spectrum-css/helptext";
</style>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Ref } from "vue-property-decorator";

@Component({})
export default class SpTextfield extends Vue {
  @Prop({ default: false }) disabled!: boolean;
  @Prop({ default: "" }) value!: string | number;
  @Prop({ default: false }) invalid!: boolean;
  @Prop({ default: false }) valid!: boolean;
  @Prop({ default: false }) quiet!: boolean;
  @Prop({ default: "text" }) type!: string;
  @Prop({ default: 1 }) step!: number;
  @Prop({ default: "" }) error!: string;
  @Prop({ default: "" }) hint!: string;
  @Prop({ default: "" }) placeholder!: string;
  @Prop({ default: "M" }) size!: string;
  @Ref() inputEl!: HTMLInputElement;

  get inputE() {
    return this.inputEl;
  }

  get style(): Partial<CSSStyleDeclaration> {
    let height = 0;
    if (this.size == "M") return {};
    else if (this.size == "S") height = 24;
    return {
      height: height + "px",
      fontSize: height / 2 + "px",
    };
  }
  get cssClass() {
    return {
      "is-invalid": this.error,
      "is-valid": this.valid,
      "is-disabled": this.disabled,
      "spectrum-Textfield--quiet": this.quiet,
    };
  }
}
</script>