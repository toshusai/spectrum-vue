
<template>
    <component-view
    name="Sidenav"
    :propData="propData"
    :eventData="eventData"
    >
        <sidenav></sidenav>
    </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class SidenavPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
