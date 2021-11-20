
<template>
    <component-view
    name="Modal"
    :propData="propData"
    :eventData="eventData"
    >
        <modal></modal>
    </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class ModalPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
