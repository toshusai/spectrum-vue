<template>
  <div style="position: relative">
    <sp-textfield
      ref="textfield"
      :value="value"
      @focus="focus"
      @blur="blur"
      @change="change"
      @input="input"
      @keydown="keydownField"
    />
    <div
      class="spectrum-Popover spectrum-Popover--bottom"
      :class="{ 'is-open': isOpen }"
      style="position: absolute; top: 28px; z-index: 1; left: 0"
    >
      <ul
        class="spectrum-Menu"
        role="menu"
      >
        <li
          v-for="(item, i) in list"
          :key="i"
          class="spectrum-Menu-item"
          role="menuitem"
          tabindex="0"
          @focus="focus"
          @blur="blur"
          @keydown="(e) => keydown(e, item)"
          @click="() => click(item)"
        >
          <span class="spectrum-Menu-itemLabel">{{ item }}</span>
        </li>
        <li
          v-if="list.length == 0"
          class="spectrum-Menu-item is-disabled"
          aria-disabled="true"
          role="menuitem"
          tabindex="0"
        >
          <span class="spectrum-Menu-itemLabel">No List</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop, Ref } from "vue-property-decorator";
import SpTextfield from "./SpTextfield.vue";

@Component({
  components: {
    SpTextfield,
  },
})
export default class SpAutoComplete extends Vue {
  @Prop({ default: () => [] }) items!: string[];
  @Prop({ default: "" }) value!: string;
  @Ref() textfield!: SpTextfield;

  get inputEl() {
    //@ts-ignore
    return this.textfield.inputE;
  }

  list: string[] = [];

  isOpen = false;

  focus(e: Event) {
    this.isOpen = true;
  }

  blur(e: Event) {
    this.isOpen = false;
  }

  change(value: string, e: Event) {
    this.list = this.items.filter((i) => i.includes(value));
    // this.$emit("change", value, e);
  }

  input(value: string) {
    this.list = this.items.filter((i) => i.includes(value));
  }

  click(item: string) {
    this.$emit("change", item);
    this.isOpen = false;
    this.inputEl.focus();
  }

  keydownField(e: KeyboardEvent) {
    if (e.code == "Enter") {
      this.$emit("change", this.inputEl.value);
      this.isOpen = false;
      //   this.inputEl.focus();
    }
  }

  keydown(e: KeyboardEvent, item: string) {
    if (e.code == "Enter") {
      this.$emit("change", item);
      this.isOpen = false;
      //   this.inputEl.focus();
    }
  }
}
</script>