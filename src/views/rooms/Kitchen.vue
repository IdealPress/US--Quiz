<template>
  <div>
    <Brand />
    <div class="m-btn__nav" @click="showNav = true"><h4>Where to?</h4></div>
    <Instruction />
    <Navigation v-if="showNav" @close="showNav = false"></Navigation>
    <div id='pano'></div>
    <div v-if="!roomQuestions[0].answered" id='question-1' class='q-btn'><router-link :to="{ name: 'question', params: {room: room.id, question: roomQuestions[0].relativeID } }"><div class='q-btn-active'></div></router-link></div>
    <div v-else id='question-1' class='q-btn'><router-link :to="{ name: 'question', params: {room: room.id, question: roomQuestions[0].relativeID } }"><div class='q-btn-inactive'></div></router-link></div>
    <div v-if="!roomQuestions[1].answered" id='question-2' class='q-btn'><router-link :to="{ name: 'question', params: {room: room.id, question: roomQuestions[1].relativeID } }"><div class='q-btn-active'></div></router-link></div>
    <div v-else id='question-2' class='q-btn'><router-link :to="{ name: 'question', params: {room: room.id, question: roomQuestions[1].relativeID } }"><div class='q-btn-inactive'></div></router-link></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Brand from '../../components/Brand'
import Navigation from '../../components/Navigation'
import Instruction from '../../components/Instruction'
import Vue from 'vue'
var Marzipano = require('../../../node_modules/marzipano')
Vue.use(Marzipano)

export default {
  data () {
    return {
      showNav: false
    }
  },
  components: {
    Brand,
    Navigation,
    Instruction
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
  created: function () {
    this.updateNav()
  },
  methods: {
    updateNav: function () {
      let q = this.getRoomQuestions(3)
      let a = []
      for (let index = 0; index < q.length; ++index) {
        a.push(q[index].answered)
      }
      if (Object.keys(a).every(i => a[i])) {
        this.showNav = true
      } else {
        this.showNav = false
      }
    }
  },
  mounted: function () {
    // Create viewer.
    var viewer = new Marzipano.Viewer(document.getElementById('pano'))
    // Create source.
    var source = Marzipano.ImageUrlSource.fromString(
      '///static/tiles/kitchen/{z}/{f}/{y}/{x}.jpg',
      { cubeMapPreviewUrl: '/static/tiles/kitchen/preview.jpg' })

    // Create geometry.
    var geometry = new Marzipano.CubeGeometry([
      { tileSize: 256, size: 256, fallbackOnly: true },
      { size: 512, tileSize: 512 },
      { size: 1024, tileSize: 512 },
      { size: 2048, tileSize: 512 }
    ])
    // Create view.
    var limiter = Marzipano.RectilinearView.limit.traditional(2048, 120 * Math.PI / 180)
    var view = new Marzipano.RectilinearView(null, limiter)
    // Create scene.
    var scene = viewer.createScene({
      source: source,
      geometry: geometry,
      view: view,
      pinFirstLevel: true
    })
    // Autorotate function
    var autorotate = Marzipano.autorotate({
      yawSpeed: 0.1,
      targetPitch: 0,
      targetFov: Math.PI / 2
    })
    // Autorotate will start after 3s of idle time
    viewer.setIdleMovement(3000, autorotate)
    viewer.startMovement(autorotate)
    // Display scene.
    scene.switchTo()
    scene.hotspotContainer().createHotspot(document.querySelector('#question-1'), { yaw: -3.85, pitch: 0 })
    scene.hotspotContainer().createHotspot(document.querySelector('#question-2'), { yaw: 1.37, pitch: 0.1 })
  },
  name: 'Kitchen'
}
</script>

<style scoped lang="scss">
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-user-drag: none;
  -webkit-touch-callout: none;
  -ms-content-zooming: none;
}
</style>
