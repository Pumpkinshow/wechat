// pages/components/list-item/item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    ajaxUrl: {
      type: String,
      value: "",
      observer(){
        if(this.properties.ajaxUrl == this.data.url) return;
        this.load();
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    url:""
  },
  ready(){
    this.data.url = this.properties.ajaxUrl;
    // this.load();
  },
  relations: {
    '../list': { //注意！必须双方组件都声明relations属性
      type: 'parent'
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    load(){
      var self = this;
      wx.request({
        url: self.properties.ajaxUrl,
        method: "GET",
        header: {
          'Content-Type': 'json'
        },
        success: function (res) {
          console.log(res);
          self.pushData(res.data.data.data.list);
        },
        fail: function () {
          console.log("接口调用失败");
        }
      })
    },
    pushData(list){
      var myEventDetail = {}; // detail对象，提供给事件监听函数
      var myEventOption = {}; // 触发事件的选项
      this.triggerEvent('pushdata', list, myEventOption)
    }
  }
})
