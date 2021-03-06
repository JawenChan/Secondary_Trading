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
      }
  },
   
      //上传图片内存
      upload(e){
        const that=this
        //这里只循环到了一次，就是一共有两张图片，他只循环了一张
        for(var index in this.data.picLists){
            console.log(index)
            wx.cloud.uploadFile({
              cloudPath:new Date().getTime()+ '.png', // 上传至云端的路径
              filePath: that.data.picLists[index].path, // 小程序临时文件路径
              success: res => {
                // 返回文件 ID
                console.log("上传成功",res.fileID)
                //修改值 
                //设置fileID
                var newpicLists=this.data.picLists
                var newpath=newpicLists[index]['path'];
                newpicLists[index]['path']=res.fileID;
                this.setData({
                  newpicLists:newpath
                  });

                  console.log("ok",this.data.picLists)
              },
              fail: console.error
            })
          }
          productsCollection.add({
          data:{
            "userInfo":this.userInfo,
            "picLists":this.data.picLists,
            "BookName":this.data.BookName,
            "Autor":this.data.Autor,
            "ISBN":this.data.ISBN,
            "Class":this.data.Class,
            "Price":this.data.Price,
            "New_O":this.data.New_O
          },
          success:res=>{
            this.setData({
              BookName:"",
              Autor:"",
              ISBN:"",
              Class:"",
              Price:"",
              New_O:"",
              picList:[]
            })
            // console.log(res)
            // console.log("111",this.data.picLists[index].path)
            // console.log("222",this.data.picLists[index])
            // console.log("333",this.data.picLists[0])
            console.log("444",this.data.picLists)
          }
        })
      
      // then(res=>{
      //   console.log(res)
      //   console.log(picList)
      // })
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