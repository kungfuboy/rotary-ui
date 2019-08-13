const fs = require("fs");

const endTagIndex = s => s.indexOf("</");

const _toHump = name => {
  return name.replace(/-(\w)/g, function(all, letter) {
    return letter.toUpperCase();
  });
};

const findAllFile = path =>
  fs.readdirSync(path, (err, dir) => {
    if (err) return;
    return dir;
  });

const isThere = path => {
  return new Promise((resolve, reject) => {
    fs.exists(path, res => {
      if (res) {
        resolve(true);
      } else {
        reject();
      }
    });
  });
};

const showCodeComplie = (_data, path) => {
  let stream = "";
  let data = _data.substring(0);
  while (data) {
    const index = endTagIndex(data);
    if (~index) {
      stream += data.slice(0, index);
      data = data.substring(index);
      const _i = data.indexOf(">");
      if (!~_i) {
        console.log("Error: DOM解析错误");
        return stream;
      }
      // 获取标签名字
      const tagName = _toHump("-" + data.slice(2, _i));
      // 利用该标签读取文件源码
      try {
        fs.accessSync(`${path}/${tagName}.vue`, fs.constants.F_OK);
        const code = fs.readFileSync(`${path}/${tagName}.vue`, "utf8");
        // console.log("利用该标签读取文件源码", tagName);
        stream +=
          data.slice(0, _i + 1) +
          `\n<show-code :code="'${escape(code)}'"></show-code>\n`;
        // console.log(stream);
        data = data.substring(_i + 1);
      } catch (e) {
        console.error(e);
      }
      continue;
    } else {
      stream += data;
      data = "";
    }
  }
  return stream;
};

module.exports = {
  findAllFile,
  isThere,
  showCodeComplie
};
