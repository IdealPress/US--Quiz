<template>
  <div class="l-app-wrap">
    <ScreenTooSmall />
    <router-view/>
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
  background: #222;
}
.l-app-wrap {
  position: relative;
  width: 1020px;
  height: 600px;
  margin: auto;
  overflow: hidden;
  background: #fff;
}
.container {
  padding: 10px;
}
</style>

<style src='./assets/scss/styles.scss' lang='scss' />
