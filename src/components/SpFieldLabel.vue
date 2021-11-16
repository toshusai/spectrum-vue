<template>
  <label
    for="fieldLabelExample-lifestory"
    class="
      spectrum-FieldLabel spectrum-FieldLabel--sizeM
      spectrum-Form-itemLabel
    "
  >
    {{ text }}
  </label>
</template>
<style>
@import "@spectrum-css/fieldlabel";
</style>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class SpFieldLabel extends Vue {
  @Prop({ default: "" })
  text!: string;
}
</script>