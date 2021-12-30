<template>
  <ul
    class="
      spectrum-TreeView spectrum-TreeView--sizeS spectrum-TreeView--thumbnail
    "
  >
    <li
      v-for="(item, i) in items"
      :key="i"
      class="spectrum-TreeView-item"
      style="margin: 2px 0 2px 0"
      :class="[selectedItem == item ? 'is-selected' : '']"
      @click="$emit('click', item)"
      @pointerdown="(e) => pointerdown(e, item, i)"
      @pointermove="(e) => pointermove(e, item, i)"
      @pointerup="(e) => pointerup(e, item, i)"
    >
      <a class="spectrum-TreeView-itemLink">
        <div
          v-if="thumbnail"
          class="
            spectrum-Thumbnail spectrum-TreeView-itemThumbnail
            spectrum-Thumbnail--S
          "
        >
          <img
            class="spectrum-Thumbnail-image"
            style="background: white"
            :src="item.src"
          >
        </div>
        <span class="spectrum-TreeView-itemLabel">
          <slot :item="item" />
        </span>
      </a>
    </li>
    <sp-drop-indicator
      ref="di"
      style="display: none"
      :style="diStyle"
    />
  </ul>
</template>



<script lang="ts">
import { Vue, Component, Prop, Ref } from "vue-property-decorator";
import DropPosition from "../utils/DropPosition";
import SpDropIndicator from "./SpDropIndicator.vue";

@Component({
  components: {
    SpDropIndicator,
  },
})
export default class SpListItemList extends Vue {
  @Prop() items!: any[];
  @Prop({ default: false }) thumbnail!: boolean;
  @Prop({ default: () => ({}) }) selectedItem!: any;
  @Ref() di!: SpDropIndicator;

  dragItem: any = null;

  diStyle: Partial<CSSStyleDeclaration> = {
    position: "absolute",
    width: "calc(100% - 10px)",
  };

  pointerdown(e: MouseEvent, item: any) {
    this.dragItem = item;
    const el = this.di.$el as HTMLElement;
    el.style.display = "none";
    const up = () => {
      const el = this.di.$el as HTMLElement;
      el.style.display = "none";
      document.body.removeEventListener("pointerup", up);
    };
    document.body.addEventListener("pointerup", up);
    this.$emit('pointerdown', item, e)
  }

  getPos(e: MouseEvent) {
    const tel = e.target as HTMLElement;
    const rect = tel.getBoundingClientRect();
    const y = e.offsetY; // - top -> bottom +
    const h = rect.height;
    const step = h / 4;
    if (y < step) {
      return DropPosition.TOP;
    } else if (y < step * 3) {
      return DropPosition.MIDDLE;
    } else {
      return DropPosition.BOTTOM;
    }
  }

  pointermove(e: MouseEvent, item: any, i: number) {
    if (!this.dragItem) return;
    if (this.dragItem == item) return;
    const height = 30;
    const el = this.di.$el as HTMLElement;
    const p = this.getPos(e);
    if (p == DropPosition.TOP) {
      el.style.top = height * i + "px";
    } else if (p == DropPosition.BOTTOM) {
      el.style.top = height * (i + 1) + "px";
    }
    el.style.display = "";
    this.$emit('pointermove', item, e)
  }

  pointerup(e: MouseEvent, item: any, i: number) {
    const p = this.getPos(e);
    if (p == DropPosition.TOP) {
      this.$emit("move", { item: this.dragItem, i: i });
    } else if (p == DropPosition.BOTTOM) {
      this.$emit("move", { item: this.dragItem, i: i + 1 });
    }
    this.dragItem = null;
    this.$emit('pointerup', item, e)
  }
}
/**
<code>
<sp-item-list-item :items="['A', 'B', 'C']" selectedItem="A"> 
  <template v-slot="{item}">
    {{item}}
  </template>
</sp-item-list-item>
</code>
 */
</script>