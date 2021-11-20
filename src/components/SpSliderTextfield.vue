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
      class="spectrum-Textfield-input slider-text-field"
      type="number"
      :step="step"
      :style="style"
      :value="value"
      :disabled="disabled"
      :placeholder="placeholder"
      :min="min"
      :max="max"
      v-bind="$attrs"
      @change="change"
      @input="change"
      @focus="(e) => $emit('focus', e)"
      @blur="(e) => $emit('blur', e)"
      @keydown="(e) => $emit('keydown', e)"
      @pointerdown="(e) => pointerdown(e)"
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
import addDragEventOnce from "../utils/addDragEventOnce";

@Component({})
export default class SpSliderTextfield extends Vue {
  @Prop({ default: false }) disabled!: boolean;
  @Prop({ default: "" }) value!: number;
  @Prop({ default: false }) invalid!: boolean;
  @Prop({ default: false }) valid!: boolean;
  @Prop({ default: false }) quiet!: boolean;
  @Prop({ default: 0 }) step!: number;
  @Prop({ default: 1 }) scale!: number;
  @Prop() min!: number | undefined;
  @Prop() max!: number | undefined;
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

  change(e: InputEvent) {
    const el = e.target as HTMLInputElement;
    let v = Number.parseFloat(el.value);
    this.emitValue(v);
  }

  emitValue(newV: number) {
    if (this.max && newV > this.max) {
      this.$emit("change", this.max);
    } else if (this.min && newV < this.min) {
      this.$emit("change", this.min);
    } else {
      this.$emit("change", newV);
    }
  }

  pointerdown(_: PointerEvent) {
    addDragEventOnce((e) => {
      if (e instanceof MouseEvent) {
        let v = this.value;
        if (typeof this.value == "string") {
          v = Number.parseFloat(this.value);
        }
        let newV = v + e.movementX * this.scale;
        this.emitValue(newV);
      }
    });
  }
}
</script>