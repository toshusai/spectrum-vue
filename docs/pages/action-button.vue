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
    <code-view :code="code1" />

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
      <code-view :code="t.code" />
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

  code1 = `<sp-action-button size="S">S</sp-action-button>
<sp-action-button size="M">M</sp-action-button>
<sp-action-button size="L">L</sp-action-button>`;

  emp = [
    { text: "default", selected: false, disabled: false },
    { text: "selected", selected: true, disabled: false },
    { text: "disabled", selected: false, disabled: true },
    { text: "selected + disabled", selected: true, disabled: true },
  ];

  title = [
    {
      title: "Standard",
      quiet: false,
      emphasized: false,
      code: `<sp-action-button>default</sp-action-button>
<sp-action-button :selected="true">selected</sp-action-button>
<sp-action-button :disabled="true">disabled</sp-action-button>
<sp-action-button :selected="true" :disabled="true">selected + disabled</sp-action-button>`,
    },
    {
      title: "Quiet",
      quiet: true,
      emphasized: false,
      code: `<sp-action-button :quiet="true">default</sp-action-button>
<sp-action-button :quiet="true" :selected="true">selected</sp-action-button>
<sp-action-button :quiet="true" :disabled="true">disabled</sp-action-button>
<sp-action-button :quiet="true" :selected="true" :disabled="true">selected + disabled</sp-action-button>`,
    },
    {
      title: "Emphasized",
      quiet: false,
      emphasized: true,
      code: `<sp-action-button :emphasized="true">default</sp-action-button>
<sp-action-button :emphasized="true" :selected="true">selected</sp-action-button>
<sp-action-button :emphasized="true" :disabled="true">disabled</sp-action-button>
<sp-action-button :emphasized="true" :selected="true" :disabled="true">selected + disabled</sp-action-button>`,
    },
    {
      title: "Emphasized + Quiet",
      quiet: true,
      emphasized: true,
      code: `<sp-action-button :quiet="true" :emphasized="true">default</sp-action-button>
<sp-action-button :quiet="true" :emphasized="true" :selected="true">selected</sp-action-button>
<sp-action-button :quiet="true" :emphasized="true" :disabled="true">disabled</sp-action-button>
<sp-action-button :quiet="true" :emphasized="true" :selected="true" :disabled="true">selected + disabled</sp-action-button>`,
    },
  ].map((x) => {
    return {
      title: x.title,
      items: this.emp,
      quiet: x.quiet,
      emphasized: x.emphasized,
      code: x.code,
    };
  });
}
</script>
