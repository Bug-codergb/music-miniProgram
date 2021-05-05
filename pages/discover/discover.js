import {getBanner} from '../../network/discover'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getBanner().then(data=>{
      //console.log(data)
      this.setData({
        banner:data.banners
      })
    })
  },
  onShareAppMessage: function () {

  }
})