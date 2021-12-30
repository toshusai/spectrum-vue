
<template>
    <component-view
    name="Combobox"
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
export default class ComboboxPage extends Vue {
  propData = [{"prop":"disabled","type":"boolean","default":"false"},{"prop":"quiet","type":"boolean","default":"false"},{"prop":"invalid","type":"boolean","default":"false"}];
  slotData = [{"name":"default"}];
  eventData = [];

  
}
</script>
