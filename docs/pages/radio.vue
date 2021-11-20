
<template>
    <component-view
    name="Radio"
    :propData="propData"
    :eventData="eventData"
    >
        <radio></radio>
    </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class RadioPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
