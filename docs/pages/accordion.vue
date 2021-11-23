<template>
  <component-view
    name="Accordion"
    :propData="propData"
    :eventData="eventData"
    :slotData="slotData"
  >
    <sp-accordion header="Accordion"> Here is Content. </sp-accordion>
    <code-view :code="code" />
  </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class AccordionPage extends Vue {
  propData = [{ prop: "header", type: "string", default: "''" }];
  eventData = [];
  slotData = [{ name: "default" }];
  code = `<sp-accordion header="Accordion"> Here is Content. </sp-accordion>`;
}
</script>
