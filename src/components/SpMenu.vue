<template>
  <ul
    class="spectrum-Menu"
    role="menu"
  >
    <slot />
  </ul>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class SpMenu extends Vue {}
</script>