<template>
  <component-view name="MenuItem" :propData="propData" :eventData="eventData">
    <sp-menu-item></sp-menu-item>
  </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class MenuItemPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
