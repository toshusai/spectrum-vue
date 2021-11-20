
<template>
    <component-view
    name="ButtonGroup"
    :propData="propData"
    :eventData="eventData"
    >
        <button-group></button-group>
    </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class ButtonGroupPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
