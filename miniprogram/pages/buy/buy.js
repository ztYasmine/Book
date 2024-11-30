// pages/buy/buy.js
Page({
data:{
  goodslist:[
    {
      id:"001",
      image:"/images/product/1.jpg",
      name:"老瀛山·中国 文创套装",
      price:"98.00",
    },
    {
      id:"002",
      image:"/images/product/2.jpg",
      name:"天水古城·原创布艺包",
      price:"58.00",
    },
    {
      id:"003",
      image:"/images/product/3.jpg",
      name:"文艺·台历卡",
      price:"48.00",
    },
    {
      id:"004",
      image:"/images/product/4.jpg",
      name:"毕加索·钢笔八音盒礼盒",
      price:"128.00",
    },
    {
      id:"005",
      image:"/images/product/5.jpg",
      name:"小米·永不消失的笔",
      price:"18.00",
    },
    {
      id:"006",
      image:"/images/product/6.jpg",
      name:"文艺·桌面加湿器",
      price:"38.00",
    },

  ],

  imgUrls:[
    "/images/product/1.jpg",
    "/images/product/2.jpg",
    "/images/product/3.jpg",
    "/images/product/4.jpg",
  ]
  
},
  /**
   * 页面的初始数据
   */

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