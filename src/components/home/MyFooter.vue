<template>
  <footer>
    <ul>
      <router-link
        v-for="item in iconList"
        tag="li"
        :to="item.url"
        :key="item.icon"
        active-class="active"
      >
        <span class="iconfont" :class="item.icon"></span>
        <p>{{ item.title }}</p>
      </router-link>
    </ul>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      iconList: [
        {
          title: "电影/影院",
          icon: "icon-dianying",
          url: "/movie"
        },
        {
          title: "视频",
          icon: "icon-shipin1",
          url: "/video"
        },
        {
          title: "小视频",
          icon: "icon-shipin",
          url: "/minivideo"
        },
        {
          title: "演出",
          icon: "icon-dianyingpiao",
          url: "/shows"
        },
        {
          title: "我的",
          icon: "icon-wode",
          url: "/mine"
        }
      ],
      num: 0
    };
  },
  methods: {
    change(i) {
      this.num = i;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/css/var.scss";
footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 49px;
  background: white;
  ul {
    display: flex;
    .active {
      color: $theme-color;
    }
    li {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      span {
        font-size: 24px;
        margin-bottom: 3px;
        margin-top: 3px;
      }
      p {
        margin-bottom: 3px;
      }
    }
  }
}
</style>
