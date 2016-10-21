const app = getApp()
const API_URL = 'https://api.douban.com/v2/movie/search'
Page({
  data:{
    // text:"这是一个页面"
    list:{}
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
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
  search:function(e){
    if (!e.detail.value) return
    this.setData({ title: '加载中...', loading: true })
    //调用应用实例的方法获取全局数据
    app.fetchAPi(API_URL + '?q=' + e.detail.value, (err, data) => {
      //更新数据
      this.setData({ title: data.title, list: data, loading: false })
    })
  }
})