<template>
  <div class="ro-select">
    <a
      class="ro-select-input"
      @click="handleFoucs"
      :class="isFocus ? 'active' : ''"
      >{{ value }}<slot></slot
    ></a>
    <!-- <ro-input label="输入" v-model="value" @focus="handleFoucs"></ro-input> -->
    <i v-show="isFocus" class="modal" @click="handleBlur"></i>
    <ul class="ro-select-list" v-show="isFocus">
      <li
        v-for="(item, index) in options"
        :key="index"
        @click="handleSelect(item.code, item.label, index)"
      >
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>
<script>
// import RoInput from "../Input";
export default {
  name: "RoSelect",
  // components: {
  //   RoInput
  // },
  props: {
    options: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    isFocus: false,
    value: ""
  }),
  methods: {
    handleFoucs() {
      this.isFocus = true;
    },
    handleBlur() {
      this.isFocus = false;
    },
    handleSelect(value, label, index) {
      this.isFocus = false;
      this.value = label;
      this.$emit("input", value);
      this.$emit("selected", this.options[index]);
    }
  }
};
</script>
<style lang="less">
.ro-select {
  position: relative;
  display: inline-block;
  width: 100%;
  .modal {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
  }
  .ro-select-input {
    display: inline-flex;
    width: 100%;
    height: 100%;
    background: #fff;
    align-items: center;
    font-size: 1.6rem;
    color: rgba(0, 0, 0, 0.9);
    position: relative;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    .icon {
      background: url("../../assets/icon/arrow.svg");
    }
  }
  ul.ro-select-list {
    margin: 0;
    padding: 0;
    position: fixed;
    z-index: 2;
    background: #fff;
    left: 0;
    right: 0;
    bottom: 0;
    li {
      font-size: 1.9rem;
      color: rgba(0, 0, 0, 0.6);
      list-style: none;
      height: 4.4rem;
      padding: 0 1.6rem;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      margin: 0;
      position: relative;
      &:not(:first-child):after {
        content: "";
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: rgba(0, 0, 0, 0.3);
        transform: scaleY(0.5);
      }
    }
  }
}
</style>
