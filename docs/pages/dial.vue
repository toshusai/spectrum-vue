
<template>
    <component-view
    name="Dial"
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
export default class DialPage extends Vue {
  propData = [{"prop":"label","type":"string","default":"\"\""},{"prop":"value","type":"number","default":"0"},{"prop":"small","type":"boolean","default":"false"},{"prop":"disabled","type":"boolean","default":"false"},{"prop":"showValue","type":"boolean","default":"false"}];
  slotData = [];
  eventData = [];

  
}
</script>
