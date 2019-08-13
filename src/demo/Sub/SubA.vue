<template>
  <div>
    <ro-button :type="'clear'" :sub="{ number: 200 }">normal Button</ro-button>
  </div>
</template>
<script>
export default {
  name: "SubA"
};
</script>
<style lang="less" scoped>
.ro-button {
  margin: 0 10px;
}
</style>
