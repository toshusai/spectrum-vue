
<template>
    <component-view
    name="FieldLabel"
    :propData="propData"
    :eventData="eventData"
    >
        <field-label></field-label>
    </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class FieldLabelPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
