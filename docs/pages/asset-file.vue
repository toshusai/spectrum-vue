<template>
  <component-view
    name="AssetFile"
    :propData="propData"
    :eventData="eventData"
    :slotData="slotData"
  >
    <sp-asset-file />
    <code-view :code="`&lt;sp-asset-file /&gt;`"></code-view>

    <sp-asset-file style="width: 64px" />
    <code-view
      :code="`&lt;sp-asset-file style=&quot;width: 64px&quot; /&gt;`"
    ></code-view>
  </component-view>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class AssetFilePage extends Vue {
  propData = [];
  slotData = [];
  eventData = [];
}
</script>
