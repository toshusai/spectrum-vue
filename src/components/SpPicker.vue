<template>
  <div>
    <button
      ref="button"
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
      <span
        class="spectrum-Picker-label"
        :class="[value ? '' : 'is-placeholder']"
      >
        <slot v-if="!value" />
        <span v-else>{{ value.text }}</span>
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
      ref="popover"
      class="spectrum-Popover spectrum-Popover--bottom spectrum-Picker-popover"
      :class="{ 'is-open': isOpen }"
      style="position: fixed; z-index: 100"
      :style="popoverStyle"
    >
      <ul
        class="spectrum-Menu"
        role="listbox"
      >
        <li
          v-for="(item, i) in items"
          :key="i"
          class="spectrum-Menu-item"
          :class="value && value.id == item.id ? `is-selected` : ``"
          role="option"
          aria-selected="true"
          tabindex="0"
          @click="(e) => change(e, item)"
        >
          <span class="spectrum-Menu-itemLabel">
            {{ item.text }}
          </span>
          <svg
            v-if="value && value.id == item.id"
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
import Component from "vue-class-component";
import { Prop, Ref } from "vue-property-decorator";
import MenuItem from "../utils/MenuItem";

@Component({})
export default class SpPicker extends Vue {
  @Prop({ default: () => [] }) items!: MenuItem[];
  @Prop({}) value!: MenuItem;
  @Prop({ default: false }) disabled!: boolean;
  @Prop({ default: false }) invalid!: boolean;
  @Prop({ default: "M" }) size!: string;
  @Prop({ default: false }) quiet!: boolean;
  @Prop({ default: () => () => false }) select!: (item: MenuItem) => boolean;
  @Ref() button!: HTMLElement;
  @Ref() popover!: HTMLElement;

  isOpen: boolean = false;

  popoverY : number = 0;

  get popoverStyle(): Partial<CSSStyleDeclaration>{
    return {
      top: this.popoverY + "px"
    }
  }

  change(e: Event, item: MenuItem) {
    this.$emit("change", e, item);
    this.close();
  }

  close(e?: Event) {
    if (e && this.button.contains(e.target as HTMLElement)) return;
    if (e && this.popover.contains(e.target as HTMLElement)) return;
    this.isOpen = false;
    document.removeEventListener("pointerdown", this.close);
  }

  open(e: Event) {
    this.isOpen = true;
    document.addEventListener("pointerdown", this.close);
    this.$emit("click", e);
    const rect =  this.popover.getBoundingClientRect()
    const tr = this.$el.getBoundingClientRect()
    
    if(tr.top + tr.height + rect.height > window.innerHeight){
      this.popoverY =  tr.top- rect.height - 16;
    }else {
      this.popoverY =  tr.top + tr.height 
    }
  }
}
</script>