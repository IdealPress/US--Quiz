<template>
  <h1>{{ students[thisStudent].name }}</h1>
</template>

<script>
import Brand from '../../components/Brand'

export default {
  data () {
    return {
      thisStudent: this.$route.params.id - 1
    }
  },
  computed: {
    students () {
      return this.$store.state.students
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
