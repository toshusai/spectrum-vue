<template>
  <component-view
    name="AutoComplete"
    :propData="propData"
    :eventData="eventData"
  >
    <sp-auto-complete></sp-auto-complete>
  </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class AutoCompletePage extends Vue {
  propData = [];
  eventData = [];
}
</script>
