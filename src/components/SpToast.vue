<template>
  <div
    :class="cssClass"
    :style="style"
  >
    <!--  -->
    <svg
      v-if="positive"
      class="spectrum-Icon spectrum-Icon--sizeM spectrum-Toast-typeIcon"
      focusable="false"
      aria-hidden="true"
    >
      <use xlink:href="#spectrum-icon-18-CheckmarkCircle" />
    </svg>
    <!--  -->
    <svg
      v-else-if="negative || warning"
      class="spectrum-Icon spectrum-Icon--sizeM spectrum-Toast-typeIcon"
      focusable="false"
      aria-hidden="true"
    >
      <use xlink:href="#spectrum-icon-18-Alert" />
    </svg>
    <!--  -->
    <svg
      v-else-if="info"
      class="spectrum-Icon spectrum-Icon--sizeM spectrum-Toast-typeIcon"
      focusable="false"
      aria-hidden="true"
    >
      <use xlink:href="#spectrum-icon-18-Info" />
    </svg>
    <div class="spectrum-Toast-body">
      <div class="spectrum-Toast-content">
        <slot />
      </div>
      <button
        v-if="button"
        class="
          spectrum-Button
          spectrum-Button--sizeM
          spectrum-Button--overBackground
          spectrum-Button--quiet
        "
      >
        <span class="spectrum-Button-label">{{ button }}</span>
      </button>
    </div>
    <div
      v-if="removable"
      class="spectrum-Toast-buttons"
    >
      <button
        class="
          spectrum-ClearButton
          spectrum-ClearButton--overBackground
          spectrum-ClearButton--sizeM
        "
      >
        <div class="spectrum-ClearButton-fill">
          <svg
            class="
              spectrum-ClearButton-icon spectrum-Icon spectrum-UIIcon-Cross100
            "
            focusable="false"
            aria-hidden="true"
          >
            <use xlink:href="#spectrum-css-icon-Cross100" />
          </svg>
        </div>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class SpToast extends Vue {
  @Prop({ default: false }) positive!: boolean;
  @Prop({ default: false }) negative!: boolean;
  @Prop({ default: false }) info!: boolean;
  @Prop({ default: false }) warning!: boolean;
  @Prop({ default: false }) removable!: boolean;
  @Prop({ default: "" }) button!: string;

  isOpen = false;

  style: Partial<CSSStyleDeclaration> = {
    position: "fixed",
    bottom: "32px",
    right: "32px",
  };

  open(ms: number) {
    this.isOpen = true;
    setTimeout(() => {
      this.isOpen = false;
    }, ms);
  }

  get cssClass() {
    return [
      `spectrum-Toast`,
      `spectrum-Popover`,
      `spectrum-Popover--bottom`,
      this.positive ? `spectrum-Toast--positive` : ``,
      this.info ? `spectrum-Toast--info` : ``,
      this.negative ? `spectrum-Toast--negative` : ``,
      this.warning ? `spectrum-Toast--warning` : ``,
      this.isOpen ? `is-open` : "",
    ];
  }
}
</script>