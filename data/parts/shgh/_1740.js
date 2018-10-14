const parts = [{ key: "1704-01.02", name: "1704-01.02连杆" },
{ key: "1704-01.03", name: "1704-01.03左支承座" },
{ key: "1704-02.02.01", name: "1704-02.02.01左凸轮" },
{ key: "1704-02.07.01", name: "1704-02.07.01齿轮座" },
{ key: "1704-02.14", name: "1704-02.14调节轴块" },
{ key: "1704-02-13", name: "1704-02-13托环" },
{ key: "1704-03.01.01_02", name: "1704-03.01.01+02咬牙组合" },
{ key: "1704-03.03.01", name: "1704-03.03.01递纸牙排副本" },
{ key: "1704-04.02", name: "1704-04.02右支承脚" },
{ key: "1704-05.02", name: "1704-05.02压簧套" },
{ key: "1704-06.01.01", name: "1704-06.01.01压簧撑杆" },
{ key: "1704-06.04", name: "1704-06.04摆脚" },
{ key: "1704-08", name: "1704-08弹簧-国产、进口" },
{ key: "1705.04.02", name: "1705.04.02支座" },
{ key: "1706.01.02.02_03", name: "1706.01.02.02+03橡皮版夹" },
{ key: "1707.02.12", name: "1707.02.12锁紧圈" },
{ key: "1707-02.00", name: "1707-02.00版夹" },
{ key: "1707-02.13", name: "1707-02.13锁紧轴" },
{ key: "1707-02.16", name: "1707-02.16弹簧" },
{ key: "1707-02.20", name: "1707-02.20锁紧轴" },
{ key: "1710-02.02", name: "1710-02.02墨斗钢片" },
{ key: "1714-02.01", name: "1714-02.01摆杆" },
{ key: "1715-02.03", name: "1715-02.03右摆脚" },
{ key: "1718-01.01", name: "1718-01.01碰脚" },
{ key: "1719-01.02", name: "1719-01.02摆臂" },
{ key: "1719-01.03", name: "1719-01.03桩头" },
{ key: "1719-01.04", name: "1719-01.04销轴" },
{ key: "1719-01.05", name: "1719-01.05销轴" },
{ key: "1719-01.06", name: "1719-01.06连接板" },
{ key: "1719-01.07", name: "1719-01.07垫板" },
{ key: "1719-02.01", name: "1719-02.01连杆" },
{ key: "1719-02.02", name: "1719-02.02轴头" },
{ key: "1719-02.03", name: "1719-02.03着墨辊离合杆" },
{ key: "1721-01.00", name: "1721-01.00右水胶架" },
{ key: "1721-01.01", name: "1721-01.01水胶座" },
{ key: "1721-01.02", name: "1721-01.02长筒套" },
{ key: "1721-02.01", name: "1721-02.01螺杆" },
{ key: "1721-02.02", name: "1721-02.02短套筒" },
{ key: "1721-05.00", name: "1721-05.00左水胶架" },
{ key: "1721-05.02", name: "1721-05.02短套筒" },
{ key: "1721-05.03", name: "1721-05.03螺杆" },
{ key: "1721-06.00", name: "1721-06.00左水胶架" },
{ key: "1721-06.01", name: "1721-06.01螺杆" },
{ key: "1721-06.02", name: "1721-06.02长套筒" },
{ key: "1721-09.01", name: "1721-09.01摇杆" },
{ key: "1721-11.01", name: "1721-11.01摆脚" },
{ key: "1721-12", name: "1721-12连杆" },
{ key: "1721-13.01", name: "1721-13.01摇臂" },
{ key: "1721-13.02", name: "1721-13.02桩头" },
{ key: "1721-13.03", name: "1721-13.03销轴" },
{ key: "1733-03.01", name: "1733-03.01前规摆臂" },
{ key: "1734-01.01", name: "1734-01.01刮墨刀" },
{ key: "1738-01", name: "1738-01接纸凸轮" },
{ key: "1738-03.01", name: "1738-03.01左半圆定导轨" },
{ key: "1738-03.02", name: "1738-03.02导轨" },
{ key: "1738-03.03", name: "1738-03.03外导轨左" },
{ key: "1738-03.04", name: "1738-03.04左后导轨" },
{ key: "1738-03.06", name: "1738-03.06导轨" },
{ key: "1738-03.07", name: "1738-03.07左半圆调整导轨" },
{ key: "1738-03.09", name: "1738-03.09右后导轨" },
{ key: "1738-03.11", name: "1738-03.11导轨" },
{ key: "1738-03.14", name: "1738-03.14导轨" },
{ key: "1738-04.01", name: "1738-04.01滑销" },
{ key: "1738-04.02", name: "1738-04.02链接头" },
{ key: "1738-04.08", name: "1738-04.08滑块" },
{ key: "1738-04.13", name: "1738-04.13收纸牙片" },
{ key: "1738-04.21", name: "1738-04.21压簧" },
{ key: "1738-05.03", name: "1738-05.03偏心节" },
{ key: "1738-08.01.01", name: "1738-08.01.01链轮轴" },
{ key: "1738-08.01.03", name: "1738-08.01.03右链轮I" },
{ key: "1740(1738-04.00)", name: "1740（1738-04.00）收纸牙排" },
{ key: "1740-02.02", name: "1740-02.02线带轴" },
{ key: "1740-03", name: "1740-03链条圆导轨" },
{ key: "1742-01.01", name: "1742-01.01齐纸摆脚" },
{ key: "1750-02.00", name: "1750-02.00扳手" }]

module.exports = {
  parts: parts
}