<template>
  <div>
    <div class="m-background m-background--media-1"></div>
    <div class="m-background__overlay"></div>
    <Brand />
    <div class="l-container l-pad">
      <h3>From your answers, you're most like:</h3>
      <h2>{{student.name}}</h2>
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

<style>

</style>
