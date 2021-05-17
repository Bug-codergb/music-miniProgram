// components/title/title.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titleName:{
      type:String,
      value:"音乐"
    },
    more:{
      type:String,
      value:"更多"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  methods: {
    playlistRouter(){
      wx.navigateTo({
        url: '/pages/detail-page/playlist/playlist',
      })
    }
  }
})
