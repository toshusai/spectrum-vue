<template>
  <component-view
    name="Button"
    :propData="propData"
    :eventData="eventData"
    :slotData="slotData"
  >
    <sp-button>Button</sp-button>
    <code-view :code="`&lt;sp-button&gt;Button&lt;/sp-button&gt;`"></code-view>

    <sp-button type="primary">Button</sp-button>
    <sp-button type="primary" :quiet="true">Button</sp-button>
    <code-view
      :code="`&lt;sp-button type=&quot;primary&quot;&gt;Button&lt;/sp-button&gt;
&lt;sp-button type=&quot;primary&quot; :quiet=&quot;true&quot;&gt;Button&lt;/sp-button&gt;`"
    ></code-view>

    <sp-button type="secondary">Button</sp-button>
    <code-view
      :code="`&lt;sp-button type=&quot;secondary&quot;&gt;Button&lt;/sp-button&gt;`"
    ></code-view>

    <sp-button :disabled="true">Button</sp-button>
    <code-view
      :code="`&lt;sp-button :disabled=&quot;true&quot;&gt;Button&lt;/sp-button&gt;`"
    ></code-view>
  </component-view>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class ButtonPage extends Vue {
  propData = [
    { prop: "disabled", type: "boolean", default: "false" },
    { prop: "quiet", type: "boolean", default: "false" },
    { prop: "group", type: "boolean", default: "false" },
    { prop: "size", type: "string", default: '"M"' },
    { prop: "type", type: "string", default: '"cta"' },
  ];
  slotData = [{ name: "default" }];
  eventData = [];
}
</script>
