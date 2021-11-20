
<template>
    <component-view
    name="Tabs"
    :propData="propData"
    :eventData="eventData"
    >
        <tabs></tabs>
    </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class TabsPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
