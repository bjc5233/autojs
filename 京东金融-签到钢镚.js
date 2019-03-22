auto.waitFor();
var Robot = require("./common/Robot.js");
var robot = new Robot();
var Unlock = require("./common/Unlock.js");
var unlock = new Unlock();
robot.before();

unlock.unlock();
sleep(2000);


robot.kill("com.jd.jrapp");
sleep(2000);
robot.shell("am broadcast -a com.jozein.xedgepro.PERFORM -e data 43830233030236F6D6E2A646E2A6271607070236F6D6E2A646E2A627160707E2D61696E6E2163636F657E647E2D656E25796E2D41696E6D456143647966796479702165747F6A637D25254435224145214345254435224835293345254935283735293135254835293545283440206020602");
waitForActivity("com.jd.jrapp.main.account.me.ui.MainMeActivity");
sleep(5000);
robot.clickTextCenter("签到");
sleep(5000);
robot.clickDescCenter("签到领钢镚");
sleep(3000);
robot.click(955, 915); //签到成功弹窗关闭
sleep(1000);
robot.click(980, 1850); //进入"双签领京豆"
sleep(4000);
robot.clickDescCenter("完成双签领取");
sleep(2000);
robot.clickDescCenter("立即领取");
sleep(2000);

robot.kill("com.jd.jrapp");
robot.after();