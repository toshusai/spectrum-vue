
<template>
    <component-view
    name="InlineAlert"
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
export default class InlineAlertPage extends Vue {
  propData = [{"prop":"header","type":"string","default":"\"\""},{"prop":"type","type":"string","default":"\"info\""}];
  slotData = [{"name":"header"},{"name":"footer"},{"name":"default"}];
  eventData = [];

  
}
</script>
