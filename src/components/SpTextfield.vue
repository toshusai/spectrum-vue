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
      @change="change"
      @input="input"
      @focus="(e) => $emit('focus', e)"
      @blur="(e) => $emit('blur', e)"
      @keydown="(e) => $emit('keydown', e)"
    >
  </div>
</template>



<script lang="ts">
import { Vue, Component, Prop, Ref } from "vue-property-decorator";

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

  changeOrInput(key: string, e: InputEvent) {
    const el = e.target as HTMLInputElement;
    if (this.type == "number") {
      this.$emit(key, Number.parseFloat(el.value), e);
      return;
    }
    this.$emit(key, el.value, e);
  }

  input(e: InputEvent) {
    this.changeOrInput("input", e);
  }

  change(e: InputEvent) {
    this.changeOrInput("change", e);
  }
}
/**
<h3>Standard</h3>
<code>
<sp-textfield placeholder="default" />
<sp-textfield placeholder="default" :valud="true" />
<sp-textfield placeholder="default" hint="Hint" />
<sp-textfield placeholder="default" error="Error" />
<sp-textfield placeholder="default" :disabled="true" />
</code>
<h3>Quiet</h3>
<code>
<sp-textfield placeholder="default" :quiet="true" />
<sp-textfield placeholder="default" :valud="true" :quiet="true" />
<sp-textfield placeholder="default" hint="Hint" :quiet="true" />
<sp-textfield placeholder="default" error="Error" :quiet="true" />
<sp-textfield placeholder="default" :disabled="true" :quiet="true" />
</code>
 */
</script>