<template>
  <div>
    <div class="m-background m-background--media-2"></div>
    <Brand />
    <div class="l-container">
      <Navigation />
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

</style>
