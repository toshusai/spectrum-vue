
<template>
    <component-view
    name="Tabs"
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
export default class TabsPage extends Vue {
  propData = [{"prop":"tabs","type":"string[]","default":"() => []"},{"prop":"index","type":"number","default":"0"}];
  slotData = [{"name":"default"}];
  eventData = [];

  
}
</script>
