
<template>
    <component-view
    name="ContextMenu"
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
export default class ContextMenuPage extends Vue {
  propData = [{"prop":"items","type":"MenuItem[]","default":"() => []"}];
  slotData = [];
  eventData = [];

  
}
</script>
