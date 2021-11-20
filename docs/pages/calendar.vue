
<template>
    <component-view
    name="Calendar"
    :propData="propData"
    :eventData="eventData"
    >
        <calendar></calendar>
    </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class CalendarPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
