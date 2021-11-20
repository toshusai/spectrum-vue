<template>
  <component-view name="Button" :propData="propData" :eventData="eventData">
    <sp-button></sp-button>
  </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class ButtonPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
