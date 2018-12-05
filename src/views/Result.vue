<template>
  <div>
    <div class="m-background m-background--media-1"></div>
    <div class="m-background__overlay"></div>
    <Brand />
    <div class="l-container l-pad">
      <h4>From your answers, you're most like:</h4>
      <h2>{{student.name}}</h2>
      <p class="l--result">{{student.result}}</p>
      <img :src='student.image' class="l--right">
      <div id="reset-wrapper"><a href="/"><div class="m-btn m-btn__primary m-btn--left">Start Again!</div></a></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Brand from '../components/Brand'

export default {
  computed: {
    ...mapGetters(['getScore', 'getStudentByName']),
    highScore () {
      let scoreArray = this.getScore
      var res = Math.max.apply(Math, scoreArray.map(function (o) { return o.score }))
      var obj = scoreArray.find(function (o) { return o.score === res })
      return obj
    },
    student () {
      let student = this.highScore.name
      return this.getStudentByName(student)
    }
  },
  components: {
    Brand
  },
  name: 'Result'
}
</script>

<style scoped lang='scss'>
img.l--right {
  margin-right: 70px;
  width: 38%;
}

p.l--result {
  width: 45%;
  font-size: 1.5rem;
  margin-bottom: 30px;
}

</style>
