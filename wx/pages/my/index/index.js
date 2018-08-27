//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    headImg:"/static/common/images/my.png",
    name:""
  },
  onLoad() {
    let self = this;
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              self.setData({
                headImg: res.userInfo.avatarUrl || this.data.e.detail.userInfo.avatarUrl
              })
              self.setData({
                name: res.userInfo.nickName
              })              
            }
          })
        }
      }
    })
  },
  songT(){
    wx.navigateTo({
      url: '../song/index'
    })
  },
  videoT() {
    wx.navigateTo({
      url: '../video/index'
    })
  },
  goHome() {
    wx.navigateTo({
      url: '../map/map'
    })
  },
  idea() {
    wx.navigateTo({
      url: '../idea/index'
    })
    // wx.showToast({
    //   title: 'go',
    // })
  },
  bindGetUserInfo(e){
    console.log(e.detail.userInfo)
    // wx.showToast({
    //   title: "success",
    // })
    this.setData({
      headImg: e.detail.userInfo.avatarUrl || this.data.headImg
    })
    this.setData({
      name: e.detail.userInfo.nickName
    })
  }
})
