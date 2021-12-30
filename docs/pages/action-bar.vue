
<template>
    <component-view
    name="ActionBar"
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
export default class ActionBarPage extends Vue {
  propData = [];
  slotData = [];
  eventData = [];

  
}
</script>
