// pages/search/search.js
const db = wx.cloud.database();
var BookName;
Page({
     
  /**
   * 页面的初始数据
   */
  data: {
    SearchData:[],
   array:[
     {url:"cloud://weiji-r9iia.7765-weiji-r9iia-01302671935/search-pages/swiper/swiper1.jpg" },
     {url:"cloud://weiji-r9iia.7765-weiji-r9iia-1302671935/search-pages/swiper/swiper2.jpg" },
     {url:"cloud://weiji-r9iia.7765-weiji-r9iia-1302671935/search-pages/swiper/swiper3.jpg" },
   ],
   multiArray: [['省份', '广东'], ['选择高校']],
   multiIndex: [0, 0],
   getPicture:[]
  },

  //高校选择器
  bindMultiPickerChange: function (e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
        multiIndex: e.detail.value
    })
},
  bindMultiPickerColumnChange: function (e) {
    //console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var multiArray = this.data.multiArray,
        multiIndex = this.data.multiIndex
    // console.log(e.detail)
    multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
        case 0:
            switch (multiIndex[0]) {
                case 0:
                    multiArray[1] = ['选择高校'];
                    break;
                case 1:
                    multiArray[1] = ['广东工业大学', '华南农业大学'];
                    break;
            }
    }
    //console.log(data.multiIndex);
    this.setData({
        multiArray,
        multiIndex
    }
    );
},
//获取书的信息SearchgetBooks
  search:function(e){
    // wx.cloud.callFunction({
    //   name:'getBooksData',
    //   data:{
    //     BookName:"123"
    //   },
    //   success:res=>{
    //     console.log("请求成功",res)
    //   },
    //   fail:err=>{
    //     console.log("请求失败",err),
    //     wx.showToast({
    //       title: '数据不存在',
    //     })
    //   }
    // })
    
  db.collection('products').where({
    BookName:e.detail.value   
  }).get().then(
    res=>{
      if (res.data.length>0) {
        console.log("请求成功")
        //显示名字
        console.log(e.detail.value)
        //显示具体
        console.log(res.data[0])
        console.log(res.data[2]),

     /*   wx.showToast({
          title: '数据存在',
        }),*/

        //跳转页面
        wx.navigateTo({
          url: "../searchresult/searchresult?BookName="+BookName,
        })
        console.log(BookName);
        

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
    //搜索框对齐胶囊
    const a = wx.getMenuButtonBoundingClientRect().top
    this.setData({
      a:a
    }),
    console.log(a)
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