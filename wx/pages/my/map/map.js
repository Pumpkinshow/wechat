Page({
  data: {
    latitude: 31.1828560154,
    longitude: 121.4565825462,
    markers: [{
      id: 1,
      latitude: 31.1828560154,
      longitude: 121.4565825462,
      name: 'T.I.T 创意园',
      // iconPath: '../images/location.png',
      title:"公司",
      callout:{
        content:"平安好房",
        fontSize: 14,
        padding: 5,
        display: 'BYCLICK',
        borderRadius:10,
      }
    },
      {
        id: 2,
        latitude: 31.1814975543,
        longitude: 121.5585708618,
        name: 'T.I.T 创意园',
        iconPath: '../images/location.png',
        title: "公司",
        callout: {
          content: "平安好房",
          fontSize: 14,
          padding: 5,
          display: 'BYCLICK',
          borderRadius: 10,
        }
      }
    ],
    controls: [{
      id: 1,
      iconPath: '../images/timg.gif',
      position: {
        left: 10,
        top: 10,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
  },
  company(){
    this.mapCtx.translateMarker({
      markerId: 1,
      autoRotate: false,
      duration: 1000,
      destination: {
        latitude: 31.1828560154,
        longitude: 121.4565825462,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
  home(){
    this.mapCtx.translateMarker({
      markerId: 1,
      autoRotate: false,
      duration: 1000,
      destination: {
        latitude: 31.1814975543,
        longitude: 121.5585708618,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function (res) {
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  }
})
