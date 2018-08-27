
Page({
  data: {
    background: [
      "../images/banner1.jpg",
      "../images/banner2.jpg",
      "../images/banner3.jpg",
      "../images/banner4.jpg",
      "../images/banner5.jpg",
      "../images/banner6.jpg",
      "../images/banner7.jpg",
      "../images/banner8.jpg",
      "../images/banner9.jpg",
      "../images/banner10.jpg"
      ],
    imgs: [
      "http://static.anhouse.com/zt/h5/xf/third/imgs/ABC.png",
      "http://static.anhouse.com/zt/h5/xf/third/imgs/BOC.png",
      "http://static.anhouse.com/zt/h5/xf/third/imgs/BOS.png",
      "http://static.anhouse.com/zt/h5/xf/third/imgs/CEB.png",
      "http://static.anhouse.com/zt/h5/xf/third/imgs/CIB.png",
      "http://static.anhouse.com/zt/h5/xf/third/imgs/CMB.png",
      "http://static.anhouse.com/zt/h5/xf/third/imgs/PAB.png"
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: false,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0
  },
  changeProperty: function (e) {
    var propertyName = e.currentTarget.dataset.propertyName
    var newData = {}
    newData[propertyName] = e.detail.value
    this.setData(newData)
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  preview(obj){
    console.log(obj.currentTarget.dataset.id);
    // wx.showToast({
    //   title: (obj.currentTarget.dataset.id + ''),
    // })
    let self = this;
    wx.previewImage({
      current: self.data.imgs[0], // 当前显示图片的http链接
      urls: self.data.imgs // 需要预览的图片http链接列表
    })
  },
  godetail(obj){
    console.log(obj);
    let index = obj.currentTarget.dataset.index;
    wx.navigateTo({
      url: '../detail/detail?id=' + index
    })
  },
  goHaofang(obj){
    let index = obj.currentTarget.dataset.index;
    wx.navigateTo({
      url: '../haofang/index?id=' + index
    })
  },
  goExperience(obj){
    let index = obj.currentTarget.dataset.index;
    wx.navigateTo({
      url: '../experience/index?id=' + index
    })
  },
  goHaofangList(){
    wx.navigateTo({
      url: '../list/index'
    })
  }
})
