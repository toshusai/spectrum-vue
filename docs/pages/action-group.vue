
<template>
    <component-view
    name="ActionGroup"
    :propData="propData"
    :eventData="eventData"
    :slotData="slotData"
    >
        <h3>Standard</h3>

<sp-action-group>
  <sp-action-button :item="true">S</sp-action-button>
  <sp-action-button :item="true">M</sp-action-button>
  <sp-action-button :item="true">L</sp-action-button>
</sp-action-group>
<code-view :code="`&lt;sp-action-group&gt;
  &lt;sp-action-button :item=&quot;true&quot;&gt;S&lt;/sp-action-button&gt;
  &lt;sp-action-button :item=&quot;true&quot;&gt;M&lt;/sp-action-button&gt;
  &lt;sp-action-button :item=&quot;true&quot;&gt;L&lt;/sp-action-button&gt;
&lt;/sp-action-group&gt;`"></code-view>

<h3>Compact</h3>

<sp-action-group :compact="true">
  <sp-action-button :item="true">S</sp-action-button>
  <sp-action-button :item="true">M</sp-action-button>
  <sp-action-button :item="true">L</sp-action-button>
</sp-action-group>
<code-view :code="`&lt;sp-action-group :compact=&quot;true&quot;&gt;
  &lt;sp-action-button :item=&quot;true&quot;&gt;S&lt;/sp-action-button&gt;
  &lt;sp-action-button :item=&quot;true&quot;&gt;M&lt;/sp-action-button&gt;
  &lt;sp-action-button :item=&quot;true&quot;&gt;L&lt;/sp-action-button&gt;
&lt;/sp-action-group&gt;`"></code-view>

<h3>Vertical</h3>

<sp-action-group :compact="true" :vertical="true">
  <sp-action-button :item="true">S</sp-action-button>
  <sp-action-button :item="true">M</sp-action-button>
  <sp-action-button :item="true">L</sp-action-button>
</sp-action-group>
<code-view :code="`&lt;sp-action-group :compact=&quot;true&quot; :vertical=&quot;true&quot;&gt;
  &lt;sp-action-button :item=&quot;true&quot;&gt;S&lt;/sp-action-button&gt;
  &lt;sp-action-button :item=&quot;true&quot;&gt;M&lt;/sp-action-button&gt;
  &lt;sp-action-button :item=&quot;true&quot;&gt;L&lt;/sp-action-button&gt;
&lt;/sp-action-group&gt;`"></code-view>

<h3>Quiet</h3>

<sp-action-group :compact="true">
  <sp-action-button :quiet="true" :item="true">S</sp-action-button>
  <sp-action-button :quiet="true" :item="true">M</sp-action-button>
  <sp-action-button :quiet="true" :item="true">L</sp-action-button>
</sp-action-group>
<code-view :code="`&lt;sp-action-group :compact=&quot;true&quot;&gt;
  &lt;sp-action-button :quiet=&quot;true&quot; :item=&quot;true&quot;&gt;S&lt;/sp-action-button&gt;
  &lt;sp-action-button :quiet=&quot;true&quot; :item=&quot;true&quot;&gt;M&lt;/sp-action-button&gt;
  &lt;sp-action-button :quiet=&quot;true&quot; :item=&quot;true&quot;&gt;L&lt;/sp-action-button&gt;
&lt;/sp-action-group&gt;`"></code-view>
    </component-view>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class ActionGroupPage extends Vue {
  propData = [{"prop":"quiet","type":"boolean","default":"false"},{"prop":"vertical","type":"boolean","default":"false"},{"prop":"compact","type":"boolean","default":"false"}];
  slotData = [{"name":"default"}];
  eventData = [];

  
}
</script>
