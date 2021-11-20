
<template>
    <component-view
    name="Textfield"
    :propData="propData"
    :eventData="eventData"
    >
        <textfield></textfield>
    </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class TextfieldPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
