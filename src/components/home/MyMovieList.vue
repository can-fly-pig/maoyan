<template>
  <ul>
    <my-movie-item
      class="contaner"
      v-for="item in movieList"
      :key="item.id"
      :item="item"
    >
      <ul></ul>
    </my-movie-item>
  </ul>
</template>

<script>
import MyMovieItem from "../home/myMovieItem.vue";
export default {
  props: {
    movieList: Array
  },
  components: {
    MyMovieItem
  }
};
</script>
