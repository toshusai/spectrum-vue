<template>
  <div
    class="spectrum-Popover spectrum-Popover--bottom"
    :class="cssClass"
    :style="style"
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
      >
        <span class="spectrum-Menu-itemLabel">{{ item.text }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import MenuItem from "../utils/MenuItem";

@Component({})
export default class SpContextMenu extends Vue {
  @Prop({ default: () => [] }) items!: MenuItem[];

  isOpen = false;
  style: Partial<CSSStyleDeclaration> = {
    position: "fixed",
  };

  get cssClass() {
    return {
      "is-open": this.isOpen,
    };
  }

  open(e: Event) {
    this.isOpen = true;
    if (e instanceof MouseEvent) {
      this.style.left = e.clientX + "px";
      this.style.top = e.clientY + "px";
    }
    const close = (e: Event) => {
      if (this.$el.contains(e.target as HTMLElement)) return;
      this.isOpen = false;
      document.removeEventListener("pointerdown", close);
    };
    document.addEventListener("pointerdown", close);
  }
}
</script>