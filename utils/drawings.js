const ctx = wx.createCanvasContext('section_rect')
ctx.setFillStyle('#5A517D')
ctx.fillRect(0, 0, 50, 50)
ctx.draw()

module.exports = {
  section_rect: ctx
}
