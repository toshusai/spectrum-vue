<template>
  <div
    v-show="isOpen"
    ref="modal"
    class="spectrum-Modal-wrapper"
  >
    <div class="spectrum-Underlay is-open" />
    <div class="spectrum-Modal is-open">
      <div class="spectrum-Dialog">
        <slot />
      </div>
    </div>
  </div>
</template>



<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class SpModal extends Vue {
  @Prop({ default: false }) isOpen!: boolean;
}
</script>