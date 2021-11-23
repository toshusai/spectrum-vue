<template>
  <div
    class="spectrum-Accordion"
    role="region"
  >
    <div
      class="spectrum-Accordion-item"
      :class="{ 'is-open': isOpen, 'is-disabled': disabled }"
      role="presentation"
    >
      <h3 class="spectrum-Accordion-itemHeading">
        <button
          class="spectrum-Accordion-itemHeader"
          type="button"
          aria-expanded="true"
          :disabled="disabled"
          @click="() => (isOpen = !isOpen)"
        >
          <template v-if="header">
            {{ header }}
          </template>
          <slot
            v-else
            name="header"
          />
        </button>
        <svg
          class="
            spectrum-Icon
            spectrum-UIIcon-ChevronRight100
            spectrum-Accordion-itemIndicator
          "
          focusable="false"
          aria-hidden="true"
        >
          <use xlink:href="#spectrum-css-icon-Chevron100" />
        </svg>
      </h3>

      <div
        class="spectrum-Accordion-itemContent"
        role="region"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class SpAccordion extends Vue {
  isOpen: boolean = false;
  @Prop({ default: false }) disabled!: boolean;
  @Prop({ default: "" }) header!: string;
}

/**
 * <code>
 * <sp-accordion header="Accordion">
 *   Content
 * </sp-accordion>
 * </code>
 */
</script>
