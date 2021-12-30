<template>
  <div
    class="spectrum-SplitView"
    :class="
      vertical
        ? 'spectrum-SplitView--vertical'
        : 'spectrum-SplitView--horizontal'
    "
  >
    <slot />
  </div>
</template>



<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class SpSplitView extends Vue {
  @Prop({ default: false }) vertical!: boolean;
}
</script>