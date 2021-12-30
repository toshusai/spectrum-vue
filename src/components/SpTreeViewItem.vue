<template>
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
</template>



<script lang="ts">


import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class SpTreeViewItem extends Vue {
  @Prop({ default: '' }) thumbnail!: string;
  @Prop({ default: false}) selected!: boolean;
  @Prop({ default: "M"}) size!: string;
}
</script>