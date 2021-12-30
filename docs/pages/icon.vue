
<template>
    <component-view
    name="Icon"
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
export default class IconPage extends Vue {
  propData = [{"prop":"name","type":"string","default":"\"\""},{"prop":"size","type":"string","default":"\"M\""}];
  slotData = [];
  eventData = [];

  
}
</script>
