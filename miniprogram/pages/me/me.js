// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      mypic:'/images/bar/user.jpg',
      name:'立即登录'
  },
 login:function(e){
  wx.navigateTo({
    url: '../login/login',
  })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  loadbuy:function(e){
    wx.navigateTo({
      url: '/pages/bkbuy/bkbuy',
      success:function(res){
        console.log(res)
      },
      fail:function(err){
        console.log(err)
      }
    })
  }

})