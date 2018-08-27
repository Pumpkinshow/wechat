Page({
  data: {
    background: [1],
    indicatorDots: false,
    vertical: false,
    autoplay: true,
    circular: false,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0
  },
  goBear(){
    wx.navigateTo({
      url: '../bear/bear'
    })
  },
  goStoryDetail(){
    wx.navigateTo({
      url: '../story/detail'
    })
  },
  goViewDetail(){
    wx.navigateTo({
      url: '../view/index'
    })
  }
})
