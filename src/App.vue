<template>
  <div class="l-app-wrap">
    <ScreenTooSmall />
    <router-view/>
    <MainFooter />
  </div>
</template>

<script>
import ScreenTooSmall from './components/ScreenTooSmall'

export default {
  name: 'App',
  components: {
    ScreenTooSmall
  }
}
</script>

<style>
body {
  background: #272727;
  background-image:url(./assets/images/logo-background.png);
}
.l-app-wrap {
  position: relative;
  width: 1020px;
  height: 800px;
  margin: auto;
  overflow: hidden;
  background: #272727;
}
.container {
  padding: 10px;
}
</style>

<style src='./assets/scss/styles.scss' lang='scss' />
