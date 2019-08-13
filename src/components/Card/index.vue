<template>
  <div
    class="ro-card"
    @touchstart="handleTouchStart"
    @touchend="handleTouchEnd"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "RoCard",
  data: () => ({
    start: ""
  }),
  methods: {
    handleTouchStart(e) {
      this.start = e.changedTouches[0].clientX;
    },
    handleTouchEnd(e) {
      const end = e.changedTouches[0].clientX;
      if (end < this.start && this.start - end > 50) {
        // 向左滑动
        this.$emit("move-left");
        return;
      } else if (end - this.start > 50) {
        // 向右滑动
        this.$emit("move-right");
        return;
      }
      // 不处理
    }
  }
};
</script>
<style lang="less" scoped>
.ro-card {
  background: #fff;
  height: 200px;
  border-radius: 5px;
  padding: 5px;
}
</style>
