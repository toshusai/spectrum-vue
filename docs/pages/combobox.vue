
<template>
    <component-view
    name="Combobox"
    :propData="propData"
    :eventData="eventData"
    :slotData="slotData"
    >
        
    </component-view>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class ComboboxPage extends Vue {
  propData = [{"prop":"disabled","type":"boolean","default":"false"},{"prop":"quiet","type":"boolean","default":"false"},{"prop":"invalid","type":"boolean","default":"false"}];
  slotData = [{"name":"default"}];
  eventData = [];

  
}
</script>
