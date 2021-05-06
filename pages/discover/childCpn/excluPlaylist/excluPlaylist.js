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

  }
})
