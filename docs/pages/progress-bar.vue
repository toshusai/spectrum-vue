
<template>
    <component-view
    name="ProgressBar"
    :propData="propData"
    :eventData="eventData"
    :slotData="slotData"
    >
        
    </component-view>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class ProgressBarPage extends Vue {
  propData = [{"prop":"value","type":"number","default":"0"},{"prop":"indeterminate","type":"boolean","default":"false"},{"prop":"sideLabel","type":"boolean","default":"false"},{"prop":"overBackground","type":"boolean","default":"false"},{"prop":"size","type":"string","default":"\"M\""}];
  slotData = [{"name":"default"}];
  eventData = [];

  
}
</script>
