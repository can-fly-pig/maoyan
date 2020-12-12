<template>
  <div id="main">
    <div>
      <my-main :loveList="loveList" :key="loveList._id" />
      <my-movie-list :movieList="movieList" :key="movieList.id" />
    </div>
  </div>
</template>

<script>
//引入betterScroll插件
import BetterScroll from "better-scroll";
import { getListApi, getMovieApi, getMovieMoreApi } from "../../utils/api";
import MyMain from "../../components/home/MyMain";
import MyMovieList from "../../components/home/MyMovieList";

export default {
  data() {
    return {
      loveList: [],
      movieList: [],
      //总条数
      count: 0,
      //所有的电影id
      ids: [],
      //从第几个ids获取
      start: 0,
      //每次获取几条数据
      num: 5
    };
  },
  mounted() {
    this.getList();
    this.getMovie();
  },
  methods: {
    async getList() {
      let res = await getListApi();
      if (res.status === 0) {
        this.loveList = res.result;
      }
    },
    async getMovie() {
      let res = await getMovieApi();
      if (res.status === 0) {
        this.movieList = res.result;
        this.count = res.count;
        this.ids = res.ids;
        this.start = this.movieList.length;
        await this.$nextTick();
        const bs = new BetterScroll("#main", {
          scrollX: false,
          scrollY: true,
          click: true,
          pullUpLoad: true
        });
        bs.on("pullingUp", async () => {
          // pullingUp上拉到底后的操作
          // console.log(res)
          let arr = this.ids.slice(this.start, this.start + 5);
          let str = arr.join();
          const res = await getMovieMoreApi({ ids: str });
          this.movieList = this.movieList.concat(res.result);
          this.start += this.num;
          //重新计算高度
          await this.$nextTick();
          bs.refresh();
          // 表示这次下拉结束了，可以进行下一次的下拉了
          if (this.start <= this.count) {
            bs.finishPullUp();
          }
        });
      }
    }
  },
  components: {
    MyMain,
    MyMovieList
  }
};
</script>

<style lang="scss" scoped>
#main {
  position: absolute;
  top: 156px;
  left: 0;
  right: 0;
  bottom: 48px;
  overflow: hidden;
}
</style>
