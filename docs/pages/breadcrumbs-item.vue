
<template>
    <component-view
    name="BreadcrumbsItem"
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
import Component from "vue-class-component";

@Component({})
export default class BreadcrumbsItemPage extends Vue {
  propData = [{"prop":"chevron","type":"boolean","default":"true"},{"prop":"nested","type":"boolean","default":"false"},{"prop":"dragged","type":"boolean","default":"false"},{"prop":"disabled","type":"boolean","default":"false"}];
  slotData = [{"name":"default"}];
  eventData = [];

  
}
</script>
