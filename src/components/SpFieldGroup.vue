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

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component({})
export default class SpFieldGroup extends Vue {
  @Prop({ default: true }) horizontal!: boolean;
}
</script>