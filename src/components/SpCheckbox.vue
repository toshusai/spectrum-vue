<template>
  <label
    class="
      spectrum-Checkbox spectrum-Checkbox--sizeM spectrum-Checkbox--emphasized
    "
  >
    <input
      id="checkbox-0"
      type="checkbox"
      class="spectrum-Checkbox-input"
      :checked="checked"
      @change="$emit('change', !checked)"
    >
    <span class="spectrum-Checkbox-box">
      <svg
        class="
          spectrum-Icon spectrum-UIIcon-Checkmark100 spectrum-Checkbox-checkmark
        "
        focusable="false"
        aria-hidden="true"
      >
        <use xlink:href="#spectrum-css-icon-Checkmark100" />
      </svg>
      <svg
        class="
          spectrum-Icon
          spectrum-UIIcon-Dash100
          spectrum-Checkbox-partialCheckmark
        "
        focusable="false"
        aria-hidden="true"
      >
        <use xlink:href="#spectrum-css-icon-Dash100" />
      </svg>
    </span>
    <span class="spectrum-Checkbox-label">
      <slot />
    </span>
  </label>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class SpCheckbox extends Vue {
  @Prop({ default: false })
  checked!: boolean;
}
</script>