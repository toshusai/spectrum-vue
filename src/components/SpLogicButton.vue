<template>
  <button
    v-bind="$attrs"
    class="spectrum-LogicButton"
    :class="'spectrum-LogicButton--' + (or ? 'or' : 'and')"
  >
    {{ or ? "Or" : "And" }}
  </button>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class SpLogicButton extends Vue {
  @Prop({ default: false }) or!: boolean;
}
</script>