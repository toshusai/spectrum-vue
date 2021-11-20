
<template>
    <component-view
    name="PaginationButton"
    :propData="propData"
    :eventData="eventData"
    >
        <pagination-button></pagination-button>
    </component-view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class PaginationButtonPage extends Vue {
  propData = [];
  eventData = [];
}
</script>
