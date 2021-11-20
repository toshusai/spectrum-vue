
<template>
    <component-view
    name="Link"
    :propData="propData"
    :eventData="eventData"
    >
        <link></link>
    </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class LinkPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
