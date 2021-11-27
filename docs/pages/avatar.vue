
<template>
    <component-view
    name="Avatar"
    :propData="propData"
    :eventData="eventData"
    :slotData="slotData"
    >
        
<h3>Standard</h3>
<sp-avatar src="https://github.com/toshusai.png" />
<sp-avatar size="50" src="https://github.com/toshusai.png" />
<code-view :code="`&lt;h3&gt;Standard&lt;/h3&gt;
&lt;sp-avatar src=&quot;https://github.com/toshusai.png&quot; /&gt;
&lt;sp-avatar size=&quot;50&quot; src=&quot;https://github.com/toshusai.png&quot; /&gt;`"></code-view>

<h3>Disabled</h3>

<sp-avatar src="https://github.com/toshusai.png" :disabled="true" />
<sp-avatar size="50" src="https://github.com/toshusai.png" :disabled="true" />
<code-view :code="`&lt;sp-avatar src=&quot;https://github.com/toshusai.png&quot; :disabled=&quot;true&quot; /&gt;
&lt;sp-avatar size=&quot;50&quot; src=&quot;https://github.com/toshusai.png&quot; :disabled=&quot;true&quot; /&gt;`"></code-view>
    </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({})
export default class AvatarPage extends Vue {
  propData = [{"prop":"disabled","type":"boolean","default":"false"},{"prop":"size","type":"string","default":"\"100\""},{"prop":"src","type":"string","default":"\"\""}];
  slotData = [];
  eventData = [];

  
}
</script>
