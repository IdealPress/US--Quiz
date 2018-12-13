<template>
  <div>
    <div class="m-background m-background--media-2"></div>
    <Brand />
    <div class="l-container">
      <Navigation />
      <div class="intro">Welcome! Enter and explore the rooms, click on the hotspots to find out more!</div>
    </div>
  </div>
</template>

<script>
import Brand from '../../components/Brand'
import Navigation from '../../components/Navigation'

export default {
  components: {
    Brand,
    Navigation
  },
  name: 'Intros'
}
</script>

<style>
.intro {
  right: 0;
  top:0;
  margin-top: 240px;
  margin-right: 120px;
  position: absolute;
  background: rgba(255, 255, 255, 0.95  );
  width: 46%;
  padding: 50px 40px;
  font-size: 1.6rem;
  text-transform: uppercase;
  border-radius: 10px;
}
</style>
