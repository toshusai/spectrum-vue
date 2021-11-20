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
  isDrag = false;

  @Prop({ default: true }) isDraggable!: boolean;
  @Prop({ default: false }) gripper!: boolean;

  prevX = 0;

  start() {
    this.isDrag = true;
    addDragEventOnce((e) => {
      if (e instanceof MouseEvent) {
        let delta = e.pageX - this.prevX;
        if (this.prevX == 0) {
          delta = 0;
        }
        this.$emit("change", delta);
        this.prevX = e.pageX;
      }
    });
  }

  move(e: MouseEvent) {
    if (!this.isDrag) return;
    // this.$emit("change", e.movementX);
  }

  end() {
    this.isDrag = false;
    // document.body.removeEventListener("mousemove", this.move);
  }
}
</script>