<template>
  <div id="video-feedback">
    <h5 @click="$emit('close')">X</h5>
    <img :src='video'>
  </div>
</template>

<script>
export default {
  props: ['video'],
  name: 'VideoFeedback'
}
</script>

<style scoped>
#video-feedback {
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(182, 52, 139, 0.95);
  z-index: 100;
}

img {
  padding: 35px;
}

p {
  color: #fff;
}

h5 {
  cursor: pointer;
  position: absolute;
  padding: 10px;
  right: 0;
  color: #fff;
}
</style>
