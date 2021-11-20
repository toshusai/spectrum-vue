
<template>
    <component-view
    name="HelpText"
    :propData="propData"
    :eventData="eventData"
    >
        <help-text></help-text>
    </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class HelpTextPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
