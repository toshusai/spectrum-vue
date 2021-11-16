<template>
  <component-view
    name="ActionGroup"
    :propData="propData"
    :eventData="eventData"
  >
    <h3>Standard</h3>
    <sp-action-group>
      <sp-action-button :item="true">S</sp-action-button>
      <sp-action-button :item="true">M</sp-action-button>
      <sp-action-button :item="true">L</sp-action-button>
    </sp-action-group>

    <h3>Compact</h3>
    <sp-action-group :compact="true">
      <sp-action-button :item="true">S</sp-action-button>
      <sp-action-button :item="true">M</sp-action-button>
      <sp-action-button :item="true">L</sp-action-button>
    </sp-action-group>

    <h3>Vertical</h3>
    <sp-action-group :compact="true" :vertical="true">
      <sp-action-button :item="true">S</sp-action-button>
      <sp-action-button :item="true">M</sp-action-button>
      <sp-action-button :item="true">L</sp-action-button>
    </sp-action-group>

    <h3>Quiet</h3>
    <sp-action-group :compact="true">
      <sp-action-button :quiet="true" :item="true">S</sp-action-button>
      <sp-action-button :quiet="true" :item="true">M</sp-action-button>
      <sp-action-button :quiet="true" :item="true">L</sp-action-button>
    </sp-action-group>
  </component-view>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class index extends Vue {
  propData = [
    { prop: "quiet", type: "boolean", default: "false" },
    { prop: "vertical", type: "boolean", default: "false" },
    { prop: "compact", type: "boolean", default: "false" },
  ];

  eventData = [];
}
</script>