<template>
  <div>
    <div id="nav">
      <h1>Where to?</h1>
      <router-link :to="{ name: 'communual-area' }"><div class="m-btn m-btn__primary">Communual Area</div></router-link>
      <router-link :to="{ name: 'bedroom' }"><div class="m-btn m-btn__primary">Bedroom</div></router-link>
      <router-link :to="{ name: 'kitchen' }"><div class="m-btn m-btn__primary">Kitchen</div></router-link>
      <div v-if="this.$route.name != 'reception'" class="nav-close" @click="$emit('close')"><div class="m-btn__cross"></div></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Navigation'
}
</script>

<style scoped lang="scss">
#nav {
  height: 100%;
  position: absolute;
  width: 33%;
  padding: 50px 30px;
  background: rgba(167,221,224,1);
  box-shadow: 0px 0px 10px rgba(0,0,0,0.16);
  z-index: 10;

  h1 {
    color: #fff;
  }
}

.nav-close {
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
}

.m-btn {
  background: #fff;
  margin: 10px 0;
  &:hover {
    background: #f2f2f2;
  }
}

ul {
  margin: 0;
}
</style>
