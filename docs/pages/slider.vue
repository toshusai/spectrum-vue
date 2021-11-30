
<template>
    <component-view
    name="Slider"
    :propData="propData"
    :eventData="eventData"
    :slotData="slotData"
    >
        <h3>Standard</h3>

<sp-slider :min="0" :max="1" :value="value1" @input="(v) => (value1 = v)" />
{{ value1 }}
<code-view :code="`&lt;sp-slider :min=&quot;0&quot; :max=&quot;1&quot; :value=&quot;value1&quot; @input=&quot;(v) =&gt; (value1 = v)&quot; /&gt;
{{ value1 }}`"></code-view>

<h3>filled</h3>

<sp-slider
  :filled="true"
  :min="0"
  :max="100"
  :value="value2"
  @input="(v) => (value2 = v)"
/>
{{ value2 }}
<code-view :code="`&lt;sp-slider
  :filled=&quot;true&quot;
  :min=&quot;0&quot;
  :max=&quot;100&quot;
  :value=&quot;value2&quot;
  @input=&quot;(v) =&gt; (value2 = v)&quot;
/&gt;
{{ value2 }}`"></code-view>

<h3>label + showValue</h3>

<sp-slider
  :label="'This is label'"
  :valueText="value3"
  :min="0"
  :max="100"
  :value="value3"
  @input="(v) => (value3 = v)"
/>
{{ value3 }}
<code-view :code="`&lt;sp-slider
  :label=&quot;'This is label'&quot;
  :valueText=&quot;value3&quot;
  :min=&quot;0&quot;
  :max=&quot;100&quot;
  :value=&quot;value3&quot;
  @input=&quot;(v) =&gt; (value3 = v)&quot;
/&gt;
{{ value3 }}`"></code-view>

<h3>step</h3>

<sp-slider
  :label="'min 0, max 50, step 5'"
  :valueText="value4"
  :min="0"
  :max="50"
  :step="5"
  :value="value4"
  @input="(v) => (value4 = v)"
/>
<code-view :code="`&lt;sp-slider
  :label=&quot;'min 0, max 50, step 5'&quot;
  :valueText=&quot;value4&quot;
  :min=&quot;0&quot;
  :max=&quot;50&quot;
  :step=&quot;5&quot;
  :value=&quot;value4&quot;
  @input=&quot;(v) =&gt; (value4 = v)&quot;
/&gt;`"></code-view>

<h3>ramp</h3>

<sp-slider
  :label="'Ramp'"
  :valueText="value5"
  :min="0"
  :max="100"
  :value="value5"
  :ramp="true"
  @input="(v) => (value5 = v)"
/>
<code-view :code="`&lt;sp-slider
  :label=&quot;'Ramp'&quot;
  :valueText=&quot;value5&quot;
  :min=&quot;0&quot;
  :max=&quot;100&quot;
  :value=&quot;value5&quot;
  :ramp=&quot;true&quot;
  @input=&quot;(v) =&gt; (value5 = v)&quot;
/&gt;`"></code-view>


    </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({})
export default class SliderPage extends Vue {
  propData = [{"prop":"disabled","type":"boolean","default":"false"},{"prop":"filled","type":"boolean","default":"false"},{"prop":"valueText","type":"string","default":"\"\""},{"prop":"ramp","type":"boolean","default":"false"},{"prop":"label","type":"string","default":"\"\""},{"prop":"value","type":"number","default":"0"},{"prop":"step","type":"number","default":"0"},{"prop":"min","type":"number","default":"0"},{"prop":"max","type":"number","default":"0"},{"prop":"offset","type":"number","default":"0"}];
  slotData = [];
  eventData = [];

  
value1: number = 0.5;
value2: number = 0;
value3: number = 0;
value4: number = 0;
value5: number = 50;

}
</script>
