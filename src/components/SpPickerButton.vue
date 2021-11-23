<template>
  <button
    class="
      spectrum-PickerButton
      spectrum-PickerButton--sizeM
      spectrum-PickerButton--textuiicon
      spectrum-PickerButton--high
      spectrum-PickerButton--right
    "
    aria-haspopup="listbox"
  >
    <div class="spectrum-PickerButton-fill">
      <span class="spectrum-PickerButton-label is-placeholder">
        <slot />
      </span>
      <svg
        class="
          spectrum-PickerButton-UIIcon
          spectrum-Icon
          spectrum-UIIcon-ChevronDown100
        "
        focusable="false"
        aria-hidden="true"
      >
        <use xlink:href="#spectrum-css-icon-Chevron100" />
      </svg>
    </div>
  </button>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({})
export default class SpPickerButton extends Vue {}
</script>