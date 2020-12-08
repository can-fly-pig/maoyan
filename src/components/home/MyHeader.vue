<template>
  <header>
    <span class="iconfont icon-dianying"></span>
    <h3>PILIPILI</h3>
    <span class="iconfont icon-liebiao"></span>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/css/var.scss";
@import "../../assets/fonts/iconfont.css";
header {
  width: 100%;
  height: 50px;
  background: $theme-color;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  h3 {
    font-size: 18px;
    color: #fff;
  }

  .iconfont {
    font-size: 25px;
    color: #fff;
  }

  .icon-liebiao {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
  }

  .icon-dianying {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
