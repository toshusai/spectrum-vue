<template>
  <svg
    class="spectrum-Icon spectrum-Icon--sizeM"
    focusable="false"
    aria-hidden="true"
    aria-label="Edit"
  >
    <use :xlink:href="`#spectrum-icon-18-${name}`" />
  </svg>
</template>

<style>
@import "@spectrum-css/icon";
</style>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class SpIcon extends Vue {
  @Prop({ default: "" }) name!: string;
}
</script>