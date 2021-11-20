<template>
  <component-view
    name="BreadcrumbsItem"
    :propData="propData"
    :eventData="eventData"
  >
    <sp-breadcrumbs-item></sp-breadcrumbs-item>
  </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class BreadcrumbsItemPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
