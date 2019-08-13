// 将 Demo 文件夹内的组件全部导出，待后续注册
const fs = require("fs");
const path = require("path");
const prettier = require("prettier");
const { findAllFile } = require("./utils");

module.exports = function() {
  const demoPath = path.resolve("./src/demo");

  const mdList = findAllFile(demoPath).filter(demo => demo !== "index.js");

  const importMD = mdList
    .map(
      demo => `
import Page${demo} from './${demo}/index.md'`
    )
    .join("");

  const mdName = mdList.map(md => `Page${md}`);

  const _arr = mdList
    .map(demo => {
      const child = findAllFile(`${demoPath}/${demo}`).filter(
        file => file !== "index.md"
      );
      return child.map(name => `./${demo}/${name}`).join(";");
    })
    .map(item => item.split(";"));

  // 二维数组转一维数组
  const allComponent = [].concat.apply([], _arr);

  const nameList = allComponent.map(child => {
    const line = child.lastIndexOf("/") + 1;
    const dot = child.lastIndexOf(".");
    const name = child.slice(line, dot);
    return { name, path: child };
  });

  const importChild = nameList
    .map(
      item => `
import ${item.name} from '${item.path}'`
    )
    .join("");

  // demo 列表，不包含文档
  const demoName = nameList.map(item => `${item.name}`);

  // 开始拼接
  const result = `
// 导入文档
${importMD}

// 导入组件
${importChild}

// 注册组件
const arr = [${mdName.concat(demoName)}]
const nameList = [${mdName.concat(demoName).map(item => `'${item}'`)}]

const install = Vue => {
  arr.forEach((item, index) => {
    Vue.component(nameList[index], item)
  })
}

if (typeof window !== void 666 && window.Vue) {
  install(window.Vue);
}

// 导出Demo
export default {
 install
}
`;

  // 开始写入
  fs.writeFileSync(
    `${demoPath}/index.js`,
    prettier.format(result, { semi: false }),
    "utf8"
  );
};
