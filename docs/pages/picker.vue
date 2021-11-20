
<template>
    <component-view
    name="Picker"
    :propData="propData"
    :eventData="eventData"
    >
        <picker></picker>
    </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class PickerPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
