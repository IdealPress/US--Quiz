<template>
    <div class="video-wrapper">
      <video width="100%" height="auto" ref="videoPlayer" autoplay>
        <source :src='url' type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <div id="video-controls" class="controls">
        <button id="playPause" ref="playPause" data-state="play"><div id="v-btn-wrapper"></div></button>
        <div class="progress" ref="progressBar" min="0">
           <span id="timeElapsed" ref="timeElapsed"></span>
        </div>
        <button @click="$emit('close')"><div id="v-btn-wrapper" class="v-btn__close"></div></button>
      </div>
    </div>
</template>

<script>

let vm = null
let videoPlayer = null
let playPause = null
let timeElapsed = null
let duration = null
let percentage = null
let currentTime = null

export default {
  props: ['url'],
  mounted: function () {
    vm = this
    videoPlayer = vm.$refs.videoPlayer
    playPause = vm.$refs.playPause
    timeElapsed = vm.$refs.timeElapsed
    var changeButtonState = function (type) {
      // Play/Pause button
      if (type === 'playPause') {
        if (videoPlayer.paused || videoPlayer.ended) {
          playPause.setAttribute('data-state', 'play')
          playPause.firstChild.className = 'v-btn__play'
        } else {
          playPause.setAttribute('data-state', 'pause')
          playPause.firstChild.className = 'v-btn__pause'
        }
      }
    }
    videoPlayer.addEventListener('play', function () {
      changeButtonState('playPause')
    }, false)
    videoPlayer.addEventListener('pause', function () {
      changeButtonState('playPause')
    }, false)
    playPause.addEventListener('click', function (e) {
      if (videoPlayer.paused || videoPlayer.ended) videoPlayer.play()
      else videoPlayer.pause()
    })
    videoPlayer.addEventListener('timeupdate', function () {
      duration = videoPlayer.duration
      currentTime = videoPlayer.currentTime
      percentage = (100 / duration) * currentTime
      timeElapsed.style.width = percentage + '%'
    })
  },
  name: 'VideoIntro'
}
</script>

<style scoped lang='scss'>

.controls {
  button {
    background: #A7DDE0; //
    &:hover {
      background: #6ec7cc; //
    }
  }
}
.controls .progress {
  background: #A7DDE0; //
}
.controls .progress span {
   background-color: #6ec7cc; //
}

</style>
