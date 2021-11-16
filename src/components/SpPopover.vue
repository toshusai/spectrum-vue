<template>
  <div
    class="
      spectrum-Popover spectrum-Popover--right spectrum-Popover--withTip
      spectrum-Popover
    "
    :style="`z-index: 100; top: ${top}px; left: ${left}px`"
    role="presentation"
    :class="[isOpen ? 'is-open' : '']"
  >
    <section
      class="spectrum-Dialog spectrum-Dialog--small"
      style="width: fit-content; min-width: fit-content; margin: 16px"
      role="dialog"
      tabindex="-1"
      aria-modal="true"
    >
      <div
        class="spectrum-Dialog-grid"
        style="display: block"
      >
        <slot />
      </div>
    </section>
    <svg
      idth="12"
      height="23"
      class="spectrum-Popover-tip"
      style="top: 16px"
    >
      <path
        class="spectrum-Popover-tip-triangle"
        d="M 0 0.7071067811865476 L 10.707106781186548 11.414213562373096 L 0 22.121320343559645"
      />
    </svg>
  </div>
</template>

<style>
@import "@spectrum-css/popover";
@import "@spectrum-css/dialog";
</style>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({})
export default class SpPopover extends Vue {
  top = 0;
  left = 0;

  isOpen = false;

  open(el: HTMLElement) {
    if (this.isOpen) {
      this.close();
      document.body.removeEventListener("pointerdown", this.close);
      return;
    }
    const rect = el.getBoundingClientRect();
    this.top = rect.top;
    this.left = rect.left + rect.width;
    this.isOpen = true;

    requestAnimationFrame(() => {
      document.body.addEventListener("pointerdown", this.close);
    });
  }

  close(e?: Event) {
    if (e && e.target && this.$el.contains(e.target as HTMLElement)) return;
    this.isOpen = false;
    document.body.removeEventListener("pointerdown", this.close);
  }
}
</script>