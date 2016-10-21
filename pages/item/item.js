// 拿到全局应用程序实例
const app = getApp()

const API_URL = 'https://api.douban.com/v2/movie/subject/';

// 创建一个页面对象用于控制页面的逻辑
Page({
  data: {
    title: '',
    loading: true,
    movie: {},
    num:1,
    minusStatus:"disabled"
  },

  onLoad (params) {
    app.fetchAPi(API_URL + params.id, (err, data) => {
        if(err) {
            this.setData({loading: false, minusStatus:"disabled", num:1})
        }
        else {
            this.setData({ title: data.title, movie: data, loading: false, minusStatus:"disabled", num:1})
            wx.setNavigationBarTitle({ title: this.data.title + ' « 电影 « 豆瓣' })
        }
        
    })
  },

  onReady () {
    wx.setNavigationBarTitle({ title: this.data.title + ' « 电影 « 豆瓣' })
  },

  bindMinus:function(e){
      var num = this.data.num
      if(num == 2) {
          this.setData({num:num - 1, minusStatus:"disabled"})
      }
      else if(num == 1) {
          this.setData({minusStatus:"disabled"}) 
      }
      else {
          this.setData({num:num - 1})
      }
  },
  bindPlus:function(e){
      var num = this.data.num
      this.setData({num:num + 1})
      this.setData({minusStatus:"normal"})
  },
  bindManual:function(e){
      // 注意字符串 要转成 Number类型 或者用ParseInt()
      if(Number(e.detail.value) < 1) {
          var num = this.data.num
          this.setData({num:1 + 0})
          
      }
      else {
          this.setData({num:Number(e.detail.value)})
      }

      var num = this.data.num
      if(num == 1) {
          this.setData({minusStatus:"disabled"})
      }

  }

})