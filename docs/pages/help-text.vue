<template>
  <component-view name="HelpText" :propData="propData" :eventData="eventData">
    <sp-help-text></sp-help-text>
  </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class HelpTextPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
