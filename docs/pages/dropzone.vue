
<template>
    <component-view
    name="Dropzone"
    :propData="propData"
    :eventData="eventData"
    >
        <dropzone></dropzone>
    </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class DropzonePage extends Vue {
  propData = [];
  eventData = [];
}
</script>
