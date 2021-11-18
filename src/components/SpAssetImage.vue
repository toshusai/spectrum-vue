<template>
  <div class="spectrum-Asset">
    <img
      class="spectrum-Asset-image"
      v-bind="$attrs"
    >
  </div>
</template>
<style>
@import "@spectrum-css/asset";
</style>
<script lang="ts">
import Vue from "vue";
import { Component }from "vue-property-decorator";

@Component({})
export default class AssetImage extends Vue {

}
</script>