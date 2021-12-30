
<template>
    <component-view
    name="CalendarDate"
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
export default class CalendarDatePage extends Vue {
  propData = [{"prop":"outsideMonth","type":"boolean","default":"false"},{"prop":"today","type":"boolean","default":"false"},{"prop":"selected","type":"boolean","default":"false"},{"prop":"day","type":"number","default":"0"}];
  slotData = [];
  eventData = [];

  
}
</script>
