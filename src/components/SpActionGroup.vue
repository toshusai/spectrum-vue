<template>
  <div :class="cssClass">
    <slot />
  </div>
</template>



<script lang="ts">


import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class SpActionButton extends Vue {
  @Prop({ default: false })
  quiet!: boolean;

  @Prop({ default: false })
  vertical!: boolean;

  @Prop({ default: false })
  compact!: boolean;

  get cssClass() {
    return [
      "spectrum-ActionGroup",
      this.quiet ? "spectrum-ActionGroup--quiet" : "",
      this.vertical ? "spectrum-ActionGroup--vertical" : "spectrum-ActionGroup--horizontal",
      this.compact ? "spectrum-ActionGroup--compact" : "",
    ];
  }
}

/**
<h3>Standard</h3>
<code>
<sp-action-group>
  <sp-action-button :item="true">S</sp-action-button>
  <sp-action-button :item="true">M</sp-action-button>
  <sp-action-button :item="true">L</sp-action-button>
</sp-action-group>
</code>

<h3>Compact</h3>
<code>
<sp-action-group :compact="true">
  <sp-action-button :item="true">S</sp-action-button>
  <sp-action-button :item="true">M</sp-action-button>
  <sp-action-button :item="true">L</sp-action-button>
</sp-action-group>
</code>

<h3>Vertical</h3>
<code>
<sp-action-group :compact="true" :vertical="true">
  <sp-action-button :item="true">S</sp-action-button>
  <sp-action-button :item="true">M</sp-action-button>
  <sp-action-button :item="true">L</sp-action-button>
</sp-action-group>
</code>

<h3>Quiet</h3>
<code>
<sp-action-group :compact="true">
  <sp-action-button :quiet="true" :item="true">S</sp-action-button>
  <sp-action-button :quiet="true" :item="true">M</sp-action-button>
  <sp-action-button :quiet="true" :item="true">L</sp-action-button>
</sp-action-group>
</code>
 */
</script>