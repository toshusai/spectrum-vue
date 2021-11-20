<template>
  <component-view
    name="PaginationButton"
    :propData="propData"
    :eventData="eventData"
  >
    <sp-pagination-button></sp-pagination-button>
  </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class PaginationButtonPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
