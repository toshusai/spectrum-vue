
<template>
    <component-view
    name="LogicButton"
    :propData="propData"
    :eventData="eventData"
    >
        <logic-button></logic-button>
    </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class LogicButtonPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
