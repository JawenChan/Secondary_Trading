// pages/searchresult/searchresult.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  
  data: {
    SearchData:[],
    BookName:'',
    //Searchresult:[]

  },


  search:function(e){
    var BookName,Searchresult;
  db.collection('products').where({
    BookName:e.detail.value   
  }).get().then(
    res=>{
      if (res.data.length>0) {
        console.log("请求成功")
        console.log(e.detail.value)
        console.log(res.data[0])
        console.log(res.data[2])
        this.setData({
          SearchData:res.data
        })
        
        



      /*  var i
        for(i==0;i<=20;i++){
        Searchresult[i]=res.data[i];
        
        }console.log(res.data[0]);*/
     /*   wx.showToast({
          title: '数据存在',
        }),*/

      }else{
        console.log(e.detail.value)
        console.log("请求数据不存在",res),
        wx.showToast({
          title: '数据不存在',
        })
      }
  });
 
  
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var BookName;
    BookName=options.BookName
    this.setData({
      BookName:BookName
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