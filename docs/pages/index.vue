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
      <sp-split-view :vertical="true">
        <sp-split-view-pane style="padding: 8px">
          <div class="margin">
            <sp-button>Button CTA</sp-button>
          </div>
          <div class="margin">
            <sp-button-group>
              <sp-button type="secondary" size="S" :group="true">
                Secondary
              </sp-button>
              <sp-button type="primary" size="S" :group="true">
                Primary
              </sp-button>
              <sp-button type="negative" size="S" :group="true">
                Negative
              </sp-button>
            </sp-button-group>
          </div>
          <div class="margin">
            <sp-action-button> ActionButton </sp-action-button>
          </div>
          <div class="margin">
            <sp-calendar :date="date" @change="(d) => (date = d)" />
          </div>
          <div class="margin">
            <sp-action-group :compact="true">
              <sp-action-button :item="true">Action</sp-action-button>
              <sp-action-button :item="true">Group</sp-action-button>
            </sp-action-group>
          </div>
          <div class="margin">
            <sp-checkbox> Checkbox </sp-checkbox>
          </div>
          <div class="margin">
            <sp-textfield placeholder="Textfield"> </sp-textfield>
          </div>
          <div class="margin">
            <sp-text-area placeholder="TextArea"> </sp-text-area>
          </div>
          <div class="margin">
            <sp-help-text>Helptext</sp-help-text>
          </div>
          <div class="margin">
            <sp-slider
              :min="0"
              :max="1"
              :value="sliderValue"
              :showValue="true"
              label="Slider"
              @input="(v) => (sliderValue = v)"
            />
          </div>

          <div class="margin">
            <sp-menu>
              <sp-menu-item>MenuItem 1</sp-menu-item>
              <sp-menu-item>MenuItem 2</sp-menu-item>
            </sp-menu>
          </div>
          <div class="margin">
            <sp-link>link</sp-link>
          </div>
          <div class="margin">
            <sp-action-menu :items="[{ text: 'Item1', action: () => {} }]">
              ActionMenu
            </sp-action-menu>
          </div>
          <div class="margin">
            <sp-avatar src="/spectrum-vue/example-ava.jpeg" />
          </div>
          <div class="margin">
            <sp-badge>badge</sp-badge>
          </div>
          <div class="margin">
            <sp-accordion>
              <template v-slot:header> Header </template>
              Content
            </sp-accordion>
          </div>

          <div class="margin">
            <sp-breadcrumbs>
              <sp-breadcrumbs-item>breadcrumb</sp-breadcrumbs-item>
              <sp-breadcrumbs-item>breadcrumb</sp-breadcrumbs-item>
              <sp-breadcrumbs-item>breadcrumb</sp-breadcrumbs-item>
            </sp-breadcrumbs>
          </div>
          <div class="margin">
            <sp-divider></sp-divider>
          </div>
          <div class="margin">
            <sp-tag label="Tag" size="S"></sp-tag>
            <sp-tag label="Tag2" :selected="true" size="S"></sp-tag>
            <sp-tag label="Tag3" :invalid="true" size="S"></sp-tag>
          </div>
          <div class="margin">
            <sp-icon name="Cloud"></sp-icon>
            <sp-icon name="Erase"></sp-icon>
            <sp-icon name="Home"></sp-icon>
          </div>
          <div class="margin">
            <sp-table
              :headers="[
                { key: 'column1', text: 'Column2' },
                { key: 'column2', text: 'Column2' },
              ]"
              :data="[
                { column1: 'Table', column2: 'Data2' },
                { column1: 'Data3', column2: 'Data4' },
              ]"
            ></sp-table>
          </div>
          <div class="margin">
            <sp-tree-item
              :itemSync="{
                id: '1',
                name: 'Root',
                children: [
                  {
                    id: '2',
                    name: 'Child',
                    children: [
                      {
                        id: '3',
                        name: 'Grandchild',
                        children: [{ id: '2', name: 'Child', children: [] }],
                      },
                    ],
                  },
                  { id: '3', name: 'Child', children: [] },
                ],
              }"
            >
              <template v-slot="{ item }">
                {{ item.name }}
              </template>
            </sp-tree-item>
          </div>
          <div class="margin">
            <sp-tabs :tabs="['TAB1', 'TAB2']"></sp-tabs>
          </div>
        </sp-split-view-pane>
        <sp-split-view-splitter :gripper="true" />
        <sp-split-view-pane style="padding: 8px">
          <div class="margin">
            <sp-color-area
              :h="hue"
              :color="color"
              @change="(v) => (color = v)"
            />
          </div>
          <div class="margin">
            <sp-color-slider :h="hue" @change="(v) => (hue = v)" />
          </div>
          <div class="margin">
            <sp-color-wheel />
          </div>
          <div class="margin">
            <sp-combobox> </sp-combobox>
          </div>
          <div class="margin">
            <sp-picker />
          </div>
          <div class="margin">
            <sp-picker-button />
          </div>
          <div class="margin">
            <sp-date-picker />
          </div>
          <div class="margin">
            <sp-dialog :small="true"> </sp-dialog>
          </div>
          <div class="margin">
            <sp-dropzone />
          </div>
        </sp-split-view-pane>
      </sp-split-view>
    </div>
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
.margin {
  margin: 8px;
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