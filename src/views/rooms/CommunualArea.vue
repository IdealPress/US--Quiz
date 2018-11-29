<template>
  <div>
    <div class="m-background m-background--media-3"></div>
    <Brand />
    <div class="l-container">
      <div class="m-btn__nav" @click="showNav = true"><h4>Where to?</h4></div>
      <Navigation v-if="showNav" @close="showNav = false"></Navigation>
    </div>
    <router-link :to="{ name: 'question', params: {room: room.id, question: room.questions[0].id } }">
      <div class="question-btn-1"></div>
    </router-link>
    <router-link :to="{ name: 'question', params: {room: room.id, question: room.questions[1].id } }">
      <div class="question-btn-2"></div>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Brand from '../../components/Brand'
import Navigation from '../../components/Navigation'

export default {
  data () {
    return {
      showNav: false
    }
  },
  components: {
    Brand,
    Navigation
  },
  computed: {
    ...mapGetters(['getRoom']),
    room () {
      return this.getRoom(1)
    }
  },
  name: 'CommunualArea'
}
</script>

<style scoped lang="scss">
.question-btn-1 {
  position: absolute;
  top: 360px;
  left: 600px;
  width: 20px;
  height: 20px;
  background: #FFD73E;
  border: #fff solid 2px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  &:hover {
    background: #ffcc0b;
  }
}

.question-btn-2 {
  position: absolute;
  top: 400px;
  left: 200px;
  width: 20px;
  height: 20px;
  background: #FFD73E;
  border: #fff solid 2px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  &:hover {
    background: #ffcc0b;
  }
}

</style>
