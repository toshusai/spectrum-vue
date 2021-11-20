<template>
  <div
    class="spectrum-FieldGroup"
    :class="
      horizontal
        ? 'spectrum-FieldGroup--horizontal'
        : 'spectrum-FieldGroup--vertical'
    "
  >
    <slot />
  </div>
</template>
<style>
@import "@spectrum-css/fieldgroup";
</style>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class SpFieldGroup extends Vue {
  @Prop({ default: true }) horizontal!: boolean;
}
</script>