const fs = require("fs");
const path = require("path");
const { findAllFile } = require("./utils");
const prettier = require("prettier");

module.exports = () => {
  const hash = ["index.js", ".DS_Store"];
  const routerPath = path.resolve("./src/router.js");
  const filesPath = path.resolve("./src/components");
  const files = findAllFile(filesPath).filter(file => !~hash.indexOf(file));

  const base = `
    import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "*",
      redirect: "/install"
    },
    {
      path: "/",
      redirect: "/install"
    },
    {
      path: "/install",
      name: "Install",
      component: () => import("./pages/Install.md")
    },
    `;

  const packages = files.map(
    name => `{
    path: '/${name}',
    name: '${name}',
    component: () => import("./pages/${name}.md")
  }`
  );

  const result = base + packages + `]});`;

  fs.writeFileSync(
    routerPath,
    prettier.format(result, { semi: false }),
    "utf8"
  );
};
