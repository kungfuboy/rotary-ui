<template>
  <i class="ro-sub">{{ sub | numberRender }}</i>
</template>
<script>
export default {
  name: "Sub",
  props: {
    sub: {
      type: [Number, Object],
      default: () => ({})
    }
  },
  filters: {
    numberRender(value) {
      if (typeof value === "number") {
        return value <= 99 ? value : 99;
      }
      if (typeof value === "object" && value.number != null) {
        return value.number <= 99 ? value.number : 99;
      }
      return 0;
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../styles/color.less";
.ro-sub {
  position: absolute;
  right: 0px;
  top: 0px;
  padding: 1.5px 5px;
  border-radius: 20px;
  background: @ro_danger_color;
  color: #fff;
  font-size: 9px;
  font-style: normal;
  transform: translate(50%, -50%);
}
</style>
