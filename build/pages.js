const fs = require("fs");
const path = require("path");
const { findAllFile, showCodeComplie } = require("./utils");

module.exports = function() {
  const hash = ["index.js", ".DS_Store"];
  const filesPath = path.resolve("./src/components");
  const demoPath = path.resolve("./src/demo");
  const pagePath = path.resolve("./src/pages");

  const files = findAllFile(filesPath).filter(file => !~hash.indexOf(file));
  const demos = findAllFile(demoPath).filter(file => !~hash.indexOf(file));

  const apiMd = {};
  const demoMd = [];

  files.forEach(item => {
    const _path = `${filesPath}/${item}/index.md`;
    try {
      fs.accessSync(_path, fs.constants.F_OK);
      const content = fs.readFileSync(_path, "utf8");
      apiMd[item] = content;
    } catch (error) {
      fs.writeFileSync(_path, `# ${item}`, "utf8");
    }
  });

  demos.forEach(item => {
    const _path = `${demoPath}/${item}/index.md`;
    try {
      fs.accessSync(_path, fs.constants.F_OK);
      const _content = fs.readFileSync(_path, "utf8");
      const content = showCodeComplie(_content, `${demoPath}/${item}`);
      demoMd.push({
        name: item,
        data: content
      });
    } catch (error) {
      fs.writeFileSync(_path, `# ${item}`, "utf8");
    }
  });

  demoMd.forEach(({ name, data }) => {
    fs.writeFileSync(
      `${pagePath}/${name}.md`,
      `${data}\n${apiMd[name]}`,
      "utf8"
    );
  });
};
