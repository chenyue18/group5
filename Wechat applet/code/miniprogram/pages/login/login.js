const app = getApp()

const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'


Page({
  data: {
    avatarUrl: defaultAvatarUrl,
    theme: wx.getSystemInfoSync().theme,
    nickname: '',
  },
  onLoad() {
    wx.onThemeChange((result) => {
      this.setData({
        theme: result.theme
      })
    })
  },
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail 
    this.setData({
      avatarUrl,
    })
  },

  entry: function (event) {
      var that = this

      const base64 = 'CxYh';
      console.log(wx.base64ToArrayBuffer(base64))

      that.data.avatarUrl = wx.getFileSystemManager().readFileSync(that.data.avatarUrl,'base64')
      console.log(that.data.avatarUrl)
      app.globalData.userInfo.avatarUrl = that.data.avatarUrl
    app.globalData.userInfo.nickName = that.data.nickname
    app.globalData.logged = true
    wx.switchTab({
        url: '/pages/main/main',
      })
  }
})
