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


robot.kill("com.eg.android.AlipayGphone");
sleep(2000);
launch("com.eg.android.AlipayGphone");
waitForActivity("com.eg.android.AlipayGphone.AlipayLogin")
sleep(5000);
robot.clickTextCenter("我的");
sleep(2000);
robot.clickTextCenter("支付宝会员");
sleep(2000);
robot.clickDescCenter("领积分");
sleep(2000);
while (desc("点击领取").exists()) {
    robot.clickDescCenter("点击领取");
    sleep(6000);
}

robot.kill("com.eg.android.AlipayGphone");
toast("结束...")
exit();