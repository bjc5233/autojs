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
shell("svc wifi disable", true)
shell("svc data enable", true)
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


//进去签到页按钮
if (id("listview_header_no_hider_ll_sign_in").exists()) {
    robot.clickIdCenter("listview_header_no_hider_ll_sign_in");
    sleep(4000);
}

robot.clickTextCenter("签到"); //签到按钮
sleep(2000);
robot.kill("com.sh.cm.shydhn");

shell("svc wifi enable", true);
shell("svc data disable", true);
sleep(2000);
toast("结束...")
exit();



//========================= 兑换流量包 =========================
sleep(120000); //两分钟后
launchApp("上海移动和你")
waitForActivity("com.richeninfo.cm.shydhn.ui.v4.ui.activity.HomeActivity")
sleep(5000)
//弹出的广告
if (id("iv_close1").exists()) {
    id("iv_close1").findOne().click();
}
sleep(2000);
click(979, 2077); //我的
sleep(4000);
click("我的礼包");


sleep(4000);
click(950, 685); //兑换1
sleep(2000);
click("确定");
sleep(5000);
click(950, 685); //兑换2
sleep(2000);
click("确定");
sleep(2000);
shell("am force-stop com.sh.cm.shydhn", true)
//==================================================


shell("svc wifi enable", true)
shell("svc data disable", true)
