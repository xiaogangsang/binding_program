const parts = [
{ key: "PYGD440-1-5", name: "PYGD440-1-5拉簧" },
{ key: "PYGD440-1-6", name: "PYGD440-1-6座" },
{ key: "PYGD440-1-8", name: "PYGD440-1-8挡规" },
{ key: "PYGD440-1-17", name: "PYGD440-1-17小轴" },
{ key: "PYGD440-3-5", name: "PYGD440-3-5下摆杆" },
{ key: "PYGD440-3-7", name: "PYGD440-3-7左螺母" },
{ key: "PYGD440-3-8", name: "PYGD440-3-8上摆杆" },
{ key: "PYGD440-3-9", name: "PYGD440-3-9短连杆" },
{ key: "PYGD440-3-10", name: "PYGD440-3-10长连杆" },
{ key: "PYGD440-3-12", name: "PYGD440-3-12摆动臂" },
{ key: "PYGD440-3-16", name: "PYGD440-3-16搁架" },
{ key: "PYGD440-3-17", name: "PYGD440-3-17挡书帖架" },
{ key: "PYGD440-3-19", name: "PYGD440-3-19右挡书板" },
{ key: "PYGD440-3-20", name: "PYGD440-3-20左挡书板" },
{ key: "PYGD440-3-22", name: "PYGD440-3-22左搁架" },
{ key: "PYGD440-3-24", name: "PYGD440-3-24厚螺母" },
{ key: "PYGD440-3-25", name: "PYGD440-3-25下拉簧轴" },
{ key: "PYGD440-3-26", name: "PYGD440-3-26上挂簧轴" },
{ key: "PYGD440-3-35", name: "PYGD440-3-35分纸舌头" },
{ key: "PYGD440-3-42", name: "PYGD440-3-42簧片" },
{ key: "PYGD440-3-46", name: "PYGD440-3-46拉簧轴" },
{ key: "PYGD440-3-47", name: "PYGD440-3-47连杆轴" },
{ key: "PYGD440-3-48", name: "PYGD440-3-48垫圈" },
{ key: "PYGD440-3-54", name: "PYGD440-3-54吸气管头" },
{ key: "PYGD440-3.1-2", name: "PYGD440-3.1-2吸气碗座" },
{ key: "PYGD440-3.1-2-1", name: "PYGD440-3.1-2-1吸气碗座接头" },
{ key: "PYGD440-3.1-2-2", name: "PYGD440-3.1-2-2X吸碗座" },
{ key: "PYGD440-4-2", name: "PYGD440-4-2平衡凸轮" },
{ key: "PYGD440-4-3", name: "PYGD440-4-3咬纸拉簧" },
{ key: "PYGD440-4-5", name: "PYGD440-4-5挂脚" },
{ key: "PYGD440-4-6", name: "PYGD440-4-6咬纸凸轮" },
{ key: "PYGD440-4-7", name: "PYGD440-4-7摆杆" },
{ key: "PYGD440-4-8", name: "PYGD440-4-8小轴" },
{ key: "PYGD440-4-10", name: "PYGD440-4-10分纸凸轮" },
{ key: "PYGD440-4-11", name: "PYGD440-4-11吸纸凸轮" },
{ key: "PYGD440-4-15-17", name: "PYGD440-4-15-17咬纸边轮" },
{ key: "PYGD440-4-16", name: "PYGD440-4-16扇齿轮轴" },
{ key: "PYGD440-4-18", name: "PYGD440-4-18气阀凸轮" },
{ key: "PYGD440-6-4", name: "PYGD440-6-4双排链轮" },
{ key: "PYGD440-7-1", name: "PYGD440-7-1支架" },
{ key: "PYGD440-7-9", name: "PYGD440-7-9垫圈" },
{ key: "PYGD440-7-10", name: "PYGD440-7-10夹紧轴" },
{ key: "PYGD440-7-12", name: "PYGD440-7-12拉簧销" },
{ key: "PYGD440-7-16", name: "PYGD440-7-16左扭簧" },
{ key: "PYGD440-7.2-00", name: "PYGD440-7.2-00吹气管" },
{ key: "PYGD440A-1.2-1", name: "PYGD440A-1.2-1气阀固定块" },
{ key: "PYGD440A-1.2-2", name: "PYGD440A-1.2-2螺母" },
{ key: "PYGD440A-1.2-3", name: "PYGD440A-1.2-3气管角尺接头" },
{ key: "PYGD440A-1.2-4", name: "PYGD440A-1.2-4杠杆座" },
{ key: "PYGD440A-1.2-5", name: "PYGD440A-1.2-5销" },
{ key: "PYGD440A-1.2-6", name: "PYGD440A-1.2-6杠杆" },
{ key: "PYGD440A-1.2-7", name: "PYGD440A-1.2-7气管接头" },
{ key: "PYGD440A-3-2", name: "PYGD440A-3-2左吸气管" },
{ key: "PYGD440A-3-4", name: "PYGD440A-3-4拉簧攀" },
{ key: "PYGD440A-3-5", name: "PYGD440A-3-5中间填板" },
{ key: "PYGD440A-3-7", name: "PYGD440A-3-7吸气管总成" },
{ key: "PYGD440A-3-8", name: "PYGD440A-3-8右填板" },
{ key: "PYGD440A-3-9", name: "PYGD440A-3-9短偏心套" },
{ key: "PYGD440A-4-5(6)", name: "PYGD440A-4-5（6）联轴节" },
{ key: "PYGD440A-4-5B", name: "PYGD440A-4-5B挂脚" },
{ key: "PYGD440A-4-7", name: "PYGD440A-4-7咬纸轮" },
{ key: "PYGD440A-4-8", name: "PYGD440A-4-8咬牙" },
{ key: "PYGD440A-7-1", name: "PYGD440A-7-1压轮臂" },
{ key: "PYGD440A-7-3", name: "PYGD440A-7-3销轴" },
{ key: "PYGD440A-7-5", name: "PYGD440A-7-5轴位螺钉" },
{ key: "PYGD440A-7-6", name: "PYGD440A-7-6垫头" },
{ key: "PYGD440A-7-6A", name: "PYGD440A-7-6A检测轮" },
{ key: "PYGD440A-7-6B", name: "PYGD440A-7-6B检测轮新" },
{ key: "PYGD440A-7-7", name: "PYGD440A-7-7右扭簧" },
{ key: "PYGD440A-7-8", name: "PYGD440A-7-8接近开关座" },
{ key: "PYGD440A-7-9", name: "PYGD440A-7-9拉簧座" },
{ key: "PYGD440A-7-10", name: "PYGD440A-7-10调整螺钉" },
{ key: "PYGD440A-7-11", name: "PYGD440A-7-11锁紧螺母" },
{ key: "PYGD440A-7-13", name: "PYGD440A-7-13连接板" },
{ key: "PYGD440A-7-14-15", name: "PYGD440A-7-14-15压块、固定块" },
{ key: "PYGD440A-7-16", name: "PYGD440A-7-16轴" },
{ key: "PYGD440A-7-18", name: "PYGD440A-7-18盖扳" },
{ key: "PYGD440A-7-19", name: "PYGD440A-7-19检测盒" },
{ key: "PYGD440A-7-21", name: "PYGD440A-7-21拉簧" },
{ key: "PYGD440A-7-22", name: "PYGD440A-7-22挡圈" },
{ key: "PYGD440A-7.1-00", name: "PYGD440A-7.1-00橡胶压轮" },
{ key: "PYGD440-1-1", name: "PYGD440-1-1杠杆" },
{ key: "PYGD440-1-2", name: "PYGD440-1-2销" },
{ key: "PYGD440-3-11", name: "PYGD440-3-11拉簧" },
{ key: "PYGD440-3-23", name: "PYGD440-3-23套" },
{ key: "PYGD440-3-37-00", name: "PYGD440-3-37-00气管" },
{ key: "PYGD440-3-38", name: "PYGD440-3-38接头" },
{ key: "PYGD440-3-40", name: "PYGD440-3-40压簧" },
{ key: "PYGD440-3-41", name: "PYGD440-3-41压簧" },
{ key: "PYGD440-3-43", name: "PYGD440-3-43双头螺钉" },
{ key: "PYGD440-3-44", name: "PYGD440-3-44螺母" },
{ key: "PYGD440-3-45", name: "PYGD440-3-45隔离套" },
{ key: "PYGD440-3-52", name: "PYGD440-3-52螺母" },
{ key: "PYGD440-3-53", name: "PYGD440-3-53吸气支管" },
{ key: "PYGD440-4-23", name: "PYGD440-4-23扇型齿轮" },
{ key: "PYGD440A-3-6-00", name: "PYGD440A-3-6-00中间吸气管" },
{ key: "PYGD440A-3-7-1", name: "PYGD440A-3-7-1右吸气管" },
{ key: "PYGD440A-4-5-6", name: "PYGD440A-4-5／6联轴节" },
{ key: "PYGD440A-7-2", name: "PYGD440A-7-2摆动块" },
{ key: "PYGD440A-7-4", name: "PYGD440A-7-4销轴" },
{ key: "PYGD440A-7-17", name: "PYGD440A-7-17导向杆" },
{ key: "PYGD440A-7-20", name: "PYGD440A-7-20压簧" }]

module.exports = {
  parts: parts
}
