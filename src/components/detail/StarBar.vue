<template>
  <section>
    <div v-for="(item, index) in score" :key="index">
      <span class="first" v-if="item.movieScoreLevel == '9-10分'"
        >真的很不错</span
      >
      <span class="first" v-else-if="item.movieScoreLevel == '5-8分'"
        >真不错</span
      >
      <span class="first" v-else>错</span>
      <span class="second">
        <span class="yellow" :style="{ width: item.proportion + '%' }"></span>
      </span>
      <span class="third">{{ item.proportion }}%</span>
    </div>
  </section>
</template>

<script>
export default {
  props: ["DetailData"],
  computed: {
    normalizedSize: function() {
      return this.DetailData.trim().toLowerCase();
    }
  },
  data() {
    return {
      attr: this.DetailData,
      score: []
    };
  },
  mounted() {
    this.score = this.attr.distributions;
  }
};
</script>

<style lang="scss" scoped>
div {
  margin: 5px 0;
}
.first {
  font-size: 12px;
  display: inline-block;
  width: 70px;
  text-align: right;
  margin-right: 5px;
}
.second {
  display: inline-block;
  width: 100px;
  height: 8px;
  background: hsla(0, 0%, 100%, 0.05);
  position: relative;
  .yellow {
    display: inline-block;
    height: 8px;
    background: orange;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
