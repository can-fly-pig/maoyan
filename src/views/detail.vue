<template>
  <div class="own" v-if="this.DetailData.nm">
    <div class="heade">
      <div class="logo">
        <img
          src="//s0.meituan.net/bs/myfe/canary/file/asgard/images/logo@3x.png"
          alt=""
        />
      </div>
      <div class="fifty">
        <span class="has">领取50元电影票</span>
        <span>|</span>
        <span class="open">打开App ></span>
      </div>
    </div>
    <div
      class="contaner"
      :style="{ background: this.DetailData.backgroundColor }"
    >
      <p>猫眼电影 > {{ this.DetailData.nm }}</p>
      <div class="details">
        <img :src="this.DetailData.img | formaImg" alt="" />
        <div class="info">
          <h2>{{ this.DetailData.nm }}</h2>
          <h5>{{ this.DetailData.enm }}</h5>
          <h5>{{ this.DetailData.cat }}</h5>
          <h5>{{ this.DetailData.star | formaStar }}</h5>
          <h5>
            {{ this.DetailData.pubDesc }} / {{ this.DetailData.dur }}分钟 >
          </h5>
          <div class="btn">
            <div class="btnlist btn-first">想看</div>
            <div class="btnlist btn-second">看过</div>
          </div>
        </div>
      </div>
      <div class="score">
        <div class="timer">
          <span style="float:left">实时口碑</span>
          <span style="float:right">{{ this.DetailData.watched }}人想看</span>
          <span style="float:right">{{ this.DetailData.wish }}人看过</span>
        </div>
        <div class="score-totle">
          <div class="score-left">
            <span class="score-num">{{ this.DetailData.sc }}</span>
            <span class="score-peo">{{ this.DetailData.bingeWatch }}人评</span>
          </div>
          <div class="score-right" style="float:right">
            <star-bar :DetailData="DetailData" />
          </div>
        </div>
      </div>
      <div class="intro">
        <div class="intro-top">
          <span class="intro-top-left">简介 </span>
          <span class="intro-top-right"
            >展开
            <img
              src="//s0.meituan.net/bs/myfe/canary/file/asgard/images/movie/arrow-right.png"
              alt=""
            />
          </span>
        </div>
        <!-- <div class="intro-bottom"><button-tr></button-tr></div> -->
        <div class="intro-bottom"><button @click="fn">按钮</button></div>
        <!-- <div class="intro-bottom"><router-link tag="button" :to="this.url">按钮</router-link></div> -->
      </div>
    </div>
  </div>
</template>
<script>
// import ButtonTr from "../components/button";
import StarBar from "../components/detail/StarBar";
import { getMovieDetail } from "../utils/api";
export default {
  //路由传值第一种方法
  // props:["id"],
  data() {
    return {
      id: "",
      DetailData: {},
      url:`/detail/${this.IdNow}`,
      ids:[],
      IdNow:""
    };
  },
  created() {
    this.id = this.$route.params.movieId;
    this.ids = this.$route.params.IdAll;
    // const arr = this.ids;
    this.IdNow = this.ids.join("").split(this.id)[1].slice(0,7);
    console.log(this.IdNow);
    console.log(this.ids);
  },
  // mounted() {
  //   this.id = this.$route.params.movieId;
  //   this.ids = this.$route.params.IdAll;
  //   const arr = this.ids;
  //   this.IdNow = arr.join("").split(this.id)[1].slice(0,7);
  //   console.log(this.IdNow);
  //   console.log(arr);
  // },
  //！！！组件内前置守卫-->>数据预载
  //也可以用来做数据拦截（单个页面拦截此方法合适）
  //（对于多页面拦截建议用全局路由守卫）
  async beforeRouteEnter(to,from,next) {
    const res = await getMovieDetail({ id: to.params.movieId });
    next(vm => {vm.DetailData = res.result});
  },
  //！！！有了前置守卫下面就不用了
  // mounted() {
  //   this.getDetail();
  // },
  methods: {
    async getDetail() {
      const res = await getMovieDetail({ id: this.id });
      this.DetailData = res.result;
    },
    fn() {
      this.$router.push(`/detail/${this.IdNow}`)
    }
  },
    beforeRouteUpdate (to, from, next) {
      this.id = to.params.movieId;
      this.getDetail();
      next()
  },
  beforeRouterLeave(to,from,next) {
    let a = window.confirm(">>>");
    if(a){
      next()
    }
  },
  filters: {
    formaImg(val) {
      return val.split("/w.h").join("");
    },
    formaStar(val) {
      return val.split(",").join("/");
    }
  },
  components: {
    StarBar
    // ButtonTr
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/css/var.scss";
.own {
  color: #ccc;
  font-size: 12px;
  .heade {
    height: 60px;
    background-color: #fff;
    margin: 0 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      img {
        width: 94px;
        height: 39px;
        margin-top: 8px;
      }
    }
    .has {
      font-size: 14px;
      color: #666;
      font-weight: 900;
    }
    .open {
      color: #b37e7e;
      font-size: 16px;
      font-weight: 900;
    }
  }
  .contaner {
    padding: 0 15px;
    overflow: hidden;
    p {
      height: 21px;
      margin: 15px 0;
      line-height: 21px;
      font-size: 14px;
    }
    .details {
      display: flex;
      img {
        width: 100px;
        height: 100%;
      }
      .info {
        font-weight: 100;
        margin-left: 14px;
        h2 {
          font-weight: 900;
          font-size: 20px;
        }
        h5 {
          margin: 9px 0;
          font-weight: 100;
        }
        .btn {
          height: 30px;
          display: flex;
          .btnlist {
            width: 110px;
            @include wordCenter;
            background: hsla(0, 0%, 100%, 0.35);
            border-radius: 6px;
          }
          .btn-first {
            margin-right: 10px;
          }
        }
      }
    }
    .score {
      width: 100%;
      height: 160px;
      padding: 10px 12px;
      margin-top: 15px;
      border-radius: 5px;
      background-color: rgba(0, 0, 0, 0.2);
      .score-totle {
        width: 319px;
        height: 130px;
        padding: 20px 0;
        position: relative;
        border-bottom: 1px solid rgba($color: #000000, $alpha: 0.2);
        .score-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin: 25px;
          width: 50px;
          .score-num {
            font-size: 34px;
            color: #ffb400;
          }
          .score-peo {
            font-size: 12px;
          }
        }
        .score-right {
          position: absolute;
          right: 25px;
          bottom: 25px;
        }
      }
    }
    .intro {
      background: red;
      height: 200px;
      margin-top: 25px;
      .intro-top-left {
        font-size: 15px;
        float: left;
      }
      .intro-top-right {
        font-size: 12px;
        float: right;
        margin-right: 3px;
        img {
          width: 5px;
          height: 8px;
          transform: rotate(90deg);
          margin-left: 4px;
        }
      }
    }
  }
}
</style>
