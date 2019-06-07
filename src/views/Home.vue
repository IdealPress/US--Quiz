<template>
  <div>
    <div class="m-background m-background--media-1"></div>
    <!--//<div class="m-background__overlay"></div>-->
    <img  class="leap" src="../assets/images/logos/leap-skills.png">
    <div class="l-container l-pad">
      <img class="l--right" src="../assets/images/students/students__all-2.png">
      <img src="../assets/images/logos/logo__unite.png"  class="unite-logo" />
      <h1 class="l__splash">Are you ready for the leap?</h1>
      <router-link class="m-btn m-btn--left m-btn__primary"
        :to="{ name: 'start' }">Enter &nbsp;<span class="m-btn__arrow" style="display:inline-block; margin-top: -0.4em;"></span></router-link>
    </div>
    <div class="footer">
    <p><strong>As the UK's largest student accommodation provider, Unite Students has spent years providing a home for success for young people, supporting them to thrive while they make the big 'Leap' to university life.</strong></p>
      <p>Our insight reports have identified a significant gap in teenagers’ expectations of what life will be like living away at university. We know that by better equipping young people for the leap to university, the better they will overcome the challenges ahead. Please click here to find out more about <a href="#" class="text">The Leap</a>.</p>
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
  right:-80px;
  bottom:-1px;
}

img.leap {
  width: 150px;
  height: auto;
  position: absolute;
  top: 10px;
  right: 20px;
  width: 125px;
}
.unite-logo {
  width:250px;
}

.footer {padding:40px;text-align:center;}
.footer p {font-weight:normal;color:#fff;}
</style>
