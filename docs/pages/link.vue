
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
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class LinkPage extends Vue {
  propData = [{"prop":"size","type":"string","default":"\"M\""},{"prop":"type","type":"string","default":"\"\""},{"prop":"quiet","type":"boolean","default":"false"}];
  slotData = [{"name":"default"}];
  eventData = [];

  
}
</script>
