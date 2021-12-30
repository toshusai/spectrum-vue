<template>
  <nav>
    <ul class="spectrum-SideNav">
      <li
        v-for="(item, i) in items"
        :key="i"
        class="spectrum-SideNav-item"
        :class="{ 'is-disabled': item.disabled, 'is-selected': item.selected }"
      >
        <a
          :href="item.href"
          class="spectrum-SideNav-itemLink"
          @click="item.click"
        >
          {{ item.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>



<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

interface SideNavItem {
  selected: boolean;
  disabled: boolean;
  href: string;
  text: string;
}

@Component({})
export default class SpSidenav extends Vue {
  @Prop({ default: () => [] }) items!: SideNavItem[];
}
</script>