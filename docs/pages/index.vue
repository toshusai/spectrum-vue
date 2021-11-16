<template>
  <div>
    <h1>Spectrum Vue</h1>
    <p>
      UI Components for Vue based on
      <sp-link href="https://spectrum.adobe.com/" target="_blank">
        Adobe Spectrum Design System </sp-link
      >.
    </p>
    <p>
      <span class="emoji">&#9888;</span>️️ This project is work in progress. Not
      a stable version. May make destructive changes.
    </p>
    <ul>
      <li>
        It was created <strong>based</strong> on Spectrum and is not the same as
        Spectrum.
      </li>
      <li>This project was not developed by Adobe.</li>
      <li>
        Not the same as
        <sp-link href="https://github.com/adobe/react-spectrum" target="_blank">
          React Spectrum
        </sp-link>
        ,
        <sp-link
          href="https://github.com/adobe/spectrum-web-components"
          target="_blank"
        >
          Spectrum Web Components
        </sp-link>
        API.
      </li>
    </ul>
    <div>
      <h2>Components</h2>
      <ul>
        <li style="margin: 8px" v-for="(link, i) in links" :key="i">
          <sp-link
            :href="'/spectrum-vue/' + link.href"
            @click="(e) => clickLink(e, link.href)"
          >
            {{ link.text }}
          </sp-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.emoji {
  font-family: Monaco, "Courier New", monospace, "Apple Color Emoji";
}
</style>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { links } from "../data/links";

@Component({})
export default class index extends Vue {
  componentTableData = [{ name: "ActionButton" }];
  componentTableHeader = [{ text: "Components", key: "name" }];
  links = links;
  clickLink(e: Event, href: string) {
    e.preventDefault();
    this.$router.push(href);
  }
}
</script>