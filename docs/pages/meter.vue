
<template>
    <component-view
    name="Meter"
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
export default class MeterPage extends Vue {
  propData = [{"prop":"value","type":"number","default":"0"},{"prop":"type","type":"number","default":"\"positive\""}];
  slotData = [{"name":"default"}];
  eventData = [];

  
}
</script>
