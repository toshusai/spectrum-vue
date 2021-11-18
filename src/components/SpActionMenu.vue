<template>
  <div style="position: relative; display: inline-block">
    <button
      class="
        spectrum-ActionButton
        spectrum-ActionButton--sizeM
        spectrum-ActionButton--quiet
      "
      :class="btnClass"
      @click="open"
    >
      <svg
        v-if="icon"
        class="spectrum-Icon spectrum-Icon--sizeM"
        focusable="false"
        aria-hidden="true"
      >
        <use xlink:href="#spectrum-icon-18-More" />
      </svg>
      <span class="spectrum-ActionButton-label">
        <slot />
      </span>
    </button>
    <div
      class="spectrum-Popover spectrum-Popover--bottom"
      :class="{ 'is-open': isOpen }"
      style="position: absolute; top: 100%; left: 0; z-index: 100"
    >
      <ul
        class="spectrum-Menu"
        role="menu"
      >
        <li
          v-for="(item, i) in items"
          :key="i"
          class="spectrum-Menu-item"
          role="menuitem"
          tabindex="0"
          @click="(e) => clickItem(e, item)"
        >
          <span class="spectrum-Menu-itemLabel">
            {{ item.text }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
<style>
@import "@spectrum-css/actionmenu";
</style>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { MenuItem } from "../utils/MenuItem";

@Component({})
export default class SpActionMenu extends Vue {
  isOpen: boolean = false;
  @Prop({ default: () => [] }) items!: MenuItem[];
  @Prop({ default: true }) icon!: boolean;

  open() {
    this.isOpen = true;
    const close = (e: Event) => {
      if (this.$el.contains(e.target as HTMLElement)) return;
      this.isOpen = false;
      document.removeEventListener("pointerdown", close);
    };
    document.addEventListener("pointerdown", close);
  }

  clickItem(e: Event, item: MenuItem) {
    item.action(e);
    this.isOpen = false;
  }

  get btnClass() {
    return {
      "is-selected": this.isOpen,
    };
  }
}
</script>