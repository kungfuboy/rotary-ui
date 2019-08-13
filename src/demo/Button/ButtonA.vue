<template>
  <div>
    <ro-button :type="['tiny', 'success']">tiny Button</ro-button>
    <ro-button :type="'small'">small Button</ro-button>
    <ro-button :type="'clear'" :sub="{ number: 200 }">normal Button</ro-button>
    <ro-button :type="['big', 'warning']">big Button</ro-button>
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
