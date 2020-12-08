<template>
  <ul>
    <li v-for="(item, index) in iconList"
    :key="index"
    :class="{active:num==index}"
    @click="change(index)"
    >
      <span class="iconfont" :class="item.icon"></span>
      <p>{{ item.title }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      iconList: [
        {
          title: "电影/影院",
          icon: "icon-dianying"
        },
        {
          title: "视频",
          icon: "icon-shipin1"
        },
        {
          title: "小视频",
          icon: "icon-shipin"
        },
        {
          title: "演出",
          icon: "icon-dianyingpiao"
        },
        {
          title: "我的",
          icon: "icon-wode"
        }
      ],
      num: 0
    };
  },
  methods:{
    change(i) {
      this.num = i;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/css/var.scss";
ul {
  display: flex;
  .active{
    color: $theme-color;
  }
  li {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    span{
      font-size: 24px;
      margin-bottom: 3px;
      margin-top: 3px;
    }
    p{
      margin-bottom: 3px;
    }
  }
}
</style>
