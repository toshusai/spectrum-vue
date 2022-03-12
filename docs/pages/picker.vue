<template>
  <component-view
    name="Picker"
    :propData="propData"
    :eventData="eventData"
    :slotData="slotData"
  >
    <sp-picker :items="items" :value="value" @change="change" />
    <code-view
      :code="`&lt;sp-picker :items=&quot;items&quot; :value=&quot;value&quot; @change=&quot;change&quot; /&gt;`"
    ></code-view>
  </component-view>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class PickerPage extends Vue {
  propData = [
    { prop: "items", type: "MenuItem[]", default: "() => []" },
    { prop: "value", type: "MenuItem" },
    { prop: "disabled", type: "boolean", default: "false" },
    { prop: "invalid", type: "boolean", default: "false" },
    { prop: "size", type: "string", default: '"M"' },
    { prop: "quiet", type: "boolean", default: "false" },
    {
      prop: "select",
      type: "(item: MenuItem) => boolean",
      default: "() => () => false",
    },
  ];
  slotData = [];
  eventData = [];

  items = [
    { id: "id", text: "text" },
    { id: "id2", text: "text2" },
  ];

  value: any = null;

  mounted() {
    this.value = this.items[0];
  }

  change(_: any, item: any) {
    this.value = item;
  }
}
</script>
