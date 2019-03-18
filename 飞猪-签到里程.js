auto.waitFor();
var Robot = require("./common/Robot.js");
var robot = new Robot();
var Unlock = require("./common/Unlock.js");
var unlock = new Unlock();
robot.before();

unlock.unlock();
sleep(2000);



robot.kill("com.taobao.trip");
sleep(2000);
launch("com.taobao.trip");
waitForActivity("com.taobao.trip.home.HomeActivity")
sleep(5000);
robot.clickRegTextCenter("\\+\\d+里程"); //进入签到页按钮
sleep(4000);
robot.clickRegDescCenter("签到\\+\\d+里程");
sleep(2000);
robot.kill("com.taobao.trip");
robot.after();