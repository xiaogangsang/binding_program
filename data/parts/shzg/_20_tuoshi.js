const parts = [
  { key: "JD440A-11.1-1", name: "JD440A-11.1-1摇杆"},
  { key: "JD440A-11.1-2", name: "JD440A-11.1-2连杆"},
  { key: "JD440A-11.1-4", name: "JD440A-11.1-4螺销"},
  { key: "JD440A-11.1-5", name: "JD440A-11.1-5固定块"},
  { key: "JD440A-11.1-6", name: "JD440A-11.1-6托板"},
  { key: "JD440A-11.1-8", name: "JD440A-11.1-8前二连杆"},
  { key: "JD440A-11.1-9", name: "JD440A-11.1-9驱动杆"},
  { key: "JD440A-11.1-10", name: "JD440A-11.1-10托座"},
  { key: "JD440A-11.1-11", name: "JD440A-11.1-11偏心轴销"},
  { key: "JD440A-11.1-12", name: "JD440A-11.1-12滑轴"},
  { key: "JD440A-11.1-13", name: "JD440A-11.1-13连接轴"},
  { key: "JD440A-11.1-14", name: "JD440A-11.1-14托座套"},
  { key: "JD440A-11.1-15", name: "JD440A-11.1-15隔圈"},
  { key: "JD440A-11.1-16", name: "JD440A-11.1-16销轴"},
  { key: "JD440A-11.1-17", name: "JD440A-11.1-17挡圈"},
  { key: "JD440A-11.1-18", name: "JD440A-11.1-18轴"},
  { key: "JD440A-11.1-19", name: "JD440A-11.1-19隔圈"},
  { key: "JD440A-11.1-20", name: "JD440A-11.1-20钢套"},
  { key: "JD440A-11.1-22", name: "JD440A-11.1-22销轴"},
  { key: "JD440A-11.1-23", name: "JD440A-11.1-23垫圈"},
  { key: "JD440A-11.1-24", name: "JD440A-11.1-24后夹板座"},
  { key: "JD440A-11.1-25", name: "JD440A-11.1-25同步连接杆"},
  { key: "JD440A-11.1-26", name: "JD440A-11.1-26后夹板"},
  { key: "JD440A-11.1-27", name: "JD440A-11.1-27分隔圈"},
  { key: "JD440A-11.1-28", name: "JD440A-11.1-28前夹板"},
  { key: "JD440A-11.1-29", name: "JD440A-11.1-29连接板"},
  { key: "JD440A-11.1-30", name: "JD440A-11.1-30前短曲线板"},
  { key: "JD440A-11.1-31", name: "JD440A-11.1-31后短曲线板"},
  { key: "JD440A-11.1-32", name: "JD440A-11.1-32前夹板座"},
  { key: "JD440A-11.1-33", name: "JD440A-11.1-33销子"},
  { key: "JD440A-11.1-34", name: "JD440A-11.1-34后长曲线板"},
  { key: "JD440A-11.1-35", name: "JD440A-11.1-35前长曲线板"},
  { key: "JD440A-11.1-36", name: "JD440A-11.1-36后夹板座联轴器"},
  { key: "JD440A-11.1-37", name: "JD440A-11.1-37挡圈"},
  { key: "JD440A-11.1-38", name: "JD440A-11.1-38挡圈"},
  { key: "JD440A-11.1-39", name: "JD440A-11.1-39连接销轴"},
  { key: "JD440A-11.1-41", name: "JD440A-11.1-41后连杆"},
  { key: "JD440A-11.1-42", name: "JD440A-11.1-42连接板（附件）"},
  { key: "JD440A-11.1.1-00", name: "JD440A-11.1.1-00连接套筒"},
  { key: "JD440A-11.1.2-00", name: "JD440A-11.1.2-00同步曲柄"},
  { key: "JD440A-11.1.2-01", name: "JD440A-11.1.2-01曲柄轴"},
  { key: "JD440A-11.2-6", name: "JD440A-11.2-6连杆"},
  { key: "JD440A-11.2-7", name: "JD440A-11.2-7标尺"},
  { key: "JD440A-11.2-10", name: "JD440A-11.2-10连接板"},
  { key: "JD440A-11.2-11", name: "JD440A-11.2-11定位圈"},
  { key: "JD440A-11.2-13", name: "JD440A-11.2-13调节杆"},
  { key: "JD440A-11.2-14", name: "JD440A-11.2-14销轴"},
  { key: "JD440A-11.2-15", name: "JD440A-11.2-15垫圈"},
  { key: "JD440A-11.2-16", name: "JD440A-11.2-16分隔圈"},
  { key: "JD440A-11.2-17", name: "JD440A-11.2-17隔离圈"},
  { key: "JD440A-11.2-18", name: "JD440A-11.2-18轴"},
  { key: "JD440A-11.2-19", name: "JD440A-11.2-19右锁紧板"},
  { key: "JD440A-11.2-20", name: "JD440A-11.2-20前后调节轴"},
  { key: "JD440A-11.2-21", name: "JD440A-11.2-21支架"},
  { key: "JD440A-11.2-22", name: "JD440A-11.2-22方轴"},
  { key: "JD440A-11.2-23", name: "JD440A-11.2-23弹簧压圈"},
  { key: "JD440A-11.2-24", name: "JD440A-11.2-24压簧"},
  { key: "JD440A-11.2-25", name: "JD440A-11.2-25弹簧压圈"},
  { key: "JD440A-11.2-26", name: "JD440A-11.2-26螺母"},
  { key: "JD440A-11.2-27", name: "JD440A-11.2-27短套筒"},
  { key: "JD440A-11.2-28", name: "JD440A-11.2-28小轴"},
  { key: "JD440A-11.2-30", name: "JD440A-11.2-30锁紧固定架"},
  { key: "JD440A-11.2-31", name: "JD440A-11.2-31右锁紧轴"},
  { key: "JD440A-11.2-32", name: "JD440A-11.2-32固定座"},
  { key: "JD440A-11.2-33", name: "JD440A-11.2-33固定连板"},
  { key: "JD440A-11.2-34", name: "JD440A-11.2-34高度调节座"},
  { key: "JD440A-11.2-36", name: "JD440A-11.2-36螺轴座"},
  { key: "JD440A-11.2-37", name: "JD440A-11.2-37左右调节轴"},
  { key: "JD440A-11.2-38", name: "JD440A-11.2-38齿轮"},
  { key: "JD440A-11.2-40", name: "JD440A-11.2-40左右调节轴"},
  { key: "JD440A-11.2-41", name: "JD440A-11.2-41定位圈"},
  { key: "JD440A-11.2-42", name: "JD440A-11.2-42固定圈"},
  { key: "JD440A-11.2-43", name: "JD440A-11.2-43涡轮"},
  { key: "JD440A-11.2-47", name: "JD440A-11.2-47前后锁紧套"},
  { key: "JD440A-11.2-49", name: "JD440A-11.2-49螺销"},
  { key: "JD440A-11.2-50", name: "JD440A-11.2-50导轨"},
  { key: "JD440A-11.02-053", name: "JD440A-11.02-053高度调节轴"},
  { key: "JD440A-11.02-055", name: "JD440A-11.02-055定位圈"},
  { key: "JD440A-11.2-56", name: "JD440A-11.2-56垫圈"},
  { key: "JD440A-11.02-057", name: "JD440A-11.02-057螺杆"},
  { key: "JD440A-11.02-058", name: "JD440A-11.02-058高度调节轴"},
  { key: "JD440A-11.2-60", name: "JD440A-11.2-60压紧圈"},
  { key: "JD440A-11.2-61", name: "JD440A-11.2-61导轨"},
  { key: "JD440A-11.4-5", name: "JD440A-11.4-5垫圈"},
  { key: "JD440A-11.4-9", name: "JD440A-11.4-9过载保护主动套"},
  { key: "JD440A-11.4-13", name: "JD440A-11.4-13挡圈"},
  { key: "JD440A-11.4-14", name: "JD440A-11.4-14拉紧杆"},
  { key: "JD440A-11.4-18", name: "JD440A-11.4-18齿轮轴"},
  { key: "JD440A-11.4.1-00", name: "JD440A-11.4.1-00曲柄轴"}]

module.exports = {
  parts: parts
}