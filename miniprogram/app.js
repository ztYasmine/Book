// app.js
App({
  onLaunch:function () {
    if(!wx.cloud){
      console.error
    }else{
      wx.cloud.init({

        evn:'zuoye-2g5dfff37b36951e',
        traceUser:true,
      })
    }
    this.globalData={}
  },
  
  globalData: {
    userInfo: null
  }
})
