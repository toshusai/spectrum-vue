<template>
  <component-view name="Textfield" :propData="propData" :eventData="eventData">
    <sp-slider-textfield
      :value="value"
      :max="100"
      @change="(v) => (value = v)"
      style="margin: 8px"
    />
  </component-view>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class index extends Vue {
  value: number = 0;

  propData = [
    { prop: "value", type: "string | number", default: "" },
    { prop: "quiet", type: "boolean", default: "false" },
    { prop: "disabled", type: "boolean", default: "false" },
    { prop: "invalid", type: "boolean", default: "false" },
    { prop: "valid", type: "boolean", default: "false" },
    { prop: "quiet", type: "boolean", default: "false" },
    { prop: "type", type: "string", default: "text" },
    { prop: "step", type: "number", default: "1" },
    { prop: "error", type: "string", default: "" },
    { prop: "hint", type: "string", default: "" },
    { prop: "placeholder", type: "string", default: "" },
  ];

  eventData = [
    { event: "change", arg: "string | number" },
    { event: "input", arg: "string | number" },
  ];

  emp = [
    { placeholder: "default" },
    { placeholder: "valid", valid: true },
    { placeholder: "hint", hint: "Hint" },
    { placeholder: "invalid or error", error: "Error" },
    { placeholder: "disabled", disabled: true },
  ];

  title = [
    { title: "Standard", quiet: false, emphasized: false },
    { title: "Quiet", quiet: true, emphasized: false },
  ].map((x) => {
    return {
      title: x.title,
      items: this.emp,
      quiet: x.quiet,
      emphasized: x.emphasized,
    };
  });
}
</script>