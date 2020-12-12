<template>
  <div id="home">
    <div id="top">
      <my-header />
      <my-nav-tab />
    </div>
    <div class="contaner">
      <!-- <transition name="movieMove"> -->
        <router-view></router-view>
      <!-- </transition> -->
    </div>
  </div>
</template>

<script>
import MyHeader from "../components/home/MyHeader";
import MyNavTab from "../components/home/MyNavTab";

export default {
  components: {
    MyHeader,
    MyNavTab
  }
};
</script>

<style lang="scss" scoped>
#top {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 156px;
  overflow: hidden;
  z-index: 999;
}
.contaner {
  margin-top: 156px;
}
// .movieMove-enter-active,
// .movieMove-leave-active {
//   transition: all .8s;
// }
// .movieMove-enter{
//   transform: translateX(-100%);
// }
// .movieMove-leave-to {
//   transform: translateX(100%);
// }
</style>
