
<template>
    <component-view
    name="Breadcrumbs"
    :propData="propData"
    :eventData="eventData"
    :slotData="slotData"
    >
        
<sp-breadcrumbs>
  <sp-breadcrumbs-item>Item</sp-breadcrumbs-item>
  <sp-breadcrumbs-item>Item</sp-breadcrumbs-item>
  <sp-breadcrumbs-item>Item</sp-breadcrumbs-item>
</sp-breadcrumbs>
<code-view :code="`&lt;sp-breadcrumbs&gt;
  &lt;sp-breadcrumbs-item&gt;Item&lt;/sp-breadcrumbs-item&gt;
  &lt;sp-breadcrumbs-item&gt;Item&lt;/sp-breadcrumbs-item&gt;
  &lt;sp-breadcrumbs-item&gt;Item&lt;/sp-breadcrumbs-item&gt;
&lt;/sp-breadcrumbs&gt;`"></code-view>
    </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({})
export default class BreadcrumbsPage extends Vue {
  propData = [{"prop":"mutiline","type":"boolean","default":"false"},{"prop":"size","type":"string","default":"\"M\""}];
  slotData = [{"name":"default"}];
  eventData = [];

  
}
</script>
