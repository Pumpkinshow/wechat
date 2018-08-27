// pages/study/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
    nowObj: {
      title: "小程序和公众号的区别",
      author: "作者：张三",
      time: "时间：2018-08-22",
      imageUrl: "../images/640.jpg",
      msg: [
        "1.先登录小程序开发平台，将页面需要跳转的业务域名域名写上去",
        "2.编辑代码“<web-view src='业务域名地址'></web-view>”",
        "3.业务域名与服务域名是不同的，个人类型与海外类型的小程序暂不支持使用业务域名",
        "4.企业类型的业务域名设置如下："
      ]
    }
  },
  showBigImg(){
    wx.previewImage({
      current: "https://mmbiz.qpic.cn/mmbiz_png/YjvTm0uy0owA6qp7b6p0cNJwEibichOKenqKxx9ibELgkel8juY85bBL7xTDdLeDxPCHR8QLFfsOpjzRQNHVyGnUA/640?wx_fmt=png", // 当前显示图片的http链接
      urls: ['https://mmbiz.qpic.cn/mmbiz_png/YjvTm0uy0owA6qp7b6p0cNJwEibichOKenqKxx9ibELgkel8juY85bBL7xTDdLeDxPCHR8QLFfsOpjzRQNHVyGnUA/640?wx_fmt=png'] // 需要预览的图片http链接列表
    })
  },
  demo(){
    wx.navigateTo({
      url: './haofang'
    })
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