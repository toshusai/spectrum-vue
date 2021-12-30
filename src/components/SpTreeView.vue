<template>
  <ul
    class="spectrum-TreeView"
    :class="[thumbnail ? 'spectrum-TreeView--thumbnail' : '', 'spectrum-TreeView--size' + size]"
  >
    <slot />
  </ul>
</template>

<script lang="ts">


import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class SpTreeView extends Vue {
  @Prop({ default: '' }) thumbnail!: string;
  @Prop({ default: "M"}) size!: string;
}
</script>