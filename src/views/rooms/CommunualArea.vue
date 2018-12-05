<template>
  <div>
    <Brand />
    <div class="m-btn__nav" @click="showNav = true"><h4>Where to?</h4></div>
    <Navigation v-if="showNav" @close="showNav = false"></Navigation>
    <div id='pano'></div>
    <div id='question-1' class='question'><router-link :to="{ name: 'question', params: {room: room.id, question: roomQuestions[0].relativeID } }"><div class='info'></div></router-link></div>
    <div id='question-2' class='question'><router-link :to="{ name: 'question', params: {room: room.id, question: roomQuestions[1].relativeID } }"><div class='info'></div></router-link></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Brand from '../../components/Brand'
import Navigation from '../../components/Navigation'
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
    Navigation
  },
  computed: {
    ...mapGetters(['getRoom', 'getRoomQuestions']),
    room () {
      return this.getRoom(1)
    },
    roomQuestions () {
      return this.getRoomQuestions(1)
    }
  },
  mounted: function () {
    // Create viewer.
    var viewer = new Marzipano.Viewer(document.getElementById('pano'))
    // Create source.
    var source = Marzipano.ImageUrlSource.fromString(
      '//waf.not-working.co.uk/unite-students/tiles/commonroom/{z}/{f}/{y}/{x}.jpg',
      { cubeMapPreviewUrl: '//waf.not-working.co.uk/unite-students/tiles/commonroom/preview.jpg' })

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
    scene.switchTo({ transitionDuration: 0 })
    scene.hotspotContainer().createHotspot(document.querySelector('#question-1'), { yaw: -3.85, pitch: 0.38 })
    scene.hotspotContainer().createHotspot(document.querySelector('#question-2'), { yaw: 5.2, pitch: 0.18 })
  },
  name: 'CommunualArea'
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

html, body {
  width: 1024px;
  height: 600px;
  padding: 0;
  margin: 0;
  overflow: hidden;
  font-family: helvetica, sans-serif;
}

#pano {
  position: absolute;
  top: 0;
  left: 0;
  width: 1024px;
  height: 600px;
}

.question {
  width: 49px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  transition: opacity 0.5s;
  &:hover {
    opacity: 0.8;
  }
}

.info {
  width: 100%;
  height: 100%;
  opacity: 1;
  background-position: center;
  background-size: cover;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDYgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ2IDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2ZpbGw6I0ZGRkZGRjt9PC9zdHlsZT48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjMsMC44Yy0xMiwwLTIxLjcsOS43LTIxLjcsMjEuN1MxMSw0NC4yLDIzLDQ0LjJzMjEuNy05LjgsMjEuNy0yMS44UzM1LDAuOCwyMywwLjh6IE0yNC4yLDMwLjVjMCwwLjUtMC4yLDAuOC0wLjQsMWMtMC4yLDAuMi0wLjUsMC40LTAuOSwwLjRIMjJjLTAuNSwwLTAuOC0wLjItMS0wLjRjLTAuMi0wLjItMC40LTAuNS0wLjQtMXYtMS40YzAtMC41LDAuMi0wLjgsMC40LTFjMC4yLTAuMiwwLjUtMC40LDEtMC40aDAuOGMwLjUsMCwwLjgsMC4yLDEsMC40YzAuMiwwLjIsMC40LDAuNSwwLjQsMVYzMC41eiBNMjguNiwyMS42Yy0wLjMsMC42LTAuNywxLjItMS4yLDEuNmMtMC41LDAuNC0xLDAuOC0xLjcsMWMtMC41LDAuMi0xLjEsMC4zLTEuNiwwLjN2MS4yYzAsMC41LTAuMiwwLjgtMC40LDFjLTAuMiwwLjItMC41LDAuNC0wLjksMC40SDIyYy0wLjUsMC0wLjgtMC4yLTEtMC40Yy0wLjItMC4yLTAuNC0wLjUtMC40LTAuOXYtMy4xYzAtMC41LDAuMi0wLjgsMC40LTFjMC4yLTAuMiwwLjUtMC40LDEtMC40aDEuOWMwLjUsMCwxLTAuMiwxLjMtMC41YzAuMy0wLjMsMC41LTAuOCwwLjUtMS4zYzAtMC4zLDAtMC41LTAuMS0wLjdjLTAuMS0wLjItMC4yLTAuNC0wLjQtMC42Yy0wLjItMC4yLTAuNC0wLjMtMC42LTAuNGMtMC4yLTAuMS0wLjQtMC4xLTAuNy0wLjFoLTMuM2MtMC41LDAtMC44LTAuMi0xLTAuNGMtMC4yLTAuMi0wLjQtMC41LTAuNC0xdi0wLjdjMC0wLjUsMC4yLTAuOCwwLjQtMWMwLjItMC4yLDAuNS0wLjQsMS0wLjRoMy4xYzAuNywwLDEuNCwwLjEsMiwwLjNjMC42LDAuMiwxLjIsMC42LDEuNywxYzAuNSwwLjQsMC45LDEsMS4yLDEuNmMwLjMsMC42LDAuNCwxLjMsMC40LDIuMUMyOSwyMC4zLDI4LjksMjEsMjguNiwyMS42eiIvPjwvc3ZnPg==);
}
</style>
