
<template>
    <component-view
    name="ProgressCircle"
    :propData="propData"
    :eventData="eventData"
    >
        <progress-circle></progress-circle>
    </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class ProgressCirclePage extends Vue {
  propData = [];
  eventData = [];
}
</script>
