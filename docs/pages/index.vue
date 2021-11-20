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
      <div
        style="margin-top: 64px"
        v-for="(link, i) in links.filter((l) => !l.hide)"
        :key="i"
      >
        <h3 class="margin">
          <sp-link :herf="link.href">{{ link.text }}</sp-link>
        </h3>
        <div class="margin">
          <component
            v-if="!link.noPreview"
            :is="'Sp' + link.text"
            v-bind="link.attrs"
          >
            <template v-if="link.html" v-html="link.html"></template>
            <template v-else>
              {{ link.text }}
            </template>
          </component>
          <div v-else>NO PREVIEW</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.emoji {
  font-family: Monaco, "Courier New", monospace, "Apple Color Emoji";
}
.margin {
  margin: 12px;
}
</style>

<script lang="ts">
import { Color } from "@toshusai/spectrum-vue";
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { links } from "../data/links";

@Component({})
export default class index extends Vue {
  componentTableData = [{ name: "ActionButton" }];
  componentTableHeader = [{ text: "Components", key: "name" }];
  links = links;

  color: Color = new Color();
  sliderValue = 0;
  hue = 0;
  date: Date = new Date();

  clickLink(e: Event, href: string) {
    e.preventDefault();
    this.$router.push(href);
  }
}
</script>
