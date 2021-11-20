
<template>
    <component-view
    name="InlineAlert"
    :propData="propData"
    :eventData="eventData"
    >
        <inline-alert></inline-alert>
    </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class InlineAlertPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
