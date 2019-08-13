<template>
  <div>
    <ro-select
      :options="[{ label: 'A', code: 'a' }, { label: 'B', code: 'b' }]"
    ></ro-select>
  </div>
</template>
<script>
export default {
  name: "SelectA"
};
</script>
<style lang="less" scoped>
.ro-select {
  height: 4.4rem;
}
</style>
