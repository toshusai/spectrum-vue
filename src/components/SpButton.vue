<template>
  <button
    v-bind="$attrs"
    :class="cssClass"
    :disabled="disabled"
    v-on="$listeners" 
  >
    <span class="spectrum-Button-label">
      <slot />
    </span>
  </button>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class TimelineLayer extends Vue {
  @Prop({ default: false }) disabled!: boolean;
  @Prop({ default: false }) quiet!: boolean;
  @Prop({ default: false }) group!: boolean;
  @Prop({ default: "M" }) size!: string;
  @Prop({ default: "cta" }) type!: string;

  get cssClass() {
    return [
      "spectrum-Button",
      "spectrum-Button--" + this.type,
      this.quiet ? "spectrum-Button--quiet" : "",
      "spectrum-Button--size" + this.size,
      this.group ? "spectrum-ButtonGroup-item" : "",
    ];
  }
}
/**
<code>
<sp-button>Button</sp-button>
</code>
<code>
<sp-button type="primary">Button</sp-button>
<sp-button type="primary" :quiet="true">Button</sp-button>
</code>
<code>
<sp-button type="secondary">Button</sp-button>
</code>
<code>
<sp-button :disabled="true">Button</sp-button>
</code>
 */
</script>