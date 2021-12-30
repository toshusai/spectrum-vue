<template>
  <label
    v-bind="$attrs"
    class="spectrum-FieldLabel spectrum-Form-itemLabel"
    :class="['spectrum-FieldLabel--size' + size]"
  >
    <slot />
    <svg
      v-if="required"
      class="
        spectrum-Icon
        spectrum-UIIcon-Asterisk100
        spectrum-FieldLabel-requiredIcon
      "
      focusable="false"
      aria-hidden="true"
    >
      <use xlink:href="#spectrum-css-icon-Asterisk100" />
    </svg>
  </label>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component({})
export default class SpFieldLabel extends Vue {
  @Prop({ default: "M" }) size!: string;
  @Prop({ default: false }) required!: boolean;
}
</script>