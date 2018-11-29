<template>
  <div>
    <div class="m-background__overlay-blue"></div>
    <Brand />
    <div class="l-container l-pad">
      <p class="question">{{room.questions[thisQuestion].question}}</p>
      <ul>
          <li v-for="answer in room.questions[thisQuestion].answers" :key="answer.id">
            <router-link :to="{ name: 'feedback', params: { room: thisRoom, question: thisQuestion + 1, answer:answer.id } }">
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
    ...mapGetters(['getRoom']),
    room () {
      const roomID = parseInt(this.thisRoom, 10)
      return this.getRoom(roomID)
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
