
<template>
    <component-view
    name="Badge"
    :propData="propData"
    :eventData="eventData"
    :slotData="slotData"
    >
        
<sp-badge>Badge</sp-badge>
<sp-badge color="informative">Badge</sp-badge>
<sp-badge color="positive">Badge</sp-badge>
<sp-badge color="negative">Badge</sp-badge>
<sp-badge color="fuchsia">Badge</sp-badge>
<sp-badge color="indigo">Badge</sp-badge>
<sp-badge color="magenta">Badge</sp-badge>
<sp-badge color="purple">Badge</sp-badge>
<sp-badge color="seafoam">Badge</sp-badge>
<sp-badge color="yellow">Badge</sp-badge>
<code-view :code="`&lt;sp-badge&gt;Badge&lt;/sp-badge&gt;
&lt;sp-badge color=&quot;informative&quot;&gt;Badge&lt;/sp-badge&gt;
&lt;sp-badge color=&quot;positive&quot;&gt;Badge&lt;/sp-badge&gt;
&lt;sp-badge color=&quot;negative&quot;&gt;Badge&lt;/sp-badge&gt;
&lt;sp-badge color=&quot;fuchsia&quot;&gt;Badge&lt;/sp-badge&gt;
&lt;sp-badge color=&quot;indigo&quot;&gt;Badge&lt;/sp-badge&gt;
&lt;sp-badge color=&quot;magenta&quot;&gt;Badge&lt;/sp-badge&gt;
&lt;sp-badge color=&quot;purple&quot;&gt;Badge&lt;/sp-badge&gt;
&lt;sp-badge color=&quot;seafoam&quot;&gt;Badge&lt;/sp-badge&gt;
&lt;sp-badge color=&quot;yellow&quot;&gt;Badge&lt;/sp-badge&gt;`"></code-view>


<sp-badge size="S">Badge</sp-badge>
<sp-badge size="M">Badge</sp-badge>
<sp-badge size="L">Badge</sp-badge>
<sp-badge size="XL">Badge</sp-badge>
<code-view :code="`&lt;sp-badge size=&quot;S&quot;&gt;Badge&lt;/sp-badge&gt;
&lt;sp-badge size=&quot;M&quot;&gt;Badge&lt;/sp-badge&gt;
&lt;sp-badge size=&quot;L&quot;&gt;Badge&lt;/sp-badge&gt;
&lt;sp-badge size=&quot;XL&quot;&gt;Badge&lt;/sp-badge&gt;`"></code-view>
    </component-view>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class BadgePage extends Vue {
  propData = [{"prop":"size","type":"string","default":"\"S\""},{"prop":"color","type":"string","default":"\"neutral\""}];
  slotData = [{"name":"default"}];
  eventData = [];

  
}
</script>
