<template>
  <div class="v-wrapper">
    <div class="v-message">
      <h2>Your screen is too small!</h2>
      <h4>Please increase the width of your browser window or turn your device sideways.</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScreenTooSmall'
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

  @media screen and (max-width: 1024px) {
    .v-wrapper {
      z-index: 1001;
      display: flex;
      position: absolute;
    }
}
</style>
