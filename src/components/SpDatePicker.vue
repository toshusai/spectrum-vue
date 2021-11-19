<template>
  <div
    aria-disabled="false"
    aria-invalid="false"
    class="spectrum-InputGroup spectrum-Datepicker"
    aria-readonly="false"
    aria-required="false"
    aria-haspopup="dialog"
  >
    <div class="spectrum-Textfield spectrum-InputGroup-textfield">
      <input
        type="text"
        class="spectrum-Textfield-input spectrum-InputGroup-input"
        aria-invalid="false"
        v-bind="$attrs"
      >
    </div>
    <button
      tabindex="-1"
      class="
        spectrum-PickerButton
        spectrum-PickerButton--sizeM
        spectrum-PickerButton--icononly
        spectrum-PickerButton--high
        spectrum-PickerButton--right
        spectrum-InputGroup-button
      "
      aria-haspopup="dialog"
      aria-label="Calendar"
      aria-expanded="false"
    >
      <div class="spectrum-PickerButton-fill">
        <svg
          class="spectrum-PickerButton-icon spectrum-Icon spectrum-Icon--sizeM"
          focusable="false"
          aria-hidden="true"
          aria-label="Calendar"
        >
          <use xlink:href="#spectrum-icon-18-Calendar" />
        </svg>
      </div>
    </button>
  </div>
</template>
<style>
@import "@spectrum-css/inputgroup";
</style>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({})
export default class SpDatePicker extends Vue {}
</script>