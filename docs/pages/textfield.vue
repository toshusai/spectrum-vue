<template>
  <component-view
    name="Textfield"
    :propData="propData"
    :eventData="eventData"
    :slotData="slotData"
  >
    <h3>Standard</h3>

    <sp-textfield placeholder="default" />
    <sp-textfield placeholder="default" :valud="true" />
    <sp-textfield placeholder="default" hint="Hint" />
    <sp-textfield placeholder="default" error="Error" />
    <sp-textfield placeholder="default" :disabled="true" />
    <code-view
      :code="`&lt;sp-textfield placeholder=&quot;default&quot; /&gt;
&lt;sp-textfield placeholder=&quot;default&quot; :valud=&quot;true&quot; /&gt;
&lt;sp-textfield placeholder=&quot;default&quot; hint=&quot;Hint&quot; /&gt;
&lt;sp-textfield placeholder=&quot;default&quot; error=&quot;Error&quot; /&gt;
&lt;sp-textfield placeholder=&quot;default&quot; :disabled=&quot;true&quot; /&gt;`"
    ></code-view>
    <h3>Quiet</h3>

    <sp-textfield placeholder="default" :quiet="true" />
    <sp-textfield placeholder="default" :valud="true" :quiet="true" />
    <sp-textfield placeholder="default" hint="Hint" :quiet="true" />
    <sp-textfield placeholder="default" error="Error" :quiet="true" />
    <sp-textfield placeholder="default" :disabled="true" :quiet="true" />
    <code-view
      :code="`&lt;sp-textfield placeholder=&quot;default&quot; :quiet=&quot;true&quot; /&gt;
&lt;sp-textfield placeholder=&quot;default&quot; :valud=&quot;true&quot; :quiet=&quot;true&quot; /&gt;
&lt;sp-textfield placeholder=&quot;default&quot; hint=&quot;Hint&quot; :quiet=&quot;true&quot; /&gt;
&lt;sp-textfield placeholder=&quot;default&quot; error=&quot;Error&quot; :quiet=&quot;true&quot; /&gt;
&lt;sp-textfield placeholder=&quot;default&quot; :disabled=&quot;true&quot; :quiet=&quot;true&quot; /&gt;`"
    ></code-view>
  </component-view>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class TextfieldPage extends Vue {
  propData = [
    { prop: "disabled", type: "boolean", default: "false" },
    { prop: "value", type: "string | number", default: '""' },
    { prop: "invalid", type: "boolean", default: "false" },
    { prop: "valid", type: "boolean", default: "false" },
    { prop: "quiet", type: "boolean", default: "false" },
    { prop: "type", type: "string", default: '"text"' },
    { prop: "step", type: "number", default: "1" },
    { prop: "error", type: "string", default: '""' },
    { prop: "hint", type: "string", default: '""' },
    { prop: "placeholder", type: "string", default: '""' },
    { prop: "size", type: "string", default: '"M"' },
  ];
  slotData = [];
  eventData = [];
}
</script>
