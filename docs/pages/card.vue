
<template>
    <component-view
    name="Card"
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
export default class CardPage extends Vue {
  propData = [];
  slotData = [];
  eventData = [];

  
}
</script>
