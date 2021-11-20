<template>
  <component-view name="Card" :propData="propData" :eventData="eventData">
    <sp-card></sp-card>
  </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class CardPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
