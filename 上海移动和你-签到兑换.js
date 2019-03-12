// [上海移动和你-签到.js]执行后30分钟再执行
toast("开始...");
auto();
const WIDTH = Math.min(device.width, device.height);
const HEIGHT = Math.max(device.width, device.height);
setScreenMetrics(WIDTH, HEIGHT);

var Robot = require("./common/Robot.js");
var robot = new Robot();
var Unlock = require("./common/Unlock.js");
var unlock = new Unlock();
unlock.unlock();
sleep(2000);


//该APP在wifi下连接速度很慢, 转到移动数据连接
shell("svc wifi disable", true);
shell("svc data enable", true);
sleep(2000);



robot.kill("com.sh.cm.shydhn");
sleep(2000);
launch("com.sh.cm.shydhn");
waitForActivity("com.richeninfo.cm.shydhn.ui.v4.ui.activity.HomeActivity")
sleep(5000);

if (id("iv_close1").exists()) {
    robot.clickIdCenter("iv_close1"); //弹出的广告
    sleep(2000);
}
robot.click(979, 2077); //我的
sleep(5000);


robot.click(132, 1678); //我的礼包
sleep(4000);


while (text("兑换").exists()) {
    robot.clickTextCenter("兑换");
    sleep(1000);
    robot.clickTextCenter("确定");
    sleep(5000);
}
robot.kill("com.sh.cm.shydhn");

shell("svc wifi enable", true);
shell("svc data disable", true);
sleep(2000);
toast("结束...")
exit();