<template>
  <span
    id="menu-heading-category-1"
    class="spectrum-Menu-sectionHeading"
    aria-hidden="true"
  >
    <slot />
  </span>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class SpMenuItem extends Vue {
  @Prop({ default: false }) disabled!: boolean;
}
</script>