<template>
  <div style="max-width: min-content">
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
        class="spectrum-Textfield-input"
        :type="type"
        :step="step"
        :value="value"
        :disabled="disabled"
        :placeholder="placeholder"
        @change="(e) => $emit('change', e.target.value)"
        @input="(e) => $emit('input', e.target.value)"
      >
    </div>
    <div
      class="spectrum-HelpText spectrum-HelpText--sizeS"
      :class="[
        error
          ? 'spectrum-HelpText--negative'
          : 'spectrum-HelpText--neutral is-disabled',
      ]"
    >
      <div class="spectrum-HelpText-text">
        {{ error || hint }}
      </div>
    </div>
  </div>
</template>

<style>
@import "@spectrum-css/textfield";
@import "@spectrum-css/icon";
@import "@spectrum-css/helptext";
</style>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class SpHintTextfield extends Vue {
  @Prop({ default: false })
  disabled!: boolean;

  @Prop({ default: "" })
  value!: string | number;

  @Prop({ default: false })
  invalid!: boolean;

  @Prop({ default: false })
  valid!: boolean;

  @Prop({ default: false })
  quiet!: boolean;

  @Prop({ default: "text" })
  type!: string;

  @Prop({ default: 1 })
  step!: number;

  @Prop({ default: "" })
  error!: string;

  @Prop({ default: "" })
  hint!: string;

  @Prop({ default: "" })
  placeholder!: string;

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