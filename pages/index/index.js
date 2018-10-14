//index.js
//获取应用实例
const brands = require('../../data/brands.js')
const section_rect = require('../../utils/drawings.js')
const app = getApp()
Page({
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    logo_prefix: brands.logo_prefix,
    brands_list: brands.brands_list,
  },

  onLoad: function(options) {
    section_rect.section_rect.draw()
    
    const ctx = wx.createCanvasContext('section_rect')
    ctx.setFillStyle('#5A517D')
    ctx.fillRect(0, 0, 50, 50)
    ctx.draw()
  }
})