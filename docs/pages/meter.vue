
<template>
    <component-view
    name="Meter"
    :propData="propData"
    :eventData="eventData"
    >
        <meter></meter>
    </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class MeterPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
