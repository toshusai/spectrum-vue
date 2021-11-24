
<template>
    <component-view
    name="Checkbox"
    :propData="propData"
    :eventData="eventData"
    :slotData="slotData"
    >
        
    </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({})
export default class CheckboxPage extends Vue {
  propData = [{"prop":"checked","type":"boolean","default":"false"},{"prop":"size","type":"string","default":"\"M\""},{"prop":"disabled","type":"boolean","default":"false"},{"prop":"emphasized","type":"boolean","default":"false"},{"prop":"indeterminate","type":"boolean","default":"false"},{"prop":"invalid","type":"boolean","default":"false"}];
  slotData = [{"name":"default"}];
  eventData = [];

  
}
</script>
