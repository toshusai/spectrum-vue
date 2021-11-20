<template>
  <div class="spectrum-Form-item">
    <div
      class="spectrum-HelpText"
      :class="[
        'spectrum-HelpText--' + type,
        'spectrum-HelpText--size' + size,
        disabled ? 'is-disabled' : '',
      ]"
    >
      <svg
        v-if="alert"
        class="
          spectrum-Icon spectrum-Icon--sizeM
          spectrum-HelpText-validationIcon
        "
        focusable="false"
        aria-hidden="true"
      >
        <use xlink:href="#spectrum-icon-18-Alert" />
      </svg>
      <div class="spectrum-HelpText-text">
        <slot />
      </div>
    </div>
  </div>
</template>
<style>
@import "@spectrum-css/helptext";
</style>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class SpHelpText extends Vue {
  @Prop({ default: "M" }) size!: string;
  // natural or negative
  @Prop({ default: "natural" }) type!: string;
  @Prop({ default: false }) alert!: boolean;
  @Prop({ default: false }) disabled!: boolean;
}
</script>