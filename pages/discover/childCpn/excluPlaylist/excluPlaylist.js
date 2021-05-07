import {getPlaylist} from "../../../../network/discover"
Component({
  properties: {

  },
  data: {
    exculPlaylist:[]
  },
  lifetimes:{
    created:function(){
      getPlaylist("华语",0,6).then(data=>{
        console.log(data.playlists);
        this.setData({
          exculPlaylist:data.playlists
        })
      })
    }
  },
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
