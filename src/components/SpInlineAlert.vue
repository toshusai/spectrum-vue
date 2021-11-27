<template>
  <div
    class="spectrum-InLineAlert"
    :class="['spectrum-InLineAlert--' + type]"
  >
    <svg
      class="spectrum-Icon spectrum-Icon--sizeM spectrum-InLineAlert-icon"
      focusable="false"
      aria-hidden="true"
    >
      <use
        v-if="type == 'info'"
        xlink:href="#spectrum-icon-18-Info"
      />
      <use
        v-else-if="type == 'success'"
        xlink:href="#spectrum-icon-18-CheckmarkCircle"
      />
      <use
        v-else-if="type == 'negative'"
        xlink:href="#spectrum-icon-18-Alert"
      />
      <use
        v-else-if="type == 'help'"
        xlink:href="#spectrum-icon-18-Help"
      />
      <use
        v-else-if="type == 'error'"
        xlink:href="#spectrum-icon-18-Alert"
      />
    </svg>
    <div class="spectrum-InLineAlert-header">
      <slot name="header" />
    </div>
    <div class="spectrum-InLineAlert-content">
      <slot />
    </div>
    <div class="spectrum-InLineAlert-footer">
      <slot name="footer" />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class SpInlineAlert extends Vue {
  @Prop({ default: "" }) header!: string;
  @Prop({ default: "info" }) type!: string;
}
/**
<h3>Type</h3>
<code>
<sp-inline-alert>
  <template #header>
    Header
  </template>
  In-LineAlert
</sp-inline-alert>
<sp-inline-alert type="negative">
  <template #header>
    Header
  </template>
  In-LineAlert
</sp-inline-alert>
<sp-inline-alert type="success">
  <template #header>
    Header
  </template>
  In-LineAlert
</sp-inline-alert>
<sp-inline-alert type="help">
  <template #header>
    Header
  </template>
  In-LineAlert
</sp-inline-alert>
<sp-inline-alert type="error">
  <template #header>
    Header
  </template>
  In-LineAlert
</sp-inline-alert>
</code>

<h3>Hooter</h3>
<code>
<sp-inline-alert>
  <template #header>
    Header
  </template>
  In-LineAlert
  <template #footer>
    <sp-button type="secondary">Footer</sp-button>
  </template>
</sp-inline-alert>
</code>
 */
</script>