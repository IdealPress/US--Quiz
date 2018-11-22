<template>
  <div>
    <div class="m-background m-background--media-1"></div>
    <div class="m-background__overlay"></div>
    <Brand />
    <div class="l-container l-pad">
      <h3>Meet the students</h3>
      <div class="l--intros"
      v-for="student in getStudents"
      :key="student.id">
        <router-link class="m-btn m-btn--left m-btn__primary"
        :to="{ name: 'intro', params: {id: student.id } }">
          {{ student.name }}
        </router-link>
        <img :src='student.image'>
      </div>
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
  name: 'Intros'
}

</script>

<style>

</style>
