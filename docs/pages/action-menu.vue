
<template>
    <component-view
    name="ActionMenu"
    :propData="propData"
    :eventData="eventData"
    >
        <action-menu></action-menu>
    </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class ActionMenuPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
