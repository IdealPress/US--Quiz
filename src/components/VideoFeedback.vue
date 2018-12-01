<template>
    <div class="video-wrapper">
      <video width="100%" height="auto" ref="videoPlayer" autoplay>
        <source :src='url' type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <div id="video-controls" class="controls">
        <button id="playPause" type="button" ref="playPause" data-state="play">Play/Pause</button>
        <div class="progress" ref="progressBar" min="0">
           <span id="timeElapsed" ref="timeElapsed"></span>
        </div>
        <button @click="$emit('close')">Close</button>
      </div>
    </div>
</template>

<script>

let vm = null
let videoPlayer = null
let playPause = null
let progressBar = null
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
    progressBar = vm.$refs.progressBar
    timeElapsed = vm.$refs.timeElapsed
    console.log(videoPlayer)
    console.log(playPause)
    console.log(progressBar)
    console.log(timeElapsed)
    var changeButtonState = function (type) {
      // Play/Pause button
      if (type === 'playPause') {
        if (videoPlayer.paused || videoPlayer.ended) {
          playPause.setAttribute('data-state', 'play')
        } else {
          playPause.setAttribute('data-state', 'pause')
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
    /* progressBar.addEventListener('click', function (e) {
      var pos = (e.pageX - (this.offsetLeft + this.offsetParent.offsetLeft)) / this.offsetWidth
      videoPlayer.currentTime = pos * videoPlayer.duration
    }) */
  },
  name: 'VideoFeedback'
}
</script>

<style scoped lang='scss'>
.video-wrapper {
  position: absolute;
  z-index: 500;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  display: block;
  transition: opacity .3s ease;
  video {
    height: 549px;
    display: block;
  }
}
.controls {
  display: flex;
  height: 51px;
  button {
    background: rgba(182, 52, 139, 1);
    border: none;
    cursor: pointer;
    &:hover {
      background: rgb(142,41,109);
    }
  }
}
.controls .progress {
  width:100%;
  border:none;
  height: 100%;
  background: rgba(182, 52, 139, 1);
}
.controls .progress span {
   width:0%;
   height:100%;
   transition: width 0.6s;
   display:inline-block;
   background-color: rgb(142,41,109);
}

</style>
