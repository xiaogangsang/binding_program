// pages/components/parts/parts.js
const part_image_prefix ="https://haimenziguang-images.oss-cn-shanghai.aliyuncs.com/parts/"
const parts_data = require('../../../data/parts_data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    part_image_prefix: part_image_prefix
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      parts_list: parts_data[options.brand+"_parts"][options.model],
      brand: options.brand,
      model: options.model,
      modelName: options.modelName
    })
    const ctx = wx.createCanvasContext('section_rect')
    ctx.setFillStyle('#5A517D')
    ctx.fillRect(0, 0, 50, 50)
    ctx.draw()
  },

  previewImage: function (e) {
    var imgArray = []
    var current = e.target.dataset.src;
    imgArray.push(current)
    wx.previewImage({
      current: current,
      urls: imgArray 
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