
<template>
    <component-view
    name="ColorLoupe"
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
export default class ColorLoupePage extends Vue {
  propData = [{"prop":"color","type":"Color","default":"new Color()"}];
  slotData = [];
  eventData = [];

  
}
</script>
