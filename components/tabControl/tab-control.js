Component({
  options:({
    multipleSlots:true
  }),
  properties: {
    list:{
      type:Array,
      value:[]
    }
  },
  data: {
   currentIndex:0
  },
  methods: {
    viewClick(e)
    {
      const {index}=e.currentTarget.dataset;
      this.setData({
        currentIndex:index
      })
    }
  }
})
