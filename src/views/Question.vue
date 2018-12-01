<template>
  <div>
    <div class="m-background__overlay-blue"></div>
    <Brand />
    <div class="l-container l-pad">
      <p class="question">{{roomQuestions[thisQuestion].question}}</p>
      <ul>
          <li v-for="answer in roomQuestions[thisQuestion].answers" :key="answer.id">
            <router-link :to="{ name: 'feedback', params: { room: thisRoom, question: roomQuestions[thisQuestion].id, answer:answer.id } }">
              {{answer.text}}
            </router-link>
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Brand from '../components/Brand'
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
    score () {
      return this.getScore
    }
  },
  components: {
    Brand
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
  background: #fff;
  margin: 20px 0px;
  padding: 20px;
  border-radius: 10px;
}
</style>
