<template>
  <li class="items">
    <img :src="item.img | filter" alt="" />
    <div class="movie-info">
      <h3>{{ item.nm }}</h3>
      <p v-if="item.sc">
        观众评 <span>{{ item.sc }}</span>
      </p>
      <p v-else>暂无评分</p>
      <p>主演:{{ item.star }}</p>
      <p>{{ item.showInfo }}</p>
    </div>
    <div class="right" v-if="item.showst == 3">售票</div>
    <div class="right wills" v-else>预售</div>
  </li>
</template>

<script>
export default {
  props: {
    item: Object
  },
  filters: {
    filter(val) {
      return val.split("/w.h").join("");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/var.scss";
.items {
  height: 114px;
  margin: 0 15px 1px 0;
  background: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    width: 64px;
    height: 90px;
  }
  .movie-info {
    width: 207px;
    height: 87px;
  }
  h3 {
    font-size: 17px;
    color: #333;
    line-height: 30px;
    font-weight: 900;
    @include wordMix;
  }
  p {
    font-size: 15px;
    color: #666;
    line-height: 20px;
    @include wordMix;
    span {
      font-weight: 700;
      color: #faaf00;
      font-size: 15px;
    }
  }
  .right {
    width: 47px;
    height: 27px;
    background: $theme-color;
    border-radius: 5px;
    font-size: 12px;
    color: #fff;
    @include wordCenter;
  }
  .wills {
    background: #3c9fe6;
  }
}
</style>
