<template>
  <div>
    <h1>{{ name }}</h1>
    <h2>Overview</h2>

    <sp-divider />

    <slot />

    <h2>Usage</h2>
    <sp-divider />

    <template v-if="propData.length > 0">
      <h3>Props</h3>
      <sp-table
        style="width: 100%"
        class="spectrum-Code spectrum-Code--sizeXS"
        :headers="propHeaders"
        :data="propData"
      >
      </sp-table>
    </template>

    <template v-if="eventData.length > 0">
      <h3>Event</h3>
      <sp-table
        style="width: 100%"
        class="spectrum-Code spectrum-Code--sizeXS"
        :headers="eventHeaders"
        :data="eventData"
      >
      </sp-table>
    </template>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class ComponentView extends Vue {
  @Prop({ default: "" }) name!: string;
  @Prop({ default: () => [] }) propData!: any[];
  @Prop({ default: () => [] }) eventData!: any[];

  propHeaders = [
    { text: "Prop", key: "prop" },
    { text: "Type", key: "type" },
    { text: "default", key: "default" },
  ];

  eventHeaders = [
    { text: "Event", key: "event" },
    { text: "Argument", key: "arg" },
  ];
}
</script>