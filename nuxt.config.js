const { resolve } = require("path");
require("dotenv").config({ path: ".env" });
module.exports = {
  telemetry: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "zinete-dlog-admintemplate",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  srcDir: "src",

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["element-ui/lib/theme-chalk/index.css", "@/assets/styles/index.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "@/plugins/element-ui.js",
    },
    { src: "@/plugins/svgicon.js", ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "@nuxtjs/router",
    ["@nuxtjs/dotenv", { path: "./" }],
  ],
  server: {
    port: process.env.BASE_PORT, // default: 3000
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    // Doc: https://github.com/nuxt-community/dotenv-module
    [
      "@nuxtjs/dotenv",
      {
        filename: ".env",
      },
    ],
  ],
  router: {
    middleware: ["auth"],
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    vendor: ["element-ui"],
    babel: {
      plugins: [
        [
          "component",
          {
            libraryName: "element-ui",
            styleLibraryName: "theme-chalk",
          },
        ],
      ],
    },
    extend(config, { isClient, isDev }) {
      if (isClient && !isDev) {
        config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
      }
      const svgRule = config.module.rules.find((rule) =>
        rule.test.test(".svg")
      );
      svgRule.exclude = [resolve(__dirname, "src/assets/svg")];
      config.module.rules.push({
        test: /\.svg$/,
        include: [resolve(__dirname, "src/assets/svg")],
        use: [
          { loader: "svg-sprite-loader", options: { symbolId: "icon-[name]" } },
        ],
      });
    },
  },
};
