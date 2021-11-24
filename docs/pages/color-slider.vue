
<template>
    <component-view
    name="ColorSlider"
    :propData="propData"
    :eventData="eventData"
    :slotData="slotData"
    >
        <h3>Hue</h3>

<sp-color-slider :h="h" @change="v => h = v" />
<div>
  {{ h }}
</div>
<code-view :code="`&lt;sp-color-slider :h=&quot;h&quot; @change=&quot;v =&gt; h = v&quot; /&gt;
&lt;div&gt;
  {{ h }}
&lt;/div&gt;`"></code-view>

<h3>Alpha</h3>

<sp-color-slider :h="a" :alpha="true" @change="v => a = v" />
<div>
  {{ a }}
</div>
<code-view :code="`&lt;sp-color-slider :h=&quot;a&quot; :alpha=&quot;true&quot; @change=&quot;v =&gt; a = v&quot; /&gt;
&lt;div&gt;
  {{ a }}
&lt;/div&gt;`"></code-view>

    </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({})
export default class ColorSliderPage extends Vue {
  propData = [{"prop":"h","type":"number","default":"0"},{"prop":"alpha","type":"boolean","default":"false"}];
  slotData = [];
  eventData = [];

  
h = 0;
a = 0;

}
</script>
