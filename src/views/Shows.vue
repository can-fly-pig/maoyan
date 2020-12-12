<template>
  <div>这是演出页</div>
</template>
<script>
export default {
  beforeRouteLeave (to,from,next){
    // const anwser = "abc"
    if(window){
        next()
    }else{
      next(false)
    }
  }
}
</script>
