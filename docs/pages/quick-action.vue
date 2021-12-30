
<template>
    <component-view
    name="QuickAction"
    :propData="propData"
    :eventData="eventData"
    :slotData="slotData"
    >
        
    </component-view>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class QuickActionPage extends Vue {
  propData = [{"prop":"isOpen","type":"boolean","default":"false"},{"prop":"textOnly","type":"boolean","default":"false"}];
  slotData = [{"name":"default"}];
  eventData = [];

  
}
</script>
