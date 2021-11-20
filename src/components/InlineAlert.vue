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
export default class InlineAlert extends Vue {
  @Prop({ default: "" }) header!: string;
  @Prop({ default: "info" }) type!: string;
}
</script>