import {getNewMusic} from "../../../../../../network/discover"
Component({
  properties: {

  },
  data: {
    newMusic:[]
  },
  lifetimes:{
    created()
    {
      getNewMusic(6).then(data=>{
        //console.log(data.result);
        this.setData({
          newMusic:data.result
        })
      })
    }
  },
  methods: {

  }
})
