<template>
  <button :class="renderType" @click="handleClick">
    <slot></slot>
    <Sub :sub="sub" v-if="subRender"></Sub>
  </button>
</template>
<script>
import Sub from "../Sub";
export default {
  name: "RoButton",
  components: {
    Sub
  },
  props: {
    type: {
      type: [Array, String],
      default: () => ["ro-button"]
    },
    sub: {
      type: [Number, Object],
      default: () => ({})
    }
  },
  computed: {
    renderType() {
      const type = this.type;
      if (typeof type === "string") {
        return ["ro-button", type].join(" ");
      }
      if (Array.isArray(type) && type.length) {
        return ["ro-button", ...type].join(" ");
      }
      return "ro-button";
    },
    subRender() {
      const sub = this.sub;
      if (!["number", "object"].includes(typeof sub)) {
        return false;
      }
      if (typeof sub === "object" && sub.number == null) {
        return false;
      }
      return true;
    }
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../styles/color.less";

.ro-button {
  cursor: pointer;
  border: 1px solid @ro_normal_color;
  font-size: 15px;
  padding: 6px 10px;
  color: #fff;
  background: @ro_normal_color;
  border-radius: 2.5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &.tiny {
    font-size: 9px;
  }
  &.small {
    font-size: 12px;
  }
  &.big {
    font-size: 20px;
    padding: 10px 15px;
  }
  &.success {
    background: @ro_success_color;
    border-color: @ro_success_color;
    &.clear {
      color: @ro_success_color;
    }
  }
  &.warning {
    background: @ro_warning_color;
    border-color: @ro_warning_color;
    &.clear {
      color: @ro_warning_color;
    }
  }
  &.danger {
    background: @ro_danger_color;
    border-color: @ro_danger_color;
    &.clear {
      color: @ro_danger_color;
    }
  }
  &.clear {
    color: @ro_normal_color;
    background: #fff;
  }
  &.disable {
    cursor: not-allowed;
    position: relative;
    &:before {
      position: absolute;
      border-radius: 2.5px;
      left: -1px;
      top: -1px;
      right: -1px;
      bottom: -1px;
      content: "";
      background: rgba(255, 255, 255, 0.6);
    }
  }
}
</style>
