<template>
  <div>
    <ro-button :type="['big', 'danger']">big Button</ro-button>
    <ro-button :type="['big', 'clear', 'danger']">big Button</ro-button>
    <ro-button :type="['big', 'clear', 'danger', 'disable']" :sub="3"
      >big Button</ro-button
    >
  </div>
</template>
<script>
export default {
  name: "ButtonA"
};
</script>
<style lang="less" scoped>
.ro-button {
  margin: 0 10px;
}
</style>
