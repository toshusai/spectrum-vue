
<template>
    <component-view
    name="Picker"
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
export default class PickerPage extends Vue {
  propData = [{"prop":"items","type":"MenuItem[]","default":"() => []"},{"prop":"value","type":"MenuItem"},{"prop":"disabled","type":"boolean","default":"false"},{"prop":"invalid","type":"boolean","default":"false"},{"prop":"size","type":"string","default":"\"M\""},{"prop":"quiet","type":"boolean","default":"false"},{"prop":"select","type":"(item: MenuItem) => boolean","default":"() => () => false"}];
  slotData = [];
  eventData = [];

  
}
</script>
