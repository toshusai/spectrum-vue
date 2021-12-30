
<template>
    <component-view
    name="Accordion"
    :propData="propData"
    :eventData="eventData"
    :slotData="slotData"
    >
        
<sp-accordion header="Accordion">
  Content
</sp-accordion>
<code-view :code="`&lt;sp-accordion header=&quot;Accordion&quot;&gt;
  Content
&lt;/sp-accordion&gt;`"></code-view>


<sp-accordion :disabled="true" header="Accordion">
  Content
</sp-accordion>
<code-view :code="`&lt;sp-accordion :disabled=&quot;true&quot; header=&quot;Accordion&quot;&gt;
  Content
&lt;/sp-accordion&gt;`"></code-view>
    </component-view>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class AccordionPage extends Vue {
  propData = [{"prop":"defaultIsOpen","type":"boolean","default":"false"},{"prop":"disabled","type":"boolean","default":"false"},{"prop":"header","type":"string","default":"\"\""}];
  slotData = [{"name":"header"},{"name":"default"}];
  eventData = [];

  
}
</script>
