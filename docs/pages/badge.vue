
<template>
    <component-view
    name="Badge"
    :propData="propData"
    :eventData="eventData"
    >
        <badge></badge>
    </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class BadgePage extends Vue {
  propData = [];
  eventData = [];
}
</script>
