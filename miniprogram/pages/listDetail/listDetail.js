// pages/listDetail/listDetail.js
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
    this.loadlistDetail(e)
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
  loadlistDetail:function(e){
    console.log(e)
    let that = this
    let a = e.id
    console.log(a)
    wx.cloud.database().collection('books').where({id:a}).get({
      success(res){
        
        var subject = res.data[0]
        console.log(res.data[0])
      
          var book = new Object()
          book.name = subject.title; 
            book.image = subject.image;  
            book.author=subject.author;
            book.publisher = subject.publisher;
            book.score = subject.score;
            book.price = subject.price;
            book.id = subject.id;
            book.type = subject.type;
            book.content = subject.content;
        that.setData({
          book:book
        })
        console.log(book)
      },
      fail:function(err){
        console.log(err)
      }
    })
  },
  addcar:function(e){
    wx.navigateTo({
      url: '/pages/bkbuy/bkbuy',
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