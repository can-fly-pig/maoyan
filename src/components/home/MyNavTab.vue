<template>
  <div>
    <div id="find">
      <div id="find-left">
        <a href="/"
          ><img
            src="//p0.meituan.net/scarlett/448afce485c1f342895185c2be668fa411803.png"
            alt=""
          />
        </a>
      </div>
      <div id="find-center">
        <a href="#"><p>发现最新最热电影</p></a>
      </div>
      <div id="find-right">
        <a href="#">
          <span>打开App &gt;</span>
        </a>
      </div>
    </div>
    <nav>
      <address>杭州</address>
      <ul>
        <li
          v-for="(item, index) in msg"
          :key="index"
          @click="change(index)"
          :class="{ active: index == num }"
        >
          {{ item }}
        </li>
      </ul>
      <span class="iconfont icon-fangdajing"></span>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: ["热映", "影院", "待映", "热播"],
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
@import "../../assets/fonts/iconfont.css";
#find {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid $border-color;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: white;
  #find-left {
    img {
      width: 94px;
      height: 39px;
    }
  }
  #find-center {
    display: flex;
    justify-content: end;
    p {
      font-size: 14px;
      font-weight: 900;
      color: #666;
      font-family: PingFangSC-Regular, Arial, Helvetica, sans-seri;
      font-weight: 620;
    }
  }
  #find-right {
    margin-bottom: 8px;
    span {
      font-size: 16px;
      color: #b37e7e;
      font-family: PingFangSC-Medium;
      font-weight: 700;
    }
  }
}
nav {
  background: white;
  height: 46px;
  border-bottom: 1px solid $border-color;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;

  ul {
    display: flex;
    height: 100%;

    li {
      width: 66px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      font-weight: 900;
      color: #666;
    }

    .active {
      color: $active-color;
      font-size: 17px;
      font-weight: 900;

      &::after {
        content: "";
        position: absolute;
        width: 25px;
        height: 3px;
        background: $theme-color;
        bottom: 2px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
  .icon-fangdajing {
    color: $theme-color;
    font-weight: 900;
  }
}
</style>
