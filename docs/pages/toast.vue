<template>
  <component-view name="Toast" :propData="propData" :eventData="eventData">
    <sp-toast></sp-toast>
  </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class ToastPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
