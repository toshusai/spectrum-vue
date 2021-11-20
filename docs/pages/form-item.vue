
<template>
    <component-view
    name="FormItem"
    :propData="propData"
    :eventData="eventData"
    >
        <form-item></form-item>
    </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class FormItemPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
