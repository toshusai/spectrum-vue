
<template>
    <component-view
    name="Link"
    :propData="propData"
    :eventData="eventData"
    :slotData="slotData"
    >
        
    </component-view>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class LinkPage extends Vue {
  propData = [{"prop":"size","type":"string","default":"\"M\""},{"prop":"type","type":"string","default":"\"\""},{"prop":"quiet","type":"boolean","default":"false"}];
  slotData = [{"name":"default"}];
  eventData = [];

  
}
</script>
