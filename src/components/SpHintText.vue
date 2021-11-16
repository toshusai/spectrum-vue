<template>
  <div class="spectrum-Form-item">
    <div
      class="
        spectrum-HelpText spectrum-HelpText--sizeS spectrum-HelpText--negative
      "
    >
      <svg
        v-if="icon"
        class="
          spectrum-Icon spectrum-Icon--sizeM
          spectrum-HelpText-validationIcon
        "
        focusable="false"
        aria-hidden="true"
      >
        <use xlink:href="#spectrum-icon-18-Alert" />
      </svg>
      <div class="spectrum-HelpText-text">
        {{ text }}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class SpHintText extends Vue {
  @Prop({ default: "" })
  text!: string;

  @Prop({ default: false })
  icon!: boolean;
}
</script>