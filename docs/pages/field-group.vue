
<template>
    <component-view
    name="FieldGroup"
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
export default class FieldGroupPage extends Vue {
  propData = [{"prop":"horizontal","type":"boolean","default":"true"}];
  slotData = [{"name":"default"}];
  eventData = [];

  
}
</script>
