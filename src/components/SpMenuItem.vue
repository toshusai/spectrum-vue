<template>
  <li
    class="spectrum-Menu-item"
    role="menuitem"
    tabindex="0"
  >
    <slot />
  </li>
</template>
<style>
@import "@spectrum-css/menu";
</style>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({})
export default class SpMenuItem extends Vue {}
</script>