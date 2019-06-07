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
        :to="{ name: 'intro', params: {id: student.name } }">
          {{ student.name }}
        </router-link>
        <img :src='student.image'>
      </div>
    </div>
    <div class="footer">
      <p><strong>As the UK's largest student accommodation provider, Unite Students has spent years providing a home for success for young people, supporting them to thrive while they make the big 'Leap' to university life.</strong></p>
        <p>Our insight reports have identified a significant gap in teenagers’ expectations of what life will be like living away at university. We know that by better equipping young people for the leap to university, the better they will overcome the challenges ahead. Please click here to find out more about <a href="#" class="text">The Leap</a>.</p>
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
