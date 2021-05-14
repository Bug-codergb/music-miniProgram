import {getNewAlbum} from "../../../../../../network/discover"
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
    albums:[]
  },
lifetimes:{
  created(){
    getNewAlbum(0,6).then(data=>{
      //console.log(data.albums);
      this.setData({
        albums:data.albums
      })
    })
  }
},
  methods: { 

  }
})
