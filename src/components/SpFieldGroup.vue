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
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class SpFieldGroup extends Vue {
  @Prop({ default: true }) horizontal!: boolean;
}
</script>