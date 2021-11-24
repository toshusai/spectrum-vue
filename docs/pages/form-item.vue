
<template>
    <component-view
    name="FormItem"
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
export default class FormItemPage extends Vue {
  propData = [];
  slotData = [{"name":"default"}];
  eventData = [];

  
}
</script>
