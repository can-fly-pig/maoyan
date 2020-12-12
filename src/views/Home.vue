<template>
  <div id="home">
    <router-view></router-view>
    <div id="footer">
      <my-footer />
    </div>
  </div>
</template>
<script>
import MyFooter from "../components/home/MyFooter";
export default {
  components: {
    MyFooter
  }
};
</script>
<style lang="scss" scoped></style>
