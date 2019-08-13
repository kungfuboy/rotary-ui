<template>
  <section class="layout">
    <nav @click="showSide = !showSide">
      <img src="../assets/img/Rotary-UI.png" alt="" />
    </nav>
    <section class="content">
      <aside :class="showSide ? 'active' : ''">
        <Menu @switch="handleSwitch" />
      </aside>
      <section class="page-content">
        <section class="mk-format">
          <router-view />
        </section>
      </section>
    </section>
  </section>
</template>
<script>
import Menu from "./Menu";
export default {
  name: "Layout",
  data: () => ({
    showSide: false
  }),
  components: {
    Menu
  },
  methods: {
    handleSwitch() {
      this.showSide = false;
    }
  }
};
</script>
<style lang="less" scoped>
@import "../assets/less/blur.less";
@import "../assets/less/mkheightlight.less";

.layout {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  nav {
    height: 50px;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    padding: 5px 0;
    box-sizing: border-box;
    img {
      height: 100%;
    }
  }
  .content {
    position: relative;
    display: flex;
    flex: 1;
    height: 100%;
    aside {
      position: absolute;
      z-index: 30;
      left: 0;
      top: 0px;
      bottom: 0px;
      transition: 0.4s all ease;
      transform: translateX(-100%);
      background-color: rgba(129, 199, 212, 0.9);
      background-image: url("../assets/img/texture.png");
      width: 100%;
      &.active {
        transform: translateX(0);
      }
    }
    .page-content {
      width: 100%;
      height: 100%;
      overflow: auto;
      padding: 0 20px 30px;
      box-sizing: border-box;
    }
  }
}

@media (min-width: 520px) {
  .layout {
    nav {
      height: 60px;
      justify-content: flex-start;
      padding: 0 50px;
      .blur;
      img {
        height: 50px;
      }
    }
    .content {
      aside {
        position: relative;
        transform: translateX(0);
        background: none;
        width: 300px;
        height: 100%;
        .blur;
      }
      .page-content {
        //   flex: 1;
        //   display: flex;
        //   justify-content: center;
        //   box-sizing: border-box;
        //   padding: 0;
        .mk-format {
          //     overflow-y: auto;
          //     width: 100%;
          padding: 50px 22%;
          //     box-sizing: border-box;
        }
      }
    }
  }
}
</style>
