<template>
  <div>
    <h1>{{ student.name }}</h1>
    <h2>{{ student.age }}</h2>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Brand from '../../components/Brand'

export default {
  data () {
    return {
      thisStudent: this.$route.params.id
    }
  },
  computed: {
    ...mapGetters(['getStudent']),
    students () {
      return this.$store.state.students
    },
    student () {
      const studentID = parseInt(this.thisStudent, 10)
      return this.getStudent(studentID)
    }
  },
  components: {
    Brand
  },
  name: 'Intro'
}
</script>

<style scoped>

</style>
