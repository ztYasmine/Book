// pages/bookDetail/bookDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   book:{},
   isCollect:false,
   isCollect2:false

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
   this.loadbookDetail(e)
  },

loadopr(){
var bol = this.data.isCollect;
this.setData({
  isCollect:!bol
})
},
loadopr2(){
  var bol = this.data.isCollect2;
  this.setData({
    isCollect2:!bol
  })
  },
loadbookDetail:function(e){
  console.log(e)
  let that = this
  let a = e.id
  console.log(e)
  wx.cloud.database().collection('books').where({id:a}).get({
    success(res){
      
      var subject = res.data[0]
      console.log(res.data[0])
    
      that.setData({
        book:subject,
      })
      console.log(book)
    },
    fail:function(err){
      console.log(err)
    }
  })
  
},
addcar:function(e){
  console.log(e);
  var id = e.currentTarget.id;
  wx.navigateTo({
    url: '../bkbuy/bkbuy?id='+id,
    success:function(res){
    console.log(res)
    },
    fail:function(err){
      console.log(err)
    }
  })
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

  }
})