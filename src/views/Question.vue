<template>
  <div>
    <Answered v-if="answered == true"></Answered>
    <div v-else>
      <div class="m-background__overlay-blue"></div>
      <Brand />
      <div class="l-container l-pad">
        <p class="question">{{currentQuestion.question}}</p>
        <ul>
            <li v-for="answer in currentQuestion.answers" :key="answer.id">
              <a @click="answerQuestion(currentQuestion.id, answer.id, thisRoom, currentQuestion.relativeID);" >
                {{answer.text}}
              </a>
            </li>
        </ul>
      </div>
    </div> <!-- End else -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Brand from '../components/Brand'
import Answered from '../components/Answered'
export default {
  data () {
    return {
      thisRoom: this.$route.params.room,
      thisQuestion: this.$route.params.question - 1
    }
  },
  computed: {
    ...mapGetters(['getRoom', 'getRoomQuestions', 'getScore']),
    room () {
      const roomID = parseInt(this.thisRoom, 10)
      return this.getRoom(roomID)
    },
    roomQuestions () {
      const roomID = parseInt(this.thisRoom, 10)
      return this.getRoomQuestions(roomID)
    },
    currentQuestion () {
      return this.roomQuestions[this.thisQuestion]
    },
    answered () {
      return this.roomQuestions[this.thisQuestion].answered
    }
  },
  methods: {
    ...mapActions(['saveAnswer', 'incrementQuestionsAnswered']),
    answerQuestion (questionID, answerID, routeRoom, routeQuestion) {
      this.saveAnswer([questionID, answerID])
      this.incrementQuestionsAnswered()
      this.$router.push({ name: 'feedback', params: { room: routeRoom, question: routeQuestion, answer: answerID } })
    }
  },
  components: {
    Brand,
    Answered
  },
  name: 'Question'
}
</script>

<style scoped lang="scss">
p.question {
  font-size: 1.5rem;
  width: 80%;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  margin: 20px 0px;
  a {
    background: #fff;
    display: list-item;
    padding: 20px;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      background: #f2f2f2;
    }
  }
}
</style>
