<template>
  <div
    class="spectrum-Dial"
    :class="[
      small ? 'spectrum-Dial--small' : '',
      disabled ? 'is-disabled' : '',
    ]"
  >
    <div class="spectrum-Dial-controls">
      <div
        v-if="label"
        class="spectrum-Dial-labelContainer"
      >
        <label
          id="dialLabel"
          class="spectrum-Dial-label"
          for="labeledDial"
        >
          {{ label }}
        </label>
        <div
          v-if="showValue"
          class="spectrum-Dial-value"
          role="textbox"
          aria-readonly="true"
          aria-labelledby="dialLabel"
        >
          {{ value }}
        </div>
      </div>
      <div
        class="spectrum-Dial-handle"
        tabindex="0"
        :style="`transform: rotate(${deg}deg);`"
      >
        <input
          type="range"
          class="spectrum-Dial-input"
          v-bind="$attrs"
          :disabled="disabled"
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">


import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class SpDial extends Vue {
  @Prop({ default: "" }) label!: string;
  @Prop({ default: 0 }) value!: number;
  @Prop({ default: false }) small!: boolean;
  @Prop({ default: false }) disabled!: boolean;
  @Prop({ default: false }) showValue!: boolean;

  // -45 to 225
  get deg() {
    const r = this.value / 100;
    return -45 * (1 - r) + 255 * r;
  }
}
</script>