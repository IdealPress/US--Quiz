<template>
<div>
      <h2>As the UK’s largest student accommodation provider, Unite Students has spent years providing a home for success for young people, supporting them to thrive while they make the big ‘Leap’ to university life.</h2>
      <p>Our insight reports have identified a significant gap in teenagers’ expectations of what life will be like living away at university. We know that by better equipping young people for the leap to university, the better they will overcome the challenges ahead. Please click here to find out more about The Leap.</p>
  </div>
</template>

<script>
export default {
  name: 'MainFooter'
}
</script>

<style scoped>
  .v-wrapper {
    text-align:center;
    width: 100%;
    height: 100%;
    display: none;
    align-items: center;
    background: #f2f2f2;
  }

  .v-message {
    width: 100vw;
    padding: 30px;
  }

  @media screen and (max-width: 1020px) {
    .v-wrapper {
      z-index: 1001;
      display: flex;
      position: absolute;
    }
}
</style>
