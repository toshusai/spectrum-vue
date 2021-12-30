<template>
  <div class="spectrum-Asset">
    <img
      class="spectrum-Asset-image"
      v-bind="$attrs"
    >
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class AssetImage extends Vue {}
/**
<code>
<sp-asset-image src="https://github.com/toshusai.png" />
</code>
<code>
<sp-asset-image style="width: 64px" src="https://github.com/toshusai.png" />
</code>
 */
</script>