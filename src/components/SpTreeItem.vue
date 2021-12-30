<template>
  <ul
    class="
      spectrum-TreeView spectrum-TreeView--sizeS spectrum-TreeView--thumbnail
    "
  >
    <li
      ref="iel"
      class="spectrum-TreeView-item"
      :class="[
        isOpen ? 'is-open' : '',
        selectedItem == item ? 'is-selected' : '',
      ]"
      @pointerdown="$emit('pointerdown', item)"
      @pointerup="$emit('pointerup', item)"
      @contextmenu="(v, is) => $emit('contextmenu', v, is)"
      @click="$emit('select', item)"
    >
      <!-- about padding-left -->
      <!-- https://github.com/toshusai/spectrum-vue/issues/1 -->
      <a
        class="spectrum-TreeView-itemLink"
        style="padding-left: var(--spectrum-treeview-item-affordance-size)"
      >
        <svg
          v-show="hasChild"
          class="
            spectrum-Icon
            spectrum-UIIcon-ChevronRight100
            spectrum-TreeView-itemIndicator
          "
          focusable="false"
          aria-hidden="true"
          style="pointer-events: all"
          @pointerdown="toggleOpen"
        >
          <use xlink:href="#spectrum-css-icon-Chevron100" />
        </svg>
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
            src="img/x.png"
            alt="Flowers"
          >
        </div>
        <span class="spectrum-TreeView-itemLabel">
          <slot :item="item" />
        </span>
      </a>
    </li>
    <li class="spectrum-TreeView-item is-open">
      <template v-if="isOpen">
        <sp-tree-item
          v-for="(child, i) in children"
          :key="i"
          :is-root="false"
          :thumbnail="thumbnail"
          :selected-item="selectedItem"
          :item-sync.sync="children[i]"
          :drag-item="dragItem"
          @select="(e, v) => $emit('select', e, v)"
          @pointerdown="(v) => $emit('pointerdown', v)"
          @contextmenu="(v, is) => $emit('contextmenu', v, is)"
          @move="(v, el) => $emit('move', v, el)"
          @pointerup="$emit('pointerup', item)"
        >
          <template #default="{ item }">
            <slot :item="item" />
          </template>
        </sp-tree-item>
      </template>
    </li>
  </ul>
</template>



<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, PropSync } from "vue-property-decorator";
import DropPosition from "../utils/DropPosition";
import Item from "../utils/Item";

@Component({
  name: "SpTreeItem",
  components: { SpTreeItem },
})
export default class SpTreeItem extends Vue {
  @Prop({ default: true }) hideRoot!: boolean;
  @Prop({ default: true }) isRoot!: boolean;
  @PropSync("itemSync") item!: Item;
  @Prop() selectedItem!: Item | null;
  @Prop() dragItem!: Item | null;
  @Prop({ default: false }) thumbnail!: boolean;

  isOpen = true;

  get children() {
    return this.item.children.filter((item) => item != null);
  }

  get hasChild() {
    return this.item.children.length > 0;
  }

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  mounted() {
    const el = this.$el as HTMLElement;
    const iel = this.$refs.iel as HTMLElement;
    if (!el || !iel) return;

    iel.addEventListener("pointermove", (e) => {
      if (this.selectedItem == this.item) {
        this.$emit("move", null, iel);
        return;
      }
      // iel.style.borderBottom = "1px solid transparent";
      // iel.style.borderTop = "1px solid transparent";
      // if (!this.dragItem) return;
      if (this.dragItem) {
        const v = this.getPos(e);
        this.$emit("move", v, iel);
      } else {
        this.$emit("move", null, iel);
      }
    });

    iel.addEventListener("pointerleave", (e) => {
      this.$emit("move", null, iel);
      // if (this.selectedItem == this.item) return;
    });

    el.addEventListener("pointerup", (e) => {
      e.stopImmediatePropagation();
      e.preventDefault();
      const findP = (c: Item): boolean => {
        if (c == this.dragItem) return true;
        if (c.parent) {
          const v = findP(c.parent);
          return v;
        }
        return false;
      };
      const i = findP(this.item);

      if (i) return;
      if (this.dragItem && this.dragItem != this.item) {
        const p = this.dragItem.parent;
        if (p) {
          p.children.splice(
            p.children.findIndex((c) => c == this.dragItem),
            1
          );
          console.log("remove dragItem");
        }
      }
      if (!this.dragItem) return;

      const pos = this.getPos(e);

      if (pos == DropPosition.TOP) {
        if (this.dragItem && this.dragItem != this.item) {
          const i = findP(this.item);
          if (i) return;
          if (this.item.parent) {
            const pa = this.item.parent;
            const ind = pa.children.findIndex((c) => c == this.item);
            pa.children.splice(ind, 0, this.dragItem);
            this.dragItem.parent = this.item.parent;
          } else {
            this.item = this.dragItem;
          }
        }
      } else if (pos == DropPosition.MIDDLE) {
        this.item.children.push(this.dragItem);
        this.dragItem.parent = this.item;
      } else if (pos == DropPosition.BOTTOM) {
        if (this.dragItem && this.dragItem != this.item) {
          // iel.style.borderBottom = "1px solid";
          const i = findP(this.item);
          if (i) return;
          if (this.item.parent) {
            const pa = this.item.parent;
            const ind = pa.children.findIndex((c) => c == this.item);
            pa.children.splice(ind + 1, 0, this.dragItem);
            this.dragItem.parent = this.item.parent;
          }
        }
      }
    });
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
}
</script>