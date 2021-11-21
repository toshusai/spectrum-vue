<template>
  <div
    class="spectrum-SplitView-splitter"
    :class="{
      'is-draggable': isDraggable,
    }"
    @mousedown="start"
  >
    <div
      v-if="gripper"
      class="spectrum-SplitView-gripper"
    />
  </div>
</template>

<style>
@import "@spectrum-css/splitview";
</style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import addDragEventOnce from "../utils/addDragEventOnce";

@Component({})
export default class SpSplitViewSplitter extends Vue {
  @Prop({ default: true }) isDraggable!: boolean;
  @Prop({ default: false }) gripper!: boolean;
  @Prop({ default: false }) vertical!: boolean;

  prev = 0;

  start() {
    addDragEventOnce(
      (e) => {
        if (e instanceof MouseEvent) {
          let delta = e.pageX - this.prev;
          if (this.vertical) {
            delta = e.pageY - this.prev;
          }
          if (this.prev == 0) {
            delta = 0;
          }
          this.$emit("change", delta);
          if (this.vertical) {
            this.prev = e.pageY;
          } else {
            this.prev = e.pageX;
          }
        }
      },
      () => {
        this.prev = 0;
      }
    );
  }
}
</script>