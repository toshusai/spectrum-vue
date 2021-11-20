
<template>
    <component-view
    name="SliderTextfield"
    :propData="propData"
    :eventData="eventData"
    >
        <slider-textfield></slider-textfield>
    </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class SliderTextfieldPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
