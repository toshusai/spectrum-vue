
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
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class HelpTextPage extends Vue {
  propData = [{"prop":"size","type":"string","default":"\"M\""},{"prop":"type","type":"string","default":"\"natural\""},{"prop":"alert","type":"boolean","default":"false"},{"prop":"disabled","type":"boolean","default":"false"}];
  slotData = [{"name":"default"}];
  eventData = [];

  
}
</script>
