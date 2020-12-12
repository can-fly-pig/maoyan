<template>
  <button @click="fn">按钮</button>
</template>

<script>
export default {
  methods:{
    fn() {
      this.$router.push("/movie/hot")
    }
  },
  beforeRouteLeave (to,from,next){
    const a = window.confirm("确定要离开？")
    if(a){
      next()
    }else{
      next(false)
    }
  }
}
</script>

<style>

</style>