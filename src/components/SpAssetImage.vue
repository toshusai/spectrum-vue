<template>
  <div class="spectrum-Asset">
    <img
      class="spectrum-Asset-image"
      v-bind="$attrs"
    >
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

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