<template>
  <component-view
    name="ItemListItem"
    :propData="propData"
    :eventData="eventData"
  >
    <sp-item-list-item></sp-item-list-item>
  </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class ItemListItemPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
