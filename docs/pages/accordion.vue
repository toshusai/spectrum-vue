
<template>
    <component-view
    name="Accordion"
    :propData="propData"
    :eventData="eventData"
    >
        <accordion></accordion>
    </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class AccordionPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
