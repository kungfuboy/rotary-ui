<template>
  <ro-panel label="面板标题" @click-icon="handleClickIcon">
    <ul class="list">
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
  </ro-panel>
</template>
<script>
export default {
  name: "PanelA",
  data() {
    return {
      list: ["A", "B", "C"]
    };
  },
  methods: {
    handleClickIcon(isActive) {
      this.list = isActive
        ? ["A", "B", "C", "D", "E", "F", "G", "H"]
        : ["A", "B", "C"];
    }
  }
};
</script>
<style lang="less" scoped>
.list {
  padding: 0 20px;
  li {
    height: 30px;
    line-height: 30px;
  }
}
</style>
