
<template>
    <component-view
    name="HelpText"
    :propData="propData"
    :eventData="eventData"
    :slotData="slotData"
    >
        
    </component-view>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class HelpTextPage extends Vue {
  propData = [{"prop":"size","type":"string","default":"\"M\""},{"prop":"type","type":"string","default":"\"natural\""},{"prop":"alert","type":"boolean","default":"false"},{"prop":"disabled","type":"boolean","default":"false"}];
  slotData = [{"name":"default"}];
  eventData = [];

  
}
</script>
