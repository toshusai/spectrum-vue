
<template>
    <component-view
    name="Icon"
    :propData="propData"
    :eventData="eventData"
    >
        <icon></icon>
    </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class IconPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
