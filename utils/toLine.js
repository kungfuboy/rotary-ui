// 驼峰转换下划线
const toLine = name => {
  return name
    .replace(/([A-Z])/g, "-$1")
    .toLowerCase()
    .slice(1);
};

export { toLine };
