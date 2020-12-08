import http from "./http1";
export const getListApi = function(data) {
  return http.get("/rated/list", data);
};
export const getMovieApi = function(data) {
  return http.get("/movies/list", data);
};
export const getMovieMoreApi = function(data) {
  return http.post("/movies/more",data);
};
