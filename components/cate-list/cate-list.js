// components/cate-list/cate-list.js
Component({
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
    viewClick(e){
      const {index,item}=e.currentTarget.dataset;
      this.setData({
        currentIndex:index
      });
      this.triggerEvent("itemClick",{cate:item,index:index})
    }
  }
})
