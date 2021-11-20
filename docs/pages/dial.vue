<template>
  <component-view name="Dial" :propData="propData" :eventData="eventData">
    <sp-dial></sp-dial>
  </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class DialPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
