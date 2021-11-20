
<template>
    <component-view
    name="PickerButton"
    :propData="propData"
    :eventData="eventData"
    >
        <picker-button></picker-button>
    </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class PickerButtonPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
