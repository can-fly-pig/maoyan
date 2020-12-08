<template>
  <div class="row">
    <p>{{ begood }}</p>
    <div class="sc">
      <ul>
        <li v-for="item in loveList" :key="item._id">
          <div class="want">
            <img :src="item.imgUrl" alt="" />
            <span v-if="item.score">观众评分 {{ item.score }}</span>
            <span v-else>{{ item.wishNum }} 人想看</span>
          </div>
          <p>{{ item.title }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
export default {
  props: {
    loveList: Array
  },
  data() {
    return {
      begood: "最受好评电影"
    };
  },
  watch: {
    async loveList() {
      await this.$nextTick();
      new BetterScroll(".sc", {
        scrollX: true,
        scrollY: false,
        click: true
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/var.scss";
.row {
  height: 200px;
  padding: 12px 0 12px 15px;
  background: white;
  margin-bottom: 15px;
  margin-right: 15px;
  p {
    height: 19px;
    margin-bottom: 12px;
    font-size: 15px;
  }
  .sc{
    width: 343px;
    height: 145px;
    overflow: hidden;
  }
  ul {
    height: 100%;
    display: inline-flex;
    li {
      width: 85px;
      height: 141px;
      margin-right: 10px;
      .want {
        position: relative;
        img {
          width: 85px;
          height: 115px;
        }
        span {
          width: 100%;
          line-height: 20px;
          position: absolute;
          left: 0;
          bottom: 6px;
          color: #faaf00;
          font-size: 11px;
          font-weight: 600px;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 1),
            rgba(0, 0, 0, 0)
          );
        }
      }
      p {
        margin: 0;
        font-size: 15px;
        color: #333;
        margin-bottom: 3px;
        width: 100%;
        @include wordMix;
        font-weight: 900;
      }
    }
  }
}
</style>
