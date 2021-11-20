<template>
  <component-view name="ActionBar" :propData="propData" :eventData="eventData">
    <sp-action-bar></sp-action-bar>
  </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class ActionBarPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
