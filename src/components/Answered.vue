<template>
  <div>
    <h3>You've answered this question!</h3>
    <a @click="back();" class="m-btn m-btn--left m-btn__secondary"><span class="m-btn m-btn__back" style="display:inline-block; margin-top: -0.4em;"></span>Go back</a>
  </div>
</template>

<script>
export default {
  methods: {
    back () {
      this.$router.go(-1)
    }
  },
  name: 'Answered'
}
</script>

<style scoped lang="scss">
div {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #f2f2f2;
  z-index: 100;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

a {
  cursor: pointer;
}
</style>
