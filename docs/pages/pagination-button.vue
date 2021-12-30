
<template>
    <component-view
    name="PaginationButton"
    :propData="propData"
    :eventData="eventData"
    :slotData="slotData"
    >
        
    </component-view>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class PaginationButtonPage extends Vue {
  propData = [{"prop":"type","type":"string","default":"\"cta\""},{"prop":"size","type":"string","default":"\"M\""}];
  slotData = [];
  eventData = [];

  
}
</script>
