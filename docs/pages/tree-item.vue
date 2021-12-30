
<template>
    <component-view
    name="TreeItem"
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
export default class TreeItemPage extends Vue {
  propData = [{"prop":"hideRoot","type":"boolean","default":"true"},{"prop":"isRoot","type":"boolean","default":"true"},{"prop":"thumbnail","type":"boolean","default":"false"}];
  slotData = [];
  eventData = [];

  
}
</script>
