<template>
  <ul>
    <my-movie-item
      class="contaner"
      v-for="item in movieList"
      :key="item.id"
      :item="item"
    >
    </my-movie-item>
  </ul>
</template>

<script>
import MyMovieItem from "../home/myMovieItem.vue";
export default {
  data() {
    return {
      array: []
    }
  },
  props: {
    movieList: Array
  },
  components: {
    MyMovieItem
  },
  beforeUpdate() {
    let arr = [];
    for(let item in this.movieList) {
      arr.push(this.movieList[item].movieid)
    }
    for(let i=0;i<arr.length;i++) {
      this.array[i]=arr[i];
    }
  },
  provide() {return {ids:this.array}}
};
</script>
