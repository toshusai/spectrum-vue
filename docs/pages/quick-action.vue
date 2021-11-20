<template>
  <component-view
    name="QuickAction"
    :propData="propData"
    :eventData="eventData"
  >
    <sp-quick-action></sp-quick-action>
  </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class QuickActionPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
