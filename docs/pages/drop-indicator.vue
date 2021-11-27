
<template>
    <component-view
    name="DropIndicator"
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
export default class DropIndicatorPage extends Vue {
  propData = [];
  slotData = [];
  eventData = [];

  
}
</script>
