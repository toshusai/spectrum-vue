
<template>
    <component-view
    name="SplitViewPane"
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
export default class SplitViewPanePage extends Vue {
  propData = [];
  slotData = [{"name":"default"}];
  eventData = [];

  
}
</script>
