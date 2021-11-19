<template>
  <button
    class="spectrum-Picker spectrum-Picker--sizeM"
    aria-haspopup="listbox"
    style="width: 240px"
  >
    <span class="spectrum-Picker-label is-placeholder">
      <slot />
    </span>
    <svg
      class="
        spectrum-Icon spectrum-UIIcon-ChevronDown100 spectrum-Picker-menuIcon
      "
      focusable="false"
      aria-hidden="true"
    >
      <use xlink:href="#spectrum-css-icon-Chevron100" />
    </svg>
  </button>
</template>
<style>
@import "@spectrum-css/picker";
</style>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({})
export default class SpPicker extends Vue {}
</script>