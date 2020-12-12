<template>
  <div v-if="citylist.length" class="cities">
    <div class="title">热门城市</div>
    <ul>
      <li
        v-for="(item,index) in hotcity"
        :key="index"
        class="shows"
        @click="backHot(item)"
      >
      {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
// import { mapMutations } from "vuex";
import { getCityApi } from "../../utils/api";
export default {
  data() {
    return {
      citylist:[]
    }
  },
  async beforeRouteEnter (to, from, next) {
    const res = await getCityApi();
    next(vm => {
      vm.citylist = res.result
    });
  },
  computed: {
    hotcity() {
      return this.citylist[0].cities
    }
  },
  methods: {
    // ...mapMutations(["moduleCity/getChoise"]),
    backHot(city) {
      this.$router.go(-1),
      this.$store.commit("moduleCity/getChoise",city)
      // this["moduleCity/getChoise"](city)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/var.scss";
.cities{
  font-size: 14px;
  background: #ccc;
  .title{
    width: 100%;
    height: 34px;
    line-height: 34px;
  }
  ul{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    background: #e6e6e6;
    .shows{
      background-color: #fff;
      width: 80px;
      height: 34px;
      margin: 5px 0;
      @include wordCenter
    }
  }
}
</style>
