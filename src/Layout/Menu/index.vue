<template>
  <ul class="menu">
    <router-link
      @click.native="handleClick"
      tag="li"
      :to="link.to"
      v-for="(link, index) in list"
      :key="index"
      active-class="active"
      >{{ link.name.split(",").join(" ") }}</router-link
    >
  </ul>
</template>
<script>
import List from "./list";

export default {
  name: "Menu",
  data: () => ({
    list: List
  }),
  methods: {
    handleClick() {
      this.$emit("switch");
    }
  }
};
</script>
<style lang="less" scoped>
ul.menu {
  padding: 30px 0;
  cursor: pointer;
  li {
    padding: 10px 25px;
    cursor: pointer;
    box-sizing: border-box;
    transition: 0.4s all ease;
    color: #2c3e50;
    border-right: 4px solid rgba(0, 0, 0, 0);
    position: relative;
    &:after {
      content: "";
      position: absolute;
      top: 8px;
      bottom: 8px;
      right: 5px;
      width: 4px;
      background: rgba(0, 0, 0, 0);
    }
    &:hover {
      padding-left: 30px;
      color: #fff;
    }
    &.active {
      padding-left: 30px;
      color: #fff;
      &:after {
        background: #fff;
      }
    }
  }
}
</style>
