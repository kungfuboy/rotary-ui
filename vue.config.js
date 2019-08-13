// vue.config.js
const path = require("path");

module.exports = {
  assetsDir: "./",
  publicPath: process.env.NODE_ENV === "production" ? "/rotary-ui/" : "./",
  css: {
    extract: false
  },
  chainWebpack: config => {
    config.module
      .rule("md")
      .test(/\.md/)
      .use("vue-loader")
      .loader("vue-loader")
      .end()
      .use("markdown-loader")
      .loader(path.resolve("./utils/mdLoader.js"))
      .end();
  }
};
