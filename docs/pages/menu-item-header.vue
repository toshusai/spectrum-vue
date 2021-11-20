
<template>
    <component-view
    name="MenuItemHeader"
    :propData="propData"
    :eventData="eventData"
    >
        <menu-item-header></menu-item-header>
    </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class MenuItemHeaderPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
