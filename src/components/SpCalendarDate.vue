<template>
  <td
    role="gridcell"
    class="spectrum-Calendar-tableCell"
    aria-disabled="true"
    aria-selected="false"
    aria-invalid="false"
    :title="day"
  >
    <span
      role="presentation"
      class="spectrum-Calendar-date"
      :class="cssClass"
      @click="(e) => $emit('click', e)"
    >
      {{ day }}
    </span>
  </td>
</template>

<script lang="ts">


import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class SpCalendarDate extends Vue {
  @Prop({ default: false }) outsideMonth!: boolean;
  @Prop({ default: false }) today!: boolean;
  @Prop({ default: false }) selected!: boolean;
  @Prop({ default: 0 }) day!: number;

  get cssClass() {
    return [
      this.outsideMonth ? "is-outsideMonth" : "",
      this.today ? "is-today" : "",
      this.selected ? "is-selected" : "",
    ];
  }
}
</script>