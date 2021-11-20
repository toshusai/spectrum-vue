
<template>
    <component-view
    name="FieldGroup"
    :propData="propData"
    :eventData="eventData"
    >
        <field-group></field-group>
    </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class FieldGroupPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
