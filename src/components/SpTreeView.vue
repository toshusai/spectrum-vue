<template>
  <ul
    class="spectrum-TreeView"
    :class="[thumbnail ? 'spectrum-TreeView--thumbnail' : '', 'spectrum-TreeView--size' + size]"
  >
    <slot />
  </ul>
</template>



<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({ })
export default class SpListItemList extends Vue {
  @Prop({ default: '' }) thumbnail!: string;
}
</script>