<template>
  <component-view
    name="HintTextfield"
    :propData="propData"
    :eventData="eventData"
  >
    <sp-hint-textfield></sp-hint-textfield>
  </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class HintTextfieldPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
