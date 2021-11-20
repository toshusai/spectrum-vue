
<template>
    <component-view
    name="Table"
    :propData="propData"
    :eventData="eventData"
    >
        <table></table>
    </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class TablePage extends Vue {
  propData = [];
  eventData = [];
}
</script>
