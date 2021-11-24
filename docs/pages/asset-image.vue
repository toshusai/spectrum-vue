
<template>
    <component-view
    name="AssetImage"
    :propData="propData"
    :eventData="eventData"
    :slotData="slotData"
    >
        
<sp-asset-image src="https://github.com/toshusai.png" />
<code-view :code="`&lt;sp-asset-image src=&quot;https://github.com/toshusai.png&quot; /&gt;`"></code-view>

<sp-asset-image style="width: 64px" src="https://github.com/toshusai.png" />
<code-view :code="`&lt;sp-asset-image style=&quot;width: 64px&quot; src=&quot;https://github.com/toshusai.png&quot; /&gt;`"></code-view>
    </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({})
export default class AssetImagePage extends Vue {
  propData = [];
  slotData = [];
  eventData = [];

  
}
</script>
