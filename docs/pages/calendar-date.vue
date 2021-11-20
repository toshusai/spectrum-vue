
<template>
    <component-view
    name="CalendarDate"
    :propData="propData"
    :eventData="eventData"
    >
        <calendar-date></calendar-date>
    </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class CalendarDatePage extends Vue {
  propData = [];
  eventData = [];
}
</script>
