
<template>
    <component-view
    name="MenuItem"
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
export default class MenuItemPage extends Vue {
  propData = [{"prop":"disabled","type":"boolean","default":"false"}];
  slotData = [{"name":"default"}];
  eventData = [];

  
}
</script>
