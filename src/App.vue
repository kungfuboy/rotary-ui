<template>
  <div id="app">
    <Layout />
  </div>
</template>
<script>
import Layout from "./Layout";

export default {
  name: "app",
  components: {
    Layout
  }
};
</script>

<style lang="less">
@import "./assets/less/color.less";

* {
  list-style: none;
  outline: none;
  font-style: normal;
  text-decoration: none;
  margin: 0;
  padding: 0;
}
html {
  height: 100%;
  font-size: 10px;
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    color: @normalTextColor;
    background: linear-gradient(to bottom right, #81c7d4, #fff);
    #app {
      height: 100%;
      overflow: hidden;
      box-sizing: border-box;
      background: url("./assets/img/texture.png");
    }
  }
}
</style>
