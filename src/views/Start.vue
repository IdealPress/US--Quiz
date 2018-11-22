<template>
  <div>
    <div class="m-background m-background--media-1"></div>
    <Brand />
    <div class="l-container l-pad">
      <p>Here's your chance to have a sneak peek into the world of a group of university students, who like together.</p>
      <p>As you explore their flat you'll encounter five different situations with potential solutions.</p>
      <p>Think about how you'd react to discover which student has the closest personality to yours.</p>
      <p>Now let's start the tour and meet the flatmates.</p>
      <router-link class="m-btn m-btn--left m-btn__secondary"
        :to="{ name: 'intros' }">Meet the students &nbsp;<span><img width="50px" src="../assets/images/students/students__all.png"></span></router-link>
    </div>
  </div>
</template>

<script>
import Brand from '../components/Brand'

export default {
  components: {
    Brand
  },
  name: 'Start'
}
</script>

<style>

</style>
