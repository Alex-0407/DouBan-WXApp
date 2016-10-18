//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    
  },
  fetchAPi(url, callback) {
    wx.request({
      url,
      data:{},
      header:{'Content-Type':'application/json'},
      success(res) {
        callback(null, res.data)
      },
      fail(e) {
        console.error(e)
        callback(e)
      }
    })
  },
  globalData:{
    userInfo:null
  }
})