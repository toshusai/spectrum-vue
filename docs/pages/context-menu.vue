<template>
  <component-view
    name="ContextMenu"
    :propData="propData"
    :eventData="eventData"
  >
    <sp-context-menu></sp-context-menu>
  </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class ContextMenuPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
