const parts = [
  { key: "ZK320-02-19", name: "ZK320-02-19轴承座Ⅰ" },
  { key: "ZK320-02-20A", name: "ZK320-02-20A推书杆Ⅰ" },
  { key: "ZK320-02-21A", name: "ZK320-02-21A调节座" },
  { key: "ZK320-02-23", name: "ZK320-02-23滑杆Ⅰ" },
  { key: "ZK320-02-25", name: "ZK320-02-25轴承座Ⅱ" },
  { key: "ZK320-02-26-00", name: "ZK320-02-26-00支板" },
  { key: "ZK320-02-30", name: "ZK320-02-30拉簧" },
  { key: "ZK320-02-33", name: "ZK320-02-33轴承座Ⅲ" },
  { key: "ZK320-02-35A", name: "ZK320-02-35A推书杆Ⅱ" },
  { key: "ZK320-02-36", name: "ZK320-02-36滑杆Ⅱ" },
  { key: "ZK320-02-41", name: "ZK320-02-41把手" },
  { key: "ZK320-02-43A", name: "ZK320-02-43A垫套Ⅰ" },
  { key: "ZK320-02-47", name: "ZK320-02-47推书杆Ⅲ" },
  { key: "ZK320-02-55-00", name: "ZK320-02-55-00导滑杆" },
  { key: "ZK320-02-59-00", name: "ZK320-02-59-00连杆" },
  { key: "ZK320-02-62", name: "ZK320-02-62螺栓" },
  { key: "ZK320-02-69A", name: "ZK320-02-69A左内侧导向板" },
  { key: "ZK320-02-70A", name: "ZK320-02-70A右内侧导向板" },
  { key: "ZK320-03-08", name: "ZK320-03-08锁紧螺母" },
  { key: "ZK320-03-09", name: "ZK320-03-09垫套Ⅰ" },
  { key: "ZK320-03-10-00", name: "ZK320-03-10-00顶杆" },
  { key: "ZK320-03-19", name: "ZK320-03-19下刀" },
  { key: "ZK320-03-22", name: "ZK320-03-22双头螺杆" },
  { key: "ZK320-03-29", name: "ZK320-03-29滚子" },
  { key: "ZK320-03-30", name: "ZK320-03-30桩头" },
  { key: "ZK320-03-40", name: "ZK320-03-40涨紧轮座" },
  { key: "ZK320-03-41", name: "ZK320-03-41垫套Ⅰ" },
  { key: "ZK320-03-42", name: "ZK320-03-42涨紧轮芯轴" },
  { key: "ZK320-03-43", name: "ZK320-03-43涨紧链轮" },
  { key: "ZK320-03-44", name: "ZK320-03-44杆短" },
  { key: "ZK320-03-45", name: "ZK320-03-45支轴Ⅰ" },
  { key: "ZK320-03-55", name: "ZK320-03-55支轴" },
  { key: "ZK320-03-62", name: "ZK320-03-62导杆长" },
  { key: "ZK320-03-67", name: "ZK320-03-67垫圈" },
  { key: "ZK320-03-73A", name: "ZK320-03-73A滑板" },
  { key: "ZK320-03-81", name: "ZK320-03-81手轮" },
  { key: "ZK320-03-82", name: "ZK320-03-82嵌套" },
  { key: "ZK320-03-85", name: "ZK320-03-85挡风板" },
  { key: "ZK320-03-92", name: "ZK320-03-92滑板" },
  { key: "ZK320-03-93", name: "ZK320-03-93滑板" },
  { key: "ZK320-04-01", name: "ZK320-04-01压痕摆杆" },
  { key: "ZK320-04-05", name: "ZK320-04-05双头螺管" },
  { key: "ZK320-04-06", name: "ZK320-04-06压痕刀垫" },
  { key: "ZK320-04-07", name: "ZK320-04-07压痕刀" },
  { key: "ZK320-04-18A", name: "ZK320-04-18A压书条" },
  { key: "ZK320-05-01", name: "ZK320-05-01后夹书板" },
  { key: "ZK320-05-02", name: "ZK320-05-02前夹书板" },
  { key: "ZK320-05-03", name: "ZK320-05-03进书口导向板" },
  { key: "ZK320-05-10", name: "ZK320-05-10调节手轮" },
  { key: "ZK320-05-11", name: "ZK320-05-11调节螺杆" },
  { key: "ZK320-05-16", name: "ZK320-05-16导向滑杆" },
  { key: "ZK320-05-17A", name: "ZK320-05-17A左前移动杆" },
  { key: "ZK320-05-18A", name: "ZK320-05-18A左后移动杆" },
  { key: "ZK320-05-19", name: "ZK320-05-19支架" },
  { key: "ZK320-05-28", name: "ZK320-05-28带轮" },
  { key: "ZK320-06-01-00", name: "ZK320-06-01-00前折封板" },
  { key: "ZK320-06-02A", name: "ZK320-06-02A挡板" },
  { key: "ZK320-06-03-00", name: "ZK320-06-03-00后折封板" },
  { key: "ZK320-06-05", name: "ZK320-06-05挡封杆" },
  { key: "ZK320-06-08", name: "ZK320-06-08方钢" },
  { key: "ZK320-06-09", name: "ZK320-06-09摆杆" },
  { key: "ZK320-06-10", name: "ZK320-06-10连接轴" },
  { key: "ZK320-06-11", name: "ZK320-06-11气缸连接头" },
  { key: "ZK320-06-12", name: "ZK320-06-12轴承座" },
  { key: "ZK320-06-13", name: "ZK320-06-13轴" },
  { key: "ZK320-06-14A", name: "ZK320-06-14A摆动板" },
  { key: "ZK320-06-15", name: "ZK320-06-15导向滑杆" },
  { key: "ZK320-06-16", name: "ZK320-06-16角铁" },
  { key: "ZK320-06-17", name: "ZK320-06-17垫块" },
  { key: "ZK320-06-18A", name: "ZK320-06-18A滑动杆" },
  { key: "ZK320-06-19-00", name: "ZK320-06-19-00后折封刀" },
  { key: "ZK320-06-20-00", name: "ZK320-06-20-00后挡风板" },
  { key: "ZK320-06-22", name: "ZK320-06-22滑杆座" },
  { key: "ZK320-06-23-00", name: "ZK320-06-23-00前折封刀" },
  { key: "ZK320-06-26-00", name: "ZK320-06-26-00前挡封板" },
  { key: "ZK320-06-28", name: "ZK320-06-28摆杆座" },
  { key: "ZK320-06-30", name: "ZK320-06-30挡板" },
  { key: "ZK320-06-32", name: "ZK320-06-32外侧弹簧" },
  { key: "ZK320-06-33", name: "ZK320-06-33压簧" },
  { key: "ZK320-06-34", name: "ZK320-06-34前折封板(宽)" },
  { key: "ZK320-06-35-00", name: "ZK320-06-35-00后折封板(宽)" },
  { key: "ZK320-06-36", name: "ZK320-06-36自润滑轴承" },
  { key: "ZK320-06-37", name: "ZK320-06-37滑动杆" },
  { key: "ZK320-07-03", name: "ZK320-07-03固定桩头" },
  { key: "ZK320-07-04", name: "ZK320-07-04滑座" },
  { key: "ZK320-07-09-00", name: "ZK320-07-09-00侧挡板" },
  { key: "ZK320-07-10A", name: "ZK320-07-10A滑块" },
  { key: "ZK320-07-12", name: "ZK320-07-12夹紧块" },
  { key: "ZK320-07-13", name: "ZK320-07-13推书架" },
  { key: "ZK320-07-15", name: "ZK320-07-15滑板" },
  { key: "ZK320-07-16", name: "ZK320-07-16定位块" },
  { key: "ZK320-07-17", name: "ZK320-07-17销子" },
  { key: "ZK320-07-18", name: "ZK320-07-18靠块" },
  { key: "ZK320-07-19", name: "ZK320-07-19小拉簧" },
  { key: "ZK320-07-40", name: "ZK320-07-40侧挡板" },
  { key: "ZK320-07-47A", name: "ZK320-07-47A左支撑架" },
  { key: "ZK320-07-48", name: "ZK320-07-48挡杆" },
  { key: "ZK320-07-54", name: "ZK320-07-54左上支撑架" },
  { key: "ZK320-07-55-00", name: "ZK320-07-55-00侧挡板" },
  { key: "ZK320-07-56", name: "ZK320-07-56靠块" },
  { key: "ZK320-07-57", name: "ZK320-07-57侧挡板" },
  { key: "ZK320-07-59", name: "ZK320-07-59连接板" },
  { key: "ZK320-07-60", name: "ZK320-07-60小挡板" },
  { key: "ZK320-08-13", name: "ZK320-08-13锥齿轮" },
  { key: "ZK320-08-19-01", name: "ZK320-08-19-01托板" },
  { key: "ZK320-08-19-02", name: "ZK320-08-19-02齿条" },
  { key: "ZK320-09-03", name: "ZK320-09-03导向座" },
  { key: "ZK320-09-09", name: "ZK320-09-09斜齿轮" },
  { key: "ZK320-09-13A", name: "ZK320-09-13A压书凸轮" },
  { key: "ZK320-09-19", name: "ZK320-09-19压痕左凸轮" },
  { key: "ZK320-09-21A", name: "ZK320-09-21A压痕右凸轮" },
  { key: "ZK320-09-30-00", name: "ZK320-09-30-00挂脚" },
  { key: "ZK320-09-31", name: "ZK320-09-31滑板" },
  { key: "ZK320-09-36", name: "ZK320-09-36斜齿轮轴" },
  { key: "ZK320-09-37A", name: "ZK320-09-37A后轴承座" },
  { key: "ZK320-10-07", name: "ZK320-10-07前右垫块" }]

module.exports = {
  parts: parts
}