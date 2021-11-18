export default {
  server: {
    host: "0.0.0.0",
    port: 10000,
  },
  ssr: false,
  target: "static",
  router: {
    base: '/spectrum-vue/'
  },
  head: {
    title: "Spectrum Vue",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
  },
  css: [
    "@spectrum-css/vars/dist/spectrum-global.css",
    "@spectrum-css/page",
    "@spectrum-css/vars/dist/spectrum-medium.css",
    "@spectrum-css/vars/dist/spectrum-light.css",
    "@spectrum-css/vars/dist/spectrum-dark.css",
    "@toshusai/spectrum-vue/dist/index.css",
  ],

  plugins: [
    "~/plugins/register"
  ],

  buildModules: ["@nuxt/typescript-build"],

  build: {
    babel: {
      plugins: [
        ["@babel/plugin-proposal-private-property-in-object", { loose: true }],
      ],
    },
    // extend(config) {
    //   const path = require("path");
    //   // config.resolve.alias.vue = path.join(__dirname, "../../node_modules/vue");
    //   config.performance = config.performance || {};
    //   config.performance.maxEntrypointSize = 1000 * 1024;
    //   config.performance.maxAssetSize = 1000 * 1024;
    //   config.optimization.splitChunks.maxSize = 100 * 1024;
    // },
  },
};
