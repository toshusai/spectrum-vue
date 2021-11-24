<template>
  <div class="spectrum-Calendar">
    <div class="spectrum-Calendar-header">
      <div
        class="spectrum-Calendar-title"
        role="heading"
        aria-live="assertive"
        aria-atomic="true"
      >
        {{ calenderHeader }}
      </div>
      <button
        aria-label="Previous"
        title="Previous"
        class="
          spectrum-ActionButton spectrum-ActionButton--quiet
          spectrum-Calendar-prevMonth
        "
        @click="prev"
      >
        <svg
          class="spectrum-Icon spectrum-UIIcon-ChevronLeft100"
          focusable="false"
          aria-hidden="true"
        >
          <use xlink:href="#spectrum-css-icon-Chevron100" />
        </svg>
      </button>
      <button
        aria-label="Next"
        title="Next"
        class="
          spectrum-ActionButton spectrum-ActionButton--quiet
          spectrum-Calendar-nextMonth
        "
        @click="next"
      >
        <svg
          class="spectrum-Icon spectrum-UIIcon-ChevronRight100"
          focusable="false"
          aria-hidden="true"
        >
          <use xlink:href="#spectrum-css-icon-Chevron100" />
        </svg>
      </button>
    </div>
    <div
      class="spectrum-Calendar-body"
      role="grid"
      tabindex="0"
      aria-readonly="true"
      aria-disabled="false"
    >
      <table role="presentation" class="spectrum-Calendar-table">
        <thead role="presentation">
          <tr role="row">
            <th
              v-for="(d, i) in weekDay"
              :key="`day_${i}`"
              role="columnheader"
              scope="col"
              class="spectrum-Calendar-tableCell"
            >
              <abbr class="spectrum-Calendar-dayOfWeek" :title="d">
                {{ d }}
              </abbr>
            </th>
          </tr>
        </thead>
        <tbody role="presentation">
          <tr v-for="(_, j) in days" :key="`tr_${j}`" role="row">
            <sp-calendar-date
              v-for="(d, i) in days[j]"
              :key="`td_${j}${i}`"
              :day="d"
              :today="isToday(d)"
              :outside-month="d == -1"
              :selected="isSelected(d)"
              @click="(e) => change(d, e)"
            />
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import SpCalendarDate from "./SpCalendarDate.vue";

const weekDay1 = ["S", "M", "T", "W", "T", "F", "S"];
const weekDay3 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

@Component({
  components: {
    SpCalendarDate,
  },
})
export default class SpCalendar extends Vue {
  @Prop({ required: false }) year!: number;
  @Prop({ required: false }) month: number | undefined;
  @Prop({ default: "Single" }) weekDayType!: string;
  @Prop({ default: "Header" }) header!: string;
  @Prop({ default: () => new Date() }) date!: Date;

  day1 = new Date();
  monthPrivate: number = new Date().getMonth();
  yearPrivate: number = new Date().getFullYear();

  /**
   * calender Header like 2020/03
   */
  get calenderHeader() {
    return `${this.computedYear} ${this.computedMonth + 1}`;
  }

  /**
   * computedMonth works Prop and private value.
   * 0 based index.
   */
  get computedMonth() {
    if (this.month) return this.month;
    return this.monthPrivate;
  }
  set computedMonth(value: number) {
    if (this.month) {
      this.$emit("changeMonth", value);
    } else {
      this.monthPrivate = value;
    }
  }

  get computedYear() {
    if (this.year) return this.year;
    return this.yearPrivate;
  }

  set computedYear(value: number) {
    if (this.year) {
      this.$emit("changeYear", value);
    } else {
      this.yearPrivate = value;
    }
  }

  get weekDay() {
    if (this.weekDayType == "Single") return weekDay1;
    return weekDay3;
  }

  get today() {
    return new Date().getDate();
  }

  get days() {
    this.day1 = new Date(this.computedYear, this.computedMonth, 1);
    const day = this.day1.getDay();
    const num = new Date(
      this.computedYear,
      this.computedMonth + 1,
      0
    ).getDate();

    const array: number[][] = [];
    for (let i = 0; i < day; i++) {
      if (array.length == i / 7) {
        array.push([]);
      }
      array[array.length - 1].push(-1);
    }
    for (let i = 0; i < num; i++) {
      if (array.length == (i + day) / 7) {
        array.push([]);
      }
      array[array.length - 1].push(i + 1);
    }
    return array;
  }

  change(date: number, e: Event) {
    this.$emit(
      "change",
      new Date(this.computedYear, this.computedMonth, date),
      e
    );
  }

  next() {
    if (this.computedMonth < 11) {
      this.computedMonth++;
    } else {
      this.computedMonth = 0;
      this.computedYear++;
    }
  }

  prev() {
    if (this.computedMonth == 0) {
      this.computedMonth = 11;
      this.computedYear--;
    } else {
      this.computedMonth--;
    }
  }

  isSelected(date: number) {
    return (
      this.date.getFullYear() == this.computedYear &&
      this.date.getMonth() == this.computedMonth &&
      this.date.getDate() == date
    );
  }

  isToday(date: number) {
    const now = new Date();
    return (
      now.getFullYear() == this.computedYear &&
      now.getMonth() == this.computedMonth &&
      now.getDate() == date
    );
  }
}
/**
<code>
<sp-calendar :date="date" @change="v => date = v" />
<div>
{{ date.toISOString().substr(0,10) }}
</div>
</code>
<component>
date = new Date();
</component>
 */
</script>
