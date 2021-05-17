import {getHotPlaylist,getCatePlaylist} from "../../../network/playList"
Page({
  data: {
    tags:[],
    playlists:[],
    tag:"华语"
  },
  onLoad: function (options) {
    getHotPlaylist().then(data=>{
      this.setData({
        tags:data.tags
      })
    })
    getCatePlaylist(this.data.tag,0,30).then(data=>{
      //console.log(data.playlists);
      this.setData({
        playlists:data.playlists
      })
    })
  },
  cateClick(e){
    const {cate,index}=e.detail;
    console.log(cate.name);
    getCatePlaylist(cate.name,0,30).then(data=>{
     // console.log(data.playlists);
      this.setData({
        playlists:data.playlists
      })
    })
  },
  playlistRouter(e){
    console.log(e.currentTarget);
    const {item}=e.currentTarget.dataset;
    wx.navigateTo({
      url: '/pages/detail-page/playlistDetail/playlist-detail?id='+item.id,
    })
  },
  onShareAppMessage: function () {

  }
})