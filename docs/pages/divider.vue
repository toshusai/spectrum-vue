<template>
  <component-view name="Divider" :propData="propData" :eventData="eventData">
    <sp-divider></sp-divider>
  </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class DividerPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
