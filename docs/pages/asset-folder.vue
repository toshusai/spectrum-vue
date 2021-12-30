
<template>
    <component-view
    name="AssetFolder"
    :propData="propData"
    :eventData="eventData"
    :slotData="slotData"
    >
        
<sp-asset-folder />
<code-view :code="`&lt;sp-asset-folder /&gt;`"></code-view>

<sp-asset-folder style="width: 64px" />
<code-view :code="`&lt;sp-asset-folder style=&quot;width: 64px&quot; /&gt;`"></code-view>
    </component-view>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class AssetFolderPage extends Vue {
  propData = [];
  slotData = [];
  eventData = [];

  
}
</script>
