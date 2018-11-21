<template>
  <div>
    <div class="l--header">
      <router-link :to="{ name: 'intros' }">X</router-link>
      <h4></h4>
    </div>
    <Brand />
    <div class="l-container">
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Brand from '../../components/Brand'

export default {
  components: {
    Brand
  },
  computed: {
    ...mapGetters(['getStudents'])
  },
  name: 'Intro'
}
</script>

<style scoped>

</style>
