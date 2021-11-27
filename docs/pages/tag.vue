
<template>
    <component-view
    name="Tag"
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
export default class TagPage extends Vue {
  propData = [{"prop":"size","type":"string","default":"\"M\""},{"prop":"label","type":"string","default":"\"\""},{"prop":"removable","type":"boolean","default":"false"},{"prop":"selected","type":"boolean","default":"false"},{"prop":"invalid","type":"boolean","default":"false"},{"prop":"disabled","type":"boolean","default":"false"}];
  slotData = [];
  eventData = [];

  
}
</script>
