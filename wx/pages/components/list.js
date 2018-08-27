// pages/components/list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innerText: {
      type: String,
      value: 'default value',
    },
    ajaxUrl:{
      type: String,
      value:""
    },
    pageSize:{
      type: Number,
      value: 20
    }
  },
  options:{
    multipleSlots: true
  },
  /**
   * 组件的初始数据
   */
  data: {
    list:[]
  },
  relations:{
    './list-item/item': { // './path_to_b'是对方组件的相对路径
      type: 'child', //  type可选择两组：parent和child、ancestor和descendant
      linked: function (target) { }, // 钩子函数，在组件linked时候被调用 target是组件的实例，
      linkChanged: function (target) {},
      unlinked: function (target) {}
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    pushdata(list){
      console.log(list.detail,9999);
      
      this.setData({
        list: this.data.list.concat(list.detail)
      })
      console.log(this.data.list);
    }
  }
})
