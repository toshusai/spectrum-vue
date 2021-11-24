
<template>
    <component-view
    name="ActionButton"
    :propData="propData"
    :eventData="eventData"
    :slotData="slotData"
    >
        <h3>Standard</h3>

<sp-action-button size="S">S</sp-action-button>
<sp-action-button size="M">M</sp-action-button>
<sp-action-button size="L">L</sp-action-button>
<code-view :code="`&lt;sp-action-button size=&quot;S&quot;&gt;S&lt;/sp-action-button&gt;
&lt;sp-action-button size=&quot;M&quot;&gt;M&lt;/sp-action-button&gt;
&lt;sp-action-button size=&quot;L&quot;&gt;L&lt;/sp-action-button&gt;`"></code-view>

<h3>Standard</h3>

<sp-action-button>
  default
</sp-action-button>

<sp-action-button :selected="true">
  selected
</sp-action-button>

<sp-action-button :disabled="true">
  disabled
</sp-action-button>

<sp-action-button :selected="true" :disabled="true">
  selected + disabled
</sp-action-button>
<code-view :code="`&lt;sp-action-button&gt;
  default
&lt;/sp-action-button&gt;

&lt;sp-action-button :selected=&quot;true&quot;&gt;
  selected
&lt;/sp-action-button&gt;

&lt;sp-action-button :disabled=&quot;true&quot;&gt;
  disabled
&lt;/sp-action-button&gt;

&lt;sp-action-button :selected=&quot;true&quot; :disabled=&quot;true&quot;&gt;
  selected + disabled
&lt;/sp-action-button&gt;`"></code-view>

<h3>Quiet</h3>

<sp-action-button :quiet="true">
  default
</sp-action-button>

<sp-action-button :quiet="true" :selected="true">
  selected
</sp-action-button>

<sp-action-button :quiet="true" :disabled="true">
  disabled
</sp-action-button>

<sp-action-button :quiet="true" :selected="true" :disabled="true">
  selected + disabled
</sp-action-button>
<code-view :code="`&lt;sp-action-button :quiet=&quot;true&quot;&gt;
  default
&lt;/sp-action-button&gt;

&lt;sp-action-button :quiet=&quot;true&quot; :selected=&quot;true&quot;&gt;
  selected
&lt;/sp-action-button&gt;

&lt;sp-action-button :quiet=&quot;true&quot; :disabled=&quot;true&quot;&gt;
  disabled
&lt;/sp-action-button&gt;

&lt;sp-action-button :quiet=&quot;true&quot; :selected=&quot;true&quot; :disabled=&quot;true&quot;&gt;
  selected + disabled
&lt;/sp-action-button&gt;`"></code-view>

<h3>Emphasized</h3>

<sp-action-button :emphasized="true">
  default
</sp-action-button>

<sp-action-button :emphasized="true" :selected="true">
  selected
</sp-action-button>

<sp-action-button :emphasized="true" :disabled="true">
  disabled
</sp-action-button>

<sp-action-button :emphasized="true" :selected="true" :disabled="true">
  selected + disabled
</sp-action-button>
<code-view :code="`&lt;sp-action-button :emphasized=&quot;true&quot;&gt;
  default
&lt;/sp-action-button&gt;

&lt;sp-action-button :emphasized=&quot;true&quot; :selected=&quot;true&quot;&gt;
  selected
&lt;/sp-action-button&gt;

&lt;sp-action-button :emphasized=&quot;true&quot; :disabled=&quot;true&quot;&gt;
  disabled
&lt;/sp-action-button&gt;

&lt;sp-action-button :emphasized=&quot;true&quot; :selected=&quot;true&quot; :disabled=&quot;true&quot;&gt;
  selected + disabled
&lt;/sp-action-button&gt;`"></code-view>

</code>
<h3>Emphasized + Quiet</h3>

<sp-action-button :emphasized="true" :quiet="true">
  default
</sp-action-button>

<sp-action-button :emphasized="true" :quiet="true" :selected="true">
  selected
</sp-action-button>

<sp-action-button :emphasized="true" :quiet="true" :disabled="true">
  disabled
</sp-action-button>

<sp-action-button :emphasized="true" :quiet="true" :selected="true" :disabled="true">
  selected + disabled
</sp-action-button>
<code-view :code="`&lt;sp-action-button :emphasized=&quot;true&quot; :quiet=&quot;true&quot;&gt;
  default
&lt;/sp-action-button&gt;

&lt;sp-action-button :emphasized=&quot;true&quot; :quiet=&quot;true&quot; :selected=&quot;true&quot;&gt;
  selected
&lt;/sp-action-button&gt;

&lt;sp-action-button :emphasized=&quot;true&quot; :quiet=&quot;true&quot; :disabled=&quot;true&quot;&gt;
  disabled
&lt;/sp-action-button&gt;

&lt;sp-action-button :emphasized=&quot;true&quot; :quiet=&quot;true&quot; :selected=&quot;true&quot; :disabled=&quot;true&quot;&gt;
  selected + disabled
&lt;/sp-action-button&gt;`"></code-view>
    </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({})
export default class ActionButtonPage extends Vue {
  propData = [{"prop":"quiet","type":"boolean","default":"false"},{"prop":"item","type":"boolean","default":"false"},{"prop":"corner","type":"boolean","default":"false"},{"prop":"selected","type":"boolean","default":"false"},{"prop":"emphasized","type":"boolean","default":"false"},{"prop":"disabled","type":"boolean","default":"false"},{"prop":"size","type":"string","default":"\"M\""}];
  slotData = [{"name":"default"}];
  eventData = [];

  
}
</script>
