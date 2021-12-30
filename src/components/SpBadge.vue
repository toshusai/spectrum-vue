<template>
  <span :class="cssClass"><slot /></span>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class SpBadge extends Vue {
  @Prop({ default: "S" }) size!: string;
  @Prop({ default: "neutral" }) color!: string;

  get cssClass() {
    return [
      "spectrum-Badge",
      "spectrum-Badge--size" + this.size,
      "spectrum-Badge--" + this.color,
    ];
  }
}
/**
<code>
<sp-badge>Badge</sp-badge>
<sp-badge color="informative">Badge</sp-badge>
<sp-badge color="positive">Badge</sp-badge>
<sp-badge color="negative">Badge</sp-badge>
<sp-badge color="fuchsia">Badge</sp-badge>
<sp-badge color="indigo">Badge</sp-badge>
<sp-badge color="magenta">Badge</sp-badge>
<sp-badge color="purple">Badge</sp-badge>
<sp-badge color="seafoam">Badge</sp-badge>
<sp-badge color="yellow">Badge</sp-badge>
</code>

<code>
<sp-badge size="S">Badge</sp-badge>
<sp-badge size="M">Badge</sp-badge>
<sp-badge size="L">Badge</sp-badge>
<sp-badge size="XL">Badge</sp-badge>
</code>
 */
</script>