<template>
  <button
    :class="cssClass"
    :disabled="disabled"
    v-on="$listeners" 
  >
    <svg
      v-if="corner"
      class="
        spectrum-Icon
        spectrum-UIIcon-CornerTriangle100
        spectrum-ActionButton-hold
      "
      focusable="false"
      aria-hidden="true"
    >
      <use xlink:href="#spectrum-css-icon-CornerTriangle100" />
    </svg>
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component({})
export default class SpActionButton extends Vue {
  @Prop({ default: false }) quiet!: boolean;
  @Prop({ default: false }) item!: boolean;
  @Prop({ default: false }) corner!: boolean;
  @Prop({ default: false }) selected!: boolean;
  @Prop({ default: false }) emphasized!: boolean;
  @Prop({ default: false }) disabled!: boolean;
  @Prop({ default: "M" }) size!: string;

  get cssClass() {
    return [
      "spectrum-ActionButton",
      "spectrum-ActionButton--size" + this.size,
      this.quiet ? "spectrum-ActionButton--quiet" : "",
      this.item ? "spectrum-ActionGroup-item" : "",
      this.emphasized ? "spectrum-ActionButton--emphasized" : "",
      this.selected ? "is-selected" : "",
    ];
  }
}

/**
<h3>Size</h3>
<code>
<sp-action-button size="S">S</sp-action-button>
<sp-action-button size="M">M</sp-action-button>
<sp-action-button size="L">L</sp-action-button>
</code>

<h3>Standard</h3>
<code>
<sp-action-button>
  default
</sp-action-button>

<sp-action-button :selected="true">
  selected
</sp-action-button>

<sp-action-button :disabled="true">
  disabled
</sp-action-button>

<sp-action-button :selected="true" :disabled="true">
  selected + disabled
</sp-action-button>
</code>

<h3>Quiet</h3>
<code>
<sp-action-button :quiet="true">
  default
</sp-action-button>

<sp-action-button :quiet="true" :selected="true">
  selected
</sp-action-button>

<sp-action-button :quiet="true" :disabled="true">
  disabled
</sp-action-button>

<sp-action-button :quiet="true" :selected="true" :disabled="true">
  selected + disabled
</sp-action-button>
</code>

<h3>Emphasized</h3>
<code>
<sp-action-button :emphasized="true">
  default
</sp-action-button>

<sp-action-button :emphasized="true" :selected="true">
  selected
</sp-action-button>

<sp-action-button :emphasized="true" :disabled="true">
  disabled
</sp-action-button>

<sp-action-button :emphasized="true" :selected="true" :disabled="true">
  selected + disabled
</sp-action-button>
</code>

<h3>Emphasized + Quiet</h3>
<code>
<sp-action-button :emphasized="true" :quiet="true">
  default
</sp-action-button>

<sp-action-button :emphasized="true" :quiet="true" :selected="true">
  selected
</sp-action-button>

<sp-action-button :emphasized="true" :quiet="true" :disabled="true">
  disabled
</sp-action-button>

<sp-action-button :emphasized="true" :quiet="true" :selected="true" :disabled="true">
  selected + disabled
</sp-action-button>
</code>
 */
</script>
