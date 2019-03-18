auto.waitFor();
var Robot = require("./common/Robot.js");
var robot = new Robot();
var Unlock = require("./common/Unlock.js");
var unlock = new Unlock();
robot.before();

unlock.unlock();
sleep(2000);

robot.kill("com.smzdm.client.android");
sleep(2000);
launch("com.smzdm.client.android");
waitForActivity("com.smzdm.client.android.activity.HomeActivity")
sleep(5000);


robot.clickTextCenter("我的"); //进入我的页面按钮
sleep(4000);
robot.clickTextCenter("签到"); //签到按钮
sleep(2000);
robot.kill("com.smzdm.client.android");
robot.after();