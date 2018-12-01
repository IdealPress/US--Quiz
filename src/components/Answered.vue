<template>
  <div>
    <h3>You've answered this question!</h3>
    <a @click="back();">Go back</a>
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
