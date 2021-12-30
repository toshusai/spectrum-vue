<template>
  <div :class="cssClass">
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
      v-else-if="invalid"
      class="
        spectrum-Icon spectrum-Icon--sizeM
        spectrum-Textfield-validationIcon
      "
      focusable="false"
      aria-hidden="true"
    >
      <use xlink:href="#spectrum-icon-18-Alert" />
    </svg>
    <textarea
      :placeholder="placeholder"
      :value="value"
      :disabled="disabled"
      class="spectrum-Textfield-input"
      :style="style"
      @change="(e) => $emit('change', e.target.value)"
      @input="(e) => $emit('input', e.target.value)"
    />
  </div>
</template>

<script lang="ts">


import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class SpTextarea extends Vue {
  @Prop({ default: false }) disabled!: boolean;
  @Prop({ default: "" }) value!: string | number;
  @Prop({ default: false }) invalid!: boolean;
  @Prop({ default: false }) valid!: boolean;
  @Prop({ default: false }) quiet!: boolean;
  @Prop({ default: "" }) placeholder!: string;
  @Prop({ default: "" }) resize!: string;

  get style(): Partial<CSSStyleDeclaration> {
    return {
      resize: this.resize,
    };
  }

  get cssClass() {
    return {
      "spectrum-Textfield": true,
      "spectrum-Textfield--multiline": true,
      "is-invalid": this.invalid,
      "is-valid": this.valid,
      "is-disabled": this.disabled,
      "spectrum-Textfield--quiet": this.quiet,
    };
  }
}
</script>