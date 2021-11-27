<template>
  <nav>
    <ul
      class="spectrum-Breadcrumbs"
      :class="cssClass"
    >
      <slot />
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class SpBreadcrumbs extends Vue {
  @Prop({ default: false }) mutiline!: boolean;
  @Prop({ default: "M" }) size!: string;

  get cssClass() {
    return [
      this.mutiline ? "spectrum-Breadcrumbs--multiline" : "",
      "spectrum-Breadcrumbs--size" + this.size,
    ];
  }
}
/**
<code>
<sp-breadcrumbs>
  <sp-breadcrumbs-item>Item</sp-breadcrumbs-item>
  <sp-breadcrumbs-item>Item</sp-breadcrumbs-item>
  <sp-breadcrumbs-item>Item</sp-breadcrumbs-item>
</sp-breadcrumbs>
</code>
 */
</script>