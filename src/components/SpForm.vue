<template>
  <form
    class="spectrum-Form"
    :class="[labelsAbove ? 'spectrum-Form--labelsAbove' : '']"
  >
    <slot />
  </form>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class SpForm extends Vue {
  @Prop({ default: false }) labelsAbove!: boolean;
}
</script>