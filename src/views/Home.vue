<template>
  <div>
    <div class="m-background m-background--media-1"></div>
    <div class="m-background__overlay"></div>
    <img  class="leap" src="../assets/images/logos/leap-skills.png">
    <div class="l-container l-pad">
      <img class="l--right" src="../assets/images/students/students__all-2.png">
      <img src="../assets/images/logos/logo__unite.png">
      <h1 class="l__splash">Are you ready for the leap?</h1>
      <router-link class="m-btn m-btn--left m-btn__primary"
        :to="{ name: 'start' }">Enter &nbsp;<span class="m-btn__arrow" style="display:inline-block; margin-top: -0.4em;"></span></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang='scss'>
img.l--right {
  width: 66%;
}

img.leap {
  width: 150px;
  height: auto;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 125px;
}
</style>
