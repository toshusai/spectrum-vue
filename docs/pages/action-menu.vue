<template>
  <component-view
    name="ActionMenu"
    :propData="propData"
    :eventData="eventData"
    :slotData="slotData"
  >
    <h3>Standard</h3>
    <sp-action-menu :items="items"></sp-action-menu>
    <sp-action-menu :items="items">ActionMenu</sp-action-menu>
    <code-view :code="code1" />
    <h3>size</h3>
    <sp-action-menu :items="items" size="S"></sp-action-menu>
    <sp-action-menu :items="items" size="S">Size S</sp-action-menu>
    <code-view :code="code2" />
    <h3>slot item</h3>
    <sp-action-menu :items="items">
      <template #item="{ item }">
        <div style="white-space: nowrap">
          <sp-icon name="Image" />
          {{ item.text }}
        </div>
      </template>
    </sp-action-menu>
    <code-view :code="code3" />
  </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class ActionMenuPage extends Vue {
  propData = [{ prop: "items", type: "MenuItem", default: "[]" }];
  eventData = [];
  slotData = [{ name: "default" }, { name: "item" }];

  code1 = `<sp-action-menu :items="items"></sp-action-menu>
<sp-action-menu :items="items">ActionMenu</sp-action-menu>`;

  code2 = `<sp-action-menu :items="items" size="S"></sp-action-menu>
<sp-action-menu :items="items" size="S">Size S</sp-action-menu>`;

  code3 = `<sp-action-menu :items="items">
  <template #item="{ item }">
    <div style="white-space: nowrap">
      <sp-icon name="Image" />
      {{ item.text }}
    </div>
  </template>
</sp-action-menu>`;

  items = [
    { text: "Item1", action: () => {} },
    { text: "Item2", action: () => {} },
  ];
}
</script>
