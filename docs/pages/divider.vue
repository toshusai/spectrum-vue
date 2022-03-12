<template>
  <component-view
    name="Divider"
    :propData="propData"
    :eventData="eventData"
    :slotData="slotData"
  >
    <div style="border: 1px orange solid; padding: 8px">
      <sp-divider />
    </div>
    <code-view
      :code="`&lt;div style=&quot;border: 1px orange solid; padding: 8px&quot;&gt;
  &lt;sp-divider /&gt;
&lt;/div&gt;`"
    ></code-view>

    <sp-action-group :compact="true">
      <sp-action-button :quiet="true">
        <sp-icon name="Add" />
      </sp-action-button>
      <sp-divider :vertical="true" />
      <sp-action-button :quiet="true">
        <sp-icon name="Brush" />
      </sp-action-button>
    </sp-action-group>
    <code-view
      :code="`&lt;sp-action-group :compact=&quot;true&quot;&gt;
  &lt;sp-action-button :quiet=&quot;true&quot;&gt;
    &lt;sp-icon name=&quot;Add&quot; /&gt;
  &lt;/sp-action-button&gt;
  &lt;sp-divider :vertical=&quot;true&quot; /&gt;
  &lt;sp-action-button :quiet=&quot;true&quot;&gt;
    &lt;sp-icon name=&quot;Brush&quot; /&gt;
  &lt;/sp-action-button&gt;
&lt;/sp-action-group&gt;`"
    ></code-view>
  </component-view>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class DividerPage extends Vue {
  propData = [{ prop: "vertical", type: "boolean", default: "false" }];
  slotData = [];
  eventData = [];
}
</script>
