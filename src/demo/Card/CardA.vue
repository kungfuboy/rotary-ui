<template>
  <div class="demo">
    <ro-card
      @move-left="handleMoveLeft"
      @move-right="handleMoveRight"
      :class="isActive ? 'active' : ''"
    >
      <div>{{ msg }}</div>
    </ro-card>
    <b class="del">删除</b>
  </div>
</template>
<script>
export default {
  name: "CardA",
  data: () => ({
    msg: "没有动作",
    isActive: false
  }),
  methods: {
    handleMoveLeft() {
      this.msg = "你往左滑了";
      this.isActive = true;
    },
    handleMoveRight() {
      this.msg = "你往右滑了";
      this.isActive = false;
    }
  }
};
</script>
<style lang="less" scoped>
.demo {
  position: relative;
  .ro-card {
    transform: translateX(0);
    transition: 0.4s all ease;
    text-align: center;
    &.active {
      transform: translateX(-80px);
    }
  }
  .del {
    position: absolute;
    right: 0;
    top: 5px;
    bottom: 5px;
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #b5495b;
    color: #fff;
    z-index: -5;
  }
}
</style>
