
<template>
    <component-view
    name="Dialog"
    :propData="propData"
    :eventData="eventData"
    >
        <dialog></dialog>
    </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class DialogPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
