<template>
  <div
    class="spectrum-Popover spectrum-Popover--withTip spectrum-Popover"
    style="z-index: 100; position: fixed"
    :style="style"
    role="presentation"
    :class="[isOpen ? 'is-open' : '', `spectrum-Popover--${popPosition}`]"
  >
    <section
      class="spectrum-Dialog spectrum-Dialog--small"
      style="width: fit-content; min-width: fit-content; margin: 16px"
      role="dialog"
      tabindex="-1"
      aria-modal="true"
    >
      <div
        class="spectrum-Dialog-grid"
        style="display: block"
      >
        <slot />
      </div>
    </section>

    <!-- TOP -->
    <svg
      v-if="popPosition == 'top' || popPosition == 'bottom'"
      width="23"
      height="12"
      class="spectrum-Popover-tip"
      :style="secondAllowPosition == 'left' ? `left: 16px` : `right: 16px`"
    >
      <path
        class="spectrum-Popover-tip-triangle"
        d="M 0.7071067811865476 0 L 11.414213562373096 10.707106781186548 L 22.121320343559645 0"
      />
    </svg>

    <svg
      v-else
      width="12"
      height="23"
      class="spectrum-Popover-tip"
      :style="secondAllowPosition == 'top' ? `top: 16px` : `bottom: 16px`"
    >
      <path
        class="spectrum-Popover-tip-triangle"
        d="M 0 0.7071067811865476 L 10.707106781186548 11.414213562373096 L 0 22.121320343559645"
      />
    </svg>
  </div>
</template>



<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class SpPopover extends Vue {
  @Prop({ default: false }) left!: boolean;
  @Prop({ default: false }) top!: boolean;
  @Prop({ default: "left-top" }) allowPos!: string;

  targetRect?: DOMRect;

  h = 0;
  v = 0;

  isOpen = false;

  get popPosition() {
    if (this.allowPos.startsWith("left")) return "right";
    if (this.allowPos.startsWith("right")) return "left";
    if (this.allowPos.startsWith("bottom")) return "top";
    if (this.allowPos.startsWith("top")) return "bottom";
  }

  get secondAllowPosition() {
    return this.allowPos.split("-")[1];
  }

  style: Partial<CSSStyleDeclaration> = {};
  getStyle(): Partial<CSSStyleDeclaration> {
    const rect = this.$el.getBoundingClientRect();
    let left = "";
    let right = "";
    let top = "";
    let bottom = "";
    if (this.targetRect) {
      if (this.allowPos.startsWith("left")) {
        left = this.targetRect.left + this.targetRect.width + "px";
      } else if (this.allowPos.startsWith("right")) {
        right = window.innerWidth - this.targetRect.left + "px";
      } else if (this.allowPos.startsWith("top")) {
        top = this.targetRect.top + this.targetRect.height + "px";
      } else if (this.allowPos.startsWith("bottom")) {
        bottom = window.innerHeight - this.targetRect.top + "px";
      }
      if (this.allowPos.endsWith("left")) {
        left = this.targetRect.left + "px";
      } else if (this.allowPos.endsWith("right")) {
        right = window.innerWidth - this.targetRect.right + "px";
      } else if (this.allowPos.endsWith("top")) {
        top = this.targetRect.top + "px";
      } else if (this.allowPos.endsWith("bottom")) {
        bottom = window.innerHeight - this.targetRect.bottom + "px";
      }
    }
    console.log(this.targetRect, left, top, right, bottom);

    return {
      left: left,
      right: right,
      top: top,
      bottom: bottom,
    };
  }

  open(el: HTMLElement) {
    if (this.isOpen) {
      this.close();
      document.body.removeEventListener("pointerdown", this.close);
      return;
    }
    const rect = el.getBoundingClientRect();
    this.targetRect = rect;
    this.isOpen = true;

    this.style = this.getStyle();

    requestAnimationFrame(() => {
      document.body.addEventListener("pointerdown", this.close);
    });
  }

  close(e?: Event) {
    if (e && e.target && this.$el.contains(e.target as HTMLElement)) return;
    this.isOpen = false;
    document.body.removeEventListener("pointerdown", this.close);
  }
}
/**
<code>
<sp-action-button @click="e => $refs.popover1.open(e.target)"> Open </sp-action-button>
<sp-popover ref="popover1"> <h3>Content</h3> </sp-popover>
</code>
<code>
<sp-action-button @click="e => $refs.popover2.open(e.target)"> Open </sp-action-button>
<sp-popover ref="popover2" allow-pos="bottom-left"> <h3>Content</h3> </sp-popover>
</code>
<code>
<sp-popover ref="popover3" allow-pos="right-top"> <h3>Content</h3> </sp-popover>
<div style="display: flex">
<sp-action-button style="margin-left: auto" @click="e => $refs.popover3.open(e.target)"> Open </sp-action-button>
</div>
<sp-popover ref="popover3" allow-pos="right-top"> <h3>Content</h3> </sp-popover>
</code>

<component>
</component>
 */
</script>