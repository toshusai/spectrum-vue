<template>
  <label
    class="spectrum-Checkbox"
    :class="cssClass"
  >
    <input
      id="checkbox-0"
      type="checkbox"
      class="spectrum-Checkbox-input"
      :checked="checked"
      :disabled="disabled"
      @change="$emit('change', !checked)"
    >
    <span class="spectrum-Checkbox-box">
      <svg
        class="
          spectrum-Icon spectrum-UIIcon-Checkmark100 spectrum-Checkbox-checkmark
        "
        focusable="false"
        aria-hidden="true"
      >
        <use xlink:href="#spectrum-css-icon-Checkmark100" />
      </svg>
      <svg
        class="
          spectrum-Icon
          spectrum-UIIcon-Dash100
          spectrum-Checkbox-partialCheckmark
        "
        focusable="false"
        aria-hidden="true"
      >
        <use xlink:href="#spectrum-css-icon-Dash100" />
      </svg>
    </span>
    <span class="spectrum-Checkbox-label">
      <slot />
    </span>
  </label>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class SpCheckbox extends Vue {
  @Prop({ default: false }) checked!: boolean;
  @Prop({ default: "M" }) size!: string;
  @Prop({ default: false }) disabled!: boolean;
  @Prop({ default: false }) emphasized!: boolean;
  @Prop({ default: false }) indeterminate!: boolean;
  @Prop({ default: false }) invalid!: boolean;

  get cssClass() {
    return [
      this.emphasized ? "spectrum-Checkbox--emphasized" : "",
      this.indeterminate ? "is-indeterminate" : "",
      this.invalid ? "is-invalid" : "",
      this.disabled ? "is-disabled" : "",
      "spectrum-Checkbox--size" + this.size,
    ];
  }
}
/**
<code>
<sp-checkbox>Checkbox</sp-checkbox>
<br />
<sp-checkbox :emphasized="true">Checkbox</sp-checkbox>
<br />
<sp-checkbox :indeterminate="true">Checkbox</sp-checkbox>
<br />
<sp-checkbox :invalid="true">Checkbox</sp-checkbox>
<br />
<sp-checkbox :disabled="true">Checkbox</sp-checkbox>
</code>

<h3>Size</h3>
<code>
<div>
  <sp-checkbox size="S">Checkbox</sp-checkbox>
</div>
<div>
  <sp-checkbox size="M">Checkbox</sp-checkbox>
</div>
<div>
  <sp-checkbox size="L">Checkbox</sp-checkbox>
</div>
</code>
 */
</script>