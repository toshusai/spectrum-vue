<template>
  <div style="position: relative; display: inline-block">
    <button
      class="spectrum-ActionButton spectrum-ActionButton--quiet"
      :class="btnClass"
      @click="open"
    >
      <svg
        v-if="icon"
        class="spectrum-Icon"
        :class="`spectrum-Icon--size` + size"
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
            <slot
              v-if="!!$scopedSlots.item || !!$slots.item"
              :item="item"
              name="item"
            />
            <template v-else>
              {{ item.text }}
            </template>
          </span>
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
export default class SpActionMenu extends Vue {
  isOpen: boolean = false;
  @Prop({ default: () => [] }) items!: MenuItem[];
  @Prop({ default: true }) icon!: boolean;
  @Prop({ default: "M" }) size!: string;

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
    return [
      this.isOpen ? "is-selected" : "",
      "spectrum-ActionButton--size" + this.size,
    ];
  }
}
/**
<h3>Standard</h3>
<code>
<sp-action-menu :items="items"></sp-action-menu>
<sp-action-menu :items="items">ActionMenu</sp-action-menu>
</code>
<h3>size</h3>
<code>
<sp-action-menu :items="items" size="S"></sp-action-menu>
<sp-action-menu :items="items" size="S">Size S</sp-action-menu>
</code>
<h3>slot item</h3>
<code>
<sp-action-menu :items="items">
  <template #item="{ item }">
    <div style="white-space: nowrap">
      <sp-icon name="Image" />
      {{ item.text }}
    </div>
  </template>
</sp-action-menu>
</code>
 */
</script>