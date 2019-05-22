// 确保支付宝首页添加了[体育服务]应用
auto.waitFor();
var Maid = require("./common/Maid.js");
var maid = new Maid("com.eg.android.AlipayGphone");
var Unlock = require("./common/Unlock.js");
var unlock = new Unlock();
maid.before();
unlock.unlock();
maid.sleep(2);


maid.kill();
maid.sleep(2);
maid.launchActivity("com.eg.android.AlipayGphone.AlipayLogin");
maid.sleep(5);
if (id("update_cancel_tv").exists()) { // 关闭更新弹窗
    maid.clickIdCenter("update_cancel_tv");
    maid.sleep(2);
}
maid.clickTextCenter("体育服务");
maid.sleep(4);
maid.clickDescCenter("早起打卡 早起有红包");
maid.sleep(4);
maid.clickDescCenter("立即报名瓜分奖励金");



maid.kill();
maid.after();