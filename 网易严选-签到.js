auto.waitFor();
var Maid = require("./common/Maid.js");
var maid = new Maid("com.netease.yanxuan");
var Unlock = require("./common/Unlock.js");
var unlock = new Unlock();
maid.before();
unlock.unlock();
maid.sleep(2);


maid.kill();
maid.sleep(2);
maid.launchActivity("com.netease.yanxuan.module.mainpage.activity.MainPageActivity");
maid.sleep(5);
if (id("btn_alert_negative").exists()) {
    maid.clickIdCenter("btn_alert_negative"); //app更新弹出框
    maid.sleep(1);
}
if (id("iv_trans_cancel_icon").exists()) {
    maid.clickIdCenter("iv_trans_cancel_icon"); //广告\活动弹出框
    maid.sleep(1);
}
maid.clickSelectorCenter(id("txt_mainpage_tab_title").text("个人"));
maid.sleep(4);
maid.clickIdCenter("user_points");
maid.sleep(4);
maid.clickTextCenter("签 到");
maid.sleep(2);
maid.click(560, 1120); // 签到成功后翻牌抽红包
maid.sleep(2);
maid.kill();
maid.after();