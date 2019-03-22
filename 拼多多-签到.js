auto.waitFor();
var Robot = require("./common/Robot.js");
var robot = new Robot();
var Unlock = require("./common/Unlock.js");
var unlock = new Unlock();
robot.before();

unlock.unlock();
sleep(2000);



robot.kill("com.xunmeng.pinduoduo");
sleep(2000);
launch("com.xunmeng.pinduoduo");
waitForActivity("com.xunmeng.pinduoduo.ui.activity.HomeActivity");
sleep(5000);

if (id("h_").exists()) {
    robot.clickIdCenter("h_"); //有时有广告弹窗，需要关闭
    sleep(1000);
}
robot.clickTextCenter("现金签到"); //进入签到页按钮
sleep(3000);
robot.clickTextCenter("签到领微信零钱"); //签到按钮
sleep(2000);
robot.click(520, 1470); //签到完成的弹窗关闭
sleep(2000);


//定时领红包
robot.clickTextCenter("定时领红包");
sleep(4000);
className("android.widget.Image").text("daily_bonus_mid_limited_reward_btn").findOne().parent().click(); //点击弹出框'开'按钮
sleep(2000);
robot.clickTextCenter("选我"); //福利3选1弹窗
sleep(2000);
robot.back();
sleep(2000);


//抢红包
robot.clickTextCenter("抢红包");
sleep(4000);
robot.click(934, 822); //官方账号红包
sleep(2000);
robot.click(540, 1220); //点击弹出框'开'按钮
sleep(2000);
robot.back();
sleep(2000);


//逛街领红包
robot.clickTextCenter("逛街领红包");
sleep(1000);
for (let i = 0; i < 25; i++) {
    sleep(3000);
    scrollDown();
}
sleep(4000);
robot.back();
sleep(1000);
robot.clickTextCenter("不赚钱,离开");
sleep(2000);



robot.kill("com.xunmeng.pinduoduo");
robot.after();