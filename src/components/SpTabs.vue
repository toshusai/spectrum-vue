<template>
  <div
    style="margin: auto"
    class="spectrum-Tabs spectrum-Tabs--sizeM spectrum-Tabs--horizontal"
  >
    <div
      v-for="tab in tabs"
      :key="tab"
      class="spectrum-Tabs-item is-selected"
      tabindex="0"
    >
      <span class="spectrum-Tabs-itemLabel">{{ tab }}</span>
    </div>
    <slot />
    <div
      class="spectrum-Tabs-selectionIndicator"
      style="width: 28px; left: 0px"
    />
  </div>
</template>



<script lang="ts">


import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class SpTabs extends Vue {
  @Prop({ default: () => [] }) tabs!: string[];
  @Prop({ default: 0 }) index!: number;
}
</script>