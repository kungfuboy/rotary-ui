<template>
  <div class="demo">
    <ro-input label="用户名" />
    <br />
    <ro-input label="密码" />
    <br />
    <ro-input label="含动画" required :animate="true" />
  </div>
</template>
<script>
export default {
  name: "InputB"
};
</script>
<style lang="less" scoped>
.demo {
  margin-top: 50px;
  .ro-input {
    margin-top: 40px;
    width: 320px;
    /deep/ input {
      color: red;
    }
  }
}
</style>
