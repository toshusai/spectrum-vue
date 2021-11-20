
<template>
    <component-view
    name="Checkbox"
    :propData="propData"
    :eventData="eventData"
    >
        <checkbox></checkbox>
    </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class CheckboxPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
