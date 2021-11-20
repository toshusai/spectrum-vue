<template>
  <component-view name="Popover" :propData="propData" :eventData="eventData">
    <sp-popover></sp-popover>
  </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class PopoverPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
