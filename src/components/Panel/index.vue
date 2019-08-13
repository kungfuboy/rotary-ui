<template>
  <div class="ro-panel">
    <div class="title" @click="handleClickTitle">
      {{ label }}
    </div>
    <div class="content" ref="content" :class="isActive && 'active'">
      <slot></slot>
    </div>
    <i class="icon" @click="handleClickIcon"></i>
  </div>
</template>
<script>
export default {
  name: "RoPanel",
  props: {
    label: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      isActive: true
    };
  },
  methods: {
    handleClickTitle(e) {
      this.$emit("click-title", e);
    },
    handleClickIcon() {
      this.isActive = !this.isActive;
      this.$emit("click-icon", this.isActive);
    }
  }
};
</script>
<style lang="less" scoped>
@import "./index.less";
</style>
