<template>
  <component-view name="Slider" :propData="propData" :eventData="eventData">
    <h3>Standard</h3>
    <sp-slider :min="0" :max="1" :value="value1" @input="(v) => (value1 = v)" />
    {{ value1 }}

    <h3>filled</h3>
    <sp-slider
      :filled="true"
      :min="0"
      :max="100"
      :value="value2"
      @input="(v) => (value2 = v)"
    />
    {{ value2 }}

    <h3>label + showValue</h3>
    <sp-slider
      :label="'This is label'"
      :showValue="true"
      :min="0"
      :max="100"
      :value="value3"
      @input="(v) => (value3 = v)"
    />
    {{ value3 }}

    <h3>step</h3>
    <sp-slider
      :label="'min 0, max 50, step 5'"
      :showValue="true"
      :min="0"
      :max="50"
      :step="5"
      :value="value4"
      @input="(v) => (value4 = v)"
    />

    <h3>ramp</h3>
    <sp-slider
      :label="'Ramp'"
      :showValue="true"
      :min="0"
      :max="100"
      :value="value5"
      :ramp="true"
      @input="(v) => (value5 = v)"
    />
  </component-view>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class SliderPage extends Vue {
  value1: number = 0.5;
  value2: number = 0;
  value3: number = 0;
  value4: number = 0;
  value5: number = 50;

  propData = [
    { prop: "disabled", type: "boolean", default: "false" },
    { prop: "filled", type: "boolean", default: "false" },
    { prop: "showValue", type: "boolean", default: "false" },
    { prop: "label", type: "string", default: "" },
    { prop: "value", type: "number", default: "0" },
    { prop: "step", type: "number", default: "0" },
    { prop: "min", type: "number", default: "0" },
    { prop: "max", type: "number", default: "0" },
  ];

  eventData = [{ event: "input", arg: "Event" }];
}
</script>
