const app = getApp()
const API_URL = 'https://api.douban.com/v2/movie/'
Page({
  data:{
    title:"",
    type:"",
    list:{},
    loading:true
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({title:options.title})
    app.fetchAPi(API_URL+options.type, (err, data)=>{
      if (err) {
        console.log('requestError:'+err)
      }
      else {
        this.setData({list:data, loading:false})
      }
    })
  },
  onReady:function(options){
    // 页面渲染完成
    wx.setNavigationBarTitle({title:this.data.title+" « 电影 « 豆瓣"})
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