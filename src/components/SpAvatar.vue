<template>
  <div
    class="spectrum-Avatar"
    :class="[disabled ? 'is-disabled' : '', `spectrum-Avatar--size${size}`]"
  >
    <img class="spectrum-Avatar-image" :src="src" alt="Avatar" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class SpAvatar extends Vue {
  @Prop({ default: false }) disabled!: boolean;
  @Prop({ default: "100" }) size!: string;
  @Prop({ default: "" }) src!: string;
}
</script>