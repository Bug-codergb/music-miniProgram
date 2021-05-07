import {getSongDetail} from "../../network/song"
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    songList:{
      type:Array,
      value:[]
    }
  },
  data: {
    songList:[]
  },
  lifetimes:{
    attached:function()
   {
     let ids=this.properties.songList.map((item,index)=>{
       return item.id
     })
     ids=ids.slice(0,30);
     ids=ids.join(",");
     getSongDetail(ids).then(data=>{
        this.setData({
          songList:data.songs
        })
     })
   }
  },
  methods: {
  }
})
