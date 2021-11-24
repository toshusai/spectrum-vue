
<template>
    <component-view
    name="DatePicker"
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
export default class DatePickerPage extends Vue {
  propData = [];
  slotData = [];
  eventData = [];

  
}
</script>
