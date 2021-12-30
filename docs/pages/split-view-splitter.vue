
<template>
    <component-view
    name="SplitViewSplitter"
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
export default class SplitViewSplitterPage extends Vue {
  propData = [{"prop":"isDraggable","type":"boolean","default":"true"},{"prop":"gripper","type":"boolean","default":"false"},{"prop":"vertical","type":"boolean","default":"false"}];
  slotData = [];
  eventData = [];

  
}
</script>
