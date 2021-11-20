
<template>
    <component-view
    name="BreadcrumbsItem"
    :propData="propData"
    :eventData="eventData"
    >
        <breadcrumbs-item></breadcrumbs-item>
    </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class BreadcrumbsItemPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
