// pages/sale/sale.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picLists:[]
  },
  addPictures(e){
    let that=this
    console.log("点击了上传",e.detail)
      for(let i in e.detail.current){
        this.picLists.push({ path: e.detail.current[i].url });
        this.setData({ 
          picLists
        });
        console.log("点击了",picLists[i])
      }
      

    // for(let i in e.detail.current)
    //   wx.cloud.uploadFile({
    //     cloudPath:new Date().getTime()+ '.png', // 上传至云端的路径
    //     filePath: e.detail.current[i].url, // 小程序临时文件路径
    //     success: res => {
    //       // 返回文件 ID
    //       console.log("上传成功",res.fileID)
    //       this.setData({
    //         imgUrl:res.fileID
    //       })
    //     },
    //     fail: console.error
    //   })
    
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