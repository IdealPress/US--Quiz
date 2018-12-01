<template>
  <div>
    <div class="l--header">
      <router-link :to="{ name: 'intros' }">X</router-link> <h4>{{ studentByName.name }}</h4>
    </div>
    <Brand />
    <VideoIntro v-if="showVideoIntro" @close="showVideoIntro = false" :url='studentByName.video'></VideoIntro>
    <div class="l-container">
      <div class="l--intros-left">
        <p class="capitalize"><span>Name:</span> {{ studentByName.name }}</p>
        <p><span>Age:</span> {{ studentByName.age }}</p>
        <p><span>Studying:</span> {{ studentByName.studying }}</p>
        <p><span>Can be heard saying:</span> {{ studentByName.catchphrase }}</p>
        <p><span>Profile:</span> {{ studentByName.profile }}</p>
        <router-link :to="{ name: 'reception' }" class="m-btn m-btn--left m-btn__secondary">See the rooms</router-link>
      </div>
      <img :src='studentByName.image' class="student-image">
      <div class="l--color-bg">
        <div class="p-video">
          <div class="p-speaker"></div>
          <div class="p-frame" v-bind:style="{ backgroundImage: 'url(' + studentByName.frame + ')' }">
            <div @click="showVideoIntro = true"><h1>▶</h1></div>
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
import Video from '../../components/Video'

export default {
  data () {
    return {
      thisStudent: this.$route.params.id,
      showVideoIntro: false
    }
  },
  computed: {
    ...mapGetters(['getStudent', 'getStudentByName']),
    student () {
      const studentID = parseInt(this.thisStudent, 10)
      return this.getStudent(studentID)
    },
    studentByName () {
      const studentName = this.thisStudent
      return this.getStudentByName(studentName)
    }
  },
  components: {
    Brand,
    Video
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
  width: 40%;
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
  background-size: cover;
  > div {
    cursor: pointer;
    align-self: center;
    color: #fff;
    text-shadow: 1px 1px 5px rgba(0,0,0,0.8)
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
