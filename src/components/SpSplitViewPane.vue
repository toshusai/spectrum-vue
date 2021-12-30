<template>
  <div class="spectrum-SplitView-pane">
    <slot />
  </div>
</template>



<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class SpSplitViewPane extends Vue {}
</script>