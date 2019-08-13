<template>
  <div class="ro-input">
    <span
      :class="{
        active: !animate || isActive || inputValue,
        required: label && required
      }"
      @click="handleClickLabel(isActive)"
      >{{ label }}</span
    >
    <input
      type="text"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleInput"
      @change="handleChange"
      v-model="inputValue"
    />
    <i :class="isFocus ? 'active' : ''"></i>
  </div>
</template>
<script>
export default {
  name: "RoInput",
  props: {
    value: {
      type: String,
      default: () => ""
    },
    label: {
      type: String,
      default: () => ""
    },
    animate: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    inputValue: "",
    isActive: false,
    isFocus: false
  }),
  watch: {
    value(v) {
      this.inputValue = v;
    }
  },
  mounted() {
    this.inputValue = this.value;
  },
  methods: {
    handleFocus() {
      this.isActive = true;
      this.isFocus = true;
      this.$emit("focus");
    },
    handleBlur() {
      this.isFocus = false;
      if (this.inputValue) {
        return;
      }
      this.isActive = false;
    },
    handleClickLabel(isActive) {
      if (isActive) {
        return;
      }
      this.isActive = true;
    },
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
    handleChange(e) {
      this.$emit("change", e);
    }
  }
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
