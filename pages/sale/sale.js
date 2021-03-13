// pages/sale/sale.js
const db = wx.cloud.database()
const productsCollection = db.collection('products')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picLists:[ 
      ],
      BookName:'',
      Autor:'',
      ISBN:'',
      Class:'',
      Price:'',
      New_O:''
      
  },

  //扫面二维码
  scanCode: function() {
    var that = this;
    wx.scanCode({ //扫描API
      success(res) { //扫描成功
        console.log(res) //输出回调信息
        that.setData({
          ISBN: res.result
        });
        wx.showToast({
          title: '成功',
          duration: 1000
        })
      }
    })
  },

  //输入书名
  NameInput(e){
    this.setData({
      BookName:e.detail.value
    }),
    console.log("name",e.detail)
  },
  //输入作者
  AutorInput(e){
    this.setData({
      Autor:e.detail.value
    })
  },
  //输入isbn
  IsbnInput(e){
    this.setData({
      ISBN:e.detail.value
    })
  },
  //输入课程
  ClassInput(e){
    this.setData({
      Class:e.detail.value
    })
  },
  //输入价格
  PriceInput(e){
    this.setData({
      Price:e.detail.value
    })
  },
  //输入新旧程度
  New_OInput(e){
    this.setData({
      New_O:e.detail.value
    })
  },
  //选择图片
  addPictures(e){
    const that=this
    console.log("点击了上传",e.detail)
      for(let i in e.detail.current){

        var picList=[{
          path:e.detail.current[i].url,
          name:'1111',
          time:''
        }]

        that.data.picLists = this.data.picLists.concat(picList)
        that.setData({ 
          'picLists':this.data.picLists
        });
        console.log("点击了",that.data)
      }
  },
   
      //上传图片内存
      upload(e){
        const that=this
        for(var index in this.data.picLists)
      wx.cloud.uploadFile({
        cloudPath:new Date().getTime()+ '.png', // 上传至云端的路径
        filePath: that.data.picLists[index].path, // 小程序临时文件路径
        success: res => {
          // 返回文件 ID
          console.log("上传成功",res.fileID)
          that.setData({
            imgUrl:res.fileID
          })         
        },
        fail: console.error
      }).then(productsCollection.add({
        data:{
          userInfo:this.userInfo,
          picLists:this.data.picLists,
          BookName:this.data.BookName,
          Autor:this.data.Autor,
          ISBN:this.data.ISBN,
          Class:this.data.Class,
          Price:this.data.Price,
          New_O:this.data.New_O
        },
        success:res=>{
          console.log(res)
        }
      }),
      this.setData({
        BookName:"",
        Autor:"",
        ISBN:"",
        Class:"",
        Price:"",
        New_O:"",
        picList:[]
      }),
      then(res=>{
        console.log(res)
      }))
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

  }
})