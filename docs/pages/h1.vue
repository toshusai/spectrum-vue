
<template>
    <component-view
    name="H1"
    :propData="propData"
    :eventData="eventData"
    >
        <h1></h1>
    </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class H1Page extends Vue {
  propData = [];
  eventData = [];
}
</script>
