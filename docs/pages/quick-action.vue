
<template>
    <component-view
    name="QuickAction"
    :propData="propData"
    :eventData="eventData"
    >
        <quick-action></quick-action>
    </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class QuickActionPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
