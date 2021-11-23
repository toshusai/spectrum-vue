<template>
  <li
    class="spectrum-Menu-item"
    role="menuitem"
    tabindex="0"
    :class="[disabled ? 'is-disabled' : '']"
    :aria-disabled="disabled"
  >
    <slot />
  </li>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class SpMenuItem extends Vue {
  @Prop({ default: false }) disabled!: boolean;
}
</script>