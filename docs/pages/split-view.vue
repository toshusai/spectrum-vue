
<template>
    <component-view
    name="SplitView"
    :propData="propData"
    :eventData="eventData"
    >
        <split-view></split-view>
    </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class SplitViewPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
