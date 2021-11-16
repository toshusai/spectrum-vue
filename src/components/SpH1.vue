<template>
  <h1 class="spectrum-Heading spectrum-Heading--sizeXXXL">
    <slot />
  </h1>
</template>

<style>
@import "@spectrum-css/typography";
</style>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({})
export default class SpH1 extends Vue {}
</script>