import {getAllRank} from "../../../../network/discover";
import {getPlayListDetail} from "../../../../network/playList"
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  data: {
    rank:[]
  },
  lifetimes:{
    created(){
      getAllRank().then(data=>{
        //console.log(data.list);
        const rank=data.list.filter((item,index)=>{
          return item.name==="原创榜"||item.name==="新歌榜"||item.name==="热歌榜"
        })
        let promise=rank.map((item,index)=>{
          return getPlayListDetail(item.id)
        })
        Promise.all(promise).then(data=>{
          console.log(data);
          this.setData({
          rank:data
        })
        })
      }) 
    }
  },
  methods: {

  }
})
