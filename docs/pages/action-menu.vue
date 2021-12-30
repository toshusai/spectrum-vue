
<template>
    <component-view
    name="ActionMenu"
    :propData="propData"
    :eventData="eventData"
    :slotData="slotData"
    >
        <h3>Standard</h3>

<sp-action-menu :items="items"></sp-action-menu>
<sp-action-menu :items="items">ActionMenu</sp-action-menu>
<code-view :code="`&lt;sp-action-menu :items=&quot;items&quot;&gt;&lt;/sp-action-menu&gt;
&lt;sp-action-menu :items=&quot;items&quot;&gt;ActionMenu&lt;/sp-action-menu&gt;`"></code-view>

<h3>size</h3>

<sp-action-menu :items="items" size="S"></sp-action-menu>
<sp-action-menu :items="items" size="S">Size S</sp-action-menu>
<code-view :code="`&lt;sp-action-menu :items=&quot;items&quot; size=&quot;S&quot;&gt;&lt;/sp-action-menu&gt;
&lt;sp-action-menu :items=&quot;items&quot; size=&quot;S&quot;&gt;Size S&lt;/sp-action-menu&gt;`"></code-view>

<h3>slot item</h3>

<sp-action-menu :items="items">
  <template #item="{ item }">
    <div style="white-space: nowrap">
      <sp-icon name="Image" />
      {{ item.text }}
    </div>
  </template>
</sp-action-menu>
<code-view :code="`&lt;sp-action-menu :items=&quot;items&quot;&gt;
  &lt;template #item=&quot;{ item }&quot;&gt;
    &lt;div style=&quot;white-space: nowrap&quot;&gt;
      &lt;sp-icon name=&quot;Image&quot; /&gt;
      {{ item.text }}
    &lt;/div&gt;
  &lt;/template&gt;
&lt;/sp-action-menu&gt;`"></code-view>
    </component-view>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class ActionMenuPage extends Vue {
  propData = [{"prop":"items","type":"MenuItem[]","default":"() => []"},{"prop":"icon","type":"boolean","default":"true"},{"prop":"size","type":"string","default":"\"M\""}];
  slotData = [{"name":"item"},{"name":"default"}];
  eventData = [];

  
}
</script>
