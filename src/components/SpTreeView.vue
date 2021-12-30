<template>
  <ul
    class="spectrum-TreeView"
    :class="[thumbnail ? 'spectrum-TreeView--thumbnail' : '', 'spectrum-TreeView--size' + size]"
  >
    <slot />
  </ul>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component({})
export default class SpTreeView extends Vue {
  @Prop({ default: '' }) thumbnail!: string;
  @Prop({ default: "M"}) size!: string;
}
</script>