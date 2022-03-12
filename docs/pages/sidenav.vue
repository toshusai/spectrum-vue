<template>
  <component-view
    name="Sidenav"
    :propData="propData"
    :eventData="eventData"
    :slotData="slotData"
  >
  </component-view>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class SidenavPage extends Vue {
  propData = [{ prop: "items", type: "SideNavItem[]", default: "() => []" }];
  slotData = [];
  eventData = [];
}
</script>
