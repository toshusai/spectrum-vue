
<template>
    <component-view
    name="ProgressCircle"
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
export default class ProgressCirclePage extends Vue {
  propData = [{"prop":"value","type":"number","default":"0"},{"prop":"size","type":"string","default":"\"small\""}];
  slotData = [];
  eventData = [];

  
}
</script>
