<template>
  <component-view
    name="Checkbox"
    :propData="propData"
    :eventData="eventData"
    :slotData="slotData"
  >
    <sp-checkbox>Checkbox</sp-checkbox>
    <br />
    <sp-checkbox :emphasized="true">Checkbox</sp-checkbox>
    <br />
    <sp-checkbox :indeterminate="true">Checkbox</sp-checkbox>
    <br />
    <sp-checkbox :invalid="true">Checkbox</sp-checkbox>
    <br />
    <sp-checkbox :disabled="true">Checkbox</sp-checkbox>
    <code-view
      :code="`&lt;sp-checkbox&gt;Checkbox&lt;/sp-checkbox&gt;
&lt;br /&gt;
&lt;sp-checkbox :emphasized=&quot;true&quot;&gt;Checkbox&lt;/sp-checkbox&gt;
&lt;br /&gt;
&lt;sp-checkbox :indeterminate=&quot;true&quot;&gt;Checkbox&lt;/sp-checkbox&gt;
&lt;br /&gt;
&lt;sp-checkbox :invalid=&quot;true&quot;&gt;Checkbox&lt;/sp-checkbox&gt;
&lt;br /&gt;
&lt;sp-checkbox :disabled=&quot;true&quot;&gt;Checkbox&lt;/sp-checkbox&gt;`"
    ></code-view>

    <h3>Size</h3>

    <div>
      <sp-checkbox size="S">Checkbox</sp-checkbox>
    </div>
    <div>
      <sp-checkbox size="M">Checkbox</sp-checkbox>
    </div>
    <div>
      <sp-checkbox size="L">Checkbox</sp-checkbox>
    </div>
    <code-view
      :code="`&lt;div&gt;
  &lt;sp-checkbox size=&quot;S&quot;&gt;Checkbox&lt;/sp-checkbox&gt;
&lt;/div&gt;
&lt;div&gt;
  &lt;sp-checkbox size=&quot;M&quot;&gt;Checkbox&lt;/sp-checkbox&gt;
&lt;/div&gt;
&lt;div&gt;
  &lt;sp-checkbox size=&quot;L&quot;&gt;Checkbox&lt;/sp-checkbox&gt;
&lt;/div&gt;`"
    ></code-view>
  </component-view>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class CheckboxPage extends Vue {
  propData = [
    { prop: "checked", type: "boolean", default: "false" },
    { prop: "size", type: "string", default: '"M"' },
    { prop: "disabled", type: "boolean", default: "false" },
    { prop: "emphasized", type: "boolean", default: "false" },
    { prop: "indeterminate", type: "boolean", default: "false" },
    { prop: "invalid", type: "boolean", default: "false" },
  ];
  slotData = [{ name: "default" }];
  eventData = [];
}
</script>
