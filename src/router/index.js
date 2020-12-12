import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    //重定向,让页面一出来就看到首页
    redirect: "/movie"
  },
  {
    //路由传值第一种方法
    // path:"/detail/:id",
    // props:true,
    // 第二种方式
    path: "/detail/:movieId",
    name: "detail",
    meta: { titleNameAll: "电影详情" },
    // beforeEnter: (to, from, next) => {
    //   console.log(to);
    //   next()
    // },
    component: () => import("../views/detail.vue")
  },
  {
    path: "/home",
    component: () => import("../views/Home.vue"),
    children: [
      {
        path: "/movie",
        component: () => import("../views/Movie.vue"),
        children: [
          {
            path: "/movie",
            //重定向,让页面一出来就看到首页
            redirect: "/movie/hot"
          },
          {
            path: "hot",
            component: () => import("../views/movie/Hot.vue")
          },
          {
            path: "cinema",
            meta: { titleName: "猫妖影院" },
            component: () => import("../views/movie/Cinema.vue")
          },
          {
            path: "wait",
            meta: { titleName: "猫妖待映" },
            component: () => import("../views/movie/Wait.vue")
          },
          {
            path: "broadcast",
            meta: { titleName: "猫妖热播" },
            component: () => import("../views/movie/BroadCast.vue")
          }
        ]
      },
      {
        path: "/video",
        meta: { titleName: "猫妖视频" },
        component: () => import("../views/Video.vue")
      },
      {
        path: "/minivideo",
        meta: { titleName: "猫妖小视频" },
        component: () => import("../views/MiniVideo.vue")
      },
      {
        path: "/shows",
        meta: { titleName: "猫妖演出" },
        component: () => import("../views/Shows.vue")
      },
      {
        path: "/mine",
        meta: { titleName: "猫妖本妖" },
        component: () => import("../views/Mine.vue")
      }
    ]
  },
  {
    path:"/city",
    component: () => import ("../views/movie/City.vue")
  },
  {
    path: "/login",
    component: () => import ("../views/Login.vue")
  },
  {
    path: "*",
    component: () => import("../views/Error404.vue")
  }
];

// 解决路由重复点击报错的问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.titleNameAll) {
    document.title = to.params.movieName + to.meta.titleNameAll;
  } else if (to.meta.titleName) {
    document.title = to.meta.titleName;
  } else {
    document.title = "猫妖电影";
  }
  next();
});

export default router;
