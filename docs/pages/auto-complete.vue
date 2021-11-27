
<template>
    <component-view
    name="AutoComplete"
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
export default class AutoCompletePage extends Vue {
  propData = [{"prop":"items","type":"string[]","default":"() => []"},{"prop":"value","type":"string","default":"\"\""}];
  slotData = [];
  eventData = [];

  
}
</script>
