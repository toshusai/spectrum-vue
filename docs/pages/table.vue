
<template>
    <component-view
    name="Table"
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
export default class TablePage extends Vue {
  propData = [{"prop":"data","type":"any[]","default":"() => []"},{"prop":"headers","type":"Header[]","default":"() => []"}];
  slotData = [];
  eventData = [];

  
}
</script>
