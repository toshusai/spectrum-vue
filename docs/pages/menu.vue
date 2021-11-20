<template>
  <component-view name="Menu" :propData="propData" :eventData="eventData">
    <sp-menu></sp-menu>
  </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class MenuPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
