<template>
  <component
    :is="vertical ? 'div': 'hr'"
    class="spectrum-Divider spectrum-Divider--sizeM"
    :class="[vertical ? 'spectrum-Divider--vertical' : '']"
    :style="vertical ? 'height: auto; align-self: stretch;' : ''"
  />
</template>



<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class SpDivider extends Vue {

  @Prop({default: false}) vertical!: boolean
}
/**
<code>
<div style="border: 1px orange solid; padding: 8px">
  <sp-divider />
</div>
</code>

<code>
<sp-action-group :compact="true">
  <sp-action-button :quiet="true">
    <sp-icon name="Plus" />
  </sp-action-button>
  <sp-divider :vertical="true" />
  <sp-action-button :quiet="true">
    <sp-icon name="Brush" />
  </sp-action-button>
</sp-action-group>
</code>
 */
</script>