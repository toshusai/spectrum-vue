
<template>
    <component-view
    name="ItemListItem"
    :propData="propData"
    :eventData="eventData"
    :slotData="slotData"
    >
        
<sp-item-list-item :items="['A', 'B', 'C']" selectedItem="A"> 
  <template v-slot="{item}">
    {{item}}
  </template>
</sp-item-list-item>
<code-view :code="`&lt;sp-item-list-item :items=&quot;['A', 'B', 'C']&quot; selectedItem=&quot;A&quot;&gt; 
  &lt;template v-slot=&quot;{item}&quot;&gt;
    {{item}}
  &lt;/template&gt;
&lt;/sp-item-list-item&gt;`"></code-view>
    </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({})
export default class ItemListItemPage extends Vue {
  propData = [{"prop":"thumbnail","type":"boolean","default":"false"},{"prop":"selectedItem","type":"any","default":"() => ({})"}];
  slotData = [];
  eventData = [];

  
}
</script>
