<template>
  <component-view
    name="Calendar"
    :propData="propData"
    :eventData="eventData"
    :slotData="slotData"
  >
    <sp-calendar :date="date" @change="(v) => (date = v)" />
    <div>
      {{ date.toISOString().substr(0, 10) }}
    </div>
    <code-view
      :code="`&lt;sp-calendar :date=&quot;date&quot; @change=&quot;v =&gt; date = v&quot; /&gt;
&lt;div&gt;
{{ date.toISOString().substr(0,10) }}
&lt;/div&gt;`"
    ></code-view>
  </component-view>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class CalendarPage extends Vue {
  propData = [
    { prop: "year", type: "number", required: "false" },
    { prop: "month", type: "number | undefined", required: "false" },
    { prop: "weekDayType", type: "string", default: '"Single"' },
    { prop: "header", type: "string", default: '"Header"' },
    { prop: "date", type: "Date", default: "() => new Date()" },
  ];
  slotData = [];
  eventData = [];

  date = new Date();
}
</script>
