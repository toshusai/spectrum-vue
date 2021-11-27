
<template>
    <component-view
    name="LogicButton"
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
export default class LogicButtonPage extends Vue {
  propData = [{"prop":"or","type":"boolean","default":"false"}];
  slotData = [];
  eventData = [];

  
}
</script>
