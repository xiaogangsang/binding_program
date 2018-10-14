const parts = [
  { key: "JBB50-3-1.1-1", name: "JBB50-3-1.1-1曲线板" },
  { key: "JBB50-3-1.1-3", name: "JBB50-3-1.1-3曲线板" },
  { key: "JBB50-3-1.1-7", name: "JBB50-3-1.1-7曲线板" },
  { key: "JBB50-3-1.1-45", name: "JBB50-3-1.1-45导向块" },
  { key: "JBB50-3-2-1", name: "JBB50-3-2-1弓形架(2)" },
  { key: "JBB50-3-2-3A-A", name: "JBB50-3-2-3A-A前夹板" },
  { key: "JBB50-3-2-11", name: "JBB50-3-2-11下导向块" },
  { key: "JBB50-3-2-16", name: "JBB50-3-2-16销轴" },
  { key: "JBB50-3-2-17A-A", name: "JBB50-3-2-17A-A导向板" },
  { key: "JBB50-3-2-17A-A", name: "JBB50-3-2-17A-A导向板(2)" },
  { key: "JBB50-3-2-18", name: "JBB50-3-2-18短曲线板" },
  { key: "JBB50-3-2-21", name: "JBB50-3-2-21导向柱" },
  { key: "JBB50-3-2-22", name: "JBB50-3-2-22压簧" },
  { key: "JBB50-3-2-23", name: "JBB50-3-2-23垫圈" },
  { key: "JBB50-3-2-24", name: "JBB50-3-2-24垫圈" },
  { key: "JBB50-3-2-25", name: "JBB50-3-2-25链轮" },
  { key: "JBB50-3-2-26", name: "JBB50-3-2-26手轮轴" },
  { key: "JBB50-3-2-30A", name: "JBB50-3-2-30A螺母" },
  { key: "JBB50-3-2-30B", name: "JBB50-3-2-30B螺母" },
  { key: "JBB50-3-2-33", name: "JBB50-3-2-33轴" },
  { key: "JBB50-3-2-34", name: "JBB50-3-2-34挡杆" },
  { key: "JBB50-3-2-37", name: "JBB50-3-2-37挡圈" },
  { key: "JBB50-3-2-38", name: "JBB50-3-2-38靠书块" },
  { key: "JBB50-3-2-39", name: "JBB50-3-2-39偏心轴" },
  { key: "JBB50-3-2-40", name: "JBB50-3-2-40挡圈" },
  { key: "JBB50-3-3-1", name: "JBB50-3-3-1底盘" },
  { key: "JBB50-3-3-2", name: "JBB50-3-3-2轴" },
  { key: "JBB50-3-3-4", name: "JBB50-3-3-4圈" },
  { key: "JBB50-3-3-6", name: "JBB50-3-3-6底板" },
  { key: "JBB50-3-5-5", name: "JBB50-3-5-5链轮" },
  { key: "JBB50-3-5-16", name: "JBB50-3-5-16垫圈" },
  { key: "JBB50-3-5-17", name: "JBB50-3-5-17链轮" },
  { key: "JBB50-3-5-18", name: "JBB50-3-5-18涨紧链轮" },
  { key: "JBB50-3-5-19", name: "JBB50-3-5-19链轮" },
  { key: "JBB50-3-5-22", name: "JBB50-3-5-22铜垫" },
  { key: "JBB50-3-5-36", name: "JBB50-3-5-36左螺母" },
  { key: "JBB50-3-5-42A", name: "JBB50-3-5-42A轴座" },
  { key: "JBB50-3-5-43", name: "JBB50-3-5-43轴套" },
  { key: "JBB50-3-6.1-00", name: "JBB50-3-6.1-00侧胶轮组" },
  { key: "JBB50-3-7.1-3.4.5L70", name: "JBB50-3-7.1-3.4.5L70铜套" },
  { key: "JBB50-3-7.1-6", name: "JBB50-3-7.1-6吸气座" },
  { key: "JBB50-3-7.1-7", name: "JBB50-3-7.1-7吸气轴" },
  { key: "JBB50-3-7.1-7", name: "JBB50-3-7.1-7吸嘴轴" },
  { key: "JBB50-3-7.1-9", name: "JBB50-3-7.1-9吸气座" },
  { key: "JBB50-3-7.3-12", name: "JBB50-3-7.3-12橡胶滚轮" },
  { key: "JBB50-3-7.4-2-00", name: "JBB50-3-7.4-2∕00橡胶轮" },
  { key: "JBB50-3-7.4-5", name: "JBB50-3-7.4-5滑块" },
  { key: "JBB50-3-7.5-5", name: "JBB50-3-7.5-5下压痕轮" },
  { key: "JBB50-3-7.6-1-00", name: "JBB50-3-7.6-1∕00橡胶轮" },
  { key: "JBB50-3.2-3A-A", name: "JBB50-3.2-3A-A前夹板" },
  { key: "JBB50-3B-8-8", name: "JBB50-3B-8-8托板" },
  { key: "JBB50-3B-8-8", name: "JBB50-3B-8-8托板(2)" },
  { key: "JBB50-3B-8-12", name: "JBB50-3B-8-12左盖板" },
  { key: "JBB50-3B-8-13", name: "JBB50-3B-8-13前夹板" },
  { key: "JBB50-3B-8-14", name: "JBB50-3B-8-14左挡规" },
  { key: "JBB50-3B-8-29", name: "JBB50-3B-8-29盘凸轮" },
  { key: "JBB50-3B-8-30", name: "JBB50-3B-8-30槽凸轮" },
  { key: "JBB50-3B-8-67", name: "JBB50-3B-8-67支架" }]

module.exports = {
  parts: parts
}