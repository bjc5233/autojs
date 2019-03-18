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
robot.clickTextCenter("我的");
sleep(4000);
robot.clickTextCenter("支付宝会员");
sleep(4000);
robot.clickDescCenter("领积分");
sleep(4000);
while (desc("点击领取").exists()) {
    robot.clickDescCenter("点击领取");
    sleep(6000);
}

robot.kill("com.eg.android.AlipayGphone");
robot.after();