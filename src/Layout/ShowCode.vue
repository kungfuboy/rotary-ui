<template>
  <div class="demo" :class="status ? 'active' : ''">
    <textarea :value="decode" readonly="readonly"></textarea>
    <div class="show-code" @click="handleSwitch">查看源码</div>
  </div>
</template>
<script>
export default {
  name: "ShowCode",
  props: ["code"],
  computed: {
    decode() {
      return unescape(this.code);
    }
  },
  data: () => ({
    status: false
  }),
  methods: {
    handleSwitch() {
      this.status = !this.status;
    }
  }
};
</script>
<style lang="less" scoped>
div.demo {
  &.active {
    textarea {
      height: 400px;
      opacity: 1;
      margin-top: 30px;
      padding: 20px 30px;
      transition: 0.6s all ease;
    }
    .show-code {
      margin-top: 10px;
    }
  }

  textarea {
    opacity: 0;
    height: 0;
    padding: 0px 30px;
    margin: 0;
    width: 100%;
    box-sizing: border-box;
    font-size: 18px;
    background: rgba(0, 137, 167, 0.2);
    border: 2px solid rgba(0, 137, 167, 0.6);
    box-shadow: 0 0 10px rgba(0, 137, 167, 0.4);
    color: #20604f;
    resize: none;
    transition: 0.6s all ease;
  }
  .show-code {
    background: rgba(38, 135, 133, 0.4);
    border-radius: 4px;
    border: 1px solid #268785;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 18px;
    color: #fff;
    cursor: pointer;
  }
}
</style>
