<template>
  <ul
    class="spectrum-TreeView"
    :class="[thumbnail ? 'spectrum-TreeView--thumbnail' : '', 'spectrum-TreeView--size' + size]"
  >
    <li
      class="spectrum-TreeView-item"
      :class="[selected ? 'is-selected' : '']"
      v-on="$listeners"
    >
      <a class="spectrum-TreeView-itemLink">
        <div
          v-if="thumbnail"
          class="spectrum-Thumbnail spectrum-TreeView-itemThumbnail spectrum-Thumbnail--S"
        >
          <img
            class="spectrum-Thumbnail-image"
            :src="thumbnail"
          >
        </div>
        <span class="spectrum-TreeView-itemLabel">
          <slot />
        </span>
      </a>
    </li>
  </ul>
</template>



<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({ })
export default class SpListItemList extends Vue {
  @Prop({ default: '' }) thumbnail!: string;
  @Prop({ default: false}) selected!: boolean;
  @Prop({ default: "M"}) size!: string;
}
</script>