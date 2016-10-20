const app = getApp()
const API_URL = 'https://api.douban.com/v2/movie/in_theaters?count=3'
Page({
  data:{
    list:[],
    loading:true
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    app.fetchAPi(API_URL,(err, data)=>{
        //更新数据
        this.setData({list:data.subjects, loading:false})
    })
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
  },
  btntap:function() {
    wx.navigateBack()
  }
})