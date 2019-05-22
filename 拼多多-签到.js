auto.waitFor();
var Maid = require("./common/Maid.js");
var maid = new Maid("com.xunmeng.pinduoduo");
var Unlock = require("./common/Unlock.js");
var unlock = new Unlock();
maid.before();
unlock.unlock();
maid.sleep(2);



maid.kill();
maid.sleep(2);
maid.launchActivity("com.xunmeng.pinduoduo.ui.activity.HomeActivity");
maid.sleep(5);
if (id("h_").exists()) {
    maid.clickIdCenter("h_"); //有时有广告弹窗，需要关闭
    maid.sleep(1);
}
if (id("i_").exists()) {
    maid.clickIdCenter("i_"); //有时有广告弹窗，需要关闭
    maid.sleep(1);
}
if (id("ii").exists()) {
    maid.clickIdCenter("ii"); //有时有广告弹窗，需要关闭
    maid.sleep(1);
}
if (id("is").exists()) {
    maid.clickIdCenter("is"); //有时有广告弹窗，需要关闭
    maid.sleep(1);
}
maid.clickTextCenter("现金签到"); //进入签到页按钮
maid.sleep(4);
maid.clickTextCenter("签到领微信零钱"); //签到按钮
maid.sleep(2);
maid.click(520, 1470); //签到完成的弹窗关闭
maid.sleep(2);


//定时领红包
maid.clickTextCenter("定时领红包");
maid.sleep(4);
className("android.widget.Image").text("daily_bonus_mid_limited_reward_btn").findOne().parent().click(); //点击弹出框'开'按钮
maid.sleep(2);
maid.clickTextCenter("选我"); //福利3选1弹窗
maid.sleep(2);
maid.back();
maid.sleep(2);


//抢红包
maid.clickTextCenter("抢红包");
maid.sleep(4);
maid.click(934, 822); //官方账号红包
maid.sleep(2);
maid.click(540, 1220); //点击弹出框'开'按钮
maid.sleep(2);
maid.back();
maid.sleep(2);


//逛街领红包
maid.clickTextCenter("逛街领红包");
maid.sleep(1);
for (let i = 0; i < 25; i++) {
    maid.sleep(3);
    scrollDown();
}
maid.sleep(4);
maid.back();
maid.sleep(1);
maid.clickTextCenter("不赚钱,离开");
maid.sleep(2);



maid.kill();
maid.after();