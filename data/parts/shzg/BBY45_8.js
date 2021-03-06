const parts = [
  { key: "BBY45-8-1-2-00", name: "BBY45-8-1-2-00凸轮轴 " },
  { key: "BBY45-8-1-12", name: "BBY45-8-1-12大锥齿轮" },
  { key: "BBY45-8-1-14", name: "BBY45-8-1-14输入锥齿轮" },
  { key: "BBY45-8-1-17", name: "BBY45-8-1-17法兰" },
  { key: "BBY45-8-1-22-00", name: "BBY45-8-1-22-00开夹 凸块" },
  { key: "BBY45-8-1-23", name: "BBY45-8-1-23调节螺杆" },
  { key: "BBY45-8-1-29", name: "BBY45-8-1-29锥齿轮" },
  { key: "BBY45-8-1-31", name: "BBY45-8-1-31连接盘" },
  { key: "BBY45-8-1-33", name: "BBY45-8-1-33水平座" },
  { key: "BBY45-8-1-50", name: "BBY45-8-1-50凸轮块" },
  { key: "BBY45-8-1-56", name: "BBY45-8-1-56大滚轮" },
  { key: "BBY45-8-2-8", name: "BBY45-8-2-8书夹" },
  { key: "BBY45-8-2-17", name: "BBY45-8-2-17方垫" },
  { key: "BBY45-8-3-2", name: "BBY45-8-3-2落书托板" },
  { key: "BBY45-8-4-12", name: "BBY45-8-4-12支架" },
  { key: "BBY45-8-4-16", name: "BBY45-8-4-16轴" },
  { key: "BBY45-8-4-19", name: "BBY45-8-4-19毛刷板" },
  { key: "BBY45-8-6.1-5A", name: "BBY45-8-6.1-5A凸轮" },
  { key: "BBY45-8-6.1-6", name: "BBY45-8-6.1-6凸轮" },
  { key: "BBY45-8-6.1-9", name: "BBY45-8-6.1-9链轮" },
  { key: "BBY45-8-6.2-3", name: "BBY45-8-6.2-3胶斗" },
  { key: "BBY45-8-6.3-12", name: "BBY45-8-6.3-12匀胶板" },
  { key: "BBY45-8-6.3-32", name: "BBY45-8-6.3-32允胶棒(老)" },
  { key: "BBY45-8-8.1-00", name: "BBY45-8-8.1-00侧胶部套" },
  { key: "BBY45-8-8.1-1", name: "BBY45-8-8.1-1铜块" },
  { key: "BBY45-8-8.1-2", name: "BBY45-8-8.1-2轴" },
  { key: "BBY45-8-8.1-6", name: "BBY45-8-8.1-6加热板" },
  { key: "BBY45-8-8.1-10", name: "BBY45-8-8.1-10隔热板" },
  { key: "BBY45-8-8.1-11", name: "BBY45-8-8.1-11侧胶轮前摆杆" },
  { key: "BBY45-8-9.1-6", name: "BBY45-8-9.1-6铜块" },
  { key: "BBY45-8-9.1-6A", name: "BBY45-8-9.1-6A拉杆" },
  { key: "BBY45-8-9.1-8", name: "BBY45-8-9.1-8连杆" },
  { key: "BBY45-8-9.1-12(18)", name: "BBY45-8-9.1-12（18）左右挡书架" },
  { key: "BBY45-8-9.1-14", name: "BBY45-8-9.1-14小压痕轮" },
  { key: "BBY45-8-9.1-15", name: "BBY45-8-9.1-15大压痕轮" },
  { key: "BBY45-8-9.1-16", name: "BBY45-8-9.1-16钢滚轮" },
  { key: "BBY45-8-9.1-17", name: "BBY45-8-9.1-17轴" },
  { key: "BBY45-8-9.1-19", name: "BBY45-8-9.1-19齿轮" },
  { key: "BBY45-8-9.1-25", name: "BBY45-8-9.1-25吸气凸轮" },
  { key: "BBY45-8-9.1-29", name: "BBY45-8-9.1-29压痕凸轮" },
  { key: "BBY45-8-9.1-45", name: "BBY45-8-9.1-45前内挡规" },
  { key: "BBY45-8-9.1-51", name: "BBY45-8-9.1-51后外挡规" },
  { key: "BBY45-8-9.1-56", name: "BBY45-8-9.1-56吸嘴座" },
  { key: "BBY45-8-9.1-62", name: "BBY45-8-9.1-62拔纸杆" },
  { key: "BBY45-8-9.1-77", name: "BBY45-8-9.1-77左偏心轴" },
  { key: "BBY45-8-9.1-80-00", name: "BBY45-8-9.1-80-00吸气总管" },
  { key: "BBY45-8-9.2-5", name: "BBY45-8-9.2-5左支架" },
  { key: "BBY45-8-10-1", name: "BBY45-8-10-1铜套" },
  { key: "BBY45-8-10-3", name: "BBY45-8-10-3凸轮" },
  { key: "BBY45-8-10-5", name: "BBY45-8-10-5滚花螺钉" },
  { key: "BBY45-8-10-15", name: "BBY45-8-10-15托板" },
  { key: "BBY45-8-10-16", name: "BBY45-8-10-16托架" },
  { key: "BBY45-8-10-17(32)", name: "BBY45-8-10-17（32）燕尾组" },
  { key: "BBY45-8-10-18", name: "BBY45-8-10-18滑杆" },
  { key: "BBY45-8-10-27", name: "BBY45-8-10-27转轴" },
  { key: "BBY45-8-10-29", name: "BBY45-8-10-29长轴" },
  { key: "BBY45-8-10-40", name: "BBY45-8-10-40凸轮" },
  { key: "BBY45-8-10-41", name: "BBY45-8-10-41双排链轮" },
  { key: "BBY45-8-10-42", name: "BBY45-8-10-42轴" },
  { key: "BBY45-8-10-43", name: "BBY45-8-10-43法兰" },
  { key: "BBY45-8-10-51(52)", name: "BBY45-8-10-51（52）左夹书板" },
  { key: "BBY45-8-10.1-00", name: "BBY45-8-10.1-00摆杆" },
  { key: "BBY45-8-6.1-19", name: "BBY45-8-6.1-19弹簧" },
  { key: "BBY45-8-6.1-21", name: "BBY45-8-6.1-21销轴" }]

module.exports = {
  parts: parts
}