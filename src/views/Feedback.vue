<template>
  <div>
    <VideoFeedback v-if="showVideo" @close="showVideo = false" :url='roomQuestions[thisQuestion].answers[thisAnswer].feedback'></VideoFeedback>
    <div class="m-background__overlay-purple"></div>
    <Brand />
    <div class="l-container l-pad">
      <h3>Tips and Advice</h3>
      <p>{{roomQuestions[thisQuestion].tip}}</p>
      <a @click="checkEnd(room.name)"><span class="m-btn__arrow m-btn__feedback"></span></a>
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
    ...mapGetters(['getRoom', 'getRoomQuestions', 'getQuestionsAnswered', 'getScore']),
    room () {
      const roomID = parseInt(this.thisRoom, 10)
      return this.getRoom(roomID)
    },
    roomQuestions () {
      const roomID = parseInt(this.thisRoom, 10)
      return this.getRoomQuestions(roomID)
    },
    questionsAnswered () {
      return this.getQuestionsAnswered
    }
  },
  methods: {
    checkEnd (routeRoom) {
      if (this.questionsAnswered < 5) {
        this.$router.push({ name: routeRoom })
      } else {
        this.$router.push({ name: 'result' })
      }
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
a {
  cursor: pointer;
  position: absolute;
  right: 30px;
  bottom: 30px;
}
.m-btn__feedback {
  width: 50px;
  height: 50px;
  display:inline-block;
  margin-top: -0.4em;
}
</style>
