// 确保支付宝首页添加了[体育服务]应用
auto.waitFor();
var Robot = require("./common/Robot.js");
var robot = new Robot();
var Unlock = require("./common/Unlock.js");
var unlock = new Unlock();
robot.before();

unlock.unlock();
sleep(2000);


robot.kill("com.eg.android.AlipayGphone");
sleep(2000);
launch("com.eg.android.AlipayGphone");
waitForActivity("com.eg.android.AlipayGphone.AlipayLogin")
sleep(5000);
robot.clickTextCenter("体育服务");
sleep(4000);
robot.clickDescCenter("早起打卡 早起有红包");
sleep(4000);
robot.clickDescCenter("立即报名瓜分奖励金");








robot.kill("com.eg.android.AlipayGphone");
robot.after();