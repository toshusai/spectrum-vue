
<template>
    <component-view
    name="ColorLoupe"
    :propData="propData"
    :eventData="eventData"
    >
        <color-loupe></color-loupe>
    </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class ColorLoupePage extends Vue {
  propData = [];
  eventData = [];
}
</script>
