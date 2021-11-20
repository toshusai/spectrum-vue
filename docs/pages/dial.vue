
<template>
    <component-view
    name="Dial"
    :propData="propData"
    :eventData="eventData"
    >
        <dial></dial>
    </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class DialPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
