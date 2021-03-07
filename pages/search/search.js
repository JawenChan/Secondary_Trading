// pages/search/search.js
const db = wx.cloud.database()
Page({
     
  /**
   * 页面的初始数据
   */
  data: {
    SearchData:[],
   array:[
     {url:"cloud://weiji-r9iia.7765-weiji-r9iia-1302671935/search-pages/swiper/swiper1.jpg" },
     {url:"cloud://weiji-r9iia.7765-weiji-r9iia-1302671935/search-pages/swiper/swiper2.jpg" },
     {url:"cloud://weiji-r9iia.7765-weiji-r9iia-1302671935/search-pages/swiper/swiper3.jpg" },
   ],
   multiArray: [['省份', '广东'], ['选择高校'],],
   multiIndex: [0, 0],
   getname:"sad"
  },

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
  search:function(){
    wx.cloud.callFunction({
      name:'getBooksData',
      data:{
        getname:this.data.getname
      },
      success:res=>{
        // this.setData({
        //   SearchData:res.result.data
        // })
        console.log(this.getname),
        console.log(res.result.data)
      },
      fail:err=>{
        console.log(err),
        wx.showToast({
          title: '数据不存在',
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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