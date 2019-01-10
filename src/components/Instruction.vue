<template>
  <div class="instruction">Click and drag to move round the room and find the question marks.</div>
</template>

<script>
export default {
  name: 'Instruction'
}
</script>

<style scoped>
.instruction {
  position: absolute;
  background: rgba(167, 221, 224, 0.9);
  text-transform: uppercase;
  color: #000;
  font-size: 1.1rem;
  z-index: 1;
  width: 33%;
  padding: 20px;
  border-bottom-right-radius: 10px;
}
</style>
