<template>
  <table class="spectrum-Table spectrum-Table--sizeM spectrum-Table--quiet">
    <thead class="spectrum-Table-head">
      <tr>
        <th
          v-for="(header, i) in headers"
          :key="`header_${i}`"
          class="spectrum-Table-headCell"
        >
          {{ header.text }}
        </th>
      </tr>
    </thead>
    <tbody class="spectrum-Table-body">
      <tr
        v-for="(d, i) in data"
        :key="`data_${i}`"
        class="spectrum-Table-row"
      >
        <td
          v-for="(header, j) in headers"
          :key="`data_header_${j}`"
          class="spectrum-Table-cell"
          tabindex="0"
        >
          {{ d[header.key] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>



<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

interface Header {
  text: string;
  key: string;
}

@Component({})
export default class SpTable extends Vue {
  @Prop({ default: () => [] }) data!: any[];
  @Prop({ default: () => [] }) headers!: Header[];
}
</script>