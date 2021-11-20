<template>
  <component-view name="TextArea" :propData="propData" :eventData="eventData">
    <sp-text-area></sp-text-area>
  </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class TextAreaPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
