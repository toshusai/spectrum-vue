<template>
  <component-view
    name="ActionButton"
    :propData="propData"
    :eventData="eventData"
  >
    <h3>Size</h3>
    <sp-action-button size="S">S</sp-action-button>
    <sp-action-button size="M">M</sp-action-button>
    <sp-action-button size="L">L</sp-action-button>

    <div v-for="(t, i) in title" :key="i">
      <h3>{{ t.title }}</h3>
      <sp-action-button
        v-for="(x, i) in t.items"
        :key="`standard${i}`"
        :selected="x.selected"
        :disabled="x.disabled"
        :quiet="t.quiet"
        :emphasized="t.emphasized"
        style="margin: 8px"
      >
        {{ x.text }}
      </sp-action-button>
    </div>
  </component-view>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class index extends Vue {
  propData = [
    { prop: "quiet", type: "boolean", default: "false" },
    { prop: "selected", type: "boolean", default: "false" },
    { prop: "emphasized", type: "boolean", default: "false" },
    { prop: "disabled", type: "boolean", default: "false" },
    { prop: "icon", type: "boolean", default: "false" },
    { prop: "size", type: "string", default: "M" },
  ];

  eventData = [
    { event: "click", arg: "Event" },
    { event: "pointerdown", arg: "Event" },
  ];

  emp = [
    { text: "default", selected: false, disabled: false },
    { text: "selected", selected: true, disabled: false },
    { text: "disabled", selected: false, disabled: true },
    { text: "selected + disabled", selected: true, disabled: true },
  ];

  title = [
    { title: "Standard", quiet: false, emphasized: false },
    { title: "Quiet", quiet: true, emphasized: false },
    { title: "Emphasized", quiet: false, emphasized: true },
    { title: "Emphasized + Quiet", quiet: true, emphasized: true },
  ].map((x) => {
    return {
      title: x.title,
      items: this.emp,
      quiet: x.quiet,
      emphasized: x.emphasized,
    };
  });
}
</script>
