// pages/study/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:0,
    allMsgs:[
      {
        title: "小程序和APP区别",
        author: "作者：李四",
        time: "时间：2018-08-16",
        imageUrl: "../images/banner3.jpg",
        msg: [
          "1.小程序与APP功能方面：小程序因为属于微信的产品，微信作为一个APP，如果加载太多小程序，无疑大幅度增加了微信的大小，所以微信对小程序的安装包大小、功能等进行了约束。功能只能实现APP的部分核心功能，更像是微信在细微领域功能的延伸，作为独立的产品运营是不足的。",
          "2.小程序与APP开发成本：小程序相对于APP一个重要的价值就是开发成本低、周期快，但是随着应用公园类傻瓜式APP在线制作平台的发展，不需要任何的编程技术，自己就能拼图式制作APP，而且还有大量的模板可以直接使用，让APP的开发成本可以降低90%左右。现在，APP的开发成本和小程序并没有相差多少。",
          "3.小程序与APP自主性：小程序的优势就是背靠微信，引流效果好。但是微信对小程序进行了诸多限制，特别是流量获取方面，很多实用的营销策略在小程序被腾讯禁止，比如三级分销。腾讯封号严重而且没有事先的警告、很难申诉。而APP内部的功能、内容由运营者全权把控。",
          "4.小程序与APP互通性：腾讯马化腾曾说：小程序并不是想取代App，而是降低App的用户流失率。小程序和APP的关系是互为补充的，目前，应用公园已经实现了小程序和APP的现APP到小程序，小程序再到APP的相互跳转！开启App与小程序互相跳转功能的用户，从App中分享资讯或者商品给微信好友，微信群，分享内容在聊天界面将直接以小程序卡片的形式展现，点开后直接拉起对应的微信小程序页面。更支持通过打开的APP分享出来的小程序卡片直接拉起手机中已经安装的对应App。小程序和APP的互通，对于APP来说，打通了微信的流量，更加容易的引流获客，通过小程序，降低了用户体验部分核心功能的门槛。对小程序来说，拓展了功能，互通共赢才是APP和小程序的正确关系。"
        ]
      },
      {
        title: "小程序和公众号的区别",
        author: "作者：张三",
        time: "时间：2018-08-22",
        imageUrl: "../images/banner2.jpg",
        msg: [
          "1.开发语言：微信公众号的技术其实就用的HTML5。而小程序用的是微信自己研发的编程语言，跟网页有点类似，但是交互驱动规则不同。",
          "2.开发的成本与开发周期：针对成本与周期，因为公众号这一产品已颇具成熟，国内已经有不少的微信第三方平台在承接公众号二次开发工作。当然，软捷科技也有此项业务。在开发的周期上，因为多年的经验累积，微信第三方平台都有相关公众号产品模板供客户选择，所以公众号的制作周期较短。而微信小程序是2017年新推出的，在各个方面，各第三方公司对于这一新产品的认知与开发都不同，所以开发的周期也会较长。",
          "3.定位上的不同：微信公众号主要用于信息的传递，借助第三方链接嵌套网页能够实现简单的交互，主要以营销和传递信息为主，而微信小程序主要以功能服务为主。比如，你要做一个手机官网，主要是用于展示信息，那么就用微信公众号就可以了，但如果你要做一个微信小程序商城或者小应用，那么用微信小程序比较好。",
          "4.功能和体验的不同：微信公众号除了微信自带的接口功能外，就是H5网页的功能，而微信小程序则类似于APP的功能，APP和网站的功能相信大家都知道，所以，从功能上，在微信小程序商城上的功能比微信公众号强大，体验也比较好。主要原因是公众号没有本地缓存，所以每次打开都是会请求服务器刷新页面，造成延时较长体验下降，微信小程序对UI与图片本地缓存，只需要对服务器请求交互数据，页面切换无需刷新，所以体验能够接近原生APP的流畅程度。所以如果要制作商城类功能，对比微商城与微信小程序商城，微信小程序商城会更有优势。",
          "5.实现技术不同：微信小程序是微信内的应用，而公众号是基于H5网页，H5网页运行环境是浏览器，微信小程序运行环境并非完整的浏览器，开发过程中用到H5相关的技术，微信小程序的运行环境是微信基于浏览器内核完全重构的一个内置解析器，针对小程序专门做了优化，配合自己定义的开发语言标准，提升了小程序的性能"
        ]
      }
    ],
    nowObj:{
      title:"小程序和公众号的区别",
      author:"作者：张三",
      time:"时间：2018-08-22",
      imageUrl:"../images/banner2.jpg",
      msg:[
        "1.开发语言：微信公众号的技术其实就用的HTML5。而小程序用的是微信自己研发的编程语言，跟网页有点类似，但是交互驱动规则不同。",
        "2.开发的成本与开发周期：针对成本与周期，因为公众号这一产品已颇具成熟，国内已经有不少的微信第三方平台在承接公众号二次开发工作。当然，软捷科技也有此项业务。在开发的周期上，因为多年的经验累积，微信第三方平台都有相关公众号产品模板供客户选择，所以公众号的制作周期较短。而微信小程序是2017年新推出的，在各个方面，各第三方公司对于这一新产品的认知与开发都不同，所以开发的周期也会较长。",
        "3.定位上的不同：微信公众号主要用于信息的传递，借助第三方链接嵌套网页能够实现简单的交互，主要以营销和传递信息为主，而微信小程序主要以功能服务为主。比如，你要做一个手机官网，主要是用于展示信息，那么就用微信公众号就可以了，但如果你要做一个微信小程序商城或者小应用，那么用微信小程序比较好。",
        "4.功能和体验的不同：微信公众号除了微信自带的接口功能外，就是H5网页的功能，而微信小程序则类似于APP的功能，APP和网站的功能相信大家都知道，所以，从功能上，在微信小程序商城上的功能比微信公众号强大，体验也比较好。主要原因是公众号没有本地缓存，所以每次打开都是会请求服务器刷新页面，造成延时较长体验下降，微信小程序对UI与图片本地缓存，只需要对服务器请求交互数据，页面切换无需刷新，所以体验能够接近原生APP的流畅程度。所以如果要制作商城类功能，对比微商城与微信小程序商城，微信小程序商城会更有优势。",
        "5.实现技术不同：微信小程序是微信内的应用，而公众号是基于H5网页，H5网页运行环境是浏览器，微信小程序运行环境并非完整的浏览器，开发过程中用到H5相关的技术，微信小程序的运行环境是微信基于浏览器内核完全重构的一个内置解析器，针对小程序专门做了优化，配合自己定义的开发语言标准，提升了小程序的性能"
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id || 0
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