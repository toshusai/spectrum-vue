<template>
  <li class="spectrum-Breadcrumbs-item">
    <button
      v-if="nested"
      class="spectrum-ActionButton spectrum-ActionButton--sizeM spectrum-ActionButton--quiet"
    >
      <svg
        class="spectrum-Icon spectrum-Icon--sizeM spectrum-Breadcrumbs-folder"
        focusable="false"
        aria-hidden="true"
      >
        <use xlink:href="#spectrum-icon-18-FolderOpen" />
      </svg>
    </button>
    <div
      v-else
      class="spectrum-Breadcrumbs-itemLink"
      :class="{
        'is-dragged' : dragged,
        'is-disabled': disabled
      }"
      role="link"
      tabindex="0"
    >
      <slot />
    </div>
    <svg
      v-if="chevron"
      class="spectrum-Icon spectrum-UIIcon-ChevronRight75 spectrum-Breadcrumbs-itemSeparator"
      focusable="false"
      aria-hidden="true"
    >
      <use xlink:href="#spectrum-css-icon-Chevron75" />
    </svg>
  </li>
</template>
<style>
@import "@spectrum-css/breadcrumb";
</style>
<script lang="ts">
import Vue from "vue";
import { Component, Prop }from "vue-property-decorator";

@Component({})
export default class SpBreadcrumbs extends Vue {
  @Prop({ default: true}) chevron!: boolean
  @Prop({ default: false }) nested!: boolean
  @Prop({ default: false }) dragged!: boolean
  @Prop({ default: false }) disabled!: boolean
}
</script>