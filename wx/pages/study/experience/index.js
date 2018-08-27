// pages/study/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
    allMsgs: [
      {
        title: "canvas绘制圆角头像",
        author: "作者：李四",
        time: "时间：2018-08-16",
        msg: [
          "使用canvas的arc方法"
        ]
      },
      {
        title: "小程序跳转小程序",
        author: "作者：练庆楠",
        time: "时间：2018-08-21",
        msg: [
          "1.在开发者工具上调用此 API 并不会真实的跳转到另外的小程序，但是开发者工具会校验本次调用跳转是否成功",
          "2.开发者工具上支持被跳转的小程序处理接收参数的调试",
          "3.只有同一公众号下的关联的小程序之间才可相互跳转",
          "4.文档地址：https://developers.weixin.qq.com/miniprogram/dev/api/navigateToMiniProgram.html"
        ]
      }
    ],
    nowObj: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id || 0;
    this.setData({
      id: id
    })
    this.setData({
      nowObj: this.data.allMsgs[id]
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})