<template>
  <svg
    class="spectrum-Icon"
    :class="`spectrum-Icon--size` + size"
    focusable="false"
    aria-hidden="true"
    :aria-label="name"
  >
    <use :xlink:href="`#spectrum-icon-18-${name}`" />
  </svg>
</template>



<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class SpIcon extends Vue {
  @Prop({ default: "" }) name!: string;
  @Prop({ default: "M" }) size!: string;
}
</script>