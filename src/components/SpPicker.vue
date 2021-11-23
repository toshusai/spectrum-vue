<template>
  <div>
    <button
      class="spectrum-Picker"
      :class="[
        invalid ? 'is-invalid' : '',
        isOpen ? 'is-open' : '',
        'spectrum-Picker--size' + size,
        quiet ? 'spectrum-Picker--quiet' : '',
      ]"
      aria-haspopup="listbox"
      :disabled="disabled"
      @click="open"
    >
      <span class="spectrum-Picker-label is-placeholder">
        <slot />
      </span>
      <svg
        v-if="invalid"
        class="
          spectrum-Icon spectrum-Icon--sizeM
          spectrum-Picker-validationIcon
        "
        focusable="false"
        aria-hidden="true"
        aria-label="Alert"
      >
        <use xlink:href="#spectrum-icon-18-Alert" />
      </svg>
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
    <div
      class="spectrum-Popover spectrum-Popover--bottom spectrum-Picker-popover"
      :class="{ 'is-open': isOpen }"
    >
      <ul
        class="spectrum-Menu"
        role="listbox"
      >
        <li
          v-for="(item, i) in items"
          :key="i"
          class="spectrum-Menu-item is-selected"
          :class="item == selected ? `is-selected` : ``"
          role="option"
          aria-selected="true"
          tabindex="0"
        >
          <span class="spectrum-Menu-itemLabel">
            {{ item.text }}
          </span>
          <svg
            v-if="selected == item"
            class="
              spectrum-Icon
              spectrum-UIIcon-Checkmark100
              spectrum-Menu-checkmark
              spectrum-Menu-itemIcon
            "
            focusable="false"
            aria-hidden="true"
          >
            <use xlink:href="#spectrum-css-icon-Checkmark100" />
          </svg>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import MenuItem from "../utils/MenuItem";

@Component({})
export default class SpPicker extends Vue {
  @Prop({ default: () => [] }) items!: MenuItem[];
  @Prop({}) selected!: MenuItem;
  @Prop({ default: false }) disabled!: boolean;
  @Prop({ default: false }) invalid!: boolean;
  @Prop({ default: "M" }) size!: string;
  @Prop({ default: false }) quiet!: boolean;
  isOpen: boolean = false;

  open(e: Event) {
    this.isOpen = true;
    const close = (e: Event) => {
      if (this.$el.contains(e.target as HTMLElement)) return;
      this.isOpen = false;
      document.removeEventListener("pointerdown", close);
    };
    document.addEventListener("pointerdown", close);
    this.$emit("click", e);
  }
}
</script>