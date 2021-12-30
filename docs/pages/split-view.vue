
<template>
    <component-view
    name="SplitView"
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
export default class SplitViewPage extends Vue {
  propData = [{"prop":"vertical","type":"boolean","default":"false"}];
  slotData = [{"name":"default"}];
  eventData = [];

  
}
</script>
