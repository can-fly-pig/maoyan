export default {
    state: {
    city:localStorage.getItem("city")
    ?JSON.parse(localStorage.getItem("city")):{name:"杭州",cityId:300100}
  }
}
