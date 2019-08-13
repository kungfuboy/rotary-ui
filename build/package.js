const fs = require("fs");
const path = require("path");
const prettier = require("prettier");

module.exports = function() {
  const hash = ["index.js", ".DS_Store"];
  const filePath = path.resolve("./src/components");
  const entryPath = path.resolve("./src/index.js");

  // 定义一个遍历某路径下所有文件的方法
  const findAllFile = path =>
    fs.readdirSync(path, (err, dir) => {
      if (err) return;
      return dir;
    });

  const files = findAllFile(filePath).filter(file => !~hash.indexOf(file));
  console.log("files", files);

  // 开始拼接
  // 导出
  const importFile =
    files
      .map(file => `import Ro${file} from './components/${file}'`)
      .join("\n") + "\n";

  const fileList = files.map(file => `Ro${file}`).join(",\n");

  // 分别挂载
  const installPackage = files
    .map(
      file => `
Ro${file}.install = Vue => {
  Vue.component(Ro${file}.name, Ro${file})
};
`
    )
    .join("");

  // components
  const components = `
const components = [
  ${fileList}
]
`;

  // install
  const installAll = `
const install = Vue => {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
  //   Vue.prototype.$message = Message;
};
`;

  // 挂载
  const mount = `
if (typeof window !== void 666 && window.Vue) {
  install(window.Vue);
}
`;

  // 默认导出
  const exportDefault = `
export default {
  install
}
`;

  // 普通导出
  const exportFile = `
export {
  ${fileList}
}`;

  // 结果累加
  const _packages =
    importFile +
    installPackage +
    components +
    installAll +
    mount +
    exportDefault +
    exportFile;

  // 开始写入
  fs.writeFileSync(
    entryPath,
    prettier.format(_packages, { semi: false }),
    "utf8"
  );
};
