import {getRecPlaylist} from '../../../../network/discover'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {
    recPlaylist:[]
  },
  lifetimes:{
    created:function(){
      getRecPlaylist(6).then(data=>{
        //console.log(data.result)
        this.setData({
          recPlaylist:data.result
        })
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    playlistRouter(e)
    {
      const {item}=e.currentTarget.dataset;
      wx.navigateTo({
        url: '/pages/detail-page/playlistDetail/playlist-detail?id='+item.id,
      })
    }
  }
})
