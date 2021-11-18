<template>
  <div style="position: relative">
    <div>
      <div
        class="spectrum-Underlay"
        @click="closeSideNav"
        :class="{ 'is-open': nav }"
      ></div>
      <div class="sidenav" :style="sideNavStyle">
        <h2 class="sidenav-header">
          <a href="/spectrum-vue" @click="clickTitle"> Spectrum Vue </a>
        </h2>
        <div>
          <sp-sidenav :items="navLinks"></sp-sidenav>
        </div>
      </div>
    </div>
    <div class="header">
      <sp-action-button :quiet="true" @click="openSideNav">
        <sp-icon name="ShowMenu"></sp-icon>
      </sp-action-button>
      <sp-divider style="margin: 0" />
    </div>
    <div style="margin: 8px">
      <nuxt />
    </div>
  </div>
</template>

<style>
.sidenav {
  position: fixed;
  top: 0px;
  left: 0px;
  padding: 8px 16px;
  height: 100%;
  background: var(--spectrum-alias-component-background-color-default);
  z-index: 100;
  transform: translateX(0px);
  transition: transform var(--spectrum-global-animation-duration-200, 160ms);
}
.sidenav-header {
  cursor: pointer;
}
.sidenav-header > a {
  text-decoration: none;
  color: inherit;
}
.sidenav-header > a:visited {
  color: inherit;
}
</style>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import loadicons from "loadicons";
import { links } from "../data/links";

@Component({})
export default class Default extends Vue {
  links = links;
  navLinks: {
    text: string;
    href: string;
    click: (e: Event) => void;
    selected: boolean;
  }[] = [];

  nav: boolean = false;

  theme: string = "dark";

  changeTheme(newTheme: string) {
    document.body.parentElement?.classList.remove(`spectrum--${this.thema}`);
    document.body.parentElement?.classList.add(`spectrum--${newTheme}`);
  }

  get sideNavStyle(): Partial<CSSStyleDeclaration> {
    return {
      transform: `translateX(${this.nav ? 0 : -100}%)`,
    };
  }

  getNavLinks(path: string) {
    return this.links.map((link) => {
      return {
        text: link.text,
        href: "/spectrum-vue/" + link.href,
        click: (e: Event) => {
          e.preventDefault();
          this.$router.push(link.href);
          this.nav = false;
          this.navLinks = this.getNavLinks(link.href);
        },
        selected: path == link.href,
      };
    });
  }

  clickTitle(e: Event) {
    e.preventDefault();
    this.$router.push("/");
    this.nav = false;
  }

  openSideNav() {
    this.nav = true;
  }

  closeSideNav() {
    this.nav = false;
  }

  mounted() {
    loadicons("/spectrum-vue/spectrum-css-icons.svg", () => {});
    loadicons("/spectrum-vue/spectrum-icons.svg", () => {});
    this.navLinks = this.getNavLinks(window.location.pathname);
  }
}
</script>