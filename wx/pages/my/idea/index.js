// pages/my/idea/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    len:0,
    addData:0,
    subData:0
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
    let self = this;
    wx.getStorage({
      key: 'addData',
      success(res) {
        self.setData({
          addData: res.data || 0
        })
      },
      fail() {
        self.setData({
          addData: 0
        })
      }
    })
    wx.getStorage({
      key: 'subData',
      success(res) {
        self.setData({
          subData: res.data || 0
        })
      },
      fail() {
        self.setData({
          subData: 0
        })
      }
    })
  },
  input(obj){
    let str = obj.detail.value;
    this.setData({
      len:str.length
    })
  },
  submit(){
    if(!this.data.len){
      wx.showToast({
        title: '请输入意见',
        icon: 'none',
        duration: 1000
      })
      return;
    }
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(()=>{
      wx.hideLoading();
      wx.showToast({
        title: '后台接口不通',
        icon: 'none',
        duration: 1000
      })
    },1500)
  },
  add(){
    let self = this;
    let temp = self.data.addData + 1;
    
    wx.setStorage({
      key: "addData",
      data: temp
    })
    self.setData({
      addData: temp
    })
  },
  sub(){
    let self = this;
    let temp = self.data.subData + 1;

    wx.setStorage({
      key: "subData",
      data: temp
    })
    self.setData({
      subData: temp
    })
  }
})