
<template>
    <component-view
    name="FieldLabel"
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
export default class FieldLabelPage extends Vue {
  propData = [{"prop":"size","type":"string","default":"\"M\""},{"prop":"required","type":"boolean","default":"false"}];
  slotData = [{"name":"default"}];
  eventData = [];

  
}
</script>
