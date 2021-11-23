
<template>
  <component-view
    name="Accordion"
    :propData="propData"
    :eventData="eventData"
    :slotData="slotData"
  >
    <sp-accordion header="Accordion"> Content </sp-accordion>
    <code-view
      :code="`&lt;sp-accordion header=&quot;Accordion&quot;&gt;
  Content
&lt;/sp-accordion&gt;
`"
    ></code-view>
  </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class AccordionPage extends Vue {
  propData = [
    { prop: "disabled", default: "false", type: "boolean" },
    { prop: "header", default: '""', type: "string" },
  ];
  slotData = [{ name: "header" }, { name: "default" }];
  eventData = [];
}
</script>
