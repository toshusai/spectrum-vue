
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
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class CalendarDatePage extends Vue {
  propData = [{"prop":"outsideMonth","type":"boolean","default":"false"},{"prop":"today","type":"boolean","default":"false"},{"prop":"selected","type":"boolean","default":"false"},{"prop":"day","type":"number","default":"0"}];
  slotData = [];
  eventData = [];

  
}
</script>
