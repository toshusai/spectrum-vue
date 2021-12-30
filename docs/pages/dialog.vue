
<template>
    <component-view
    name="Dialog"
    :propData="propData"
    :eventData="eventData"
    :slotData="slotData"
    >
        
    </component-view>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class DialogPage extends Vue {
  propData = [{"prop":"header","type":"string","default":"\"\""},{"prop":"hero","type":"string","default":"\"\""},{"prop":"isOpen","type":"boolean","default":"false"},{"prop":"dismissable","type":"boolean","default":"false"},{"prop":"small","type":"boolean","default":"false"},{"prop":"medium","type":"boolean","default":"false"},{"prop":"large","type":"boolean","default":"false"},{"prop":"fullscree","type":"boolean","default":"false"},{"prop":"alert","type":"boolean","default":"false"},{"prop":"divider","type":"boolean","default":"true"}];
  slotData = [{"name":"header"},{"name":"footer"},{"name":"default"}];
  eventData = [];

  
}
</script>
