<template>
  <component-view
    name="ButtonGroup"
    :propData="propData"
    :eventData="eventData"
    :slotData="slotData"
  >
    <sp-button-group>
      <sp-button :group="true">Button</sp-button>
      <sp-button :group="true" type="primary">Button</sp-button>
      <sp-button :group="true" type="primary" :quiet="true">Button</sp-button>
    </sp-button-group>
    <code-view
      :code="`&lt;sp-button-group&gt;
  &lt;sp-button :group=&quot;true&quot;&gt;Button&lt;/sp-button&gt;
  &lt;sp-button :group=&quot;true&quot; type=&quot;primary&quot;&gt;Button&lt;/sp-button&gt;
  &lt;sp-button :group=&quot;true&quot; type=&quot;primary&quot; :quiet=&quot;true&quot;&gt;Button&lt;/sp-button&gt;
&lt;/sp-button-group&gt;`"
    ></code-view>

    <sp-button-group :vertical="true">
      <sp-button :group="true">Button</sp-button>
      <sp-button :group="true" type="primary">Button</sp-button>
      <sp-button :group="true" type="primary" :quiet="true">Button</sp-button>
    </sp-button-group>
    <code-view
      :code="`&lt;sp-button-group :vertical=&quot;true&quot;&gt;
  &lt;sp-button :group=&quot;true&quot;&gt;Button&lt;/sp-button&gt;
  &lt;sp-button :group=&quot;true&quot; type=&quot;primary&quot;&gt;Button&lt;/sp-button&gt;
  &lt;sp-button :group=&quot;true&quot; type=&quot;primary&quot; :quiet=&quot;true&quot;&gt;Button&lt;/sp-button&gt;
&lt;/sp-button-group&gt;`"
    ></code-view>
  </component-view>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class ButtonGroupPage extends Vue {
  propData = [
    { prop: "vertical", type: "boolean", default: "false" },
    { prop: "dialog", type: "boolean", default: "false" },
  ];
  slotData = [{ name: "default" }];
  eventData = [];
}
</script>
