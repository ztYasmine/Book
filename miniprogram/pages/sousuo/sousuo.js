// pages/sousuo/sousuo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    filePath: '',
    length: -1,
    bookname: '',
    pic: '',
    book: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  bindInputName: function (e) {
    this.data.bookname = e.detail.value
  },
  bindSearch: function (e) {
    console.log(this.data.bookname)
    wx.cloud.callFunction({
      name: 'bkfun',
      data: {
        bookname: this.data.bookname

      },
      success: res => {
        console.log(res)

        if (res.result.data == undefined) {
          this.setData({ length: 0 });
          return false;
        }
        var subject = res.result.data
        console.log(res.result.data[0])

       
        this.setData({
          book: subject,
          length:1
        })
  
      },
      fail: function (err) {
        console.log(err)
      }

    })
  },
  bindUpdateView:function(e){
    this.setData({
      length:-2
    });
  },
  bindsubmitForm:function(e){
    console.log(e)
    let _this = this
    var book = e.detail.value;
    var id = e.detail.target.id;
    if(id==1)
    wx.cloud.callFunction({
      name:'bkadd',
      data:{
        id:book.id,
        name:book.title,
        author:book.author,
        score:book.score,
        image:_this.filePath,
        type:book.type
      },
      success:res=>{
        console.log(res)
        wx.showToast({
          title: '添加成功',
        })
      },
      fail:err=>{
        console.log(err)
      }
    })
    else if (id==2) {
      wx.cloud.callFunction({
        name:'bkadd',
        data:{
          id:book.id,
        name:book.title,
        author:book.author,
        score:book.score,
        image:_this.data.filePath,
        type:book.type,
        content:book.content
        }
      })
  }
 
    
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