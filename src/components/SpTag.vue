<template>
  <div :class="cssClass" tabindex="0">
    <span class="spectrum-Tag-label" @click="$emit('select')">{{ label }}</span>
    <button
      v-if="removable"
      type="reset"
      :class="cssCloseClass"
      @click="$emit('remove')"
    >
      <div class="spectrum-ClearButton-fill">
        <svg
          class="
            spectrum-Icon spectrum-ClearButton-icon spectrum-UIIcon-Cross75
          "
          focusable="false"
          aria-hidden="true"
        >
          <use xlink:href="#spectrum-css-icon-Cross75" />
        </svg>
      </div>
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class SpTag extends Vue {
  @Prop({ default: "M" }) size!: string;
  @Prop({ default: "" }) label!: string;
  @Prop({ default: false }) removable!: boolean;
  @Prop({ default: false }) selected!: boolean;
  @Prop({ default: false }) invalid!: boolean;
  @Prop({ default: false }) disabled!: boolean;
  get cssClass() {
    return [
      `spectrum-Tag`,
      `spectrum-Tag--size` + this.size,
      this.removable ? "spectrum-Tag--removable" : "",
      this.selected ? "is-selected" : "",
      this.invalid ? "is-invalid" : "",
      this.disabled ? "is-disabled" : "",
    ];
  }
  get cssCloseClass() {
    return [
      `spectrum-ClearButton`,
      `spectrum-ClearButton--size` + this.size,
      `spectrum-Tag-clearButton`,
    ];
  }
}
</script>