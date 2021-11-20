
<template>
    <component-view
    name="SplitViewPane"
    :propData="propData"
    :eventData="eventData"
    >
        <split-view-pane></split-view-pane>
    </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class SplitViewPanePage extends Vue {
  propData = [];
  eventData = [];
}
</script>
