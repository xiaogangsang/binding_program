//index.js
//获取应用实例
const brands = require('../../data/brands.js')
const machines = require('../../data/machines.js')
const section_rect = require('../../utils/drawings.js')
const app = getApp()
Page({
  data: {
    machines_list: machines.machines_list,
    logo_prefix: brands.logo_prefix,
    brands_list: brands.brands_list,
    machine_prefix: machines.machine_prefix
  },

  onLoad: function(options) {
    section_rect.section_rect.draw()
    
    const ctx1 = wx.createCanvasContext('section_rect1')
    ctx1.setFillStyle('#5A517D')
    ctx1.fillRect(0, 0, 50, 50)
    ctx1.draw()

    const ctx2 = wx.createCanvasContext('section_rect2')
    ctx2.setFillStyle('#5A517D')
    ctx2.fillRect(0, 0, 50, 50)
    ctx2.draw()
  },

  upper: function (e) {
  },
  lower: function (e) {
  },
  scroll: function (e) {
  },
  tap: function (e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
})