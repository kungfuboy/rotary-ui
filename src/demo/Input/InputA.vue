<template>
  <div>
    <ro-input v-model="value"></ro-input>
    <div>输入的值： {{ value }}</div>
  </div>
</template>
<script>
export default {
  name: "InputA",
  data: () => ({
    value: ""
  })
};
</script>
<style lang="less" scoped>
.ro-button {
  margin: 0 10px;
}
</style>
