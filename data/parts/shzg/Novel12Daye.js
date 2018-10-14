const parts = [
  { key: "DYA480A-1-14", name: "DYA480A-1-14咬爪传动轮" },
  { key: "DYQ480-1-5A", name: "DYQ480-1-5A咬纸轮轴" },
  { key: "DYQ480-1-10", name: "DYQ480-1-10沉头垫圈" },
  { key: "DYQ480-1-12", name: "DYQ480-1-12伞形齿轮" },
  { key: "DYQ480-1-15", name: "DYQ480-1-15隔圈" },
  { key: "DYQ480-1-19", name: "DYQ480-1-19螺母" },
  { key: "DYQ480-1-20", name: "DYQ480-1-20咬爪打开摆杆" },
  { key: "DYQ480-1-21", name: "DYQ480-1-21垫圈" },
  { key: "DYQ480-1-22", name: "DYQ480-1-22隔圈" },
  { key: "DYQ480-1-23", name: "DYQ480-1-23隔圈" },
  { key: "DYQ480-1-28", name: "DYQ480-1-28压簧" },
  { key: "DYQ480-1-31(1)", name: "DYQ480-1-31（1）扭簧" },
  { key: "DYQ480-1-31r", name: "DYQ480-1-31右咬爪" },
  { key: "DYQ480-1-31l", name: "DYQ480-1-31左咬牙" },
  { key: "DYQ480-1-34A", name: "DYQ480-1-34A咬爪" },
  { key: "DYQ480-1-34B", name: "DYQ480-1-34B咬爪" },
  { key: "DYQ480-1-34l", name: "DYQ480-1-34大咬牙" },
  { key: "DYQ480-1-34s", name: "DYQ480-1-34小咬牙" },
  { key: "DYQ480-1-36r", name: "DYQ480-1-36右咬牙" },
  { key: "DYQ480-1-36l", name: "DYQ480-1-36左咬爪" },
  { key: "DYQ480-1-37", name: "DYQ480-1-37扭簧" },
  { key: "DYQ480-1-38", name: "DYQ480-1-38护套" },
  { key: "DYQ480-1-39", name: "DYQ480-1-39齿轮轴" },
  { key: "DYQ480-1-40", name: "DYQ480-1-40垫圈" },
  { key: "DYQ480-1-41", name: "DYQ480-1-41垫头" },
  { key: "DYQ480-1-43", name: "DYQ480-1-43指向板" },
  { key: "DYQ480-1-44", name: "DYQ480-1-44打开书贴凸轮" },
  { key: "DYQ480-1-45", name: "DYQ480-1-45咬纸板" },
  { key: "DYQ480-1-46", name: "DYQ480-1-46咬牙垫" },
  { key: "DYQ480-1-46(1)", name: "DYQ480-1-46咬纸垫" },
  { key: "DYQ480-1-48", name: "DYQ480-1-48摇杆" },
  { key: "DYQ480-2-3.2", name: "DYQ480-2-3.2" },
  { key: "DYQ480-2-5", name: "DYQ480-2-5链轮" },
  { key: "DYQ480-2-6", name: "DYQ480-2-6凸轮" },
  { key: "DYQ480-2-7", name: "DYQ480-2-7偏心轴" },
  { key: "DYQ480-2-9", name: "DYQ480-2-9齿轮" },
  { key: "DYQ480-2-10", name: "DYQ480-2-10薄垫圈" },
  { key: "DYQ480-2-11", name: "DYQ480-2-11摆杆" },
  { key: "DYQ480-2-12", name: "DYQ480-2-12挡圈" },
  { key: "DYQ480-2-13", name: "DYQ480-2-13隔圈" },
  { key: "DYQ480-2-23", name: "DYQ480-2-23分纸座右轮" },
  { key: "DYQ480-2-25", name: "DYQ480-2-25分纸咬牙垫" },
  { key: "DYQ480-2-25(1)", name: "DYQ480-2-25分纸咬爪垫" },
  { key: "DYQ480-2-26", name: "DYQ480-2-26正长短边咬爪" },
  { key: "DYQ480-2-30", name: "DYQ480-2-30分纸座左轮" },
  { key: "DYQ480-2-31(1)", name: "DYQ480-2-31推板长边钢皮" },
  { key: "DYQ480-2-31(2)", name: "DYQ480-2-31推开反长边钢皮" },
  { key: "DYQ480-2-32", name: "DYQ480-2-32吸纸嘴" },
  { key: "DYQ480-2-33", name: "DYQ480-2-33分纸吸嘴架" },
  { key: "DYQ480-2-34", name: "DYQ480-2-34闷头" },
  { key: "DYQ480-2-35", name: "DYQ480-2-35轴" },
  { key: "DYQ480-2-37", name: "DYQ480-2-37咬爪轴" },
  { key: "DYQ480-2-39", name: "DYQ480-2-39齿轮" },
  { key: "DYQ480-2-39s", name: "DYQ480-2-39小齿轮" },
  { key: "DYQ480-2-40", name: "DYQ480-2-40销" },
  { key: "DYQ480-2-42", name: "DYQ480-2-42隔圈" },
  { key: "DYQ480-3-1", name: "DYQ480-3-1摆杆" },
  { key: "DYQ480-3-2", name: "DYQ480-3-2链轮" },
  { key: "DYQ480-3-3", name: "DYQ480-3-3伞形齿轮" },
  { key: "DYQ480-3-4", name: "DYQ480-3-4垫圈" },
  { key: "DYQ480-3-6(1)", name: "DYQ480-3-6硅胶条" },
  { key: "DYQ480-3-6(2)", name: "DYQ480-3-6橡胶条" },
  { key: "DYQ480-3-9", name: "DYQ480-3-9反长短边钢皮" },
  { key: "DYQ480-3-10", name: "DYQ480-3-10分纸座轮" },
  { key: "DYQ480-3-11", name: "DYQ480-3-11分纸吸嘴伸缩座" },
  { key: "DYQ480-3-12", name: "DYQ480-3-12吸嘴调节杆" },
  { key: "DYQ480-3-13", name: "DYQ480-3-13咬爪轴" },
  { key: "DYQ480-3-14", name: "DYQ480-3-14联接器" },
  { key: "DYQ480-4-3", name: "DYQ480-4-3拉簧" },
  { key: "DYQ480-4-4", name: "DYQ480-4-4微动开关座" },
  { key: "DYQ480-4-8", name: "DYQ480-4-8尼龙推杆" },
  { key: "DYQ480-4-14", name: "DYQ480-4-14螺钉" },
  { key: "DYQ480-4-15", name: "DYQ480-4-15垫圈" },
  { key: "DYQ480-4-19", name: "DYQ480-4-19轴套" },
  { key: "DYQ480-4-20", name: "DYQ480-4-20轴套" },
  { key: "DYQ480-4-22", name: "DYQ480-4-22挡书贴杆" },
  { key: "DYQ480-4-23", name: "DYQ480-4-23连杆" },
  { key: "DYQ480-4-24", name: "DYQ480-4-24连接方杆" },
  { key: "DYQ480-4-25", name: "DYQ480-4-25轴端挡圈" },
  { key: "DYQ480-4-26", name: "DYQ480-4-26尼龙连接块" },
  { key: "DYQ480-4-29", name: "DYQ480-4-29固定块" },
  { key: "DYQ480-4-30", name: "DYQ480-4-30尼龙连接块" },
  { key: "DYQ480-4-35", name: "DYQ480-4-35挂脚" },
  { key: "DYQ480-4-36", name: "DYQ480-4-36吹气挡架" },
  { key: "DYQ480-4-37", name: "DYQ480-4-37通气管" },
  { key: "DYQ480-4-38", name: "DYQ480-4-38微动开关座" },
  { key: "DYQ480-4-39", name: "DYQ480-4-39光电开关座" },
  { key: "DYQ480-4-40", name: "DYQ480-4-40挂脚" },
  { key: "DYQ480-4-42", name: "DYQ480-4-42滚轮" },
  { key: "DYQ480-4-43", name: "DYQ480-4-43滚轮座" },
  { key: "DYQ480-4-47", name: "DYQ480-4-47连接板" },
  { key: "DYQ480-4-53", name: "DYQ480-4-53压簧" },
  { key: "DYQ480-4-54", name: "DYQ480-4-54滚花定位销" },
  { key: "DYQ480-4-55", name: "DYQ480-4-55挡书贴挂脚" },
  { key: "DYQ480-4-56", name: "DYQ480-4-56挡书贴钢片" },
  { key: "DYQ480-4-59", name: "DYQ480-4-59分纸舌头" },
  { key: "DYQ480-4-60", name: "DYQ480-4-60摆动滑块" },
  { key: "DYQ480-4-62", name: "DYQ480-4-62薄垫片" },
  { key: "DYQ480-4-63", name: "DYQ480-4-63摆杆" },
  { key: "DYQ480-4-66", name: "DYQ480-4-66标尺" },
  { key: "DYQ480-4-68", name: "DYQ480-4-68压簧" },
  { key: "DYQ480-4-69-00", name: "DYQ480-4-69-00分纸钢皮" },
  { key: "DYQ480-4-69-1", name: "DYQ480-4-69／1分纸钢皮" },
  { key: "DYQ480-4-69-2", name: "DYQ480-4-69／2连接圈" },
  { key: "DYQ480-4-70", name: "DYQ480-4-70方螺母" },
  { key: "DYQ480-4-71", name: "DYQ480-4-71挡书架中架" },
  { key: "DYQ480-4-72", name: "DYQ480-4-72挡书架中中架" },
  { key: "DYQ480-4-74", name: "DYQ480-4-74小墙板" },
  { key: "DYQ480-4-75", name: "DYQ480-4-75隔圈" },
  { key: "DYQ480-4-76", name: "DYQ480-4-76垫圈" },
  { key: "DYQ480-4-77", name: "DYQ480-4-77小轴" },
  { key: "DYQ480-4-79", name: "DYQ480-4-79滑槽座" },
  { key: "DYQ480-4-80", name: "DYQ480-4-80六角撑挡" },
  { key: "DYQ480-4-81", name: "DYQ480-4-81六角撑挡" },
  { key: "DYQ480-4-82", name: "DYQ480-4-82连接块" },
  { key: "DYQ480-4-83", name: "DYQ480-4-83薄垫片" },
  { key: "DYQ480-4-84", name: "DYQ480-4-84连接块" },
  { key: "DYQ480-4-86", name: "DYQ480-4-86摆杆" },
  { key: "DYQ480-4-87", name: "DYQ480-4-87挡书贴摆杆" },
  { key: "DYQ480-4-87", name: "DYQ480-4-87挡书贴摆杆" },
  { key: "DYQ480-4-88", name: "DYQ480-4-88压簧" },
  { key: "DYQ480-4-89", name: "DYQ480-4-89小轴" },
  { key: "DYQ480-4-90", name: "DYQ480-4-90垫圈" },
  { key: "DYQ480-4-91", name: "DYQ480-4-91固定拉簧螺钉" },
  { key: "DYQ480-4-93", name: "DYQ480-4-93下前支撑横挡" },
  { key: "DYQ480-4-94", name: "DYQ480-4-94链条张紧轮" },
  { key: "DYQ480-4-95", name: "DYQ480-4-95小轴" },
  { key: "DYQ480-4-96", name: "DYQ480-4-96垫圈" },
  { key: "DYQ480-4-97", name: "DYQ480-4-97压簧" },
  { key: "DYQ480-4-98", name: "DYQ480-4-98固定座" },
  { key: "DYQ480-4-99A", name: "DYQ480-4-99A弹簧片" },
  { key: "DYQ480-4-99B", name: "DYQ480-4-99B弹簧片" },
  { key: "DYQ480-4-99", name: "DYQ480-4-99弹簧钢皮" },
  { key: "DYQ480-4-103", name: "DYQ480-4-103小轴" },
  { key: "DYQ480-4-104", name: "DYQ480-4-104连接板" },
  { key: "DYQ480-4-107", name: "DYQ480-4-107垫圈" },
  { key: "DYQ480-4-108", name: "DYQ480-4-108滚花螺钉" },
  { key: "DYQ480-4-109", name: "DYQ480-4-109挂脚" },
  { key: "DYQ480-4-110", name: "DYQ480-4-110吸气架" },
  { key: "DYQ480-4-111", name: "DYQ480-4-111通气管" },
  { key: "DYQ480-4-112", name: "DYQ480-4-112小轴" },
  { key: "DYQ480-4-113-179", name: "DYQ480-4-113／179齿轮" },
  { key: "DYQ480-4-114", name: "DYQ480-4-114隔圈" },
  { key: "DYQ480-4-115", name: "DYQ480-4-115垫圈" },
  { key: "DYQ480-4-117", name: "DYQ480-4-117垫圈" },
  { key: "DYQ480-4-118", name: "DYQ480-4-118螺钉" },
  { key: "DYQ480-4-119", name: "DYQ480-4-119气阀座" },
  { key: "DYQ480-4-120", name: "DYQ480-4-120下后支撑横挡" },
  { key: "DYQ480-4-121", name: "DYQ480-4-121下中支撑横挡" },
  { key: "DYQ480-4-121", name: "DYQ480-4-121下中支撑横挡" },
  { key: "DYQ480-4-129", name: "DYQ480-4-129连接套" },
  { key: "DYQ480-4-130", name: "DYQ480-4-130垫圈" },
  { key: "DYQ480-4-132", name: "DYQ480-4-132摆臂杆" },
  { key: "DYQ480-4-133", name: "DYQ480-4-133垫圈" },
  { key: "DYQ480-4-137", name: "DYQ480-4-137样板" },
  { key: "DYQ480-4-138", name: "DYQ480-4-138连接长方块" },
  { key: "DYQ480-4-140", name: "DYQ480-4-140连接条" },
  { key: "DYQ480-4-143", name: "DYQ480-4-143垫圈" },
  { key: "DYQ480-4-144", name: "DYQ480-4-144连接杆" },
  { key: "DYQ480-4-145", name: "DYQ480-4-145连接杆" },
  { key: "DYQ480-4-146", name: "DYQ480-4-146圆柱螺钉" },
  { key: "DYQ480-4-149", name: "DYQ480-4-149挂拉簧桩头" },
  { key: "DYQ480-4-151", name: "DYQ480-4-151拉簧" },
  { key: "DYQ480-4-152", name: "DYQ480-4-152拉簧" },
  { key: "DYQ480-4-153", name: "DYQ480-4-153弹簧钢皮" },
  { key: "DYQ480-4-154", name: "DYQ480-4-154导向块" },
  { key: "DYQ480-4-157", name: "DYQ480-4-157刻度尺" },
  { key: "DYQ480-4-160", name: "DYQ480-4-160垫圈" },
  { key: "DYQ480-4-161A", name: "DYQ480-4-161A垫圈" },
  { key: "DYQ480-4-161", name: "DYQ480-4-161固定圈" },
  { key: "DYQ480-4-162", name: "DYQ480-4-162方螺母" },
  { key: "DYQ480-4-163", name: "DYQ480-4-163定位块" },
  { key: "DYQ480-4-165", name: "DYQ480-4-165隔圈" },
  { key: "DYQ480-4-166", name: "DYQ480-4-166拉簧" },
  { key: "DYQ480-4-167", name: "DYQ480-4-167固定压块" },
  { key: "DYQ480-4-169", name: "DYQ480-4-169连接块" },
  { key: "DYQ480-4-170", name: "DYQ480-4-170滚花螺钉" },
  { key: "DYQ480-4-171", name: "DYQ480-4-171压簧" },
  { key: "DYQ480-4-172", name: "DYQ480-4-172连接块" },
  { key: "DYQ480-4-180", name: "DYQ480-4-180连接小轴" },
  { key: "DYQ480-4.1-1", name: "DYQ480-4.1-1轴销" },
  { key: "DYQ480-4.1-2", name: "DYQ480-4.1-2扭簧右" },
  { key: "DYQ480-4.1-2(1)", name: "DYQ480-4.1-2扭簧左" },
  { key: "DYQ480-4.1-3", name: "DYQ480-4.1-3连接条" },
  { key: "DYQ480-4.1-4", name: "DYQ480-4.1-4垫圈" },
  { key: "DYQ480-4.1-5", name: "DYQ480-4.1-5扭簧" },
  { key: "DYQ480-4.1-6", name: "DYQ480-4.1-6轴销" },
  { key: "DYQ480-4.1-7", name: "DYQ480-4.1-7连接板" },
  { key: "DYQ480-4.1-8", name: "DYQ480-4.1-8连接座" },
  { key: "DYQ480-4.1-9", name: "DYQ480-4.1-9钢皮" },
  { key: "DYQ480-4.1-10", name: "DYQ480-4.1-10连接座" },
  { key: "DYQ480-4.1-11", name: "DYQ480-4.1-11连接条" },
  { key: "DYQ480-4.2-03", name: "DYQ480-4.2-03挡书贴左架" },
  { key: "DYQ480-4.3-02", name: "DYQ480-4.3-02挡书贴右架" },
  { key: "DYQ480-4.-65", name: "DYQ480-4.-65上中支撑横挡" },
  { key: "DYQ480-5-1", name: "DYQ480-5-1底座" },
  { key: "DYQ480-5-3", name: "DYQ480-5-3压板" },
  { key: "DYQ480-5-5", name: "DYQ480-5-5定位片" },
  { key: "DYQ480-5-6", name: "DYQ480-5-6定位销" },
  { key: "DYQ480-5-7A", name: "DYQ480-5-7A右定位块" },
  { key: "DYQ480-5-7B", name: "DYQ480-5-7B右定位块" },
  { key: "DYQ480-5-8", name: "DYQ480-5-8轴挡" },
  { key: "DYQ480-5-9", name: "DYQ480-5-9固定轴" },
  { key: "DYQ480-5-11", name: "DYQ480-5-11齿轮" },
  { key: "DYQ480-5-15", name: "DYQ480-5-15轴挡" },
  { key: "DYQ480-5-19-00", name: "DYQ480-5-19／00气路固定块" },
  { key: "DYQ480-5-19-2", name: "DYQ480-5-19／2橡胶衬垫" },
  { key: "DYQ480-5-20", name: "DYQ480-5-20油路固定块" },
  { key: "DYQ480-5-23", name: "DYQ480-5-23定位销" },
  { key: "DYQ480-5-27-00", name: "DYQ480-5-27／00导向座" },
  { key: "DYQ480-5-28", name: "DYQ480-5-28左搁角座" },
  { key: "DYQ480-5-32", name: "DYQ480-5-32右搁角座" },
  { key: "DYQ480-5-34", name: "DYQ480-5-34垫圈" },
  { key: "DYQ480-5-35", name: "DYQ480-5-35轴" },
  { key: "DYQ480-5-36", name: "DYQ480-5-36端盖" },
  { key: "DYQ480-5-37", name: "DYQ480-5-37小轴" },
  { key: "DYQ480-5-38", name: "DYQ480-5-38垫圈" },
  { key: "DYQ480-5-39", name: "DYQ480-5-39垫圈" },
  { key: "DYQ480-5-40", name: "DYQ480-5-40齿轮" },
  { key: "DYQ480-5-41", name: "DYQ480-5-41定位板" },
  { key: "DYQ480-5-42", name: "DYQ480-5-42垫块" },
  { key: "DYQ480-5-45", name: "DYQ480-5-45挡盖" },
  { key: "DYQ480-5-48A", name: "DYQ480-5-48A螺栓" },
  { key: "DYQ480-5-48B", name: "DYQ480-5-48B螺栓" },
  { key: "DYQ480-5-49", name: "DYQ480-5-49垫圈" },
  { key: "DYQ480-5-50", name: "DYQ480-5-50键" },
  { key: "DYQ480-5-52", name: "DYQ480-5-52挡圈" },
  { key: "DYQ480-5-53", name: "DYQ480-5-53罩壳撑" },
  { key: "DYQ480-5.1-3", name: "DYQ480-5.1-3接头" },
  { key: "DYQ480-5.1-4", name: "DYQ480-5.1-4接头" },
  { key: "DYQ480-5.1-5", name: "DYQ480-5.1-5异径内接头" },
  { key: "DYQ480A2-5", name: "DYQ480A2-5轴" },
  { key: "DYQ480A-1-2", name: "DYQ480A-1-2轴承套" },
  { key: "DYQ480A-1-3", name: "DYQ480A-1-3挡圈" },
  { key: "DYQ480A-1-4", name: "DYQ480A-1-4隔圈" },
  { key: "DYQ480A-1-5", name: "DYQ480A-1-5咬爪轴" },
  { key: "DYQ480A-1-8", name: "DYQ480A-1-8定位块" },
  { key: "DYQ480A-1-9", name: "DYQ480A-1-9咬纸凸轮" },
  { key: "DYQ480A-1-10", name: "DYQ480A-1-10分纸凸轮" },
  { key: "DYQ480A-1-11", name: "DYQ480A-1-11大链轮" },
  { key: "DYQ480A-1-12", name: "DYQ480A-1-12端盖" },
  { key: "DYQ480A-1-13", name: "DYQ480A-1-13咬纸轮轴" },
  { key: "DYQ480A-1-15", name: "DYQ480A-1-15定位套" },
  { key: "DYQ480A-1-16", name: "DYQ480A-1-16咬纸边轮" },
  { key: "DYQ480A-1-17", name: "DYQ480A-1-17吸气凸轮" },
  { key: "DYQ480A-1-18", name: "DYQ480A-1-18吸气阀" },
  { key: "DYQ480A-1-19", name: "DYQ480A-1-19吸气阀挡盖" },
  { key: "DYQ480A-2-1", name: "DYQ480A-2-1链轮" },
  { key: "DYQ480A-2-2", name: "DYQ480A-2-2链轮座" },
  { key: "DYQ480A-2-3", name: "DYQ480A-2-3垫片" },
  { key: "DYQ480A-2-4", name: "DYQ480A-2-4小轴" },
  { key: "DYQ480A-2-6", name: "DYQ480A-2-6摆杆" },
  { key: "DYQ480A-2-7", name: "DYQ480A-2-7分纸凸轮" },
  { key: "DYQ480A-2-8", name: "DYQ480A-2-8联轴节" },
  { key: "DYQ480A-2-9", name: "DYQ480A-2-9轴承套" },
  { key: "DYQ480A-2-10", name: "DYQ480A-2-10吸气阀" },
  { key: "DYQ480A-2-11", name: "DYQ480A-2-11阀门外挡盖" },
  { key: "DYQ480A-2-13", name: "DYQ480A-2-13阀门外挡盖调节器" },
  { key: "DYQ480A-2-14", name: "DYQ480A-2-14调节手轮" },
  { key: "DYQ480A-2-15", name: "DYQ480A-2-15敲书凸轮" },
  { key: "DYQ480A-2-16", name: "DYQ480A-2-16敲书凸轮" },
  { key: "DYQ480A-2-17", name: "DYQ480A-2-17挡圈" },
  { key: "DYQ480A-3-1", name: "DYQ480A-3-1轴" },
  { key: "DYQ480A-3-2", name: "DYQ480A-3-2摆杆" },
  { key: "DYQ480A-3-3", name: "DYQ480A-3-3分纸凸轮" },
  { key: "DYQ480A-4-31", name: "DYQ480A-4-31垫圈" },
  { key: "DYQ480A-4-44", name: "DYQ480A-4-44连接长销" },
  { key: "DYQ480A-4-62", name: "DYQ480A-4-62薄垫片" },
  { key: "DYQ480A-4.2-01", name: "DYQ480A-4.2-01支紧钉" },
  { key: "DYQ480A-4.2-02", name: "DYQ480A-4.2-02轴套" },
  { key: "DYQ480A-4.2-03", name: "DYQ480A-4.2-03摆杆" },
  { key: "DYQ480A-4.2-4", name: "DYQ480A-4.2-4涨紧轮" },
  { key: "DYQ480A-4.2-05", name: "DYQ480A-4.2-05隔圈" },
  { key: "DYQ480A-4.2-06", name: "DYQ480A-4.2-06固定块" },
  { key: "DYQ480A-4.3-01", name: "DYQ480A-4.3-01垫圈" },
  { key: "DYQ480A-4.3-02", name: "DYQ480A-4.3-02方撑挡" },
  { key: "DYQ480A-4.4-01", name: "DYQ480A-4.4-01拉簧桩头" },
  { key: "DYQ480A-4.4-02", name: "DYQ480A-4.4-02固定拉簧桩头" },
  { key: "DYQ480A-4.4-03", name: "DYQ480A-4.4-03小轴" },
  { key: "DYQ480A-4.5-01", name: "DYQ480A-4.5-01螺杆" },
  { key: "DYQ480A-4.5-02", name: "DYQ480A-4.5-02铰制孔螺钉" },
  { key: "DYQ480A-4.5-03", name: "DYQ480A-4.5-03连接螺杆" },
  { key: "DYQ480A-4.6-1", name: "DYQ480A-4.6-1偏心轴套" },
  { key: "DYQ480A-4.6-02-1", name: "DYQ480A-4.6-02-1吸气嘴" },
  { key: "DYQ480A-4.6-2-02", name: "DYQ480A-4.6-2／02吸气管头" },
  { key: "DYQ480A-4.6-3-00", name: "DYQ480A-4.6-3-00吸气嘴杆" },
  { key: "DYQ480A-4.6-3-00(1)", name: "DYQ480A-4.6-3∕00吸气嘴摆动轴" },
  { key: "DYQ480A-4.6-04", name: "DYQ480A-4.6-04压块" },
  { key: "DYQ480A-4.6-5", name: "DYQ480A-4.6-5偏心轴套" },
  { key: "DYQ480A-4.7-02", name: "DYQ480A-4.7-02小轴" },
  { key: "DYQ480A-4.7-04", name: "DYQ480A-4.7-04垫座" },
  { key: "DYQ480A-4.8-02", name: "DYQ480A-4.8-02垫头" },
  { key: "DYQ480A-4.8-04", name: "DYQ480A-4.8-04连接块" },
  { key: "DYQ480A-4.8-05", name: "DYQ480A-4.8-05垫头" },
  { key: "DYQ480A-4.8-07", name: "DYQ480A-4.8-07挡书贴挂脚" },
  { key: "DYQ480A-4.10-01", name: "DYQ480A-4.10-01轴套" },
  { key: "DYQ480A-4.10-02", name: "DYQ480A-4.10-02轴" },
  { key: "DYQ480A-4.10-03", name: "DYQ480A-4.10-03连接轴套" },
  { key: "DYQ480A-4.11-01", name: "DYQ480A-4.11-01" }]

module.exports = {
  parts: parts
}