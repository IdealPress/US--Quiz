<template>
  <div>
    <div class="l--header">
      <router-link :to="{ name: 'intros' }">X</router-link> <h3>{{ student.name }}</h3>
    </div>
    <Brand />
    <div class="l-container">
      <div class="l--intros-left">
        <p><span>Name:</span> {{ student.name }}</p>
        <p><span>Age:</span> {{ student.age }}</p>
        <p><span>Studying:</span> {{ student.studying }}</p>
        <p><span>Can be heard saying:</span> {{ student.catchphrase }}</p>
        <p><span>Profile:</span> {{ student.profile }}</p>
      </div>
      <img :src='student.image'>
      <div class="l--color-bg">
        <div class="p-video">
          <div class="p-speaker"></div>
          <div class="p-frame">
            <h3>▶</h3>
          </div>
          <div class="p-home"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Brand from '../../components/Brand'

export default {
  data () {
    return {
      thisStudent: this.$route.params.id
    }
  },
  computed: {
    ...mapGetters(['getStudent']),
    students () {
      return this.$store.state.students
    },
    student () {
      const studentID = parseInt(this.thisStudent, 10)
      return this.getStudent(studentID)
    }
  },
  components: {
    Brand
  },
  name: 'Intro'
}
</script>

<style scoped lang='scss'>
span {
  text-transform: uppercase;
}
.l-container {
  display: flex;
}
.l--intros-left {
  padding: 30px 30px 0px;
  font-size: 1.1rem;
  width: 35%;
  top: 0;
}
img {
  height: 90%;
}
.p-video {
  width: 250px;
  height: 425px;
  margin-left: 35px;
  background: #000;
  border-radius: 20px;
  display: inline-block;
}
.p-speaker {
  width: 80px;
  height: 10px;
  border-radius: 10px;
  background: #333;
  margin: 20px auto;
}
.p-frame {
  width: 225px;
  height: 320px;
  margin: 10px auto;
  background: #fff;
  display: flex;
  justify-content: center;
  h3 {
    align-self: center;
  }
}
.p-home {
  width: 80px;
  height: 20px;
  border-radius: 10px;
  background: #333;
  margin: 20px auto;
}
.l--color-bg {
  background: #A7DDE0;
  width: 35%;
  padding: 0px 20px
}
</style>
