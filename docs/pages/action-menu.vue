<template>
  <component-view name="ActionMenu" :propData="propData" :eventData="eventData">
    <h3>Standard</h3>
    <sp-action-menu></sp-action-menu>
    <sp-action-menu>ActionMenu</sp-action-menu>
    <h3>size</h3>
    <sp-action-menu size="S"></sp-action-menu>
    <sp-action-menu size="S">Size S</sp-action-menu>
    <h3>size</h3>
    <sp-action-menu :items="items">
      <template #item="{ item }">
        {{ item }}
      </template>
    </sp-action-menu>
  </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class ActionMenuPage extends Vue {
  propData = [];
  eventData = [];

  items = [{ text: "Custom", action: () => {} }];
}
</script>
