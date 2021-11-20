<template>
  <component-view name="Combobox" :propData="propData" :eventData="eventData">
    <sp-combobox></sp-combobox>
  </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class ComboboxPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
