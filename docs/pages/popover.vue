
<template>
    <component-view
    name="Popover"
    :propData="propData"
    :eventData="eventData"
    :slotData="slotData"
    >
        
<sp-action-button @click="e => $refs.popover1.open(e.target)"> Open </sp-action-button>
<sp-popover ref="popover1"> <h3>Content</h3> </sp-popover>
<code-view :code="`&lt;sp-action-button @click=&quot;e =&gt; $refs.popover1.open(e.target)&quot;&gt; Open &lt;/sp-action-button&gt;
&lt;sp-popover ref=&quot;popover1&quot;&gt; &lt;h3&gt;Content&lt;/h3&gt; &lt;/sp-popover&gt;`"></code-view>

<sp-action-button @click="e => $refs.popover2.open(e.target)"> Open </sp-action-button>
<sp-popover ref="popover2" allow-pos="bottom-left"> <h3>Content</h3> </sp-popover>
<code-view :code="`&lt;sp-action-button @click=&quot;e =&gt; $refs.popover2.open(e.target)&quot;&gt; Open &lt;/sp-action-button&gt;
&lt;sp-popover ref=&quot;popover2&quot; allow-pos=&quot;bottom-left&quot;&gt; &lt;h3&gt;Content&lt;/h3&gt; &lt;/sp-popover&gt;`"></code-view>

<div style="display: flex">
<sp-action-button style="margin-left: auto" @click="e => $refs.popover3.open(e.target)"> Open </sp-action-button>
</div>
<sp-popover ref="popover3" allow-pos="right-top"> <h3>Content</h3> </sp-popover>
<code-view :code="`&lt;sp-action-button @click=&quot;e =&gt; $refs.popover3.open(e.target)&quot;&gt; Open &lt;/sp-action-button&gt;
&lt;sp-popover ref=&quot;popover3&quot; allow-pos=&quot;right-top&quot;&gt; &lt;h3&gt;Content&lt;/h3&gt; &lt;/sp-popover&gt;`"></code-view>


    </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({})
export default class PopoverPage extends Vue {
  propData = [{"prop":"left","type":"boolean","default":"false"},{"prop":"top","type":"boolean","default":"false"},{"prop":"allowPos","type":"string","default":"\"left-top \""}];
  slotData = [{"name":"default"}];
  eventData = [];

  

}
</script>
