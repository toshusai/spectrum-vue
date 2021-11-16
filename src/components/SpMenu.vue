<template>
  <ul
    class="spectrum-Menu"
    role="menu"
  >
    <slot />
  </ul>
</template>
<style>
@import "@spectrum-css/menu";
</style>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({})
export default class SpMenu extends Vue {}
</script>