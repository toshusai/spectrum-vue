
<template>
    <component-view
    name="TreeViewItem"
    :propData="propData"
    :eventData="eventData"
    :slotData="slotData"
    >
        
    </component-view>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class TreeViewItemPage extends Vue {
  propData = [{"prop":"thumbnail","type":"string","default":"''"},{"prop":"selected","type":"boolean","default":"false"},{"prop":"size","type":"string","default":"\"M\""}];
  slotData = [{"name":"default"}];
  eventData = [];

  
}
</script>
