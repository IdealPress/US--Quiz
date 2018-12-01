<template>
  <div>
    <div class="m-background m-background--media-1"></div>
    <Brand />
    <div class="l-container">
      <div class="intro">
        <p>Here's your chance to have a sneak peek into the world of a group of university students, who like together.</p>
        <p>As you explore their flat you'll encounter five different situations with potential solutions.</p>
        <p>Think about how you'd react to discover which student has the closest personality to yours.</p>
        <p>Now let's start the tour and meet the flatmates.</p>
      </div>
      <router-link class="m-btn m-btn--left m-btn__secondary"
        :to="{ name: 'intros' }">Meet the students &nbsp;<span><img width="100px" src="../assets/images/students/students__all.png"></span>
      </router-link>
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

<style scoped lang='scss'>

a {
  position: absolute;
  bottom: 30px;
  right: 30px;
  display: inline-flex;
  padding: 0px;
  align-items: center;
  padding: 0px 1em;
}

.intro {
  margin-left: 7.5%;
  background: rgba(240, 240, 240, 0.9);
  width: 46%;
  padding: 50px 40px;
  font-size: 1.6rem;
  text-transform: uppercase;
}

</style>
