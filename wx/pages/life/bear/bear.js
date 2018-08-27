// pages/life/bear/bear.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    step:1,
    bearCenter:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      bearCenter:"bear-center"
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    setInterval(() => {
      let temp = this.data.step;
      this.setData({
        step: temp>=8 ? 1 : (temp+1)
      })
    }, 100)
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