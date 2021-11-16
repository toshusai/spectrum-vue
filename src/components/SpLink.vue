<template>
  <a
    class="spectrum-Link"
    v-bind="$attrs"
  >
    <slot />
  </a>
</template>
<style>
@import "@spectrum-css/link";
</style>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({})
export default class SpLink extends Vue {}
</script>