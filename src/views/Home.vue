<template>
  <div>
    <div class="m-background m-background--media-1"></div>
    <div class="m-background__overlay"></div>
    <div class="l-container l-pad">
      <img class="l--right" src="../assets/images/students/students__all.png">
      <img src="../assets/images/logos/logo__unite.png">
      <h1 class="l__splash">Are you ready for the leap?</h1>
      <router-link class="m-btn m-btn--left m-btn__primary"
        :to="{ name: 'start' }">Enter &nbsp;<span class="m-btn__arrow" style="display:inline-block;"></span></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>

</style>
