//index.js
//获取应用实例
var app = getApp();
Page({
  data: {
    text: "Welcome",
    author: "Yao",
    animation: {}
  },
  //事件处理函数
  getQuote: function () {
    var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
    var that = this;
    wx.request({
      header: {
        "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      url: "https://andruxnet-random-famous-quotes.p.mashape.com/cat=",
      success: function (r) {
        that.setData({
          text: r.data.quote,
          author: r.data.author
        });
      }
    });

    // 随机生成颜色
    var index = Math.floor(Math.random() * colors.length);
    var color = colors[index];
    that.animation.opacity(0).backgroundColor(color).opacity(1).step();
    that.setData({
      animation: that.animation.export()
    });
  },
  onLoad: function () {
    //调用应用实例的方法获取全局数据
    this.animation = wx.createAnimation({
      timingFunction: 'ease',
      delay: 600
    });

  }
})