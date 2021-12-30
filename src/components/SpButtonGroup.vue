<template>
  <div
    class="spectrum-ButtonGroup"
    :class="[
      vertical ? 'spectrum-ButtonGroup--vertical' : '',
      dialog ? 'spectrum-Dialog-buttonGroup' : '',
      dialog ? 'spectrum-Dialog-buttonGroup--noFooter' : '',
    ]"
  >
    <slot />
  </div>
</template>

<script lang="ts">


import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class SpButtonGroup extends Vue {
  @Prop({ default: false }) vertical!: boolean;
  @Prop({ default: false }) dialog!: boolean;
}
/**
<code>
<sp-button-group>
  <sp-button :group="true">Button</sp-button>
  <sp-button :group="true" type="primary">Button</sp-button>
  <sp-button :group="true" type="primary" :quiet="true">Button</sp-button>
</sp-button-group>
</code>
<code>
<sp-button-group :vertical="true">
  <sp-button :group="true">Button</sp-button>
  <sp-button :group="true" type="primary">Button</sp-button>
  <sp-button :group="true" type="primary" :quiet="true">Button</sp-button>
</sp-button-group>
</code>
 */
</script>