const parts = [
  { key: "020.0001", name: "020.0001螺钉" },
  { key: "020.0920", name: "020.0920涨紧轮支架" },
  { key: "020.1803", name: "020.1803滚子" },
  { key: "021.1501", name: "021.1501布带轮" },
  { key: "022.0821", name: "022.0821滚轮" },
  { key: "034.0201", name: "034.0201 拉簧" },
  { key: "034.0301", name: "034.0301 弹簧" },
  { key: "034.0502(DQ8B-3-19)", name: "034.0502（DQ8B-3-19) 拉簧" },
  { key: "034.0660(DQ8B-3-6)", name: "034.0660（DQ8B-3-6) 拉簧" },
  { key: "034.0703(DQ8B-3-17)", name: "034.0703（DQ8B-3-17) 拉簧" },
  { key: "034.0956", name: "0034.0956折搭机1529拉簧攀" },
  { key: "209.4130.3", name: "209.4130.3 轴" },
  { key: "0210.0695.4", name: "0210.0695.4 咬牙" },
  { key: "218-0200-B3", name: "218-0200-B3精密达刮胶板" },
  { key: "235.0432.4", name: "235.0432.4小齿轮" },
  { key: "235.0803.2", name: "235.0803.2弯脚支撑板" },
  { key: "235.0827.3", name: "235.0827.3燕尾板" },
  { key: "235.0828.4", name: "235.0828.4标尺板" },
  { key: "235.0828.4(2)", name: "235.0828.4标尺板 (2)" },
  { key: "235.1182.4", name: "235.1182.4侧书轮支撑板" },
  { key: "235.1243.4", name: "235.1243.4马天尼335链轮" },
  { key: "235.1406.3", name: "235.1406.3检测座" },
  { key: "235.1409.4", name: "235.1409.4轴" },
  { key: "235.1425.4", name: "235.1425.4固定撞块" },
  { key: "235.1436.4", name: "235.1436.4检测杆" },
  { key: "235.1442.4", name: "235.1442.4手柄" },
  { key: "235.1443", name: "235.1443" },
  { key: "235.1443.4", name: "235.1443.4滑板" },
  { key: "235.1444.3", name: "235.1444.3轴" },
  { key: "235.1736.3", name: "235.1736.3长-滑动杆" },
  { key: "235.1736.3(2)", name: "235.1736.3短-滑动杆 (2)" },
  { key: "235.1750.4", name: "235.1750.4轴" },
  { key: "235.1754.4", name: "235.1754.4拉簧攀" },
  { key: "235.1768.4", name: "235.1768.4小轴" },
  { key: "235.1769.4", name: "235.1769.4夹紧块" },
  { key: "235.1770.4", name: "235.1770.4钉头钩" },
  { key: "235.2013.4", name: "235.2013.4小齿轮轴" },
  { key: "235.2327.4", name: "235.2327.4传动齿轮" },
  { key: "235.2340.4", name: "235.2340.4齿轮" },
  { key: "0243.0728.4", name: "0243.0728.4 角铁" },
  { key: "0262.2002.4", name: "0262.2002.4 阀门外挡盖调节器" },
  { key: "279.1558.4", name: "279.1558.4挡纸片" },
  { key: "279.2018.4", name: "279.2018.4 咬牙" },
  { key: "279.2049.3", name: "279.2049.3扭簧" },
  { key: "279.2050.4", name: "279.2050.4 牙垫" },
  { key: "279.2057.4", name: "279.2057.4 咬牙压板" },
  { key: "279.2077.4", name: "279.2077.4护套" },
  { key: "279.2316.4", name: "279.2316.4 压书架扭簧" },
  { key: "279.2567.4", name: "279.2567.4 阀门内挡盖" },
  { key: "300.1216.4", name: "300.1216.4小轴" },
  { key: "300.1275.2", name: "300.1275.2齿轴" },
  { key: "300.1614.4", name: "300.1614.4螺销" },
  { key: "300.1615.4", name: "300.1615.4推杆" },
  { key: "300.1623.4", name: "300.1623.4连接板" },
  { key: "300.1624.4", name: "300.1624.4支承" },
  { key: "300.1807.4", name: "300.1807.4上链轨" },
  { key: "300.1809.4", name: "300.1809.4上链轨" },
  { key: "300.2019.4(short)", name: "300.2019.4检测触杆（短)" },
  { key: "300.2831.4", name: "300.2831.4平节轮" },
  { key: "300.2832.3", name: "300.2832.3摆杆" },
  { key: "300.2961.4", name: "300.2961.4小轴" },
  { key: "300.2977.4", name: "300.2977.4同步带轮" },
  { key: "300.3857", name: "300.3857" },
  { key: "300.3857.4", name: "300.3857.4导向块" },
  { key: "306.1050.4(2)", name: "306.1050.4 压书架小轴 (2)" },
  { key: "306.1051.4(pair)", name: "306.1051.4 压书架 一长（一短） (2)" },
  { key: "306.1080.3", name: "306.1080.3链轮" },
  { key: "306.1244.9", name: "306.1244.9 分纸舌头" },
  { key: "306.2125.9", name: "306.2125.9 刁纸轮" },
  { key: "306.2128", name: "306.2128" },
  { key: "306.2128.9", name: "306.2128.9 分页轮" },
  { key: "306.2217.9", name: "306.2217.9 支架" },
  { key: "306.2249.4", name: "306.2249.4 轴" },
  { key: "306.2349.4", name: "306.2349.4 轴" },
  { key: "306.2350.4", name: "306.2350.4轴" },
  { key: "306.2350.5", name: "306.2350.5 轴" },
  { key: "306.2353.4", name: "306.2353.4 定位块" },
  { key: "888.0128.3", name: "888.0128.3 薄垫片" },
  { key: "888.0130.3", name: "888.0130.3 拉簧套" },
  { key: "888.0233.4", name: "888.0233.4 吸嘴" },
  { key: "888.0253.3", name: "888.0253.3 阀门内挡盖" },
  { key: "888.0254.3", name: "888.0254.3 阀门外挡盖" },
  { key: "888.0334.4", name: "888.0334.4 右分纸勾" },
  { key: "888.0335.4", name: "888.0335.4 左分纸勾" },
  { key: "888.0338.4", name: "888.0338.4 橡皮压板" },
  { key: "888.0409.4", name: "888.0409.4（小头）定书块左 右" },
  { key: "888.0410.4", name: "888.0410.4 定位块塞块" },
  { key: "888.0437.3", name: "888.0437.3 中间压书架" },
  { key: "888.0443.4", name: "888.0443.4 中间压书头" },
  { key: "888.1003.4", name: "888.1003.4齿轮" },
  { key: "888.1004.4", name: "888.1004.4 齿轮" },
  { key: "889.0103.4", name: "889.0103.4撞块" },
  { key: "889.0170.4", name: "889.0170.4鼓齿轮" },
  { key: "889.0188.4", name: "889.0188.4布带轮" },
  { key: "889.0304.4", name: "889.0304.4靠模轴支架" },
  { key: "889.0353.4", name: "889.0353.4靠模轴支架" },
  { key: "889.0677.3", name: "889.0677.3检测钩" },
  { key: "890.0124.3", name: "890.0124.3 挡书片" },
  { key: "890.0309.3", name: "890.0309.3 齿轮" },
  { key: "890.0331.4", name: "890.0331.4 链轮芯轴" },
  { key: "890.0355.4", name: "890.0355.4 链轮" },
  { key: "890.0366.4", name: "890.0366.4 滚柱" },
  { key: "890.0372.1", name: "890.0372.1右凸轮" },
  { key: "890.0373.1", name: "890.0373.1 左凸轮" },
  { key: "890.0417.4", name: "890.0417.4滑轴链轮" },
  { key: "890.0418.4", name: "890.0418.4键" },
  { key: "890.0419.4", name: "890.0419.4 胶带轮" },
  { key: "890.0421.3", name: "890.0421.3调节支架" },
  { key: "890.0423.3", name: "890.0423.3 中间胶带轮" },
  { key: "890.0428.4", name: "890.0428.4挡轨夹板" },
  { key: "890.0432.4", name: "890.0432.4 侧边胶带轮立轴" },
  { key: "890.0433.4", name: "890.0433.4 立轴衬套" },
  { key: "890.0434.4", name: "890.0434.4立轴衬套" },
  { key: "890.0435.4", name: "890.0435.4 立轴衬套" },
  { key: "890.0436.4", name: "890.0436.4 立轴衬套" },
  { key: "890.0437.4", name: "890.0437.4 立轴衬套" },
  { key: "890.0439.4", name: "890.0439.4 胶带轮" },
  { key: "890.0440.4", name: "890.0440.4 链轮" },
  { key: "890.0441.4", name: "890.0441.4 垫圈" },
  { key: "890.0451.4", name: "890.0451.4 滚轮支架" },
  { key: "890.0455.2", name: "890.0455.2支架" },
  { key: "890.0486.3", name: "890.0486.3 螺栓" },
  { key: "890.0495.3", name: "890.0495.3中间滚轮垫圈" },
  { key: "890.0497.4", name: "890.0497.4 垫圈" },
  { key: "890.0508.2", name: "890.0508.2 导轨镶板" },
  { key: "890.0522.1", name: "890.0522.1左侧刀胎导轨" },
  { key: "890.0522.2", name: "890.0522.2右侧刀胎导轨" },
  { key: "890.0633.4", name: "890.0633.4 滚柱" },
  { key: "890.0710.4", name: "890.0710.4 挡规" },
  { key: "890.0731.3", name: "890.0731.3 前挡规座" },
  { key: "890.0736.4", name: "890.0736.4 挡规支架" },
  { key: "890.0804.3", name: "890.0804.3 链轮" },
  { key: "890.0813.4", name: "890.0813.4 胶带轮" },
  { key: "890.0867.4", name: "890.0867.4 螺栓" },
  { key: "890.0878.3", name: "890.0878.3 左右托板" },
  { key: "890.0909.4(2)", name: "890.0909.4 压板弹簧杆 (2)" },
  { key: "890.1007.3", name: "890.1007.3 毛刷架" },
  { key: "890.1007.3A", name: "890.1007.3A  MAOSHAZHO" },
  { key: "890.1016.3", name: "890.1016.3侧刀压板 薄" },
  { key: "890.1400.3(1)", name: "890.1400.3撑规摇臂（1）" },
  { key: "890.1400.3(2)", name: "890.1400.3挡规挂臂（2）" },
  { key: "890.1402.4(2)", name: "890.1402.4 敲书轴 (2)" },
  { key: "890.1517.2", name: "890.1517.2 左前托板支架" },
  { key: "890.1525.2", name: "890.1525.2 右前带轮支架" },
  { key: "890.1529.3", name: "890.1529.3支架" },
  { key: "890.1603.3_890.1604.3", name: "890.1603.3小螺旋齿轮  890.1604.3大螺旋齿轮" },
  { key: "890.2605.1", name: "890.2605.1双联下刀底板" },
  { key: "890.2606.2", name: "890.2606.2 左双联下刀胎" },
  { key: "890.2609.1", name: "890.2609.1双联刀胎" },
  { key: "890.2662.2", name: "890.2662.2 右双联下刀胎" },
  { key: "890.2820.3", name: "890.2820.3 齿条" },
  { key: "890.3186.4", name: "890.3186.4 接书支架接块" },
  { key: "890.3303.2", name: "890.3303.2 导轨镶板 右" },
  { key: "890.3315.2", name: "890.3315.2 导轨镶板 左" },
  { key: "890.3903.4", name: "890.3903.4 偏心轴座" },
  { key: "890.04965.4", name: "890.04965.4 中间滚轮" },
  { key: "893.1755.3", name: "893.1755.3马天尼胶装凸轮" },
  { key: "1294.5031.4", name: "1294.5031.4轮架" },
  { key: "DQ8B-8-63-105_65", name: "马天尼DQ8B-8-63 105;65 法兰盘" },
  { key: "DQ8B-8-63-105_65", name: "马天尼DQ8B-8-63 105；45 法兰盘" }]

module.exports = {
  parts: parts
}