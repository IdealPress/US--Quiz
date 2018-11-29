<template>
  <div>
    <div class="l--header">
      <router-link :to="{ name: 'intros' }">X</router-link> <h4>{{ student.name }}</h4>
    </div>
    <Brand />
    <div class="l-container">
      <div class="l--intros-left">
        <p><span>Name:</span> {{ student.name }}</p>
        <p><span>Age:</span> {{ student.age }}</p>
        <p><span>Studying:</span> {{ student.studying }}</p>
        <p><span>Can be heard saying:</span> {{ student.catchphrase }}</p>
        <p><span>Profile:</span> {{ student.profile }}</p>
        <router-link :to="{ name: 'reception' }">></router-link>
      </div>
      <img :src='student.image' class="student-image">
      <div class="l--color-bg">
        <div class="p-video">
          <div class="p-speaker"></div>
          <div class="p-frame">
            <div @click="showModal = true"><h3>▶</h3></div>
            <modal v-if="showModal" @close="showModal = false">
            </modal>
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
import Modal from '../../components/Modal'

export default {
  data () {
    return {
      thisStudent: this.$route.params.id,
      showModal: false
    }
  },
  computed: {
    ...mapGetters(['getStudent']),
    student () {
      const studentID = parseInt(this.thisStudent, 10)
      return this.getStudent(studentID)
    }
  },
  components: {
    Brand,
    Modal
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
  justify-content: space-between;
}
img.student-image {
  position: absolute;
  left: 350px;
  width: 40%;
  transform: translateY(-100px);
  height: auto;
}
.l--intros-left {
  padding: 30px 30px 0px;
  font-size: 1.1rem;
  width: 35%;
  top: 0;
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
  width: 45%;
  padding: 20px 0px 0px 150px;
}
.l--header {
  width: 100%;
  padding: 20px 0px 0px 30px;
  background: #A7DDE0;
  h4 {
    display: inline-block;
    margin-left: 20px;
  }
}
</style>
