<template>
  <component-view name="Avatar" :propData="propData" :eventData="eventData">
    <sp-avatar></sp-avatar>
  </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class AvatarPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
