<template>
  <div>
    <VideoFeedback v-if="showVideo" @close="showVideo = false" :video='roomQuestions[thisQuestion].answers[thisAnswer].feedback'></VideoFeedback>
    <div class="m-background__overlay-purple"></div>
    <Brand />
    <div class="l-container l-pad">
      <h3>Tips and Advice</h3>
      <p>{{roomQuestions[thisQuestion].tip}}</p>
      <router-link :to="{ name: room.name }">Back</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Brand from '../components/Brand'
import VideoFeedback from '../components/VideoFeedback'

export default {
  data () {
    return {
      thisRoom: this.$route.params.room,
      thisQuestion: this.$route.params.question - 1,
      thisAnswer: this.$route.params.answer - 1,
      showVideo: true
    }
  },
  computed: {
    ...mapGetters(['getRoom', 'getRoomQuestions']),
    room () {
      const roomID = parseInt(this.thisRoom, 10)
      return this.getRoom(roomID)
    },
    roomQuestions () {
      const roomID = parseInt(this.thisRoom, 10)
      return this.getRoomQuestions(roomID)
    }
  },
  components: {
    Brand,
    VideoFeedback
  },
  name: 'Feedback'
}
</script>

<style scoped lang='scss'>
h3 {
  color: #fff;
}
p {
  width: 80%;
  white-space: pre-line;
  color: #fff;
  font-size: 1.6rem;
}
</style>
