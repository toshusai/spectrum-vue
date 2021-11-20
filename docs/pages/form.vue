<template>
  <component-view name="Form" :propData="propData" :eventData="eventData">
    <sp-form></sp-form>
  </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class FormPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
