
<template>
    <component-view
    name="ContextMenu"
    :propData="propData"
    :eventData="eventData"
    :slotData="slotData"
    >
        
    </component-view>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class ContextMenuPage extends Vue {
  propData = [{"prop":"items","type":"MenuItem[]","default":"() => []"}];
  slotData = [];
  eventData = [];

  
}
</script>
