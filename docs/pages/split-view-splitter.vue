
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
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class SplitViewSplitterPage extends Vue {
  propData = [{"prop":"isDraggable","type":"boolean","default":"true"},{"prop":"gripper","type":"boolean","default":"false"},{"prop":"vertical","type":"boolean","default":"false"}];
  slotData = [];
  eventData = [];

  
}
</script>
