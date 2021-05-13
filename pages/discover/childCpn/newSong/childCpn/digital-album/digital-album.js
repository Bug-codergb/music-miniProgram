import {getDigitalAlbum} from "../../../../../../network/discover"
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
   digitalAlbum:[]
  },
  lifetimes:{
    created()
    {
      getDigitalAlbum(0,6).then(data=>{
        console.log(data.products);
        this.setData({
          digitalAlbum:data.products
        })
      })
    }
  },
  methods: {

  }
})
