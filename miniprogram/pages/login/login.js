// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    password:'',
    userpic:''

  },
  
nameinput:function (e){
console.log(e)
this.data.name = e.detail.value
  },

  pdinput:function (e){
    console.log(e)
    this.data.password = e.detail.value
  },
bindsubmitForm:function (e){
console.log(e)
let id = e.detail.target.id
const  db = wx.cloud.database()
const user = db.collection('users')
if(id==1){
  
user.add({
  data:{
    name:this.data.name,
    password:this.data.password,
  }
})
.then(res=>{
  console.log(res)
  wx.showToast({
    title: '注册成功',
  })
})
.catch(console.error)
}

else{
//多条件查询
const _=db.command
user.where(_.and([
  {name :this.data.name},
  {password:this.data.password},
])).get()
.then(res=>{
  console.log(res)
  if(res.data.length !=0){
let pages = getCurrentPages()
let prePage = pages [pages.length-2]
prePage.setData({
  name:this.data.name,
  mypic:this.data.userpic
})
    wx.showToast({
      title: '登陆成功',
    })
    wx.navigateBack({
      delta: 1,
    })
    .catch(console.error)
  
  }
  
})

}

},
  
chooseImage:function(e){
  let _this = this
  wx.chooseImage({
    count: 1,
    sizeType: ['compressed'],
    sourceType: ['album','camera'],
    success(res){
      console.log(res)
      const tempFilePaths = res.tempFilePaths[0]
       //上传到云存储
      wx.cloud .uploadFile({
        cloudPath:'pic/ex'+Math.round(Math.random()),
        filePath:tempFilePaths,
      }).then(res=>{
        console.log(res.fileID)
        wx.showToast({
          title: '上传中',
          duration:'2000'
        })
      }).catch( error => {
      })
        _this.setData({
           userpic:tempFilePaths
           })
    
    }
  })
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    

    //add data
   
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