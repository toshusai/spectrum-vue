
<template>
    <component-view
    name="Tag"
    :propData="propData"
    :eventData="eventData"
    >
        <tag></tag>
    </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class TagPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
