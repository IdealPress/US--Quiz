<template>
  <div>
    <div class="l--header">
      <h4>{{ studentByName.name }}</h4>
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
        <div class="back-btn"><router-link :to="{ name: 'intros' }"><span class="m-btn m-btn__arrow-left" style="display:inline-block; margin-top: -0.4em;"></span>Back to students</router-link></div>
        <router-link :to="{ name: 'reception' }" class="m-btn m-btn--left m-btn__secondary m-rooms">See the rooms &nbsp;<span class="m-btn__arrow" style="display:inline-block; margin-top: -0.4em;"></span></router-link>
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
import VideoIntro from '../../components/VideoIntro'

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
    VideoIntro
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
  padding: 30px 40px 0px;
  font-size: 1.05rem;
  width: 38%;
  top: 0;
}
.p-video {
  width: 210px;
  height: 395px;
  margin-right: 30px;
  float:right;
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
  width: 195px;
  height: 295px;
  margin: 10px auto;
  background: #fff;
  display: flex;
  justify-content: center;
  background-size: cover;
  > div {
    cursor: pointer;
    align-self: center;
    color: rgba(255, 255, 255, 1);
    animation: glowing 5000ms infinite;
    &:hover {
      animation-name: none;
    }
  }
}
.p-home {
  width: 70px;
  height: 18px;
  border-radius: 10px;
  background: #333;
  margin: 15px auto;
}
.l--color-bg {
  background: #A7DDE0;
  width: 45%;
}
.l--header {
  width: 100%;
  padding: 0px 0px 0px 20px;
  background: #A7DDE0;
  h4 {
    display: inline-block;
    margin: 25px 0px 25px 20px;
  }
}
.m-rooms {
  position: absolute;
  right: 30px;
  bottom: 115px;
}
.back-btn {
  text-transform: uppercase;
  font-size: 1.5rem;
  padding: 0.4em 0em 0em;
  a {
    color: #000;
  }
}
</style>
