
<template>
    <component-view
    name="ProgressBar"
    :propData="propData"
    :eventData="eventData"
    >
        <progress-bar></progress-bar>
    </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class ProgressBarPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
