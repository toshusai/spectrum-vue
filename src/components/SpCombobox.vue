<template>
  <div
    class="spectrum-InputGroup"
    :class="[
      quiet ? 'spectrum-InputGroup--quiet' : '',
      invalid ? 'is-invalid' : '',
    ]"
  >
    <div
      class="spectrum-Textfield spectrum-InputGroup-textfield"
      :class="[
        disabled ? 'is-disabled' : '',
        invalid ? 'is-invalid' : '',
        quiet ? ' spectrum-Textfield--quiet' : '',
      ]"
    >
      <svg
        v-if="invalid"
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
        v-bind="$attrs"
        type="text"
        class="spectrum-Textfield-input spectrum-InputGroup-input"
        :disabled="disabled"
      />
    </div>
    <button
      tabindex="-1"
      class="
        spectrum-PickerButton
        spectrum-PickerButton--sizeM
        spectrum-PickerButton--uiicononly
        spectrum-PickerButton--high
        spectrum-PickerButton--right
        spectrum-InputGroup-button
      "
      :class="[invalid ? 'is-invalid' : '', isOpen ? 'is-open' : '']"
      aria-haspopup="listbox"
      :disabled="disabled"
    >
      <div class="spectrum-PickerButton-fill">
        <svg
          class="
            spectrum-PickerButton-UIIcon
            spectrum-Icon
            spectrum-UIIcon-ChevronDown200
          "
          focusable="false"
          aria-hidden="true"
        >
          <use xlink:href="#spectrum-css-icon-Chevron200" />
        </svg>
      </div>
    </button>
    <div
      class="spectrum-Popover spectrum-Popover--bottom"
      :class="{ 'is-open': isOpen }"
      style="position: absolute; top: 100%; left: 0; width: 100%"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class SpCombobox extends Vue {
  isOpen: boolean = false;
  @Prop({ default: false }) disabled!: boolean;
  @Prop({ default: false }) quiet!: boolean;
  @Prop({ default: false }) invalid!: boolean;
}
</script>