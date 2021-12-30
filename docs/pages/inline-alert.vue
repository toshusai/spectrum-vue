
<template>
    <component-view
    name="InlineAlert"
    :propData="propData"
    :eventData="eventData"
    :slotData="slotData"
    >
        <h3>Type</h3>

<sp-inline-alert>
  <template #header>
    Header
  </template>
  In-LineAlert
</sp-inline-alert>
<sp-inline-alert type="negative">
  <template #header>
    Header
  </template>
  In-LineAlert
</sp-inline-alert>
<sp-inline-alert type="success">
  <template #header>
    Header
  </template>
  In-LineAlert
</sp-inline-alert>
<sp-inline-alert type="help">
  <template #header>
    Header
  </template>
  In-LineAlert
</sp-inline-alert>
<sp-inline-alert type="error">
  <template #header>
    Header
  </template>
  In-LineAlert
</sp-inline-alert>
<code-view :code="`&lt;sp-inline-alert&gt;
  &lt;template #header&gt;
    Header
  &lt;/template&gt;
  In-LineAlert
&lt;/sp-inline-alert&gt;
&lt;sp-inline-alert type=&quot;negative&quot;&gt;
  &lt;template #header&gt;
    Header
  &lt;/template&gt;
  In-LineAlert
&lt;/sp-inline-alert&gt;
&lt;sp-inline-alert type=&quot;success&quot;&gt;
  &lt;template #header&gt;
    Header
  &lt;/template&gt;
  In-LineAlert
&lt;/sp-inline-alert&gt;
&lt;sp-inline-alert type=&quot;help&quot;&gt;
  &lt;template #header&gt;
    Header
  &lt;/template&gt;
  In-LineAlert
&lt;/sp-inline-alert&gt;
&lt;sp-inline-alert type=&quot;error&quot;&gt;
  &lt;template #header&gt;
    Header
  &lt;/template&gt;
  In-LineAlert
&lt;/sp-inline-alert&gt;`"></code-view>

<h3>Hooter</h3>

<sp-inline-alert>
  <template #header>
    Header
  </template>
  In-LineAlert
  <template #footer>
    <sp-button type="secondary">Footer</sp-button>
  </template>
</sp-inline-alert>
<code-view :code="`&lt;sp-inline-alert&gt;
  &lt;template #header&gt;
    Header
  &lt;/template&gt;
  In-LineAlert
  &lt;template #footer&gt;
    &lt;sp-button type=&quot;secondary&quot;&gt;Footer&lt;/sp-button&gt;
  &lt;/template&gt;
&lt;/sp-inline-alert&gt;`"></code-view>
    </component-view>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class InlineAlertPage extends Vue {
  propData = [{"prop":"header","type":"string","default":"\"\""},{"prop":"type","type":"string","default":"\"info\""}];
  slotData = [{"name":"header"},{"name":"footer"},{"name":"default"}];
  eventData = [];

  
}
</script>
