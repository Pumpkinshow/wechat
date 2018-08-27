Page({
  data: {
    current: {
      poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
      name: '缘分天空',
      author: '孙楠',
      // src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
      src:"http://fs.w.kugou.com/201808241553/ec601980d301a60c9dbb27d4ac897700/G014/M05/11/08/roYBAFUX2miALyYYAEM9ZoR0M9I557.mp3"
    },
    audioAction: {
      method: 'pause'
    }
  },
  audioPlayed: function (e) {
    console.log('audio is played')
  },
  audioTimeUpdated: function (e) {
    this.duration = e.detail.duration;
  },

  timeSliderChanged: function (e) {
    if (!this.duration)
      return;

    var time = this.duration * e.detail.value / 100;

    this.setData({
      audioAction: {
        method: 'setCurrentTime',
        data: time
      }
    });
  },
  playbackRateSliderChanged: function (e) {
    this.setData({
      audioAction: {
        method: 'setPlaybackRate',
        data: e.detail.value
      }
    })
  },

  playAudio: function () {
    this.setData({
      audioAction: {
        method: 'play'
      }
    });
  },
  pauseAudio: function () {
    this.setData({
      audioAction: {
        method: 'pause'
      }
    });
  }
})