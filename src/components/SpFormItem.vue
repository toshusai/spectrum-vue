<template>
  <form class="spectrum-Form-item">
    <slot />
  </form>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class SpFormItem extends Vue {}
</script>