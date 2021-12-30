<template>
  <div class="spectrum-Modal-wrapper spectrum-CSSExample-dialog">
    <div
      class="spectrum-Underlay"
      :class="[isOpen ? 'is-open' : '']"
    />
    <div
      class="spectrum-Modal"
      :class="[isOpen ? 'is-open' : '', large ? 'spectrum-Dialog--large' : '']"
    >
      <div
        class="spectrum-Dialog"
        :class="[
          small ? 'spectrum-Dialog--small' : '',
          medium ? 'spectrum-Dialog--medium' : '',
          large ? 'spectrum-Dialog--large' : '',
          fullscree ? 'spectrum-Dialog--fullscreen' : '',
          dismissable ? 'spectrum-Dialog--dismissable': ''
        ]"
        role="dialog"
        tabindex="-1"
        aria-modal="true"
      >
        <div class="spectrum-Dialog-grid">
          <div
            v-if="hero"
            class="spectrum-Dialog-hero"
            :style="`background-image: url(${hero})`"
          />
          <h1 class="spectrum-Dialog-heading">
            <slot
              v-if="!!$scopedSlots.header || !!$slots.header"
              name="header"
            />
            <template v-else>
              {{ header }}
            </template>
          </h1>
          <svg
            v-if="alert"
            class="spectrum-Icon spectrum-Icon--sizeM spectrum-Dialog-typeIcon"
            focusable="false"
            aria-hidden="true"
          >
            <use xlink:href="#spectrum-icon-18-Alert" />
          </svg>
          <hr
            v-if="divider"
            class="
              spectrum-Divider
              spectrum-Divider--sizeM
              spectrum-Divider--horizontal
              spectrum-Dialog-divider
            "
          >
          <section class="spectrum-Dialog-content">
            <slot />
          </section>
          <slot name="footer" />
          <button
            v-if="dismissable"
            aria-label="Dismiss"
            class="
              spectrum-ActionButton
              spectrum-ActionButton--quiet
              spectrum-ActionButton--sizeM
              spectrum-Dialog-closeButton
            "
            type="button"
            @click="(e) => $emit('close', e)"
            @pointerdown="(e) => $emit('close-pointerdown', e)"
          >
            <svg
              class="spectrum-Icon spectrum-UIIcon-Cross500"
              focusable="false"
              aria-hidden="true"
            >
              <use xlink:href="#spectrum-css-icon-Cross500" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component({})
export default class SpDialog extends Vue {
  @Prop({ default: "" }) header!: string;
  @Prop({ default: "" }) hero!: string;
  @Prop({ default: false }) isOpen!: boolean;
  @Prop({ default: false }) dismissable!: boolean;
  @Prop({ default: false }) small!: boolean;
  @Prop({ default: false }) medium!: boolean;
  @Prop({ default: false }) large!: boolean;
  @Prop({ default: false }) fullscree!: boolean;
  @Prop({ default: false }) alert!: boolean;
  @Prop({ default: true }) divider!: boolean;
}
</script>