
<template>
    <component-view
    name="Breadcrumbs"
    :propData="propData"
    :eventData="eventData"
    >
        <breadcrumbs></breadcrumbs>
    </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class BreadcrumbsPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
