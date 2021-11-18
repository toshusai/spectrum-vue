<template>
  <div
    class="spectrum-Accordion"
    role="region"
  >
    <div
      class="spectrum-Accordion-item"
      :class="{'is-open':isOpen}"
      role="presentation"
    >
      <h3 class="spectrum-Accordion-itemHeading">
        <button
          class="spectrum-Accordion-itemHeader"
          type="button"
          aria-expanded="true"
          @click="()=>isOpen = !isOpen"
        >
          <slot name="header" />
        </button>
        <svg
          class="spectrum-Icon spectrum-UIIcon-ChevronRight100 spectrum-Accordion-itemIndicator"
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
<style>
@import "@spectrum-css/accordion";
</style>
<script lang="ts">
import Vue from "vue";
import { Component }from "vue-property-decorator";

@Component({})
export default class SpAccordion extends Vue {
    isOpen:boolean = false
    // @Prop({default: ""})header!:string

}
</script>