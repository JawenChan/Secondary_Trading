//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello WEIJI',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userInfo:{},
    openid:""
  },
  onGotUserInfo:function(e){
    const that=this
    wx.cloud.callFunction({
      name:"login",
      success:res=>{
        console.log("云函数部署成功")
        that.setData({
          openid:res.result.openid,
          userInfo:e.detail.userInfo
        })
        that.data.userInfo.openid=that.data.openid
        console.log("userinfo",that.data.userInfo)
        wx.getStorageSync("ueserinfo",that.data.userInfo)
      },
      fail:res=>{
        console.log("云函数调用失败")
      }
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    const ui=wx.getStorageSync('userinfo')
    this.setData({
      userInfo:ui,
      openid:ui.openid
    })
    
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
