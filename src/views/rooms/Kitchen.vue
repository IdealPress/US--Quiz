<template>
  <div>
    <div class="m-background m-background--media-5"></div>
    <Brand />
    <div class="l-container">
      <div class="m-btn__nav" @click="showNav = true"><h4>Where to?</h4></div>
      <Navigation v-if="showNav" @close="showNav = false"></Navigation>
      <router-link :to="{ name: 'question', params: {room: room.id, question: roomQuestions[0].relativeID } }">
        <div class="question-btn-1"></div>
      </router-link>
      <router-link :to="{ name: 'question', params: {room: room.id, question: roomQuestions[1].relativeID } }">
        <div class="question-btn-2"></div>
      </router-link>
    </div>
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
    ...mapGetters(['getRoom', 'getRoomQuestions']),
    room () {
      return this.getRoom(3)
    },
    roomQuestions () {
      return this.getRoomQuestions(3)
    }
  },
  name: 'Kitchen'
}
</script>

<style scoped lang='scss'>
.question-btn-1 {
  position: absolute;
  top: 225px;
  left: 800px;
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
  top: 350px;
  left: 700px;
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
