
<template>
    <component-view
    name="Dropzone"
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
export default class DropzonePage extends Vue {
  propData = [{"prop":"text","type":"string","default":"\"Drag and Drop Your File\""},{"prop":"dragged","type":"boolean","default":"false"}];
  slotData = [{"name":"default"}];
  eventData = [];

  
}
</script>
