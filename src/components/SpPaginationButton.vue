<template>
  <nav class="spectrum-SplitButton spectrum-SplitButton--left">
    <a
      href="#"
      class="
        spectrum-Button
        spectrum-SplitButton-trigger
        spectrum-Pagination-prevButton
      "
      :class="['spectrum-Button--' + type, 'spectrum-Button--size' + size]"
      @click="(e) => $emit('clickPrev', e)"
    >
      <svg
        class="spectrum-Icon spectrum-UIIcon-ChevronLeft100"
        focusable="false"
        aria-hidden="true"
        aria-label="ChevronLeft"
      >
        <use xlink:href="#spectrum-css-icon-Chevron100" />
      </svg>
    </a>
    <a
      href="#"
      class="
        spectrum-Button
        spectrum-SplitButton-action
        spectrum-Pagination-nextButton
      "
      :class="['spectrum-Button--' + type, 'spectrum-Button--size' + size]"
      @click="$emit((e) => 'clickNext', e)"
    >
      <span class="spectrum-Button-label">Next</span>
      <svg
        class="spectrum-Icon spectrum-UIIcon-ChevronRight100"
        focusable="false"
        aria-hidden="true"
        aria-label="ChevronLeft"
      >
        <use xlink:href="#spectrum-css-icon-Chevron100" />
      </svg>
    </a>
  </nav>
</template>
<style>
@import "@spectrum-css/pagination";
</style>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class SpPaginationButton extends Vue {
  @Prop({ default: "cta" }) type!: string;
  @Prop({ default: "M" }) size!: string;
}
</script>