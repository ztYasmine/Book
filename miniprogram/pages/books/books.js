
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    curNav:1,
    curIndex:0,
    currentTab:0,
    flag:0,
  imgUrls:[],
  dishesList1:[],
  books:[],
  books2:[],
  books3:[],

 navList :[{
    id:1,
    name:'虚构',
  },
{
  id:2,
  name:'非虚构',
},
{
  id:3,
  name:'文学',
},
{
  id:4,
  name:'心理'
}
,{
  id:5,
  name:'经典'
}

],
dishes:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.loadBooks();
    const  db = wx.cloud.database()
    const imgUrls = db.collection('posters')
    const list = db.collection('list')
    var _this = this
    var that = this;
    wx.getSystemInfo({
      success: function(res){
        that.setData({
          winWidth:res.windowWidth,
          winHeight:res.windowHeight
        })
      },
    })
    imgUrls.get({
      success(res){
        console.log(res)
        _this.setData({
          imgUrls:res.data
        })
      }
    })
    //data search
    imgUrls.where({
      "flag":"2" }).get()
.then(res=>{
  console.log(res)
})
.catch(err=>{
  console.log(err)
})
imgUrls.get({
  success(res){
    console.log(res)
    _this.setData({
      imgUrls:res.data
    })
  }
})
//data search
list.where({
  "flag":"2" }).get()
.then(res=>{
console.log(res)
})
.catch(err=>{
console.log(err)
})


  },
  selectNav(event){
    console.log(event)
    let id = event.currentTarget.dataset.id,
   index = parseInt(event.currentTarget.dataset.index);
    this.setData({
      curNav:id,
      curIndex:index
    })

  },

  loadBooks:function(){
   
    const bk = wx.cloud.database()
    const books  = bk.collection('books')
    const list = bk.collection('list')
    const  dishesListdb = bk.collection('classify')
    var _this =this
    var this2 = this
    var this3 = this
    books.get({
      success(res){
        console.log(res)
        var subjects = res.data
        for(var i=0; i<subjects.length;i++){
          var subject = subjects[i]
          var book = new Object()
         
          book.name = subject.title;
          
          book.image = subject.image;
         
          book.author=subject.author;

          book.publisher = subject.publisher;
          book.type = subject.type;
          book.score = subject.score;
          book.price = subject.price;
          book.id = subject.id;
        }

        _this.setData({
          books:res.data
        })
      
      },
      fail(err){
        console.log(err)
      }
   
      })
      list.get({
        success(res){
          console.log(res)
          var subjects2 = res.data
          for(var i=0; i<subjects2.length;i++){
            var subject2 = subjects2[i]
            var book2 = new Object()
           
            book2.name = subject2.title;
            
            book2.image = subject2.image;
           
            book2.author=subject2.author;
  
            book2.publisher = subject2.publisher;
            book2.type = subject2.type;
            book2.score = subject2.score;
            book2.price = subject2.price;
            book2.id = subject2.id;
          }
  
          this2.setData({
            list:res.data
          })
        
        },
        fail(err){
          console.log(err)
        }
      })

      dishesListdb.get({
        success(res){
          console.log(res)
          var dishesListtemp = new Array()
          var subjects4 = res.data
          for(var j=1; j<=6; j++){
            dishesListtemp.push(new Array())
          }   
          console.log(dishesListtemp)
          for(var i=0; i<subjects4.length;i++){
            var subject4 = subjects4[i]
            for(var ii=1; ii<=6; ii++){
                if(subject4.num == ii) {
                    var book4 = new Object()
                    console.log(subject4.num)
                    console.log(book4)
                    book4.name = subject4.title; 
                    book4.image = subject4.image; 
                    console.log(book4.name)
                    book4.id = subject4.id;
                    book4.num = subject4.num;
                    dishesListtemp[ii].push(book4);
                    break
                }
            }
           
            console.log(dishesListtemp)
          }
          this3.setData({
            dishesList1:dishesListtemp
          })
        },
        fail(err){
          console.log(err)
        }
      })
  //向云函数网络请求数据

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
  loadbookDetail :function(e){
    console.log(e.currentTarget.dataset.value.id);
    var id = e.currentTarget.dataset.value.id;
    wx.navigateTo({
      url: '../bookDetail/bookDetail?id='+id,
      success:function(res){
      console.log(res)
      },
      fail:function(err){
        console.log(err)
      }
    })
  },
  switchClass:function(e){
    this.setData({
      flag:e.target.id
    })
  },
  switchNav:function(e){
    this.setData({
      currentTab:e.currentTarget.id
    })
  },
bindtap:function(e){
  wx.navigateTo({
    url: '/pages/sousuo/sousuo',
    success:function(res){
      console.log(res)
    },
    fail:function(err){
      console.log(err)
    }
  })
},
loadlistDetail :function(e){
    console.log(e);
    var id = e.currentTarget.id;
    wx.navigateTo({
      url: '../listDetail/listDetail?id='+id,
      success:function(res){
      console.log(res)
      },
      fail:function(err){
        console.log(err)
      }
    })
   }
})

 
  /**
   * 生命周期函数--监听页面加载
   */



  