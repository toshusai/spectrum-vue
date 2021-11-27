
<template>
    <component-view
    name="ItemListItem"
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
export default class ItemListItemPage extends Vue {
  propData = [{"prop":"thumbnail","type":"boolean","default":"false"},{"prop":"selectedItem","type":"any","default":"() => ({})"}];
  slotData = [];
  eventData = [];

  
}
</script>
