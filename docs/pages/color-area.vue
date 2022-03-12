<template>
  <component-view
    name="ColorArea"
    :propData="propData"
    :eventData="eventData"
    :slotData="slotData"
  >
    <sp-color-area :color="color" @change="(v) => (color = v)" />
    <div>
      {{ color }}
    </div>
    <code-view
      :code="`&lt;sp-color-area :color=&quot;color&quot; @change=&quot;v =&gt; color = v&quot; /&gt;
&lt;div&gt;
{{color}}
&lt;/div&gt;`"
    ></code-view>
  </component-view>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import { Color } from "@toshusai/spectrum-vue";

@Component({})
export default class ColorAreaPage extends Vue {
  propData = [
    { prop: "h", type: "number", default: "0" },
    { prop: "color", type: "Color", default: "() => new Color()" },
  ];
  slotData = [];
  eventData = [];

  color = new Color();
}
</script>
