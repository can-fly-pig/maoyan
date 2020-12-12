//utils放公共方法的文件夹

//封装接口
import http from "./http";

//get列表
export const getListApi = function(data) {
  return http.get("/rated/list", data);
};
//get电影
export const getMovieApi = function(res) {
  return http.get("/movies/list", res);
};
//post加载更多
export const getMovieMoreApi = function(res) {
  return http.post("/movies/more", res);
};
//post请求详情页
export const getMovieDetail = function(params) {
  return http.post("/movies/detail", params);
};
//get请求城市页面
export const getCityApi = function(res) {
  return http.get("/area/list", res);
};
