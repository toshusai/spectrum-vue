<template>
  <div
    class="spectrum-Avatar"
    :class="[disabled ? 'is-disabled' : '', `spectrum-Avatar--size${size}`]"
  >
    <img
      class="spectrum-Avatar-image"
      :src="src"
      alt="Avatar"
    >
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class SpAvatar extends Vue {
  @Prop({ default: false }) disabled!: boolean;
  @Prop({ default: "100" }) size!: string;
  @Prop({ default: "" }) src!: string;
}
/**
<h3>Standard</h3>
<code>
<sp-avatar src="https://github.com/toshusai.png" />
<sp-avatar size="50" src="https://github.com/toshusai.png" />
</code>

<h3>Disabled</h3>
<code>
<sp-avatar src="https://github.com/toshusai.png" :disabled="true" />
<sp-avatar size="50" src="https://github.com/toshusai.png" :disabled="true" />
</code>
 */
</script>