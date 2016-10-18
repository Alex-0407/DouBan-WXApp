const app = getApp()
Page({
  data:{
    boards: [
      { key: 'in_theaters', name: '正在热映' },
      { key: 'coming_soon', name: '即将上映' },
      { key: 'top250', name: 'T0P250' },
      // { key: 'weekly', name: '口碑榜' },
      { key: 'us_box', name: '北美票房榜' },
      // { key: 'new_movies', name: '新片榜' }
    ]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log(options)
    
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})