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



robot.kill("com.xunmeng.pinduoduo");
sleep(2000);
launch("com.xunmeng.pinduoduo");
waitForActivity("com.xunmeng.pinduoduo.ui.activity.HomeActivity");
sleep(5000);

robot.clickTextCenter("现金签到"); //进入签到页按钮
sleep(3000);
robot.clickTextCenter("签到领微信零钱"); //签到按钮
sleep(2000);

robot.kill("om.xunmeng.pinduoduo");
toast("结束...")
exit();